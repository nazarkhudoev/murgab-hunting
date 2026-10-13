"use client";
import LogoIcon from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import "./Logo.css";

const Logo = () => {
  const { i18n } = useTranslation();
  return (
    <Link href={`/${i18n.language}`} className="w-28 inline-block">
      <Image
        className=" absolute top-[85%] -translate-y-2/4 header__logo-image"
        src={LogoIcon}
        alt="Murgab Hunting"
      />
    </Link>
  );
};

export default Logo;
