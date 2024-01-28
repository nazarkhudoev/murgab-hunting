import Image from "next/image";
import Founder1 from "@/assets/founder1.png";
import Founder2 from "@/assets/founder-2.png";

import "./Founders.css";

export default function Founders() {
  return (
    <section id="founders" className="py-10 px-[85px] text-white mt-[70px]">
      <h3 className="text-center font-semibold text-2xl uppercase mb-[80px] tracking-[1.5px]">
        Founders
      </h3>
      <div className="flex items-start justify-center gap-7 founders-wrapper">
        <div className="flex items-start gap-7 w-[500px] max-w-full">
          <div>
            <Image
              src={Founder1}
              alt="Founder1"
              className="rounded-lg w-[240px] h-[240px] object-cover"
            />
          </div>
          <div>
            <p className="text-[#8E7E57] text-xl font-medium uppercase">
              Atobek <br /> Bekmurodov
            </p>
            <p className="text-[14px] font-light mt-4">Professional Hunter</p>
          </div>
        </div>
        <div className="flex items-start gap-7 w-[500px] max-w-full">
          <div>
            <Image
              src={Founder2}
              alt="Founder1"
              className="rounded-lg w-[240px] h-[240px] object-cover"
            />
          </div>
          <div>
            <p className="text-[#8E7E57] text-xl font-medium uppercase">
              Bekmurodi <br /> Zafar
            </p>
            <p className="text-[14px] font-light mt-4">Professional Hunter</p>
          </div>
        </div>
      </div>
    </section>
  );
}
