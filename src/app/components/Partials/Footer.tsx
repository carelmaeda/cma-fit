import React from 'react';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
          <div className="footer-brand">
          <Link href="/" className="logo">         
            <Image src="/images/jl-logo-white.png" alt="Justin Lyons Logo" width={746} height={100} />
          </Link>
            <p>My simple 3-month program will get you fit, strong, and confident.</p>
          </div>

          <div className="footer-links">
            <h5>Quick Links</h5>
            <ul className="">
              <li><a href="#about">About</a></li>
              <li><a href="#theprogram">Program</a></li>
              <li><a href="#audience">Testimonials</a></li>
              <li><a href="#contact">Book a Call</a></li>
            </ul>
          </div>

            <div className="footer-social">
              <h5>Let&apos;s Connect</h5>
              <a href="https://www.instagram.com/the.lyonsking" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={32} /></a>
            </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Justin Lyons. All rights reserved.</small>
        </div>
    </footer>
  );
};

export default Footer;
