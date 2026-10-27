import type { Locale } from "@/lib/navigation";
import { expeditionMapCopy } from "@/data/expedition-map";
import ExpeditionMapCanvas from "./ExpeditionMapCanvas";
import "./ExpeditionMap.css";

export default function ExpeditionMap({ locale }: { locale: Locale }) {
  const copy = expeditionMapCopy[locale];
  return (
    <section
      className="expedition-map content-section"
      aria-labelledby="expedition-map-title"
      lang="en"
    >
      <header className="expedition-map-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="expedition-map-title">{copy.title}</h2>
        <p>{copy.intro}</p>
      </header>
      <ExpeditionMapCanvas locale={locale} copy={copy} />
    </section>
  );
}
