import image7 from "../assets/Image7.png";
import fileIcon from "../assets/file.png";
import phone from "../assets/smartphone.png";
import face from "../assets/face.png";

const Bottom1 = () => {
  return (
    <div className=" h-[36rem] w-[89%] mb-[20rem]">
      <div className="h-[17.5rem]">
        <div className="flex flex-col justify-center items-center">
          <p className=" font-secondary text-[40px] leading-[46.4px] tracking-[0.002em] mb-5 text-black font-bold">
            A user's exploit
          </p>
          <div className="flex text-center">
            <p className=" w-[750px] font-tertiary font-normal text-[18px] leading-[23.4px] text-black">
              Get the right vendor for all our possible needs or events. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vulputate consectetur leo in congue tempor cursus. Consectetur
              dolor cras ut tellus mattis augue.
            </p>
          </div>
          <div className="h-[800px] w-[100%] flex justify-between p-[150px]">
            <div className="flex-1">
              <img src={image7} alt="" className="h-[440px] w-[440px]" />
            </div>
            <div className="flex-1 flex flex-col gap-16">
              <UserExploitItem
                icon={fileIcon}
                title={"BECOME A member"}
                subtitle={"Sign up with mealguruu and get started today "}
              />

              <UserExploitItem
                icon={face}
                title={"verify your account"}
                subtitle={"Sign up with mealguruu and get started today "}
              />

              <UserExploitItem
                icon={phone}
                title={"create a new request"}
                subtitle={"Sign up with mealguruu and get started today "}
              />

              <div className="flex items-center justify-start">
                <div className="w-[110px] h-[46px] buttom">
                  <button className="font-primary font-medium leading-[21.6px]">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserExploitItem = ({ icon, title, subtitle }) => {
  return (
    <div className="flex gap-[50px]">
      <img src={icon} alt="" className="h-[40px] w-[40px]" />

      <div className="flex flex-col gap-2">
        <div className="flex justify-start items-center gap-[20px]">
          <div className="w-[17px] h-[17px] bg-[#192832] rounded-full"></div>
          <span className="uppercase font-primary font-normal text-[18px] leading-[23.4px]">
            {title}
          </span>
        </div>
        <span className="font-tertiary font-normal text-[23.4px] leading-[23.4px]">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default Bottom1;
