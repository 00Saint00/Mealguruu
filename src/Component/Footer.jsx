import React from "react";
import { RightArrowIcon } from "../utils/icons";

const Footer = () => {
  return (
    <div className=" h-[60rem] w-[89%] mt-20 mb-[30rem] ">
      <div className="h-[17.5rem]">
        <p className="w-[800px] mb-10 font-secondary font-medium text-[34.8p]">
          Sign up to our newsletter
        </p>

        <div className="w-fit relative">
          <input
            type="text"
            className="border-b-2 border-gray-300 focus:outline-none focus:#E2E2E2 bg-inherit w-[600px]"
          />
          <div className="absolute -top-4 right-0">
            <RightArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
