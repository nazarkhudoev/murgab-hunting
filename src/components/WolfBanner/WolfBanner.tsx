import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import "./WolfBanner.css";

export default async function WolfBanner({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <section className="pt-[200px] relative pb-14 wolf__banner">
      <section className="w-[1200px] max-w-full mx-auto">
        <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px]">
          {t("Content.WolfBanner.text1")}
        </h1>
        <div className="text-[#8E7E57] mt-[160px] relative z-[999] wold-info">
          <h3 className="text-5xl font-semibold">5,000</h3>
          <p className="mt-2">{t("Content.WolfBanner.text2")}</p>
        </div>
      </section>
      <div className="gradient-wolf absolute left-0 -bottom-[44px]"></div>
    </section>
  );
}
