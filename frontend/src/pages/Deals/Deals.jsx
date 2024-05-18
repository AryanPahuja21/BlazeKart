import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ScratchCard from "../../components/ScratchCard/ScratchCard";

const Deals = () => {
  return (
    <div className="bg-gradient-to-t from-white to-amber-200 h-screen">
      <Navbar />
      <div className="">
        <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-40% from-orange-600 to-70% to-amber-500 p-5 text-center pt-20">
          Deal of the Day
        </h1>
        <div>
          <ScratchCard />
        </div>
      </div>
    </div>
  );
};

export default Deals;
