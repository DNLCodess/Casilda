"use client";

import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between py-5 px-6 md:px-20 bg-transparent z-20 text-white border-b border-gray-300 font-body">
      <h1 className="text-3xl md:text-4xl font-bold font-body">Casilda</h1>

      {/* Mobile Menu Button */}
      <div className="relative md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center text-white focus:outline-none"
        >
          Menu
          <IoIosArrowDown
            className={`ml-1 transition-transform duration-300 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <ul className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg z-10">
            {[
              "Home",
              "Properties",
              "Property",
              "Realtor",
              "Others",
              "+2349153897950",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between py-2 px-4 hover:bg-blue-500 transition duration-300"
              >
                {item} <IoIosArrowDown className="inline" />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-bold uppercase">
        {[
          "Home",
          "Properties",
          "Property",
          "Realtor",
          "Others",
          "+2349153897950",
        ].map((item) => (
          <li
            key={item}
            className="flex items-center gap-1 hover:text-blue-300 transition duration-300"
          >
            {item} <IoIosArrowDown className="mt-[5px]" />
          </li>
        ))}
        <li>
          <CgProfile className="text-2xl hover:text-blue-300 transition duration-300" />
        </li>
        <li>
          <button className="bg-transparent border hover:bg-blue-500 text-white rounded-md py-2 px-4 transition duration-300">
            CREATE A LISTING
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
