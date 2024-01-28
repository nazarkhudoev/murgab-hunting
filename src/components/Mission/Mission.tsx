import TabImage2 from "@/assets/images/tabs-images/Frame 1632 (1).png";
import Image from "next/image";

import "./Mission.css";

export default function Mission() {
  return (
    <div className="flex items-start justify-between gap-7 px-10 mt-5 mission-container">
      <div>
        <Image src={TabImage2} alt="TabImage1" height={360} width={590} priority={true}/>
      </div>
      <div className="w-[360px] max-w-full font-extralight text-white">
        <p>
          {`Murgab Hunting's mission is to offer ethical and sustainable
                  hunting experiences in Tajikistan's Pamir Mountains, focusing on
                  conservation, community engagement, and the preservation of
                  Marco Polo sheep and Pamirian Ibex.`}
        </p>
      </div>
    </div>
  );
}
