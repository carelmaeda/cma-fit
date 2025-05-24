'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MoveRight } from "lucide-react";
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
                {label} <MoveRight className='nav-icon'/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
