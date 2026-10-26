import "server-only";
import { connection } from "next/server";

export type InstagramPost = {
  id: string;
  imageUrl: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
};

function httpsUrl(value: unknown, instagramOnly = false): string | undefined {
  if (typeof value !== "string") return;
  try {
    const url = new URL(value);
    if (
      url.protocol === "https:" &&
      (!instagramOnly ||
        ["instagram.com", "www.instagram.com"].includes(url.hostname))
    )
      return url.href;
  } catch {
    return;
  }
}

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  // Read runtime secrets without baking an unconfigured feed into the build.
  await connection();
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const url = new URL("https://graph.instagram.com/v25.0/me");
    url.searchParams.set(
      "fields",
      "username,media.limit(6){id,media_type,media_url,thumbnail_url,permalink}",
    );
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.warn(
        `Instagram feed request failed (${response.status}). Check the server token and permissions.`,
      );
      return [];
    }
    const data = await response.json();
    if (data.username?.toLowerCase() !== "murgabhunting") {
      console.warn("Instagram feed: the token must belong to @murgabhunting.");
      return [];
    }
    if (!Array.isArray(data.media?.data)) return [];
    return data.media.data
      .flatMap((item: Record<string, unknown>) => {
        const imageUrl = httpsUrl(
          item.media_type === "VIDEO" ? item.thumbnail_url : item.media_url,
        );
        const permalink = httpsUrl(item.permalink, true);
        if (
          typeof item.id !== "string" ||
          !imageUrl ||
          !permalink ||
          !["IMAGE", "VIDEO", "CAROUSEL_ALBUM"].includes(
            String(item.media_type),
          )
        )
          return [];
        return [
          {
            id: item.id,
            imageUrl,
            permalink,
            mediaType: item.media_type as InstagramPost["mediaType"],
          },
        ];
      })
      .slice(0, 6);
  } catch {
    // Never log the fetch error: it may contain authentication headers.
    console.warn(
      "Instagram feed unavailable. Check server configuration or token expiry.",
    );
    return [];
  }
}
