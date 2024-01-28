import "./Efforts.css";

export default function Efforts() {
  return (
    <div className="w-[1200px] max-w-full mx-auto px-5 flex items-start justify-between gap-8 efforts__wrapper">
      <div className="w-[360px] max-w-full mt-[80px]">
        <h5 className="text-[#8E7E57] font-bold">
          Sustainable Hunting Practices
        </h5>
        <p className="mt-3 text-white font-light">
          Our hunting expeditions are meticulously managed to ensure sustainable
          use of wildlife resources. By setting stringent quotas and adhering to
          strict hunting seasons, we help maintain healthy populations of Marco
          Polo sheep and Pamirian Ibex. Our practices are guided by scientific
          data and conservation principles, ensuring that hunting contributes
          positively to wildlife management.
        </p>
      </div>
      <div className="w-[360px] max-w-full mt-[80px]">
        <h5 className="text-[#8E7E57] font-bold">
          Supporting Local Biodiversity
        </h5>
        <p className="mt-3 text-white font-light">
          Our conservation efforts extend beyond hunting. We actively
          participate in wildlife monitoring and habitat conservation
          initiatives. The fees generated from hunting expeditions are
          reinvested into conservation programs, which include habitat
          restoration, anti-poaching measures, and wildlife research.
        </p>
      </div>
      <div className="w-[360px] max-w-full mt-[80px]">
        <h5 className="text-[#8E7E57] font-bold">Community Involvement</h5>
        <p className="mt-3 text-white font-light">
          We recognize the crucial role local communities play in conservation.
          A significant portion of our revenue is channeled back into local
          communities, supporting not only conservation projects but also
          community welfare. This creates a symbiotic relationship where
          wildlife protection and community development go hand in hand.
        </p>
      </div>
    </div>
  );
}
