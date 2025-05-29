'use client';

import { useEffect } from 'react';

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="calendly-section">
      <div className="calendly-header">
        <h2>Book Your Free Consultation</h2>
        <p>
          Choose a time that works for you and I'll take care of the rest.
        </p>
      </div>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/carelmaeda/30min?name=Carel&email=carelmaeda@gmail.com"
        style={{ minWidth: '320px', height: '900px' }}
        aria-label="Schedule a meeting through Calendly"
      ></div>
    </section>
  );
}
