import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ClipboardList,
  FileText,
  Globe,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { labels, services, type ContentPage } from "@/data/site-content";
import type { Locale } from "@/lib/navigation";
import "./PermitsPage.css";

export default function PermitsPage({
  locale,
  page,
}: {
  locale: Locale;
  page: ContentPage;
}) {
  const en = locale === "en";
  const documents = [
    {
      service: services[0],
      icon: FileText,
      body: en
        ? "Discuss invitation arrangements for your expedition."
        : "Обсудите оформление приглашения для экспедиции.",
    },
    {
      service: services[4],
      icon: ShieldCheck,
      body: en
        ? "Confirm hunting permit arrangements for your selected programme."
        : "Уточните оформление охотничьих разрешений для выбранной программы.",
    },
    {
      service: services[2],
      icon: ClipboardList,
      body: en
        ? "Discuss firearm documentation and who coordinates each step."
        : "Обсудите оружейные документы и ответственность за каждый этап.",
    },
    {
      service: services[5],
      icon: MapPin,
      body: en
        ? "Ask which border pass arrangements apply to your planned route."
        : "Уточните пограничные пропуска для планируемого маршрута.",
    },
    {
      service: services[1],
      icon: Globe,
      body: en
        ? "Discuss CITES documentation for your species and destination."
        : "Обсудите документы CITES для выбранного вида и страны назначения.",
    },
    {
      service: services[3],
      icon: Truck,
      body: en
        ? "Ask about veterinary documents within the trophy export process."
        : "Уточните ветеринарные документы в рамках вывоза трофея.",
    },
  ];
  const steps = [
    {
      title: en ? "Share your expedition plan" : "Расскажите о поездке",
      body: en
        ? "Tell the team your preferred species, dates, group size and destination country."
        : "Сообщите команде выбранный вид, даты, размер группы и страну назначения.",
    },
    {
      title: en
        ? "Agree the document responsibilities"
        : "Согласуйте ответственность",
      body: en
        ? "Ask for a written list of the documents the team coordinates and the approvals you arrange yourself."
        : "Запросите письменный список документов, которые помогает оформить команда, и разрешений, которые вы оформляете самостоятельно.",
    },
    {
      title: en
        ? "Confirm the plan before travel"
        : "Подтвердите план до поездки",
      body: en
        ? "Review document status, timing, travel arrangements and the proposed trophy export process with the team."
        : "Проверьте с командой статус документов, сроки, организацию поездки и предполагаемый порядок вывоза трофея.",
    },
  ];
  return (
    <div className="permits-page">
      <nav
        className="permits-nav"
        aria-label={en ? "On this permits page" : "На странице разрешений"}
      >
        {[
          {
            id: "permit-services",
            title: en ? "Document assistance" : "Помощь с документами",
          },
          {
            id: "permit-process",
            title: en ? "Preparation steps" : "Этапы подготовки",
          },
          {
            id: "trophy-documents",
            title: en ? "Trophy & onward travel" : "Трофеи и перевозка",
          },
        ].map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.title}
            <ArrowDown size={14} aria-hidden="true" />
          </a>
        ))}
      </nav>
      <aside
        className="permit-confirmation"
        aria-labelledby="permit-confirmation-title"
      >
        <ShieldCheck size={27} strokeWidth={1.5} aria-hidden="true" />
        <div>
          <p className="permits-eyebrow">
            {en ? "Start with your specific trip" : "Начните с вашей поездки"}
          </p>
          <h2 id="permit-confirmation-title">
            {page.sections[0].heading[locale]}
          </h2>
          <p>{labels.regulatory[locale]}</p>
        </div>
      </aside>
      <section
        className="permit-documents"
        id="permit-services"
        aria-labelledby="permit-documents-title"
      >
        <div className="permits-section-heading">
          <div>
            <p className="permits-eyebrow">
              {en ? "Document coordination" : "Подготовка документов"}
            </p>
            <h2 id="permit-documents-title">
              {en ? "How our team can help" : "Как помогает наша команда"}
            </h2>
          </div>
          <p>
            {en
              ? "Explore our six document services. Confirm which arrangements apply to your individual hunt and quotation."
              : "Ознакомьтесь с шестью услугами по документам. Уточните, какие из них предусмотрены для вашей охоты и предложения."}
          </p>
        </div>
        <div className="permit-document-grid">
          {documents.map(({ service, icon: Icon, body }, index) => (
            <article key={service.en}>
              <div className="permit-card-top">
                <span className="permit-card-icon">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="permit-card-number" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
              <h3>{service[locale]}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="permit-process"
        id="permit-process"
        aria-labelledby="permit-process-title"
      >
        <p className="permits-eyebrow">
          {en ? "From enquiry to departure" : "От запроса до выезда"}
        </p>
        <h2 id="permit-process-title">
          {en ? "Prepare in three clear steps" : "Три этапа подготовки"}
        </h2>
        <ol>
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="permit-step-number" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section
        className="permit-export"
        id="trophy-documents"
        aria-labelledby="permit-export-title"
      >
        <div className="permit-export-icon">
          <Globe size={30} strokeWidth={1.4} aria-hidden="true" />
        </div>
        <div>
          <p className="permits-eyebrow">
            {en ? "Plan the return journey too" : "Продумайте и обратный путь"}
          </p>
          <h2 id="permit-export-title">{page.sections[1].heading[locale]}</h2>
          <p>{page.sections[1].body[locale]}</p>
          <Link href={`/${locale}/travel-to-tajikistan`}>
            {en ? "Explore travel arrangements" : "Организация поездки"}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <div className="permit-next">
        <div>
          <h2>
            {en
              ? "Discuss your expedition documents"
              : "Обсудите документы экспедиции"}
          </h2>
          <p>
            {en
              ? "Share your preferred species and dates using the inquiry form below."
              : "Укажите выбранный вид и желаемые даты в форме запроса ниже."}
          </p>
        </div>
        <a href="#book">
          {en ? "Start your inquiry" : "Оставить запрос"}
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
