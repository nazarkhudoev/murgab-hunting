import { business } from "@/data/site-content";
import type { BlogPost } from "@/data/blog";
import type { Locale } from "./navigation";
import { siteUrl } from "./seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: business.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: business.email,
    telephone: business.phone,
    foundingDate: String(business.founded),
    sameAs: business.social,
  };
}
export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: business.name,
    url: siteUrl,
    inLanguage: ["en", "ru"],
    publisher: { "@id": `${siteUrl}/#organization` },
    description:
      locale === "en"
        ? "Pamir hunting expeditions in Tajikistan"
        : "Охотничьи экспедиции на Памире в Таджикистане",
  };
}
export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };
}
export function articleSchema(post: BlogPost, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[locale],
    description: post.description[locale],
    datePublished: post.publishedAt,
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    inLanguage: locale,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}/${locale}/blog/${post.slug}`,
  };
}
