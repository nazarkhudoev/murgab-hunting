"use client";
import Link from "next/link";
import { locales } from "@/lib/navigation";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="language-links" aria-label={t("Accessibility.language")}>
      {locales.map((locale) => {
        const path = pathname.replace(/^\/(en|ru)(?=\/|$)/, `/${locale}`);
        return (
          <Link
            key={locale}
            href={path}
            hrefLang={locale}
            lang={locale}
            aria-current={i18n.language === locale ? "page" : undefined}
            onClick={(event) => {
              if (
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey ||
                event.altKey
              )
                return;
              event.preventDefault();
              document.cookie = `NEXT_LOCALE=${locale};max-age=2592000;path=/;SameSite=Lax${location.protocol === "https:" ? ";Secure" : ""}`;
              router.push(
                `${path}${window.location.search}${window.location.hash}`,
              );
            }}
          >
            {locale === "en" ? "EN" : "RU"}
          </Link>
        );
      })}
    </nav>
  );
}
