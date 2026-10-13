import { expect, test } from "@playwright/test";

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
    await expect(page.locator("#mobile-navigation a")).toHaveCount(8);
    expect(
      await page
        .locator("#mobile-navigation .book__link")
        .evaluate((element) => element.scrollWidth <= element.clientWidth),
    ).toBeTruthy();
    await page.locator('#mobile-navigation a[href="#gallerySection"]').click();
    await expect(page).toHaveURL(new RegExp(`/${locale}#gallerySection$`));
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
        `https://www.murgabhunting.com/${locale}/${slug}`,
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
  await page.goto("/en/ibex?source=test#book");
  await page
    .getByRole("combobox", { name: "Language", exact: true })
    .selectOption("ru");
  await expect(page).toHaveURL(/\/ru\/ibex\?source=test#book$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await expect(page.locator("main h1")).toContainText("Козерог");
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
  await gallery.locator("a[data-fancybox]").first().click();
  await expect(page.locator(".fancybox__container")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".fancybox__container")).toHaveCount(0);
  await gallery.getByRole("button", { name: "Все", exact: true }).click();
  await expect(
    gallery.locator('a[data-category="yak"]').first(),
  ).toBeAttached();
});

test("SEO routes and invalid URLs", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const xml = await sitemap.text();
  expect((xml.match(/<url>/g) || []).length).toBe(14);
  expect(xml).toContain("https://www.murgabhunting.com/ru/wolf");
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain(
    "Sitemap: https://www.murgabhunting.com/sitemap.xml",
  );
  expect((await request.get("/en/does-not-exist")).status()).toBe(404);
});
