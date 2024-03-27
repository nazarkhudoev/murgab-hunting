import LogoIcon from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

import "./Logo.css"

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        className="w-28 absolute top-[85%] -translate-y-2/4 header__logo-image"
        src={LogoIcon}
        alt="LogoIcon"
      />
    </Link>
  );
};

export default Logo;
