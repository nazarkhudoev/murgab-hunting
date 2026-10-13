import HistoryImage from "@/assets/Photo.jpg";
import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import Image from "next/image";

import "./AboutHistory.css";

export default async function AboutHistory({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <section
      id="history"
      className="pb-10 pt-[130px] w-[1400px] max-w-[100%] mx-auto px-[120px] text-white"
    >
      <h3 className="uppercase text-center text-white text-2xl font-semibold tracking-[1.5px]">
        {t("Content.AboutHistory.text1")}
      </h3>
      <div className="mt-[50px] flex items-start justify-between gap-[50px] about-history-container">
        <Image
          src={HistoryImage}
          alt="HistoryImage"
          width={400}
          height={367}
          className="border-2 border-[#8E7E57] w-[400px] h-[367px] object-cover max-w-full rounded-[10px] history__text-image"
        />
        <div className="w-[730px] max-w-full">
          <p className="font-light text-justify leading-[29px] company__history-text">
            {t("Content.AboutHistory.text2")}
          </p>
          <p className="mt-6 font-light text-justify leading-[29px] company__history-text">
            {t("Content.AboutHistory.text3")}
          </p>
          <p className="mt-6 font-light text-justify leading-[29px] company__history-text">
            {t("Content.AboutHistory.text4")}
          </p>
        </div>
      </div>
    </section>
  );
}
