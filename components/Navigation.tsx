import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const darkMode = localStorage.getItem('darkMode') === 'true';

  useEffect(() => {
    if (router.asPath !== '/login' && router.asPath !== '/signup') {
      document.body.classList.add(darkMode ? 'bg-slate-800' : 'bg-white');
      document.body.classList.toggle('text-slate-200', darkMode);
    }
  }, [router.asPath, darkMode]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 shadow-lg bg-white transition duration-300 ease-in-out ${
      router.pathname === '/login' || router.pathname === '/signup'
        ? 'hidden lg:block'
        : 'lg:hidden block'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-slate-800 md:text-5xl dark:text-white">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={56}
            loading="lazy"
          />
        </Link>
        {/* Navigation Links */}
        <div className="flex justify-center space-x-4 text-slate-700 md:space-x-8">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`${router.pathname === `/${item}` ? 'bg-slate-900 text-white' : ''} rounded-md py-2 px-4 hover:bg-slate-800 transition duration-300 ease-in-out`}
            >
              {item}
            </Link>
          ))}
        </div>
        {/* Auth Buttons */}
        <div className="flex justify-center space-x-4 text-slate-700 md:space-x-8">
          <button
            onClick={() => router.push('/login')}
            type="button"
            className={`bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 transition duration-300 ease-in-out ${
              router.pathname === '/login' ? 'hidden lg:block' : 'lg:hidden block'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => router.push('/signup')}
            type="button"
            className={`bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 transition duration-300 ease-in-out ${
              router.pathname === '/signup' ? 'hidden lg:block' : 'lg:hidden block'
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;