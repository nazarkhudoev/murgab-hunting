import Link from "next/link";
import ExpeditionStats from "@/components/ExpeditionStats/ExpeditionStats";
import MainBanner from "@/components/MainBanner/MainBanner";
import Contact from "@/components/Contact/Contact";
import Videos from "@/components/Videos/Videos";
import Gallery from "@/components/Gallery/Gallery";
import { Faq, Guides, Journey } from "@/components/ExpeditionContent/Shared";
import CampShowcase from "@/components/CampShowcase/CampShowcase";
import Heritage from "@/components/Heritage/Heritage";
import Logistics from "@/components/Logistics/Logistics";
import FeaturedHunts from "@/components/FeaturedHunts/FeaturedHunts";
import PamirExperience from "@/components/PamirExperience/PamirExperience";
import { labels } from "@/data/site-content";
import { contentMetadata, routeLocale, type LocaleParams } from "@/lib/seo";

export const revalidate = 3600;
export async function generateMetadata({ params }: LocaleParams) {
  const locale = await routeLocale(params);
  return contentMetadata(
    locale,
    locale === "en"
      ? "Marco Polo Sheep & Ibex Hunting in Tajikistan | Murgab Hunting"
      : "Охота на Марко Поло и козерога в Таджикистане | Murgab Hunting",
    locale === "en"
      ? "Plan a guided Marco Polo sheep or Pamir ibex hunt in Tajikistan. Meet Murgab Hunting’s local team, explore camp and discuss expedition logistics."
      : "Спланируйте охоту на Марко Поло или козерога в Таджикистане. Познакомьтесь с командой Murgab Hunting, лагерем и организацией экспедиции.",
  );
}
export default async function Home({ params }: LocaleParams) {
  const locale = await routeLocale(params);
  return (
    <main className="expedition-home">
      <MainBanner locale={locale} />
      <ExpeditionStats locale={locale} />
      <div className="content-shell">
        <Heritage locale={locale} />
        <FeaturedHunts locale={locale} />
        <PamirExperience locale={locale} />
        <Logistics locale={locale} />
        <Journey locale={locale} />
        <CampShowcase locale={locale} />
        <Guides locale={locale} />
        <section className="content-section">
          <Gallery limit={9} />
        </section>
        <section className="content-section" id="conservation">
          <h2>{labels.conservation[locale]}</h2>
          <p>{labels.conservationBody[locale]}</p>
          <Link href={`/${locale}/conservation`}>
            {labels.conservation[locale]}
          </Link>
        </section>
        <Faq locale={locale} />
        <section className="content-section" id="blog">
          <h2>
            {locale === "en"
              ? "Plan with our expedition resources"
              : "Материалы для подготовки экспедиции"}
          </h2>
          <ul className="related-links">
            <li>
              <Link href={`/${locale}/hunting-season`}>
                {locale === "en"
                  ? "Hunting seasons and dates"
                  : "Сезоны и даты охоты"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog`}>
                {locale === "en"
                  ? "Expedition notes"
                  : "Заметки об экспедициях"}
              </Link>
            </li>
          </ul>
        </section>
        <Videos locale={locale} />
      </div>
      <Contact locale={locale} />
    </main>
  );
}
