"use client";
import MarcoPoloBanner from "@/components/MarcoPoloBanner/MarcoPoloBanner";

import Fancybox from "@/components/Fancybox/Fancybox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./ibex.css"

import { gallery } from "@/data/gallery";
import Link from "next/link";
import Image from "next/image";

import IbexBanner from "@/components/IbexBanner/IbexBanner";
import Contact from "@/components/Contact/Contact";
import Trophies from "@/components/Trophies/Trophies";
import { useLocale } from "next-intl";

export default function IbexPage() {

  const localeActive = useLocale();


  const filteredData = gallery.filter(
    (item) => item.trophie_status === "ibex" || item.trophie_status === "ibex-marcopolo"
  );
  return (
    <main id="ibex-page">
      <IbexBanner />
      <section id="ibex-text-wrapper" className="w-[1200px] max-w-full mx-auto mt-10">
        {
          localeActive === 'en' ?
            <p className="text-white font-extralight ibex_text relative z-[99]">

              Over the last 30 years, trophy hunting for the Siberian ibex has been
              conducted in Tajikistan, mainly in the Pamirs. Annually, between 50
              and 100 trophies are obtained. Some of these trophies have been
              inspected and processed, primarily the horns and skin, as well as
              photographs of the hunted animals. Analysis of these materials
              indicates that there are two forms (subspecies) of the Siberian ibex
              living in Tajikistan: Capra sibirica alaiana and Capra sibirica
              sakeen. The habitat of Capra sibirica alaiana covers the territories
              of Central and Northern Tajikistan and is found in the southern ridges
              and Badakhshan. <br /> <br /> The second subspecies, Capra sibirica sakeen, resides
              exclusively in the Pamir region (map 1). The habitats of both forms
              are clearly divided by the geographical boundary of Badakhshan and
              Eastern Pamir. Morphologically, they also differ in body coloration,
              and the shape and size of horns. Below is a description of the
              coloration of the two forms of Siberian ibex in Tajikistan. The
              coloration of the animals depends on sex, age, and season. Young
              individuals up to one year old are usually light gray with a slight
              brownish tinge, and the tail is dark brown. Females are typically
              uniform in color throughout the year, light brown, sometimes with a
              grayish tinge. Old females, over 12 years of age, acquire a
              yellowish-ochre coloration. On some females, a so-called
              &quot;belt,&quot; a dark stripe along the spine, is clearly visible on
              the back.
            </p> :
            <p className="text-white font-extralight ibex_text relative z-[99]">

              В течение последних 30 лет трофейная охота на сибирского козерога (Capra sibirica) проводилась в Таджикистане, главным образом в Памире. Ежегодно добывается от 50 до 100 трофеев. Некоторые из этих трофеев были осмотрены и обработаны, в основном рога и шкуры, а также фотографии добытых животных. Анализ этих материалов показывает, что в Таджикистане обитают две формы (подвида) сибирского козерога: Capra sibirica alaiana и Capra sibirica sakeen. Ареал обитания Capra sibirica alaiana охватывает территории Центрального и Северного Таджикистана и встречается на южных хребтах и в Бадахшане.
              <br /> <br />
              Второй подвид, Capra sibirica sakeen, обитает исключительно в регионе Памир. Ареалы обеих форм четко разделены географической границей Бадахшана и Восточного Памира. Морфологически они также различаются по окраске тела, форме и размеру рогов. Ниже приведено описание окраски двух форм сибирского козерога в Таджикистане. Окраска животных зависит от пола, возраста и сезона. Молодые особи до одного года обычно светло-серые с легким коричневатым оттенком, хвост темно-коричневый. Самки, как правило, имеют однородную окраску в течение всего года, светло-коричневую, иногда с сероватым оттенком. Старые самки, старше 12 лет, приобретают желтовато-охристую окраску. У некоторых самок на спине четко видна так называемая &quot;полоса&quot;, темная полоса вдоль позвоночника.
            </p>

        }

        <h3 className="text-white text-center text-[28px] font-medium uppercase mt-[100px] gallery__title">
          {localeActive === 'en' ? 'Gallery' : 'Галерея'}

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
                      // width={100}
                      // height={100}
                      // style={{
                      //   width: "200px",
                      //   height: "200px",
                      // }}
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
        <Trophies animalName="Ibex Pamirian" />
      </section>
      <Contact />
    </main>
  );
}
