import Image from "next/image";
import Link from "next/link";
import { trophiesData } from "@/data/trophies";
import { labels, faq, pages } from "@/data/site-content";
import type { AnimalSlug, Locale } from "@/lib/navigation";
import Founder1 from "@/assets/founder1.png";
import Founder2 from "@/assets/founder-2.png";
import Founder3 from "@/assets/founder-3.png";
import JourneyTimeline from "../Journey/JourneyTimeline";
import GuideProfiles from "../Guides/GuideProfiles";

export function HuntCards({
  locale,
  exclude,
}: {
  locale: Locale;
  exclude?: AnimalSlug;
}) {
  return (
    <div className="expedition-cards" id="trophies-carousel">
      {trophiesData
        .filter((hunt) => hunt.id !== exclude)
        .map((hunt) => (
          <article
            className="expedition-card"
            key={hunt.id}
            data-animal={hunt.id}
          >
            <Image
              src={hunt.image}
              alt={hunt.title[locale]}
              sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw"
            />
            <div>
              <h3>{hunt.title[locale]}</h3>
              <Link
                href={`/${locale}${hunt.url}`}
                data-track="species_interest"
                data-species={hunt.id}
              >
                {labels.more[locale]}: {hunt.title[locale]}
              </Link>
            </div>
          </article>
        ))}
    </div>
  );
}
export function Guides({ locale }: { locale: Locale }) {
  return <GuideProfiles locale={locale} />;
}
export function Founders({ locale }: { locale: Locale }) {
  const names =
    locale === "en"
      ? ["Atobek Bekmurodov", "Bekmurodi Zafar", "Bekmurodi Aydibek"]
      : ["Атобек Бекмуродов", "Бекмуроди Зафар", "Бекмуроди Айдибек"];
  return (
    <section className="content-section" id="founders">
      <h2>
        {locale === "en"
          ? "People behind Murgab Hunting"
          : "Люди Murgab Hunting"}
      </h2>
      <div className="people-grid">
        {[Founder1, Founder2, Founder3].map((image, index) => (
          <article key={names[index]}>
            <Image
              src={image}
              alt={names[index]}
              sizes="(max-width: 600px) 90vw, 30vw"
            />
            <h3>{names[index]}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Faq({ locale }: { locale: Locale }) {
  return (
    <section className="content-section">
      <h2>{labels.faq[locale]}</h2>
      <div className="faq-list">
        {faq.map((item) => (
          <details key={item.question.en}>
            <summary>{item.question[locale]}</summary>
            <p>{item.answer[locale]}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function Journey({ locale }: { locale: Locale }) {
  return <JourneyTimeline locale={locale} />;
}
export function RelatedLinks({
  locale,
  exclude,
}: {
  locale: Locale;
  exclude?: string;
}) {
  return (
    <section className="content-section">
      <h2>{labels.related[locale]}</h2>
      <ul className="related-links">
        {pages
          .filter(
            (page) =>
              [
                "hunting-packages",
                "hunting-season",
                "hunting-permits",
                "travel-to-tajikistan",
                "pamir-hunting-camp",
                "contact",
              ].includes(page.slug) && page.slug !== exclude,
          )
          .map((page) => (
            <li key={page.slug}>
              <Link href={`/${locale}/${page.slug}`}>{page.title[locale]}</Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
