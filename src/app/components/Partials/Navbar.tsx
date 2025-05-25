'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MoveRight, Instagram, Facebook, Youtube } from "lucide-react";
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
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

          {/* Social media links */}
          <li className="nav-socials">
              <a href="https://www.instagram.com/the.lyonsking" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={28} />
              </a>
              {/* <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={28} />
              </a>
              <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={28} />
              </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
