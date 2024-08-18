import { useLocale } from "next-intl";
import "./MarcoPoloBanner.css";

export default function MarcoPoloBanner() {

  const localeActive = useLocale();


  return (
    <div className="pt-[200px] pb-14 relative marcopolo__banner">
      <section className="w-[1200px] mx-auto">
        <h1 className="flex-col text-white text-[80px] font-bold uppercase tracking-[2px] relative z-[89]">
          {localeActive === 'en' ? `Marco Polo 
          `: `
          Марко Поло 
          `}

        </h1>

        <div className="flex items-start flex-wrap gap-[40px] relative z-[99] animal_statistics">
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold"> +27k</h3>
            <p>{localeActive === 'en' ? 'Total Number' : 'Общее количество'}</p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">+2k</h3>
            <p>{localeActive === 'en' ? 'Trophies' : 'Трофеи'}</p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">5 k (20%)</h3>
            <p>{localeActive === 'en' ? 'Young Animals (0-3)' : 'Молодые особи (0-3)'} </p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">7 k (23.9%)</h3>
            <p>{localeActive === 'en' ? 'Adult Males (>3)' : 'Взрослые самцы (>3)'}  </p>
          </div>
          <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">3 k (11%)</h3>
            <p>{localeActive === 'en' ? 'Adult Females(>3)' : 'Взрослые самки (>3)'}  </p>
          </div>
          {/* <div className="text-[#8E7E57] mt-[160px] relative z-[99]">
            <h3 className="text-[40px] font-bold">7 k (23.9%)</h3>
            <p>Adult Females ({">"}8)</p>
          </div> */}
        </div>
      </section>
      <div className="gradient-marcopolo absolute left-0 -bottom-[77px]"></div>
    </div>
  );
}
