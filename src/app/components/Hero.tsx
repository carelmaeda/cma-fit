"use client";

import React from "react";
import Carousel from "./Partials/Carousel";
import { testimonials } from "../data/testimonials";
import Image from "next/image";
import Navbar from "./Partials/Navbar";

export default function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero-title">
        <h1>Hi! I&apos;m Justin.</h1>
        <p>
          My personalized fitness plan will get you fit, strong, and confident.
        </p>
      </div>

      <div className="hero-cta">
        <a href="#contact" className="btn btn-primary">
          Book a call with me
        </a>
        <a href="#community" className="btn btn-link">
          <div className="avatar-stack">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className={"avatar-wrapper index-${index}"}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                />
              </div>
            ))}
            <div className="avatar-plus">+</div>
          </div>
          Join the community!
        </a>
      </div>
      <small className="d-none">
        Join the Crew! Only 5 Spots Left This Month
      </small>

      <Carousel />

      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/jl-video-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>
    </div>
  );
}
