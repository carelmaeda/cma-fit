﻿'use client';

import React from 'react';
import { MoveDown } from "lucide-react";
import Carousel from './Partials/Carousel';
import { testimonials } from '../data/testimonials';
import Image from 'next/image';
import { MotionVertical } from '../utils/Motions';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-header">
        <div className="hero-title">
          <MotionVertical>
          <h1>3 Month Body Transformation</h1>
          </MotionVertical>
          <MotionVertical>
          <p className="hero-subtext">We need something here</p>
          </MotionVertical>
        </div>

    <div className="avatar">
      <div className="avatar-stack">
          {testimonials.slice(0, 5).map((testimonial, index) => (
            <a
              href="#community"
              key={index}
              className={`avatar-wrapper index-${index}`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="avatar-img"
              />
            </a>
          ))}
        </div>
        <small>Join the crew!</small>
    </div>
    

        <div className="hero-btns">
          <a href="#the program" className="btn btn-icon-outline"><MoveDown /></a>
          <a href="#contact" className="btn btn-primary">Book a call with me</a>
        </div>
      </div>

      <Carousel />

      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/jl-video-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
