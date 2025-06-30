'use client';

import React from 'react';
import Image from 'next/image';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonial-section">
      <h2>Our Community</h2>

      <div className="testimonial-carousel-container">
        <div className="testimonial-carousel-wrapper">
          <div className="testimonial-marquee">
            <div className="testimonial-marquee-content">
              {[...Array(3)].map((_, loopIndex) => (
                <React.Fragment key={loopIndex}>
                  {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={`${loopIndex}-${index}`}>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                      <blockquote className="testimonial-quote">
                        <p>&ldquo;{testimonial.quote}&rdquo;</p>
                      </blockquote>
                      <div className="testimonial-footer">
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
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
