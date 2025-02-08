```jsx
import { useState } from 'react';
import Link from 'next/link';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className={`flex justify-between items-center py-4 ${darkMode ? 'bg-slate-800' : 'bg-white'} `}>
      <Link href="/">
        <a
          className={`text-lg font-bold transition duration-200 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
          aria-label="Logo"
        >
          Logo
        </a>
      </Link>
      <div className="hidden md:flex items-center">
        <ul className="flex justify-center space-x-4 transition duration-200">
          <li>
            <Link href="#home">
              <a
                className={`text-lg font-bold transition duration-200 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
                aria-label="Home"
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a
                className={`text-lg font-bold transition duration-200 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
                aria-label="About"
              >
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex justify-end">
        <button
          className={`transition duration-200 ${
            menuOpen ? 'bg-slate-900' : 'bg-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={`md:hidden flex justify-end`}>
        <button
          className={`transition duration-200 ${
            darkMode ? 'bg-slate-900' : 'bg-white'
          }`}
          aria-label="Toggle Menu"
        >
          Toggle Menu
        </button>
      </div>
    </nav>

    {menuOpen && (
      <nav className="absolute top-full left-0 w-full bg-white p-4">
        <ul>
          <li>
            <Link href="#home">
              <a
                className={`text-lg font-bold transition duration-200 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
                aria-label="Home"
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a
                className={`text-lg font-bold transition duration-200 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
                aria-label="About"
              >
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    )}
  );
}

function NavMenu({ children }) {
  return (
    <nav className={`flex justify-between items-center py-4 ${darkMode ? 'bg-slate-800' : 'bg-white'} `}>
      <div className="flex items-center">
        {children}
      </div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        Toggle Menu
      </button>
    </nav>
  );
}

function NavItems() {
  return (
    <ul>
      <li>
        <Link href="#home">
          <a className={`text-lg font-bold transition duration-200 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <a className={`text-lg font-bold transition duration-200 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About
          </a>
        </Link>
      </li>
    </ul>
  );
}

function AuthNav({ children }) {
  return (
    <nav className={`flex justify-between items-center py-4 ${darkMode ? 'bg-slate-800' : 'bg-white'} `}>
      {children}
    </nav>
  );
}

export default function Navbar() {
  const [active, setActive] = useState(null);
  const handleLinkClick = (href) => {
    if (href === active) return;
    setActive(href);
    document.querySelector(`a[href="${active}"]`).classList.add('active');
    document.querySelector(`a[href="${active}"]`).previousElementSibling.classList.remove('active');
  };

  return (
    <Nav>
      <Link href="/">
        <a
          className={`text-lg font-bold transition duration-200 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
          aria-label="Logo"
        >
          Logo
        </a>
      </Link>
      <AuthNav>
        <ul>
          <li>
            <Link href="#login">
              <a
                className={`text-lg font-bold transition duration-200 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
                onClick={() => handleLinkClick('login')}
                aria-label="Login"
              >
                Login
              </a>
            </Link>
          </li>
          <li>
            <Link href="#register">
              <a
                className={`text-lg font-bold transition duration-200 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
                onClick={() => handleLinkClick('register')}
                aria-label="Register"
              >
                Register
              </a>
            </Link>
          </li>
        </ul>
      </AuthNav>
      <NavItems />
    </Nav>
  );
}
```