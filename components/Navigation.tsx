import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

const Nav = () => {
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const scrollToSection = (id) => {
    if (router.pathname !== `/`) {
      return;
    }
    const section = document.getElementById(id);
    if (!section) {
      return;
    }
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
          <span className={styles.text}>MyApp</span>
        </Link>
        <button
          onClick={handleMenuToggle}
          className={styles.hamburgerButton}
          aria-label="Open menu"
        >
          {isMobileOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
      <ul className={`${styles.menu} ${styles.is-mobile-open: isMobileOpen}`}>
        <li>
          <Link href="/" onClick={() => scrollToSection('home')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={() => scrollToSection('about')}>
            About
          </Link>
        </li>
        {/* Add more navigation items here */}
      </ul>
      {isMobileOpen && (
        <div className={styles.dropdown}>
          <button onClick={() => handleMenuToggle()} className={styles.closeButton}>
            Close
          </button>
          <ul className={`${styles.menu} ${styles.is-mobile-open: !isMobileOpen}`}>
            <li>
              <Link href="/" onClick={() => scrollToSection('home')}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => scrollToSection('about')}>
                About
              </Link>
            </li>
            {/* Add more navigation items here */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

.nav {
  position: sticky;
  top: 0;
  background-color: var(--bg-dark);
  color: var(--text-light);
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  color: var(--text-light);
}

.text {
  font-weight: bold;
  margin-right: 1rem;
}

.hamburgerButton,
.closeButton {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline: none;
}

.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu li {
  display: inline-block;
  margin-right: 2rem;
}

.is-mobile-open .menu ul {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--bg-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.is-mobile-open .closeButton {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

@supports (prefers-color-scheme: dark) {
  :root {
    --bg-dark: #2c3e50;
    --text-light: #ffffff;
  }
}