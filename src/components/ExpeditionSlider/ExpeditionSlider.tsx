"use client";
import { useRef } from "react";
import Slider from "react-slick";

import Icon1 from "@/assets/images/expedition/Frame 1713.svg";
import Icon2 from "@/assets/images/expedition/Frame 1713 (1).svg";
import Icon3 from "@/assets/images/expedition/Frame 1713 (2).svg";
import Icon4 from "@/assets/images/expedition/Frame 1713 (3).svg";
import Icon5 from "@/assets/images/expedition/Frame 1713 (4).svg";
import Icon6 from "@/assets/images/expedition/Frame 1713 (5).svg";
import Icon7 from "@/assets/images/expedition/Frame 1713 (6).svg";
import Icon8 from "@/assets/images/expedition/Frame 1713 (7).svg";
import Icon9 from "@/assets/images/expedition/Frame 1713 (8).svg";
import Image from "next/image";

import "./ExpeditionSlider.css"

export default function ExpeditionSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    // responsive: [
    //   {
    //     swipeToSlide: true,
    //     breakpoint: 940,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };
  const slider = useRef<any>(null);
  return (
    <div className="expedition__slider">
      <Slider ref={slider} {...settings} arrows={false}>
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={Icon1}
              alt="Icon1"
              width={44}
              height={44}
              priority={true}
            />
            {/* <div className="w-11 h-11 bg-slate-500 rounded-xl">I</div> */}
            <p>Invitation Letter</p>
          </div>
          <p className="mt-3 font-extralight">
            Essential for travel and visa arrangements, this official letter
            confirms your participation in the hunting expedition
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            {/* <div className="w-11 h-11 bg-slate-500 rounded-xl"></div> */}
            <Image
              src={Icon2}
              alt="Icon1"
              width={44}
              height={44}
              priority={true}
            />
            <p>CITES Permits</p>
          </div>
          <p className="mt-3 font-extralight">
            Necessary for international hunters, these permits ensure that the
            export of any trophies complies with the Convention on International
            Trade in Endangered Species of Wild Fauna and Flora.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={Icon3}
              alt="Icon1"
              width={44}
              height={44}
              priority={true}
            />
            <p>Gun Permits</p>
          </div>
          <p className="mt-3 font-extralight">
            We handle the necessary paperwork for the legal use of firearms
            during the hunt.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={Icon4}
              alt="Icon1"
              width={44}
              height={44}
              priority={true}
            />
            <p>Veterinary Certificates</p>
          </div>
          <p className="mt-3 font-extralight">
            Certifying the health and legal acquisition of the hunted animal,
            required for transport of the trophies.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={Icon5}
              alt="Icon1"
              width={44}
              height={44}
              priority={true}
            />
            <p>Animal Permits</p>
          </div>
          <p className="mt-3 font-extralight">
            Official permits for the specific species you will be hunting,
            ensuring compliance with wildlife regulations.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={Icon6}
              alt="Icon1"
              width={44}
              height={44}
              priority={true}
            />
            <p>Border Pass Permit</p>
          </div>
          <p className="mt-3 font-extralight">
            For ease of access to hunting areas near borders, this permit is
            crucial for hassle-free movement.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={Icon7}
              alt="Icon1"
              width={44}
              height={44}
              priority={true}
            />
            <p>Food and Drinks</p>
          </div>
          <p className="mt-3 font-extralight">
            All meals and beverages are provided, ensuring a comfortable and
            well-nourished experience throughout your stay.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={Icon8}
              alt="Icon1"
              width={44}
              height={44}
              priority={true}
            />
            <p>Round Trip Transportation</p>
          </div>
          <p className="mt-3 font-extralight">
            From Dushanbe to the hunting camp, we ensure comfortable and
            reliable transportation for our clients.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={Icon9}
              alt="Icon1"
              width={44}
              height={44}
              priority={true}
            />
            <p>Arrival VIP Hall Access</p>
          </div>
          <p className="mt-3 font-extralight">
            For a smooth and premium experience upon arrival at Dushanbe,
            ensuring a hassle-free start to your adventure.
          </p>
        </div>
      </Slider>
    </div>
  );
}
