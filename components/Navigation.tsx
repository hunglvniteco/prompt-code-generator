import { useState } from 'react';
import { Button } from '@nextui-org/react';

const NavigationMenu = () => {
  const [mode, setMode] = useState('light');
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  // Function to toggle mode
  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  // Function to open/close the menu
  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  // Function to handle navigation item clicks
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-800 flex items-center justify-between p-4">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />

      {/* Toggle button for mobile menu */}
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        className={`text-white dark:text-slate-800 px-4 py-2 rounded-full transition duration-300 hover:bg-sky-500 dark:hover:bg-sky-600`}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute top-10 right-0 w-48 bg-white dark:bg-slate-900 shadow-lg rounded-md z-10 ${
          isOpen ? 'block' : 'hidden'
        } transition duration-300 transform translate-y-2 -translate-x-10 opacity-0 scale-0 sm:translate-y-0 sm:scale-100`}
      >
        {/* Dropdown items */}
        <Button
          onClick={() => handleItemClick('Home')}
          className="block px-4 py-2 rounded-t-md transition duration-300 hover:bg-sky-500 dark:hover:bg-sky-600"
        >
          Home
        </Button>
        <Button
          onClick={() => handleItemClick('About')}
          className="block px-4 py-2 rounded-t-md transition duration-300 hover:bg-sky-500 dark:hover:bg-sky-600"
        >
          About
        </Button>
        <Button
          onClick={() => handleItemClick('Services')}
          className="block px-4 py-2 rounded-t-md transition duration-300 hover:bg-sky-500 dark:hover:bg-sky-600"
        >
          Services
        </Button>
        <Button
          onClick={() => handleItemClick('Contact')}
          className="block px-4 py-2 rounded-b-md transition duration-300 hover:bg-sky-500 dark:hover:bg-sky-600"
        >
          Contact
        </Button>
      </div>

      {/* Auth buttons */}
      <div className="flex justify-end">
        {mode === 'light' ? (
          <Button variant="ghost" color="primary" className="px-4 py-2 rounded-full transition duration-300 hover:bg-sky-500 dark:hover:bg-sky-600">
            Login
          </Button>
        ) : (
          <Button variant="ghost" color="primary" className="px-4 py-2 rounded-full transition duration-300 hover:bg-sky-500 dark:hover:bg-sky-600">
            Sign Up
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavigationMenu;