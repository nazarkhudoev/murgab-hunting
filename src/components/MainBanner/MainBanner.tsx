import Image from "next/image";
import HeroVideo from "./HeroVideo";
import Link from "next/link";
import Landscape from "@/assets/main-bg-1.webp";
import { labels } from "@/data/site-content";
import type { Locale } from "@/lib/navigation";
export default function MainBanner({ locale }: { locale: Locale }) {
  return (
    <section className="expedition-hero">
      <Image
        src={Landscape}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-photograph"
      />
      <HeroVideo poster={Landscape.src} locale={locale} />
      <div className="hero-shade" />
      <div className="content-shell hero-copy">
        <p className="eyebrow">
          Murgab Hunting · {locale === "en" ? "Pamir Mountains" : "Горы Памира"}
        </p>
        <h1>
          {locale === "en"
            ? "Marco Polo & Ibex Hunting in Tajikistan"
            : "Охота на Марко Поло и козерога в Таджикистане"}
        </h1>
        <p>
          {locale === "en"
            ? "Guided expeditions in the Pamir Mountains with a local team operating since 1989."
            : "Экспедиции в горах Памира с местной командой, работающей с 1989 года."}
        </p>
        <div className="hero-actions">
          <Link
            className="expedition-button"
            href={`/${locale}/contact#book`}
            data-track="plan_hunt_click"
          >
            {labels.plan[locale]}
          </Link>
          <Link
            className="expedition-button secondary"
            href={`/${locale}/hunting-packages`}
          >
            {labels.explore[locale]}
          </Link>
        </div>
      </div>
    </section>
  );
}
