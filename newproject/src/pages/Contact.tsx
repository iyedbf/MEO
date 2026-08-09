import { useState, type FormEvent } from 'react';
import PageHero from '../components/PageHero';
import { company } from '../config/site';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: no backend wired up yet — replace with a real submit handler
    // (API call, mailto, or form service) once one is available.
    setSubmitted(true);
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={<>Let&rsquo;s Discuss <strong>Your Mission.</strong></>}
        lead="Reach out to learn more about our capabilities or to start scoping a program."
        compact
      />

      <section className="section container contact-grid">
        <div className="card contact-info">
          <h3>Contact Information</h3>
          <div className="contact-info-row">
            <span className="contact-info-label">Address</span>
            <span>{company.address}</span>
          </div>
          <div className="contact-info-row">
            <span className="contact-info-label">Phone</span>
            <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}>{company.phone}</a>
          </div>
          <div className="contact-info-row">
            <span className="contact-info-label">Email</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
          <div className="contact-info-row">
            <span className="contact-info-label">CAGE Code</span>
            <span>{company.cageCode}</span>
          </div>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          {submitted ? (
            <div className="contact-success">
              Thanks — your message has been recorded. We&rsquo;ll follow up shortly.
            </div>
          ) : (
            <>
              <div className="contact-field-row">
                <label className="contact-field">
                  <span>Full Name</span>
                  <input type="text" name="name" required placeholder="Jane Doe" />
                </label>
                <label className="contact-field">
                  <span>Organization</span>
                  <input type="text" name="organization" placeholder="Agency / Company" />
                </label>
              </div>
              <div className="contact-field-row">
                <label className="contact-field">
                  <span>Email</span>
                  <input type="email" name="email" required placeholder="you@example.com" />
                </label>
                <label className="contact-field">
                  <span>Phone</span>
                  <input type="tel" name="phone" placeholder="(555) 555-5555" />
                </label>
              </div>
              <label className="contact-field">
                <span>How can we help?</span>
                <textarea name="message" required rows={5} placeholder="Tell us about your program or requirement..." />
              </label>
              <button type="submit" className="btn btn-gold contact-submit">
                Submit Inquiry
              </button>
            </>
          )}
        </form>
      </section>
    </div>
  );
}
