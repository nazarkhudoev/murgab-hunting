
import type { Metadata } from "next";

import { Inter, Roboto } from "next/font/google";
import Head from "next/head";
import ogImage from "../../../public/og-image.png";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/i18n";

import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const i18nNamesapaces = ["common"];


const roboto = Roboto({
  // weight: ["100", "300", "500", "700", "900"],
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export async function generateMetadata({ params: { locale } }: {
  params: { locale: string };
}): Promise<Metadata> {

  const { t } = await initTranslations({ locale, namespaces: i18nNamesapaces });


  return {
    metadataBase: new URL("https://www.murgabhunting.com"),
    title: t('Layout.metaData.title'),
    // title: "Murgab Hunting",
    description: t('Layout.metaData.description'),
    openGraph: {
      title: t('Layout.metaData.title'),
      description: t('Layout.metaData.description'),
      images: [
        {
          url: ogImage.src, // Replace with the actual URL of your image
          width: 800,
          height: 600,
          alt: "Murgab Hunting",
        },
      ],
    },
    keywords: ['Marco polo', 'Марко Поло','Мургаб', 'Памир', 'Hot Springs Camp', 'Охота', 'ГБАО', 'Argali', 'Ibex','Козерог', 'Hunting', 'Pamir','Yak', 'Wolf', 'Mugab', 'conservation hunting'],
    robots: "index, follow",

  };
}



export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const { t, resources } = await initTranslations({ locale, namespaces: i18nNamesapaces });

  return (
    <html className={roboto.className} lang={locale}>
      {/* <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.murgabhunting.com",
              "logo": "https://www.murgabhunting.com/logo.png"
            })
          }}
        />
      </Head> */}
      <body>
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamesapaces}>
          <Header />
          {children}
          <Footer />

        </TranslationsProvider>


        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
      </body>
    </html>
  );
}