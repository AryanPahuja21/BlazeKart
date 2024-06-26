import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/reducer/cartReducer";

const CartItem = ({ item }) => {
  const { name, price, imageUrl, stock, quantity } = item;
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const dispatch = useDispatch();

  const handleSubtract = (e) => {
    itemQuantity > 1 && setItemQuantity(itemQuantity - 1);
    dispatch(removeFromCart(e));
  };

  const handleAdd = (e) => {
    itemQuantity < stock && setItemQuantity(itemQuantity + 1);
    dispatch(addToCart(e));
  };

  const handleRemove = (e) => {
    dispatch(removeFromCart(e));
  };

  return (
    <div className="flex justify-between my-4 lg:ml-10 px-4 py-3 rounded-md relative drop-shadow-lg bg-white">
      <div className="flex">
        <img src={imageUrl} alt="" className="w-24 mr-4 h-24 rounded-md" />
        <div>
          <h3 className="font-bold lg:text-xl">{name}</h3>
          <p className="lg:text-lg">₹{price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="border border-gray-300 rounded-md px-2 py-1 lg:mr-2"
          onClick={() => handleSubtract(item)}
        >
          -
        </button>
        <button className="border border-gray-300 rounded-md px-2 py-1 lg:mr-2">
          {itemQuantity}
        </button>
        <button
          className="border border-gray-300 rounded-md px-2 py-1 mr-2"
          onClick={() => handleAdd(item)}
        >
          +
        </button>
        <button
          className="p-2 bg-red-500 text-white rounded-md"
          onClick={() => handleRemove(item)}
        >
          {<RiDeleteBin5Line />}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
