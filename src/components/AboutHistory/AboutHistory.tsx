import Image from "next/image";
import HistoryImage from "@/assets/Photo.jpg";

import "./AboutHistory.css";

export default function AboutHistory() {
  return (
    <section id="history" className="pb-10 pt-[130px] w-[1400px] max-w-[100%] mx-auto px-[120px] text-white">
      <h3 className="uppercase text-center text-white text-2xl font-semibold tracking-[1.5px]">
        company history and leadership
      </h3>
      <div className="mt-10 flex items-start justify-between gap-5 about-history-container">
        <div>
          <Image
            src={HistoryImage}
            alt="HistoryImage"
            className="border-2 border-[#8E7E57] w-[400px] h-[367px] object-cover max-w-full rounded-[10px] history__text-image"
          />
        </div>
        <div className="w-[730px] max-w-full">
          <p className="font-light">
            Founded in 1989 by the visionaries Atobek Bekmurodov and Bekmurodi
            Zafar, our company has grown from a passionate team of former
            athletes, tourists, geologists, and professional hunters to a
            leading name in responsible hunting tourism. Our team ensures that
            your quest for the elusive Marco Polo sheep and the resilient
            mountain goats is not only successful but also sustainable and
            respectful to the natural splendor of the region. Our journey,
            marked by dedication and expertise, has set a standard in the
            industry.
          </p>
          <p className="mt-6 font-light">
            With a rich legacy spearheaded by our founders, we cater to the
            discerning hunter seeking not just a hunt, but an expedition—a story
            to be told for generations.
          </p>
          <p className="mt-6 font-light">
            Murgab Hunting is not just about the pursuit of game; it’s about
            embracing the rugged beauty of the Pamirs, the thrill of the chase,
            and the preservation of hunting traditions. We invite you to join
            us, where hunting is an art and every expedition is an odyssey.
          </p>
        </div>
      </div>
    </section>
  );
}
