import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import Efforts from "../Efforts/Efforts";
import SecondaryEfforts from "../SecondaryEfforts/SecondaryEfforts";
import "./AboutConservation.css";

export default async function AboutConservation({
  locale,
}: {
  locale: Locale;
}) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <section id="conservation" className="mb-[100px]">
      <div className="w-[1200px] max-w-full mx-auto text-white">
        <div className="text-center">
          <h3 className="text-2xl font-semibold uppercase mb-[100px] tracking-[1.5px]">
            {t("Content.AboutConservation.text1")}
          </h3>
          <p className="w-[780px] mx-auto max-w-full px-[16px]">
            {t("Content.AboutConservation.text2")}
          </p>
        </div>
      </div>
      <Efforts locale={locale} />
      <p className="text-white text-center px-5 mt-[100px] w-[900px] max-w-full mx-auto font-medium essence">
        {t("Content.AboutConservation.text3")}
      </p>
      <SecondaryEfforts locale={locale} />
    </section>
  );
}
