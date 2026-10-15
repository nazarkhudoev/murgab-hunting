import Image from "next/image";
import Camp from "@/assets/photos/springscamp/spring-camp-05.jpg";
import House from "@/assets/photos/springscamp/spring-camp-07.jpg";
import Transport from "@/assets/photos/springscamp/transportation-05.jpg";
import type { Locale } from "@/lib/navigation";

export default function CampPhotos({ locale }: { locale: Locale }) {
  const captions =
    locale === "en"
      ? [
          "Hot Springs Camp expedition photograph",
          "Accommodation in the camp photo collection",
          "Vehicle in the expedition transport collection",
        ]
      : [
          "Фотография лагеря Hot Springs",
          "Проживание в коллекции фотографий лагеря",
          "Автомобиль в коллекции транспорта экспедиций",
        ];
  return (
    <div className="camp-photo-grid">
      {[Camp, House, Transport].map((image, index) => (
        <figure key={captions[index]}>
          <Image
            src={image}
            alt={captions[index]}
            sizes="(max-width: 600px) 90vw, 30vw"
          />
          <figcaption>{captions[index]}</figcaption>
        </figure>
      ))}
    </div>
  );
}
