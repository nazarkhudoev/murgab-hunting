"use client";
import type { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ExpeditionSlider.css";
export default function ExpeditionSlider({ items }: { items: ReactNode[] }) {
  return (
    <div className="expedition__slider">
      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        swipeToSlide
        arrows={false}
      >
        {items}
      </Slider>
    </div>
  );
}
