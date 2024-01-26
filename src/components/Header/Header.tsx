// Components
import { Locale } from "@/i18n.config";
// import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";

import styles from "./Header.module.css";

const Header = async ({ lang }: { lang: Locale }) => {
  return (
    <header
      className={`flex items-center justify-between py-8 px-[85px] relative border-b-[3px] border-white ${styles.header}`}
    >
      <Logo />
      <Navbar lang={lang}/>
      {/* <LanguageSwitcher /> */}
      <Menu />
    </header>
  );
};

export default Header;

