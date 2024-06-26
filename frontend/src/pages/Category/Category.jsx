import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/ui/Card";

const Category = () => {
  const { category } = useParams();

  return (
    <div>
      <Navbar />
      <h1 className="text-5xl my-5 p-2 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600">
        {category}
      </h1>
      <Card route={`/category/${category}`} />
    </div>
  );
};

export default Category;
