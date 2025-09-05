"use client";
import React from "react";

const faqs = [
  {
    question: "What experience does the trainer have?",
    answer:
      "Justin has over 10 years of hands-on experience in personal training, strength coaching, and sports performance.",
  },
  {
    question: "Is the program suitable for beginners?",
    answer:
      "Absolutely! Justin has coached all fitnesss levels, from people with mobility issues to professional athlets. He's personalized program with have mobility work and strenght training catered to your personal needs",
  },
  {
    question: "Do I need access to a gym?",
    answer:
      "While a gym is preferred, many of the workouts can be modified for home use with minimal equipment.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Results vary, but many clients report noticeable improvements in strength, energy, and confidence within the first 4 weeks.",
  },
  {
    question: "How will I be held accountable?",
    answer:
      "Through my app we have weekly accountability check-in ins, as well as food tracking, Strenght tracking, Supplement Guidance",
  },
];

export default function FAQ() {
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
}
