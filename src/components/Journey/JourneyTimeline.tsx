import Link from "next/link";
import {
  ArrowUpRight,
  Mountain,
  PlaneLanding,
  PlaneTakeoff,
  Truck,
} from "lucide-react";
import { labels } from "@/data/site-content";
import type { Locale } from "@/lib/navigation";
import "./JourneyTimeline.css";

const icons = [PlaneLanding, Truck, Mountain, PlaneTakeoff];
const descriptions = {
  en: [
    "Discuss arrival, documents and meeting arrangements.",
    "Confirm transport, accommodation and the route to camp.",
    "Agree your species, dates and expedition programme.",
    "Discuss return transport and departure arrangements.",
  ],
  ru: [
    "Обсудите прибытие, документы и организацию встречи.",
    "Уточните транспорт, проживание и маршрут до лагеря.",
    "Согласуйте выбранный вид, даты и программу экспедиции.",
    "Обсудите обратный трансфер и организацию выезда.",
  ],
};

export default function JourneyTimeline({ locale }: { locale: Locale }) {
  const english = locale === "en";
  return (
    <section
      className="content-section journey-section"
      aria-labelledby="journey-heading"
    >
      <div className="journey-heading">
        <div>
          <p className="journey-eyebrow">
            <span aria-hidden="true" />
            {english ? "Planned together" : "Планируем вместе"}
          </p>
          <h2 id="journey-heading">{labels.journey[locale]}</h2>
        </div>
        <p className="journey-intro">{labels.journeyIntro[locale]}</p>
      </div>
      <ol className="journey-timeline">
        {labels.journeySteps.map((step, index) => {
          const Icon = icons[index];
          return (
            <li key={step.en}>
              <div className="journey-step-marker">
                <Icon size={28} strokeWidth={1.35} aria-hidden="true" />
                <span aria-hidden="true">0{index + 1}</span>
              </div>
              <div className="journey-step-copy">
                <h3>{step[locale]}</h3>
                <p>{descriptions[locale][index]}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <div className="journey-footer">
        <div>
          <span className="journey-footer-dot" aria-hidden="true" />
          <p>
            {english
              ? "Have dates in mind? Let’s discuss your plans."
              : "Уже выбрали даты? Обсудим ваши планы."}
          </p>
        </div>
        <Link href={`/${locale}/contact#book`} data-track="plan_hunt_click">
          {english ? "Talk to our team" : "Связаться с командой"}
          <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
