import InstagramIcon from "@/assets/images/footer/instagram.svg";
import YoutubeIcon from "@/assets/images/footer/Vector (9).svg";
import Logo from "@/assets/logo.svg";
import initTranslations from "@/i18n";
import type { Locale } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

export default async function Footer({ locale }: { locale: Locale }) {
  const { t } = await initTranslations({ locale, namespaces: ["common"] });
  const groups = [
    [
      ["/about-us", "about"],
      ["#trophies", "trophies"],
      ["#essentials", "essentials"],
    ],
    [
      ["#camp", "camp"],
      ["#gallerySection", "gallery"],
      ["#blog", "blog"],
    ],
  ];
  return (
    <footer className="footer__container px-[85px] py-[120px] w-[1400px] max-w-full mx-auto relative z-30 flex items-start justify-between gap-8 flex-wrap text-white">
      <div className="footer__logo-container">
        <Image src={Logo} className="w-[80px] mb-[20px]" alt="Murgab Hunting" />
        <span className="inline-block w-[150px] font-extralight text-sm leading-[19px]">
          © {new Date().getFullYear()} {t("Footer.copyright")}
        </span>
      </div>
      {groups.map((links, index) => (
        <div
          key={index}
          className={`flex flex-col justify-start items-start gap-3 text-white footer__links-container-${index + 1}`}
        >
          {links.map(([path, key]) => (
            <Link key={key} href={`/${locale}${path}`}>
              {t(`Navlist.${key}`)}
            </Link>
          ))}
        </div>
      ))}
      <div className="flex flex-col justify-start items-start gap-3">
        <h4>{t("Footer.follow")}</h4>
        <div className="flex justify-start items-start gap-6">
          <a
            className="bg-white flex items-center justify-center w-7 h-7 p-1 rounded-full"
            href="https://www.instagram.com/murgabhunting/"
            aria-label="Instagram"
          >
            <Image src={InstagramIcon} alt="" />
          </a>
          <a
            className="bg-white flex items-center justify-center w-7 h-7 p-1 rounded-full"
            href="https://www.youtube.com/@MurgabHunting"
            aria-label="YouTube"
          >
            <Image src={YoutubeIcon} alt="" />
          </a>
        </div>
        <div>
          <h5 className="mb-1">{t("Footer.contacts")}</h5>
          <p>
            <a
              href="mailto:shirinbek0494@gmail.com"
              className="text-sm font-thin"
            >
              shirinbek0494@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+992887743399" className="text-sm font-thin">
              +992 88 774-33-99
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
