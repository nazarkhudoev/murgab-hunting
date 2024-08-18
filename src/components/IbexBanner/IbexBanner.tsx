import { useLocale } from "next-intl";
import "./IbexBanner.css";

export default function IbexBanner() {

  const localeActive = useLocale();

  return (
    <section className="pt-[200px] relative pb-14 px-[85px] ibex__banner">
      <section className="w-[1200px] mx-auto">
        <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px] relative z-[93]">
          {localeActive === 'en' ? 'Pamirian Ibex' : 'Памирский Козерог'}

        </h1>
        <div className="flex items-center gap-10 relative z-[99] ibex_statistics">
          <div className="text-[#8E7E57] mt-[100px]">
            <h3 className="text-[51px] font-bold">+10 k</h3>
            <p className="mt-2">{localeActive === 'en' ? 'Total Number' : 'Общее количество'}</p>
          </div>
          <div className="text-[#8E7E57] mt-[100px]">
            <h3 className="text-[51px] font-bold">2,5 k</h3>
            <p className="mt-2">{localeActive === 'en' ? 'Trophies' : 'Трофеи'}</p>
          </div>
        </div>
      </section>
      <div className="gradient-ibex absolute left-0 -bottom-[77px]"></div>
    </section>
  );
}
