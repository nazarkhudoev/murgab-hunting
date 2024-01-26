"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import slickGoTo from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Slider.css"; // You can create this file for styling
import Demo from "../Demo/Demo";
import History from "../History/History";
import Mission from "../Mission/Mission";
import Conservation from "../Conservation/Conservation";
import Link from "next/link";
import Team from "../Team/Team";

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
    <section className="pt-12">
      <h3 className="text-center text-white text-2xl font-medium uppercase tracking-[1.5px]">
        ABOUT US
      </h3>
      <div className="carousel-container-123">
        <div className="flex items-center justify-between text-white mb-5 px-10">
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
          </div>
          <Link className="text-sm" href={"/"}>
            READ MORE +
          </Link>
        </div>
        <Slider {...settings} arrows={false} swipe={false} ref={sliderRef}>
          <History />
          <Mission />
          <Conservation />
          <Team />
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
