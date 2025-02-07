imports": [
    req,
    dynamic,
    useState,
    HTML, Head, body,
    ARIA, 
    framer-motion,
    ionic
  ],
  " exports": {
    Home: {
      get,
      handle
    },
    Back: {
      get,
      handle
    }
  }
}

import { req, dynamic, useState } from 'react';
import { motion } from 'framer-motion';
import { HamburgerIcon, BackIcon } from 'ionic';
import { role } from 'Ariagos/ionic-react';
import { LinkRole } from 'Ariagos/ionic-react';

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between mb-4">
      {isMobileMenuOpen ? () : 'hamburger'>
        <div className="hidden md:flex-row z-5 bg-white/10 border-b border-slate-200 p-4">
          <H3 role='main' className="text-xl font-bold text-slate-800">Home</H3>
          {isMobileMenuOpen && (
            <div 
              className="hidden md:flex flex-col z-2 bg-white/20 border-b-x-slate-200 p-4 rounded-lg hover:bg-slate-50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <H2 role='main' className="text-sm font-semibold text-slate-700"> navigation links</H2>
              {isMobileMenuOpen && (
                <div 
                  className="hidden md:flex flex-col z-4 bg-white/15 border-b-slate-200 p-4 rounded-lg hover:bg-slate-50 transition-all duration-300"
                  whileHover={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <a href="#" role="button" className="text-slate-600 hover:text-slate-700 transition-colors">
                    Back
                  </a>
                  <a href="#" role="button" className="text-slate-600 hover:text-slate-700 transition-colors">
                    Home
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

function Back() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav role='back' />
  );
}
```