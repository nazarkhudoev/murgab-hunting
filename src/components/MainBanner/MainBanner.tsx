import Link from "next/link";

import "./MainBanner.css";

const MainBanner = () => {
  return (
    <div className="relative main">
      <div className="custom__shadow"></div>
      <div className="px-[85px] pt-[200px] max-w-full w-[1400px] mx-auto relative z-50 main__banner-home">
        <h1 className="text-[80px] font-bold text-white uppercase">
          Join the Elite
        </h1>
        <p className="text-white text-[39px] font-thin">
          Reserve Your Marco Polo Hunt Now!
        </p>
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
