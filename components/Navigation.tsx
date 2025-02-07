import { useMediaQuery } from 'next/navigation';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 text-white flex justify-between items-center h-16 px-4">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>

      {/* Navigation Items */}
      <ul className="hidden md:flex space-x-4">
        <li className="font-medium hover:text-white transition duration-300 cursor-pointer p-2">
          Home
        </li>
        <li className="font-medium hover:text-white transition duration-300 cursor-pointer p-2">
          About
        </li>
        <li className="font-medium hover:text-white transition duration-300 cursor-pointer p-2">
          Services
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center justify-end space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer">Login</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300 cursor-pointer">Sign Up</button>
      </div>

      {/* Hamburger Menu */}
      {isMobile && (
        <div
          onClick={toggleMenu}
          className="cursor-pointer p-2 text-white rounded-full bg-slate-900 hover:bg-slate-800 transition duration-300"
        >
          {!isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M5 12L19 12M5 18L19 18"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M4 6L20 6M4 18L20 18"/></svg>}
        </div>
      )}
    </nav>
  );
};

export default Navigation;