import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Thompson',
    image: '/images/testimonial1.jpg',
    quote:
      'CMA Fit completely changed my life. I feel stronger, healthier, and more confident than ever before!',
  },
  {
    name: 'James Parker',
    image: '/images/testimonial2.jpg',
    quote:
      'The structured program helped me break through plateaus and hit personal bests I never imagined.',
  },
  {
    name: 'Emily Chen',
    image: '/images/testimonial3.jpg',
    quote:
      'Having a personal trainer who genuinely cares made all the difference. Highly recommend CMA Fit!',
  },
  {
    name: 'Carlos Rivera',
    image: '/images/testimonial4.jpg',
    quote:
      'I lost 20 lbs and gained a whole new perspective on fitness. The phases kept me progressing every week.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">What Clients Are Saying</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
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
      </div>
    </section>
  );
};

export default Testimonials;
