import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "./Card";

const Categories = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl my-5 p-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
        Search by category
      </h1>
      <Card />
    </div>
  );
};

export default Categories;
