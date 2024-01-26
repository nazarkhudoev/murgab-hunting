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
  name: string;
  job: string;
}

export const teamData: ITeam[] = [
  {
    id: "1",
    image: TeamImage1,
    name: "Muhammadi Benazirov",
    job: "Professional Guide",
  },
  {
    id: "1",
    image: TeamImage2,
    name: "Rahmon Gulayozov",
    job: "Professional Hunter",
  },
  {
    id: "1",
    image: TeamImage3,
    name: "Sodiq Bekmurodov",
    job: "Professional Guide",
  },
  {
    id: "1",
    image: TeamImage4,
    name: "Tolibek Gulbekov",
    job: "Professional Guide",
  },
  {
    id: "1",
    image: TeamImage5,
    name: "Sarbaland Mubashirov",
    job: "Professional Guide",
  },
  {
    id: "1",
    image: TeamImage6,
    name: "Shodi Afzunov",
    job: "Professional Guide",
  },
];
