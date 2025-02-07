import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const NavigationMenu = ({ user }) => {
  const [isLight, setIsLight] = useState(true);
  const [isActiveItem, setActiveItem] = useState(null);

  const handleThemeChange = () => {
    setIsLight(!isLight);
  };

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClick = (item) => {
    setActiveItem(item);
    window.scrollTo({
      top: item.offsetTop,
      behavior: 'smooth',
    });
  };

  const links = [
    { name: 'Home', href: '/', subMenu: [] },
    { name: 'About Us', href: '/about', subMenu: [] },
    {
      name: 'Services',
      href: '/services',
      subMenu: [
        { name: 'Web Development', href: '/web-dev' },
        { name: 'App Development', href: '/app-dev' },
      ],
    },
    { name: 'Contact Us', href: '/contact', subMenu: [] },
  ];

  const menuItems = (
    <ul className="flex items-center justify-between space-x-4 text-base">
      {/* Logo */}
      <Link href="/" className="p-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          quality={100}
        />
      </Link>

      {/* Auth Buttons */}
      {user ? (
        <>
          <Link href="/dashboard" className="p-2">
            Dashboard
          </Link>
          <button onClick={handleLogout} className="p-2 border rounded-md bg-red-500 text-white hover:bg-red-600">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href="/login" className="p-2">
            Login
          </Link>
          <Link href="/signup" className="p-2">
            Signup
          </Link>
        </>
      )}
    </ul>
  );

  const subMenus = (
    <div className="absolute top-full right-0 w-full p-4 shadow-lg rounded-md bg-white border border-gray-300 flex flex-col gap-y-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          onClick={() => handleClick(link)}
          className={`block py-2 px-4 text-base font-medium rounded-md hover:bg-blue-500 hover:text-white ${isActiveItem === link ? 'bg-blue-700' : ''}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-10 bg-gray-900 w-full px-4 md:px-8 lg:px-12">
      {/* Hamburger Menu */}
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
        className={`p-2 flex items-center justify-between space-x-4 text-base transition duration-300 ease-in-out ${isLight ? 'text-slate-800' : 'text-white'} ${
          isOpen ? 'bg-gray-700' : ''
        }`}
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="3,12 21,12 12,21" />
          <line x1="12" y1="6" x2="12" y2="20" className="stroke-current stroke-2.5" strokeWidth="2.5" />
        </svg>
      </button>

      {/* Navigation Menu Content */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'ease-in-out' }}
          className="absolute top-0 right-0 w-full p-4 shadow-lg rounded-md bg-white border border-gray-300 flex flex-col gap-y-2"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => handleClick(link)}
              className={`block py-2 px-4 text-base font-medium rounded-md hover:bg-blue-500 hover:text-white ${isActiveItem === link ? 'bg-blue-700' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default NavigationMenu;