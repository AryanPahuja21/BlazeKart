import { Link } from "react-router-dom";
import React, { useState } from "react";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Button from "../ui/Button";
import { useSelector } from "react-redux";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

export default function Navbar() {
  const [user, setUser] = useState(getUser());
  const [isSideMenuOpen, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const quantity = 2;
  const cart = useSelector((state) => state.cart);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const navlinks = [
    {
      labe: "Explore",
      link: "/explore",
    },
    {
      labe: "Top Categories",
      link: "/categories",
    },
    {
      labe: "Top Deals Today",
      link: "/deals",
    },
  ];

  return (
    <main className="sticky top-0 z-[9999]">
      <nav className="flex justify-between px-8 items-center py-3 bg-black/90">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden text-white"
            />
            {/* logo */}
            <Link to="/" className="w-32 lg:mr-24">
              <img src="/logo.png" alt="" />
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block mx-3 group text-white transition-all duration-300 ease-in-out no-underline"
              to={d.link}
            >
              <span className="bg-left-bottom bg-gradient-to-r from-yellow-300 to-yellow-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {d.labe}
              </span>
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden top-0 right-0 -translate-x-full transition-all z-[9999] ",
            isSideMenuOpen && "translate-x-0 backdrop-blur-sm"
          )}
        >
          <section className="text-white bg-black/80 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link
                key={i}
                className="font-bold group text-white transition-all duration-300 ease-in-out no-underline"
                to={d.link}
              >
                <span className="bg-left-bottom bg-gradient-to-r from-yellow-300 to-yellow-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  {d.labe}
                </span>
              </Link>
            ))}
            <div>
              {/* <Link
                to="/signup"
                className="text-white hover:text-yellow-300 font-semibold no-underline"
              >
                BECOME A SELLER
              </Link> */}
            </div>
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* <Link
            to="/signup"
            className="hidden lg:block text-white hover:text-yellow-300 mx-4 font-semibold no-underline"
          >
            BECOME A SELLER
          </Link> */}
          {/* cart icon */}
          <Link to="/cart" className="relative hover:scale-110">
            <AiOutlineShoppingCart className="text-2xl text-yellow-300 mx-4 cursor-pointer" />
            <div className="w-4 h-4 text-[10px] font-bold text-white flex justify-center items-center bg-red-700 rounded-full border border-red-400 absolute top-[-5px] right-2">
              {cart.length}
            </div>
          </Link>
          {/* TODO: Add cart quantity red icon on the top right of cart icon */}
          {user ? (
            <FaRegUser
              onClick={() => setDropdown(!dropdown)}
              className="text-xl text-yellow-300 cursor-pointer hover:scale-110"
            />
          ) : (
            <Link to="/login">
              <Button value="Login" />
            </Link>
          )}
          {user && dropdown ? (
            <div className="absolute top-16 right-5 bg-white shadow-md py-4 w-44 rounded-lg border-2 border-yellow-300">
              <Link
                to="/my-orders"
                className="block text-black py-2 px-8 hover:bg-gray-100"
              >
                My Orders
              </Link>
              <p
                className="block text-black py-2 px-8 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          ) : null}
          {/* avtar img */}
        </section>
      </nav>
    </main>
  );
}
