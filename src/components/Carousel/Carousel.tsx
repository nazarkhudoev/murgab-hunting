"use client";
import React, { useState } from "react";
import "./Carousel.css";
import TabImage1 from "@/assets/images/tabs-images/image1.png";
import TabImage2 from "@/assets/images/tabs-images/Frame 1632 (1).png";
import TabImage3 from "@/assets/images/tabs-images/Frame 1632 (2).png";
import TabImage4 from "@/assets/images/tabs-images/team.png";
import Image from "next/image";
import Team from "../Team/Team";
import { Carousel as CarouselComponent } from "primereact/carousel";
import Link from "next/link";
import Demo from "../Demo/Demo";
import Founders from "../Founders/Founders";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const data = [
    {
      id: 1,
      name: "Hello",
      image: TabImage4,
    },
    {
      id: 2,
      name: "Salom",
      image: TabImage4,
    },
    {
      id: 3,
      name: "Walek",
      image: TabImage4,
    },
    {
      id: 4,
      name: "Hello",
      image: TabImage4,
    },
    {
      id: 5,
      name: "Salom",
      image: TabImage4,
    },
    {
      id: 6,
      name: "Walek",
      image: TabImage4,
    },
    {
      id: 7,
      name: "Walek",
      image: TabImage4,
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
      <div className="text-white">
        <Image src={product.image} width={200} height={200} alt="Team Member" />
        <h1>{product.id}</h1>
        <h1>{product.name}</h1>
      </div>
    );
  };

  return (
    <div className="outer-carousel-container">
      <div className="carousel-container">
        <div className="flex items-center justify-between mb-[40px]">
          <div className="carousel-navigation">
            <button
              className={`${currentIndex == 0 && "active-tab"}`}
              onClick={() => navigateToSlide(0)}
            >
              History
            </button>
            <button
              className={`${currentIndex == 1 && "active-tab"}`}
              onClick={() => navigateToSlide(1)}
            >
              Mission
            </button>
            <button
              className={`${currentIndex == 2 && "active-tab"}`}
              onClick={() => navigateToSlide(2)}
            >
              Conservation
            </button>
            <button
              className={`${currentIndex == 3 && "active-tab"}`}
              onClick={() => navigateToSlide(3)}
            >
              Team
            </button>
            <button
              className={`${currentIndex == 4 && "active-tab"}`}
              onClick={() => navigateToSlide(4)}
            >
              Founders
            </button>
          </div>

          <Link className="text-sm" href={"/about-us"}>
            READ MORE +
          </Link>
        </div>
        {/* <button onClick={prevItem}>Prev</button> */}
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${currentIndex * 1050}px)` }}
        >
          <div className="carousel-item flex items-start justify-between">
            <div>
              <Image src={TabImage1} alt="TabImage1" height={400} width={360} />
            </div>
            <div className="w-[640px] flex flex-col justify-start items-start gap-4 font-extralight">
              <p>
                Murgab Hunting stands as the epitome of the ultimate hunting
                adventure, offering an unparalleled experience in the remote
                wilderness of Tajikistan. Founded in 1989, we specialize in
                sport hunting tourism, providing bespoke expeditionary services
                in the majestic Gornobadakhshan Autonomous Region.
              </p>
              <p>
                With a rich legacy spearheaded by our founder, Bekmurodi Zafar,
                we cater to the discerning hunter seeking not just a hunt, but
                an expedition—a story to be told for generations. Our core team,
                a cadre of former athletes, seasoned explorers, and professional
                hunters, ensures that your quest for the elusive Marco Polo
                sheep and the resilient mountain goats is not only successful
                but also sustainable and respectful to the natural splendor of
                the region.
              </p>
              <p>
                Murgab Hunting is not just about the pursuit of game; it’s about
                embracing the rugged beauty of the Pamirs, the thrill of the
                chase, and the preservation of hunting traditions. We invite you
                to join us, where hunting is an art and every expedition is an
                odyssey.
              </p>
            </div>
          </div>
          <div className="carousel-item flex items-start justify-between gap-3">
            <div>
              <Image src={TabImage2} alt="TabImage1" height={360} width={590} />
            </div>
            <div className="w-[360px] max-w-full font-extralight text-lg">
              <p>
                {`Murgab Hunting's mission is to offer ethical and sustainable
                  hunting experiences in Tajikistan's Pamir Mountains, focusing on
                  conservation, community engagement, and the preservation of
                  Marco Polo sheep and Pamirian Ibex.`}
              </p>
            </div>
          </div>
          <div className="carousel-item flex items-start justify-between">
            <div>
              <Image src={TabImage3} alt="TabImage1" height={400} width={360} />
            </div>
            <div className="w-[640px] flex flex-col justify-start items-start gap-4 font-extralight">
              <p>
                Murgab Hunting stands as the epitome of the ultimate hunting
                adventure, offering an unparalleled experience in the remote
                wilderness of Tajikistan. Founded in 1989, we specialize in
                sport hunting tourism, providing bespoke expeditionary services
                in the majestic Gornobadakhshan Autonomous Region.
              </p>
              <p>
                With a rich legacy spearheaded by our founder, Bekmurodi Zafar,
                we cater to the discerning hunter seeking not just a hunt, but
                an expedition—a story to be told for generations. Our core team,
                a cadre of former athletes, seasoned explorers, and professional
                hunters, ensures that your quest for the elusive Marco Polo
                sheep and the resilient mountain goats is not only successful
                but also sustainable and respectful to the natural splendor of
                the region.
              </p>
              <p>
                Murgab Hunting is not just about the pursuit of game; it’s about
                embracing the rugged beauty of the Pamirs, the thrill of the
                chase, and the preservation of hunting traditions. We invite you
                to join us, where hunting is an art and every expedition is an
                odyssey.
              </p>
            </div>
          </div>
          {/* <div className="carousel-item">
            <CarouselComponent
              value={data}
              numVisible={4}
              numScroll={1}
              // responsiveOptions={responsiveOptions}
              itemTemplate={productTemplate}
            />
          </div> */}
          {/* <Demo /> */}
          <Team />
          <Founders />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
