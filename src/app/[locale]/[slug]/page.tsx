import { notFound } from "next/navigation";
import PlanningPage from "@/components/ExpeditionContent/PlanningPage";
import { pageBySlug, pages } from "@/data/site-content";
import { contentMetadata, routeLocale } from "@/lib/seo";

type Params = { params: Promise<{ locale: string; slug: string }> };
export const dynamicParams = true;
export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const locale = await routeLocale(params);
  const page = pageBySlug(slug);
  if (!page)
    return {
      title: locale === "en" ? "Page not found" : "Страница не найдена",
      robots: { index: false },
    };
  return contentMetadata(
    locale,
    page.title[locale],
    page.description[locale],
    `/${slug}`,
  );
}
export default async function Page({ params }: Params) {
  const { slug } = await params;
  const locale = await routeLocale(params);
  const page = pageBySlug(slug);
  if (!page) notFound();
  return <PlanningPage page={page} locale={locale} />;
}
