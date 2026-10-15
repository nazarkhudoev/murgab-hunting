import { locales } from "@/lib/navigation";
import { pages } from "@/data/site-content";
import { publishedPosts } from "@/data/blog";
import { siteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...pages.map((page) => `/${page.slug}`), "/argali-brukey", "/yak", "/wolf", ...publishedPosts().map((post) => `/blog/${post.slug}`)].flatMap(
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
