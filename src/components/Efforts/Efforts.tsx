import { useLocale } from "next-intl";
import "./Efforts.css";

export default function Efforts() {
  const localeActive = useLocale();

  return (
    <div className="w-[1200px] max-w-full mx-auto px-5 flex items-start justify-between gap-8 efforts__wrapper">
      <div className="w-[360px] max-w-full mt-[100px] efforts__text-container">
        <h5 className="text-[#8E7E57] font-bold">
          {localeActive === 'en'?'Sustainable Hunting Practices':'Устойчивые охотничьи практики'}
         
        </h5>
        <p className="mt-3 text-white font-light text-justify leading-[22px]">
          {
            localeActive === 'en'?
            ` Our hunting expeditions are meticulously managed to ensure sustainable
          use of wildlife resources. By setting stringent quotas and adhering to
          strict hunting seasons, we help maintain healthy populations of Marco
          Polo sheep and Pamirian Ibex. Our practices are guided by scientific
          data and conservation principles, ensuring that hunting contributes
          positively to wildlife management.`:
            `Наши охотничьи экспедиции тщательно управляются, чтобы обеспечить устойчивое использование ресурсов дикой природы. Устанавливая строгие квоты и соблюдая жёсткие сезоны охоты, мы помогаем поддерживать здоровые популяции архара Марко Поло и памирского козерога. Наши практики основаны на научных данных и принципах охраны природы, что гарантирует положительное влияние охоты на управление дикой природой.`
          }
         
        </p>
      </div>
      <div className="w-[360px] max-w-full mt-[100px] efforts__text-container">
        <h5 className="text-[#8E7E57] font-bold">
        {localeActive === 'en'?'Supporting Local Biodiversity':'Поддержка местного биоразнообразия'}

          
        </h5>
        <p className="mt-3 text-white font-light text-justify leading-[22px]">
        {
            localeActive === 'en'?
            `Our conservation efforts extend beyond hunting. We actively
          participate in wildlife monitoring and habitat conservation
          initiatives. The fees generated from hunting expeditions are
          reinvested into conservation programs, which include habitat
          restoration, anti-poaching measures, and wildlife research.`:
            `Наши усилия по охране природы выходят за рамки охоты. Мы активно участвуем в мониторинге дикой природы и инициативах по сохранению среды обитания. Средства, полученные от охотничьих экспедиций, реинвестируются в программы по охране природы, включая восстановление среды обитания, меры по борьбе с браконьерством и исследования дикой природы.`
          }
          
        </p>
      </div>
      <div className="w-[360px] max-w-full mt-[100px] efforts__text-container">
        <h5 className="text-[#8E7E57] font-bold">{localeActive === 'en'?'Community Involvement':'Участие сообщества'}</h5>
        <p className="mt-3 text-white font-light text-justify leading-[22px]">
        {
            localeActive === 'en'?
            `We recognize the crucial role local communities play in conservation.
          A significant portion of our revenue is channeled back into local
          communities, supporting not only conservation projects but also
          community welfare. This creates a symbiotic relationship where
          wildlife protection and community development go hand in hand.`:
            `Мы признаем важную роль местных сообществ в охране природы. Значительная часть нашего дохода направляется обратно в местные сообщества, поддерживая не только проекты по охране природы, но и благосостояние общества. Это создает симбиотические отношения, где защита дикой природы и развитие сообщества идут рука об руку.`
          }
          
        </p>
      </div>
    </div>
  );
}
