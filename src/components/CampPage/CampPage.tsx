import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, House, Truck, Utensils } from "lucide-react";
import type { Locale } from "@/lib/navigation";
import Fancybox from "../Fancybox/Fancybox";
import Exterior from "@/assets/photos/springscamp/spring-camp-05.jpg";
import Vip1 from "@/assets/photos/springscamp/spring-camp-06.jpg";
import Vip2 from "@/assets/photos/springscamp/spring-camp-07.jpg";
import Vip3 from "@/assets/photos/springscamp/spring-camp-08.jpg";
import Vip4 from "@/assets/photos/springscamp/spring-camp-10.jpg";
import Standard1 from "@/assets/photos/springscamp/spring-camp-01.jpg";
import Standard2 from "@/assets/photos/springscamp/spring-camp-02.jpg";
import Standard3 from "@/assets/photos/springscamp/spring-camp-03.jpg";
import Standard4 from "@/assets/photos/springscamp/spring-camp-04.jpg";
import Vehicle1 from "@/assets/photos/springscamp/transportation-01.jpg";
import Vehicle2 from "@/assets/photos/springscamp/transportation-02.jpg";
import Vehicle3 from "@/assets/photos/springscamp/transportation-03.jpg";
import Vehicle4 from "@/assets/photos/springscamp/transportation-04.jpg";
import Vehicle5 from "@/assets/photos/springscamp/transportation-05.jpg";
import "./CampPage.css";

export default function CampPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const collections = [
    {
      id: "vip-house",
      title: "VIP House",
      description: en
        ? "A look inside the VIP House photo collection. Confirm the rooms and facilities available for your group."
        : "Фотографии VIP House. Уточните доступные комнаты и оснащение для вашей группы.",
      images: [Vip1, Vip2, Vip3, Vip4],
    },
    {
      id: "standard-house",
      title: "Standard House",
      description: en
        ? "Explore the Standard House photo collection and discuss accommodation options with the team."
        : "Посмотрите фотографии Standard House и обсудите варианты проживания с командой.",
      images: [Standard1, Standard2, Standard3, Standard4],
    },
    {
      id: "camp-transport",
      title: en ? "Expedition transport" : "Транспорт экспедиции",
      description: en
        ? "Vehicles from our expedition photo collection. Confirm your route, transfers and vehicle arrangements before travel."
        : "Автомобили из коллекции фотографий экспедиций. До поездки уточните маршрут, трансферы и транспорт.",
      images: [Vehicle5, Vehicle1, Vehicle2, Vehicle3, Vehicle4],
    },
  ];
  const planning = [
    {
      icon: House,
      title: en ? "Rooms & availability" : "Комнаты и наличие мест",
      body: en
        ? "Which house and room arrangements are available for your dates and group size?"
        : "Какой дом и размещение доступны на ваши даты для вашей группы?",
    },
    {
      icon: Utensils,
      title: en ? "Meals & facilities" : "Питание и оснащение",
      body: en
        ? "Confirm meals, dietary needs, room facilities and communication options with the team."
        : "Уточните питание, особенности диеты, оснащение комнат и доступную связь.",
    },
    {
      icon: Truck,
      title: en ? "Getting to camp" : "Дорога до лагеря",
      body: en
        ? "Discuss arrival times, transfers and the route to camp as part of your expedition plan."
        : "Обсудите время прибытия, трансферы и маршрут до лагеря при подготовке экспедиции.",
    },
  ];
  return (
    <div className="camp-page-content">
      <nav
        className="camp-page-nav"
        aria-label={en ? "On this camp page" : "На странице лагеря"}
      >
        {collections.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.title}
            <ArrowDown size={14} aria-hidden="true" />
          </a>
        ))}
        <a href="#camp-planning">
          {en ? "Plan your stay" : "Подготовка поездки"}
          <ArrowDown size={14} aria-hidden="true" />
        </a>
      </nav>
      <Fancybox>
        <section
          className="camp-page-overview"
          id="camp"
          aria-labelledby="camp-overview-title"
        >
          <a
            className="camp-overview-photo"
            href={Exterior.src}
            data-fancybox="camp-archive"
            aria-label={
              en
                ? "View Hot Springs Camp exterior photo"
                : "Посмотреть фотографию лагеря Hot Springs"
            }
          >
            <Image
              src={Exterior}
              alt={
                en
                  ? "Red Hot Springs Camp building in the Pamir Mountains"
                  : "Красное здание лагеря Hot Springs в горах Памира"
              }
              fill
              sizes="(max-width: 700px) 90vw, 55vw"
            />
            <span>
              {en
                ? "Hot Springs Camp · Pamir Mountains"
                : "Лагерь Hot Springs · Горы Памира"}
            </span>
          </a>
          <div className="camp-overview-copy">
            <p className="camp-page-eyebrow">
              {en ? "Your stay in the Pamirs" : "Проживание на Памире"}
            </p>
            <h2 id="camp-overview-title">
              {en
                ? "Accommodation for your expedition"
                : "Проживание во время экспедиции"}
            </h2>
            <p>
              {en
                ? "Get to know Hot Springs Camp through our accommodation and transport photographs. Compare the house collections below, then talk to our local team about your stay."
                : "Познакомьтесь с лагерем Hot Springs по фотографиям проживания и транспорта. Посмотрите коллекции домов ниже и обсудите поездку с нашей местной командой."}
            </p>
            <p className="camp-overview-note">
              {en
                ? "Room availability, facilities, meals and communications should be confirmed for your specific dates."
                : "Наличие комнат, оснащение, питание и связь необходимо уточнить на ваши даты."}
            </p>
            <Link href="#book">
              {en ? "Discuss your stay" : "Обсудить проживание"}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
        {collections.map((collection, index) => (
          <section
            className="camp-collection"
            id={collection.id}
            key={collection.id}
            aria-labelledby={`${collection.id}-title`}
          >
            <div className="camp-collection-heading">
              <div>
                <span className="camp-collection-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h2 id={`${collection.id}-title`}>{collection.title}</h2>
              </div>
              <p>{collection.description}</p>
            </div>
            <div className="camp-collection-grid">
              {collection.images.map((photo, photoIndex) => {
                const caption = `${collection.title} · ${en ? "Photo" : "Фото"} ${photoIndex + 1}`;
                return (
                  <a
                    key={photo.src}
                    href={photo.src}
                    data-fancybox="camp-archive"
                    data-caption={caption}
                    aria-label={`${en ? "View" : "Посмотреть"}: ${caption}`}
                  >
                    <Image
                      src={photo}
                      alt={caption}
                      fill
                      sizes="(max-width: 500px) 90vw, (max-width: 1000px) 45vw, 360px"
                    />
                    <span className="camp-photo-open" aria-hidden="true">
                      <ArrowUpRight size={18} />
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </Fancybox>
      <section
        className="camp-stay-planning"
        id="camp-planning"
        aria-labelledby="camp-planning-title"
      >
        <p className="camp-page-eyebrow">
          {en ? "Before you travel" : "До поездки"}
        </p>
        <h2 id="camp-planning-title">
          {en
            ? "Plan your stay with the team"
            : "Спланируйте проживание с командой"}
        </h2>
        <div className="camp-planning-grid">
          {planning.map(({ icon: Icon, title, body }) => (
            <article key={title}>
              <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p className="camp-planning-next">
          {en
            ? "Share your preferred dates, group size and any requirements in the inquiry form below."
            : "Укажите желаемые даты, размер группы и ваши пожелания в форме запроса ниже."}
          <a href="#book">
            {en ? "Plan your hunt" : "Спланировать охоту"}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </p>
      </section>
    </div>
  );
}
