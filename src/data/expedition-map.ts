import type { Locale } from "@/lib/navigation";

const english = {
  eyebrow: "The journey",
  title: "From Dushanbe to the High Pamirs",
  intro:
    "Our expeditions begin in Dushanbe and continue east through Khorog and deep into the Pamir Mountains, where Hot Springs Camp serves as our base for hunting expeditions.",
  alt: "Illustrated expedition route through Tajikistan: arrival in Dushanbe, road journey via Khorog and the Pamir Highway to Hot Springs Camp in the Pamir Mountains.",
  arrival: "International arrival",
  dushanbe: "Dushanbe",
  khorog: "Khorog",
  highway: "Pamir Highway",
  camp: "Hot Springs Camp",
  dushanbeElevation: "800 meters",
  khorogElevation: "2,100 meters",
  campElevation: "3,734 meters",
  openCamp: "Discover Hot Springs Camp",
  close: "Close camp information",
  campBody: "Your base for hunting expeditions in the Eastern Pamirs.",
  features: [
    "Mountain accommodation",
    "Natural hot springs",
    "Expedition vehicles",
  ],
  campAlt: "Hot Springs Camp building in the Pamir Mountains",
  explore: "Explore the Camp",
  hint: "Select the camp marker to discover your base in the mountains.",
  note: "An illustrated journey. Confirm your expedition route and transfers with our team.",
};

// English fallback follows the site's typed locale content architecture.
// Russian copy is intentionally pending owner translation; the section declares lang="en".
export const expeditionMapCopy: Record<Locale, typeof english> = {
  en: english,
  ru: english,
};
export type ExpeditionMapCopy = typeof english;
