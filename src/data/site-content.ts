import type { Locale, LocalizedText } from "@/lib/navigation";

export const text = (en: string, ru: string): LocalizedText => ({ en, ru });
export const business = {
  name: "Murgab Hunting",
  founded: 1989,
  email: "shirinbek0494@gmail.com",
  phone: "+992887743399",
  phoneDisplay: "+992 88 774-33-99",
  social: [
    "https://www.instagram.com/murgabhunting/",
    "https://www.youtube.com/@MurgabHunting",
  ],
};
export const labels = {
  home: text("Home", "Главная"),
  plan: text("Plan Your Hunt", "Спланировать охоту"),
  explore: text("Explore Hunts", "Виды охоты"),
  more: text("Explore this expedition", "Подробнее об экспедиции"),
  pricing: text("Request Current Pricing", "Запросить актуальную стоимость"),
  related: text("Plan your expedition", "Подготовка к экспедиции"),
  faq: text("Your questions, answered", "Вопросы и ответы"),
  journey: text(
    "Discuss your expedition journey",
    "Обсудите маршрут экспедиции",
  ),
  journeyIntro: text(
    "Ask our team to confirm the route and schedule for your trip before making travel arrangements.",
    "До бронирования поездки уточните маршрут и расписание у нашей команды.",
  ),
  journeySteps: [
    text("Arrival arrangements", "Организация прибытия"),
    text("Transfer and camp", "Трансфер и лагерь"),
    text("Hunting programme", "Программа охоты"),
    text("Return arrangements", "Организация возвращения"),
  ],
  guides: text("Meet Your Guides", "Наша команда"),
  trust: text("Hunting the Pamirs Since 1989", "Охота на Памире с 1989 года"),
  history: text(
    "Local knowledge, an expedition tradition",
    "Знание Памира и традиции экспедиций",
  ),
  historyBody: text(
    "Founded in 1989 by Atobek Bekmurodov and Bekmurodi Zafar, Murgab Hunting brings together guides and expedition staff with roots in Tajikistan’s Pamirs.",
    "Murgab Hunting основана в 1989 году Атобеком Бекмуродовым и Бекмуроди Зафаром. Компания объединяет гидов и сотрудников экспедиций, связанных с Памиром Таджикистана.",
  ),
  pamirs: text("An expedition into the Pamirs", "Экспедиция на Памир"),
  pamirsBody: text(
    "Remote mountain landscapes shape every expedition. Talk to our local team about your intended species, the terrain and the arrangements for your visit to Tajikistan.",
    "Удалённые горные ландшафты определяют характер каждой экспедиции. Обсудите с местной командой выбранный вид охоты, рельеф и организацию поездки в Таджикистан.",
  ),
  logistics: text(
    "We Take Care of the Logistics",
    "Помогаем организовать экспедицию",
  ),
  logisticsBody: text(
    "Our expedition services cover document coordination, arrival assistance and transport from Dushanbe. Confirm which arrangements apply to your individual hunt.",
    "Наши услуги включают помощь с документами, встречей и транспортом из Душанбе. Уточните, какие услуги предусмотрены для вашей охоты.",
  ),
  camp: text("Hot Springs Camp", "Лагерь Hot Springs"),
  campBody: text(
    "Explore our camp and transport photographs, then discuss accommodation arrangements for your expedition with the team.",
    "Посмотрите фотографии лагеря и транспорта и обсудите с командой условия проживания во время экспедиции.",
  ),
  conservation: text("Conservation in the Pamirs", "Охрана природы Памира"),
  conservationBody: text(
    "Wildlife monitoring and habitat protection are part of the company’s stated conservation approach. Ask the team about current activities and the work connected with your expedition.",
    "Компания заявляет о подходе, включающем наблюдение за дикой природой и охрану мест обитания. Уточните у команды текущие мероприятия и их связь с вашей экспедицией.",
  ),
  gallery: text("Expedition photography", "Фотографии экспедиций"),
  contactIntro: text(
    "Tell our team which hunt interests you and your preferred dates. We will discuss availability, current pricing and the arrangements for your trip.",
    "Сообщите команде интересующий вас вид охоты и желаемые даты. Обсудим наличие мест, актуальную стоимость и организацию поездки.",
  ),
  regulatory: text(
    "Requirements can change. Confirm the current requirements for your species, dates, firearm and destination country with the team and the relevant authorities before travelling. Assistance does not guarantee approval.",
    "Требования могут меняться. Перед поездкой подтвердите актуальные требования для выбранного вида, дат, оружия и страны назначения у команды и компетентных органов. Помощь с документами не гарантирует их одобрения.",
  ),
  emptyBlog: text(
    "Our expedition notes will appear here once reviewed. For current trip information, contact the team or explore the planning pages below.",
    "Заметки об экспедициях появятся после проверки. За актуальной информацией обратитесь к команде или изучите страницы подготовки ниже.",
  ),
  emailDraft: text("Send inquiry", "Отправить запрос"),
  emailDraftHelp: text(
    "Send your inquiry directly to our team. We will reply to your email address.",
    "Отправьте запрос нашей команде. Мы ответим на ваш email.",
  ),
};

