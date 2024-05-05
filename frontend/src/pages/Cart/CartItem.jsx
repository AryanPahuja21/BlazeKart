import React from "react";

const CartItem = ({ item }) => {
  const { id, name, price, quantity, stock, image } = item;
  return (
    <div className="m-8 flex">
      <img src={image} alt="" className="w-24" />
      <div>
        <h3>{name}</h3>
        <p>₹{price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
