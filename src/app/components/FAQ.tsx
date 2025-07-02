'use client';
import React from 'react';

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

export default function FAQ () {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <details key={index}>
            <summary>
              {faq.question}
              <span className="faq-toggle-icon">+</span>
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

