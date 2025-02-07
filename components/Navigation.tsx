// components/NavigationMenu.jsx

"use client";

import { useState } from "react";
import Link from 'next/link';
import { ChevronDownIcon, CrossIcon } from "@heroicons/react/24/outline";

const NavigationMenu = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="relative z-50" data-theme={darkMode ? 'dark' : 'light'}>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        {/* Your logo here */}
      </Link>

      {/* Navigation Menu Toggle Button */}
      <button
        type="button"
        onClick={toggleMobileMenu}
        className={`absolute top-10 left-2 z-50 transition ease-in-out duration-300 flex items-center justify-center p-2 rounded-md bg-black text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-900 ${
          showMobileMenu ? "transform rotate-45" : ""
        }`}
      >
        <span className="sr-only">Toggle menu</span>
        {showMobileMenu ? (
          <CrossIcon className="h-5 w-5 text-white" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-10 left-0 flex-col items-center p-2 transition ease-in-out duration-300 ${
          showMobileMenu ? "block" : "hidden"
        } bg-black text-white shadow-md rounded-lg w-full h-auto`}
      >
        {/* Desktop Menu */}
        <div className="flex items-center justify-between px-4 py-2">
          <Link href="/" className="text-xl font-bold uppercase hover:text-gray-800 focus:text-gray-900">
            Home
          </Link>
          {/* Auth Buttons */}
          <button
            type="button"
            onClick={() => alert("Auth button clicked")}
            className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-800 focus:outline-none focus:bg-gray-900"
          >
            Sign In
          </button>
        </div>

        {/* Dropdown Submenus */}
        <div className="mt-4">
          <ul className="flex flex-col gap-y-2">
            <li className="hover:text-gray-800 focus:text-gray-900">
              <Link href="#" className="text-lg font-bold uppercase hover:text-gray-800 focus:text-gray-900">
                About Us
              </Link>
            </li>
            <li className="hover:text-gray-800 focus:text-gray-900">
              <Link href="#" className="text-lg font-bold uppercase hover:text-gray-800 focus:text-gray-900">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className={`hidden md:block flex items-center justify-between px-4 py-2 bg-black text-white shadow-md rounded-lg w-full h-auto ${
        !showMobileMenu ? "block" : "hidden"
      }`}>
        {/* Dropdown Submenus */}
        <ul className="flex flex-col gap-y-2">
          <li className="hover:text-gray-800 focus:text-gray-900">
            <Link href="#" className="text-lg font-bold uppercase hover:text-gray-800 focus:text-gray-900">
              About Us
            </Link>
          </li>
          <li className="hover:text-gray-800 focus:text-gray-900">
            <Link href="#" className="text-lg font-bold uppercase hover:text-gray-800 focus:text-gray-900">
              Services
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <button
          type="button"
          onClick={() => alert("Auth button clicked")}
          className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-800 focus:outline-none focus:bg-gray-900"
        >
          Sign In
        </button>
      </nav>
    </div>
  );
};

export default NavigationMenu;