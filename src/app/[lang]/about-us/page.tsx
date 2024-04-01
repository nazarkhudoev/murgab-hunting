"use client";
import AboutBanner from "@/components/AboutBanner/AboutBanner";
import AboutConservation from "@/components/AboutConservation/AboutConservation";
import AboutHistory from "@/components/AboutHistory/AboutHistory";
import Contact from "@/components/Contact/Contact";
import Founders from "@/components/Founders/Founders";
import Team from "@/components/Team/Team";
import Image from "next/image";

import Founder1 from "@/assets/founder1.png";
import Founder2 from "@/assets/founder-2.png";
import Founder3 from "@/assets/founder-3.png";
import { useRef, useState } from "react";
import Slider from "react-slick";

import "./about.css";

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
  };

  const founder_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1107,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 843,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const slider = useRef<any>(null);
  return (
    <main id="about-page">
      <AboutBanner />
      <AboutHistory />
      <section
        id="founder__wrapper"
        className="w-[1000px] mt-[160px] max-w-full mx-auto text-white"
      >
        <h2 className="text-center mb-[100px] text-[24px]">FOUNDERS</h2>
        {/* <div className="flex items-start justify-center gap-10 slider__fouders-wrapper"> */}
        <Slider ref={slider} {...founder_settings} arrows={false}>
          <div className="w-[280px] h-[350px] rounded-lg relative object-cover team__card">
            <div className="team-gradient rounded-lg"></div>
            <Image
              className="rounded-lg absolute w-full h-full border-2 border-[#8E7E57] object-cover"
              src={Founder1}
              alt={"Founder1"}
              priority={true}
            />
            <h3 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center uppercase z-30 w-[100%]">
              Atobek Bekmurodov
            </h3>
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-light capitalize text-center text-xs z-30 min-w-[250px]">
              Professional Hunter
            </p>
          </div>
          <div className="w-[280px] h-[350px] rounded-lg relative object-cover team__card">
            <div className="team-gradient rounded-lg"></div>
            <Image
              className="rounded-lg absolute w-full h-full border-2 border-[#8E7E57] object-cover"
              src={Founder2}
              alt={"Founder1"}
              priority={true}
            />
            <h3 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center uppercase z-30 w-[100%]">
              Bekmurodi Zafar
            </h3>
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-light capitalize text-center text-xs z-30 min-w-[250px]">
              Professional Hunter
            </p>
          </div>
          <div className="w-[280px] h-[350px] rounded-lg relative object-cover team__card">
            <div className="team-gradient rounded-lg"></div>
            <Image
              className="rounded-lg absolute w-full h-full border-2 border-[#8E7E57] object-cover"
              src={Founder3}
              alt={"Founder1"}
              priority={true}
            />
            <h3 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center uppercase z-30 w-[100%]">
              BEKMURODI AYDIBEK
            </h3>
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-light capitalize text-center text-xs z-30 min-w-[250px]">
              Professional Hunter
            </p>
          </div>
        </Slider>
        {/* </div> */}
      </section>
      {/* <Founders /> */}
      <div
        id="team"
        className="w-[1200px] max-w-full mx-auto mb-[150px] mt-[200px]"
      >
        <h3 className="text-center text-white font-semibold text-2xl uppercase mb-[100px] tracking-[1.5px]">
          TEAM
        </h3>
        <Team />
      </div>
      <AboutConservation />
      <Contact />
    </main>
  );
}
