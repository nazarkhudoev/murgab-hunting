"use client";
import { useRef } from "react";
import "./Team.css";

import PREV_ICON from "@/assets/images/icon1.svg";
import NEXT_ICON from "@/assets/images/icon2.svg";
import Image from "next/image";

import { teamData, ITeam } from "@/data/team";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
    <div className="relative overflow-visible mt-5 pl-9 pr-9">
      <button
        className="absolute top-1/2 left-3 -translate-y-1/2 z-20"
        onClick={() => slider?.current?.slickPrev()}
      >
        <Image src={PREV_ICON} alt="PREV_ICON" priority={true} />
      </button>
      <Slider ref={slider} {...settings} arrows={false}>
        {teamData.map((person: ITeam, index: number) => {
          return (
            <div
              className="w-[150px] h-[350px] rounded-lg relative object-cover team__card"
              key={person.id}
            >
              <div className="team-gradient rounded-lg"></div>
              <Image
                className="rounded-lg absolute w-full h-full object-cover"
                src={person.image}
                alt={person.name}
                priority={true}
              />
              <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center uppercase z-30 w-[100%]">
                {person.name}
              </h3>
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white font-light capitalize text-center text-xs z-30 min-w-[250px]">
                {person.job}
              </p>
            </div>
          );
        })}
      </Slider>
      <button
        className="absolute top-1/2 right-3 -translate-y-1/2 z-20"
        onClick={() => slider?.current?.slickNext()}
      >
        <Image src={NEXT_ICON} alt="NEXT_ICON" priority={true} />
      </button>
    </div>
  );
}
