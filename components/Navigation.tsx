import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-md fixed top-0 left-0 right-0 w-full z-50">
      {/* Desktop navigation */}
      <div className="container flex justify-between items-center px-4 py-2 md:px-6 lg:px-8">
        <Link href="/" className="text-slate-800 dark:text-white font-bold text-xl">
          <h1>My App</h1>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="p-2 hover:bg-gray-100 rounded-md">
            About
          </Link>
          <Link href="/services" className="p-2 hover:bg-gray-100 rounded-md">
            Services
          </Link>
          <Link href="/contact" className="p-2 hover:bg-gray-100 rounded-md">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={`flex md:hidden items-center justify-between px-4 py-2 ${darkMode ? 'bg-white' : 'bg-slate-800'} shadow-md`}>
        <button onClick={() => setOpenMenu(!openMenu)} className="p-2 rounded-full">
          {openMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.75A1.75 1.75 0 0 1 5 7.75v8.4V5.75zm0 9a1.75 1.75 0 0 1 5 0v-8.4V5.75" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.866.503a1 1 0 0 0 0 1.424L18 21h-1V9a1 1 0 0 0 -1-.584L16 10v8z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {openMenu && (
        <div className="fixed z-50 w-full h-screen bg-white dark:bg-slate-800 overflow-y-auto">
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <button onClick={() => setOpenMenu(false)} className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.866.503a1 1 0 0 0 0 1.424L18 21h-1V9a1 1 0 0 0 -1-.584L16 10v8z" />
              </svg>
            </button>

            <div className="space-x-4">
              <Link href="/" className="p-2 hover:bg-gray-100 rounded-md">
                Home
              </Link>
              <Link href="/about" className="p-2 hover:bg-gray-100 rounded-md">
                About
              </Link>
              <Link href="/services" className="p-2 hover:bg-gray-100 rounded-md">
                Services
              </Link>
              <Link href="/contact" className="p-2 hover:bg-gray-100 rounded-md">
                Contact
              </Link>
            </div>

            {/* Auth buttons */}
            <button onClick={() => console.log('Login')} className="p-2 bg-blue-500 text-white rounded-md mt-4">
              Login
            </button>
            <button onClick={() => console.log('Sign Up')} className="p-2 bg-green-500 text-white rounded-md mt-4">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;