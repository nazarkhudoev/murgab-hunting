'use client'

import "./ArgaliBrukeyBanner.css";
import { useTranslation } from "react-i18next";

export default function ArgaliBrukeyBanner() {
  const { i18n } = useTranslation();
  const localeActive = i18n.language;

  return (
    <div className="pt-[200px] pb-14 px-[85px] relative argali-brukey__banner">
      <h1 className="text-white text-[80px] font-bold uppercase tracking-[2px] z-[99]">
        {localeActive === 'en'?'Argali Brukey':'Аргали Брукей'}
      </h1>
      {/* <div className="flex items-center gap-10">
        <div className="text-[#C5C5C5] mt-[160px]">
          <h3 className="text-5xl font-semibold"> 27,000</h3>
          <p className="mt-2">Total Number</p>
        </div>
        <div className="text-[#C5C5C5] mt-[160px]">
          <h3 className="text-5xl font-semibold">1,990</h3>
          <p className="mt-2">Trophies</p>
        </div>
      </div> */}
      <div className="gradient-argali-brukey absolute left-0 -bottom-[44px]"></div>
    </div>
  );
}
