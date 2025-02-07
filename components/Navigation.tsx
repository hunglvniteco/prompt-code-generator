import { createMemo } from 'solid-js';
import type { Meta, StoryFn } from '@storybook/react';

export const NavigationMenu: Meta<typeof NavigationMenu> = {
  title: 'Navigation Menu',
  component: NavigationMenu,
  tags: ['docs-preview'],
};

const navItems = [
  { label: 'Home', href: '/', target: '_self' },
  { label: 'About', href: '/about', target: '_self' },
  { label: 'Contact', href: '/contact', target: '_self' },
];

function NavItem({ label, href, target }: { label: string; href: string; target?: string }) {
  return (
    <li className="px-4 py-2 hover:bg-slate-800 dark:hover:bg-white transition duration-150">
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        aria-label={`Go to ${label}`}
      >
        {label}
      </a>
    </li>
  );
}

function AuthButton({ isAuthed }: { isAuthed: boolean }) {
  return (
    <button
      type="button"
      className="px-4 py-2 bg-slate-800 dark:bg-white transition duration-150"
    >
      {!isAuthed ? 'Login' : 'Logout'}
    </button>
  );
}

function NavigationMenu() {
  const { isAuthed } = createMemo(() => {
    // Logic to determine if the user is authenticated
    return true; // Replace with actual logic
  });

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <img
        src="/logo.png"
        alt="Logo"
        className="h-10 w-auto mr-8"
      />
      <ul className="space-y-2 lg:space-y-4 text-white font-medium tracking-wide leading-normal">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </ul>
      <AuthButton isAuthed={isAuthed} />
    </div>
  );
}

export const Default: StoryFn<typeof NavigationMenu> = () => (
  <NavigationMenu />
);