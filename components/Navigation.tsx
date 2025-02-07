import React from 'react';
import { useMediaQuery } from 'next/jsx/hooks/use-media-query';
import Link from 'next/link';
import Button from '@/components/Button';
import { useState } from 'react';

const Navigation = ({ mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${mode === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
      <div className="container">
        {/* Logo */}
        <Link href="/" className="logo">
          {/* Replace with actual logo component */}
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG code for the logo -->
          </svg>
        </Link>

        {/* Navbar Items */}
        {isMobile ? (
          <button onClick={toggleMenu} className="hamburger-menu">
            <div className="burger hamburger-inner"></div>
          </button>
        ) : (
          <ul className={`nav-links ${isOpen && 'show'}`}>
            <li className="nav-link">
              <Link href="/">Home</Link>
            </li>
            {/* Add more nav links */}
            <li className="nav-link">
              <Link href="/about">About</Link>
            </li>
          </ul>
        )}

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Button variant="primary" label="Login" />
          <Button variant="secondary" label="Register" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;