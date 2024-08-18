"use client";
import Image from "next/image";
import { useState } from "react";

import "./Gallery.css";
import Fancybox from "../Fancybox/Fancybox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

import { gallery } from "@/data/gallery";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Gallery() {

  const { i18n } = useTranslation();
  const localeActive = i18n.language;

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
    <section id="gallerySection" className="mt-[200px] flex ">
      <div id="gallerySection2" className=" flex-col justify-center items-stretch w-[100%] max-w-full mx-auto relative px-[85px] ">
        <h1 className="text-center mb-[50px] text-2xl tracking-[1.5px] text-white uppercase">
          {localeActive === "en" ? "Gallery" : "Галерея"}
        </h1>
        <div className="text-[#8E7E57] flex justify-center items-center gap-8 gallery__navigation-filter ">
          <button
            className={`${currentSlide == 0 && "active-tab text-white"}`}
            onClick={() => {
              filter("all");
              setCurrentSlide(0);
            }}
          >
            {localeActive === "en" ? "All" : "Все"}


          </button>
          <button
            className={`${currentSlide == 1 && "active-tab text-white"}`}
            onClick={() => {
              filter("trophie");
              setCurrentSlide(1);
            }}
          >
            {localeActive === "en" ? "Trophies" : "Трофеи"}


          </button>
          <button
            className={`${currentSlide == 2 && "active-tab text-white"}`}
            onClick={() => {
              filter("wild");
              setCurrentSlide(2);
            }}
          >
            {localeActive === "en" ? "Wild Life" : "Дикая природа"}


          </button>
          <button
            className={`${currentSlide == 3 && "active-tab text-white"}`}
            onClick={() => {
              filter("landscape");
              setCurrentSlide(3);
            }}
          >
            {localeActive === "en" ? "Landscape" : "Пейзаж"}


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
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}

            spaceBetween={50}
            slidesPerView={3}
            // effect="fade"
            // allowSlidePrev={true}
            // allowSlideNext={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }
            }
            speed={1000}
            scrollbar={{ draggable: true }}
          // className="mySwiper"
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
