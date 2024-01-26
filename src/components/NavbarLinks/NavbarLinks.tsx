"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavbarLinks.module.css";

interface ILink {
  id: number;
  value: string;
  path: string;
}

export default function NavbarLinks() {
  const pathname = usePathname();

  const links: ILink[] = [
    {
      id: 1,
      value: "About Us",
      path: "/about-us",
    },
    {
      id: 2,
      value: "Hunting Trophies",
      path: "/hunting-packages",
    },
    {
      id: 3,
      value: "Hunting Esseentials",
      path: "/booking-process",
    },
    {
      id: 5,
      value: "Camp",
      path: "/camp",
    },
    {
      id: 6,
      value: "Gallery",
      path: "/camp",
    },
    {
      id: 7,
      value: "Blog",
      path: "/camp",
    },
    {
      id: 4,
      value: "Book",
      path: "/book",
    },
  ];

  const aboutLinks: ILink[] = [
    {
      id: 1,
      value: "History",
      path: "/history",
    },
    {
      id: 2,
      value: "Founders",
      path: "/founders",
    },
    {
      id: 3,
      value: "Team",
      path: "/team",
    },
    {
      id: 4,
      value: "Conservation",
      path: "/conservation",
    },
    {
      id: 5,
      value: "Book",
      path: "/book",
    },
  ];

  return (
    <nav className={`${styles.navbar}`}>
      <ul className={`flex items-center gap-[60px] ${styles.navbarList}`}>
        {pathname != "/en/about-us"
          ? links.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    className="capitalize text-sm text-white"
                    // href={`${link.path}/${lang}`}
                    href={`${link.path}`}
                  >
                    {link.value}
                  </Link>
                </li>
              );
            })
          : aboutLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    className="capitalize text-sm text-white"
                    // href={`${link.path}/${lang}`}
                    href={`${link.path}`}
                  >
                    {link.value}
                  </Link>
                </li>
              );
            })}
      </ul>
    </nav>
  );
}
