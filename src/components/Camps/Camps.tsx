"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Camp1 from "@/assets/photos/springscamp/spring-camp-05.jpg";
import Camp3 from "@/assets/photos/springscamp/spring-camp-07.jpg";
import Camp2 from "@/assets/photos/springscamp/spring-camp-10.jpg";
import Camp4 from "@/assets/photos/springscamp/transportation-05.jpg";

import Camp7 from "@/assets/photos/springscamp/spring-camp-06.jpg";
import Camp5 from "@/assets/photos/springscamp/spring-camp-07.jpg";
import Camp8 from "@/assets/photos/springscamp/spring-camp-08.jpg";
import Camp6 from "@/assets/photos/springscamp/spring-camp-10.jpg";

import Camp9 from "@/assets/photos/springscamp/spring-camp-01.jpg";
import Camp13 from "@/assets/photos/springscamp/spring-camp-02.jpg";
import {
  default as Camp10,
  default as Camp11,
} from "@/assets/photos/springscamp/spring-camp-03.jpg";
import Camp12 from "@/assets/photos/springscamp/spring-camp-04.jpg";

import Camp18 from "@/assets/photos/springscamp/transportation-01.jpg";
import Camp17 from "@/assets/photos/springscamp/transportation-02.jpg";
import Camp16 from "@/assets/photos/springscamp/transportation-03.jpg";
import Camp15 from "@/assets/photos/springscamp/transportation-04.jpg";
import Camp14 from "@/assets/photos/springscamp/transportation-05.jpg";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Camps.css";

export default function Camps() {
  const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <section
      id="camp"
      className="w-[1200px] max-w-full mx-auto text-white py-6 px-5"
    >
      <h2 className="text-center font-medium mb-[50px] text-2xl tracking-[1.5px]">
        {t("Content.Camps.text1")}
      </h2>
      <p className="font-thin text-justify mx-10 camp__description">
        {t("Content.Camps.text2")}
      </p>
      <div className="bg-[#332B18] rounded-[15px] p-[40px] mt-[50px] camp_wrapper">
        <div className="flex items-center flex-wrap gap-7 mb-7 text-[#cabb9b] camps_navigation text-sm font-semibold">
          <button
            aria-pressed={currentSlide === 0}
            className={`${currentSlide == 0 && "active-tab text-white"}`}
            onClick={() => {
              setCurrentSlide(0);
              slider.current?.slickGoTo(0);
            }}
          >
            {t("Content.Camps.text3")}
          </button>
          <button
            aria-pressed={currentSlide === 1}
            className={`${currentSlide == 1 && "active-tab text-white"}`}
            onClick={() => {
              setCurrentSlide(1);
              slider.current?.slickGoTo(1);
            }}
          >
            {t("Content.Camps.text4")}
          </button>
          <button
            aria-pressed={currentSlide === 2}
            className={`${currentSlide == 2 && "active-tab text-white"}`}
            onClick={() => {
              setCurrentSlide(2);
              slider.current?.slickGoTo(2);
            }}
          >
            {t("Content.Camps.text5")}
          </button>
          <button
            aria-pressed={currentSlide === 3}
            className={`${currentSlide == 3 && "active-tab text-white"}`}
            onClick={() => {
              setCurrentSlide(3);
              slider.current?.slickGoTo(3);
            }}
          >
            {t("Content.Camps.text6")}
          </button>
        </div>
        <div>
          <Slider arrows={false} ref={slider} {...settings}>
            <div className="camp_container flex items-start gap-[20px]">
              <Image
                src={Camp1}
                alt={
                  Camp1.src.includes("transportation")
                    ? t("Gallery.transport")
                    : t("Gallery.categories.spring-camp")
                }
                sizes="(max-width: 600px) 90vw, 45vw"
                className="border border-[#8E7E57] rounded-[5px] w-[550px]"
              />
              <div>
                <div className="flex items-start mb-[20px] gap-5">
                  <Image
                    src={Camp2}
                    alt={
                      Camp2.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp3}
                    alt={
                      Camp3.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
                <div className="flex items-start gap-5">
                  <Image
                    src={Camp4}
                    alt={
                      Camp4.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp4}
                    alt={
                      Camp4.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
              </div>
            </div>
            <div className="camp_container flex gap-[20px]">
              <Image
                src={Camp1}
                alt={
                  Camp1.src.includes("transportation")
                    ? t("Gallery.transport")
                    : t("Gallery.categories.spring-camp")
                }
                sizes="(max-width: 600px) 90vw, 45vw"
                className="border border-[#8E7E57] rounded-[5px] w-[550px]"
              />
              <div>
                <div className="flex items-start mb-[20px] gap-5">
                  <Image
                    src={Camp5}
                    alt={
                      Camp5.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp6}
                    alt={
                      Camp6.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
                <div className="flex items-start gap-5">
                  <Image
                    src={Camp7}
                    alt={
                      Camp7.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp8}
                    alt={
                      Camp8.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
              </div>
            </div>
            <div className="camp_container flex gap-[20px]">
              <Image
                src={Camp9}
                alt={
                  Camp9.src.includes("transportation")
                    ? t("Gallery.transport")
                    : t("Gallery.categories.spring-camp")
                }
                sizes="(max-width: 600px) 90vw, 45vw"
                className="border border-[#8E7E57] rounded-[5px] w-[550px]"
              />
              <div>
                <div className="flex items-start mb-[20px] gap-5">
                  <Image
                    src={Camp10}
                    alt={
                      Camp10.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp11}
                    alt={
                      Camp11.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
                <div className="flex items-start gap-5">
                  <Image
                    src={Camp12}
                    alt={
                      Camp12.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp13}
                    alt={
                      Camp13.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
              </div>
            </div>
            <div className="camp_container flex gap-[20px]">
              <Image
                src={Camp14}
                alt={
                  Camp14.src.includes("transportation")
                    ? t("Gallery.transport")
                    : t("Gallery.categories.spring-camp")
                }
                sizes="(max-width: 600px) 90vw, 45vw"
                className="border border-[#8E7E57] rounded-[5px] w-[550px]"
              />
              <div>
                <div className="flex items-start mb-[20px] gap-5">
                  <Image
                    src={Camp15}
                    alt={
                      Camp15.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp16}
                    alt={
                      Camp16.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
                <div className="flex items-start gap-5">
                  <Image
                    src={Camp18}
                    alt={
                      Camp18.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp17}
                    alt={
                      Camp17.src.includes("transportation")
                        ? t("Gallery.transport")
                        : t("Gallery.categories.spring-camp")
                    }
                    sizes="(max-width: 600px) 90vw, 45vw"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
