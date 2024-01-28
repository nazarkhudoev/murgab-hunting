// import Image from "next/image";
import "./Contact.css";
// import ArrowIcon from "@/assets/images/Icon.svg";
// import SocailIcon from "@/assets/images/social.svg";
// import Link from "next/link";

export default function Contact() {
  return (
    <section id="book" className="contact-section">
      <div className="contact-form-container">
        <h3 className="text-center text-[25px] font-semibold uppercase mb-[30px] tracking-[1.5px]">
          Book your hunt
        </h3>
        <p className="text-center font-thin mb-5">
          Leave us a message and our manager will connect you.
        </p>
        <div
          className="elfsight-app-c96adae2-50f5-4276-998e-3b21d664dbe4"
          data-elfsight-app-lazy
        ></div>

        <div
          className="elfsight-app-63fbac68-6b51-4102-ad1d-e2c4562b500f"
          data-elfsight-app-lazy
        ></div>
        {/* <form className="relative z-50">
          <h3 className="text-center text-[25px] font-semibold uppercase mb-[30px] tracking-[1.5px]">
            Book your hunt
          </h3>
          <p className="text-center font-thin mb-5">
            Leave us a message and our manager will connect you.
          </p>
          <div>
            <input
              className="w-full mb-5 rounded-[10px] px-[15px] py-[7px] text-black outline-none"
              type="text"
              name="fullname"
              placeholder="Full Name:"
            />
          </div>
          <div>
            <input
              className="w-full mb-5 rounded-[10px] px-[15px] py-[7px] text-black outline-none"
              type="email"
              name="email"
              placeholder="Email:"
            />
          </div>
          <div>
            <textarea
              className="w-full h-[150px] resize-none mb-5 rounded-[10px] px-[15px] py-[7px] text-black outline-none"
              placeholder="Your message: "
            ></textarea>
          </div>
          <div>
            <button className="relative z-[999] w-full bg-white text-[#F45914] text-center flex items-center justify-center gap-2 cursor-pointer py-2 rounded-[7px]">
              <span className="font-medium">Send</span>
              <Image src={ArrowIcon} alt="SendICOn" />
            </button>
          </div>
        </form>
        <div className="mt-5">
          <p className="text-lg text-center mb-3">or</p>
          <Link href={"/"} className="flex justify-center items-center gap-4">
            <p>
              Send us message <br />
              via WhatsApp
            </p>
            <Image src={SocailIcon} alt="SocailIcon" />
          </Link>
        </div> */}
      </div>
      <div className="gradient absolute left-0 -bottom-[88px]"></div>
    </section>
  );
}
