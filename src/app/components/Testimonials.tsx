import React from 'react';
import Image from 'next/image';
import { testimonials } from '../data/testimonials';


const Testimonials: React.FC = () => {
  return (
    <section className="testimonial-section">
      <h2>Our Community</h2>
      <div className="testimonial-content">

        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
              <blockquote className="testimonial-quote">
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>

                <div className='testimonial-footer'>
                <Image
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  width={80}
                  height={80}
                />
                <div className='testimonial-signature'>
                    <h6>{testimonial.name}</h6>
                    <small>{testimonial.location}</small>
                </div>
                </div>
          </div>
        ))}

    </div>
    </section>
  );
};

export default Testimonials;