import React from "react";

const Checkout = () => {
  return (
    <div className="h-screen">
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg my-14">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <form>
          <h2 className="text-lg font-bold mb-2">Shipping Information</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block mb-1">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block mb-1">
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zip" className="block mb-1">
              PinCode:
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
