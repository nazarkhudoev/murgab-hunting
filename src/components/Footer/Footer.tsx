'use client'

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.svg";
import TelegramIcon from "@/assets/images/footer/Vector (10).svg";
import FacebookIcon from "@/assets/images/footer/Vector (8).svg";
import InstagramIcon from "@/assets/images/footer/instagram.svg";
import YoutubeIcon from "@/assets/images/footer/Vector (9).svg";

import "./Footer.css";

const Footer = () => {
  const { i18n } = useTranslation();
  const localeActive = i18n.language;

  return (
    <footer className="footer__container px-[85px] py-[120px] w-[1400px] max-w-full mx-auto relative z-30 flex items-start justify-between gap-8 flex-wrap text-white">
      <div className="footer__logo-container">
        <Image src={Logo} className="w-[80px] mb-[20px]" alt="Logo" />
        <span className="inline-block w-[150px] font-extralight text-sm leading-[19px]">
          {localeActive === 'en'?'© 2024 Murgab Hunting All rights reserved.':'© 2024 Murgab Hunting Все права защищены.'}
        </span>
      </div>
      <div className="flex flex-col justify-start items-start gap-3 text-white footer__links-container-1">
        <Link href={"/"}>{localeActive === 'en'?'About Us':'О Нас'}</Link>
        <Link href={"/"}>{localeActive === 'en'?'Hunting Trophies':'Охотничьи трофеи'}</Link>
        <Link href={"/"}>{localeActive === 'en'?'Expedition Essentials':'Необходимое для экспедиции'}</Link>
      </div>
      <div className="flex flex-col justify-start items-start gap-3 text-white footer__links-container-2">
        <Link href={"/"}>{localeActive === 'en'?'Camp':'Лагерь'}</Link>
        <Link href={"/"}>{localeActive === 'en'?'Gallery':'Галерея'}</Link>
        <Link href={"/"}>{localeActive === 'en'?'Blog':'Блог'}</Link>
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <h4>{localeActive === 'en'?'Follow us':'Подпишитесь на нас'}</h4>
        <div className="flex justify-start items-start gap-6">
          <Link
            className="bg-white flex items-center justify-center w-7 h-7 p-1 rounded-full"
            href={"/"}
          >
            <Image src={TelegramIcon} alt="" />
          </Link>
          <Link
            className="bg-white flex items-center justify-center w-7 h-7 p-1 rounded-full"
            href={"/"}
          >
            <Image src={FacebookIcon} alt="" />
          </Link>
          <Link
            className="bg-white flex items-center justify-center w-7 h-7 p-1 rounded-full"
            href={"https://www.instagram.com/murgabhunting/"}
          >
            <Image src={InstagramIcon} alt="" />
          </Link>
          <Link
            className="bg-white flex items-center justify-center w-7 h-7 p-1 rounded-full"
            href={"https://www.youtube.com/@MurgabHunting"}
          >
            <Image src={YoutubeIcon} alt="" />
          </Link>
        </div>
        <div>
          <h5 className="mb-1">{localeActive === 'en'?'Contacts':'Контакты'}</h5>
          <p>
            <a
              href="mailto:shirinbek0494@gmail.com"
              className="text-sm font-thin"
            >
              shirinbek0494@gmail.com
            </a>
          </p>
          <p className="relative bottom-1">
            <a href="tel:+992887743399" className="text-sm font-thin">
              +992 88 774-33-99
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
