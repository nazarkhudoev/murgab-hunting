import type { TFunction } from "i18next";

export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];
export type LocalizedText = Record<Locale, string>;
export const animalSlugs = [
  "marco-polo",
  "ibex",
  "argali-brukey",
  "yak",
  "wolf",
] as const;
export type AnimalSlug = (typeof animalSlugs)[number];

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function localizedPath(locale: string, path = ""): string {
  return `/${isLocale(locale) ? locale : "en"}${path}`;
}

export function navigationLinks(
  pathname: string,
  locale: string,
  t: TFunction,
) {
  void pathname;
  return [
    ["home", "home"],
    ["about", "about"],
    ["hunting-packages", "trophies"],
    ["hunting-permits", "essentials"],
    ["pamir-hunting-camp", "camp"],
    ["gallery", "gallery"],
    ["conservation", "conservation"],
    ["blog", "blog"],
    ["contact#book", "book"],
  ].map(([path, key]) => ({
    href: localizedPath(locale, `/${path === "home" ? '' : path}`),
    label: key,
  }));
}
