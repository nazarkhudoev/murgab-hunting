import "./YakBanner.css";

export default function YakBanner() {
  return (
    <section className="pt-[200px] relative pb-14 px-[85px] yak__banner">
      <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px] relative z-[999]">
        yak
      </h1>
      <div className="gradient-yak absolute left-0 -bottom-[44px]"></div>
    </section>
  );
}
