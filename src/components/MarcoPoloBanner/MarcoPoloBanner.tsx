import "./MarcoPoloBanner.css";

export default function MarcoPoloBanner() {
  return (
    <div className="pt-[200px] pb-14 relative marcopolo__banner">
      <section className="w-[1200px] mx-auto">
        <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px] relative z-[89]">
          Marco Polo
        </h1>
        <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px] relative z-[89]">
          Argali
        </h1>
        <div className="flex items-start flex-wrap gap-[40px] relative z-[99] animal_statistics">
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold"> +27k</h3>
            <p>Total Number</p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">+2k</h3>
            <p>Trophies</p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">5 k (20%)</h3>
            <p>Young Animals (0-3)</p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">3 k (11%)</h3>
            <p>Adult Males ({">"}3)</p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">3 k (11%)</h3>
            <p>Adult Males ({">"}3)</p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">7 k (23.9%)</h3>
            <p>Adult Females ({">"}8)</p>
          </div>
        </div>
      </section>
      <div className="gradient-marcopolo absolute left-0 -bottom-[77px]"></div>
    </div>
  );
}
