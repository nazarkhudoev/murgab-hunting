import Picture2 from "@/assets/Hunt_Cards/Ibex_Card.png";
import Picture from "@/assets/Hunt_Cards/Marco_Polo_Card.png";
import Picture3 from "@/assets/Hunt_Cards/Wolf_Card.png";
import Picture4 from "@/assets/Hunt_Cards/Yak_Card.png";
import Picture5 from "@/assets/argali-new (1).png";
import type { AnimalSlug, LocalizedText } from "@/lib/navigation";
import { StaticImageData } from "next/image";

export interface ITrophie {
  id: AnimalSlug;
  image: StaticImageData;
  title: LocalizedText;
  url: string;
}

export const trophiesData: ITrophie[] = [
  {
    id: "marco-polo",
    image: Picture,
    title: {
      en: "Marco Polo Argali",
      ru: "Марко Поло Аргали",
    },
    url: "/marco-polo-sheep-hunting",
  },
  {
    id: "ibex",
    image: Picture2,
    title: {
      en: "Ibex Pamirian",
      ru: "Памирский Козерог",
    },
    url: "/pamir-ibex-hunting",
  },
  {
    id: "argali-brukey",
    image: Picture5,
    title: {
      en: "Argali Brukey",
      ru: "Аргали Брукей",
    },
    url: "/argali-brukey",
  },
  {
    id: "yak",
    image: Picture4,
    title: {
      en: "Yak",
      ru: "Як",
    },
    url: "/yak",
  },
  {
    id: "wolf",
    image: Picture3,
    title: {
      en: "Wolf",
      ru: "Волк",
    },
    url: "/wolf",
  },
];
