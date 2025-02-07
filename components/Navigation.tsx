import React from 'react';
import Link from 'next/link';
import { cn } from 'tailwindcss-classnames';

const NavigationMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-slate-800 text-white px-4 py-2 w-full fixed top-0 z-30">
      {/* Mobile menu toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        type="button"
        className="text-white ml-auto hidden md:flex p-2 rounded-md focus:outline-none hover:bg-slate-700 transition duration-500 ease-in-out"
      >
        {isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18l12-9L3 12zm9-5h-3z" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l18 9L3 12zm9-5h-3z" />
        </svg>}
      </button>

      {/* Desktop navigation */}
      {isMobileMenuOpen && (
        <div className="hidden md:flex p-4">
          <Link href="/" className={cn('text-white font-semibold py-2 rounded-md hover:bg-slate-700 transition duration-500 ease-in-out')}>
            Home
          </Link>
          <Link href="/about" className={cn('text-white font-semibold py-2 rounded-md hover:bg-slate-700 transition duration-500 ease-in-out')}>
            About Us
          </Link>
          <Link href="/services" className={cn('text-white font-semibold py-2 rounded-md hover:bg-slate-700 transition duration-500 ease-in-out')}>
            Services
          </Link>
          <Link href="/contact" className={cn('text-white font-semibold py-2 rounded-md hover:bg-slate-700 transition duration-500 ease-in-out')}>
            Contact Us
          </Link>
        </div>
      )}

      {/* Logo */}
      <a href="/" className="ml-auto flex items-center">
        <span className="font-bold text-white">Your Brand</span>
      </a>

      {/* Auth buttons */}
      <div className="flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          type="button"
          className="hidden md:block p-2 rounded-md focus:outline-none hover:bg-slate-700 transition duration-500 ease-in-out"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavigationMenu;