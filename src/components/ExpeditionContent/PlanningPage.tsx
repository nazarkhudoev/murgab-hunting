import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import MarcoPolo from "@/assets/main-bg-1.webp";
import Ibex from "@/assets/Hunt_Cards/Ibex_Card.png";
import Landscape from "@/assets/main-bg-1.webp";
import { publishedPosts } from "@/data/blog";
import { business, labels, type ContentPage } from "@/data/site-content";
import type { Locale } from "@/lib/navigation";
import Breadcrumbs from "../Seo/Breadcrumbs";
import JsonLd from "../Seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import InquiryDraft from "../InquiryDraft/InquiryDraft";
import CampPage from "../CampPage/CampPage";
import PermitsPage from "../PermitsPage/PermitsPage";
import ExpeditionMap from "../ExpeditionMap/ExpeditionMap";
import {
  Faq,
  Founders,
  Guides,
  HuntCards,
  Journey,
  RelatedLinks,
} from "./Shared";

const AnimalGallery = dynamic(() => import("../AnimalGallery/AnimalGallery"));
const Gallery = dynamic(() => import("../Gallery/Gallery"));

export default function PlanningPage({
  page,
  locale,
}: {
  page: ContentPage;
  locale: Locale;
}) {
  const items = [
    { label: labels.home[locale], href: `/${locale}` },
    ...(page.animal
      ? [{ label: labels.explore[locale], href: `/${locale}/hunting-packages` }]
      : []),
    { label: page.title[locale], href: `/${locale}/${page.slug}` },
  ];
  if (page.slug === "gallery") {
    return (
      <main className="expedition-main">
        <div className="content-shell">
          <Gallery headingLevel={1} />
        </div>
        <JsonLd data={breadcrumbSchema(items)} />
      </main>
    );
  }
  if (page.slug === "blog") {
    const posts = publishedPosts();
    return (
      <main className="expedition-main journal-page">
        <div className="content-shell">
          <Breadcrumbs
            label={locale === "en" ? "Breadcrumbs" : "Навигационная цепочка"}
            items={items}
          />
          <header className="journal-intro">
            <p className="eyebrow">
              Murgab Hunting ·{" "}
              {locale === "en" ? "Field journal" : "Дневник экспедиций"}
            </p>
            <h1>{page.title[locale]}</h1>
            <p>
              {locale === "en"
                ? "A closer look at the Pamirs. Follow our local team through mountain landscapes, camp life and the moments that make every expedition its own story."
                : "Памир вблизи. Горные пейзажи, жизнь лагеря и мгновения, из которых складывается история каждой экспедиции нашей команды."}
            </p>
            <Link className="journal-gallery-link" href={`/${locale}/gallery`}>
              {locale === "en"
                ? "Explore the photo gallery ↗"
                : "Открыть фотогалерею ↗"}
            </Link>
          </header>
          <Blog locale={locale} />
          {posts.length > 0 && (
            <section className="journal-articles">
              <p className="eyebrow">
                {locale === "en"
                  ? "Expedition resources"
                  : "Материалы об экспедициях"}
              </p>
              <h2>
                {locale === "en"
                  ? "Notes from our team"
                  : "Заметки нашей команды"}
              </h2>
              <div className="journal-article-grid">
                {posts.map((post) => (
                  <article key={post.slug}>
                    <p className="eyebrow">{post.category[locale]}</p>
                    <h3>
                      <Link href={`/${locale}/blog/${post.slug}`}>
                        {post.title[locale]}
                      </Link>
                    </h3>
                    <p>{post.description[locale]}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
        <Contact locale={locale} />
        <JsonLd data={breadcrumbSchema(items)} />
      </main>
    );
  }
  return (
    <main className="expedition-main">
      <div className="content-shell">
        <Breadcrumbs
          label={locale === "en" ? "Breadcrumbs" : "Навигационная цепочка"}
          items={items}
        />
      </div>
      <header className="page-intro content-shell">
        <p className="eyebrow">
          Murgab Hunting · {locale === "en" ? "Tajikistan" : "Таджикистан"}
        </p>
        <h1>{page.title[locale]}</h1>
        <p>{page.intro[locale]}</p>
        {/* <Link
          className="expedition-button"
          href={`/${locale}/contact#book`}
          data-track="plan_hunt_click"
        >
          {labels.plan[locale]}
        </Link> */}
      </header>
      {page.animal && (
        <div className="content-shell">
          <Image
            className="page-lead-image"
            src={page.animal === "marco-polo" ? MarcoPolo : Ibex}
            alt={page.title[locale]}
            sizes="(max-width: 1200px) 95vw, 1160px"
            priority
          />
        </div>
      )}
      {/* {page.slug === "about" && (
        <div className="content-shell">
          <Image
            className="page-lead-image"
            src={Landscape}
            alt={labels.pamirs[locale]}
            sizes="(max-width: 1200px) 95vw, 1160px"
            priority
          />
        </div>
      )} */}
      <div className="content-shell">
        {!["pamir-hunting-camp", "hunting-permits"].includes(page.slug) &&
          page.sections.map((section) => (
            <section className="content-section" key={section.heading.en}>
              <h2>{section.heading[locale]}</h2>
              <p>{section.body[locale]}</p>
            </section>
          ))}
        {page.slug === "hunting-packages" && (
          <>
            <HuntCards locale={locale} />
            <section className="content-section">
              <h2>{labels.pricing[locale]}</h2>
              <div className="table-scroll">
                <table>
                  <caption>
                    {locale === "en"
                      ? "Discuss available hunt options"
                      : "Обсудите доступные варианты охоты"}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">{labels.explore[locale]}</th>
                      <th scope="col">
                        {locale === "en"
                          ? "Dates and pricing"
                          : "Даты и стоимость"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Marco Polo", "Pamir Ibex"].map((species) => (
                      <tr key={species}>
                        <th scope="row">
                          {species === "Marco Polo"
                            ? locale === "en"
                              ? "Marco Polo Argali"
                              : "Баран Марко Поло"
                            : locale === "en"
                              ? "Pamir Ibex"
                              : "Памирский козерог"}
                        </th>
                        <td>
                          <Link href={`/${locale}/contact#book`}>
                            {labels.pricing[locale]}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
        {page.slug === "hunting-permits" && (
          <PermitsPage locale={locale} page={page} />
        )}
        {(page.slug === "travel-to-tajikistan" || page.animal) && (
          <Journey locale={locale} />
        )}
        {page.slug === "pamir-hunting-camp" && <CampPage locale={locale} />}
        {page.slug === "about" && (
          <>
            <ExpeditionMap locale={locale} />
            <Founders locale={locale} />
            <Guides locale={locale} />
            <Link href={`/${locale}/conservation`}>
              {labels.conservation[locale]}
            </Link>
          </>
        )}
        {page.animal && (
          <>
            <AnimalGallery animal={page.animal} />
            <Faq locale={locale} />
            <section className="content-section">
              <h2>{labels.explore[locale]}</h2>
              <HuntCards locale={locale} exclude={page.animal} />
            </section>
          </>
        )}

        {page.slug === "contact" && (
          <div id="book" className="contact-body contact-inquiry">
            <InquiryDraft locale={locale} />
            <div className="contact-direct">
              <p>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </p>
              <p>
                <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
              </p>
            </div>
          </div>
        )}
        <RelatedLinks locale={locale} exclude={page.slug} />
      </div>
      {page.slug !== "contact" && <Contact locale={locale} />}
    </main>
  );
}
