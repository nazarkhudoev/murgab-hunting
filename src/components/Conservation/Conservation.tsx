'use client'
import Image from "next/image";
import TabImage3 from "@/assets/images/tabs-images/Frame 1632 (2).png";

import "./Conservation.css";
import { useTranslation } from "react-i18next";

export default function Conservation() {

  const { i18n } = useTranslation();
  const localeActive = i18n.language;


  
  return (
    <div className="flex items-center justify-between gap-[30px] px-10 mt-5 conservation-container">
      <div>
        <Image
          src={TabImage3}
          alt="TabImage1"
          className="h-[360px] w-[400px] object-cover block max-w-full rounded-[10px] max-h-full conservation__main-image"
          height={367}
          width={400}
          priority={true}
        />
      </div>
      <div className="w-[730px] max-w-full flex flex-col text-justify justify-start items-start gap-4 font-extralight text-white">
        <p className="conservation__text">
          {
            localeActive === 'en' ? `
             At Murgab Hunting, we firmly believe in and practice the principle
          that responsible hunting serves as a vital tool for wildlife
          conservation. Our approach harmonizes the passion for hunting with a
          deep commitment to preserving the natural heritage of Tajikistan’s
          Pamir Mountains.`: `В Murgab Hunting мы твердо верим и следуем принципу, что ответственная охота является важным инструментом для сохранения дикой природы. Наш подход сочетает страсть к охоте с глубокой приверженностью к сохранению природного наследия Памирских гор Таджикистана.`
          }
        </p>
        <p className="extra__text conservation__text">

          {
            localeActive === 'en' ? `
             Our hunting expeditions are meticulously managed to ensure sustainable
          use of wildlife resources. By setting stringent quotas and adhering to
          strict hunting seasons, we help maintain healthy populations of Marco
          Polo sheep and Pamirian Ibex. Our practices are guided by scientific
          data and conservation principles, ensuring that hunting contributes
          positively to wildlife management.`: `Наши охотничьи экспедиции тщательно управляются, чтобы обеспечить устойчивое использование ресурсов дикой природы. Устанавливая строгие квоты и соблюдая жёсткие сезоны охоты, мы помогаем поддерживать здоровую популяцию архара Марко Поло и памирского козерога. Наши практики основаны на научных данных и принципах сохранения природы, что гарантирует положительное влияние охоты на управление дикой природой.`
          }

        </p>
        <p className="extra__text conservation__text">
          {
            localeActive === 'en' ? `
             Our conservation efforts extend beyond hunting. We actively
          participate in wildlife monitoring and habitat conservation
          initiatives. The fees generated from hunting expeditions are
          reinvested into conservation programs, which include habitat
          restoration, anti-poaching measures, and wildlife research.`: `Наши усилия по сохранению природы выходят за рамки охоты. Мы активно участвуем в мониторинге дикой природы и инициативах по охране среды обитания. Средства, полученные от охотничьих экспедиций, реинвестируются в программы по сохранению природы, которые включают восстановление среды обитания, меры по борьбе с браконьерством и исследования дикой природы.`
          }

        </p>
      </div>
    </div>
  );
}
