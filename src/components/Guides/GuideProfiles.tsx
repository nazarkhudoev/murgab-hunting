import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mountain, Truck } from "lucide-react";
import { teamData } from "@/data/team";
import { labels } from "@/data/site-content";
import type { Locale } from "@/lib/navigation";
import "./GuideProfiles.css";

export default function GuideProfiles({ locale }: { locale: Locale }) {
  const english = locale === "en";
  return (
    <section
      className="content-section guide-profiles"
      id="team"
      aria-labelledby="guides-heading"
    >
      <div className="guides-heading">
        <div>
          <p className="guides-eyebrow">
            <span aria-hidden="true" />
            {english
              ? "The people behind the expedition"
              : "Люди, которые создают экспедицию"}
          </p>
          <h2 id="guides-heading">{labels.guides[locale]}</h2>
        </div>
        <p className="guides-intro">
          {english
            ? "Meet our local guides and expedition staff. The people who help you plan your hunt and journey through the Pamirs."
            : "Познакомьтесь с нашими местными гидами и сотрудниками экспедиций, которые помогают организовать охоту и поездку по Памиру."}
        </p>
      </div>
      <div className="guide-profile-grid">
        {teamData.map((person) => {
          const Icon = person.job.en === "Driver" ? Truck : Mountain;
          return (
            <article className="guide-profile" key={person.id}>
              <div className="guide-portrait">
                <Image
                  src={person.image}
                  alt={person.name[locale]}
                  fill
                  sizes="(max-width: 600px) 44vw, (max-width: 1000px) 45vw, 370px"
                />
                <span className="guide-portrait-shade" aria-hidden="true" />
              </div>
              <div className="guide-profile-caption">
                <h3>{person.name[locale]}</h3>
                <p>
                  <Icon size={16} strokeWidth={1.4} aria-hidden="true" />
                  <span>{person.job[locale]}</span>
                </p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="guides-bottom">
        <p>
          {english
            ? "Local roots. A shared tradition of Pamir expeditions."
            : "Местные корни. Общие традиции экспедиций на Памире."}
        </p>
        <Link href={`/${locale}/about`}>
          {english ? "Discover our story" : "Наша история"}
          <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
