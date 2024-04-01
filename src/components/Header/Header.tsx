// Components
import { Locale } from "@/i18n.config";
// import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";

import styles from "./Header.module.css";

const Header = async ({ lang }: { lang: Locale }) => {
  return (
    <div className="w-[1200px] max-w-full mx-auto relative">
      <header
        className={`py-8 px-[85px] relative border-b-[3px] border-white ${styles.header}`}
      >
        <div className="w-[1200px] max-w-full mx-auto flex items-center justify-between">
          <Logo />
          <Navbar lang={lang} />
          {/* <LanguageSwitcher /> */}
          <Menu />
        </div>
      </header>
    </div>
  );
};

export default Header;
