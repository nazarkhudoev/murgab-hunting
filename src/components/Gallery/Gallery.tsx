"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { gallery } from "@/data/gallery";
import Fancybox from "../Fancybox/Fancybox";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Gallery.css";

const filters = ["all", "trophies", "wild", "landscape"] as const;
type Filter = (typeof filters)[number];
const lightboxOptions = { Carousel: { infinite: false } };
export default function Gallery() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");
  const images = gallery.filter(
    (image) =>
      filter === "all" ||
      (filter === "trophies"
        ? ["ibex", "marcopolo", "ibex-marcopolo", "wolf", "yak"].includes(
            image.trophie_status,
          )
        : image.trophie_status === filter),
  );
  return (
    <section id="gallerySection" className="mt-[200px] flex">
      <div
        id="gallerySection2"
        className="flex-col justify-center items-stretch w-full max-w-full mx-auto relative px-[85px]"
      >
        <h2 className="text-center mb-[50px] text-2xl tracking-[1.5px] text-white uppercase">
          {t("Gallery.title")}
        </h2>
        <div className="text-[#8E7E57] flex justify-center items-center gap-8 gallery__navigation-filter">
          {filters.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              className={filter === value ? "active-tab text-white" : ""}
              onClick={() => setFilter(value)}
            >
              {t(`Gallery.${value}`)}
            </button>
          ))}
        </div>
        <Fancybox options={lightboxOptions}>
          <Swiper
            key={filter}
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            speed={500}
            scrollbar={{ draggable: true }}
            a11y={{
              prevSlideMessage: t("Accessibility.previous"),
              nextSlideMessage: t("Accessibility.next"),
            }}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <a
                  className="gallery_link-item"
                  data-fancybox="gallery"
                  href={image.fullscreen_src}
                  data-category={image.trophie_status}
                >
                  <Image
                    src={image.src}
                    alt={t(`Gallery.categories.${image.trophie_status}`, {
                      defaultValue: image.alt,
                    })}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="gallery_image-item rounded-lg"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fancybox>
      </div>
    </section>
  );
}
