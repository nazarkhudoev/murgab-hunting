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
import "./marco-polo.css";

import { gallery } from "@/data/gallery";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact/Contact";
import Trophies from "@/components/Trophies/Trophies";
import { useLocale } from "next-intl";

export default function MarcoPoloPage() {

  const localeActive = useLocale();

  const filteredData = gallery.filter(
    (item) =>
      item.trophie_status === "marcopolo" ||
      item.trophie_status === "ibex-marcopolo"
  );
  return (
    <main id="marco-polo-page">
      <MarcoPoloBanner />
      <section id="marcopolo-text-wrapper" className="w-[1200px] max-w-full mx-auto mt-10">
        <p className="text-white font-extralight relative z-[99] text-justify">
          {
            localeActive === 'en'?
            ` The Marco Polo sheep, Pamir mountain sheep or Pamir argali (Ovis ammon
          polii) is one of the subspecies of argali. Its range includes the
          south of the Kyrgyz Republic, a narrow strip in the western Xinjiang
          Uygur Autonomous Region of the People&apos;s Republic of China, the
          Little and Great Pamir in northeastern Afghanistan, and a small area
          in the Northern Territories of Pakistan. The main range and the
          majority of the Marco Polo sheep population are located in the
          Republic of Tajikistan, in the Pamir. The Marco Polo sheep is included
          in the Red Book of the Republic of Tajikistan (1988, 2015) and in the
          International Red Book of the IUCN as a &quot;vulnerable&quot; species
          (VU). Since 1987, trophy hunting for foreign tourists has been
          conducted in Tajikistan based on special permits from the CITES,
          founded on the recommendations of the Academy of Sciences and the
          interdepartmental commission. The quota for the annual culling of
          argali according to the current legislation is approved by the
          Government of the republic and for the current year is set at 105
          heads. Tajikistan bears a special responsibility for the conservation
          of this subspecies of wild sheep within the republic and since 1990,
          large-scale population censuses of this species have been conducted in
          the country.`:
            `Архар Марко Поло, или памирский архар (Ovis ammon polii), является одним из подвидов архара. Его ареал включает юг Кыргызской Республики, узкую полосу на западе Синьцзян-Уйгурского автономного района Китая, Малый и Большой Памир на северо-востоке Афганистана, а также небольшую территорию в Северных районах Пакистана. Основная часть ареала и большинство популяции архара Марко Поло находятся в Республике Таджикистан, в Памире. Архар Марко Поло внесен в Красную книгу Республики Таджикистан (1988, 2015) и в Международную Красную книгу Международного союза охраны природы (IUCN) как вид «уязвимый» (VU). С 1987 года в Таджикистане проводится трофейная охота для иностранных туристов на основании специальных разрешений CITES, основанных на рекомендациях Академии наук и межведомственной комиссии. Квота на ежегодный отстрел архаров согласно действующему законодательству утверждается правительством республики и на текущий год установлена в размере 105 особей. Таджикистан несет особую ответственность за сохранение этого подвида диких овец в республике, и с 1990 года в стране проводятся крупномасштабные переписи популяции этого вида.`
          }
         
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
        <Trophies animalName="Marco Polo Argali"/>
      </section>
      <Contact />
    </main>
  );
}
