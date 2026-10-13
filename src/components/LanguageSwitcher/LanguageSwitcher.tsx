"use client";
import { isLocale } from "@/lib/navigation";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <select
      value={i18n.language}
      aria-label={t("Accessibility.language")}
      onChange={(event) => {
        const locale = event.target.value;
        if (!isLocale(locale)) return;
        document.cookie = `NEXT_LOCALE=${locale};max-age=2592000;path=/;SameSite=Lax${location.protocol === "https:" ? ";Secure" : ""}`;
        const path = pathname.replace(/^\/(en|ru)(?=\/|$)/, `/${locale}`);
        router.push(`${path}${window.location.search}${window.location.hash}`);
      }}
      className="h-[26px] bg-white px-2 py-1 text-orange-600 rounded-[6px] text-sm"
    >
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
}
