"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const locale = usePathname().startsWith("/ru") ? "ru" : "en";
  return (
    <main className="expedition-main content-shell">
      <header className="page-intro">
        <h1>{locale === "en" ? "Page not found" : "Страница не найдена"}</h1>
        <p>
          {locale === "en"
            ? "Explore our hunts or contact our team to plan your hunting expedition."
            : "Посмотрите наши охоты или свяжитесь с командой для планирования охоты."}
        </p>
      </header>
      <ul className="related-links">
        <li>
          <Link href={`/${locale}`}>
            {locale === "en" ? "Return home" : "На главную"}
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/marco-polo-sheep-hunting`}>
            {locale === "en"
              ? "Marco Polo Argali hunting"
              : "Охота на Марко Поло"}
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/pamir-ibex-hunting`}>
            {locale === "en" ? "Pamir ibex hunting" : "Охота на козерога"}
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/contact`}>
            {locale === "en" ? "Plan your hunt" : "Спланировать охоту"}
          </Link>
        </li>
      </ul>
    </main>
  );
}
