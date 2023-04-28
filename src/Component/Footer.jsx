import React from "react";
import { RightArrowIcon } from "../utils/icons";
import Icon from "../assets/logo.png";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" h-[7rem] w-[89%] mt-20 mb-[30rem]">
      <div className="h-[17.5rem] mb-[10px]">
        <p className="w-[800px] mb-10 font-secondary font-medium text-[34.8p]">
          Sign up to our newsletter
        </p>

        <div className="w-fit relative">
          <input
            type="text"
            className="border-b-2 border-gray-300 focus:outline-none    focus:#E2E2E2 bg-inherit w-[600px]"
          />
          <div className="absolute -top-4 right-0">
            <RightArrowIcon />
          </div>
        </div>
      </div>
      <div className="flex w-[100%] justify-between">
        <div>
          <div className="mb-[55.3px]">
            <img src={Icon} alt="" />
          </div>
          <div className="flex w-[7rem] justify-between">
            <FiFacebook className="cursor-pointer" />
            <BsInstagram className="cursor-pointer" />
            <FiTwitter className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-[26px] w-[40%] flex justify-center gap-[30px]">
          <div className="font-primary text-[16px] text-that font-normal leading-[24px] ">
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Join</p>
            <p className="cursor-pointer">Trust & safety</p>
          </div>
          <div className="font-primary text-[16px] text-that font-normal leading-[24px]">
            <p className="mb-[24px] cursor-pointer">hello@mealguruu.com</p>
            <p></p>
            <div className="flex gap-[20px]">
              <p className="cursor-pointer">+234 8149577742</p>
              <p className="cursor-pointer">+234 8149577742</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b-2 mt-20 border-black"></div>
    </div>
  );
};

export default Footer;
