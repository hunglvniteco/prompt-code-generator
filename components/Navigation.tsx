import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderNavbarItems = () => {
    return (
      <ul className="flex items-center justify-end">
        <li>
          <Link href="/" className={clsx('px-4 py-2 text-white font-bold hover:bg-gray-800 rounded-md', isDarkMode ? 'text-slate-100' : 'text-slate-700')}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={clsx('px-4 py-2 text-white font-bold hover:bg-gray-800 rounded-md', isDarkMode ? 'text-slate-100' : 'text-slate-700')}>About</Link>
        </li>
        <li>
          <Link href="/services" className={clsx('px-4 py-2 text-white font-bold hover:bg-gray-800 rounded-md', isDarkMode ? 'text-slate-100' : 'text-slate-700')}>Services</Link>
        </li>
        <li>
          <Link href="/contact" className={clsx('px-4 py-2 text-white font-bold hover:bg-gray-800 rounded-md', isDarkMode ? 'text-slate-100' : 'text-slate-700')}>Contact</Link>
        </li>
      </ul>
    );
  };

  return (
    <div className="bg-gray-900 h-full">
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="mx-auto flex items-center text-white font-bold text-xl">
          <img src="/logo.png" alt="Logo" className={clsx(isDarkMode ? 'w-6' : 'w-8')} />
          <span className="ml-2">My Website</span>
        </Link>
        {isOpen && (
          <div className="hidden md:block p-4">
            {renderNavbarItems()}
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="p-2 text-white rounded-md md:hidden"
          aria-label="Toggle menu"
        >
          {!isOpen ? 'Menu' : 'Close'}
          {isOpen && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={clsx(isDarkMode ? 'text-slate-100' : 'text-slate-700')}>
              <path d="M3 9l12 8L15.96 19H3z" />
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;