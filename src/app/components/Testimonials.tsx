'use client';
import React from 'react';
import Image from 'next/image';
import { testimonials } from '../data/testimonials';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <h2>Our Community</h2>
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="testimonial-swiper"
        centeredSlides={false}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            spaceBetween: 16,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: "auto",
            spaceBetween: 24,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className='testimonial-user'>
                  <Image
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    width={32}
                    height={32}
                    className="testimonial-image"
                  />
                  
                  <div className="testimonial-signature">
                    <h6>{testimonial.name}</h6>
                    <small>{testimonial.location}</small>
                  </div>
                </div>
                
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
              
              <blockquote className="testimonial-quote">
                <p className="quote-text">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};