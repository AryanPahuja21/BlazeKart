import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "./Button.jsx";

const Card = ({ route }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/v1/products${route}`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [route]);

  const handleAddToCart = (productId) => {
    setCart((prevCart) =>
      prevCart.includes(productId)
        ? prevCart.filter((id) => id !== productId)
        : [...prevCart, productId]
    );
  };
  return (
    <div className="my-14 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <div
          key={product._id}
          className="w-full mx-auto max-w-sm h-92 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
        >
          <Link to="#">
            <img
              className="p-8 rounded-t-lg h-72 mx-auto hover:scale-105"
              src={product.imageUrl}
              alt={product.name}
            />
          </Link>
          <div className="px-5 pb-5">
            <Link to="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </Link>

            <div className="flex items-center justify-between mt-7">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ₹{product.price}
              </span>
              <div
                className="cursor-pointer"
                onClick={() => handleAddToCart(product._id)}
              >
                {cart.includes(product._id) ? (
                  <Button value="Added" />
                ) : (
                  <Button value="Add to Cart" />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
