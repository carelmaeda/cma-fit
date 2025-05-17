import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Thompson',
    image: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'This program completely changed my life. I feel stronger, healthier, and more confident than ever before!',
  },
  {
    name: 'James Parker',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'The structured program helped me break through plateaus and hit personal bests I never imagined.',
  },
  {
    name: 'Emily Chen',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Having a personal trainer who genuinely cares made all the difference. Highly recommend CMA Fit!',
  },
  {
    name: 'Carlos Rivera',
    image: 'https://images.unsplash.com/photo-1600603405959-6d623e92445c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'I lost 20 lbs and gained a whole new perspective on fitness. The phases kept me progressing every week.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section container-fluid">
        <h2 className="text-center">What Clients Are Saying</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card h-100 testimonial-card shadow-sm text-center p-3">
                <div className="testimonial-img-wrapper mx-auto mb-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-circle object-fit-cover"
                  />
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <h6 className="mt-3 mb-0">{testimonial.name}</h6>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Testimonials;
