import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import { business, labels } from "@/data/site-content";
import InquiryDraft from "../InquiryDraft/InquiryDraft";
import "./Contact.css";

export default async function Contact({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });
  return (
    <section id="book" className="contact-section">
      <div className="contact-form-container">
        <h2 className="text-center text-[25px] font-semibold uppercase mb-[30px] tracking-[1.5px]">
          {labels.plan[locale]}
        </h2>
        <p className="text-center mb-5">{labels.contactIntro[locale]}</p>
        <InquiryDraft locale={locale} embedded />
        <div className="contact-direct text-center text-white relative z-10">
          <p className="mb-3">
            {locale === "en"
              ? "You can also contact us directly"
              : "Вы также можете связаться с нами напрямую"}
          </p>
          <p>
            <a className="underline" href={`mailto:${business.email}`}>
              {t("Contact.email")}: {business.email}
            </a>
          </p>
          <p className="mt-2">
            <a className="underline" href={`tel:${business.phone}`}>
              {t("Contact.phone")}: {business.phoneDisplay}
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
