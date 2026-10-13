import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import "./Blog.css";

export default async function Blog({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <section className="mt-[200px]" id="blog">
      <h3 className="text-center text-white text-2xl font-semibold mb-[100px] uppercase tracking-[1.5px] blog__title">
        {t("Content.Blog.text1")}
      </h3>
      <div
        className="elfsight-app-565e7f16-ffc5-4652-96e8-b36af930a2b9"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
}
