"use client";

import { gallery } from "@/data/gallery";
import type { AnimalSlug } from "@/lib/navigation";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Fancybox from "../Fancybox/Fancybox";

const lightboxOptions = { Carousel: { infinite: false } };

export default function AnimalGallery({ animal }: { animal: AnimalSlug }) {
  const { t } = useTranslation();
  const images = gallery.filter((image) => {
    if (animal === "marco-polo" || animal === "argali-brukey")
      return (
        image.trophie_status === "marcopolo" ||
        image.trophie_status === "ibex-marcopolo"
      );
    if (animal === "ibex")
      return (
        image.trophie_status === "ibex" ||
        image.trophie_status === "ibex-marcopolo"
      );
    return image.trophie_status === animal;
  });
  return (
    <>
      <h2 className="text-white text-center text-[28px] font-medium uppercase mt-[100px] gallery__title">
        {t("Gallery.title")}
      </h2>
      <Fancybox options={lightboxOptions}>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[A11y, Pagination]}
          className="mySwiper"
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
    </>
  );
}
