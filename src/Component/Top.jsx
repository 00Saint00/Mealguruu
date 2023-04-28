import food from "../assets/food.png";
import vect from "../assets/vect.png";

const Top = () => {
  return (
    <div className="bg-tertiary h-[36rem] w-[89%] mb-[164px]">
      <div className="h-[17.5rem] p-20">
        <div className="flex flex-col justify-center items-center">
          <p className="w-[900px] pad mb-[100px]">
            A community of the best food vendors in your city made available by
            Mealguruu
          </p>
          <div className="h-[30px] w-[800px] flex justify-between">
            <div className="flex gap-10">
              <input
                type="text"
                className="w-[300px] h-[36px] rounded p-[10px]"
                placeholder="Location..."
              />
              <input
                type="text"
                className="w-[300px] h-[36px] rounded p-[10px] border-none"
                placeholder="Your meal choice.."
              />
            </div>
            <div className=" w-[110px] h-[36px] buttom">
              <button>Find Vendors</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <img src={vect} alt="" className=" w-10" />
        <img src={food} alt="" className=" w-64 h-64" />
      </div>
    </div>
  );
};

export default Top;
