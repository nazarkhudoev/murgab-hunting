import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import "./Videos.css";

export default async function Videos({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });

  return (
    <section id="video" className="mt-[200px] flex ">
      <div
        id="videoSectionContent"
        className=" flex-col justify-center items-stretch w-[100%] max-w-full mx-auto relative px-[40px] "
      >
        <h2 className="text-center mb-[50px] text-2xl tracking-[1.5px] text-white uppercase">
          {t("Content.Videos.text1")}
        </h2>

        <div
          className="elfsight-app-a8064645-06c0-45af-8b23-3514694ae97e"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
