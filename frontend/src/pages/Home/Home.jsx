import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-[#EEEEEE] h-[200vh]">
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
