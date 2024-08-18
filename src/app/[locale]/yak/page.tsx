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
import "./yak.css";

import { gallery } from "@/data/gallery";
import Link from "next/link";
import Image from "next/image";

import YakBanner from "@/components/YakBanner/YakBanner";
import Contact from "@/components/Contact/Contact";
import Trophies from "@/components/Trophies/Trophies";
import { useLocale } from "next-intl";

export default function YakPage() {

  const localeActive = useLocale();


  const filteredData = gallery.filter((item) => item.trophie_status === "yak");
  return (
    <main id="yak-page">
      <YakBanner />
      <section id="yak-text-wrapper" className="px-[85px] mt-10">
        <div className="yak__text-wrapper relative bottom-[120px]">
          <p className="text-white font-extralight text-justify">
            {
              localeActive === 'en' ?
                `Hunting yaks in the Pamir Mountains is a unique and thrilling
            adventure. The Pamir region, nestled in the highlands of Central
            Asia, is home to some of the largest and most majestic yaks in the
            world. This remote and stunning landscape offers a challenging
            terrain that adds to the excitement of the hunt. The rugged mountain
            slopes, interspersed with alpine meadows and crystal-clear rivers,
            create an environment where the hardy yaks thrive, adapted to the
            harsh climatic conditions and high altitudes.`:
                `Охота на яков в Памирских горах — это уникальное и захватывающее приключение. Регион Памир, расположенный в высокогорьях Центральной Азии, является домом для одних из самых крупных и величественных яков в мире. Этот удаленный и живописный ландшафт предлагает сложный рельеф, который добавляет волнения в охоту. Суровые горные склоны, перемежающиеся альпийскими лугами и кристально чистыми реками, создают среду, в которой стойкие яки процветают, адаптируясь к суровым климатическим условиям и высоким высотам.`
            }

          </p>
          <p className="text-white font-extralight mt-5 text-justify">
            {
              localeActive === 'en' ?
                `The experience of tracking these magnificent beasts is not just
            about the hunt itself; it&apos;s a journey through a rich tapestry
            of cultural heritage and natural wonders. As hunters traverse the
            vast expanses of the Pamirs, they encounter not only the wildlife
            but also the indigenous people who have lived in harmony with the
            land for centuries. These communities possess a deep understanding
            of the mountains and the life that inhabits them, often serving as
            guides and sharing their invaluable knowledge.`:
                `Опыт отслеживания этих величественных животных — это не только сама охота; это путешествие по богатой ткани культурного наследия и природных чудес. Пока охотники пересекают обширные просторы Памира, они сталкиваются не только с дикой природой, но и с коренными народами, которые веками живут в гармонии с этой землёй. Эти сообщества обладают глубоким пониманием гор и жизни, которая в них обитает, часто выступая в роли проводников и делясь своими бесценными знаниями.`
            }

          </p>
          <p className="text-white font-extralight mt-5 text-justify">
            {
              localeActive === 'en' ?
                `Participating in a yak hunt in the Pamir Mountains is also an
            opportunity to contribute to the conservation efforts in the region.
            Sustainable hunting practices help maintain the balance of the
            ecosystem, ensuring that the yak populations remain robust and the
            natural beauty of the Pamirs is preserved for future generations.`:
                `Участие в охоте на яков в Памирских горах также предоставляет возможность внести вклад в усилия по охране природы в регионе. Устойчивые охотничьи практики помогают поддерживать баланс экосистемы, обеспечивая, чтобы популяции яков оставались здоровыми, а природная красота Памиров сохранялась для будущих поколений.`
            }

          </p>
        </div>
        <div className="gallery__section-yak">
          <h3 className="text-white text-center text-[28px] font-medium uppercase mt-[70px] gallery__title">
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
          <Trophies animalName="Yak" />
        </div>
      </section>
      <Contact />
    </main>
  );
}
