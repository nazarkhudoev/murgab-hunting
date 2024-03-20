"use client";
import Image from "next/image";
import { useState } from "react";

import "./Gallery.css";
import Fancybox from "../Fancybox/Fancybox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { gallery } from "@/data/gallery";
import Link from "next/link";

export default function Gallery() {
  const [data, setdata] = useState(gallery);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filter = (trophie: string) => {
    if (trophie === "all") {
      setdata(gallery);
    } else if (trophie === "trophie") {
      const newData = gallery.filter(
        (item) =>
          item.trophie_status === "ibex" ||
          item.trophie_status === "marcopolo" ||
          item.trophie_status === "ibex-marcopolo" ||
          item.trophie_status === "wolf" ||
          item.trophie_status === "yak"
      );
      setdata(newData);
    } else {
      const newData = gallery.filter((item) => item.trophie_status === trophie);
      setdata(newData);
    }
  };

  return (
    <section id="gallerySection" className="mt-[150px]">
      <div className="w-[1150px] max-w-full mx-auto relative px-[20px]">
        <h1 className="text-center mb-[20px] text-2xl tracking-[1.5px] text-white uppercase">
          Gallery
        </h1>
        <div className="text-[#8E7E57] flex justify-center items-center gap-8 gallery__navigation-filter">
          <button
            className={`${currentSlide == 0 && "active-tab text-white"}`}
            onClick={() => {
              filter("all");
              setCurrentSlide(0);
            }}
          >
            All
          </button>
          <button
            className={`${currentSlide == 1 && "active-tab text-white"}`}
            onClick={() => {
              filter("trophie");
              setCurrentSlide(1);
            }}
          >
            Trophies
          </button>
          <button
            className={`${currentSlide == 2 && "active-tab text-white"}`}
            onClick={() => {
              filter("wild");
              setCurrentSlide(2);
            }}
          >
            Wild Life
          </button>
          <button
            className={`${currentSlide == 3 && "active-tab text-white"}`}
            onClick={() => {
              filter("landscape");
              setCurrentSlide(3);
            }}
          >
            Landscape
          </button>
        </div>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.map((image) => {
              return (
                <SwiperSlide key={image.id}>
                  <Link
                    className="gallery_link-item"
                    data-fancybox="gallery"
                    href={image.fullscreen_src}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      className="gallery_image-item rounded-lg"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Fancybox>
      </div>
    </section>
  );
}
