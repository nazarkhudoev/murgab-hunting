"use client";

// import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";

import styles from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function Header() {
  return (
    <div className="w-[1200px] max-w-full mx-auto relative">
      <header
        className={`py-8 px-[85px] relative border-b-[3px] border-white ${styles.header}`}
      >
        <div className="w-[1200px] max-w-full mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center justify-end gap-4">
            <Navbar />
            <LanguageSwitcher />
          </div>

          <Menu />
        </div>
      </header>
    </div>
  );
};

