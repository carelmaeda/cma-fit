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
             Choose a time that works for you and I&apos;ll take care of the rest.
        </p>
      </div>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/justin_lyons3/30min"
        style={{ minWidth: '320px', height: '900px' }}
        aria-label="Schedule a meeting with me through Calendly"
      ></div>
    </section>
  );
}
