import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import NavbarLinks from "../NavbarLinks/NavbarLinks";

interface ILink {
  id: number;
  value: string;
  path: string;
}

const Navbar = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);

  return <NavbarLinks />;
};

export default Navbar;
