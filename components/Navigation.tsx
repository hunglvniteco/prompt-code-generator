import React from 'react';
import { createRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button'; // Assuming you have a custom Button component
import MenuItems from './MenuItems'; // Assuming you have a custom MenuItems component

const Navbar = ({ darkMode }) => {
  const router = createRouter();
  const pathname = usePathname();

  return (
    <nav className={`flex items-center justify-between px-4 py-2 bg-slate-800 text-white dark:bg-slate-700 dark:text-white ${darkMode ? 'bg-slate-900' : ''}`}>
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="ml-2 font-bold text-xl">Your Brand</span>
      </Link>

      {router.pathname === '/' && (
        <>
          <MenuItems />
          <Button type="primary" onClick={() => router.push('/login')}>
            Log In
          </Button>
          <Button type="secondary" onClick={() => router.push('/register')}>
            Sign Up
          </Button>
        </>
      )}

      {router.pathname !== '/' && (
        <>
          <MenuItems />
          <Link href="/dashboard">
            Dashboard
          </Link>
          <Button type="primary">Logout</Button>
        </>
      )}
    </nav>
  );
};

export default Navbar;