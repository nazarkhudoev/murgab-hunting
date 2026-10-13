"use client";
import type { AnimalSlug } from "@/lib/navigation";
import { useTranslation } from "react-i18next";
import TrophiesCarousel from "../TrophiesCarousel/TrophiesCarousel";
export default function Trophies({ animal }: { animal?: AnimalSlug }) {
  const { t } = useTranslation();
  return (
    <section id="trophies" className="mt-[150px]">
      <h2 className="text-center text-white text-2xl font-medium mb-[50px] uppercase tracking-[1.5px]">
        {t("Trophies.title")}
      </h2>
      <TrophiesCarousel animal={animal} />
    </section>
  );
}
