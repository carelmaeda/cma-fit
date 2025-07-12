'use client';

import React from 'react';
import Carousel from './Partials/Carousel';
import { testimonials } from '../data/testimonials';
import Image from 'next/image';
import { MotionVertical } from '../utils/Motions';
import Navbar from './Partials/Navbar';
import { Instagram } from "lucide-react";

export default function Hero () {
  return (
    <section className="hero">
            <Navbar />
      <div className="hero-header">
      <div className="hero-title">
        <MotionVertical>
          <small>3 Month&apos;s body transformation</small>
        </MotionVertical>
        <MotionVertical>
          <h1>Hi! I&apos;m Justin.</h1>
          <p className="hero-subtext">My custom 3-month program will get you fit, strong, and confident.</p>
        </MotionVertical>
      </div>

        <div className="hero-btns">
          {/* <a href="#the program" className="btn-icon btn-icon-outline"><MoveDown size={64}/></a> */}
          <a href="#contact" className="btn btn-primary">Book a call with me</a>
        </div>
      </div>

      
    <div className="avatar-btns">
              <div className="avatar">
            <div className="avatar-stack">
                {testimonials.slice(0, 5).map((testimonial, index) => (
                  <a
                    href="#community"
                    key={index}
                    className={"avatar-wrapper index-${index}"}
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
          <div className="social">
              <a href="https://www.instagram.com/the.lyonsking" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={32} /></a>
              <small>@justin.lyons</small>
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