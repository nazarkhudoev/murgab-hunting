'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavbarLinks.module.css";
import { useTranslation } from "react-i18next";

interface ILink {
  id: string;
  value: any;
  path: string;
}

export default function NavbarLink() {
  const pathname = usePathname();

  const { t } = useTranslation();

  const links: ILink[] = [
    {
      id: "#about",
      value: t('Navlist.about'),
      path: "/about-us",
    },
    {
      id: "#trophies",
      value: t('Navlist.trophies'),
      path: "/hunting-packages",
    },
    {
      id: "#essentials",
      value: t('Navlist.esseentials'),
      path: "/booking-process",
    },
    {
      id: "#camp",
      value: t('Navlist.camp'),
      path: "/camp",
    },
    {
      id: "#gallerySection",
      value: t('Navlist.gallery'),
      path: "/camp",
    },
    {
      id: "#video",
      value: t('Navlist.video'),
      path: "/video",
    },
    {
      id: "#blog",
      value: t('Navlist.blog'),
      path: "/camp",
    },
    {
      id: "#book",
      value: t('Navlist.book'),
      path: "/book",
    },
  ];

  const aboutLinks: ILink[] = [
    {
      id: "#history",
      value: t('Aboutlist.history'),
      path: "/history",
    },
    {
      id: "#founders",
      value: t('Aboutlist.founders'),
      path: "/founders",
    },
    {
      id: "#team",
      value: t('Aboutlist.team'),
      path: "/team",
    },
    {
      id: "#conservation",
      value: t('Aboutlist.conservation'),
      path: "/conservation",
    },
    {
      id: "#book",
      value: t('Aboutlist.book'),
      path: "/book",
    },
  ];

  const animalLinks: ILink[] = [
    {
      id: "#marco-polo",
      value:t('Animallist.marcopolo'),
      path: "/marco-polo",
    },
    {
      id: "#ibex",
      value:t('Animallist.ibex'),
      path: "/ibex",
    },
    {
      id: "#argali-brukey",
      value:t('Animallist.brukey'),
      path: "/argali-brukey",
    },
    {
      id: "#yak",
      value:t('Animallist.yak'),
      path: "/yak",
    },
    {
      id: "#wolf",
      value:t('Animallist.wolf'),
      path: "/wolf",
    },
    {
      id: "#book",
      value: t('Animallist.book'),
      path: "#book",
    },
  ];

  return (
    <nav className={`${styles.navbar}`}>
      <ul className={`flex items-center gap-[38px] ${styles.navbarList}`}>
        {pathname === "/en/about-us" || pathname === "/ru/about-us"
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
          : pathname === "/en/ibex" || pathname === "/ru/ibex" || pathname === "/en/yak" || pathname === "/ru/yak" || pathname === "/ru/argali-brukey" || pathname === "/en/argali-brukey" || pathname === "/en/wolf" || pathname === "/ru/wolf" || pathname === "/en/marco-polo" || pathname === "/ru/marco-polo"
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
            }) : links.map((link) => {
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
