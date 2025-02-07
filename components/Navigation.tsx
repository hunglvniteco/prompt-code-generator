import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const App = () => {
  const [mode, setMode] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  const handleScroll = (event) => {
    document.documentElement.scrollTop = event.target.scrollTop;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-800">
      <header className="sticky top-0 z-50 py-6 px-4 sm:px-12 lg:px-20">
        <nav className={`flex justify-between items-center w-full max-w-xl mx-auto`}>
          {/* Logo */}
          <Link href="/" className="text-slate-800 dark:text-white font-bold text-2xl">
            Your Company
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            aria-label="Toggle Menu"
            className="ml-auto hidden lg:block bg-slate-800 dark:bg-white text-white font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 5a1 1 0 0 1 0 4h13a1 1 0 0 1 0 4l-13 0" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5V8m0 3L15 9.5" />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-10 right-0 w-full bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md z-10">
              <ul className="flex flex-col space-y-2 items-center justify-center w-full max-w-xl mx-auto">
                {/* Links */}
                <li>
                  <Link href="/" className="text-slate-800 dark:text-white font-bold hover:text-gray-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-800 dark:text-white font-bold hover:text-gray-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-800 dark:text-white font-bold hover:text-gray-500">
                    Services
                  </Link>
                </li>

                {/* Auth Buttons */}
                {mode === 'light' ? (
                  <button
                    onClick={() => console.log('Login')}
                    type="button"
                    className="bg-slate-400 dark:bg-white text-white font-bold py-2 px-4 rounded-full hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    Login
                  </button>
                ) : (
                  <button
                    onClick={() => console.log('Login')}
                    type="button"
                    className="bg-white dark:bg-slate-800 text-slate-400 font-bold py-2 px-4 rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    Login
                  </button>
                )}
              </ul>
            </div>
          )}

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {/* Links */}
            <Link href="/" className="text-slate-800 dark:text-white font-bold hover:text-gray-500">
              Home
            </Link>
            <Link href="/about" className="text-slate-800 dark:text-white font-bold hover:text-gray-500">
              About
            </Link>
            <Link href="/services" className="text-slate-800 dark:text-white font-bold hover:text-gray-500">
              Services
            </Link>

            {/* Auth Buttons */}
            {mode === 'light' ? (
              <button
                onClick={() => console.log('Login')}
                type="button"
                className="bg-slate-400 dark:bg-white text-white font-bold py-2 px-4 rounded-full hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => console.log('Login')}
                type="button"
                className="bg-white dark:bg-slate-800 text-slate-400 font-bold py-2 px-4 rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Login
              </button>
            )}
          </nav>
        </nav>
      </header>

      {/* Main Content */}
      <main className="py-6">
        <div className="max-w-xl mx-auto">
          <h1 className={`text-slate-800 dark:text-white font-bold text-2xl`}>
            Your Company
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-white py-6 px-4 sm:px-12 lg:px-20">
        <div className="flex justify-between items-center w-full max-w-xl mx-auto">
          {/* Links */}
          <Link href="/" className="text-slate-800 dark:text-white font-bold hover:text-gray-500">
            Home
          </Link>
          <Link href="/about" className="text-slate-800 dark:text-white font-bold hover:text-gray-500">
            About
          </Link>

          {/* Auth Buttons */}
          {mode === 'light' ? (
            <button
              onClick={() => console.log('Login')}
              type="button"
              className="bg-slate-400 dark:bg-white text-white font-bold py-2 px-4 rounded-full hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => console.log('Login')}
              type="button"
              className="bg-white dark:bg-slate-800 text-slate-400 font-bold py-2 px-4 rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Login
            </button>
          )}
        </div>
      </footer>

      {/* Smooth Scroll */}
      <div className="fixed bottom-0 w-full h-1 bg-black opacity-50 dark:bg-white dark:opacity-50" onClick={handleScroll} />
    </div>
  );
};

export default App;