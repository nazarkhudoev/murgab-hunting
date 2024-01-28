"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Slider.css"; // You can create this file for styling
import History from "../History/History";
import Mission from "../Mission/Mission";
import Conservation from "../Conservation/Conservation";
import Link from "next/link";
import Team from "../Team/Team";
import Image from "next/image";

import Founder1 from "@/assets/founder1.png";
import Founder2 from "@/assets/founder-2.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
  };

  // const handleButtonClick = (index: any) => {
  //   setCurrentSlide(index);
  //   console.log("Clicked " + index);
  // };

  const sliderRef = useRef<any>();

  return (
    <section id="about" className="pt-12">
      <h3 className="text-center text-white text-2xl font-medium uppercase tracking-[1.5px]">
        ABOUT US
      </h3>
      <div className="carousel-container-123">
        <div className="carousel__navigation-wrapper flex items-center justify-between text-white mb-5 px-10">
          <div className="carousel-navigation">
            <button
              className={`${currentSlide == 0 && "active-tab"}`}
              onClick={() => {
                setCurrentSlide(0);
                sliderRef.current.slickGoTo(0);
              }}
            >
              History
            </button>
            <button
              className={`${currentSlide == 1 && "active-tab"}`}
              onClick={() => {
                setCurrentSlide(1);
                sliderRef.current.slickGoTo(1);
              }}
            >
              Mission
            </button>
            <button
              className={`${currentSlide == 2 && "active-tab"}`}
              onClick={() => {
                setCurrentSlide(2);
                sliderRef.current.slickGoTo(2);
              }}
            >
              Conservation
            </button>
            <button
              className={`${currentSlide == 3 && "active-tab"}`}
              onClick={() => {
                setCurrentSlide(3);
                sliderRef.current.slickGoTo(3);
              }}
            >
              Team
            </button>
            <button
              className={`${currentSlide == 4 && "active-tab"}`}
              onClick={() => {
                setCurrentSlide(4);
                sliderRef.current.slickGoTo(4);
              }}
            >
              Founders
            </button>
          </div>
          <Link className="text-sm read-more" href={"/about-us"}>
            READ MORE +
          </Link>
        </div>
        <Slider {...settings} arrows={false} swipe={false} ref={sliderRef}>
          <History />
          <Mission />
          <Conservation />
          <Team />
          <section id="founder__wrapper" className="py-10 px-[85px] text-white">
            <div className="flex items-start justify-center gap-7 slider__fouders-wrapper">
              <div className="flex items-start gap-7 w-[500px] max-w-full">
                <div>
                  <Image
                    src={Founder1}
                    alt="Founder1"
                    className="rounded-lg w-[240px] h-[240px] object-cover slider__founders"
                    priority={true}
                  />
                </div>
                <div>
                  <p className="text-[#8E7E57] text-xl font-medium uppercase">
                    Atobek <br /> Bekmurodov
                  </p>
                  <p className="text-[14px] font-light mt-4">
                    Professional Hunter
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-7 w-[500px] max-w-full">
                <div>
                  <Image
                    src={Founder2}
                    alt="Founder1"
                    className="rounded-lg w-[240px] h-[240px] object-cover slider__founders"
                    priority={true}
                  />
                </div>
                <div>
                  <p className="text-[#8E7E57] text-xl font-medium uppercase">
                    Bekmurodi <br /> Zafar
                  </p>
                  <p className="text-[14px] font-light mt-4">
                    Professional Hunter
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
