import "./AboutBanner.css";

export default function AboutBanner() {
  return (
    <section className="relative">
      <div className="about__banner">
        <h1 className="text-6xl uppercase font-bold tracking-[1.5px]">About</h1>
        <h1 className="text-6xl uppercase font-bold mt-2 tracking-[1.5px]">Murgab</h1>
        <div className="mt-[80px] relative z-[79]">
          <p>{`Welcome to Murgab Hunting, a premier destination for sport hunting tourism and expeditionary`}</p>
          <p>
            {`services in the heart of the Gorno-Badakhshan Autonomous Region, Tajikistan. Since our `}
          </p>
          <p>
            {`inception in 1989, we've been dedicated to providing unforgettable experiences in one of the`}
            <p>{`world's most majestic natural landscapes.`}</p>
          </p>
        </div>
      </div>
      <div className="banner-gradient"></div>
    </section>
  );
}
