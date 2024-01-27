import { StaticImageData } from "next/image";
import Picture from "@/assets/Marco_polo_argali_on_Pamir_Mountain.webp"
import Picture2 from "@/assets/contact.webp"
import Picture3 from "@/assets/Wolf/Wolf.webp"
import Picture4 from "@/assets/Yak/Yak.webp"

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
    title: "Shirinbek",
    url: "/marco-polo",
  },
  {
    id: "2",
    image: Picture2,
    title: "Shirinbek",
    url: "/ibex",
  },
  {
    id: "3",
    image: Picture3,
    title: "Shirinbek",
    url: "/yak",
  },
  {
    id: "4",
    image: Picture4,
    title: "Shirinbek",
    url: "/wolf",
  },
];
