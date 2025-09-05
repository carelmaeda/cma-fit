"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Image
          src="/images/jl-logo-white.png"
          alt="Justin Lyons Logo"
          width={1119}
          height={150}
        />
      </Link>
      <a
        href="https://www.instagram.com/the.lyonsking"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="social"
      >
        <Instagram size={64} />
        <small>@the.lyonsking</small>
      </a>
    </nav>
  );
}
