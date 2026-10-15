import { useEffect, useState } from 'react';
import { services } from '../data/services.js';
import { siteConfig } from '../data/siteConfig.js';

const serviceOptions = [
  ...services.map((service) => service.name),
  'Ready-made script',
  'Not sure yet',
];

const emptyForm = { name: '', email: '', company: '', service: '', brief: '' };

export default function Contact({ request }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  // Pre-fill the form when a visitor clicks "Ask about this" on a script.
  useEffect(() => {
    if (!request) return;
    setForm((current) => ({
      ...current,
      service: request.service,
      brief: current.brief || `I'm interested in the ${request.detail} script.`,
    }));
  }, [request]);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // No form endpoint set: open the visitor's email app with the details filled in.
    if (!siteConfig.formEndpoint) {
      const subject = `Enquiry: ${form.service || 'General'}`;
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company}`,
        '',
        form.brief,
      ].join('\n');
      window.location.href =
        `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
      setStatus({
        state: 'mailto',
        message: `Your email app should open with the details filled in. If it does not, email ${siteConfig.email}.`,
      });
      return;
    }

    setStatus({ state: 'sending', message: 'Sending your enquiry...' });
    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      setForm(emptyForm);
      setStatus({ state: 'sent', message: 'Thanks. Your enquiry has been sent.' });
    } catch {
      setStatus({
        state: 'error',
        message: `That did not send. Email ${siteConfig.email} instead.`,
      });
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <h2>Tell us what you need</h2>
          <p className="split-note">
            Describe the problem in your own words. We reply by email, usually within one working day.
          </p>

          <ul className="direct-links">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={`https://wa.me/${siteConfig.whatsappNumber}`}>WhatsApp us</a>
            </li>
            <li>
              <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer">
                Message us on Facebook
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label className="field">
              <span>Your name</span>
              <input
                name="name"
                value={form.name}
                onChange={update}
                autoComplete="name"
                required
              />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="field">
            <span>Company (optional)</span>
            <input
              name="company"
              value={form.company}
              onChange={update}
              autoComplete="organization"
            />
          </label>

          <label className="field">
            <span>What do you need?</span>
            <select name="service" value={form.service} onChange={update} required>
              <option value="">Choose one</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Tell us about the work</span>
            <textarea name="brief" rows="6" value={form.brief} onChange={update} required />
          </label>

          <div className="form-footer">
            <button type="submit" className="button button-primary">
              Send enquiry
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status.message}
            </p>
          </div>

          <p className="fine-print">We only use your details to reply to your enquiry.</p>
        </form>
      </div>
    </section>
  );
}
