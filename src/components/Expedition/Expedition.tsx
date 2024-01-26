import Pic from "@/assets/images/expedition/image.png";
import Image from "next/image";
import "./Expedition.css";

export function Expedition() {
  return (
    <section className="w-[1200px] max-w-full m-auto my-[150px]">
      <h3 className="text-center text-white text-2xl font-semibold mb-[50px] uppercase tracking-[1.5px]">
        Your Expedition Essentials
      </h3>
      <div className="bg-[#332B18] rounded-[20px] flex items-start justify-between p-[2.25rem] expedition-wrapper">
        <div>
          <Image
            className="rounded-[10px]"
            src={Pic}
            alt="Pic"
            width={460}
            height={480}
          />
        </div>
        <div className="expedition__container text-white w-[590px] h-[480px] overflow-y-scroll max-w-full px-1 py-1 ml-3">
          <div className="wrapper-border flex flex-col justify-start items-start gap-10 border-l-2 border-[#C4A174] py-[15px] px-[30px] mr-[20px]">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-slate-500 rounded-xl"></div>
                <p>Invitation Letter</p>
              </div>
              <p className="mt-3 font-extralight">
                Essential for travel and visa arrangements, this official letter
                confirms your participation in the hunting expedition
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-slate-500 rounded-xl"></div>
                <p>Invitation Letter</p>
              </div>
              <p className="mt-3 font-extralight">
                Essential for travel and visa arrangements, this official letter
                confirms your participation in the hunting expedition
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-slate-500 rounded-xl"></div>
                <p>Invitation Letter</p>
              </div>
              <p className="mt-3 font-extralight">
                Essential for travel and visa arrangements, this official letter
                confirms your participation in the hunting expedition
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-slate-500 rounded-xl"></div>
                <p>Invitation Letter</p>
              </div>
              <p className="mt-3 font-extralight">
                Essential for travel and visa arrangements, this official letter
                confirms your participation in the hunting expedition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
