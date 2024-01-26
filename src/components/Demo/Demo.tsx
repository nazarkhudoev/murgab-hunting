"use client";
import React from "react";
import "./Demo.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Demo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-10 text-white">
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div className="box-99">
          <h3>1</h3>
        </div>
        <div className="box-99">
          <h3>2</h3>
        </div>
        <div className="box-99">
          <h3>3</h3>
        </div>
        <div className="box-99">
          <h3>4</h3>
        </div>
        <div className="box-99">
          <h3>5</h3>
        </div>
        <div className="box-99">
          <h3>6</h3>
        </div>
        <div className="box-99">
          <h3>7</h3>
        </div>
        <div className="box-99">
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Demo;
