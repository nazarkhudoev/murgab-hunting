import "./MarcoPoloBanner.css";

export default function MarcoPoloBanner() {
  return (
    <div className="pt-[200px] pb-14 px-[85px] relative marcopolo__banner">
      <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px] relative z-[89]">
        Marco Polo
      </h1>
      <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px] relative z-[89]">
        Argali
      </h1>
      <div className="flex items-start flex-wrap gap-10 relative z-[99] animal_statistics">
        <div className="text-[#8E7E57] mt-[160px]">
          <h3 className="text-[31px] font-bold"> +27k</h3>
          <p className="mt-2">Total Number</p>
        </div>
        <div className="text-[#8E7E57] mt-[160px]">
          <h3 className="text-[31px] font-bold">+2k</h3>
          <p className="mt-2">Trophies</p>
        </div>
        <div className="text-[#8E7E57] mt-[160px]">
          <h3 className="text-[31px] font-bold">5 k (20%)</h3>
          <p className="mt-2">Young Animals (0-3)</p>
        </div>
        <div className="text-[#8E7E57] mt-[160px]">
          <h3 className="text-[31px] font-bold">3 k (11%)</h3>
          <p className="mt-2">Adult Males ({">"}3)</p>
        </div>
        <div className="text-[#8E7E57] mt-[160px]">
          <h3 className="text-[31px] font-bold">3 k (11%)</h3>
          <p className="mt-2">Adult Males ({">"}3)</p>
        </div>
        <div className="text-[#8E7E57] mt-[160px]">
          <h3 className="text-[31px] font-bold">7 k (23.9%)</h3>
          <p className="mt-2">Adult Females ({">"}8)</p>
        </div>
      </div>
      <div className="gradient-marcopolo absolute left-0 -bottom-[7px]"></div>
    </div>
  );
}
