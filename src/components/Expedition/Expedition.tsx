import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import Pic from "@/assets/images/expedition/image.png";
import Image from "next/image";
import Icon1 from "@/assets/images/expedition/Frame 1713.svg";
import Icon2 from "@/assets/images/expedition/Frame 1713 (1).svg";
import Icon3 from "@/assets/images/expedition/Frame 1713 (2).svg";
import Icon4 from "@/assets/images/expedition/Frame 1713 (3).svg";
import Icon5 from "@/assets/images/expedition/Frame 1713 (4).svg";
import Icon6 from "@/assets/images/expedition/Frame 1713 (5).svg";
import Icon7 from "@/assets/images/expedition/Frame 1713 (6).svg";
import Icon8 from "@/assets/images/expedition/Frame 1713 (7).svg";
import Icon9 from "@/assets/images/expedition/Frame 1713 (8).svg";
import ExpeditionSlider from "../ExpeditionSlider/ExpeditionSlider";
import "./Expedition.css";

const icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9];
export async function Expedition({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });
  const items = icons.map((icon, index) => (
    <div key={index}>
      <div className="flex items-center gap-3">
        <Image src={icon} alt="" width={44} height={44} />
        <p>{t(`Content.Expedition.text${4 + index * 2}`)}</p>
      </div>
      <p className="mt-3 font-extralight">
        {t(`Content.Expedition.text${5 + index * 2}`)}
      </p>
    </div>
  ));
  return (
    <section
      id="essentials"
      className="w-[1200px] max-w-full m-auto my-[200px]"
    >
      <h2 className="text-center text-white text-2xl font-medium mb-[25px] mx-2 uppercase tracking-[1.5px]">
        {t("Content.Expedition.text1")}
      </h2>
      <p className="mb-[60px] mx-10 text-white font-thin expedition__description-text">
        {t("Content.Expedition.text2")}
      </p>
      <div className="bg-[#332B18] rounded-[20px] flex items-end justify-between p-[2.25rem] expedition-wrapper">
        <div className="relative">
          <Image
            className="rounded-[10px] border-2 border-[#8E7E57] main-expedition-image"
            src={Pic}
            alt={t("Content.Expedition.text1")}
            width={600}
            height={600}
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <section className="flex-container-1">
          <h3 className="text-center uppercase text-[#8E7E57] text-[18px] font-semibold mb-4 expedition__main-title">
            {t("Content.Expedition.text3")}
          </h3>
          <div
            className="expedition__container border-2 border-[#8E7E57] h-[480px] overflow-y-scroll rounded-[10px] relative text-white w-[590px] max-w-full px-1 py-1 ml-10"
            tabIndex={0}
            role="region"
            aria-label={t("Content.Expedition.text3")}
          >
            <div className="wrapper-border flex flex-col justify-start items-start gap-10 py-[15px] px-[30px] mr-[20px]">
              {items}
            </div>
          </div>
        </section>
        <ExpeditionSlider items={items} />
      </div>
    </section>
  );
}
