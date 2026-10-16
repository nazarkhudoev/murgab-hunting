import { test, expect } from "@playwright/test";
import {
  fetchYouTubeVideos,
  parseYouTubeDuration,
  formatYouTubeDuration,
} from "../src/lib/youtube-data";

const channel = "UC" + "a".repeat(22);
const id = (number: number) => `video${String(number).padStart(6, "0")}`;
const upload = (number: number) => ({
  snippet: {
    title: `Film ${number}`,
    thumbnails: {
      high: { url: `https://i.ytimg.com/vi/${id(number)}/hqdefault.jpg` },
    },
  },
  contentDetails: { videoId: id(number) },
});
const channelData = {
  items: [{ contentDetails: { relatedPlaylists: { uploads: "UU_uploads" } } }],
};

test("YouTube ISO duration parser handles seconds, minutes, hours, days and invalid input", () => {
  for (const [value, seconds] of [
    ["PT45S", 45],
    ["PT1M", 60],
    ["PT1M20S", 80],
    ["PT12M35S", 755],
    ["PT1H5M20S", 3920],
    ["P1DT2H", 93600],
    ["PT0S", 0],
    ["PT60.5S", 60.5],
  ] as const)
    expect(parseYouTubeDuration(value)).toBe(seconds);
  for (const value of [
    null,
    undefined,
    60,
    "",
    "P",
    "PT",
    "P1DT",
    "PT-1S",
    "PT1Mgarbage",
    "P1M",
    "PT99999999999999999999H",
  ])
    expect(parseYouTubeDuration(value)).toBeNull();
  expect(formatYouTubeDuration(522)).toBe("8:42");
  expect(formatYouTubeDuration(735)).toBe("12:15");
  expect(formatYouTubeDuration(3932)).toBe("1:05:32");
});

test("YouTube paginates, excludes 60-second videos, batches new IDs and preserves upload order", async () => {
  const calls: URL[] = [];
  const seconds: Record<string, string> = {
    [id(1)]: "PT60S",
    [id(2)]: "PT1M",
    [id(3)]: "PT61S",
    [id(4)]: "PT1M20S",
    [id(22)]: "invalid",
    [id(23)]: "PT2M",
    [id(24)]: "PT12M35S",
    [id(25)]: "PT1H5M20S",
    [id(26)]: "PT2M",
  };
  const fetcher: typeof fetch = async (input) => {
    const url = new URL(String(input));
    calls.push(url);
    if (url.pathname.endsWith("channels")) return Response.json(channelData);
    if (url.pathname.endsWith("playlistItems"))
      return Response.json(
        url.searchParams.has("pageToken")
          ? {
              items: [
                upload(3),
                ...Array.from({ length: 6 }, (_, index) => upload(index + 21)),
              ],
              nextPageToken: "not-needed",
            }
          : {
              items: Array.from({ length: 20 }, (_, index) =>
                upload(index + 1),
              ),
              nextPageToken: "page-two",
            },
      );
    return Response.json({
      items: url.searchParams
        .get("id")!
        .split(",")
        .filter((value) => value !== id(21))
        .reverse()
        .map((value) => ({
          id: value,
          contentDetails: { duration: seconds[value] || "PT45S" },
        })),
    });
  };
  const videos = await fetchYouTubeVideos("fake-key", channel, fetcher);
  expect(videos.map((video) => video.id)).toEqual(
    [3, 4, 23, 24, 25, 26].map(id),
  );
  expect(videos.map((video) => video.durationSeconds)).toEqual([
    61, 80, 120, 755, 3920, 120,
  ]);
  const playlists = calls.filter((url) =>
    url.pathname.endsWith("playlistItems"),
  );
  expect(playlists).toHaveLength(2);
  expect(playlists[1].searchParams.get("pageToken")).toBe("page-two");
  const batches = calls.filter((url) => url.pathname.endsWith("videos"));
  expect(batches).toHaveLength(2);
  expect(batches[0].searchParams.get("id")!.split(",")).toHaveLength(20);
  expect(batches[1].searchParams.get("id")!.split(",")).toEqual(
    [21, 22, 23, 24, 25, 26].map(id),
  );
});

test("YouTube stops after six qualifying videos without requesting another playlist page", async () => {
  const calls: URL[] = [];
  const videos = await fetchYouTubeVideos(
    "fake-key",
    channel,
    async (input) => {
      const url = new URL(String(input));
      calls.push(url);
      if (url.pathname.endsWith("channels")) return Response.json(channelData);
      if (url.pathname.endsWith("playlistItems"))
        return Response.json({
          items: Array.from({ length: 20 }, (_, index) => upload(index + 1)),
          nextPageToken: "unused",
        });
      return Response.json({
        items: Array.from({ length: 20 }, (_, index) => ({
          id: id(index + 1),
          contentDetails: { duration: "PT2M" },
        })),
      });
    },
  );
  expect(videos.map((video) => video.id)).toEqual([1, 2, 3, 4, 5, 6].map(id));
  expect(calls).toHaveLength(3);
});

test("YouTube returns fewer videos at playlist end and avoids duration calls for duplicate-only pages", async () => {
  let durationCalls = 0;
  const videos = await fetchYouTubeVideos(
    "fake-key",
    channel,
    async (input) => {
      const url = new URL(String(input));
      if (url.pathname.endsWith("channels")) return Response.json(channelData);
      if (url.pathname.endsWith("playlistItems"))
        return Response.json({
          items: [upload(1), upload(2)],
          ...(!url.searchParams.has("pageToken")
            ? { nextPageToken: "duplicates-only" }
            : {}),
        });
      durationCalls++;
      return Response.json({
        items: [
          { id: id(1), contentDetails: { duration: "PT2M" } },
          { id: id(2), contentDetails: { duration: "PT30S" } },
        ],
      });
    },
  );
  expect(videos.map((video) => video.id)).toEqual([id(1)]);
  expect(durationCalls).toBe(1);
});

test("YouTube terminates cyclic pagination tokens and fails closed for unknown durations", async () => {
  let playlistCalls = 0;
  const videos = await fetchYouTubeVideos(
    "fake-key",
    channel,
    async (input) => {
      const url = new URL(String(input));
      if (url.pathname.endsWith("channels")) return Response.json(channelData);
      if (url.pathname.endsWith("playlistItems"))
        return Response.json({
          items: [upload(++playlistCalls)],
          nextPageToken: "repeated-token",
        });
      return Response.json({
        items: [{ id: id(playlistCalls), contentDetails: {} }],
      });
    },
  );
  expect(videos).toEqual([]);
  expect(playlistCalls).toBe(2);
});

test("YouTube retains validated long videos if a later playlist page fails", async () => {
  const previous = console.error;
  console.error = () => {};
  try {
    const videos = await fetchYouTubeVideos(
      "fake-key",
      channel,
      async (input) => {
        const url = new URL(String(input));
        if (url.pathname.endsWith("channels"))
          return Response.json(channelData);
        if (url.pathname.endsWith("playlistItems"))
          return url.searchParams.has("pageToken")
            ? Response.json({}, { status: 403 })
            : Response.json({ items: [upload(1)], nextPageToken: "failure" });
        return Response.json({
          items: [{ id: id(1), contentDetails: { duration: "PT2M" } }],
        });
      },
    );
    expect(videos.map((video) => video.id)).toEqual([id(1)]);
  } finally {
    console.error = previous;
  }
});
