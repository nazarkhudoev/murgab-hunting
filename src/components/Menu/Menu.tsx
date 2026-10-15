"use client";
import { navigationLinks } from "@/lib/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Menu.css";

export default function Menu({
  isOpen: isActive,
  onOpenChange: setIsActive,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const trigger = useRef<HTMLButtonElement>(null);
  const links = navigationLinks(pathname, i18n.language, t);
  useEffect(() => {
    if (!isActive) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsActive(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isActive, setIsActive]);
  return (
    <div className="menu">
      <button
        ref={trigger}
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="burger"
        aria-label={t("Accessibility.menu")}
        aria-expanded={isActive}
        aria-controls="mobile-navigation"
      >
        <span className={isActive ? "line top-line" : "line"} />
        <span className={isActive ? "line middle-line" : "line"} />
        <span className={isActive ? "line bottom-line" : "line"} />
      </button>
      <nav
        id="mobile-navigation"
        aria-label={t("Accessibility.navigation")}
        className={`links ${isActive ? "show" : ""}`}
        style={isActive ? undefined : { display: "none" }}
      >
        {links.map((link) => (
          <div
            key={link.href}
            className={link.href.endsWith("#book") ? "book__link" : ""}
          >
            <Link href={link.href} onClick={() => setIsActive(false)}>
              {link.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
