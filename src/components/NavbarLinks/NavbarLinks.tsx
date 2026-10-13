"use client";
import { navigationLinks } from "@/lib/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "./NavbarLinks.module.css";

export default function NavbarLinks() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  return (
    <nav className={styles.navbar} aria-label={t("Accessibility.navigation")}>
      <ul className={`flex items-center gap-[38px] ${styles.navbarList}`}>
        {navigationLinks(pathname, i18n.language, t).map((link) => (
          <li key={link.href}>
            <Link className="capitalize text-sm text-white" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
