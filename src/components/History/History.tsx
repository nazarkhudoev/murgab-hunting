"use client"
import TabImage1 from "@/assets/Photo.jpg";
import Image from "next/image";

import "./History.css";
import { useTranslation } from "react-i18next";

export default function History() {
  const { i18n } = useTranslation();
  const localeActive = i18n.language;


  return (
    <div className="flex items-start justify-between gap-[30px] px-10 mt-5 pb-5 history-container">
      <div>
        <Image
          src={TabImage1}
          alt="TabImage1"
          className="h-[360px] w-[400px] object-cover block max-w-full rounded-[10px] max-h-full history__pic"
          priority={true}
        />
      </div>
      <div className="w-[640px] max-w-full flex flex-col justify-start items-start gap-4 font-extralight text-white">
        {/* <p>
          Murgab Hunting stands as the epitome of the ultimate hunting
          adventure, offering an unparalleled experience in the remote
          wilderness of Tajikistan. Founded in 1989, we specialize in sport
          hunting tourism, providing bespoke expeditionary services in the
          majestic Gornobadakhshan Autonomous Region.
        </p>
        <p className="extra__text">
          With a rich legacy spearheaded by our founders, Atobek Bekmurodov and
          Bekmurodi Zafar, we cater to the discerning hunter seeking not just a
          hunt, but an expedition—a story to be told for generations. Our core
          team, a cadre of former athletes, seasoned explorers, and professional
          hunters, ensures that your quest for the elusive Marco Polo sheep and
          the resilient mountain goats is not only successful but also
          sustainable and respectful to the natural splendor of the region.
        </p>
        <p className="extra__text">
          Murgab Hunting is not just about the pursuit of game; it’s about
          embracing the rugged beauty of the Pamirs, the thrill of the chase,
          and the preservation of hunting traditions. We invite you to join us,
          where hunting is an art and every expedition is an odyssey.
        </p> */}
        <p className="history__main-text text-justify">
          {
            localeActive === 'en' ? ` Murgab Hunting stands as the epitome of the ultimate hunting
          adventure, offering an unparalleled experience in the remote
          wilderness of Tajikistan which is known as Pamir. Founded in 1989, we specialize in sport
          hunting tourism, providing bespoke expeditionary services in the
          majestic Pamir (Gorno - Badakhshan Autonomous Region).` :
              `
          Murgab Hunting является воплощением высшего охотничьего приключения, предлагая непревзойденный опыт в отдаленной дикой природе Таджикистана, известной как Памир. Основанные в 1989 году, мы специализируемся на спортивном охотничьем туризме, предоставляя индивидуальные экспедиционные услуги в величественном Памире (Горно-Бадахшанская Автаномная Область).
          `

          }

          <br />
          <br />
          {
            localeActive === 'en' ?
              ` With a rich legacy spearheaded by our founders, Atobek Bekmurodov and
          Bekmurodi Zafar, we cater to the discerning hunter seeking not just a
          hunt, but an expedition—a story to be told for generations. Our core
          team, a cadre of former athletes, seasoned explorers, and professional
          hunters, ensures that your quest for the elusive Marco Polo sheep and
          the resilient mountain goats is not only successful but also sustainable and respectful to the natural splendor of the region.
          Murgab Hunting is not just about the pursuit of game; it’s about
          embracing the rugged beauty of the Pamirs, the thrill of the chase,
          and the preservation of hunting traditions. We invite you to join us,
          where hunting is an art and every expedition is an odyssey.`:
              `С богатым наследием, возглавляемым нашими основателями, Атобеком Бекмуродовым и Бекмуроди Зафаром, мы обслуживаем взыскательных охотников, которые ищут не просто охоту, а экспедицию—историю, которую будут рассказывать поколения. Наша основная команда, состоящая из бывших спортсменов, опытных исследователей и профессиональных охотников, гарантирует, что ваша охота на неуловимого архара Марко Поло и стойких горных козлов будет не только успешной, но также устойчивый и уважительный к природному великолепию региона.`

          }

          <br />
          <br />
          
        </p>
      </div>
    </div>
  );
}
