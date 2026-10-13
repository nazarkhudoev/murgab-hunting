import "server-only";

const dictionaries = {
  en: () => import("@/locales/en/common.json").then((module) => module.default),
  ru: () => import("@/locales/ru/common.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  return locale === "ru" ? dictionaries.ru() : dictionaries.en();
};
