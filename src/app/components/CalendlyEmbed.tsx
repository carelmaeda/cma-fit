"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="calendly-section">
      <div className="calendly-header">
        <h2>Book a Free Call</h2>
        <p>
          We&apos;ll break down your goals, sketch out a 12-week plan, and make
          sure you&apos;re set up for success.
        </p>
      </div>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/justin_lyons3/30min"
        style={{ minWidth: "320px", height: "900px" }}
        aria-label="Schedule a meeting with me through Calendly"
      ></div>
    </section>
  );
}
