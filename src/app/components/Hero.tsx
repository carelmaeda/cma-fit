'use client';

import React from 'react';
import { MoveDown } from "lucide-react";
import Carousel from './Partials/Carousel';



const Hero: React.FC = () => {
  return (
    <section className="hero">

      <div className="hero-header">
        <div>
          <h1>3 Month Body Transformation</h1>
          <p>Transform your fitness journey today</p>      
        </div>

      <div className='hero-btns'>
      <a href="#the program" className="btn btn-icon-outline"><MoveDown /></a>
      <a href="#pricing" className="btn btn-primary">Get Started</a>
      </div>
      </div>

      <Carousel/>

      <video autoPlay loop muted playsInline>
        <source src="/videos/jl-video-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
