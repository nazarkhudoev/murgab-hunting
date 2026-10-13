import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import "./Contact.css";

export default async function Contact({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });
  return (
    <section id="book" className="contact-section">
      <div className="contact-form-container">
        <h2 className="text-center text-[25px] font-semibold uppercase mb-[30px] tracking-[1.5px]">
          {t("Contact.title")}
        </h2>
        <p className="text-center font-thin mb-5">{t("Contact.intro")}</p>
        <div
          className="elfsight-app-63fbac68-6b51-4102-ad1d-e2c4562b500f"
          data-elfsight-app-lazy
        />
        <div className="text-center text-white mt-8 relative z-10">
          <p className="mb-3">{t("Contact.fallback")}</p>
          <p>
            <a className="underline" href="mailto:shirinbek0494@gmail.com">
              {t("Contact.email")}: shirinbek0494@gmail.com
            </a>
          </p>
          <p className="mt-2">
            <a className="underline" href="tel:+992887743399">
              {t("Contact.phone")}: +992 88 774-33-99
            </a>
          </p>
        </div>
      </div>
      <div
        className="gradient absolute left-0 -bottom-[350px]"
        aria-hidden="true"
      />
    </section>
  );
}
