import "./AboutBanner.css";

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
          <div className="mt-[80px] relative about__text z-[9999]">
            <p>
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
