import React, { useState } from "react";
import clsx from "clsx";
import { FiSearch } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/ui/Card";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");
  const [stock, setStock] = useState();
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [filters, setFilters] = useState(false);
  const [page, setPage] = useState(1);

  const handleSortByClick = (sort) => {
    setSort(sort);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const filtersOpen = () => {
    setFilters(!filters);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-5xl my-5 p-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
          Explore Products
        </h1>
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-6 pt-5 items-center">
          <h3
            className="bg-black/70 w-fit text-white font-semibold py-3 px-2 cursor-pointer hover:bg-black/80 col-span-1 mx-auto rounded-md"
            onClick={filtersOpen}
          >
            Apply Filters
          </h3>
          {filters && (
            <aside
              className={clsx(
                "h-fit min-w-44 -translate-x-full transition-all absolute top-64 z-10",
                filters && "translate-x-0"
              )}
            >
              <div className="m-5 border border-black bg-gradient-to-br from-white to-gray-600 p-14 rounded-md">
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
                  className="slider appearance-none lg:w-52 h-1 bg-yellow-800 rounded-full mt-2 mb-7"
                  style={{
                    background:
                      "linear-gradient(to right, #f00 0%, #f00 " +
                      (maxPrice - 100) / 10000 +
                      "%, #fff " +
                      (maxPrice - 100) / 10000 +
                      "%, #fff 100%)",
                  }}
                />
                <h3 className="uppercase mt-5 font-bold underline text-yellow-600">
                  Categories
                </h3>
                <ul className="cursor-pointer mb-8">
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
                    className={category === "kids" ? "font-bold" : ""}
                    onClick={() => handleCategoryClick("kids")}
                  >
                    Kids
                  </li>
                  <li
                    className={category === "accessories" ? "font-bold" : ""}
                    onClick={() => handleCategoryClick("accessories")}
                  >
                    Accessories
                  </li>
                </ul>
                <button
                  className="bg-black/70 text-white w-full h-12 mt-5 rounded-md"
                  onClick={filtersOpen}
                >
                  Save Changes
                </button>
              </div>
            </aside>
          )}
          <div className="col-span-3 flex items-center justify-center lg:gap-14 border-b border-yellow-600 mx-auto p-4">
            <h3 className="uppercase font-bold text-yellow-600 mr-4">
              Sort by
            </h3>
            <ul className="cursor-pointer flex gap-7">
              <li
                className={sort === "latest" ? "font-bold text-yellow-500" : ""}
                onClick={() => handleSortByClick("latest")}
              >
                Latest
              </li>
              <li
                className={
                  sort === "lowToHigh" ? "font-bold text-yellow-500" : ""
                }
                onClick={() => handleSortByClick("lowToHigh")}
              >
                Price: Low to High
              </li>
              <li
                className={
                  sort === "highToLow" ? "font-bold text-yellow-500" : ""
                }
                onClick={() => handleSortByClick("highToLow")}
              >
                Price: High to Low
              </li>
              <li
                className={
                  sort === "alphabetically" ? "font-bold text-yellow-500" : ""
                }
                onClick={() => handleSortByClick("alphabetically")}
              >
                Alphabetically
              </li>
            </ul>
          </div>
          <div className="flex justify-center h-fit col-span-2">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-72 h-12 p-2 border-2 border-black/70 focus:border-yellow-500 focus:ring-0"
            />
            <button className=" text-white w-14 bg-black/70 hover:bg-black/80 ">
              <FiSearch className="mx-auto" />
            </button>
          </div>
        </section>

        <div className="relative">
          <main className="absolute top-0 z-0 w-full">
            <Card route={"/all"} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Explore;
