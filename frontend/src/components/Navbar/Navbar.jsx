import { Link } from "react-router-dom";
import React, { useState } from "react";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Explore",
      link: "/explore",
    },
    {
      labe: "Men",
      link: "#",
    },
    {
      labe: "About",
      link: "#",
    },
    {
      labe: "Contact",
      link: "#",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-3 bg-black/90">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden text-white"
            />
            {/* logo */}
            <Link to="/" className="w-32">
              <img src="/logo.png" alt="" />
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              class="hidden lg:block group text-white transition-all duration-300 ease-in-out no-underline"
              to={d.link}
            >
              <span class="bg-left-bottom bg-gradient-to-r from-yellow-300 to-yellow-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {d.labe}
              </span>
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50 top-0 right-0 -translate-x-full  transition-all z-10 ",
            isSideMenuOpen && "translate-x-0"
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
                href={d.link}
              >
                <span className="bg-left-bottom bg-gradient-to-r from-yellow-300 to-yellow-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  {d.labe}
                </span>
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* cart icon */}
          <Link to="/cart">
            <AiOutlineShoppingCart className="text-2xl text-yellow-300 cursor-pointer hover:scale-125" />
          </Link>
          {/* TODO: Add cart quantity red icon on the top right of cart icon */}
          <img
            className="h-10 w-10 rounded-full border-2 border-yellow-300 cursor-pointer"
            src="https://i.pravatar.cc/150?img=52"
            alt="avatar-img"
          />
          {/* avtar img */}
        </section>
      </nav>
    </main>
  );
}
