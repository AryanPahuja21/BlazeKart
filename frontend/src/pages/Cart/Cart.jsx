import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscError } from "react-icons/vsc";
import { SiTicktick } from "react-icons/si";
import CartItem from "./CartItem";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const [isValidCoupon, setIsValidCoupon] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = Math.round(subTotal * 0.18);
  const shippingCharges = subTotal < 1000 && subTotal > 0 ? 100 : 0;
  const discount = subTotal > 5000 ? 500 : 0;
  const total = subTotal + tax + shippingCharges - discount;
  const couponDiscount = Math.round(total * 0.1);

  useEffect(() => {
    if (couponCode === "DIWALI DHAMAKA" || couponCode === "HAPPY HOURS") {
      setIsValidCoupon(true);
    } else {
      setIsValidCoupon(false);
    }
  }, [couponCode]);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1  lg:grid-cols-9 justify-center bg-[#EEEEEE]">
        <main className="col-span-6 px-7">
          <h1 className="text-2xl font-bold text-black/70 w-fit sm:mx-auto mt-12 lg:ml-10">
            My Cart
          </h1>
          {cartItems.length === 0 && (
            <h1 className="text-4xl font-bold text-red-800 flex justify-center items-center h-[70vh] w-full mt-12 lg:ml-10">
              No items in cart
            </h1>
          )}
          {cartItems.map(
            (item) =>
              item.quantity > 0 && <CartItem key={item._id} item={item} />
          )}
        </main>
        <aside className="my-14 lg:my-24 mx-auto lg:mx-24 w-80 h-fit col-span-3 p-6 rounded-md relative drop-shadow-lg bg-white">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <div className="flex items-center justify-between mt-4">
            <span>Subtotal</span>
            <span>₹{subTotal}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span>Tax</span>
            <span>₹{tax}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span>Shipping Charges</span>
            <span>₹{shippingCharges}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span>Discount</span>
            <span>- ₹{discount}</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <h2 className="mt-8 text-lg font-semibold">Apply Coupon</h2>
          <p className="text-sm text-gray-500">
            Enter a coupon code to avail discount
          </p>
          <input
            type="text"
            placeholder="Enter coupon code"
            className="px-4 py-2 my-1 border border-gray-300 rounded-md"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          {couponCode &&
            (isValidCoupon ? (
              <>
                <div className="flex items-center justify-between px-2 py-2 text-green-600 bg-green-100 border border-green-200 rounded-md">
                  <span className="flex items-center space-x-1">
                    <SiTicktick />
                    <span>Coupon code applied!</span>
                  </span>
                  <button
                    onClick={() => {
                      setCouponCode("");
                      setIsValidCoupon(false);
                    }}
                    className="text-sm text-green-600"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span>Coupon Discount </span>
                  <span>-₹{couponDiscount}</span>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-between px-2 py-2 text-red-600 bg-red-100 border border-red-200 rounded-md">
                <span className="flex items-center space-x-1">
                  <VscError />
                  <span>Invalid coupon code!</span>
                </span>
                <button
                  onClick={() => {
                    setCouponCode("");
                  }}
                  className="text-sm text-red-600"
                >
                  Try again
                </button>
              </div>
            ))}
          <div className="flex items-center justify-between mt-4">
            <span>Grand Total</span>
            {isValidCoupon ? (
              <span>₹{total - couponDiscount}</span>
            ) : (
              <span>₹{total}</span>
            )}
          </div>
          <Link to="/checkout">
            <button className="w-full py-2 mt-4 text-white bg-black/90 rounded-md">
              Proceed to Checkout
            </button>
          </Link>
        </aside>
      </div>
    </>
  );
};

export default Cart;
