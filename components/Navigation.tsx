import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navigation = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`bg-white shadow-md ${darkMode ? 'dark:bg-slate-800' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/">
            <a className="text-xl font-bold text-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              Your Brand
            </a>
          </Link>

          {/* Dropdown Submenus and Smooth Scroll */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-4">
              <li>
                <a href="#" onClick={() => router.push('/section1')}>
                  Section 1
                </a>
              </li>
              <li>
                <a href="#" onClick={() => router.push('/section2')}>
                  Section 2
                </a>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            {/*
              Replace with actual authentication components if needed
            */}
            <button onClick={toggleTheme}>
              Toggle Dark Mode
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;