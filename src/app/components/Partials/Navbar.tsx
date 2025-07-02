'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MoveRight, Instagram } from 'lucide-react';

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ['The Program', 'Community', 'About', 'FAQ'];

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Image src="/images/jl-logo-white.png" alt="Justin Lyons Logo" width={746} height={100} />
      </Link>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(label => (
          <li key={label}>
            <Link href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {label} <MoveRight className="nav-icon" />
            </Link>
          </li>
        ))}
        <li className="nav-socials">
          <a
            href="https://www.instagram.com/the.lyonsking"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

