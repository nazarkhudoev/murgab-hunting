import AboutBanner from "@/components/AboutBanner/AboutBanner";
import AboutConservation from "@/components/AboutConservation/AboutConservation";
import AboutHistory from "@/components/AboutHistory/AboutHistory";
import Contact from "@/components/Contact/Contact";
import FoundersCarousel from "@/components/FoundersCarousel/FoundersCarousel";
import Team from "@/components/Team/Team";
import initTranslations from "@/i18n";
import { pageMetadata, routeLocale, type LocaleParams } from "@/lib/seo";
import "./about.css";
export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await routeLocale(params), "about-us", "/about-us");
}
export default async function AboutPage({ params }: LocaleParams) {
  const locale = await routeLocale(params);
  const { t } = await initTranslations({ locale, namespaces: ["common"] });
  return (
    <main id="about-page">
      <AboutBanner locale={locale} />
      <AboutHistory locale={locale} />
      <FoundersCarousel />

      <div
        id="team"
        className="w-[1200px] max-w-full mx-auto mb-[150px] mt-[200px]"
      >
        <h3 className="text-center text-white font-semibold text-2xl uppercase mb-[100px] tracking-[1.5px]">
          {t("Content.AboutPage.text8")}
        </h3>
        <Team />
      </div>
      <AboutConservation locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
