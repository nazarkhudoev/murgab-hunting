import { StaticImageData } from "next/image";
import Picture from "@/assets/Hunt_Cards/Marco_Polo_Card.png";
import Picture2 from "@/assets/Hunt_Cards/Ibex_Card.png";
import Picture3 from "@/assets/Hunt_Cards/Wolf_Card.png";
import Picture4 from "@/assets/Hunt_Cards/Yak_Card.png";
import Picture5 from "@/assets/Hunt_Cards/Argali_Brukey_Card.png";

export interface ITrophie {
  id: string;
  image: StaticImageData;
  title: string;
  url: string;
}

export const trophiesData: ITrophie[] = [
  {
    id: "1",
    image: Picture,
    title: "Marco Polo Argali",
    url: "/marco-polo",
  },
  {
    id: "2",
    image: Picture2,
    title: "Ibex Pamirian",
    url: "/ibex",
  },
  {
    id: "5",
    image: Picture5,
    title: "Argali Brukey",
    url: "/argali-brukey",
  },
  {
    id: "3",
    image: Picture4,
    title: "Yak",
    url: "/yak",
  },
  {
    id: "4",
    image: Picture3,
    title: "Wolf",
    url: "/wolf",
  },
];
