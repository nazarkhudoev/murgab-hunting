import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, House, MapPin, Truck, Users } from "lucide-react";
import Camp from "@/assets/photos/springscamp/spring-camp-05.jpg";
import Dining from "@/assets/photos/springscamp/spring-camp-07.jpg";
import Transport from "@/assets/photos/springscamp/transportation-05.jpg";
import { labels } from "@/data/site-content";
import type { Locale } from "@/lib/navigation";
import "./CampShowcase.css";

export default function CampShowcase({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const photographs = [
    {
      image: Camp,
      icon: House,
      title: en ? "At the camp" : "В лагере",
      detail: en ? "Hot Springs Camp" : "Лагерь Hot Springs",
      alt: en
        ? "Red Hot Springs Camp building with a blue roof in the Pamir Mountains"
        : "Красное здание лагеря Hot Springs с синей крышей в горах Памира",
    },
    {
      image: Dining,
      icon: Users,
      title: en ? "Shared spaces" : "Общие пространства",
      detail: en ? "Inside the camp" : "Внутри лагеря",
      alt: en
        ? "Camp dining room with a large wooden table, chairs and sofas"
        : "Обеденная комната лагеря с большим деревянным столом, стульями и диванами",
    },
    {
      image: Transport,
      icon: Truck,
      title: en ? "Expedition transport" : "Транспорт экспедиции",
      detail: en ? "Vehicles at camp" : "Автомобили в лагере",
      alt: en
        ? "Expedition vehicles parked at camp with Pamir mountains behind them"
        : "Автомобили экспедиции на территории лагеря на фоне гор Памира",
    },
  ];
  return (
    <section
      className="content-section camp-showcase"
      id="camp"
      aria-labelledby="camp-showcase-title"
    >
      <div className="camp-showcase-heading">
        <div>
          <p className="camp-showcase-eyebrow">
            <span aria-hidden="true" />
            {en ? "A closer look at camp" : "Знакомство с лагерем"}
          </p>
          <h2 id="camp-showcase-title">{labels.camp[locale]}</h2>
        </div>
        <p className="camp-showcase-intro">{labels.campBody[locale]}</p>
      </div>
      <div className="camp-showcase-photos">
        {photographs.map(({ image, icon: Icon, title, detail, alt }, index) => (
          <figure
            key={title}
            className={index === 0 ? "camp-showcase-featured" : undefined}
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes={
                index === 0
                  ? "(max-width: 700px) 90vw, (max-width: 1200px) 55vw, 700px"
                  : "(max-width: 500px) 90vw, (max-width: 700px) 45vw, (max-width: 1200px) 35vw, 450px"
              }
            />
            <div className="camp-showcase-shade" aria-hidden="true" />
            {index === 0 && (
              <span className="camp-location">
                <MapPin size={14} aria-hidden="true" />
                {en
                  ? "Pamir Mountains · Tajikistan"
                  : "Горы Памира · Таджикистан"}
              </span>
            )}
            <figcaption>
              <span className="camp-caption-icon">
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span>
                <span className="camp-caption-detail">{detail}</span>
                <span className="camp-caption-title">{title}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="camp-showcase-bottom">
        <p>
          {en
            ? "Planning your stay? Confirm accommodation and facilities for your dates with our team."
            : "Планируете поездку? Уточните у команды условия проживания и оснащение лагеря на ваши даты."}
        </p>
        <Link href={`/${locale}/pamir-hunting-camp`}>
          {en ? "Explore the camp" : "Подробнее о лагере"}
          <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
