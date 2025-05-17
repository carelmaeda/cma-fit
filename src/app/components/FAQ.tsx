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

const FAQ: React.FC = () => {
  return (
    <section className="faq-section container">
        <h2 className="text-center">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default FAQ;
