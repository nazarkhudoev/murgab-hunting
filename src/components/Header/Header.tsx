"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.css";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let previous = Math.max(0, window.scrollY);
    let accumulated = 0;
    let frame = 0;
    setHidden(false);
    const update = () => {
      frame = 0;
      const current = Math.max(0, window.scrollY);
      const delta = current - previous;
      previous = current;
      if (
        current < 80 ||
        menuOpen ||
        headerRef.current?.querySelector(":focus-visible")
      ) {
        accumulated = 0;
        setHidden(false);
        return;
      }
      accumulated =
        Math.sign(delta) === Math.sign(accumulated)
          ? accumulated + delta
          : delta;
      if (Math.abs(accumulated) >= 8) {
        setHidden(accumulated > 0);
        accumulated = 0;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname, menuOpen]);

  return (
    <div className="w-[1200px] max-w-full mx-auto relative">
      <header
        ref={headerRef}
        onFocusCapture={() => setHidden(false)}
        data-scroll-hidden={hidden}
        className={`py-8 px-[85px] relative border-b-[3px] border-white ${styles.header} ${hidden ? styles.hidden : ""}`}
      >
        <div className="w-[1200px] max-w-full mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center justify-end gap-4">
            <Navbar />
            <LanguageSwitcher />
          </div>

          <Menu isOpen={menuOpen} onOpenChange={setMenuOpen} />
        </div>
      </header>
    </div>
  );
}
