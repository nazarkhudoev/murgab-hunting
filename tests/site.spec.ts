import { expect, test } from "@playwright/test";

test("header follows scroll direction and stays visible with the menu open", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en");
  const header = page.locator("header[data-scroll-hidden]");
  await expect(header).toHaveAttribute("data-scroll-hidden", "false");
  await page.evaluate(() => window.scrollTo({ top: 600, behavior: "instant" }));
  await expect(header).toHaveAttribute("data-scroll-hidden", "true");
  await page.evaluate(() => window.scrollTo({ top: 450, behavior: "instant" }));
  await expect(header).toHaveAttribute("data-scroll-hidden", "false");
  const menu = page.getByRole("button", { name: "Open navigation menu" });
  await menu.click();
  await page.evaluate(() => window.scrollTo({ top: 900, behavior: "instant" }));
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(header).toHaveAttribute("data-scroll-hidden", "false");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await expect(header).toHaveAttribute("data-scroll-hidden", "false");
});

test.beforeEach(async ({ page }) => {
  // Make the third-party outage explicit; booking contact details must still work.
  await page.route("https://static.elfsight.com/**", (route) => route.abort());
});

for (const locale of ["en", "ru"] as const) {
  test(`${locale}: mobile navigation and booking work without widgets`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(`/${locale}`);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    const menu = page.getByRole("button", {
      name: locale === "en" ? "Open navigation menu" : "Открыть меню навигации",
    });
    await menu.focus();
    await page.keyboard.press("Enter");
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#mobile-navigation a")).toHaveCount(9);
    expect(
      await page
        .locator("#mobile-navigation .book__link")
        .evaluate((element) => element.scrollWidth <= element.clientWidth),
    ).toBeTruthy();
    await page
      .locator(`#mobile-navigation a[href="/${locale}/gallery"]`)
      .click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/gallery$`));
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await menu.click();
    await page.keyboard.press("Escape");
    await expect(menu).toBeFocused();
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect(
      page.locator('#book a[href="mailto:shirinbek0494@gmail.com"]'),
    ).toBeVisible();
    await expect(
      page.locator('#book a[href="tel:+992887743399"]'),
    ).toBeVisible();
    expect(errors).toEqual([]);
  });

  test(`${locale}: every detail route renders and excludes its own trophy`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const slug of [
      "about-us",
      "marco-polo",
      "ibex",
      "argali-brukey",
      "yak",
      "wolf",
    ]) {
      const response = await page.goto(`/${locale}/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator("main h1")).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://www.murgabhunting.com/${locale}/${({ "about-us": "about", "marco-polo": "marco-polo-sheep-hunting", ibex: "pamir-ibex-hunting" } as Record<string, string>)[slug] || slug}`,
      );
      if (slug !== "about-us") {
        await expect(page.locator(`[data-animal="${slug}"]`)).toHaveCount(0);
        await expect(
          page.locator("#trophies-carousel a").first(),
        ).toHaveAttribute("href", new RegExp(`^/${locale}/`));
      }
    }
    expect(errors).toEqual([]);
  });
}

test("language switch retains route, query and section", async ({ page }) => {
  await page.goto("/en/pamir-ibex-hunting?source=test#book");
  // Keyboard focus reveals the header independently of the initial hash scroll.
  const languageLink = page
    .getByRole("navigation", { name: "Language", exact: true })
    .getByRole("link", { name: "RU", exact: true });
  await languageLink.focus();
  await expect(page.locator("header[data-scroll-hidden]")).toHaveAttribute(
    "data-scroll-hidden",
    "false",
  );
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/ru\/pamir-ibex-hunting\?source=test#book$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await expect(page.locator("main h1")).toContainText(/козерог/i);
});

test("gallery filtering and image preview work", async ({ page }) => {
  await page.goto("/ru");
  const gallery = page.locator("#gallerySection");
  const landscape = gallery.getByRole("button", {
    name: "Пейзаж",
    exact: true,
  });
  await landscape.click();
  await expect(landscape).toHaveAttribute("aria-pressed", "true");
  await expect(gallery.locator("a[data-category]").first()).toBeVisible();
  expect(
    await gallery
      .locator('a[data-category]:not([data-category="landscape"])')
      .count(),
  ).toBe(0);
  const firstPhoto = gallery.locator("a[data-fancybox]").first();
  await firstPhoto.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".fancybox__container")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".fancybox__container")).toHaveCount(0);
  await expect(firstPhoto).toBeFocused();
  await gallery.getByRole("button", { name: "Все", exact: true }).click();
  await expect(
    gallery.locator('a[data-category="yak"]').first(),
  ).toBeAttached();
});

test("SEO routes and invalid URLs", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const xml = await sitemap.text();
  expect((xml.match(/<url>/g) || []).length).toBe(32);
  expect(xml).toContain("https://www.murgabhunting.com/ru/wolf");
  expect(xml).not.toContain("/en/about-us</loc>");
  expect(xml).not.toContain("/en/marco-polo</loc>");
  expect(xml).not.toContain("/en/ibex</loc>");
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain(
    "Sitemap: https://www.murgabhunting.com/sitemap.xml",
  );
  const missing = await request.get("/en/does-not-exist");
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain("Page not found");
  expect((await request.get("/ru/missing/nested")).status()).toBe(404);
});

