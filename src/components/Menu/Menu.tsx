"use client";
import Link from "next/link";
import "./Menu.css";
import { useState } from "react";

import { CiCircleInfo } from "react-icons/ci";
import { TfiCup } from "react-icons/tfi";
import { CiSquareMore } from "react-icons/ci";
import { GiGoblinCamp } from "react-icons/gi";
import { RiGalleryLine } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa";
import { PiSignInFill } from "react-icons/pi";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="menu">
      <div onClick={() => setIsActive(!isActive)} className="burger">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className={`links ${isActive == true ? "show" : ""}`}>
        <div className="flex items-center gap-1">
          <CiCircleInfo size={15} />
          <Link href={"/"}>About Us</Link>
        </div>
        <div className="flex items-center gap-1">
          <TfiCup size={15} />
          <Link href={"/"}>Hunting Trophies</Link>
        </div>
        <div className="flex items-center gap-1">
          <CiSquareMore size={15} />
          <Link href={"/"}>Hunting Essentials</Link>
        </div>
        <div className="flex items-center gap-1">
          <GiGoblinCamp size={15} />
          <Link href={"/"}>Camp</Link>
        </div>
        <div className="flex items-center gap-1">
          <RiGalleryLine size={15} />
          <Link href={"/"}>Gallery</Link>
        </div>
        <div className="flex items-center gap-1">
          <FaRegFolder size={15} />
          <Link href={"/"}>Blog</Link>
        </div>
        <div className="divider">
          <div className="flex items-center gap-1">
            <PiSignInFill />
            <Link href={"/"}>Join Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
