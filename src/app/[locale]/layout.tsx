import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/i18n";
import { locales } from "@/lib/navigation";
import { routeLocale, siteUrl, type LocaleParams } from "@/lib/seo";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const roboto = localFont({
  src: "../../assets/fonts/Roboto-Variable.ttf",
  weight: "100 900",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
};
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params,
}: LocaleParams & { children: React.ReactNode }) {
  const locale = await routeLocale(params);
  const { t, resources } = await initTranslations({
    locale,
    namespaces: ["common"],
  });
  return (
    <html className={roboto.className} lang={locale}>
      <body>
        <a href="#main-content" className="skip-link">
          {t("Accessibility.skip")}
        </a>
        <TranslationsProvider
          key={locale}
          resources={resources}
          locale={locale}
          namespaces={["common"]}
        >
          <Header />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Footer locale={locale} />
        </TranslationsProvider>
        <Script
          id="elfsight-platform"
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
