import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const NavigationMenu = ({ lightMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const slideInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: 'ease-out' } }
  };

  return (
    <div className="navigation-menu">
      <button
        onClick={handleToggle}
        className={`navbar-btn ${isOpen ? 'active' : ''}`}
      >
        <span className="hamburger-icon" aria-label="Menu"></span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: '0%', transition: slideInAnimation }}
          exit={{ opacity: 0, x: '100%', transition: slideInAnimation }}
          className="mobile-menu"
        >
          <Link href="/home" className="menu-item">
            Home
          </Link>
          <Link href="/about" className="menu-item">
            About
          </Link>
          <Link href="/services" className="menu-item">
            Services
          </Link>
          <Link href="/contact" className="menu-item">
            Contact
          </Link>

          {lightMode ? (
            <button href="/login">Login</button>
          ) : (
            <button href="/register">Register</button>
          )}
        </motion.div>
      )}

      {/* Logo and Auth Buttons */}
      <div className="logo-auth-btns">
        <img src="/logo.png" alt="Logo" className="logo" />
        {lightMode ? (
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <span className="hamburger-icon"></span>
          </button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavigationMenu;