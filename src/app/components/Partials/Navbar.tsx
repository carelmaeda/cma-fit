'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MoveRight, Instagram } from "lucide-react";
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px → hide navbar
        setNavbarVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        // Scrolling up or near top → show navbar
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add passive: true for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`nav-container ${!navbarVisible ? 'hidden' : ''}`}>
      <div className="navbar">
        <div className="nav-header">
          <Link href="/" className="logo">         
            <Image src="/images/jl-logo.png" alt="Justin Lyons Logo" width={746} height={100} />
          </Link>
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        <ul className={`nav-dropdown ${menuOpen ? 'open' : ''}`}>
          {['The Program', 'Community', 'About', 'FAQ'].map((label) => (
            <li key={label}>
              <Link href={`#${label.toLowerCase()}`} onClick={closeMenu}>
                {label} <MoveRight className='nav-icon' />
              </Link>
            </li>
          ))}

          <li className="nav-socials">
              <a href="https://www.instagram.com/the.lyonsking" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={28} />
              </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;