export const services = [
  text("Invitation letters", "Пригласительные письма"),
  text("CITES documentation assistance", "Помощь с документами CITES"),
  text("Firearm permit coordination", "Помощь с разрешениями на оружие"),
  text("Veterinary documentation", "Ветеринарные документы"),
  text("Hunting permit coordination", "Помощь с разрешениями на охоту"),
  text("Border pass arrangements", "Оформление пограничных пропусков"),
  text(
    "Meals and accommodation arrangements",
    "Организация питания и проживания",
  ),
  text("Transport from Dushanbe", "Транспорт из Душанбе"),
  text("Arrival assistance", "Помощь по прибытии"),
];
export interface ContentSection {
  heading: LocalizedText;
  body: LocalizedText;
}
export interface ContentPage {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  intro: LocalizedText;
  sections: ContentSection[];
  animal?: "marco-polo" | "ibex";
}
const section = (
  heading: LocalizedText,
  body: LocalizedText,
): ContentSection => ({ heading, body });
export const pages: ContentPage[] = [
  {
    slug: "marco-polo-sheep-hunting",
    animal: "marco-polo",
    title: text(
      "Marco Polo Argali Hunting in Tajikistan",
      "Охота на барана Марко Поло в Таджикистане",
    ),
    description: text(
      "Plan a Marco Polo Argali hunting expedition in Tajikistan’s Pamir Mountains. Explore our team, camp, logistics and inquiry options.",
      "Спланируйте охоту на барана Марко Поло в горах Памира в Таджикистане. Узнайте о команде, лагере и организации экспедиции.",
    ),
    intro: text(
      "Marco Polo argali is one of Murgab Hunting’s principal expedition offerings in the Pamir Mountains of Tajikistan. Speak with our local team to plan a hunt around your interests and confirmed availability.",
      "Охота на аргали Марко Поло — одно из основных направлений Murgab Hunting в горах Памира Таджикистана. Обсудите с нашей местной командой ваши пожелания и подтверждённую доступность экспедиции.",
    ),
    sections: [
      section(
        text("Marco Polo argali and the Pamirs", "Аргали Марко Поло и Памир"),
        text(
          "Marco Polo sheep (Ovis ammon polii) is the argali featured in our Pamir expedition programme. Our photographs introduce the mountain setting and previous expeditions; current hunting arrangements must be confirmed individually.",
          "Баран Марко Поло (Ovis ammon polii) представлен в нашей программе экспедиций на Памир. Фотографии знакомят с горными ландшафтами и прошлыми экспедициями; актуальные условия охоты подтверждаются индивидуально.",
        ),
      ),
      section(
        text(
          "Season, duration and current pricing",
          "Сезон, продолжительность и стоимость",
        ),
        text(
          "Ask for the current Marco Polo programme, available dates, duration and a written quotation. Confirm inclusions, exclusions and document arrangements before booking travel.",
          "Запросите актуальную программу охоты на Марко Поло, доступные даты, продолжительность и письменный расчёт стоимости. До бронирования поездки уточните включённые услуги, исключения и документы.",
        ),
      ),
      section(
        text(
          "Terrain, altitude and preparation",
          "Рельеф, высота и подготовка",
        ),
        text(
          "Discuss the intended hunting area, expected terrain, hunting altitude, weather and equipment with the expedition team. Ask for trip-specific details before confirming your expedition.",
          "Обсудите с командой район охоты, рельеф, высоту, погоду и снаряжение. Уточните условия конкретной поездки до подтверждения экспедиции.",
        ),
      ),
      section(
        text(
          "Camp and the journey from Dushanbe",
          "Лагерь и дорога из Душанбе",
        ),
        labels.campBody,
      ),
      section(
        text(
          "Permits and trophy arrangements",
          "Разрешения и оформление трофеев",
        ),
        text(
          "The company lists assistance with hunting, CITES, firearm, veterinary and border documentation. Request a trip-specific explanation of responsibilities, trophy preparation, export and any destination-country requirements.",
          "Компания указывает помощь с охотничьими, CITES, оружейными, ветеринарными и пограничными документами. Запросите разъяснение обязанностей, подготовки и вывоза трофея и требований страны назначения для вашей поездки.",
        ),
      ),
    ],
  },
  {
    slug: "pamir-ibex-hunting",
    animal: "ibex",
    title: text(
      "Pamir Ibex Hunting in Tajikistan",
      "Охота на памирского козерога в Таджикистане",
    ),
    description: text(
      "Explore Pamir ibex hunting with Murgab Hunting in Tajikistan. Discuss dates, mountain terrain, camp arrangements and current expedition pricing.",
      "Узнайте об охоте на памирского козерога с Murgab Hunting. Обсудите даты, горный рельеф, проживание и актуальную стоимость экспедиции.",
    ),
    intro: text(
      "Pamir ibex hunting is a core part of Murgab Hunting’s expedition programme. Our ibex photography and local team provide a starting point for discussing a mountain hunt in Tajikistan.",
      "Охота на памирского козерога — одно из основных направлений Murgab Hunting. Фотографии козерогов и местная команда помогут начать обсуждение горной охоты в Таджикистане.",
    ),
    sections: [
      section(
        text(
          "An ibex expedition in the mountains",
          "Горная экспедиция за козерогом",
        ),
        text(
          "Our ibex expeditions focus on the mountain landscapes of Tajikistan’s Pamirs. Explore the ibex gallery below and ask the guides about the area proposed for your hunt.",
          "Наши экспедиции за козерогом проходят в горных ландшафтах Памира Таджикистана. Посмотрите галерею ниже и уточните у гидов район, предлагаемый для вашей охоты.",
        ),
      ),
      section(
        text("Dates and expedition options", "Даты и варианты экспедиции"),
        text(
          "Request current ibex dates, the planned duration and the available programme. If you are considering more than one species, ask which combinations are currently available and permitted.",
          "Запросите актуальные даты охоты на козерога, продолжительность и доступную программу. Если интересуют несколько видов, уточните, какие сочетания сейчас доступны и разрешены.",
        ),
      ),
      section(
        text("Preparing for mountain terrain", "Подготовка к горному рельефу"),
        text(
          "Talk through the proposed route, expected walking, altitude, weather and equipment with your guide. Share relevant preparation questions before confirming the expedition.",
          "Обсудите с гидом маршрут, предполагаемые пешие переходы, высоту, погоду и снаряжение. Задайте вопросы о подготовке до подтверждения экспедиции.",
        ),
      ),
      section(
        text("Accommodation and transport", "Проживание и транспорт"),
        text(
          "Ask which camp and transport arrangements apply to your ibex programme, including the journey from Dushanbe and any services included in your quotation.",
          "Уточните лагерь и транспорт для вашей программы охоты на козерога, включая дорогу из Душанбе и услуги, включённые в расчёт стоимости.",
        ),
      ),
      section(
        text(
          "Documents and trophy preparation",
          "Документы и подготовка трофея",
        ),
        text(
          "Confirm the hunting permissions and any firearm, veterinary, export or import documentation for your particular ibex trip. The team can explain its assistance and your responsibilities.",
          "Подтвердите разрешения на охоту и необходимые оружейные, ветеринарные, экспортные или импортные документы для вашей поездки. Команда разъяснит свою помощь и ваши обязанности.",
        ),
      ),
    ],
  },
  {
    slug: "hunting-packages",
    title: text(
      "Hunting Packages in Tajikistan",
      "Охотничьи программы в Таджикистане",
    ),
    description: text(
      "Compare Murgab Hunting’s Marco Polo, Pamir ibex and additional expedition options. Request current availability and a tailored quotation.",
      "Сравните программы охоты на Марко Поло, памирского козерога и другие направления. Запросите актуальную доступность и индивидуальную стоимость.",
    ),
    intro: text(
      "Start with your preferred species, dates and group requirements. Our team will confirm availability and prepare the arrangements and quotation for your expedition.",
      "Начните с выбранного вида, дат и пожеланий группы. Команда подтвердит доступность, условия экспедиции и расчёт стоимости.",
    ),
    sections: [
      section(
        text("Confirm your package", "Уточните состав программы"),
        text(
          "Request a written list of included and excluded services, accommodation, transport, document responsibilities and payment terms. Published service names are not a guarantee that every service is included in every quotation.",
          "Запросите письменный список включённых и дополнительных услуг, проживания, транспорта, обязанностей по документам и условий оплаты. Указанные услуги не означают, что каждая из них включена во все программы.",
        ),
      ),
    ],
  },
  {
    slug: "hunting-season",
    title: text(
      "Pamir Hunting Season and Trip Planning",
      "Сезоны охоты и планирование поездки на Памир",
    ),
    description: text(
      "Discuss current Marco Polo and Pamir ibex hunting dates with Murgab Hunting. Coordinate availability and travel before confirming your expedition.",
      "Уточните актуальные даты охоты на Марко Поло и козерога. Согласуйте доступность и поездку до подтверждения экспедиции.",
    ),
    intro: text(
      "Season dates and availability must be confirmed for your selected species and year. Contact the team before purchasing flights or making fixed travel arrangements.",
      "Даты сезона и доступность необходимо подтвердить для выбранного вида и года. Свяжитесь с командой до покупки билетов или окончательного бронирования поездки.",
    ),
    sections: [
      section(
        text("Planning your dates", "Выбор дат"),
        text(
          "Tell us your preferred travel window and species. Ask for the current season, trip duration, camp arrangements and the time needed to coordinate documents.",
          "Сообщите желаемые даты и вид охоты. Уточните актуальный сезон, продолжительность, проживание и сроки подготовки документов.",
        ),
      ),
    ],
  },
  {
    slug: "hunting-permits",
    title: text(
      "Hunting Permits and Expedition Documents",
      "Разрешения на охоту и документы экспедиции",
    ),
    description: text(
      "Explore Murgab Hunting’s document coordination services, including hunting, CITES and firearm permit assistance for a confirmed Tajikistan expedition.",
      "Узнайте о помощи Murgab Hunting с охотничьими, CITES и оружейными документами для согласованной экспедиции в Таджикистан.",
    ),
    intro: labels.logisticsBody,
    sections: [
      section(
        text(
          "Confirm responsibilities before travelling",
          "Уточните обязанности до поездки",
        ),
        labels.regulatory,
      ),
      section(
        text(
          "Trophy preparation and onward travel",
          "Подготовка трофея и дальнейшая перевозка",
        ),
        text(
          "Ask the team to explain the proposed trophy preparation and export process, which documents it coordinates and which approvals you need to obtain in your destination country.",
          "Попросите команду разъяснить подготовку и вывоз трофея, какие документы она помогает оформить и какие разрешения нужно получить в стране назначения.",
        ),
      ),
    ],
  },
  {
    slug: "travel-to-tajikistan",
    title: text(
      "Travel to Tajikistan for a Pamir Hunt",
      "Поездка в Таджикистан для охоты на Памире",
    ),
    description: text(
      "Plan arrival in Dushanbe and transport toward the Pamirs with Murgab Hunting. Discuss your route, documents and camp arrangements.",
      "Спланируйте прибытие в Душанбе и транспорт на Памир с Murgab Hunting. Обсудите маршрут, документы и проживание.",
    ),
    intro: text(
      "Our expedition transport arrangements start in Dushanbe. Coordinate your arrival and onward journey with the expedition team.",
      "Организация транспорта для экспедиции начинается в Душанбе. Согласуйте прибытие и дальнейший маршрут с командой экспедиции.",
    ),
    sections: [
      section(
        text("Arrival and onward transport", "Прибытие и дальнейший транспорт"),
        text(
          "We help arrange arrival assistance and round-trip transport between Dushanbe and camp. Confirm pickup arrangements and the actual route for your booked programme.",
          "Помогаем организовать встречу и транспорт между Душанбе и лагерем в обе стороны. Уточните встречу и фактический маршрут для согласованной программы.",
        ),
      ),
      section(
        text("Prepare before departure", "Подготовка перед выездом"),
        text(
          "Confirm document responsibilities, equipment, accommodation and communication arrangements before leaving home. Travel times and conditions should be supplied for your particular itinerary.",
          "Перед выездом подтвердите документы, снаряжение, проживание и связь. Время в пути и условия необходимо уточнять для конкретного маршрута.",
        ),
      ),
    ],
  },
  {
    slug: "pamir-hunting-camp",
    title: text(
      "Pamir Hunting Camp: Hot Springs Camp",
      "Охотничий лагерь на Памире: Hot Springs",
    ),
    description: text(
      "Explore authentic Hot Springs Camp and transport photographs from Murgab Hunting. Discuss accommodation for your Pamir expedition.",
      "Посмотрите фотографии лагеря Hot Springs и транспорта Murgab Hunting. Обсудите проживание во время экспедиции на Памир.",
    ),
    intro: labels.campBody,
    sections: [
      section(
        text(
          "Accommodation for your expedition",
          "Проживание во время экспедиции",
        ),
        text(
          "Explore the VIP House, Standard House and transport photo collections. Ask the team which accommodation is available and confirm room facilities, meals and communications for your dates.",
          "Посмотрите коллекции фотографий VIP House, Standard House и транспорта. Уточните доступное проживание, оснащение комнат, питание и связь для ваших дат.",
        ),
      ),
    ],
  },
  {
    slug: "about",
    title: text(
      "About Murgab Hunting: Pamir Expeditions Since 1989",
      "О Murgab Hunting: экспедиции на Памир с 1989 года",
    ),
    description: text(
      "Meet the people behind Murgab Hunting, founded in 1989. Discover our local team and expedition history in Tajikistan’s Pamirs.",
      "Познакомьтесь с командой Murgab Hunting, основанной в 1989 году, и историей экспедиций на Памире Таджикистана.",
    ),
    intro: labels.historyBody,
    sections: [
      section(
        labels.history,
        text(
          "Our history brings together professional hunters, travellers, athletes and geologists. Meet our guides and expedition staff below.",
          "История компании объединяет профессиональных охотников, путешественников, спортсменов и геологов. Познакомьтесь с гидами и сотрудниками экспедиций ниже.",
        ),
      ),
    ],
  },
  {
    slug: "conservation",
    title: text(
      "Conservation and Wildlife in the Pamirs",
      "Охрана природы и животный мир Памира",
    ),
    description: text(
      "Read about Murgab Hunting’s stated approach to wildlife monitoring and habitat protection. Contact the team for current conservation activities.",
      "Узнайте о заявленном подходе Murgab Hunting к наблюдению за животными и охране среды обитания. Уточните текущие мероприятия у команды.",
    ),
    intro: labels.conservationBody,
    sections: [
      section(
        text("Ask about current work", "Уточните текущую работу"),
        text(
          "Our existing company material refers to wildlife monitoring, habitat conservation and community involvement. Detailed project records and measured outcomes are not published here; ask the team for current information and supporting evidence.",
          "Материалы компании упоминают наблюдение за животными, охрану среды обитания и участие местных сообществ. Здесь не опубликованы неподтверждённые результаты; запросите актуальную информацию и подтверждения у команды.",
        ),
      ),
    ],
  },
  {
    slug: "gallery",
    title: text(
      "Pamir Hunting and Expedition Gallery",
      "Галерея охоты и экспедиций на Памире",
    ),
    description: text(
      "Browse Murgab Hunting’s photographs of expeditions, hunting trophies, wildlife and Pamir landscapes.",
      "Посмотрите фотографии экспедиций Murgab Hunting, охотничьих трофеев, дикой природы и пейзажей Памира.",
    ),
    intro: text(
      "Explore the expedition archive by category. Photographs show previous trips and do not guarantee a particular result or current availability.",
      "Изучите архив экспедиций по категориям. Фотографии прошлых поездок не гарантируют определённый результат или текущую доступность.",
    ),
    sections: [],
  },
  {
    slug: "blog",
    title: text(
      "Pamir Hunting Expedition Notes",
      "Заметки об охотничьих экспедициях на Памире",
    ),
    description: text(
      "Explore reviewed expedition notes and practical planning resources from Murgab Hunting, with links to hunts, camp, travel and documents.",
      "Изучите проверенные заметки и материалы Murgab Hunting о подготовке экспедиций, охоте, лагере, поездке и документах.",
    ),
    intro: labels.emptyBlog,
    sections: [],
  },
  {
    slug: "contact",
    title: text(
      "Plan Your Hunt with Murgab Hunting",
      "Спланируйте охоту с Murgab Hunting",
    ),
    description: text(
      "Contact Murgab Hunting about Marco Polo sheep, Pamir ibex and other expeditions. Discuss dates, availability and current pricing with our team.",
      "Свяжитесь с Murgab Hunting по вопросам охоты на Марко Поло, козерога и других экспедиций. Обсудите даты, доступность и стоимость.",
    ),
    intro: labels.contactIntro,
    sections: [],
  },
];
export const pageBySlug = (slug: string) =>
  pages.find((page) => page.slug === slug);
