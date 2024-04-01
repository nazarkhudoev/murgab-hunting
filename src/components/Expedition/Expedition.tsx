import Pic from "@/assets/images/expedition/image.png";
import Image from "next/image";
import "./Expedition.css";

import Icon1 from "@/assets/images/expedition/Frame 1713.svg";
import Icon2 from "@/assets/images/expedition/Frame 1713 (1).svg";
import Icon3 from "@/assets/images/expedition/Frame 1713 (2).svg";
import Icon4 from "@/assets/images/expedition/Frame 1713 (3).svg";
import Icon5 from "@/assets/images/expedition/Frame 1713 (4).svg";
import Icon6 from "@/assets/images/expedition/Frame 1713 (5).svg";
import Icon7 from "@/assets/images/expedition/Frame 1713 (6).svg";
import Icon8 from "@/assets/images/expedition/Frame 1713 (7).svg";
import Icon9 from "@/assets/images/expedition/Frame 1713 (8).svg";
import ExpeditionSlider from "../ExpeditionSlider/ExpeditionSlider";

export function Expedition() {
  return (
    <section
      id="essentials"
      className="w-[1200px] max-w-full m-auto my-[200px]"
    >
      <div>
        <h3 className="text-center text-white text-2xl font-medium mb-[25px] mx-2 uppercase tracking-[1.5px]">
          Your Expedition Essentials
        </h3>
        <p className="mb-[60px] mx-10 text-white font-thin expedition__description-text">
          We ensure a hassle-free experience by taking care of all necessary
          permits and formalities for you. Relax and focus on the adventure
          ahead, knowing that all the details are handled with precision and
          care by our dedicated team.
        </p>
      </div>
      <div className="bg-[#332B18] rounded-[20px] flex items-end justify-between p-[2.25rem] expedition-wrapper">
        <div className="relative">
          <Image
            className="rounded-[10px] border-2 border-[#8E7E57] main-expedition-image"
            src={Pic}
            alt="Pic"
            width={600}
            height={600}
            priority={true}
          />
          {/* <div className="absolute -right-[55px] top-1/2 -translate-y-[50%] bg-[#C4A174] w-[2px] h-[90%]"></div> */}
        </div>
        {/* <ExpeditionSlider /> */}
        <section className="flex-container-1">
          <h3 className="text-center uppercase text-[#8E7E57] text-[18px] font-semibold mb-4 expedition__main-title">
            We care of
          </h3>
          <div className="expedition__container border-2 border-[#8E7E57] h-[480px] overflow-y-scroll rounded-[10px] relative text-white w-[590px] max-w-full px-1 py-1 ml-10">
            <div className="wrapper-border flex flex-col justify-start items-start gap-10  py-[15px] px-[30px] mr-[20px]">
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Icon1}
                    alt="Icon1"
                    width={44}
                    height={44}
                    priority={true}
                  />
                  {/* <div className="w-11 h-11 bg-slate-500 rounded-xl">I</div> */}
                  <p>Invitation Letter</p>
                </div>
                <p className="mt-3 font-extralight">
                  Essential for travel and visa arrangements, this official
                  letter confirms your participation in the hunting expedition
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  {/* <div className="w-11 h-11 bg-slate-500 rounded-xl"></div> */}
                  <Image
                    src={Icon2}
                    alt="Icon1"
                    width={44}
                    height={44}
                    priority={true}
                  />
                  <p>CITES Permits</p>
                </div>
                <p className="mt-3 font-extralight">
                  Necessary for international hunters, these permits ensure that
                  the export of any trophies complies with the Convention on
                  International Trade in Endangered Species of Wild Fauna and
                  Flora.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Icon3}
                    alt="Icon1"
                    width={44}
                    height={44}
                    priority={true}
                  />
                  <p>Gun Permits</p>
                </div>
                <p className="mt-3 font-extralight">
                  We handle the necessary paperwork for the legal use of
                  firearms during the hunt.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Icon4}
                    alt="Icon1"
                    width={44}
                    height={44}
                    priority={true}
                  />
                  <p>Veterinary Certificates</p>
                </div>
                <p className="mt-3 font-extralight">
                  Certifying the health and legal acquisition of the hunted
                  animal, required for transport of the trophies.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Icon5}
                    alt="Icon1"
                    width={44}
                    height={44}
                    priority={true}
                  />
                  <p>Animal Permits</p>
                </div>
                <p className="mt-3 font-extralight">
                  Official permits for the specific species you will be hunting,
                  ensuring compliance with wildlife regulations.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Icon6}
                    alt="Icon1"
                    width={44}
                    height={44}
                    priority={true}
                  />
                  <p>Border Pass Permit</p>
                </div>
                <p className="mt-3 font-extralight">
                  For ease of access to hunting areas near borders, this permit
                  is crucial for hassle-free movement.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Icon7}
                    alt="Icon1"
                    width={44}
                    height={44}
                    priority={true}
                  />
                  <p>Food and Drinks</p>
                </div>
                <p className="mt-3 font-extralight">
                  All meals and beverages are provided, ensuring a comfortable
                  and well-nourished experience throughout your stay.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Icon8}
                    alt="Icon1"
                    width={44}
                    height={44}
                    priority={true}
                  />
                  <p>Round Trip Transportation</p>
                </div>
                <p className="mt-3 font-extralight">
                  From Dushanbe to the hunting camp, we ensure comfortable and
                  reliable transportation for our clients.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Icon9}
                    alt="Icon1"
                    width={44}
                    height={44}
                    priority={true}
                  />
                  <p>Arrival VIP Hall Access</p>
                </div>
                <p className="mt-3 font-extralight">
                  For a smooth and premium experience upon arrival at Dushanbe,
                  ensuring a hassle-free start to your adventure.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ExpeditionSlider />
      </div>
    </section>
  );
}
