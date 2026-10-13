import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import "./AboutBanner.css";

import Image from "next/image";
import OldLogo from "../../assets/old-logo.png";

export default async function AboutBanner({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <section className="relative">
      <div className="about__banner">
        <div className="w-[1400px] max-w-full mx-auto about__text-container">
          <h1 className="text-6xl uppercase font-bold tracking-[1.5px]">
            {t("Content.AboutBanner.text1")}
          </h1>
          <div className="mt-[140px] relative about__text z-[9999] flex items-center gap-[50px] about__banner-wrapper">
            <Image
              src={OldLogo}
              alt="OldLogo"
              width={161}
              height={160}
              className=""
            />
            <p className="text-[22px] font-light w-[965px] max-w-full text-justify">
              {t("Content.AboutBanner.text2")}
            </p>
          </div>
        </div>
      </div>
      <div className="about-gradient"></div>
    </section>
  );
}
