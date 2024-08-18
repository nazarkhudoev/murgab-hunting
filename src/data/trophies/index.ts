import { StaticImageData } from "next/image";
import Picture from "@/assets/Hunt_Cards/Marco_Polo_Card.png";
import Picture2 from "@/assets/Hunt_Cards/Ibex_Card.png";
import Picture3 from "@/assets/Hunt_Cards/Wolf_Card.png";
import Picture4 from "@/assets/Hunt_Cards/Yak_Card.png";
import Picture5 from "@/assets/argali-new (1).png";

export interface ITrophie {
  id: string;
  image: StaticImageData;
  title: any;
  url: string;
}

export const trophiesData: ITrophie[] = [
  {
    id: "1",
    image: Picture,
    title: {
      en:  "Marco Polo Argali",
      ru:  "Марко Поло Аргали"
    },
    url: "/marco-polo",
  },
  {
    id: "2",
    image: Picture2,
    title: {
      en:  "Ibex Pamirian",
      ru:  "Памирский Козерог"
    },
    url: "/ibex",
  },
  {
    id: "5",
    image: Picture5,
    title: {
      en:  "Argali Brukey",
      ru:  "Аргали Брукей"
    },
    url: "/argali-brukey",
  },
  {
    id: "3",
    image: Picture4,
    title: {
      en:  "Yak",
      ru:  "Як"
    },
    url: "/yak",
  },
  {
    id: "4",
    image: Picture3,
    title: {
      en:  "Wolf",
      ru:  "Волк"
    },
    url: "/wolf",
  },
];