test("primary content and language links work without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  try {
    for (const locale of ["en", "ru"]) {
      for (const slug of [
        "",
        "marco-polo-sheep-hunting",
        "pamir-ibex-hunting",
        "hunting-permits",
        "pamir-hunting-camp",
        "about",
        "conservation",
        "blog",
        "contact",
      ]) {
        const response = await page.goto(`/${locale}${slug ? `/${slug}` : ""}`);
        expect(response?.status()).toBe(200);
        await expect(page.locator("main h1")).toBeVisible();
        await expect(
          page.locator('a[href="mailto:shirinbek0494@gmail.com"]').first(),
        ).toBeVisible();
        await expect(
          page.locator('nav.language-links a[hreflang="en"]'),
        ).toHaveAttribute("href", new RegExp("^/en"));
        await expect(
          page.locator('nav.language-links a[hreflang="ru"]'),
        ).toHaveAttribute("href", new RegExp("^/ru"));
      }
    }
  } finally {
    await context.close();
  }
});

test("new bilingual pages expose complete server SEO and unique content", async ({
  request,
  page,
}) => {
  const slugs = [
    "marco-polo-sheep-hunting",
    "pamir-ibex-hunting",
    "hunting-packages",
    "hunting-season",
    "hunting-permits",
    "travel-to-tajikistan",
    "pamir-hunting-camp",
    "about",
    "conservation",
    "gallery",
    "blog",
    "contact",
  ];
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const locale of ["en", "ru"]) {
    for (const slug of slugs) {
      const path = `/${locale}/${slug}`;
      const response = await request.get(path);
      expect(response.status()).toBe(200);
      const html = await response.text();
      expect(html).toContain("application/ld+json");
      expect(html).toContain("BreadcrumbList");
      expect(html).toContain(`https://www.murgabhunting.com${path}`);
      expect(html).toContain('hrefLang="en"');
      expect(html).toContain('hrefLang="ru"');
      expect(html).not.toContain("TODO: OWNER REVIEW");
      await page.goto(path);
      await expect(page.locator("main h1")).toHaveCount(1);
      const title = await page.title();
      const description = await page
        .locator('meta[name="description"]')
        .getAttribute("content");
      expect(titles.has(title)).toBeFalsy();
      titles.add(title);
      expect(descriptions.has(description!)).toBeFalsy();
      descriptions.add(description!);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://www.murgabhunting.com${path}`,
      );
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
        "content",
        title,
      );
    }
  }
});

test("legacy URLs redirect permanently and draft blog posts stay unavailable", async ({
  request,
}) => {
  for (const locale of ["en", "ru"]) {
    for (const [oldSlug, newSlug] of [
      ["marco-polo", "marco-polo-sheep-hunting"],
      ["ibex", "pamir-ibex-hunting"],
      ["about-us", "about"],
    ]) {
      const response = await request.get(`/${locale}/${oldSlug}`, {
        maxRedirects: 0,
      });
      expect(response.status()).toBe(308);
      expect(response.headers().location).toContain(`/${locale}/${newSlug}`);
    }
    expect(
      (await request.get(`/${locale}/blog/unreviewed-draft`)).status(),
    ).toBe(404);
  }
});

test("mobile pages fit the viewport, guides are unique, and inquiry draft validates", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const locale of ["en", "ru"]) {
    for (const slug of [
      "",
      "marco-polo-sheep-hunting",
      "pamir-ibex-hunting",
      "hunting-packages",
      "pamir-hunting-camp",
      "contact",
    ]) {
      await page.goto(`/${locale}${slug ? `/${slug}` : ""}`);
      expect(
        await page
          .locator("main")
          .evaluate((element) => element.scrollWidth <= window.innerWidth),
      ).toBeTruthy();
      await expect(page.locator("main h1")).toHaveCount(1);
    }
  }
  await page.goto("/en");
  await expect(page.locator("#team article")).toHaveCount(6);
  await expect(page.locator(".slick-cloned")).toHaveCount(0);
  await page.goto("/en/contact");
  await page.getByLabel("Email", { exact: true }).fill("invalid");
  await page.getByRole("button", { name: "Send inquiry" }).click();
  expect(
    await page
      .locator("#inquiry-email")
      .evaluate((input) => (input as HTMLInputElement).validity.typeMismatch),
  ).toBeTruthy();
  await expect(page.locator('form [role="status"]')).toBeEmpty();
  await expect(
    page.locator(".elfsight-app-63fbac68-6b51-4102-ad1d-e2c4562b500f"),
  ).toHaveCount(0);
  await expect(page.locator("#book form.inquiry-draft")).toHaveCount(1);
  await expect(page.locator("#inquiry-email")).toHaveCount(1);
});