export const faq = [
  {
    question: text(
      "When can I arrange a Marco Polo or ibex hunt?",
      "Когда можно организовать охоту на Марко Поло или козерога?",
    ),
    answer: text(
      "Contact our team with your preferred species and year to confirm current season dates and availability before booking travel.",
      "Сообщите команде выбранный вид и год, чтобы подтвердить актуальные даты сезона и доступность до бронирования поездки.",
    ),
  },
  {
    question: text(
      "How do I request current pricing?",
      "Как узнать актуальную стоимость?",
    ),
    answer: text(
      "Send your species preference, preferred dates and group requirements. Ask for a written quotation with included and excluded services.",
      "Сообщите выбранный вид, желаемые даты и пожелания группы. Запросите письменный расчёт с включёнными и дополнительными услугами.",
    ),
  },
  {
    question: text(
      "Can the team help coordinate documents?",
      "Помогает ли команда с документами?",
    ),
    answer: text(
      "Our services include document coordination. Confirm the requirements and responsibilities for your particular hunt and destination; approval is not guaranteed.",
      "Наши услуги включают помощь с документами. Подтвердите требования и обязанности для вашей охоты и страны назначения; одобрение не гарантируется.",
    ),
  },
  {
    question: text(
      "What should I ask about mountain preparation?",
      "Что уточнить о подготовке к горам?",
    ),
    answer: text(
      "Ask the team about your intended area, terrain, altitude, weather, equipment, accommodation and itinerary. Trip-specific details should be confirmed before departure.",
      "Уточните район, рельеф, высоту, погоду, снаряжение, проживание и маршрут. Подтвердите условия конкретной поездки до выезда.",
    ),
  },
];
export const translated = (value: LocalizedText, locale: Locale) =>
  value[locale];
