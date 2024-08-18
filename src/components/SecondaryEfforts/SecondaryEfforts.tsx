import { useLocale } from "next-intl";
import "./SecondaryEfforts.css";

export default function SecondaryEfforts() {

  const localeActive = useLocale();


  return (
    <div className="w-[1200px] max-w-full mx-auto px-5 text-white flex items-start justify-between gap-[60px] secondary__efforts">
      <div className="w-[580px] max-w-full mt-[80px]">
        <h5 className="text-[#8E7E57] font-bold">{localeActive === 'en'?'A Model for Conservation':'Модель охраны природы'}</h5>
        <p className="mt-3 text-white font-light text-justify">
          {
            localeActive === 'en'?
            `Murgab Hunting stands as a model for how ethical, regulated hunting
          can be a powerful tool for conservation. Our efforts contribute to the
          thriving populations of Marco Polo sheep and Pamirian Ibex, ensuring
          that these majestic creatures continue to roam the Pamirs for
          generations to come.`:
            `Murgab Hunting является моделью того, как этичная и регулируемая охота может быть мощным инструментом для охраны природы. Наши усилия способствуют процветанию популяций архара Марко Поло и памирского козерога, обеспечивая, чтобы эти величественные существа продолжали обитать в Памире для будущих поколений.`
          }
          
        </p>
      </div>
      <div className="w-[580px] max-w-full mt-[80px]">
        <h5 className="text-[#8E7E57] font-bold">
        {localeActive === 'en'?'Supporting Local Biodiversity':'Поддержка местного биоразнообразия'}
          
        </h5>
        <p className="mt-3 text-white font-light text-justify">
        {
            localeActive === 'en'?
            ` We take pride in educating our clients about the importance of
          conservation. Hunters who visit our camps leave with a deeper
          understanding of the ecological balance and the critical role they
          play as stewards of the environment.`:
            `Мы гордимся тем, что обучаем наших клиентов важности охраны природы. Охотники, посетившие наши лагеря, уезжают с глубоким пониманием экологического баланса и критической роли, которую они играют как хранители окружающей среды.`
          }
         
        </p>
      </div>
    </div>
  );
}
