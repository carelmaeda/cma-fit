'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [expandedQuotes, setExpandedQuotes] = useState(new Set());
  const [quotesNeedingExpand, setQuotesNeedingExpand] = useState(new Set());
  const quoteRefs = useRef(new Map());

  useEffect(() => {
    // Check which quotes need expand functionality
    const needsExpand = new Set();
    
    quoteRefs.current.forEach((ref, key) => {
      if (ref) {
        // Temporarily expand to measure full height
        const originalMaxHeight = ref.style.maxHeight;
        const originalOverflow = ref.style.overflow;
        ref.style.maxHeight = 'none';
        ref.style.overflow = 'visible';
        
        const fullHeight = ref.scrollHeight;
        const lineHeight = parseFloat(window.getComputedStyle(ref).lineHeight);
        const threeLineHeight = lineHeight * 3;
        
        // Restore original styles
        ref.style.maxHeight = originalMaxHeight;
        ref.style.overflow = originalOverflow;
        
        if (fullHeight > threeLineHeight) {
          needsExpand.add(key);
        }
      }
    });
    
    setQuotesNeedingExpand(needsExpand);
  }, []);

  const toggleExpand = (testimonialKey: string) => {
    setExpandedQuotes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(testimonialKey)) {
        newSet.delete(testimonialKey);
      } else {
        newSet.add(testimonialKey);
      }
      return newSet;
    });
  };

  const setQuoteRef = (testimonialKey: string, ref: HTMLParagraphElement | null) => {
    if (ref) {
      quoteRefs.current.set(testimonialKey, ref);
    }
  };

  return (
    <section className="testimonial-section">
      <h2>Our Community</h2>
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {[...Array(3)].map((_, loopIndex) => (
            <React.Fragment key={loopIndex}>
              {testimonials.map((testimonial, index) => {
                const testimonialKey = `${loopIndex}-${index}`;
                const isExpanded = expandedQuotes.has(testimonialKey);
                const needsExpand = quotesNeedingExpand.has(testimonialKey);
                
                return (
                  <div className="testimonial-card" key={testimonialKey}>
                    <div className="testimonial-header">
                      <div className='testimonial-user'>
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
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                    <blockquote className="testimonial-quote">
                      <p 
                        ref={(ref) => setQuoteRef(testimonialKey, ref)}
                        className={`quote-text ${!isExpanded && needsExpand ? 'truncated' : ''}`}
                      >
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      {needsExpand && (
                        <button
                          className="expand-btn"
                          onClick={() => toggleExpand(testimonialKey)}
                          aria-label={isExpanded ? 'Show less' : 'Show more'}
                        >
                          {isExpanded ? 'Less' : 'More'}
                        </button>
                      )}
                    </blockquote>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};