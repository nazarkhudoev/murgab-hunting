import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, FileText, Mountain, Route } from "lucide-react";
import ExpeditionPhoto from "@/assets/photos/lanedscape/gallery-landscape-12.jpg";
import { business, labels } from "@/data/site-content";
import type { Locale } from "@/lib/navigation";
import "./Heritage.css";

export default function Heritage({ locale }: { locale: Locale }) {
  const english = locale === "en";
  const pillars = [
    {
      icon: Clock3,
      title: `${new Date().getUTCFullYear() - business.founded}+ ${english ? "years" : "лет"}`,
      detail: english
        ? "An expedition tradition since 1989"
        : "Традиции экспедиций с 1989 года",
    },
    {
      icon: Mountain,
      title: english ? "Local Pamir team" : "Местная команда",
      detail: english
        ? "Guides with roots in the Pamirs"
        : "Гиды, связанные с Памиром",
    },
    {
      icon: FileText,
      title: english ? "Permit assistance" : "Помощь с разрешениями",
      detail: english
        ? "Hunting & CITES document coordination"
        : "Охотничьи документы и CITES",
    },
    {
      icon: Route,
      title: english ? "Expedition logistics" : "Организация экспедиции",
      detail: english
        ? "Arrival, camp & transport arrangements"
        : "Прибытие, лагерь и транспорт",
    },
  ];
  return (
    <section
      className="content-section heritage-section"
      id="about"
      aria-labelledby="heritage-heading"
    >
      <div className="heritage-photo">
        <Image
          src={ExpeditionPhoto}
          alt={
            english
              ? "Expedition member using a spotting scope beside a vehicle in snowy mountain terrain"
              : "Участник экспедиции с наблюдательной трубой у автомобиля в заснеженных горах"
          }
          fill
          sizes="(max-width: 800px) 92vw, (max-width: 1200px) 40vw, 440px"
        />
        <div className="heritage-photo-shade" aria-hidden="true" />
        <div className="heritage-photo-caption">
          <span>
            {english ? "Our story began in" : "Наша история началась в"}
          </span>
          <strong>{business.founded}</strong>
          <p>
            {english
              ? "Pamir Mountains · Tajikistan"
              : "Горы Памира · Таджикистан"}
          </p>
        </div>
      </div>
      <div className="heritage-copy">
        <p className="heritage-eyebrow">
          <span aria-hidden="true" />
          {english ? "Our roots run deep" : "Наши корни — на Памире"}
        </p>
        <h2 id="heritage-heading">{labels.trust[locale]}</h2>
        <p className="heritage-story">{labels.historyBody[locale]}</p>
        <ul className="heritage-pillars">
          {pillars.map(({ icon: Icon, title, detail }) => (
            <li key={title}>
              <span className="heritage-icon">
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link href={`/${locale}/about`} className="heritage-link">
          {english ? "Discover our story & team" : "Наша история и команда"}
          <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
