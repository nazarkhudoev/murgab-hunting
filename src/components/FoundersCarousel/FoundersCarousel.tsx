"use client";
import Founder2 from "@/assets/founder-2.png";
import Founder3 from "@/assets/founder-3.png";
import Founder1 from "@/assets/founder1.png";
import Image from "next/image";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function FoundersCarousel() {
  const { t } = useTranslation();
  const founder_settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1107,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 843,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  const slider = useRef<Slider | null>(null);

  return (
    <section
      id="founder__wrapper"
      className="w-[1000px] mt-[160px] max-w-full mx-auto text-white"
    >
      <h2 id="founders" className="text-center mb-[100px] text-[24px]">
        {t("Content.AboutPage.text1")}
      </h2>

      <Slider ref={slider} {...founder_settings} arrows={false}>
        <div className="w-[280px] h-[350px] rounded-lg relative object-cover team__card">
          <div className="team-gradient rounded-lg"></div>
          <Image
            className="rounded-lg absolute w-full h-full border-2 border-[#8E7E57] object-cover"
            src={Founder1}
            alt={t("Founder.atobek")}
          />
          <h3 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center uppercase z-30 w-[100%]">
            {t("Content.AboutPage.text2")}
          </h3>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-light capitalize text-center text-xs z-30 min-w-[250px]">
            {t("Content.AboutPage.text3")}
          </p>
        </div>
        <div className="w-[280px] h-[350px] rounded-lg relative object-cover team__card">
          <div className="team-gradient rounded-lg"></div>
          <Image
            className="rounded-lg absolute w-full h-full border-2 border-[#8E7E57] object-cover"
            src={Founder2}
            alt={t("Founder.zafar")}
          />
          <h3 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center uppercase z-30 w-[100%]">
            {t("Content.AboutPage.text4")}
          </h3>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-light capitalize text-center text-xs z-30 min-w-[250px]">
            {t("Content.AboutPage.text5")}
          </p>
        </div>
        <div className="w-[280px] h-[350px] rounded-lg relative object-cover team__card">
          <div className="team-gradient rounded-lg"></div>
          <Image
            className="rounded-lg absolute w-full h-full border-2 border-[#8E7E57] object-cover"
            src={Founder3}
            alt={t("Founder.aydibek")}
          />
          <h3 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center uppercase z-30 w-[100%]">
            {t("Content.AboutPage.text6")}
          </h3>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-light capitalize text-center text-xs z-30 min-w-[250px]">
            {t("Content.AboutPage.text7")}
          </p>
        </div>
      </Slider>
    </section>
  );
}
