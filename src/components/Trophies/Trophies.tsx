'use client'
import { useTranslation } from "react-i18next";
import TrophiesCarousel from "../TrophiesCarousel/TrophiesCarousel";

interface ITrophies {
  animalName: string;
}

export default function Trophies({ animalName }: ITrophies) {
  const { i18n } = useTranslation();
  const localeActive = i18n.language;
  
  return (
    <section id="trophies" className="mt-[150px]">
      <h3 className="text-center text-white text-2xl font-medium mb-[50px] uppercase tracking-[1.5px]">
        {localeActive === 'en'?'Our Hunting Trophies':'Наши охотничьи трофеи'}
      </h3>
      <TrophiesCarousel animalName={animalName} />
    </section>
  );
}
