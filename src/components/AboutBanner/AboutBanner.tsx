import "./AboutBanner.css";

import OldLogo from "../../assets/old-logo.png";
import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="relative">
      <div className="about__banner">
        <div className="w-[1400px] max-w-full mx-auto about__text-container">
          <h1 className="text-6xl uppercase font-bold tracking-[1.5px]">
            About
          </h1>
          <h1 className="text-6xl uppercase font-bold mt-2 tracking-[1.5px]">
            Murgab
          </h1>
          <div className="mt-[140px] relative about__text z-[9999] flex items-center gap-[50px] about__banner-wrapper">
            <Image src={OldLogo} alt="OldLogo" width={161} height={160} className="" />
            <p className="text-[22px] font-light w-[965px] max-w-full text-justify">
              {`Welcome to Murgab Hunting, a premier destination for sport hunting tourism and expeditionary`}
              {`services in the heart of the Gorno-Badakhshan Autonomous Region, Tajikistan. Since our `}
              {`inception in 1989, we've been dedicated to providing unforgettable experiences in one of the`}
              {`world's most majestic natural landscapes.`}
            </p>
          </div>
        </div>
      </div>
      <div className="about-gradient"></div>
    </section>
  );
}
