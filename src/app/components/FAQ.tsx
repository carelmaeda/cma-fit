'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What experience does the trainer have?',
    answer:
      'Our trainer has over 10 years of hands-on experience in personal training, strength coaching, and sports performance.',
  },
  {
    question: 'Is the program suitable for beginners?',
    answer:
      'Absolutely! The program is designed to accommodate all fitness levels with clear progression through each phase.',
  },
  {
    question: 'Do I need access to a gym?',
    answer:
      'While a gym is helpful, many of the workouts can be modified for home use with minimal equipment.',
  },
  {
    question: 'How quickly will I see results?',
    answer:
      'Results vary, but many clients report noticeable improvements in strength, energy, and confidence within the first 4 weeks.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container">
      <h2 className="text-center">Frequently Asked Questions</h2>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleIndex(index)}
            >
              {faq.question}
              <span className="faq-toggle-icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div
              className={`faq-answer ${activeIndex === index ? 'open' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
