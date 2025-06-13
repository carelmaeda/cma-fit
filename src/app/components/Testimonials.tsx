'use client';

import React from 'react';
import Image from 'next/image';
import { testimonials } from '../data/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonial-section">
      <h2>Our Community</h2>

      <div className="testimonial-swiper-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="testimonial-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <blockquote className="testimonial-quote">
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
                <div className="testimonial-footer">
                  <Image
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    width={60}
                    height={60}
                    className="testimonial-image"
                  />
                  <div className="testimonial-signature">
                    <h6>{testimonial.name}</h6>
                    <small>{testimonial.location}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
