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
    } catch (err: unknown) {
      // Log the error so it's "used"
      console.error('Send message failed:', err);
      setStatus('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact me</h2>
     </div>

    <form onSubmit={handleSubmit}>
        <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            id="name"
            required
        />
        </div>

        <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            required
        />
        </div>

        <div className="input-group">
        <label htmlFor="message">Message</label>
        <textarea
            name="message"
            id="message"
            rows={5}
            className="contact-textarea"
            required
        ></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status && <p className="contact-status">{status}</p>}
    </form>
    </section>
  );
}
