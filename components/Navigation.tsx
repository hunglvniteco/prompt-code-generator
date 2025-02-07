import React from 'react';
import Link from 'next/link';
import { useTheme } from '@tailwindcss/react';

const Navigation = () => {
  const { mode } = useTheme();
  const classes = `bg-white shadow-md rounded-lg px-6 py-4 transition-all duration-300 dark:bg-slate-800 dark:text-white ${
    mode === 'dark' ? '' : 'dark:bg-slate-900 dark:text-white'
  }`;

  return (
    <nav className={classes}>
      <div className="flex items-center justify-between space-x-6">
        <Link href="/" className="text-xl font-bold leading-none uppercase dark:text-blue-500">
          {/* Your Logo */}
        </Link>
        <div className="hidden md:block flex-grow-1 space-x-4">
          <Link
            href="/home"
            className="block px-2 py-1 rounded text-sm font-semibold hover:bg-slate-800 dark:hover:bg-blue-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-2 py-1 rounded text-sm font-semibold hover:bg-slate-800 dark:hover:bg-blue-500"
          >
            About
          </Link>
        </div>
        <button
          type="button"
          onClick={() => console.log('Toggle Menu')}
          className="text-xl font-bold leading-none uppercase px-2 py-1 rounded text-sm focus:outline-none transition-all duration-300 dark:text-blue-500"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navigation;