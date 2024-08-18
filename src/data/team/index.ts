import TeamImage1 from "@/assets/team/image 12.png";
import TeamImage2 from "@/assets/team/image 13.png";
import TeamImage3 from "@/assets/team/image 14.png";
import TeamImage4 from "@/assets/team/image 15.png";
import TeamImage5 from "@/assets/team/image 17.png";
import TeamImage6 from "@/assets/team/image 18.png";
import { StaticImageData } from "next/image";

export interface ITeam {
  id: string;
  image: StaticImageData;
  name: any;
  job: any;
}

export const teamData: ITeam[] = [
  {
    id: "1",
    image: TeamImage1,
    name: {
      en: "Muhammadi Benazirov",
      ru: "Мухаммади Беназиров",
    },
    job: {
      en: "Professional Guide",
      ru: "Профессиональный гид",
    },
  },
  {
    id: "1",
    image: TeamImage2,
    name: {
      en: "Rahmon Gulayozov",
      ru: "Рахмон Гулайозов",
    }, 
    job: {
      en: "Driver",
      ru: "Водитель",
    }, 
  },
  {
    id: "1",
    image: TeamImage3,
    name: {
      en: "Sodiq Bekmurodov",
      ru: "Садик Бекмуродов",
    }, 
    job: {
      en: "Professional Guide",
      ru: "Профессиональный гид",
    },
  },
  {
    id: "1",
    image: TeamImage4,
    name: {
      en: "Tolibek Gulbekov",
      ru: "Толибек Гулбеков",
    }, 
    job: {
      en: "Professional Guide",
      ru: "Профессиональный гид",
    },
  },
  {
    id: "1",
    image: TeamImage5,
    name: {
      en: "Sarbaland Mubashirov",
      ru: "Сарбаланд Мубаширов",
    }, 
    job: {
      en: "Professional Guide",
      ru: "Профессиональный гид",
    },
  },
  {
    id: "1",
    image: TeamImage6,
    name: {
      en: "Shodi Afzunov",
      ru: "Шоди Афзунов",
    }, 
    job: {
      en: "Professional Guide",
      ru: "Профессиональный гид",
    },
  },
];
