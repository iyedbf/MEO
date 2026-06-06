import { useState } from 'react';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD } from '../theme';
import PageHeader from '../components/PageHeader';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', background: CHARCOAL, border: `1px solid ${DARK_BORDER}`,
    padding: '14px 16px', color: OFF_WHITE, fontSize: 13,
    outline: 'none', fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', color: GREY, fontSize: 10,
    letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8,
  };

  return (
    <div style={{ background: '#0A0A0A' }}>

      <PageHeader eyebrow="Get in Touch" titleLight="Contact" titleBold="Us" watermark="CONTACT" />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', border: `1px solid ${DARK_BORDER}` }}>

          {/* Info panel */}
          <div style={{ background: CHARCOAL, padding: 48, borderRight: `1px solid ${DARK_BORDER}` }}>
            <div style={{ color: GOLD, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 32, fontWeight: 600 }}>
              Contact Details
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Phone</div>
              <div style={{ color: GOLD, fontSize: 18, fontWeight: 600 }}>+1 754 284 91 10</div>
            </div>

            <div style={{ width: '100%', height: 1, background: DARK_BORDER, margin: '24px 0' }} />

            <div style={{ marginBottom: 28 }}>
              <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Company</div>
              <div style={{ color: OFF_WHITE, fontSize: 14 }}>MEO Development LLC</div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Services</div>
              {['Property Investment Consultancy', 'Home Improvement & Renovation', 'Design & Development'].map((s, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  color: OFF_WHITE, fontSize: 12, padding: '8px 0',
                  borderBottom: `1px solid ${DARK_BORDER}`,
                }}>
                  <div style={{ width: 4, height: 4, background: GOLD, flexShrink: 0 }} />
                  {s}
                </div>
              ))}
            </div>

            <div style={{ background: `${GOLD}11`, border: `1px solid ${GOLD}44`, padding: 16 }}>
              <div style={{ color: GOLD, fontSize: 12, lineHeight: 1.7 }}>
                We serve local and international clients worldwide. Our team is available to discuss your project at any time.
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div style={{ background: DARK_CARD, padding: 48 }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 20, textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, border: `2px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: GOLD, fontSize: 24 }}>✓</span>
                </div>
                <h2 style={{ color: OFF_WHITE, fontSize: 28, fontWeight: 300, margin: 0 }}>Message Sent</h2>
                <p style={{ color: GREY, fontSize: 14, maxWidth: 360 }}>
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    background: 'none', color: GOLD, border: `1px solid ${GOLD}`,
                    padding: '12px 28px', fontSize: 11, letterSpacing: 2,
                    textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div style={{ color: OFF_WHITE, fontSize: 24, fontWeight: 300, marginBottom: 8 }}>Send Us a Message</div>
                <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 16 }} />
                <p style={{ color: GREY, fontSize: 13, lineHeight: 1.7, marginBottom: 32 }}>
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>First Name</label>
                      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" required style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required style={inputStyle} />
                    </div>
                  </div>

                  {[
                    { name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                    { name: 'phone', label: 'Phone Number', placeholder: '+1 (000) 000-0000', type: 'tel' },
                    { name: 'subject', label: 'Subject', placeholder: 'Property Investment Inquiry', type: 'text' },
                  ].map(f => (
                    <div key={f.name} style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>{f.label}</label>
                      <input
                        name={f.name}
                        type={f.type}
                        value={(form as any)[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        required
                        style={inputStyle}
                      />
                    </div>
                  ))}

                  <div style={{ marginBottom: 28 }}>
                    <label style={labelStyle}>Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project or inquiry..."
                      rows={5}
                      required
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" style={{
                    width: '100%', background: GOLD, color: BLACK, border: 'none',
                    padding: '16px', fontSize: 12, fontWeight: 700,
                    letterSpacing: 2.5, textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit',
                    transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
