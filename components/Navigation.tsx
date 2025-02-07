import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 sm:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="text-slate-800 font-bold text-xl">
          Logo
        </Link>

        {/* Navigation Menu */}
        {isMobile ? (
          <button
            onClick={toggleMenu}
            className="hidden md:block p-2 text-black bg-transparent rounded-full hover:bg-slate-800 focus:outline-none focus-visible:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <FaTimes className="inline-block w-6 h-6" />
            ) : (
              <FaBars className="inline-block w-6 h-6" />
            )}
          </button>
        ) : (
          <ul className="flex space-x-12 sm:space-x-24">
            <li>
              <Link href="/" className="text-slate-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-700">
                Home
              </Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        )}

        {/* Auth Buttons */}
        {isMobile ? (
          <button
            onClick={toggleMenu}
            className="block md:hidden p-2 text-black bg-transparent rounded-full hover:bg-slate-800 focus:outline-none focus-visible:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <FaTimes className="inline-block w-6 h-6" />
            ) : (
              <FaBars className="inline-block w-6 h-6" />
            )}
          </button>
        ) : (
          <ul className="flex space-x-12 sm:space-x-24">
            {/* Add more auth buttons as needed */}
          </ul>
        )}
      </div>

      {/* Dropdown Submenus */}
      {isMenuOpen && (
        <motion.ul
          className="absolute top-full left-0 w-screen bg-white shadow-md z-50 p-4 sm:p-8 lg:p-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {/* Dropdown items */}
          <li>
            <Link href="/about" className="text-slate-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-700">
              About
            </Link>
          </li>
          {/* Add more dropdown items as needed */}
        </motion.ul>
      )}
    </header>
  );
};

export default Header;