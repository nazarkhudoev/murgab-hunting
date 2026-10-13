"use client";
import TabImage1 from "@/assets/Photo.jpg";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import "./History.css";

export default function History() {
  const { t } = useTranslation();

  return (
    <div className="flex items-start justify-between gap-[30px] px-10 mt-5 pb-5 history-container">
      <div>
        <Image
          src={TabImage1}
          alt="TabImage1"
          className="h-[360px] w-[400px] object-cover block max-w-full rounded-[10px] max-h-full history__pic"
        />
      </div>
      <div className="w-[640px] max-w-full flex flex-col justify-start items-start gap-4 font-extralight text-white">
        <p className="history__main-text text-justify">
          {t("Content.History.text1")}

          <br />
          <br />
          {t("Content.History.text2")}

          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
