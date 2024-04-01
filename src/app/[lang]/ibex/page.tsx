"use client";
import MarcoPoloBanner from "@/components/MarcoPoloBanner/MarcoPoloBanner";

import Fancybox from "@/components/Fancybox/Fancybox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./ibex.css"

import { gallery } from "@/data/gallery";
import Link from "next/link";
import Image from "next/image";

import IbexBanner from "@/components/IbexBanner/IbexBanner";
import Contact from "@/components/Contact/Contact";

export default function IbexPage() {
  const filteredData = gallery.filter(
    (item) => item.trophie_status === "ibex" || item.trophie_status === "ibex-marcopolo"
  );
  return (
    <main id="ibex-page">
      <IbexBanner />
      <section id="ibex-text-wrapper" className="w-[1200px] max-w-full mx-auto mt-10">
        <p className="text-white font-extralight ibex_text relative z-[99]">
          Over the last 30 years, trophy hunting for the Siberian ibex has been
          conducted in Tajikistan, mainly in the Pamirs. Annually, between 50
          and 100 trophies are obtained. Some of these trophies have been
          inspected and processed, primarily the horns and skin, as well as
          photographs of the hunted animals. Analysis of these materials
          indicates that there are two forms (subspecies) of the Siberian ibex
          living in Tajikistan: Capra sibirica alaiana and Capra sibirica
          sakeen. The habitat of Capra sibirica alaiana covers the territories
          of Central and Northern Tajikistan and is found in the southern ridges
          and Badakhshan. <br /> <br /> The second subspecies, Capra sibirica sakeen, resides
          exclusively in the Pamir region (map 1). The habitats of both forms
          are clearly divided by the geographical boundary of Badakhshan and
          Eastern Pamir. Morphologically, they also differ in body coloration,
          and the shape and size of horns. Below is a description of the
          coloration of the two forms of Siberian ibex in Tajikistan. The
          coloration of the animals depends on sex, age, and season. Young
          individuals up to one year old are usually light gray with a slight
          brownish tinge, and the tail is dark brown. Females are typically
          uniform in color throughout the year, light brown, sometimes with a
          grayish tinge. Old females, over 12 years of age, acquire a
          yellowish-ochre coloration. On some females, a so-called
          &quot;belt,&quot; a dark stripe along the spine, is clearly visible on
          the back.
        </p>
        <h3 className="text-white text-center text-[28px] font-medium uppercase mt-[100px] gallery__title">
          Gallery
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
      </section>
      <Contact />
    </main>
  );
}
