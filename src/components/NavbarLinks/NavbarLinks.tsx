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
      id: "#gallerySection",
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

  const animalLinks: ILink[] = [
    {
      id: "#marco-polo",
      value: "Marco Polo",
      path: "/marco-polo",
    },
    {
      id: "#ibex",
      value: "Ibex Pamirian",
      path: "/ibex",
    },
    {
      id: "#argali-brukey",
      value: "Argali Brukey",
      path: "/argali-brukey",
    },
    {
      id: "#yak",
      value: "Yak",
      path: "/yak",
    },
    {
      id: "#wolf",
      value: "Wolf",
      path: "/wolf",
    },
  ];

  return (
    <nav className={`${styles.navbar}`}>
      <ul className={`flex items-center gap-[38px] ${styles.navbarList}`}>
        {pathname === "/en/about-us"
          ? aboutLinks.map((link) => {
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
          : pathname === "/en/yak"
          ? animalLinks.map((link) => {
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
          : pathname === "/en/marco-polo"
          ? animalLinks.map((link) => {
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
          : pathname === "/en/ibex"
          ? animalLinks.map((link) => {
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
          : pathname === "/en"
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
          : links.map((link) => {
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
        {/* {pathname != "/en/about-us"
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
            })} */}
      </ul>
    </nav>
  );
}
