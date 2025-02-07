import { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'next/font/mui';

const Navigation = () => {
  const [mode, setMode] = useState('light');
  const isMobile = useMediaQuery('(max-width: 640px)');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };

  return (
    <nav className="bg-slate-800 text-white fixed top-0 left-0 w-full h-auto py-4 flex justify-between items-center transition-all duration-300">
      {isMobile ? (
        <button
          type="button"
          onClick={toggleMode}
          aria-label="Toggle mode"
          className="text-white font-bold px-4 py-2 rounded-full md:hidden"
        >
          {mode === 'dark' ? 'Light' : 'Dark'}
        </button>
      ) : (
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-16 h-16" />
        </Link>
      )}
      <div className="hidden md:flex space-x-8">
        <Link href="#home" className="hover:text-white transition-all duration-300">
          Home
        </Link>
        <Link href="#about" className="hover:text-white transition-all duration-300">
          About
        </Link>
        <Link href="#services" className="hover:text-white transition-all duration-300">
          Services
        </Link>
      </div>
      <button
        type="button"
        onClick={toggleMode}
        aria-label="Toggle mode"
        className="hidden md:block text-white font-bold px-4 py-2 rounded-full"
      >
        {mode === 'dark' ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
};

export default Navigation;