"use client";
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
        <span
          className={`${isActive == true ? "line top-line" : "line"}`}
        ></span>
        <span
          className={`${isActive == true ? "line middle-line" : "line"}`}
        ></span>
        <span
          className={`${isActive == true ? "line bottom-line" : "line"}`}
        ></span>
      </div>
      <div className={`links ${isActive == true ? "show" : ""}`}>
        <div className="flex items-center gap-1">
          <CiCircleInfo size={15} />
          <a onClick={() => setIsActive(false)} href={"#about"}>About Us</a>
        </div>
        <div className="flex items-center gap-1">
          <TfiCup size={15} />
          <a onClick={() => setIsActive(false)} href={"#trophies"}>Hunting Trophies</a>
        </div>
        <div className="flex items-center gap-1">
          <CiSquareMore size={15} />
          <a onClick={() => setIsActive(false)} href={"#essentials"}>Hunting Essentials</a>
        </div>
        <div className="flex items-center gap-1">
          <GiGoblinCamp size={15} />
          <a onClick={() => setIsActive(false)} href={"#camp"}>Camp</a>
        </div>
        <div className="flex items-center gap-1">
          <RiGalleryLine size={15} />
          <a onClick={() => setIsActive(false)} href={"#gallery"}>Gallery</a>
        </div>
        <div className="flex items-center gap-1">
          <RiGalleryLine size={15} />
          <a onClick={() => setIsActive(false)} href={"#video"}>Video</a>
        </div>
        <div className="flex items-center gap-1">
          <FaRegFolder size={15} />
          <a onClick={() => setIsActive(false)} href={"#blog"}>Blog</a>
        </div>
        <div className="divider">
          <div className="flex items-center gap-1">
            <PiSignInFill />
            <a onClick={() => setIsActive(false)} href={"#book"}>Join Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
