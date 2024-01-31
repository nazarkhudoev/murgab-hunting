import "./IbexBanner.css";

export default function IbexBanner() {
  return (
    <section className="pt-[200px] relative pb-14 px-[85px] ibex__banner">
      <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px]">
        ibex
      </h1>
      <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px]">
        siberian
      </h1>
      <div className="flex items-center gap-10">
        <div className="text-[#C5C5C5] mt-[160px]">
          <h3 className="text-5xl font-semibold">+5 k</h3>
          <p className="mt-2">Total Number</p>
        </div>
        <div className="text-[#C5C5C5] mt-[160px]">
          <h3 className="text-5xl font-semibold">2,5 k</h3>
          <p className="mt-2">Trophies</p>
        </div>
      </div>
      <div className="gradient-marcopolo absolute left-0 -bottom-[44px]"></div>
    </section>
  );
}
