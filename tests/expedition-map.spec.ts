import { test, expect } from "@playwright/test";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

test("approved map artwork is unchanged", () => {
  expect(
    createHash("sha256")
      .update(readFileSync("public/tajikistan_map.png"))
      .digest("hex"),
  ).toBe("bd622e53b4e2ac9cf8dd07e8d3e951954a009826cd7a4c4599beceaf90c04cda");
});

test("About map plays once, preserves story order and supports keyboard camp discovery", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/en/about");
  const section = page.locator(".expedition-map");
  await section.scrollIntoViewIfNeeded();
  const visual = page.locator(".expedition-map-visual");
  await expect(visual).toHaveAttribute("data-dushanbe-arrived", "false");
  await expect(visual).toHaveAttribute("data-khorog-arrived", "false");
  await expect(visual).toHaveAttribute("data-camp-arrived", "false");
  await expect(page.locator(".map-arrival-dushanbe")).toHaveCSS("opacity", "0");
  await expect(visual).toHaveAttribute("data-dushanbe-arrived", "true", {
    timeout: 4000,
  });
  await expect(visual).toHaveAttribute("data-khorog-arrived", "false");
  await expect(page.locator(".map-arrival-dushanbe")).toHaveCSS("opacity", "1");
  await expect(visual).toHaveAttribute("data-khorog-arrived", "true", {
    timeout: 5000,
  });
  await expect(visual).toHaveAttribute("data-camp-arrived", "false");
  await expect(visual).toHaveAttribute("data-motion", "complete", {
    timeout: 12000,
  });
  expect(
    await visual.evaluate((node) =>
      node.style.getPropertyValue("--road-progress"),
    ),
  ).toBe("1");
  await expect(visual).toHaveAttribute("data-camp-arrived", "true");
  await expect(page.locator(".map-arrival-camp")).toHaveCSS("opacity", "1");
  await expect(page.locator(".map-arrival-dushanbe")).toContainText(
    "800 meters",
  );
  await expect(page.locator(".map-arrival-khorog")).toContainText(
    "2,100 meters",
  );
  await expect(page.locator(".map-arrival-camp")).toContainText("3,734 meters");
  const marker = page
    .getByRole("button", { name: "Discover Hot Springs Camp", exact: true })
    .first();
  await marker.focus();
  await page.keyboard.press("Enter");
  const card = page.getByRole("dialog", { name: "Hot Springs Camp" });
  await expect(card).toBeVisible();
  await expect(
    card.getByRole("link", { name: "Explore the Camp" }),
  ).toHaveAttribute("href", "/en/pamir-hunting-camp");
  await expect(
    card.getByRole("button", { name: "Close camp information" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(card).not.toBeVisible();
  await expect(marker).toBeFocused();
  await marker.click();
  await page.mouse.click(5, 5);
  await expect(card).not.toBeVisible();
  const order = await page.locator("main h2").allTextContents();
  const mapIndex = order.indexOf("From Dushanbe to the High Pamirs");
  expect(mapIndex).toBeGreaterThan(-1);
  expect(order.slice(mapIndex + 1).join(" ")).toMatch(/People|Founders|Guides/);
  expect(errors).toEqual([]);
});

for (const width of [1440, 820, 390]) {
  test(`map stays aligned and usable at ${width}px with reduced motion`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 950 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/en/about");
    await page.locator(".expedition-map").scrollIntoViewIfNeeded();
    const visual = page.locator(".expedition-map-visual");
    await expect(visual).toHaveAttribute("data-motion", "complete");
    const image = await page.locator(".expedition-map-image").boundingBox();
    const marker = page.locator(".expedition-camp-marker");
    const box = await marker.boundingBox();
    expect(image && box).toBeTruthy();
    if (!image || !box) throw new Error("Map or marker missing");
    expect(
      Math.abs((box.x + box.width / 2 - image.x) / image.width - 1311 / 1604),
    ).toBeLessThan(0.002);
    expect(
      Math.abs((box.y + box.height / 2 - image.y) / image.height - 599 / 981),
    ).toBeLessThan(0.002);
    expect(box.width).toBeGreaterThanOrEqual(44);
    expect(
      await page
        .locator(".expedition-map-stage")
        .evaluate((node) => getComputedStyle(node).transform),
    ).toBe("none");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await marker.click();
    const card = page.getByRole("dialog");
    await expect(card).toBeVisible();
    if (width < 600) {
      const panel = await card.boundingBox();
      expect(panel && Math.abs(panel.y + panel.height - 950)).toBeLessThan(2);
    }
    await card.getByRole("button", { name: "Close camp information" }).click();
    await expect(card).not.toBeVisible();
  });
}

test("Russian route retains localized camp link and explicit English fallback", async ({
  page,
}) => {
  await page.goto("/ru/about");
  await expect(page.locator(".expedition-map")).toHaveAttribute("lang", "en");
  await page.locator(".expedition-map-discover").click();
  await expect(
    page.getByRole("dialog").getByRole("link", { name: "Explore the Camp" }),
  ).toHaveAttribute("href", "/ru/pamir-hunting-camp");
});
