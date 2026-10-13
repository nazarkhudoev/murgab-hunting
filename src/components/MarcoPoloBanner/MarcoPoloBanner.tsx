import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import "./MarcoPoloBanner.css";

export default async function MarcoPoloBanner({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <div className="pt-[200px] pb-14 relative marcopolo__banner">
      <section className="w-[1200px] mx-auto">
        <h1 className="flex-col text-white text-[80px] font-bold uppercase tracking-[2px] relative z-[89]">
          {t("Content.MarcoPoloBanner.text1")}
        </h1>

        <div className="flex items-start flex-wrap gap-[40px] relative z-[99] animal_statistics">
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold"> +27k</h3>
            <p>{t("Content.MarcoPoloBanner.text2")}</p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">+2k</h3>
            <p>{t("Content.MarcoPoloBanner.text3")}</p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">5 k (20%)</h3>
            <p>{t("Content.MarcoPoloBanner.text4")} </p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">7 k (23.9%)</h3>
            <p>{t("Content.MarcoPoloBanner.text5")} </p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">3 k (11%)</h3>
            <p>{t("Content.MarcoPoloBanner.text6")} </p>
          </div>
        </div>
      </section>
      <div className="gradient-marcopolo absolute left-0 -bottom-[77px]"></div>
    </div>
  );
}
