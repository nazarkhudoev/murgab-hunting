"use client";
import TabImage3 from "@/assets/images/tabs-images/Frame 1632 (2).png";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import "./Conservation.css";

export default function Conservation() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between gap-[30px] px-10 mt-5 conservation-container">
      <div>
        <Image
          src={TabImage3}
          alt="TabImage1"
          className="h-[360px] w-[400px] object-cover block max-w-full rounded-[10px] max-h-full conservation__main-image"
          height={367}
          width={400}
        />
      </div>
      <div className="w-[730px] max-w-full flex flex-col text-justify justify-start items-start gap-4 font-extralight text-white">
        <p className="conservation__text">{t("Content.Conservation.text1")}</p>
        <p className="extra__text conservation__text">
          {t("Content.Conservation.text2")}
        </p>
        <p className="extra__text conservation__text">
          {t("Content.Conservation.text3")}
        </p>
      </div>
    </div>
  );
}
