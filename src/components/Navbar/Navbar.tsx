import { getDictionary } from "@/lib/dictionary";
import NavbarLinks from "../NavbarLinks/NavbarLinks";

interface ILink {
  id: number;
  value: string;
  path: string;
}

export default function  Navbar (){

  return <NavbarLinks />;
};

