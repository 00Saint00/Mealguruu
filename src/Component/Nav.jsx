import React from "react";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className=" h-[80px] p-5 mb-3 flex items-center justify-center">
      <div className="flex justify-between w-[91%]">
        <img src={logo} alt="" />
        <div className="text-black flex justify-end gap-[10%] w-[40%] font-primary">
          <p>Discover</p>
          <p>Promotions</p>
          <p>Request</p>
          <span className="bg-secondary w-[70px] flex justify-center items-center rounded-sm cursor-pointer">
            Sign In
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
