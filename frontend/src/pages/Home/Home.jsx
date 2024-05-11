import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/ui/Card";

const Home = () => {
  return (
    <div className="bg-[#EEEEEE]">
      <Navbar />
      <Carousel />
      <div>
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 font-bold mx-5 mt-7 p-2">
          Latest and Trending Products
        </h1>
        <Card route={"/"} />
        <Link to={"/explore"}>
          <p className="w-fit mx-auto bg-gray-600 px-4 py-3 font-bold text-white rounded-lg hover:bg-gray-500 cursor-pointer">
            View More
          </p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
