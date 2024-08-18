"use client";
import Image from "next/image";
import Slider from "react-slick";

import Camp1 from "@/assets/photos/springscamp/spring-camp-05.jpg";
import Camp2 from "@/assets/photos/springscamp/spring-camp-10.jpg";
import Camp3 from "@/assets/photos/springscamp/spring-camp-07.jpg";
import Camp4 from "@/assets/photos/springscamp/transportation-05.jpg";

// --------------------------------------------------------------------------
import Camp5 from "@/assets/photos/springscamp/spring-camp-07.jpg";
import Camp6 from "@/assets/photos/springscamp/spring-camp-10.jpg";
import Camp7 from "@/assets/photos/springscamp/spring-camp-06.jpg";
import Camp8 from "@/assets/photos/springscamp/spring-camp-08.jpg";

// --------------------------------------------------------------------------
import Camp9 from "@/assets/photos/springscamp/spring-camp-01.jpg";
import Camp10 from "@/assets/photos/springscamp/spring-camp-03.jpg";
import Camp11 from "@/assets/photos/springscamp/spring-camp-03.jpg";
import Camp12 from "@/assets/photos/springscamp/spring-camp-04.jpg";
import Camp13 from "@/assets/photos/springscamp/spring-camp-02.jpg";

// --------------------------------------------------------------------------
import Camp14 from "@/assets/photos/springscamp/transportation-05.jpg";
import Camp15 from "@/assets/photos/springscamp/transportation-04.jpg";
import Camp16 from "@/assets/photos/springscamp/transportation-03.jpg";
import Camp17 from "@/assets/photos/springscamp/transportation-02.jpg";
import Camp18 from "@/assets/photos/springscamp/transportation-01.jpg";

