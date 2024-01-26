"use client";
import "./TrophiesSlider.css";

import { Carousel as CarouselComponent } from "primereact/carousel";
import Picture from "@/assets/main-bg.png";
import Image from "next/image";
import { useState } from "react";

import NEXT_ICON from "@/assets/images/icon1.svg";
import PREV_ICON from "@/assets/images/icon2.svg";

export default function TrophiesSlider() {
  const data = [
    {
      id: 1,
      name: "Hello",
      image: Picture,
    },
    {
      id: 2,
      name: "Salom",
      image: Picture,
    },
    {
      id: 3,
      name: "Walek",
      image: Picture,
    },
    {
      id: 4,
      name: "Hello",
      image: Picture,
    },
    {
      id: 5,
      name: "Salom",
      image: Picture,
    },
    {
      id: 6,
      name: "Walek",
      image: Picture,
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (product: any) => {
    return (
      <div className="w-[98%] trophie-item">
        <Image className="w-full" src={product.image} alt="Team Member" />
        <h1>{product.id}</h1>
        <h1>{product.name}</h1>
      </div>
    );
  };

  const items = [
    {
      id: 1,
      name: "Hello",
      image: Picture,
    },
    {
      id: 2,
      name: "Salom",
      image: Picture,
    },
    {
      id: 3,
      name: "Walek",
      image: Picture,
    },
    {
      id: 4,
      name: "Hello",
      image: Picture,
    },
    {
      id: 5,
      name: "Salom",
      image: Picture,
    },
    {
      id: 6,
      name: "Walek",
      image: Picture,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + items.length) % items.length
    );
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * 50}%)`, // 50% for 2 items at a time
  };

  return (
    <div className="px-[85px] trophies-slider">
      <div className="carousel-9">
        <Image
          src={NEXT_ICON}
          alt="abc"
          className="control-button-9 prev-button-9"
          onClick={prevSlide}
        />
        <div className="carousel-container-9">
          <div className="carousel-wrapper-9" style={slideStyle}>
            {items.map((item, index) => (
              <div className="carousel-item-9 rounded-xl" key={index}>
                <h5 className="absolute bottom-[45px] left-[35px] z-50 text-white text-2xl font-semibold">
                  {item.name}
                </h5>
                <p className="absolute bottom-[20px] left-[35px] z-50 text-[#0B7EDB] text-xs font-semibold">
                  READ MORE +
                </p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={PREV_ICON}
          alt="abc"
          className="control-button-9 next-button-9"
          onClick={nextSlide}
        />
        <div className="pagination-9">
          {items.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "active-dot-9" : "dot-9"}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
