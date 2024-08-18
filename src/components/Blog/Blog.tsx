
'use client'
import { useTranslation } from "react-i18next";
import "./Blog.css";

export default function Blog() {
  const { i18n } = useTranslation();
  const localeActive = i18n.language;

  return (
    <section className="mt-[200px]" id="blog">
      <h3 className="text-center text-white text-2xl font-semibold mb-[100px] uppercase tracking-[1.5px] blog__title">
        {localeActive === "en" ? "Blog" : "Блог"}
      </h3>
      <div
        className="elfsight-app-565e7f16-ffc5-4652-96e8-b36af930a2b9"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
}
