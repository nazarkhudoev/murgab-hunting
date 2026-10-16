import type { YouTubeVideo } from "@/types/youtube";

type RecordData = Record<string, unknown>;
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
      // Never log the request URL, response body or thrown fetch errors: they can contain the API key.
      console.error(`YouTube gallery: ${endpoint} request failed`, {
        status: response.status,
      });
      throw new Error("youtube_unavailable");
    }
    return response.json();
  }
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
    const response = await request("playlistItems", {
      part: "snippet,contentDetails",
      playlistId: playlist,
      maxResults: "6",
    });
    const videos: YouTubeVideo[] = [];
    const seen = new Set<string>();
    for (const value of items(response).slice(0, 6)) {
      const item = record(value),
        snippet = record(item.snippet),
        details = record(item.contentDetails);
      const id =
        text(details.videoId) || text(record(snippet.resourceId).videoId);
      const title = text(snippet.title);
      if (
        !/^[A-Za-z0-9_-]{11}$/.test(id) ||
        !title ||
        ["Private video", "Deleted video"].includes(title) ||
        seen.has(id)
      )
        continue;
      const thumbnails = record(snippet.thumbnails);
      let thumbnail = "";
      for (const quality of [
        "maxres",
        "standard",
        "high",
        "medium",
        "default",
      ]) {
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
      if (!thumbnail) continue;
      const publishedAt =
        text(details.videoPublishedAt) || text(snippet.publishedAt);
      videos.push({
        id,
        title,
        description: text(snippet.description),
        thumbnail,
        publishedAt: Number.isFinite(Date.parse(publishedAt))
          ? publishedAt
          : "",
      });
      seen.add(id);
    }
    return videos;
  } catch {
    console.error("YouTube gallery: videos temporarily unavailable");
    return [];
  }
}
