# YouTube gallery setup

The server-only `src/lib/youtube.ts` reads the configuration and uses `youtube-data.ts` to retrieve the channel's uploads playlist and its latest six qualifying videos longer than 60 seconds. Uploads are retrieved in batches of 20 and durations are checked in one batched `videos.list` request per page. Playlist pagination continues only until six qualifying videos are found or pages run out. Next.js 15 fetch caching revalidates both successful requests after 3,600 seconds; the gallery waits for an incoming request with Next.js 15 `connection()` before reading runtime settings. Pages using the gallery are server-rendered, while the YouTube responses remain cached for one hour. There is no browser API call, exposed credential, or public API endpoint. No player iframe is mounted before a visitor selects a video.

## Google Cloud and channel ID

1. Create/select a [Google Cloud project](https://console.cloud.google.com/) and enable **YouTube Data API v3** in APIs & Services → Library.
2. Create an API key in APIs & Services → Credentials. Restrict its API access to **YouTube Data API v3**. Calls originate on the server, so browser HTTP-referrer restrictions are not suitable. Use server IP restrictions only when hosting provides stable outbound IP addresses; a normal Vercel deployment may not.
3. Get the channel ID while signed into the Murgab Hunting channel: open [YouTube advanced account settings](https://www.youtube.com/account_advanced) and copy **Channel ID**, beginning with `UC`. See [YouTube's official instructions](https://support.google.com/youtube/answer/3250431). Do not use the `@MurgabHunting` handle as the channel ID. Alternatively, the official [channels.list API Explorer](https://developers.google.com/youtube/v3/docs/channels/list) accepts `forHandle=@MurgabHunting` and returns `items[0].id` with `part=id`.
4. Add the following to `.env.local` (preserve your existing Resend settings):

   ```dotenv
   YOUTUBE_API_KEY=your_private_google_api_key
   YOUTUBE_CHANNEL_ID=your_UC_channel_id
   ```

5. Restart local development. On **Vercel**, add these exact same two variables under Project → Settings → Environment Variables for Production and any Preview/Development environments you use, then redeploy. Never prefix the API key with `NEXT_PUBLIC_`.
6. For **Docker**, rebuild the image and recreate the container with `--env-file .env.local` or the Compose `env_file` setting. Secrets are only needed at runtime, not during `docker build`. Recreating the container loads updated settings immediately without a prebuilt fallback being held for an hour.

API calls follow [channels.list](https://developers.google.com/youtube/v3/docs/channels/list) and [playlistItems.list](https://developers.google.com/youtube/v3/docs/playlistItems/list). Keep the API enabled and monitor quota in Google Cloud. Credentials are never passed to gallery props or logged, and errors are sanitized.

## Behaviour and limitations

- Videos of 60 seconds or less are excluded. Private/deleted entries, duplicate IDs, missing or invalid durations, missing thumbnails, and malformed items are skipped. The latest six qualifying videos retain playlist order. Fewer than six cards appear only when the playlist runs out or an API request fails. Repeated page tokens are stopped defensively. `durationSeconds` and `durationLabel` are available in the typed data; the gallery design and modal are unchanged.
- Thumbnail preference: maxres → standard → high → medium → default. Only HTTPS `i.ytimg.com/vi/` and `/vi_webp/` URLs are accepted. A failed thumbnail retains the play control and title.
- Without credentials or during API failure, visitors see a quiet channel fallback and the existing `https://www.youtube.com/@MurgabHunting` CTA. The application still builds and renders. A network timeout is bounded per API request. The rendered fallback is not kept in the full-page cache; subsequent requests retry after a failed fetch. Successful cached data can be served by Next.js during background refresh.
- Native modal dialogs provide focus containment and a top-layer backdrop. Escape, close button and backdrop click remove the iframe, restore body scrolling and return focus. With JavaScript disabled, server-rendered cards remain visible and link directly to the corresponding YouTube video.
- YouTube controls embedding, regional availability and autoplay policy. A video that cannot be embedded displays YouTube's player message; visitors can use the gallery's YouTube link.
- The unrelated **blog Elfsight widget remains**. Its shared platform script now loads from the Blog component only; it is no longer loaded globally or by the homepage video gallery. No npm package was required or removed for this replacement.
- Automated service tests use mocked API responses. Modal browser tests run the real React component with fixture video metadata and an image adapter; no fixture endpoint or fake video is published. Actual channel retrieval still needs your Google key and channel ID, which were not supplied by this change.
