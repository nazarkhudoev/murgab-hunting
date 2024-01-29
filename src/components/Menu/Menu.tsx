"use client";
import "./Menu.css";
import { useState } from "react";

import { usePathname } from "next/navigation";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

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
        {pathname == "/en" && (
          <>
            <div className="flex items-center gap-1">
              {/* <CiCircleInfo size={15} /> */}
              <a onClick={() => setIsActive(false)} href={"#about"}>
                About Us
              </a>
            </div>
            <div className="flex items-center gap-1">
              {/* <TfiCup size={15} /> */}
              <a onClick={() => setIsActive(false)} href={"#trophies"}>
                Hunting Trophies
              </a>
            </div>
            <div className="flex items-center gap-1">
              {/* <CiSquareMore size={15} /> */}
              <a onClick={() => setIsActive(false)} href={"#essentials"}>
                Hunting Essentials
              </a>
            </div>
            <div className="flex items-center gap-1">
              {/* <GiGoblinCamp size={15} /> */}
              <a onClick={() => setIsActive(false)} href={"#camp"}>
                Camp
              </a>
            </div>
            <div className="flex items-center gap-1">
              {/* <RiGalleryLine size={15} /> */}
              <a onClick={() => setIsActive(false)} href={"#gallery"}>
                Gallery
              </a>
            </div>
            <div className="flex items-center gap-1">
              {/* <RiGalleryLine size={15} /> */}
              <a onClick={() => setIsActive(false)} href={"#video"}>
                Video
              </a>
            </div>
            <div className="flex items-center gap-1">
              {/* <FaRegFolder size={15} /> */}
              <a onClick={() => setIsActive(false)} href={"#blog"}>
                Blog
              </a>
            </div>
            <div className="flex items-center gap-1 book__link">
              {/* <PiSignInFill /> */}
              <a onClick={() => setIsActive(false)} href={"#book"}>
                Book
              </a>
            </div>
          </>
        )}
        {pathname == "/en/about-us" && (
          <>
            <div className="flex items-center gap-1">
              <a onClick={() => setIsActive(false)} href={"#video"}>
                History
              </a>
            </div>
            <div className="flex items-center gap-1">
              <a onClick={() => setIsActive(false)} href={"#video"}>
                Founders
              </a>
            </div>
            <div className="flex items-center gap-1">
              <a onClick={() => setIsActive(false)} href={"#video"}>
                Tean
              </a>
            </div>
            <div className="flex items-center gap-1">
              <a onClick={() => setIsActive(false)} href={"#blog"}>
                Conservation
              </a>
            </div>
            <div className="flex items-center gap-1 book__link">
              <a onClick={() => setIsActive(false)} href={"#book"}>
                Book
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
