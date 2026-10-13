import { animalSlugs, locales } from "@/lib/navigation";
import { siteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about-us", ...animalSlugs.map((slug) => `/${slug}`)].flatMap(
    (path) =>
      locales.map((locale) => ({
        url: `${siteUrl}/${locale}${path}`,
        alternates: {
          languages: {
            en: `${siteUrl}/en${path}`,
            ru: `${siteUrl}/ru${path}`,
            "x-default": `${siteUrl}/en${path}`,
          },
        },
      })),
  );
}
