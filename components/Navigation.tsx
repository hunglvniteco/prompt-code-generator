import { useState, useEffect } from 'next/navigation';
import { motion } from 'framer-motion';

const nav = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleShowMenu = (menu: { links: string[] }) => {
    if (menu.active) return;
    if (' desktop' === menu.type || ' mobile-first') {
      setActiveItem(menu.active ?? null);
      setIsMenuOpen(!menu.active);
    }
  };

  const toggleMenu = () => {
    setActiveItem(activeItem !== null ? activeItem : null);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="hamburger">
      <div className="container mx-auto px-4 py-2">
        {/* Logo */}
        <a href="#" className="text-slate-800 hover:text-slate-900 focus:text-slate-900 transition-colors">Logo</a>

        {/* Navigation items */}
        {['A', 'B', 'C'].map((item, index) => (
          <li key={item} className={`block py-2 px-4 rounded-t-lg ${activeItem === item ? 'bg-slate-900' : 'bg-white'} hover:bg-slate-800 transition-colors`}>
            <span className="text-sm ${item !== activeItem ? 'font-medium' : ''}">{item}</span>
          </li>
        ))}

        {/* Auth Buttons */}
        {['Auth', 'Sign In'].map((button, index) => (
          <button 
            key={index}
            onClick={() => toggleMenu}
            className={`block py-2 px-4 text-sm hover:bg-slate-800 transition-colors ${activeItem === button ? 'bg-slate-900' : ''`}
          `>
            {button}
          </button>
        ))}

        {/* Mobile Button */}
        {isMenuOpen && (
          <motion.div className="block py-2 px-4 text-sm hover:bg-slate-800 transition-colors">
            <button
              onClick={() => toggleMenu}
              className={`block py-2 px-4 text-lg rounded-full ${activeItem === 'Auth' ? 'bg-blue-500' : ''`}
            ```
              style={{ left: '3''right', transform: 'translateX(-3rem)' }}
              title={button}
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );

  return (
    <section className="hamburger">
      <a href="#" onClick={handleShowMenu} className="text-slate-800 hover:text-slate-900 focus:text-slate-900 transition-colors">
        {isMenuOpen ? 'Main Navigation' : 'Guest Access'}
      </a>
    </section>
  );
};

import { useState, useEffect } from 'next/navigation';
import { motion } from 'framer-motion';

const nav = () => {
  const [activeItem] = useState<string | null>(null);
  const [isMenuOpen] = useState(false);

  const handleShowMenu = (menu: { links: string[] }) => {
    if (!isMenuOpen && menu.active) return;
    setActiveItem(menu.active !== null ? menu.active : null);
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenu = () => {
    setActiveItem(null);
    setIsMenuOpen(!isMenuOpen);
  };
};

const switchBetweenMode = (state: { 
  mode: 'auth' | 'guest',
  links
}) => {
  const newState = state.map((value, key) => ({
    ...state,
    [key]: value
  }));
  return <nav onClick={() => handleShowMenu(newState.links)} className="hamburger">{state.mode === 'auth' ? 'Auth Mode' : 'Guest Access Modal'}</nav>;
};

export default {
  // Auth/_guest state switcher
  Switchable({
    navigation: nav,
    authModeController: (menu) => {
      return handleShowMenu(menu.links || []);
    },
    guestStateController: () => {
      setActiveItem(null);
      setIsMenuOpen(false);
    }
  }),
  GuestStateController({ links }) => (
    <section className="hamburger">
      <a href="#" onClick={handleShowMenu} className="text-slate-800 hover:text-slate-900 focus:text-slate-900 transition-colors">
        {isMenuOpen ? 'Main Navigation' : 'Guest Access'}
      </a>
    </section>
  )
}