import Image from "next/image";
import Camp1 from "@/assets/gallery/Frame 1656.png";
import Camp2 from "@/assets/gallery/Frame 1657.png";
import Camp3 from "@/assets/gallery/Frame 1659.png";
import Camp4 from "@/assets/gallery/Frame 1660.png";
import Camp5 from "@/assets/gallery/Frame 1681.png";

import "./Camps.css";

export default function Camps() {
  return (
    <section id="camp" className="w-[1200px] max-w-full mx-auto text-white py-6 px-5">
      <h3 className="text-center mb-[50px] text-2xl tracking-[1.5px]">
        HOT SPRINGS CAMP
      </h3>
      <p className="font-light">
        {`Perched amidst the high-altitude serenity of the Pamirs, the Hot Springs
        Camp offers a warm haven against the crisp mountain air. Named for the
        natural thermal springs nearby, our camp provides a cozy respite where
        hunters can rejuvenate after a day in the wild. It's a place where the
        spirit of adventure meets relaxation, all set against the breathtaking
        backdrop of Tajikistan's rugged peaks. Here, warmth extends beyond the
        thermal waters, as our staff ensures a comfortable, inviting stay,
        echoing the natural hospitality of Murgab's landscapes.`}
      </p>
      <div className="flex items-start justify-center flex-wrap gap-4 mt-5 relative ">
        <Image src={Camp1} alt="Camp1" className="w-[530px] h-[530px]" />
        <div>
          <div className="flex items-center justify-center gap-5 mb-5 relative ">
            <Image
              src={Camp2}
              alt="Camp1"
              className="max-w-[295px] h-[255px] small__pics "
            />
            <Image
              src={Camp3}
              alt="Camp1"
              className="max-w-[295px] h-[255px] small__pics "
            />
          </div>
          <div className="flex items-center justify-center gap-5">
            <Image
              src={Camp5}
              alt="Camp1"
              className="max-w-[295px] h-[255px] small__pics "
            />
            <Image
              src={Camp4}
              alt="Camp1"
              className="max-w-[295px] h-[255px] small__pics "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
