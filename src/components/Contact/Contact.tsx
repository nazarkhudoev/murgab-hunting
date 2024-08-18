// import Image from "next/image";
import { useLocale } from "next-intl";
import "./Contact.css";


export default function Contact() {
  const localeActive = useLocale();

  return (
    <section id="book" className="contact-section">
      <div className="contact-form-container">
        <h3 className="text-center text-[25px] font-semibold uppercase mb-[30px] tracking-[1.5px]">
          {localeActive === 'en'?' Book your hunt':'Забронируйте охоту'}
         
        </h3>
        <p className="text-center font-thin mb-5">
        {localeActive === 'en'?'Leave us a message and our manager will connect you.':'Оставьте нам сообщение, и наш менеджер свяжется с вами.'}

          
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
