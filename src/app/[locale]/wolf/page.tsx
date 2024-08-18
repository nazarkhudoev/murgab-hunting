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
import Trophies from "@/components/Trophies/Trophies";
import { useLocale } from "next-intl";

export default function WolfPage() {

  const localeActive = useLocale();


  const filteredData = gallery.filter((item) => item.trophie_status === "wolf");
  return (
    <main id="wolf-page">
      <WolfBanner />
      <section id="wolf-text-wrapper" className="w-[1200px] max-w-full mx-auto mt-10">
        <p className="text-white font-extralight wolf__text-container">
          {
            localeActive === 'en' ?
              `Wolf hunting in the Pamirs is a complex and dangerous type of hunting
          that requires a high level of preparation and skill from the hunter.
          Wolves are intelligent and cautious animals that can become aggressive
          if they sense a threat. Wolf hunting in the Pamirs is usually
          conducted in the mountains, where wolves live in packs. Hunters must
          be in good physical condition to navigate the challenging mountain
          trails. They must also be armed with powerful weapons, such as a rifle
          with a scope, to make an accurate shot.`:
              `Охота на волков в Памирских горах — это сложный и опасный вид охоты, который требует высокого уровня подготовки и мастерства от охотника. Волки — умные и осторожные животные, которые могут стать агрессивными, если почувствуют угрозу. Охота на волков в Памире обычно проводится в горах, где волки обитают в стаях. Охотники должны быть в хорошей физической форме, чтобы справляться с трудными горными тропами. Также необходимо иметь мощное оружие, такое как винтовка с прицелом, для точного выстрела.`
          }

          <br />
          <br />
          {
            localeActive === 'en'?
            `The hunt for wolves in the Pamirs typically begins with locating the
          pack. Hunters can use various methods to search, such as observing the
          mountains with binoculars or using tracking dogs. Once the pack is
          spotted, hunters must approach it carefully to avoid startling the
          animals.`:
            `Охота на волков в Памирских горах обычно начинается с поиска стаи. Охотники могут использовать различные методы для этого, такие как наблюдение за горами через бинокль или использование следовых собак. Как только стая обнаружена, охотники должны подойти к ней осторожно, чтобы не испугать животных.`
          }
          
          <br />
          <br />
          {
            localeActive === 'en'?
            `When a hunter gets close to the pack, they must select a suitable
          target. They should aim to shoot the animal in vital organs, such as
          the heart or lungs, to ensure a quick and humane kill.`:
            `Когда охотник приближается к стае, ему нужно выбрать подходящую цель. Следует прицелиться в жизненно важные органы, такие как сердце или лёгкие, чтобы обеспечить быстрый и гуманныи выстрел.`
          }
          
          <br />
          <br />
          {
            localeActive === 'en'?
            ` After the wolf is killed, the hunter must transport the carcass to a
          safe location. This can be challenging, as a wolfs carcass can weigh
          up to 50 kilograms.`:
            `После того как волк убит, охотнику необходимо транспортировать тушу в безопасное место. Это может быть непросто, так как туша волка может весить до 50 килограммов.`
          }
         
          <br />
          <br />
          {
            localeActive === 'en'?
            `Wolf hunting in the Pamirs is a complex and dangerous pursuit, but it
          can also be very rewarding. Trophies from wolf hunting, such as the
          pelt and head, are highly prized by hunters around the world.`:
            `Охота на волков в Памирских горах — это сложное и опасное занятие, но оно также может быть очень вознаграждающим. Трофеи, полученные с охоты на волка, такие как шкура и голова, высоко ценятся охотниками по всему миру.`
          }
         
        </p>
        <h3 className="text-white text-center text-[28px] font-medium uppercase mt-[100px] gallery__title relative">
        {localeActive === 'en' ? 'Gallery' : 'Галерея'}

        </h3>
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
        <Trophies animalName="Wolf" />
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
