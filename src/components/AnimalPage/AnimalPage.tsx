import { trophiesData } from "@/data/trophies";
import { labels } from "@/data/site-content";
import type { AnimalSlug, Locale } from "@/lib/navigation";
import Image from "next/image";
import Breadcrumbs from "../Seo/Breadcrumbs";
import AnimalGallery from "../AnimalGallery/AnimalGallery";
import Contact from "../Contact/Contact";
import { HuntCards, RelatedLinks } from "../ExpeditionContent/Shared";
export default async function AnimalPage({
  animal,
  locale,
}: {
  animal: AnimalSlug;
  locale: Locale;
}) {
  const hunt = trophiesData.find((item) => item.id === animal)!;
  return (
    <main className="expedition-main">
      <div className="content-shell">
        <Breadcrumbs
          label={locale === "en" ? "Breadcrumbs" : "Навигационная цепочка"}
          items={[
            { label: labels.home[locale], href: `/${locale}` },
            {
              label: labels.explore[locale],
              href: `/${locale}/hunting-packages`,
            },
            { label: hunt.title[locale], href: `/${locale}${hunt.url}` },
          ]}
        />
        <header className="page-intro">
          <h1>{hunt.title[locale]}</h1>
          <p>
            {locale === "en"
              ? "This species appears in our existing expedition collection. Contact the team to confirm current availability, permissions and trip arrangements."
              : "Этот вид представлен в существующей коллекции экспедиций. Уточните у команды актуальную доступность, разрешения и условия поездки."}
          </p>
        </header>
        <Image
          className="page-lead-image"
          src={hunt.image}
          alt={hunt.title[locale]}
          sizes="(max-width: 1200px) 95vw, 1160px"
          priority
        />
        <AnimalGallery animal={animal} />
        <section className="content-section">
          <h2>{labels.explore[locale]}</h2>
          <HuntCards locale={locale} exclude={animal} />
        </section>
        <RelatedLinks locale={locale} />
      </div>
      <Contact locale={locale} />
    </main>
  );
}
