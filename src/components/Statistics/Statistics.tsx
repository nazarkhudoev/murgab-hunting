import "./Statistics.css"

export default function Statistics() {
  return (
    <div className="relative bottom-[3.5rem] z-10 flex justify-center items-center text-center gap-[100px] text-[#8E7E57]">
      <div>
        <h4 className="text-[51px] font-semibold mb-4">5</h4>
        <p>Available Species</p>
      </div>
      <div>
        <h4 className="text-[51px] font-semibold mb-4">20</h4>
        <p>Conservation Initiatives</p>
      </div>
      <div>
        <h4 className="text-[51px] font-semibold mb-4">+100</h4>
        <p>Satisfied clients</p>
      </div>
      <div>
        <h4 className="text-[51px] font-semibold mb-4">+100</h4>
        <p>Managed Land</p>
      </div>
    </div>
  );
}
