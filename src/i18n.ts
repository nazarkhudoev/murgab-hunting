import { createInstance, InitOptions, TFunction, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from './i18nConfig';

type InitTranslationsParams = {
  locale: string;
  namespaces: string[];
  i18nInstance?: ReturnType<typeof createInstance>;
  resources?: Resource;
};

type InitTranslationsResult = {
  i18n: ReturnType<typeof createInstance>;
  resources: Resource;
  t: TFunction;
};

export default async function initTranslations({
  locale,
  namespaces,
  i18nInstance,
  resources
}: InitTranslationsParams): Promise<InitTranslationsResult> {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend((language:string, namespace:string) =>
        import(`@/locales/${language}/${namespace}.json`)
      )
    );
  }

  const initOptions: InitOptions = {
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  };

  await i18nInstance.init(initOptions);

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data as Resource,
    t: i18nInstance.t,
  };
}