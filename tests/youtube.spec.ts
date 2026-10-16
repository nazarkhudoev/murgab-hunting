import { test, expect } from "@playwright/test";
import { fetchYouTubeVideos } from "../src/lib/youtube-data";
import type { YouTubeVideo } from "../src/types/youtube";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import ts from "typescript";

const channelId = "UC" + "a".repeat(22);
const fixture = (
  id: string,
  thumbnails: unknown = {
    high: { url: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` },
  },
) => ({
  snippet: {
    title: "Expedition film",
    description: "From the Pamirs",
    publishedAt: "2026-01-01T00:00:00Z",
    thumbnails,
  },
  contentDetails: { videoId: id },
});
const uploads = {
  items: [{ contentDetails: { relatedPlaylists: { uploads: "UU_uploads" } } }],
};
test("YouTube service batches durations with hourly caching and preferred thumbnails", async () => {
  const requests: {
    url: URL;
    options: RequestInit;
  }[] = [];
  const fetcher: typeof fetch = async (input, options) => {
    const url = new URL(String(input));
    requests.push({ url, options: options || {} });
    if (url.pathname.endsWith("videos"))
      return Response.json({
        items: [{ id: "video000001", contentDetails: { duration: "PT8M42S" } }],
      });
    return Response.json(
      url.pathname.endsWith("channels")
        ? uploads
        : {
            items: [
              fixture("video000001", {
                maxres: {
                  url: "https://i.ytimg.com/vi/video000001/maxresdefault.jpg",
                },
                high: {
                  url: "https://i.ytimg.com/vi/video000001/hqdefault.jpg",
                },
              }),
            ],
          },
    );
  };
  const videos = await fetchYouTubeVideos(
    "test-server-secret",
    channelId,
    fetcher,
  );
  expect(requests[0].url.searchParams.get("part")).toBe("contentDetails");
  expect(requests[0].url.searchParams.get("id")).toBe(channelId);
  expect(requests[1].url.searchParams.get("playlistId")).toBe("UU_uploads");
  expect(requests[1].url.searchParams.get("maxResults")).toBe("20");
  expect(requests).toHaveLength(3);
  expect(requests[2].url.pathname).toMatch(/videos$/);
  expect(requests[2].url.searchParams.get("part")).toBe("contentDetails");
  expect(requests[2].url.searchParams.get("id")).toBe("video000001");
  expect(requests[1].url.searchParams.get("part")).toBe(
    "snippet,contentDetails",
  );
  expect(
    requests.every((request) => request.options.next?.revalidate === 3600),
  ).toBeTruthy();
  expect(videos[0].thumbnail).toContain("maxresdefault");
  expect(videos[0].durationSeconds).toBe(522);
  expect(videos[0].durationLabel).toBe("8:42");
  expect(JSON.stringify(videos)).not.toContain("test-server-secret");
});
test("YouTube service safely skips malformed, private, duplicate and thumbnail-less items", async () => {
  const data = [
    null,
    fixture("bad"),
    { ...fixture("video000002"), snippet: { title: "Private video" } },
    fixture("video000003", {}),
    fixture("video000004", {
      maxres: { url: "https://attacker.example/image.jpg" },
      medium: { url: "https://i.ytimg.com/vi/video000004/mqdefault.jpg" },
    }),
    fixture("video000004"),
  ];
  const videos = await fetchYouTubeVideos(
    "test-key",
    channelId,
    async (input) =>
      Response.json(
        String(input).includes("/channels?")
          ? uploads
          : String(input).includes("/videos?")
            ? {
                items: [
                  { id: "video000004", contentDetails: { duration: "PT2M" } },
                ],
              }
            : { items: data },
      ),
  );
  expect(videos).toHaveLength(1);
  expect(videos[0].id).toBe("video000004");
  expect(videos[0].thumbnail).toContain("mqdefault");
});
test("YouTube missing settings, quota errors, network errors, malformed responses and empty channels are safe", async () => {
  const logs: unknown[][] = [];
  const previous = console.error;
  console.error = (...args: unknown[]) => {
    logs.push(args);
  };
  try {
    let called = false;
    expect(
      await fetchYouTubeVideos("", channelId, async () => {
        called = true;
        throw Error();
      }),
    ).toEqual([]);
    expect(
      await fetchYouTubeVideos("key", "invalid", async () => {
        called = true;
        throw Error();
      }),
    ).toEqual([]);
    expect(called).toBe(false);
    for (const fetcher of [
      async () =>
        Response.json({ error: "secret-provider-body" }, { status: 403 }),
      async () => {
        throw Error("secret-key-in-url");
      },
      async () => Response.json({ items: [] }),
      async () => Response.json(null),
      async () => new Response("invalid JSON"),
    ])
      expect(
        await fetchYouTubeVideos("secret-key-in-url", channelId, fetcher),
      ).toEqual([]);
    expect(JSON.stringify(logs)).not.toContain("secret-key-in-url");
    expect(JSON.stringify(logs)).not.toContain("secret-provider-body");
  } finally {
    console.error = previous;
  }
});

const videos: YouTubeVideo[] = Array.from({ length: 6 }, (_, index) => ({
  id: `video00000${index + 1}`,
  title: `Expedition film ${index + 1}`,
  description: "Fixture only",
  durationSeconds: 522,
  durationLabel: "8:42",
  thumbnail: `https://i.ytimg.com/vi/video00000${index + 1}/hqdefault.jpg`,
  publishedAt: "2026-01-01T00:00:00Z",
}));

