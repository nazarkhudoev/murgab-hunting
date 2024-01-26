import "./AboutUs.css";
import Carousel from "../Carousel/Carousel";

export default function AboutUs() {
  return (
    <section id="about" className="mt-[100px] px-[85px] text-white">
      <h2 className="uppercase text-center text-2xl mb-[50px]">About Us</h2>
      <Carousel />
    </section>
  );
}
