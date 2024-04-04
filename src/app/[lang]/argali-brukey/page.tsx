"use client";
import ArgaliBrukeyBanner from "@/components/ArgaliBrukeyBanner/ArgaliBrukeyBanner";
import Contact from "@/components/Contact/Contact";

import { gallery } from "@/data/gallery";


import Fancybox from "@/components/Fancybox/Fancybox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";
import Trophies from "@/components/Trophies/Trophies";

export default function ArgaliBrukeyPage() {
  const filteredData = gallery.filter(
    (item) =>
      item.trophie_status === "marcopolo" ||
      item.trophie_status === "ibex-marcopolo"
  );
  return (
    <main id="brukey-page">
      <ArgaliBrukeyBanner />
      <section id="argali-brukey-text-wrapper" className="px-[85px] mt-10">
        <p className="text-white font-extralight">
          Discover the rare and majestic Argali Brukey, a creature that stands
          out in the wild with its distinctive morphological features. Unlike
          the more commonly known Marco Polo argali, the Argali Brukey boasts a
          unique set of horns that, while shorter, possess a broader
          circumference at their base, enhancing their impressive stature.
          <br /> <br />
          Thriving across the vast and breathtaking landscape of the historic
          Wakhan Corridor, their habitat extends through the rugged terrains of
          Southern Pamir in Tajikistan, skirting the serene northern banks of
          Lake Zorkul, and reaching up to the edge where the country meets
          Afghanistan.
          <br /> <br />
          Embodying the untamed spirit of the regions they inhabit, the Argali
          Brukey is a testament to the rich biodiversity and the intricate
          tapestry of life that exists within these remote ecosystems. Their
          presence symbolizes the resilience and adaptability of wildlife in the
          face of ever-changing environments.
        </p>
        <h3 className="text-white text-center text-[28px] font-medium uppercase mt-[150px] gallery__title">
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
        <Trophies animalName="Argali Brukey"/>
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
