import React, { useState, useEffect } from "react";
import clsx from "clsx";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "./ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [filters, setFilters] = useState(false);
  const [page, setPage] = useState(1);
  const [length, setLength] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || 1;
    const sort = params.get("sort") || "";
    const category = params.get("category") || "all";
    const maxPrice = params.get("maxPrice") || 1000000;
    setSort(sort);
    setCategory(category);
    setMaxPrice(parseInt(maxPrice));
    setPage(parseInt(page));
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_URL
          }/api/v1/products/all?${searchParams.toString()}`
        );
        setProducts(response.data.data);
        setLength(response.data.message);
        setTotalPages(Math.ceil(response.data.message / 15));
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchParams]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    setSearchParams(() => ({
      page: pageNumber.toString(),
      limit: "15",
      sort,
      category,
    }));
  };

  const handleSortByClick = (sortValue) => {
    setSort(sortValue);
    setSearchParams({
      page: page.toString(),
      limit: "15",
      sort: sortValue,
      category,
    });
  };

  const handleCategoryClick = (categoryValue) => {
    setCategory(categoryValue);
    setSearchParams({
      page: page.toString(),
      limit: "15",
      sort,
      category: categoryValue,
    });
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
    setSearchParams({
      page: page.toString(),
      limit: "15",
      sort,
      category,
      maxPrice: value.toString(),
    });
  };

  const filtersOpen = () => {
    setFilters(!filters);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setTotalPages(Math.ceil(filteredProducts.length / 15));
  }, [search]);

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
                  max={100000}
                  value={maxPrice}
                  onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
                  className="slider appearance-none lg:w-52 h-1 bg-yellow-800 rounded-full mt-2 mb-7"
                  style={{
                    background:
                      "linear-gradient(to right, #f00 0%, #f00 " +
                      (maxPrice - 100) / 1000 +
                      "%, #fff " +
                      (maxPrice - 100) / 1000 +
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
                className={
                  sort === "latest" ? "font-bold text-yellow-500 mr-2" : ""
                }
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
        {totalPages > 0 ? (
          <>
            <div className="w-fit mx-auto mt-10">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
            <main className="relative">
              <div className="absolute top-0 z-0 w-full">
                <ProductCard products={filteredProducts} />
                <div className="w-fit mx-auto mb-14">
                  <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </main>
          </>
        ) : (
          <h1 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-t from-red-700 to-blue-500 my-64">
            No Products Found
          </h1>
        )}
      </div>
    </>
  );
};

export default Explore;
