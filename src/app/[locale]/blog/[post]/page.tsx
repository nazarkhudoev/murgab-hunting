import Link from "next/link";
import { notFound } from "next/navigation";
import { publishedPosts } from "@/data/blog";
import { labels, pageBySlug } from "@/data/site-content";
import { contentMetadata, routeLocale } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";
import JsonLd from "@/components/Seo/JsonLd";
import Breadcrumbs from "@/components/Seo/Breadcrumbs";

type Params = { params: Promise<{ locale: string; post: string }> };
export const dynamicParams = true;
export function generateStaticParams() {
  return publishedPosts().map((post) => ({ post: post.slug }));
}
export async function generateMetadata({ params }: Params) {
  const locale = await routeLocale(params);
  const { post: slug } = await params;
  const post = publishedPosts().find((item) => item.slug === slug);
  if (!post)
    return {
      title: locale === "en" ? "Page not found" : "Страница не найдена",
      robots: { index: false },
    };
  return {
    ...contentMetadata(
      locale,
      post.title[locale],
      post.description[locale],
      `/blog/${post.slug}`,
    ),
    openGraph: {
      ...contentMetadata(
        locale,
        post.title[locale],
        post.description[locale],
        `/blog/${post.slug}`,
      ).openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.updatedAt ? { modifiedTime: post.updatedAt } : {}),
    },
  };
}
export default async function Article({ params }: Params) {
  const locale = await routeLocale(params);
  const { post: slug } = await params;
  const post = publishedPosts().find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <main className="expedition-main content-shell">
      <Breadcrumbs
        label={locale === "en" ? "Breadcrumbs" : "Навигационная цепочка"}
        items={[
          { label: labels.home[locale], href: `/${locale}` },
          { label: locale === "en" ? "Blog" : "Блог", href: `/${locale}/blog` },
          { label: post.title[locale], href: `/${locale}/blog/${post.slug}` },
        ]}
      />
      <article>
        <h1>{post.title[locale]}</h1>
        <p>
          {post.author} ·{" "}
          <time dateTime={post.publishedAt}>{post.publishedAt}</time> ·{" "}
          {post.category[locale]}
        </p>
        <p>{post.description[locale]}</p>
        {post.sections.map((section) => (
          <section className="content-section" key={section.heading.en}>
            <h2>{section.heading[locale]}</h2>
            <p>{section.body[locale]}</p>
          </section>
        ))}
      </article>
      <JsonLd data={articleSchema(post, locale)} />
      <nav aria-label={labels.related[locale]}>
        <ul className="related-links">
          {post.relatedPages.map((slug) => {
            const page = pageBySlug(slug);
            return page ? (
              <li key={slug}>
                <Link href={`/${locale}/${slug}`}>{page.title[locale]}</Link>
              </li>
            ) : null;
          })}
        </ul>
      </nav>
    </main>
  );
}
