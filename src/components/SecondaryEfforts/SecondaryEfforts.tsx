import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import "./SecondaryEfforts.css";

export default async function SecondaryEfforts({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <div className="w-[1200px] max-w-full mx-auto px-5 text-white flex items-start justify-between gap-[60px] secondary__efforts">
      <div className="w-[580px] max-w-full mt-[80px]">
        <h5 className="text-[#8E7E57] font-bold">
          {t("Content.SecondaryEfforts.text1")}
        </h5>
        <p className="mt-3 text-white font-light text-justify">
          {t("Content.SecondaryEfforts.text2")}
        </p>
      </div>
      <div className="w-[580px] max-w-full mt-[80px]">
        <h5 className="text-[#8E7E57] font-bold">
          {t("Content.SecondaryEfforts.text3")}
        </h5>
        <p className="mt-3 text-white font-light text-justify">
          {t("Content.SecondaryEfforts.text4")}
        </p>
      </div>
    </div>
  );
}
