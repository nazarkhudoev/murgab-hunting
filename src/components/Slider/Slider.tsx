"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Slider.css"; // You can create this file for styling
import History from "../History/History";
import Mission from "../Mission/Mission";
import Conservation from "../Conservation/Conservation";
import Link from "next/link";
import Team from "../Team/Team";
import Image from "next/image";

import Founder1 from "@/assets/founder1.png";
import Founder2 from "@/assets/founder-2.png";
import Founder3 from "@/assets/founder-3.png";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
  };

  const founder_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1107,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 843,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const slider = useRef<any>(null);

  // const handleButtonClick = (index: any) => {
  //   setCurrentSlide(index);
  //   console.log("Clicked " + index);
  // };

  const sliderRef = useRef<any>();

  return (
    <section id="about" className="pt-[100px] relative z-999">
      <h3 className="text-center text-white text-2xl font-medium uppercase tracking-[1.5px] about-header">
        {t('Slider.about')}
      </h3>
      <div className="carousel-container-123">
        <div className="carousel__navigation-wrapper flex items-center justify-between text-[#8E7E57] mb-5 px-10">
          <div className="carousel-navigation">
            <button
              className={`${currentSlide == 0 && "active-tab text-white"}`}
              onClick={() => {
                setCurrentSlide(0);
                sliderRef.current.slickGoTo(0);
              }}
            >
              {t('Slider.history')}

              {/* {localeActive === 'en' ? 'History' : 'История'} */}
            </button>
            <button
              className={`${currentSlide == 1 && "active-tab text-white"}`}
              onClick={() => {
                setCurrentSlide(1);
                sliderRef.current.slickGoTo(1);
              }}
            >
              {t('Slider.founders')}

              {/* {localeActive === 'en' ? 'Founders' : 'Основатели'} */}


            </button>
            <button
              className={`${currentSlide == 2 && "active-tab text-white"}`}
              onClick={() => {
                setCurrentSlide(2);
                sliderRef.current.slickGoTo(2);
              }}
            >
              {t('Slider.mission')}

              {/* {localeActive === 'en' ? 'Mission' : 'Миссия'} */}
            </button>
            <button
              className={`${currentSlide == 3 && "active-tab text-white"}`}
              onClick={() => {
                setCurrentSlide(3);
                sliderRef.current.slickGoTo(3);
              }}
            >
              {t('Slider.conservation')}

              {/* {localeActive === 'en' ? 'Conservation' : 'Сохранение природы'} */}

            </button>
            <button
              className={`${currentSlide == 4 && "active-tab text-white"}`}
              onClick={() => {
                setCurrentSlide(4);
                sliderRef.current.slickGoTo(4);
              }}
            >
              {t('Slider.team')}

              {/* {localeActive === 'en' ? 'Team' : 'Команды'} */}


            </button>
          </div>
          <Link className="text-sm read-more text-white" href={"/about-us"}>
            {t('Slider.more') + '+'}

            {/* {localeActive === 'en' ? 'READ MORE +' : 'ПОДРОБНЕЕ +'} */}
          </Link>
        </div>
        <Slider {...settings} arrows={false} swipe={false} ref={sliderRef}>
          <History />
          <section
            id="founder__wrapper"
            className="py-10 px-[158px] text-white"
          >
            {/* <div className="flex items-start justify-center gap-10 slider__fouders-wrapper"> */}
            <Slider ref={slider} {...founder_settings} arrows={false}>
              <div className="w-[260px] h-[340px] rounded-lg relative object-cover team__card">
                <div className="team-gradient rounded-lg"></div>
                <Image
                  className="rounded-lg absolute w-full h-full border-2 border-[#8E7E57] object-cover"
                  src={Founder1}
                  alt={"Founder1"}
                  priority={true}
                />
                <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center uppercase z-30 w-[100%]">
                  {t('Founder.atobek')}

                  {/* {localeActive === 'en' ? 'Atobek Bekmurodov' : 'Атобек Бекмуродов'} */}

                </h3>
                <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white font-light capitalize text-center text-xs z-30 min-w-[250px]">
                  {t('Founder.hunter')}

                  {/* {localeActive === 'en' ? 'Professional Hunter' : 'Профессиональный Охотник'} */}

                </p>
              </div>
              <div className="w-[260px] h-[340px] rounded-lg relative object-cover team__card">
                <div className="team-gradient rounded-lg"></div>
                <Image
                  className="rounded-lg absolute w-full h-full border-2 border-[#8E7E57] object-cover"
                  src={Founder2}
                  alt={"Founder1"}
                  priority={true}
                />
                <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center uppercase z-30 w-[100%]">
                  {t('Founder.zafar')}

                  {/* {localeActive === 'en' ? 'BEKMURODI ZAFAR' : 'БЕКМУРОДИ ЗАФАР'} */}
                </h3>
                <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white font-light capitalize text-center text-xs z-30 min-w-[250px]">
                  {t('Founder.hunter')}

                  {/* {localeActive === 'en' ? 'Professional Hunter' : 'Профессиональный Охотник'} */}
                </p>
              </div>
              <div className="w-[260px] h-[340px] rounded-lg relative object-cover team__card">
                <div className="team-gradient rounded-lg"></div>
                <Image
                  className="rounded-lg absolute w-full h-full border-2 border-[#8E7E57] object-cover"
                  src={Founder3}
                  alt={"Founder1"}
                  priority={true}
                />
                <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center uppercase z-30 w-[100%]">
                  {t('Founder.aydibek')}

                  {/* {localeActive === 'en' ? 'BEKMURODI AYDIBEK' : 'БЕКМУРОДИ АЙДИБЕК'} */}

                </h3>
                <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white font-light capitalize text-center text-xs z-30 min-w-[250px]">
                  {t('Founder.hunter')}

                  {/* {localeActive === 'en' ? 'Professional Hunter' : 'Профессиональный Охотник'} */}
                </p>
              </div>
            </Slider>
            {/* </div> */}
          </section>
          <Mission />
          <Conservation />
          <Team />
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
