import Image8 from "../assets/image8.png";

const Bottom = () => {
  return (
    <div className="bg-box h-[38.6rem] w-[89%]">
      <div className="flex items-center justify-center h-[100%] gap-10">
        <div className="w-[600px]">
          <p className="w-[554px] font-secondary text-[40px] leading-[46.4px] tracking-[0.002em] mb-5 text-black font-bold">
            Join Our Community of Food Vendors
          </p>
          <p className="text-black text-[18px] leading-[23.4px] font-primary mb-[40px]">
            As a restaurant owner, food vendor or personal chef, let us help you
            reach more customers than ever.
          </p>

          <button className="board well w-[190px] h-[56px]">
            Join as vendor
          </button>
        </div>
        <div>
          <img src={Image8} alt="" className="h-[471px] w-[706px]" />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
