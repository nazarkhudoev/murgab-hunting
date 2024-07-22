import type { Metadata } from "next";

import { Inter, Roboto } from "next/font/google";
import Head from "next/head";
import ogImage from "../../../public/og-image.png";

import "./globals.css";

import { Locale, i18n } from "@/i18n.config";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  // weight: ["100", "300", "500", "700", "900"],
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export async function generateMetadata({ params: { lang } }: Params): Promise<Metadata> {

  return {
    title: "Murgab Hunting",
    description: "Murgab Hunting",
  }

};


export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html className={roboto.className} lang={params.lang}>
       <Head>
        <title>Murgab Hunting</title>
        <meta name="description" content="Murgab Hunting offers the ultimate adventure in Tajikistan's remote wilderness (Pamir). Since 1989, we've specialized in bespoke sport hunting expeditions in the majestic Pamir Gornobadakhshan Autonomous Region. " />
        <meta property="og:title" content="Murgab Hunting" />
        <meta property="og:description" content="Murgab Hunting offers unparalleled hunting adventures in Tajikistan's remote wilderness (Pamir). Founded in 1989, we provide bespoke expeditions in Pamir (the Gornobadakhshan Autonomous Region, led by a team of seasoned explorers and professional hunters.)" />
        <meta property="og:image" content={ogImage.src} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Header lang={params.lang} />
        {children}
        <Footer />
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