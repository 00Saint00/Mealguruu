import React from "react";
import Nav from "./Nav";
import Top from "./Top";
import Mid from "./Mid";
import Bottom1 from "./Bottom1";
import Bottom from "./Bottom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-primary h-[100vh] overflow-y-auto w-[100%] p-5 ">
      <Nav />
      <div className="flex flex-col items-center w-full">
        <Top />
        <Mid />
        <Bottom1 />
        <Bottom />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
