import { StaticImageData } from "next/image";
import Picture from "@/assets/main-bg.png"

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
