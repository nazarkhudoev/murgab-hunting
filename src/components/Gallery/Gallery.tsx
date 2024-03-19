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
  return (
    <section id="gallerySection" className="mt-[150px]">
      <div className="w-[1150px] max-w-full mx-auto relative px-[20px]">
        <h1 className="text-center mb-[50px] text-2xl tracking-[1.5px] text-white uppercase">
          Gallery
        </h1>
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
            {gallery.map((image) => {
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
