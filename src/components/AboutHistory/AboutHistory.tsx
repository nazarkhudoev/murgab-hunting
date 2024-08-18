import Image from "next/image";
import HistoryImage from "@/assets/Photo.jpg";

import "./AboutHistory.css";
import { useLocale } from "next-intl";

export default function AboutHistory() {
  const localeActive = useLocale();

  return (
    <section
      id="history"
      className="pb-10 pt-[130px] w-[1400px] max-w-[100%] mx-auto px-[120px] text-white"
    >
      <h3 className="uppercase text-center text-white text-2xl font-semibold tracking-[1.5px]">
        {localeActive === 'en'?'company history and leadership':'Историческое развитие компании и руководство'}
        
      </h3>
      <div className="mt-[50px] flex items-start justify-between gap-[50px] about-history-container">
        <Image
          src={HistoryImage}
          alt="HistoryImage"
          width={400}
          height={367}
          className="border-2 border-[#8E7E57] w-[400px] h-[367px] object-cover max-w-full rounded-[10px] history__text-image"
        />
        <div className="w-[730px] max-w-full">
          <p className="font-light text-justify leading-[29px] company__history-text">
            {localeActive === 'en'?`Founded in 1989 by the visionaries Atobek Bekmurodov and Bekmurodi
            Zafar, our company has grown from a passionate team of former
            athletes, tourists, geologists, and professional hunters to a
            leading name in responsible hunting tourism. Our team ensures that
            your quest for the elusive Marco Polo sheep and the resilient
            mountain goats is not only successful but also sustainable and
            respectful to the natural splendor of the region. Our journey,
            marked by dedication and expertise, has set a standard in the
            industry.`:`Основанная в 1989 году визионерами Атобеком Бекмуродовым и Бекмуроди Зафаром, наша компания выросла из команды увлеченных бывших спортсменов, туристов, геологов и профессиональных охотников в ведущую компанию в области ответственного охотничьего туризма. Наша команда обеспечивает, чтобы ваша охота на неуловимого архара Марко Поло и стойких горных козлов была не только успешной, но и устойчивой, уважая природное великолепие региона. Наш путь, отмеченный преданностью делу и экспертизой, установил стандарты в отрасли.`}
            
          </p>
          <p className="mt-6 font-light text-justify leading-[29px] company__history-text">
          {localeActive === 'en'?`With a rich legacy spearheaded by our founders, we cater to the
            discerning hunter seeking not just a hunt, but an expedition—a story
            to be told for generations.`:`С богатым наследием, возглавляемым нашими основателями, мы обслуживаем взыскательных охотников, которые ищут не просто охоту, а экспедицию — историю, которую будут рассказывать поколения.`}
            

            
          </p>
          <p className="mt-6 font-light text-justify leading-[29px] company__history-text">
          {localeActive === 'en'?`Murgab Hunting is not just about the pursuit of game; it’s about
            embracing the rugged beauty of the Pamirs, the thrill of the chase,
            and the preservation of hunting traditions. We invite you to join
            us, where hunting is an art and every expedition is an odyssey.`:`Murgab Hunting — это не просто охота; это принятие суровой красоты Памиров, волнение от преследования и сохранение охотничьих традиций. Мы приглашаем вас присоединиться к нам, где охота — это искусство, а каждая экспедиция — это одиссея.`}
          </p>
        </div>
      </div>
    </section>
  );
}
