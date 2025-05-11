'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Smooth scroll function
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const sectionId = href?.replace('/', '');
        const section = document.querySelector(sectionId || '');
        
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Close mobile menu after clicking a link
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleNavLinkClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleNavLinkClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : styles.headerTransparent}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className="relative w-32 h-10">
            <Image 
              src="/logo.webp" 
              alt="LEDMedia" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link 
              href="#головна" 
              className={`${styles.navLink} ${scrolled ? styles.navLinkDark : styles.navLinkWhite}`}
            >
              Головна
            </Link>
            <Link 
              href="#локації" 
              className={`${styles.navLink} ${scrolled ? styles.navLinkDark : styles.navLinkWhite}`}
            >
              Наші локації
            </Link>
            <Link 
              href="#клієнти" 
              className={`${styles.navLink} ${scrolled ? styles.navLinkDark : styles.navLinkWhite}`}
            >
              Наші клієнти
            </Link>
            <Link 
              href="#про-нас" 
              className={`${styles.navLink} ${scrolled ? styles.navLinkDark : styles.navLinkWhite}`}
            >
              Про нас
            </Link>
            <Link 
              href="#контакти" 
              className={`${styles.navLink} ${scrolled ? styles.navLinkDark : styles.navLinkWhite}`}
            >
              Контакти
            </Link>
          </div>
        </nav>

        {/* Phone number */}
        <a 
          href="tel:+380672221000" 
          className={`${styles.phoneLink} ${scrolled ? styles.phoneBlue : styles.phoneWhite}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +38 067 222 10 00
        </a>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link 
            href="#головна"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Головна
          </Link>
          <Link 
            href="#локації"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Наші локації
          </Link>
          <Link 
            href="#клієнти"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Наші клієнти
          </Link>
          <Link 
            href="#про-нас"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Про нас
          </Link>
          <Link 
            href="#контакти"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Контакти
          </Link>
          <a 
            href="tel:+380672221000" 
            className={styles.mobilePhone}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +38 067 222 10 00
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 