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

export default function YakPage() {
  const filteredData = gallery.filter((item) => item.trophie_status === "yak");
  return (
    <main id="yak-page">
      <YakBanner />
      <section id="yak-text-wrapper" className="px-[85px] mt-10">
        <div className="yak__text-wrapper">
          <p className="text-white font-extralight text-justify">
            Hunting yaks in the Pamir Mountains is a unique and thrilling
            adventure. The Pamir region, nestled in the highlands of Central
            Asia, is home to some of the largest and most majestic yaks in the
            world. This remote and stunning landscape offers a challenging
            terrain that adds to the excitement of the hunt. The rugged mountain
            slopes, interspersed with alpine meadows and crystal-clear rivers,
            create an environment where the hardy yaks thrive, adapted to the
            harsh climatic conditions and high altitudes.
          </p>
          <p className="text-white font-extralight mt-5 text-justify">
            The experience of tracking these magnificent beasts is not just
            about the hunt itself; it&apos;s a journey through a rich tapestry
            of cultural heritage and natural wonders. As hunters traverse the
            vast expanses of the Pamirs, they encounter not only the wildlife
            but also the indigenous people who have lived in harmony with the
            land for centuries. These communities possess a deep understanding
            of the mountains and the life that inhabits them, often serving as
            guides and sharing their invaluable knowledge.
          </p>
          <p className="text-white font-extralight mt-5 text-justify">
            Participating in a yak hunt in the Pamir Mountains is also an
            opportunity to contribute to the conservation efforts in the region.
            Sustainable hunting practices help maintain the balance of the
            ecosystem, ensuring that the yak populations remain robust and the
            natural beauty of the Pamirs is preserved for future generations.
          </p>
        </div>
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
      </section>
      <Contact />
    </main>
  );
}
