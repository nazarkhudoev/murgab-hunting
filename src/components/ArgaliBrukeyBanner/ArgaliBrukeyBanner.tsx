import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import "./ArgaliBrukeyBanner.css";
export default async function ArgaliBrukeyBanner({
  locale,
}: {
  locale: Locale;
}) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <div className="pt-[200px] pb-14 px-[85px] relative argali-brukey__banner">
      <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px] z-[99]">
        {t("Content.ArgaliBrukeyBanner.text1")}
      </h1>

      <div className="gradient-argali-brukey absolute left-0 -bottom-[44px]"></div>
    </div>
  );
}
