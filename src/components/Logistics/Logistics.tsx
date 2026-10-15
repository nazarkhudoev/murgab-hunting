import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Globe2,
  Mail,
  MapPinned,
  PlaneLanding,
  Truck,
  Utensils,
} from "lucide-react";
import { labels, services } from "@/data/site-content";
import type { Locale } from "@/lib/navigation";
import "./Logistics.css";

const icons = [
  Mail,
  Globe2,
  FileCheck2,
  ClipboardCheck,
  FileText,
  MapPinned,
  Utensils,
  Truck,
  PlaneLanding,
];

export default function Logistics({ locale }: { locale: Locale }) {
  const english = locale === "en";
  const groups = [
    {
      title: english ? "Documents & permits" : "Документы и разрешения",
      intro: english
        ? "Support with the paperwork for your expedition"
        : "Помощь с документами для вашей экспедиции",
      indexes: [0, 1, 2, 3, 4, 5],
      icon: FileText,
    },
    {
      title: english ? "Travel & stay" : "Поездка и проживание",
      intro: english
        ? "Coordination from arrival to camp"
        : "Организация от прибытия до лагеря",
      indexes: [6, 7, 8],
      icon: Truck,
    },
  ];
  return (
    <section
      className="content-section logistics-section"
      id="essentials"
      aria-labelledby="logistics-heading"
    >
      <div className="logistics-heading">
        <div>
          <p className="logistics-eyebrow">
            <span aria-hidden="true" />
            {english ? "Expedition support" : "Поддержка экспедиции"}
          </p>
          <h2 id="logistics-heading">{labels.logistics[locale]}</h2>
        </div>
        <p className="logistics-intro">{labels.logisticsBody[locale]}</p>
      </div>
      <div className="logistics-panels">
        {groups.map(
          ({ title, intro, indexes, icon: GroupIcon }, groupIndex) => (
            <div
              className={`logistics-panel ${groupIndex === 0 ? "logistics-panel--documents" : ""}`}
              key={title}
            >
              <div className="logistics-panel-heading">
                <div>
                  <span className="logistics-number">0{groupIndex + 1}</span>
                  <h3>{title}</h3>
                  <p>{intro}</p>
                </div>
                <GroupIcon
                  className="logistics-group-icon"
                  size={32}
                  strokeWidth={1}
                  aria-hidden="true"
                />
              </div>
              <ul className="logistics-services">
                {indexes.map((index) => {
                  const Icon = icons[index];
                  return (
                    <li key={services[index].en}>
                      <span className="logistics-service-icon">
                        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <span>{services[index][locale]}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ),
        )}
      </div>
      <div className="logistics-bottom">
        <div>
          <span className="logistics-bottom-dot" aria-hidden="true" />
          <p>
            {english
              ? "Plan the details with our local team."
              : "Обсудите детали с нашей местной командой."}
          </p>
        </div>
        <Link href={`/${locale}/hunting-permits`}>
          {english ? "Explore permits & documents" : "Разрешения и документы"}
          <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
