import type { YouTubeVideo } from "@/types/youtube";

type RecordData = Record<string, unknown>;
type VideoCandidate = Omit<YouTubeVideo, "durationSeconds" | "durationLabel">;
const record = (value: unknown): RecordData =>
  value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as RecordData)
    : {};
const text = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";
const items = (value: unknown): unknown[] => {
  const entries = record(value).items;
  return Array.isArray(entries) ? entries : [];
};
const REVALIDATE = 3600;

export function parseYouTubeDuration(value: unknown): number | null {
  if (typeof value !== "string") return null;
  const match =
    /^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
      value,
    );
  if (
    !match ||
    !match.slice(1).some((part) => part !== undefined) ||
    (value.includes("T") && !match.slice(2).some((part) => part !== undefined))
  )
    return null;
  const seconds =
    Number(match[1] || 0) * 86400 +
    Number(match[2] || 0) * 3600 +
    Number(match[3] || 0) * 60 +
    Number(match[4] || 0);
  return Number.isFinite(seconds) && seconds <= Number.MAX_SAFE_INTEGER
    ? seconds
    : null;
}

export function formatYouTubeDuration(seconds: number): string {
  const total = Math.floor(seconds),
    hours = Math.floor(total / 3600),
    minutes = Math.floor((total % 3600) / 60),
    remainder = String(total % 60).padStart(2, "0");
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${remainder}`
    : `${minutes}:${remainder}`;
}

function candidate(value: unknown): VideoCandidate | null {
  const item = record(value),
    snippet = record(item.snippet),
    details = record(item.contentDetails);
  const id = text(details.videoId) || text(record(snippet.resourceId).videoId);
  const title = text(snippet.title);
  if (
    !/^[A-Za-z0-9_-]{11}$/.test(id) ||
    !title ||
    ["Private video", "Deleted video"].includes(title)
  )
    return null;
  const thumbnails = record(snippet.thumbnails);
  let thumbnail = "";
  for (const quality of ["maxres", "standard", "high", "medium", "default"]) {
    try {
      const url = new URL(text(record(thumbnails[quality]).url));
      if (
        url.protocol === "https:" &&
        url.hostname === "i.ytimg.com" &&
        !url.port &&
        !url.username &&
        !url.password &&
        /^\/vi(?:_webp)?\//.test(url.pathname)
      ) {
        thumbnail = url.toString();
        break;
      }
    } catch {
      /* Try the next thumbnail quality. */
    }
  }
  if (!thumbnail) return null;
  const publishedAt =
    text(details.videoPublishedAt) || text(snippet.publishedAt);
  return {
    id,
    title,
    description: text(snippet.description),
    thumbnail,
    publishedAt: Number.isFinite(Date.parse(publishedAt)) ? publishedAt : "",
  };
}

export async function fetchYouTubeVideos(
  apiKey: string,
  channelId: string,
  fetcher: typeof fetch = fetch,
): Promise<YouTubeVideo[]> {
  if (!apiKey || !channelId) return [];
  if (!/^UC[A-Za-z0-9_-]{22}$/.test(channelId)) {
    console.error("YouTube gallery: invalid channel ID configuration");
    return [];
  }
  async function request(
    endpoint: string,
    parameters: Record<string, string>,
  ): Promise<unknown> {
    const url = new URL(`https://www.googleapis.com/youtube/v3/${endpoint}`);
    for (const [key, value] of Object.entries(parameters))
      url.searchParams.set(key, value);
    url.searchParams.set("key", apiKey);
    const response = await fetcher(url.toString(), {
      next: { revalidate: REVALIDATE },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      // URLs, response bodies and thrown errors may contain credentials.
      console.error(`YouTube gallery: ${endpoint} request failed`, {
        status: response.status,
      });
      throw new Error("youtube_unavailable");
    }
    return response.json();
  }
  const videos: YouTubeVideo[] = [];
  try {
    const channel = record(
      items(
        await request("channels", { part: "contentDetails", id: channelId }),
      )[0],
    );
    const playlist = text(
      record(record(channel.contentDetails).relatedPlaylists).uploads,
    );
    if (!playlist || !/^[A-Za-z0-9_-]+$/.test(playlist)) {
      console.error("YouTube gallery: uploads playlist not available");
      return [];
    }
    const seenVideos = new Set<string>(),
      seenPages = new Set<string>();
    let pageToken: string | undefined;
    do {
      const response = await request("playlistItems", {
        part: "snippet,contentDetails",
        playlistId: playlist,
        maxResults: "20",
        ...(pageToken ? { pageToken } : {}),
      });
      const candidates: VideoCandidate[] = [];
      for (const value of items(response).slice(0, 20)) {
        const video = candidate(value);
        if (!video || seenVideos.has(video.id)) continue;
        seenVideos.add(video.id);
        candidates.push(video);
      }
      if (candidates.length > 0) {
        // One duration lookup per page, never one request per video. The API may
        // omit unavailable videos and does not have to return IDs in our order.
        const details = await request("videos", {
          part: "contentDetails",
          id: candidates.map((video) => video.id).join(","),
        });
        const durations = new Map<string, number>();
        for (const value of items(details)) {
          const video = record(value);
          const seconds = parseYouTubeDuration(
            record(video.contentDetails).duration,
          );
          if (seconds !== null) durations.set(text(video.id), seconds);
        }
        for (const video of candidates) {
          const durationSeconds = durations.get(video.id);
          if (durationSeconds === undefined || durationSeconds <= 120) continue;
          videos.push({
            ...video,
            durationSeconds,
            durationLabel: formatYouTubeDuration(durationSeconds),
          });
          if (videos.length === 6) return videos;
        }
      }
      const next = text(record(response).nextPageToken);
      if (!next || seenPages.has(next)) break;
      seenPages.add(next);
      pageToken = next;
    } while (pageToken);
    return videos;
  } catch {
    console.error("YouTube gallery: videos temporarily unavailable");
    return videos;
  }
}
