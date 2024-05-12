import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Electronics from "./assets/electronics.png";
import HomeAppliances from "./assets/home-appliances.png";
import Clothing from "./assets/clothing.png";
import Footwear from "./assets/footwear.png";
import Kids from "./assets/kids.png";
import Accessories from "./assets/accessories.png";

const Card = () => {
  const data = [
    {
      image: Electronics,
      name: "Electronics",
      description: "Shop for the best electronics",
    },
    {
      image: HomeAppliances,
      name: "Home Appliances",
      description: "Shop for the best home appliances",
    },
    {
      image: Clothing,
      name: "Clothing",
      description: "Shop for the best clothing",
    },
    {
      image: Footwear,
      name: "Footwear",
      description: "Shop for the best footwear",
    },
    {
      image: Kids,
      name: "Kids",
      description: "Shop for the best kids",
    },
    {
      image: Accessories,
      name: "Accessories",
      description: "Shop for the best accessories",
    },
  ];

  const handleCategory = async (categoryName) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/api/v1/products/category/${categoryName}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className=" my-14 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((category) => (
          <div
            key={category.name}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-80 h-64 p-4 mx-auto "
                src={category.image}
                alt={category.name}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {category.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {category.description}
              </p>
              <Link
                to={`/products/${category.name}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-600 "
                onClick={() => handleCategory(category.name)}
              >
                Shop Now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
