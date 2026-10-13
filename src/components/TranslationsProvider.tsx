"use client";
import i18nConfig from "@/i18nConfig";
import { createInstance, type Resource } from "i18next";
import { type ReactNode, useState } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}) {
  const [i18n] = useState(() => {
    const instance = createInstance();
    instance.use(initReactI18next).init({
      lng: locale,
      resources,
      supportedLngs: i18nConfig.locales,
      fallbackLng: i18nConfig.defaultLocale,
      ns: namespaces,
      defaultNS: namespaces[0],
      initImmediate: false,
      interpolation: { escapeValue: false },
    });
    return instance;
  });
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
