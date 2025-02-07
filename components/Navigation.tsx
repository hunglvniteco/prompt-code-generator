import { useState } from 'react';
import clsx from 'clsx';

// Define the styles for the navigation menu
const navMenuStyles = {
  base: 'flex items-center justify-between',
  logo: 'block mr-4',
  hamburger: 'cursor-pointer hidden lg:inline-block',
  menuList: 'flex flex-col space-y-2',
  menuItem: 'hover:text-white transition ease-in-out duration-300',
  dropdownTrigger: 'text-blue-500 hover:text-white transition ease-in-out duration-300',
  dropdownContent: 'hidden absolute right-0 top-12 w-full bg-gray-800 rounded-md shadow-lg py-4 px-6 mt-1 sm:w-32 max-w-sm',
};

// Define the styles for the dropdown menu content
const dropdownContentStyles = {
  base: 'bg-white rounded-md shadow-lg py-4 px-6 mt-1 sm:w-32 max-w-sm',
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx(navMenuStyles.base)}>
      {/* Logo */}
      <a href="/" className="block mr-4">
        Your Brand Name
      </a>

      {/* Hamburger menu */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        className={clsx(navMenuStyles.hamburger)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 8 8"
          class="h-6 w-6 stroke-gray-500 dark:text-white stroke-current"
        >
          <path d="M1 1l7 7m0-7L1 1"/>
        </svg>
      </button>

      {/* Navigation menu */}
      {isOpen && (
        <div className={clsx(navMenuStyles.menuList)}>
          {/* Main navigation items */}
          <a href="/" className={clsx(navMenuStyles.menuItem)}>Home</a>
          <a href="/about" className={clsx(navMenuStyles.menuItem)}>About</a>
          <a href="/services" className={clsx(navMenuStyles.menuItem)}>Services</a>
          {/* Auth buttons */}
          <div className="flex space-x-2">
            <button className={clsx(navMenuStyles.dropdownTrigger, 'text-blue-500 hover:text-white')}>
              Login
            </button>
            <button className={clsx(navMenuStyles.dropdownTrigger, 'text-blue-500 hover:text-white')}>
              Register
            </button>
          </div>

          {/* Dropdown content */}
          <div className={clsx(dropdownContentStyles.base)}>
            <a href="/login" className={clsx(dropdownContentStyles.menuItem)}>Login</a>
            <a href="/register" className={clsx(dropdownContentStyles.menuItem)}>Register</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;