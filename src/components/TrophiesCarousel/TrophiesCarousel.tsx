"use client";
import { useRef } from "react";
import { ITrophie, trophiesData } from "@/data/trophies";
import PREV_ICON from "@/assets/images/icon1.svg";
import NEXT_ICON from "@/assets/images/icon2.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./TrophiesCarousel.css";

export default function TrophiesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: false,
    responsive: [
      {
        swipeToSlide: true,
        breakpoint: 940,
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
    <section className="relative w-[1270px] max-w-full m-auto px-10">
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 prev__button"
        onClick={() => slider?.current?.slickPrev()}
      >
        <Image src={PREV_ICON} alt="PREV_ICON" />
      </button>
      <Slider ref={slider} {...settings} arrows={false} >
        {trophiesData.map((person: ITrophie, index: number) => {
          return (
            <div
              className="w-[150px] h-[350px] rounded-[20px] relative object-cover"
              key={person.id}
            >
              <div className="team-gradient rounded-[20px]"></div>
              <Image
                className="rounded-[20px] absolute w-full h-full object-cover border border-[#8E7E57]"
                src={person.image}
                alt={person.title}
              />
              <h3 className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white uppercase text-lg z-30">
                {person.title} - {index + 1}
              </h3>
            </div>
          );
        })}
      </Slider>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 next__button"
        onClick={() => slider?.current?.slickNext()}
      >
        <Image src={NEXT_ICON} alt="NEXT_ICON" />
      </button>
    </section>
  );
}
