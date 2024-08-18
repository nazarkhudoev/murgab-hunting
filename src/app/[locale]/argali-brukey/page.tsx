"use client";
import ArgaliBrukeyBanner from "@/components/ArgaliBrukeyBanner/ArgaliBrukeyBanner";
import Contact from "@/components/Contact/Contact";

import { gallery } from "@/data/gallery";


import Fancybox from "@/components/Fancybox/Fancybox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";
import Trophies from "@/components/Trophies/Trophies";
import { useLocale } from "next-intl";

export default function ArgaliBrukeyPage() {
  const localeActive = useLocale();

  const filteredData = gallery.filter(
    (item) =>
      item.trophie_status === "marcopolo" ||
      item.trophie_status === "ibex-marcopolo"
  );
  return (
    <main id="brukey-page">
      <ArgaliBrukeyBanner />
      <section id="argali-brukey-text-wrapper" className="px-[85px] mt-10">
        <p className="text-white font-extralight">
          {localeActive === 'en'?
          `Discover the rare and majestic Argali Brukey, a creature that stands
          out in the wild with its distinctive morphological features. Unlike
          the more commonly known Marco Polo argali, the Argali Brukey boasts a
          unique set of horns that, while shorter, possess a broader
          circumference at their base, enhancing their impressive stature.`:
          `Откройте для себя редкого и величественного архара Брукей, который выделяется в дикой природе своими отличительными морфологическими особенностями. В отличие от более известных архаров Марко Поло, архар Брукей имеет уникальный набор рогов, которые, хотя и короче, имеют более широкую окружность у основания, что подчеркивает его впечатляющий вид.`}
         
          <br /> <br />
          {localeActive === 'en'?
          `Thriving across the vast and breathtaking landscape of the historic
          Wakhan Corridor, their habitat extends through the rugged terrains of
          Southern Pamir in Tajikistan, skirting the serene northern banks of
          Lake Zorkul, and reaching up to the edge where the country meets
          Afghanistan.`:
          `Процветая на обширных и захватывающих пейзажах исторического Ваханского коридора, их среда обитания простирается через труднодоступные территории Южного Памира в Таджикистане, обходя спокойные северные берега озера Зоркуль и достигая края, где страна граничит с Афганистаном.`}
      
          
          <br /> <br />

          {localeActive === 'en'?
          `Embodying the untamed spirit of the regions they inhabit, the Argali
          Brukey is a testament to the rich biodiversity and the intricate
          tapestry of life that exists within these remote ecosystems. Their
          presence symbolizes the resilience and adaptability of wildlife in the
          face of ever-changing environments.`:
          `Олицетворяя дикий дух регионов, в которых они обитают, архар Брукей является свидетельством богатого биоразнообразия и сложной ткани жизни, существующей в этих удаленных экосистемах. Их присутствие символизирует устойчивость и адаптивность дикой природы перед лицом постоянно меняющихся условий окружающей среды.`}
      
          
        </p>
        <h3 className="text-white text-center text-[28px] font-medium uppercase mt-[150px] gallery__title">
          {localeActive === 'en'?'Gallery':'Галерея'}
          
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
        <Trophies animalName="Argali Brukey"/>
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
