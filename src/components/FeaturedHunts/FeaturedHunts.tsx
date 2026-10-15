import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { trophiesData } from "@/data/trophies";
import type { Locale } from "@/lib/navigation";
import "./FeaturedHunts.css";

export default function FeaturedHunts({ locale }: { locale: Locale }) {
  const english = locale === "en";
  const primary = trophiesData.slice(0, 2);
  const secondary = trophiesData.slice(2);
  return (
    <section
      className="content-section featured-hunts"
      id="trophies"
      aria-labelledby="featured-hunts-heading"
    >
      <div className="featured-hunts-heading">
        <div>
          <p className="hunts-eyebrow">
            <span aria-hidden="true" />
            {english ? "Choose your expedition" : "Выберите экспедицию"}
          </p>
          <h2 id="featured-hunts-heading">
            {english ? "Hunt the Pamirs" : "Охота на Памире"}
          </h2>
        </div>
        <p className="hunts-intro">
          {english
            ? "Explore Marco Polo sheep and Pamir ibex expeditions with our local team in Tajikistan’s mountain wilderness."
            : "Познакомьтесь с экспедициями за бараном Марко Поло и памирским козерогом с нашей местной командой в горах Таджикистана."}
        </p>
      </div>
      <div className="primary-hunts" id="trophies-carousel">
        {primary.map((hunt, index) => {
          const title =
            index === 0
              ? english
                ? "Marco Polo Sheep"
                : "Баран Марко Поло"
              : english
                ? "Pamir Ibex"
                : "Памирский козерог";
          return (
            <Link
              key={hunt.id}
              href={`/${locale}${hunt.url}`}
              className="hunt-image-card"
              data-animal={hunt.id}
              data-track="species_interest"
              data-species={hunt.id}
            >
              <Image
                src={hunt.image}
                alt={title}
                fill
                sizes="(max-width: 700px) 92vw, (max-width: 1200px) 46vw, 568px"
              />
              <span className="hunt-card-shade" aria-hidden="true" />
              <span className="hunt-card-location">
                {english
                  ? "Pamir Mountains · Tajikistan"
                  : "Горы Памира · Таджикистан"}
              </span>
              <div className="hunt-card-copy">
                <span className="hunt-card-category">
                  {index === 0
                    ? english
                      ? "Marco Polo Argali"
                      : "Аргали Марко Поло"
                    : english
                      ? "Mountain expedition"
                      : "Горная экспедиция"}
                </span>
                <h3>{title}</h3>
                <div className="hunt-card-action">
                  <span>
                    {english ? "Explore this hunt" : "Подробнее об охоте"}
                  </span>
                  <span className="hunt-card-arrow">
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="other-hunts-heading">
        <h3>
          {english
            ? "Other expedition enquiries"
            : "Другие направления экспедиций"}
        </h3>
        <p>
          {english
            ? "Discuss current availability and arrangements with our team."
            : "Уточните у команды актуальную доступность и условия."}
        </p>
      </div>
      <div className="secondary-hunts">
        {secondary.map((hunt) => (
          <Link
            key={hunt.id}
            href={`/${locale}${hunt.url}`}
            className="hunt-image-card hunt-image-card--compact"
            data-animal={hunt.id}
            data-track="species_interest"
            data-species={hunt.id}
          >
            <Image
              src={hunt.image}
              alt={hunt.title[locale]}
              fill
              sizes="(max-width: 700px) 92vw, (max-width: 1200px) 30vw, 370px"
            />
            <span className="hunt-card-shade" aria-hidden="true" />
            <div className="hunt-card-copy">
              <h3>{hunt.title[locale]}</h3>
              <div className="hunt-card-action">
                <span>{english ? "View expedition" : "Об экспедиции"}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="hunts-bottom">
        <span>
          {english
            ? "Not sure where to start? Explore the available programmes."
            : "Не знаете, с чего начать? Посмотрите варианты программ."}
        </span>
        <Link href={`/${locale}/hunting-packages`} className="all-hunts-link">
          {english ? "Explore hunting packages" : "Охотничьи программы"}
          <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
