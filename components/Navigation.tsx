import { createRouter, useResolvedRoute } from 'next/router';
import { useState, useEffect } from 'react';
import { ChevronDownIcon, XIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = createRouter();
  const resolvedRoute = useResolvedRoute();

  useEffect(() => {
    // Handle route changes to update the active link
    function handleRouteChange() {
      const currentPathname = window.location.pathname;
      if (resolvedRoute?.pageProps?.user && !resolvedRoute?.query?.auth) {
        setIsOpen(false);
      } else if (!resolvedRoute?.pageProps?.user) {
        setIsOpen(true);
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [resolvedRoute]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-800 text-white px-4 py-2 fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={48}
              className="mr-3"
            />
          </div>
        </Link>

        {/* Navigation Items */}
        {isOpen && (
          <ul className="hidden md:flex flex-col space-y-4">
            {resolvedRoute?.pageProps?.user && (
              <>
                <li>
                  <Link href="/dashboard" className="text-lg font-bold hover:text-slate-500">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="text-lg font-bold hover:text-slate-500">
                    Profile
                  </Link>
                </li>
              </>
            )}
            {/* Dropdown Submenus */}
            {resolvedRoute?.pageProps?.user && (
              <>
                <li>
                  <a
                    href="#"
                    className="text-lg font-bold hover:text-slate-500 dropdown-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Settings
                    <ChevronDownIcon className="ml-2 h-5 w-5" />
                  </a>
                  <ul className="dropdown-menu hidden md:flex flex-col space-y-4">
                    <li>
                      <Link href="/profile/settings" className="text-sm font-medium hover:text-slate-500">
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link href="/profile/account-settings" className="text-sm font-medium hover:text-slate-500">
                        Privacy
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        )}

        {/* Auth Buttons */}
        {!resolvedRoute?.pageProps?.user && (
          <ul className="hidden md:flex flex-col space-y-4">
            <li>
              <button
                href="/login"
                className="text-lg font-bold hover:text-slate-500 px-4 py-2"
              >
                Log in
              </button>
            </li>
            <li>
              <button
                href="/register"
                className="text-lg font-bold hover:text-slate-500 px-4 py-2"
              >
                Sign up
              </button>
            </li>
          </ul>
        )}

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:bg-slate-700 p-2 rounded-full focus:outline-none focus-visible:ring-2 ring-offset-1 ring-blue-500 focus-visible:ring-opacity-75"
        >
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <ChevronDownIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;