import Link from "next/link";

import "./MainBanner.css";

const MainBanner = () => {
  return (
    <div className="relative main mb-10">
      <div className="custom__shadow"></div>
      <div className="pt-[180px] w-[1200px] mx-auto relative z-50 main__banner-home">
        <h1 className="text-[80px] font-bold text-white uppercase">
          Murgab Hunting
        </h1>

        <div className="moto">
          <p className="text-white text-[48px] font-normal uppercase">
            Join the Elite
          </p>
          <p className="text-white text-[32px] font-thin">
            Reserve Your Marco Polo Hunt Now!
          </p>
        </div>

        <div className="flex items-center gap-7 mt-7">
          <a
            className="flex items-center justify-center border border-white rounded-[10px] w-[280px] h-[40px] bg-[#FFFFFF] text-[#F45914] font-medium text-xl"
            href="#book"
          >
            Book Now
          </a>
          <Link
            className="flex items-center justify-center border-2 border-white rounded-[10px] w-[280px] h-[40px] text-white font-medium text-xl"
            href={"/about-us"}
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="gradient-main absolute left-0 -bottom-[165px]"></div>
    </div>
  );
};

export default MainBanner;
