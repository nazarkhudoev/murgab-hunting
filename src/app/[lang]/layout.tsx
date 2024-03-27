import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Head from "next/head";

import "./globals.css";

import { Locale, i18n } from "@/i18n.config";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  // weight: ["100", "300", "500", "700", "900"],
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murgab Hunting",
  description: "Murgab Hunting",
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
