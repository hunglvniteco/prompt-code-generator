import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(process.browser ? 'light' : 'dark');

  const handleToggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex justify-between items-center py-4 px-6 bg-${mode === 'dark' ? 'slate-800' : 'white'}`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center">
        <img src="" alt="" className="w-8 h-8" />
        <span>Logo</span>
      </a>

      {/* Navigation items */}
      <ul
        className={`hidden lg:flex justify-between items-center gap-4 ${
          mode === 'dark' ? 'text-slate-200' : 'text-white'
        }`}
      >
        {navItems.map((item, index) => (
          <li key={index}>
            <a href="#section-{item.id}" className="flex items-center transition-colors duration-300">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <div
        className={`flex flex-col justify-between bg-${mode === 'dark' ? 'slate-800' : 'white'} p-4 ${
          mode === 'dark'
            ? 'text-slate-200'
            : 'text-white'
        }`}
        aria-label="Mobile menu"
      >
        <button
          className="p-2 bg-${mode === 'dark' ? 'slate-800' : 'white'} hover:bg-${mode === 'light' ? 'white' : 'slate-700'}
          onClick={handleToggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12l5 5-5 5z" />
          </svg>
        </button>

        {isOpen && (
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#section-{item.id}"
                  className={`block py-2 hover:bg-${mode === 'dark' ? 'slate-800' : 'white'} duration-300`}
                  aria-current="page"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Auth buttons */}
      <ul
        className={`flex justify-between items-center gap-4 ${
          mode === 'dark' ? 'text-slate-200' : 'text-white'
        }`}
      >
        <li>
          <button
            className="bg-${mode === 'dark' ? 'slate-800' : 'white'} hover:bg-${mode === 'light' ? 'white' : 'slate-700'}
            type="button"
            aria-label="Login"
          >
            Login
          </button>
        </li>

        <li>
          <button
            className="bg-${mode === 'dark' ? 'slate-800' : 'white'} hover:bg-${mode === 'light' ? 'white' : 'slate-700'}
            type="button"
            aria-label="Sign up"
          >
            Sign up
          </button>
        </li>
      </ul>

      {/* Mobile menu toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className={`p-2 ${isOpen ? 'bg-slate-800' : 'bg-white'} hover:bg-${mode === 'light' ? 'white' : 'slate-700'}
          rounded-full`}
        aria-label="Mobile menu toggle"
        onClick={handleToggleMobileMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12l5 5-5 5z" />
        </svg>
      </motion.button>
    </nav>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`bg-${mode === 'dark' ? 'slate-800' : 'white'} p-4 w-full ${isOpen ? 'fixed top-0 left-0 right-0 z-50' : 'hidden'}
            transition-duration-300 duration-300`}
        >
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#section-{item.id}"
                  className="block py-2 hover:bg-${mode === 'dark' ? 'slate-800' : 'white'} duration-300"
                  aria-current="page"
                  onClick={(e) => {
                    e.preventDefault();
                    const sectionId = item.id;
                    router.push(`#${sectionId}`);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#section-{item.id}"
                  className={`block py-2 hover:bg-${mode === 'dark' ? 'slate-800' : 'white'} duration-300`}
                  aria-current="page"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;

// navItems list
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];