import { StaticImageData } from "next/image";
import Picture from "@/assets/Marco_polo_argali_on_Pamir_Mountain.webp";
import Picture2 from "@/assets/contact.webp";
import Picture3 from "@/assets/Wolf/Wolf.webp";
import Picture4 from "@/assets/Yak/Yak.webp";

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
    title: "Ibex Siberian ",
    url: "/ibex",
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
