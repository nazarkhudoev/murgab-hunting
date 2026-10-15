import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, MapPin, Mountain } from "lucide-react";
import Landscape from "@/assets/photos/lanedscape/gallery-landscape-08.jpg";
import { labels } from "@/data/site-content";
import type { Locale } from "@/lib/navigation";
import "./PamirExperience.css";

export default function PamirExperience({ locale }: { locale: Locale }) {
  const english = locale === "en";
  const features = [
    {
      icon: Mountain,
      title: english ? "Mountain terrain" : "Горный рельеф",
      detail: english
        ? "Discuss your hunting area and route"
        : "Обсудите район охоты и маршрут",
    },
    {
      icon: Compass,
      title: english ? "Remote landscapes" : "Удалённые ландшафты",
      detail: english
        ? "Discover Tajikistan’s Pamir wilderness"
        : "Откройте для себя природу Памира",
    },
    {
      icon: MapPin,
      title: english ? "Local knowledge" : "Знание местности",
      detail: english
        ? "Plan with our team in the Pamirs"
        : "Планируйте с нашей командой на Памире",
    },
  ];
  return (
    <section
      className="content-section pamir-experience"
      aria-labelledby="pamir-experience-heading"
    >
      <div className="pamir-hero">
        <Image
          src={Landscape}
          alt={
            english
              ? "Snow-covered mountains from the Pamir expedition photo collection"
              : "Заснеженные горы из коллекции фотографий экспедиций на Памире"
          }
          fill
          sizes="(max-width: 1200px) 95vw, 1160px"
        />
        <div className="pamir-hero-shade" aria-hidden="true" />
        <span className="pamir-location">
          <MapPin size={15} aria-hidden="true" />
          {english
            ? "Pamir Mountains · Tajikistan"
            : "Горы Памира · Таджикистан"}
        </span>
        <div className="pamir-hero-copy">
          <p className="pamir-eyebrow">
            <span aria-hidden="true" />
            {english
              ? "The place behind the expedition"
              : "Место, где начинается экспедиция"}
          </p>
          <h2 id="pamir-experience-heading">{labels.pamirs[locale]}</h2>
          <p className="pamir-story">{labels.pamirsBody[locale]}</p>
          <Link
            href={`/${locale}/travel-to-tajikistan`}
            className="pamir-travel-link"
          >
            {english
              ? "Explore the journey to Tajikistan"
              : "Поездка в Таджикистан"}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <ul className="pamir-features">
        {features.map(({ icon: Icon, title, detail }) => (
          <li key={title}>
            <span className="pamir-feature-icon">
              <Icon size={24} strokeWidth={1.35} aria-hidden="true" />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
