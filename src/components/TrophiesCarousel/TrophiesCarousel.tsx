"use client";
import PREV_ICON from "@/assets/images/icon1.svg";
import NEXT_ICON from "@/assets/images/icon2.svg";
import { trophiesData } from "@/data/trophies";
import { isLocale, localizedPath, type AnimalSlug } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./TrophiesCarousel.css";

export default function TrophiesCarousel({ animal }: { animal?: AnimalSlug }) {
  const { t, i18n } = useTranslation();
  const locale = isLocale(i18n.language) ? i18n.language : "en";
  const slider = useRef<Slider | null>(null);
  const trophies = trophiesData.filter((trophy) => trophy.id !== animal);
  return (
    <section
      id="trophies-carousel"
      className="relative w-[1270px] max-w-full m-auto px-10"
    >
      <button
        type="button"
        aria-label={t("Accessibility.previous")}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 prev__button"
        onClick={() => slider.current?.slickPrev()}
      >
        <Image src={PREV_ICON} alt="" />
      </button>
      <Slider
        ref={slider}
        dots
        infinite
        speed={500}
        slidesToShow={2}
        slidesToScroll={1}
        arrows={false}
        responsive={[
          { breakpoint: 940, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ]}
      >
        {trophies.map((trophy) => (
          <div
            className="w-[150px] h-[350px] rounded-[20px] relative object-cover outline-none border border-[#8E7E57] trophie__card-item"
            key={trophy.id}
            data-animal={trophy.id}
          >
            <div className="trophie-gradient rounded-[20px]" />
            <Image
              className="rounded-[20px] absolute w-full h-full object-cover trophie__image outline-none"
              src={trophy.image}
              alt={trophy.title[locale]}
              sizes="(max-width: 940px) 100vw, 50vw"
            />
            <h3 className="absolute bottom-10 left-8 text-white font-bold capitalize text-[28px] z-30">
              {trophy.title[locale]}
            </h3>
            <Link
              href={localizedPath(locale, trophy.url)}
              className="absolute bottom-5 left-8 z-50 flex items-center gap-2"
              aria-label={`${t("Banner.readmore")}: ${trophy.title[locale]}`}
            >
              <span className="uppercase font-bold text-[dodgerblue]">
                {t("Banner.readmore")}
              </span>
              <span aria-hidden="true" className="text-[dodgerblue]">
                +
              </span>
            </Link>
          </div>
        ))}
      </Slider>
      <button
        type="button"
        aria-label={t("Accessibility.next")}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 next__button"
        onClick={() => slider.current?.slickNext()}
      >
        <Image src={NEXT_ICON} alt="" />
      </button>
    </section>
  );
}
