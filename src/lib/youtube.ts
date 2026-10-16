import "server-only";
import { connection } from "next/server";
import { fetchYouTubeVideos } from "./youtube-data";

export async function getLatestYouTubeVideos() {
  // Docker supplies secrets at runtime. Do not bake a missing-key fallback
  // into the prerendered homepage; the API fetches remain cached for an hour.
  await connection();
  const key = process.env.YOUTUBE_API_KEY;
  const channel = process.env.YOUTUBE_CHANNEL_ID;
  if (!key || !channel) {
    console.warn(
      "YouTube gallery: configure YOUTUBE_API_KEY and YOUTUBE_CHANNEL_ID to enable videos",
    );
    return [];
  }
  return fetchYouTubeVideos(key, channel);
}
