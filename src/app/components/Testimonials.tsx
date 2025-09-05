"use client";
import React from "react";
import Image from "next/image";
import { testimonials } from "../data/testimonials";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Navigation } from "swiper/modules";

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <h2>Our Community</h2>
      <div className="container">
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          navigation={true}
          modules={[Navigation]}
          className="swiper"
          centeredSlides={false}
          grabCursor={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <div className="testimonial-header">
                <div className="testimonial-user">
                  <Image
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    width={32}
                    height={32}
                  />

                  <div className="testimonial-signature">
                    <h6>{testimonial.name}</h6>
                    <small>{testimonial.location}</small>
                  </div>
                </div>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>

              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
