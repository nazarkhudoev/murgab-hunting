import TrophiesCarousel from "../TrophiesCarousel/TrophiesCarousel";

interface ITrophies {
  animalName: string;
}

export default function Trophies({ animalName }: ITrophies) {
  return (
    <section id="trophies" className="mt-[150px]">
      <h3 className="text-center text-white text-2xl font-medium mb-[50px] uppercase tracking-[1.5px]">
        Our Hunting Trophies
      </h3>
      <TrophiesCarousel animalName={animalName} />
    </section>
  );
}
