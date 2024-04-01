"use client";
import MarcoPoloBanner from "@/components/MarcoPoloBanner/MarcoPoloBanner";

import Fancybox from "@/components/Fancybox/Fancybox";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./wolf.css";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { gallery } from "@/data/gallery";
import Link from "next/link";
import Image from "next/image";

import WolfBanner from "@/components/WolfBanner/WolfBanner";
import Contact from "@/components/Contact/Contact";

export default function WolfPage() {
  const filteredData = gallery.filter((item) => item.trophie_status === "wolf");
  return (
    <main id="wolf-page">
      <WolfBanner />
      <section id="wolf-text-wrapper" className="px-[85px] mt-10">
        <p className="text-white font-extralight wolf__text-container">
          Wolf hunting in the Pamirs is a complex and dangerous type of hunting
          that requires a high level of preparation and skill from the hunter.
          Wolves are intelligent and cautious animals that can become aggressive
          if they sense a threat. Wolf hunting in the Pamirs is usually
          conducted in the mountains, where wolves live in packs. Hunters must
          be in good physical condition to navigate the challenging mountain
          trails. They must also be armed with powerful weapons, such as a rifle
          with a scope, to make an accurate shot.
          <br />
          <br />
          The hunt for wolves in the Pamirs typically begins with locating the
          pack. Hunters can use various methods to search, such as observing the
          mountains with binoculars or using tracking dogs. Once the pack is
          spotted, hunters must approach it carefully to avoid startling the
          animals.
          <br />
          <br />
          When a hunter gets close to the pack, they must select a suitable
          target. They should aim to shoot the animal in vital organs, such as
          the heart or lungs, to ensure a quick and humane kill.
          <br />
          <br />
          After the wolf is killed, the hunter must transport the carcass to a
          safe location. This can be challenging, as a wolfs carcass can weigh
          up to 50 kilograms.
          <br />
          <br />
          Wolf hunting in the Pamirs is a complex and dangerous pursuit, but it
          can also be very rewarding. Trophies from wolf hunting, such as the
          pelt and head, are highly prized by hunters around the world.
        </p>
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
            {filteredData.map((image) => {
              return (
                <SwiperSlide key={image.id}>
                  <Link
                    className="gallery_link-item"
                    data-fancybox="gallery"
                    href={image.fullscreen_src}
                  >
                    <Image
                      // width={100}
                      // height={100}
                      // style={{
                      //   width: "200px",
                      //   height: "200px",
                      // }}
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
        {/* <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {filteredData.map((image) => {
            return (
              <SwiperSlide key={image.id}>
                <Link
                  className="gallery_link-item"
                  data-fancybox="gallery"
                  href={image.fullscreen_src}
                >
                  <Image
                    // width={100}
                    // height={100}
                    // style={{
                    //   width: "200px",
                    //   height: "200px",
                    // }}
                    src={image.src}
                    alt=""
                    className="gallery_image-item"
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </section>
      <Contact />
    </main>
  );
}
