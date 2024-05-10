import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/ui/Card";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");
  const [stock, setStock] = useState();
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [page, setPage] = useState(1);

  const handleSortByClick = (sort) => {
    setSort(sort);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-5xl my-5 p-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
          Explore Products
        </h1>
        <div className="grid md:grid-cols-9 justify-center">
          <aside className="col-span-2 border-r-2 border-b-2 border-black/70 h-full min-w-44 sm:border">
            <div className="bg-black/80 text-white text-xl font-bold p-4">
              Filters
            </div>
            <div className="m-5">
              <h3 className="uppercase mt-5 font-bold underline text-yellow-600">
                Sort by
              </h3>
              <ul className="cursor-pointer">
                <li
                  className={sort === "latest" ? "font-bold" : ""}
                  onClick={() => handleSortByClick("latest")}
                >
                  Latest
                </li>
                <li
                  className={sort === "lowToHigh" ? "font-bold" : ""}
                  onClick={() => handleSortByClick("lowToHigh")}
                >
                  Price: Low to High
                </li>
                <li
                  className={sort === "highToLow" ? "font-bold" : ""}
                  onClick={() => handleSortByClick("highToLow")}
                >
                  Price: High to Low
                </li>
                <li
                  className={sort === "alphabetically" ? "font-bold" : ""}
                  onClick={() => handleSortByClick("alphabetically")}
                >
                  Alphabetically
                </li>
              </ul>
              <h3 className="uppercase mt-5 font-bold underline text-yellow-600">
                Max Price
              </h3>
              <h3 className="text-yellow-600">₹ {maxPrice}</h3>
              <input
                type="range"
                min={100}
                max={1000000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="slider appearance-none lg:w-52 h-1 bg-yellow-800 rounded-full mt-2"
              />
              <h3 className="uppercase mt-5 font-bold underline text-yellow-600">
                Categories
              </h3>
              <ul className="cursor-pointer">
                <li
                  className={category === "all" ? "font-bold" : ""}
                  onClick={() => handleCategoryClick("all")}
                >
                  All
                </li>
                <li
                  className={category === "electronics" ? "font-bold" : ""}
                  onClick={() => handleCategoryClick("electronics")}
                >
                  Electronics
                </li>
                <li
                  className={category === "homeAppliances" ? "font-bold" : ""}
                  onClick={() => handleCategoryClick("homeAppliances")}
                >
                  Home Appliances
                </li>
                <li
                  className={category === "clothing" ? "font-bold" : ""}
                  onClick={() => handleCategoryClick("clothing")}
                >
                  Clothing
                </li>
                <li
                  className={category === "footwear" ? "font-bold" : ""}
                  onClick={() => handleCategoryClick("footwear")}
                >
                  Footwear
                </li>
                <li
                  className={category === "accessories" ? "font-bold" : ""}
                  onClick={() => handleCategoryClick("accessories")}
                >
                  Accessories
                </li>
              </ul>
            </div>
          </aside>
          <main className="col-span-7">
            <Card route={"/all"} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Explore;
