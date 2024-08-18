'use client'
import "./Statistics.css";
import { useTranslation } from "react-i18next";

export default function Statistics() {

  const { t } = useTranslation();

  return (
    <div className="statistics-container relative bottom-[3.5rem] z-10 flex justify-center items-start flex-wrap text-center gap-[100px] text-[#8E7E57] px-[50px]">
      <div>
        <h4 className="text-[51px] font-bold mb-[3px]">5</h4>
        <p>{t('Statistics.species')}</p>
      </div>
      <div>
        <h4 className="text-[51px] font-bold mb-[3px]">+500</h4>
        <p>{t('Statistics.initiatives')}</p>
      </div>
      <div>
        <h4 className="text-[51px] font-bold mb-[3px] statistic__item text-center">
          <span>+1</span>
          <sub className="font-bold text-[38px] relative bottom-[2px] ml-1">
            k
          </sub>
        </h4>
        <p>{t('Statistics.clients')}</p>
      </div>
      <div>
        <h4 className="text-[51px] font-bold mb-[3px] statistic__item text-center">
          <span>+200</span>
          <sub className="font-bold text-[38px] relative bottom-[2px] ml-2">
            km<sup>2</sup>
          </sub>
        </h4>
        <p>{t('Statistics.land')}</p>
      </div>
    </div>
  );
}
