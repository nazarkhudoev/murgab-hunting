import Link from "next/link";

import "./MainBanner.css";

const MainBanner = () => {
  return (
    <div className="relative main">
      <div className="px-[85px] pt-[200px] relative z-50 main__banner-home">
        <h1 className="text-[80px] font-bold text-white uppercase">
          Join the Elite
        </h1>
        <p className="text-white text-[39px] font-thin">
          Reserve Your Marco Polo Hunt Now!
        </p>
        <div className="flex items-center gap-7 mt-7">
          <Link
            className="flex items-center justify-center border border-white rounded-[10px] w-[280px] h-[40px] bg-[#FFFFFF] text-[#F45914] font-medium text-xl"
            href={"/"}
          >
            Join Now
          </Link>
          <Link
            className="flex items-center justify-center border-2 border-white rounded-[10px] w-[280px] h-[40px] text-white font-medium text-xl"
            href={"/"}
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
