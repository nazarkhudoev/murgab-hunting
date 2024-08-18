import TabImage2 from "@/assets/images/tabs-images/Frame 1632 (1).png";
import Image from "next/image";

import "./Mission.css";
import { useTranslation } from "react-i18next";

export default function Mission() {
  
  const { i18n } = useTranslation();
  const localeActive = i18n.language;


  return (
    <div className="flex items-end justify-center gap-7 px-[100px] my-5 mx-10 rounded-[10px] mission-container">
      {/* <div>
        <Image
          src={TabImage2}
          alt="TabImage1"
          height={360}
          width={590}
          priority={true}
        />
      </div> */}
      <div className="max-w-full text-white min-w-0">
        <p className="font-extralight mb-11 mission__text-container">
          {
            localeActive === 'en' ?`Murgab Hunting's mission is to offer ethical and sustainable
                  hunting experiences in Tajikistan's Pamir Mountains, focusing on
                  conservation, community engagement, and the preservation of
                  Marco Polo sheep and Pamirian Ibex.`:
                  `Миссия Murgab Hunting заключается в предоставлении этичного и устойчивого охотничьего опыта в Памирских горах Таджикистана, с акцентом на сохранение природы, вовлечение местного сообщества и сохранение архара Марко Поло и памирского козерога.`
                  
                  }
        </p>
      </div>
    </div>
  );
}
