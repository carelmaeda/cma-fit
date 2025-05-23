﻿import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Thompson',
    image: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'This program completely changed my life. I feel stronger, healthier, and more confident than ever before!',
    location: 'King West',
  },
  {
    name: 'Carel Maeda',
    image: 'https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-19/399930888_1474791029984558_5228796299509557522_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QHiLFcpfq0FT6DB7EVN0Vrzbo_RyfM7iPbOjsd8WESqYoe2BIvsbkK1vsohxgIIL94&_nc_ohc=BoxxJV8JAvMQ7kNvwFoiHwM&_nc_gid=Ec3zpHkDqz-A3yZdidWX9g&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfJC2fA1AH212sPMG8sAuFdpmWLGb01YuL0BYScRdy67Zg&oe=68310FD0&_nc_sid=7d3ac5',
    quote: 'This program completely changed my life. I feel stronger, healthier, and more confident than ever before!',
    location: 'Trinity Bellwods',
  },
  {
    name: 'James Parker',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'The structured program helped me break through plateaus and hit personal bests I never imagined.',
    location: 'King West',
  },
  {
    name: 'Emily Chen',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'Having a personal trainer who genuinely cares made all the difference. Highly recommend Justin Lyons!',
    location: 'King West',
  },
  {
    name: 'Carlos Rivera',
    image: 'https://images.unsplash.com/photo-1600603405959-6d623e92445c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'I lost 20 lbs and gained a whole new perspective on fitness. The phases kept me progressing every week.',
    location: 'King West',
  },
];

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