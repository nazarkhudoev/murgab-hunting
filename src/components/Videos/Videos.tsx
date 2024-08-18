'use client'
import { useTranslation } from "react-i18next";
import "./Videos.css"

export default function Videos() {
  const { i18n } = useTranslation();
  const localeActive = i18n.language;

  return (
    <section id="video" className="mt-[200px] flex ">
      <div id="videoSectionContent" className=" flex-col justify-center items-stretch w-[100%] max-w-full mx-auto relative px-[40px] ">
        <h1 className="text-center mb-[50px] text-2xl tracking-[1.5px] text-white uppercase">
          {localeActive === "en"?"Video":"Видео"}
        </h1>

        <div
          className="elfsight-app-a8064645-06c0-45af-8b23-3514694ae97e"
          data-elfsight-app-lazy
        ></div>
      </div>

    </section>
  );
}
