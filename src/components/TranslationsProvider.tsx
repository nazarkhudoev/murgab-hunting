"use client";

import { ReactNode } from "react";
import {I18nextProvider} from 'react-i18next';
import initTranslations from "../i18n";
import { createInstance, Resource } from "i18next";

type TranslationsProviderProps = {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources?: Resource;
};

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderProps): JSX.Element {
  const i18n = createInstance();

  initTranslations({ locale, namespaces, i18nInstance: i18n, resources });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
