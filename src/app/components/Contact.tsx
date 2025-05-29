'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message || 'Something went wrong');
      form.reset();
    } catch (err) {
      setStatus('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="name" className="contact-label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="contact-input"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email" className="contact-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="contact-input"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              className="contact-textarea"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
