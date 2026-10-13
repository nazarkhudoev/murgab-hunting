import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import "./Efforts.css";

export default async function Efforts({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <div className="w-[1200px] max-w-full mx-auto px-5 flex items-start justify-between gap-8 efforts__wrapper">
      <div className="w-[360px] max-w-full mt-[100px] efforts__text-container">
        <h5 className="text-[#8E7E57] font-bold">
          {t("Content.Efforts.text1")}
        </h5>
        <p className="mt-3 text-white font-light text-justify leading-[22px]">
          {t("Content.Efforts.text2")}
        </p>
      </div>
      <div className="w-[360px] max-w-full mt-[100px] efforts__text-container">
        <h5 className="text-[#8E7E57] font-bold">
          {t("Content.Efforts.text3")}
        </h5>
        <p className="mt-3 text-white font-light text-justify leading-[22px]">
          {t("Content.Efforts.text4")}
        </p>
      </div>
      <div className="w-[360px] max-w-full mt-[100px] efforts__text-container">
        <h5 className="text-[#8E7E57] font-bold">
          {t("Content.Efforts.text5")}
        </h5>
        <p className="mt-3 text-white font-light text-justify leading-[22px]">
          {t("Content.Efforts.text6")}
        </p>
      </div>
    </div>
  );
}