import "./Camps.css";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Camps() {

  const { i18n } = useTranslation();
  const localeActive = i18n.language;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <section
      id="camp"
      className="w-[1200px] max-w-full mx-auto text-white py-6 px-5"
    >
      <h3 className="text-center font-medium mb-[50px] text-2xl tracking-[1.5px]">
        {localeActive === "en" ? 'HOT SPRINGS CAMP' : 'Лагерь у горячих источников'}
      </h3>
      <p className="font-thin text-justify mx-10 camp__description">
        {localeActive === "en" ? `Perched amidst the high-altitude serenity of the Pamirs, the Hot Springs
        Camp offers a warm haven against the crisp mountain air. Named for the
        natural thermal springs nearby, our camp provides a cozy respite where
        hunters can rejuvenate after a day in the wild. It's a place where the
        spirit of adventure meets relaxation, all set against the breathtaking
        backdrop of Tajikistan's rugged peaks. Here, warmth extends beyond the
        thermal waters, as our staff ensures a comfortable, inviting stay,
        echoing the natural hospitality of Murgab's landscapes.`:
        'Расположенный среди высокогорного спокойствия Памира, лагерь «Горячие источники» предлагает тёплое убежище от прохладного горного воздуха. Названный в честь природных термальных источников, находящихся поблизости, наш лагерь предоставляет уютное пристанище, где охотники могут отдохнуть и восстановить силы после дня, проведённого в дикой природе. Здесь дух приключений встречается с расслаблением на фоне величественных пейзажей суровых пиков Таджикистана. В лагере «Горячие источники» тепло исходит не только от термальных вод, но и от заботы и гостеприимства нашего персонала, обеспечивающего каждому гостю комфортное и уютное пребывание, отражающее природную красоту и спокойствие ландшафтов Мургаба.'}
      </p>
      <div className="bg-[#332B18] rounded-[15px] p-[40px] mt-[50px] camp_wrapper">
        <div className="flex items-center flex-wrap gap-7 mb-7 text-[#8E7E57] camps_navigation text-sm font-semibold">
          <button
            className={`${currentSlide == 0 && "active-tab text-white"}`}
            onClick={() => {
              setCurrentSlide(0);
              slider.current.slickGoTo(0);
            }}
          >
            {localeActive === "en" ? 'Springs camp' : 'Лагерь у источников'}

          </button>
          <button
            className={`${currentSlide == 1 && "active-tab text-white"}`}
            onClick={() => {
              setCurrentSlide(1);
              slider.current.slickGoTo(1);
            }}
          >
            {localeActive === "en" ? 'VIP House' : 'VIP-дом'}


          </button>
          <button
            className={`${currentSlide == 2 && "active-tab text-white"}`}
            onClick={() => {
              setCurrentSlide(2);
              slider.current.slickGoTo(2);
            }}
          >
            {localeActive === "en" ? 'Standard House' : 'Стандартный дом'}


          </button>
          <button
            className={`${currentSlide == 3 && "active-tab text-white"}`}
            onClick={() => {
              setCurrentSlide(3);
              slider.current.slickGoTo(3);
            }}
          >
            {localeActive === "en" ? 'Transportation' : 'Транспортировка'}

            
          </button>
        </div>
        <div>
          <Slider arrows={false} ref={slider} {...settings}>
            <div className="camp_container flex items-start gap-[20px]">
              <Image
                src={Camp1}
                alt="Picture 1"
                className="border border-[#8E7E57] rounded-[5px] w-[550px]"
              />
              <div>
                <div className="flex items-start mb-[20px] gap-5">
                  <Image
                    src={Camp2}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp3}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
                <div className="flex items-start gap-5">
                  <Image
                    src={Camp4}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp4}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
              </div>
            </div>
            <div className="camp_container flex gap-[20px]">
              <Image
                src={Camp1}
                alt="Picture 1"
                className="border border-[#8E7E57] rounded-[5px] w-[550px]"
              />
              <div>
                <div className="flex items-start mb-[20px] gap-5">
                  <Image
                    src={Camp5}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp6}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
                <div className="flex items-start gap-5">
                  <Image
                    src={Camp7}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp8}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
              </div>
            </div>
            <div className="camp_container flex gap-[20px]">
              <Image
                src={Camp9}
                alt="Picture 1"
                className="border border-[#8E7E57] rounded-[5px] w-[550px]"
              />
              <div>
                <div className="flex items-start mb-[20px] gap-5">
                  <Image
                    src={Camp10}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp11}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
                <div className="flex items-start gap-5">
                  <Image
                    src={Camp12}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp13}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
              </div>
            </div>
            <div className="camp_container flex gap-[20px]">
              <Image
                src={Camp14}
                alt="Picture 1"
                className="border border-[#8E7E57] rounded-[5px] w-[550px]"
              />
              <div>
                <div className="flex items-start mb-[20px] gap-5">
                  <Image
                    src={Camp15}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp16}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
                <div className="flex items-start gap-5">
                  <Image
                    src={Camp18}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                  <Image
                    src={Camp17}
                    alt="Picture 1"
                    className="min-w-0 object-cover border border-[#8E7E57] rounded-[5px] w-[260px]"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* <div className="flex items-start justify-center flex-wrap gap-4 mt-5 relative bg-[#332B18]">
        <Image
          // priority={true}
          src={Camp1}
          alt="Camp1"
          className="w-[530px] h-[530px] object-cover rounded-[10px] border border-[#8e7e57] big-image"
        />
        <div>
          <div className="flex items-center justify-center gap-5 mb-5 relative w-full">
            <Image
              // priority={true}
              src={Camp2}
              alt="Camp1"
              className="w-[295px] h-[255px] object-cover rounded-[10px] border border-[#8e7e57] small__pics "
            />
            <Image
              // priority={true}
              src={Camp3}
              alt="Camp1"
              className="w-[295px] h-[255px] object-cover rounded-[10px] border border-[#8e7e57] small__pics "
            />
          </div>
          <div className="flex items-center justify-center gap-5 w-full">
            <Image
              // priority={true}
              src={Camp5}
              alt="Camp1"
              className="w-[295px] h-[255px] object-cover rounded-[10px] border border-[#8e7e57] small__pics "
            />
            <Image
              // priority={true}
              src={Camp4}
              alt="Camp1"
              className="w-[295px] h-[255px] object-cover rounded-[10px] border border-[#8e7e57] small__pics "
            />
          </div>
        </div>
      </div> */}
    </section>
  );
}
