import { StaticImageData } from "next/image";
import Picture from "@/assets/Marco_polo_argali_on_Pamir_Mountain.webp"

export interface ITrophie {
  id: string;
  image: StaticImageData;
  title: string;
  url: string;
}

export const trophiesData: ITrophie[] = [
  {
    id: Math.floor(Math.random() * Date.now()).toString(16),
    image: Picture,
    title: "Shirinbek",
    url: "/trophie",
  },
  {
    id: Math.floor(Math.random() * Date.now()).toString(16),
    image: Picture,
    title: "Shirinbek",
    url: "/trophie",
  },
  {
    id: Math.floor(Math.random() * Date.now()).toString(16),
    image: Picture,
    title: "Shirinbek",
    url: "/trophie",
  },
  {
    id: Math.floor(Math.random() * Date.now()).toString(16),
    image: Picture,
    title: "Shirinbek",
    url: "/trophie",
  },
];
