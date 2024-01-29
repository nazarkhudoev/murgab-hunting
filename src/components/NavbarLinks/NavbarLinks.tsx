"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavbarLinks.module.css";

interface ILink {
  id: string;
  value: string;
  path: string;
}

export default function NavbarLinks() {
  const pathname = usePathname();

  const links: ILink[] = [
    {
      id: "#about",
      value: "About Us",
      path: "/about-us",
    },
    {
      id: "#trophies",
      value: "Hunting Trophies",
      path: "/hunting-packages",
    },
    {
      id: "#essentials",
      value: "Hunting Esseentials",
      path: "/booking-process",
    },
    {
      id: "#camp",
      value: "Camp",
      path: "/camp",
    },
    {
      id: "#gallery",
      value: "Gallery",
      path: "/camp",
    },
    {
      id: "#video",
      value: "Video",
      path: "/video",
    },
    {
      id: "#blog",
      value: "Blog",
      path: "/camp",
    },
    {
      id: "#book",
      value: "Book",
      path: "/book",
    },
  ];

  const aboutLinks: ILink[] = [
    {
      id: "#history",
      value: "History",
      path: "/history",
    },
    {
      id: "#founders",
      value: "Founders",
      path: "/founders",
    },
    {
      id: "#team",
      value: "Team",
      path: "/team",
    },
    {
      id: "#conservation",
      value: "Conservation",
      path: "/conservation",
    },
    {
      id: "#book",
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
                  <a
                    className="capitalize text-sm text-white"
                    // href={`${link.path}/${lang}`}
                    href={`${link.id}`}
                  >
                    {link.value}
                  </a>
                </li>
              );
            })
          : aboutLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    className="capitalize text-sm text-white"
                    // href={`${link.path}/${lang}`}
                    href={`${link.id}`}
                  >
                    {link.value}
                  </a>
                </li>
              );
            })}
      </ul>
    </nav>
  );
}
