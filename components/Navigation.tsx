import { createSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const NavigationMenu = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-between bg-slate-800 p-4">
      <Link href="/" className={`flex items-center font-bold uppercase ${darkMode ? 'text-white' : 'text-slate-100'} text-xl`}>
        <Image src="/logo.png" alt="Logo" width={20} height={20} />
        <span>My Website</span>
      </Link>

      {isOpen && (
        <div className={`absolute top-14 right-0 w-full bg-slate-800 shadow-md rounded-lg overflow-y-auto z-10`}>
          <ul className="list-disc list-inside p-4">
            <li className="hover:text-white transition-all duration-300">
              Home
              {isOpen && (
                <div className="absolute bottom-4 right-4 bg-slate-800 shadow-lg rounded-full w-6 h-6 animate-pulse" />
              )}
            </li>
            <li className="hover:text-white transition-all duration-300">
              About
              {isOpen && (
                <div className="absolute bottom-4 right-4 bg-slate-800 shadow-lg rounded-full w-6 h-6 animate-pulse" />
              )}
            </li>
            <li className="hover:text-white transition-all duration-300">
              Services
              {isOpen && (
                <div className="absolute bottom-4 right-4 bg-slate-800 shadow-lg rounded-full w-6 h-6 animate-pulse" />
              )}
            </li>
          </ul>
        </div>
      )}

      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className={`text-white transition-all duration-300 hover:text-slate-100 uppercase ${darkMode ? 'bg-gray-800' : 'bg-slate-200'} rounded-full p-2 ${
          isOpen ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <svg className={`w-6 h-6`}>
          {isOpen ? (
            <path d="M4 13h14l-7 4v8l4-7H4z" />
          ) : (
            <path d="M2 13h14l-7 4v8l4-7H2z" />
          )}
        </svg>
      </button>

      {/* Auth buttons */}
      <Link href="/login" className={`text-white transition-all duration-300 hover:text-slate-100 uppercase ${darkMode ? 'bg-gray-800' : 'bg-slate-200'} rounded-full p-2`}>
        Login
      </Link>
      <Link href="/register" className={`text-white transition-all duration-300 hover:text-slate-100 uppercase ${darkMode ? 'bg-gray-800' : 'bg-slate-200'} rounded-full p-2`}>
        Register
      </Link>
    </div>
  );
};

export default NavigationMenu;