test("YouTube gallery modal loads only on interaction, restores focus, stops playback and fits mobile", async ({
  page,
}) => {
  test.setTimeout(60_000);
  // Exercise the real client component with deterministic data and React. Stub
  // only Next's image optimizer and icons; no fixture route ships to production.
  await page.route("https://www.youtube.com/embed/**", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<html><body>Mock player</body></html>",
    }),
  );
  await page.route("https://i.ytimg.com/**", (route) =>
    route.fulfill({
      path: join(
        process.cwd(),
        "src/assets/photos/springscamp/spring-camp-05.jpg",
      ),
      contentType: "image/jpeg",
    }),
  );
  await page.setContent(
    '<html><body style="margin:0;font-family:Arial,sans-serif"><main class="content-shell youtube-stories" style="padding:20px;background:#241f13"><div id="root"></div><button id="outside">Outside</button></main></body></html>',
  );
  await page.addStyleTag({
    content: readFileSync("src/components/Videos/Videos.css", "utf8"),
  });
  await page.addScriptTag({
    path: "node_modules/react/umd/react.development.js",
  });
  await page.addScriptTag({
    path: "node_modules/react-dom/umd/react-dom.development.js",
  });
  const compiled = ts.transpileModule(
    readFileSync("src/components/Videos/VideoGallery.tsx", "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true,
        target: ts.ScriptTarget.ES2020,
      },
    },
  ).outputText;
  await page.addScriptTag({
    content: `(() => { const module = {exports:{}}; const exports = module.exports; function require(name) { if(name==='react') return window.React; if(name==='next/image') return function Image({fill,sizes,...props}){return React.createElement('img',{...props,style:{width:'100%',height:'100%',objectFit:'cover'}})}; if(name==='lucide-react')return {Play: props=>React.createElement('svg',{...props,viewBox:'0 0 24 24'},React.createElement('polygon',{points:'6 3 20 12 6 21',fill:'currentColor'})),X:props=>React.createElement('svg',{...props,viewBox:'0 0 24 24'},React.createElement('path',{d:'M6 6l12 12M18 6L6 18',stroke:'currentColor',strokeWidth:2}))}; throw Error(name); } ${compiled}\n ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(module.exports.default,{videos:${JSON.stringify(videos)},locale:'en'})); })();`,
  });
  const cards = page.locator(".youtube-video-card a");
  await expect(cards).toHaveCount(6);
  await expect(page.locator("iframe")).toHaveCount(0);
  await cards.first().focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator("iframe")).toHaveAttribute(
    "src",
    "https://www.youtube.com/embed/video000001?autoplay=1",
  );
  expect(await page.evaluate(() => document.body.style.overflow)).toBe(
    "hidden",
  );
  await page.keyboard.press("Escape");
  await expect(page.locator("iframe")).toHaveCount(0);
  await expect(cards.first()).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
  await cards.nth(1).click();
  await expect(page.locator("iframe")).toHaveAttribute("src", /video000002/);
  await page.getByRole("button", { name: "Close video" }).click();
  await expect(page.locator("iframe")).toHaveCount(0);
  await page.setViewportSize({ width: 390, height: 844 });
  await cards.nth(2).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  const box = await page.getByRole("dialog").boundingBox();
  expect(box?.width).toBeLessThanOrEqual(358);
  await page.mouse.click(2, 2);
  await expect(page.locator("iframe")).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
  await page.screenshot({ path: "test-results/youtube-gallery-mobile.png" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: "test-results/youtube-gallery-desktop.png" });
});

test("YouTube live section has a channel fallback without video Elfsight or eagerly loaded players", async ({
  page,
}) => {
  await page.goto("/en");
  await expect(page.locator("#video")).toBeVisible();
  await expect(
    page
      .locator('#video a[href="https://www.youtube.com/@MurgabHunting"]')
      .last(),
  ).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.locator("#video iframe")).toHaveCount(0);
  await expect(
    page.locator(".elfsight-app-a8064645-06c0-45af-8b23-3514694ae97e"),
  ).toHaveCount(0);
  await expect(page.locator('script[src*="static.elfsight.com"]')).toHaveCount(
    0,
  );
});
