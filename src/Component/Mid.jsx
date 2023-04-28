import image1 from "../assets/Image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/Image5.png";
import image6 from "../assets/Image6.png";

const Mid = () => {
  return (
    <div className=" h-[60rem] w-[89%] mt-20 mb-[30rem] ">
      <div className="h-[17.5rem]">
        <p className="w-[800px] butt mb-10">Vendors Near You</p>
        <div className="grid grid-cols-3 gap-20 mb-20">
          <div className="cursor-pointer">
            <img src={image1} alt="" />
            <p className="texts ">CARLUY FOODS</p>
            <p className="texts text-well ">Ikeja, Lagos</p>
          </div>
          <div className="cursor-pointer">
            <img src={image2} alt="" />
            <p className="texts cursor-pointer">KOBEY'S FOOD</p>
            <p className="texts text-well cursor-pointer">Ikeja, Lagos</p>
          </div>
          <div className="cursor-pointer">
            <img src={image3} alt="" />
            <p className="texts text-[#192832] r">FOODLUNA</p>
            <p className="texts text-well ">Ikeja, Lagos</p>
          </div>
          <div className="cursor-pointer">
            <img src={image4} alt="" />
            <p className="texts ">CARLUY FOODS</p>
            <p className="texts text-well ">Ikeja, Lagos</p>
          </div>
          <div className="cursor-pointer">
            <img src={image5} alt="" />
            <p className="texts">KOBEY'S FOOD</p>
            <p className="texts text-well">Ikeja, Lagos</p>
          </div>
          <div className="cursor-pointer">
            <img src={image6} alt="" />
            <p className="texts text-[#192832] ">FOODLUNA</p>
            <p className="texts text-well ">Ikeja, Lagos</p>
          </div>
        </div>
        <div className="flex items-center justify-center mb-[176px]">
          <div className="w-[110px] h-[46px] buttom">
            <button>View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
