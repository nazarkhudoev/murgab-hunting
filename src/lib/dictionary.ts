// import 'server-only'
// import type { Locale } from '@/i18n.config'

// const dictionaries = {
//   en: () => import('@/dictionaries/en.json').then(module => module.default),
//   de: () => import('@/dictionaries/de.json').then(module => module.default)
// }

// export const getDictionary = async (locale: Locale) => dictionaries[locale]()

import 'server-only';

const dictionaries = {
  en: () => import('@/locales/en/common.json').then((module) => module.default),
  ru: () => import('@/locales/ru/common.json').then((module) => module.default),
};


export const getDictionary = async (locale: string) => {
  return locale == 'ru' ? dictionaries.en() : dictionaries.ru();
};