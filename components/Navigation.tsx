import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          Your Brand
        </Link>
        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-12">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="px-4 py-2 rounded hover:bg-slate-700 transition">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        {/* Auth Buttons */}
        <div className="flex space-x-12">
          <button
            onClick={handleToggle}
            className="px-4 py-2 rounded hover:bg-slate-700 transition focus-visible:outline-none focus-visible:border-white focus-visible:text-white"
          >
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </button>
          <button
            onClick={() => handleLogin()}
            className="px-4 py-2 rounded hover:bg-slate-700 transition focus-visible:outline-none focus-visible:border-white focus-visible:text-white"
          >
            Log In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="fixed top-0 left-0 w-full h-screen bg-black z-50 items-center justify-center"
      >
        <button
          onClick={handleToggle}
          className="absolute top-6 right-6 text-white opacity-80 hover:opacity-100 transition focus-visible:outline-none focus-visible:bg-white focus-visible:text-white focus-visible:border-white focus-visible:border-black"
        >
          ✕
        </button>
        <div className="bg-slate-900 shadow-lg rounded-md p-6">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="block text-white hover:text-blue-500 transition">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

const menuItems = [
  {
    id: 1,
    href: '/home',
    text: 'Home',
  },
  {
    id: 2,
    href: '/about',
    text: 'About',
  },
  {
    id: 3,
    href: '/services',
    text: 'Services',
  },
  {
    id: 4,
    href: '/contact',
    text: 'Contact',
  },
];

const handleLogin = () => {
  // Handle login logic here
};