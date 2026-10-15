"use client";

import { gallery } from "@/data/gallery";
import type { AnimalSlug } from "@/lib/navigation";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Fancybox from "../Fancybox/Fancybox";
import HydratedCarousel from "../Gallery/HydratedCarousel";
import PhotoLink from "../Gallery/PhotoLink";
import "swiper/css/navigation";

const lightboxOptions = { Carousel: { infinite: false } };

export default function AnimalGallery({ animal }: { animal: AnimalSlug }) {
  const { t } = useTranslation();
  const images = gallery.filter((image) => {
    if (animal === "argali-brukey") return false;
    if (animal === "marco-polo")
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
  if (!images.length) return null;
  return (
    <>
      <h2 className="text-white text-center text-[28px] font-medium uppercase mt-[100px] gallery__title">
        {t("Gallery.title")}
      </h2>
      <Fancybox options={lightboxOptions}>
        <HydratedCarousel
          fallback={
            <div className="gallery-static-preview">
              {images.map((image) => (
                <PhotoLink
                  key={image.id}
                  image={image}
                  alt={t(`Gallery.categories.${image.trophie_status}`, {
                    defaultValue: image.alt,
                  })}
                />
              ))}
            </div>
          }
        >
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[A11y, Keyboard, Navigation, Pagination]}
            keyboard={{ enabled: true, onlyInViewport: true }}
            navigation
            className="mySwiper"
            a11y={{
              prevSlideMessage: t("Accessibility.previous"),
              nextSlideMessage: t("Accessibility.next"),
            }}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <PhotoLink
                  image={image}
                  alt={t(`Gallery.categories.${image.trophie_status}`, {
                    defaultValue: image.alt,
                  })}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </HydratedCarousel>
      </Fancybox>
    </>
  );
}
