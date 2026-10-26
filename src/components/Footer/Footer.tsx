import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { business, labels } from "@/data/site-content";
import type { Locale } from "@/lib/navigation";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import "./Footer.css";
export default function Footer({ locale }: { locale: Locale }) {
  const groups = [
    {
      title: labels.explore[locale],
      links: [
        [
          "marco-polo-sheep-hunting",
          locale === "en" ? "Marco Polo Argali" : "Баран Марко Поло",
        ],
        [
          "pamir-ibex-hunting",
          locale === "en" ? "Pamir Ibex" : "Памирский козерог",
        ],
        [
          "hunting-packages",
          locale === "en" ? "Hunting Packages" : "Охотничьи программы",
        ],
      ],
    },
    {
      title: locale === "en" ? "Plan your trip" : "Подготовка поездки",
      links: [
        [
          "hunting-season",
          locale === "en" ? "Seasons & Dates" : "Сезоны и даты",
        ],
        [
          "hunting-permits",
          locale === "en" ? "Permits & Documents" : "Разрешения и документы",
        ],
        [
          "pamir-hunting-camp",
          locale === "en" ? "Hot Springs Camp" : "Лагерь Hot Springs",
        ],
        [
          "travel-to-tajikistan",
          locale === "en" ? "Travel to Tajikistan" : "Поездка в Таджикистан",
        ],
      ],
    },
    {
      title: locale === "en" ? "Company" : "Компания",
      links: [
        ["about", locale === "en" ? "Our Story & Team" : "История и команда"],
        ["conservation", locale === "en" ? "Conservation" : "Охрана природы"],
        [
          "gallery",
          locale === "en" ? "Expedition Gallery" : "Галерея экспедиций",
        ],
        [
          "blog",
          locale === "en" ? "Expedition Notes" : "Заметки об экспедициях",
        ],
        ["contact", locale === "en" ? "Contact Us" : "Связаться с нами"],
      ],
    },
  ];
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <Link href={`/${locale}`} className="site-footer__brand">
            <Image src={Logo} width={90} height={105} alt="" />
            <div>
              <span className="site-footer__name">Murgab Hunting</span>
              <span className="site-footer__tagline">
                {locale === "en"
                  ? "The Pamirs. Our home. Your expedition."
                  : "Памир — наш дом. Ваша экспедиция."}
              </span>
              <span className="site-footer__since">
                {locale === "en" ? "Since 1989" : "С 1989 года"}
              </span>
            </div>
          </Link>
          <Link
            className="site-footer__cta"
            href={`/${locale}/contact#book`}
            data-track="plan_hunt_click"
          >
            {labels.plan[locale]}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
        <div className="site-footer__columns">
          {groups.map((group) => (
            <nav aria-label={group.title} key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map(([slug, label]) => (
                  <li key={slug}>
                    <Link href={`/${locale}/${slug}`}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="site-footer__contact">
            <h2>{locale === "en" ? "Let’s talk" : "Свяжитесь с нами"}</h2>
            <a
              className="site-footer__contact-link"
              href={`mailto:${business.email}`}
            >
              <Mail size={17} aria-hidden="true" />
              <span>{business.email}</span>
            </a>
            <a
              className="site-footer__contact-link"
              href={`tel:${business.phone}`}
            >
              <Phone size={17} aria-hidden="true" />
              <span>{business.phoneDisplay}</span>
            </a>
            <p className="site-footer__location">
              <MapPin size={17} aria-hidden="true" />
              <span>
                {locale === "en"
                  ? "Pamir Mountains, Tajikistan"
                  : "Горы Памира, Таджикистан"}
              </span>
            </p>
            <div className="site-footer__social">
              <a
                href={business.social[0]}
                aria-label={
                  locale === "en"
                    ? "Murgab Hunting on Instagram"
                    : "Murgab Hunting в Instagram"
                }
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a
                href={business.social[1]}
                aria-label={
                  locale === "en"
                    ? "Murgab Hunting on YouTube"
                    : "Murgab Hunting в YouTube"
                }
              >
                <Youtube size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>
            © {new Date().getUTCFullYear()} Murgab Hunting.{" "}
            {locale === "en" ? "All rights reserved." : "Все права защищены."}
          </p>
          <span>
            {locale === "en"
              ? "Rooted in the Pamirs"
              : "Наши корни — на Памире"}
          </span>
        </div>
      </div>
    </footer>
  );
}
