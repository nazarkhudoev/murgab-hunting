import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import "./IbexBanner.css";
export default async function IbexBanner({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <section className="pt-[200px] relative pb-14 px-[85px] ibex__banner">
      <section className="w-[1200px] mx-auto">
        <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px] relative z-[93]">
          {t("Content.IbexBanner.text1")}
        </h1>
        <div className="flex items-center gap-10 relative z-[99] ibex_statistics">
          <div className="text-[#8E7E57] mt-[100px]">
            <h3 className="text-[51px] font-bold">+10 k</h3>
            <p className="mt-2">{t("Content.IbexBanner.text2")}</p>
          </div>
          <div className="text-[#8E7E57] mt-[100px]">
            <h3 className="text-[51px] font-bold">2,5 k</h3>
            <p className="mt-2">{t("Content.IbexBanner.text3")}</p>
          </div>
        </div>
      </section>
      <div className="gradient-ibex absolute left-0 -bottom-[77px]"></div>
    </section>
  );
}
