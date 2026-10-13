import { useTranslation } from "react-i18next";
import "./Mission.css";

export default function Mission() {
  const { t } = useTranslation();

  return (
    <div className="flex items-end justify-center gap-7 px-[100px] my-5 mx-10 rounded-[10px] mission-container">
      <div className="max-w-full text-white min-w-0">
        <p className="font-extralight mb-11 mission__text-container">
          {t("Content.Mission.text1")}
        </p>
      </div>
    </div>
  );
}
