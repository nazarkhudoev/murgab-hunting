import initTranslations from "@/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "./navigation";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.murgabhunting.com"
).replace(/\/$/, "");
export type LocaleParams = { params: Promise<{ locale: string }> };

export async function routeLocale(
  params: LocaleParams["params"],
): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function pageMetadata(
  locale: Locale,
  page: string,
  path = "",
): Promise<Metadata> {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });
  const title = t(`Pages.${page}.title`);
  const description = t(`Pages.${page}.description`);
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}${path}`,
      languages: {
        ...Object.fromEntries(
          locales.map((language) => [
            language,
            `${siteUrl}/${language}${path}`,
          ]),
        ),
        "x-default": `${siteUrl}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}${path}`,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 800,
          height: 600,
          alt: "Murgab Hunting",
        },
      ],
    },
  };
}
