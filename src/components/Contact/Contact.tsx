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
          className="elfsight-app-63fbac68-6b51-4102-ad1d-e2c4562b500f"
          data-elfsight-app-lazy
        ></div>

      </div>
      <div className="gradient absolute left-0 -bottom-[350px]"></div>
    </section>
  );
}
