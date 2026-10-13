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
  const path = pathname.replace(/^\/(en|ru)(?=\/|$)/, "").replace(/\/$/, "");
  if (path === "/about-us") {
    return ["history", "founders", "team", "conservation", "book"].map(
      (id) => ({
        href: `#${id}`,
        label: t(`Aboutlist.${id}`),
      }),
    );
  }
  if (animalSlugs.some((slug) => path === `/${slug}`)) {
    const keys = ["marcopolo", "ibex", "brukey", "yak", "wolf"];
    return [
      ...animalSlugs.map((slug, index) => ({
        href: localizedPath(locale, `/${slug}`),
        label: t(`Animallist.${keys[index]}`),
      })),
      { href: "#book", label: t("Animallist.book") },
    ];
  }
  return [
    ["about", "about"],
    ["trophies", "trophies"],
    ["essentials", "essentials"],
    ["camp", "camp"],
    ["gallerySection", "gallery"],
    ["video", "video"],
    ["blog", "blog"],
    ["book", "book"],
  ].map(([id, key]) => ({
    href: path ? localizedPath(locale, `#${id}`) : `#${id}`,
    label: t(`Navlist.${key}`),
  }));
}
