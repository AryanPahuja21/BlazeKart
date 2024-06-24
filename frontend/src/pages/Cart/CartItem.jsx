import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartItem = ({ item }) => {
  const { name, price, quantity, stock, image } = item;
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleSubtract = () => {
    itemQuantity > 1 && setItemQuantity(itemQuantity - 1);
  };

  const handleAdd = () => {
    itemQuantity < stock && setItemQuantity(itemQuantity + 1);
  };

  return (
    <div className="flex justify-between my-4 lg:ml-10 px-4 py-3 rounded-md relative drop-shadow-lg bg-white">
      <div className="flex">
        <img src={image} alt="" className="w-24 mr-4 h-24 rounded-md" />
        <div>
          <h3 className="font-bold lg:text-xl">{name}</h3>
          <p className="lg:text-lg">₹{price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="border border-gray-300 rounded-md px-2 py-1 lg:mr-2"
          onClick={handleSubtract}
        >
          -
        </button>
        <button className="border border-gray-300 rounded-md px-2 py-1 lg:mr-2">
          {itemQuantity}
        </button>
        <button
          className="border border-gray-300 rounded-md px-2 py-1 mr-2"
          onClick={handleAdd}
        >
          +
        </button>
        <button className="p-2 bg-red-500 text-white rounded-md">
          {<RiDeleteBin5Line />}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
