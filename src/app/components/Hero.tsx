'use client';

import React from 'react';
import { MoveDown } from "lucide-react";


const Hero: React.FC = () => {
  return (
    <section className="hero">

      <div className="hero-header">
        <h1>3 Month Body Transformation</h1>
        <p>Transform your fitness journey today</p>        
      </div>

      <div className='hero-btns'>
      <a href="#the program" className="btn-icon"><MoveDown /></a>
      <a href="#pricing" className="btn-primary">Get Started</a>
      </div>
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/jl-video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
