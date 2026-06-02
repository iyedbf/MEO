import { Link } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD, GOLD_MUTED } from '../theme';
import { siteImages } from '../images';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '12', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const services = [
  {
    number: '01',
    title: 'Property Investment Consultancy',
    description: 'Expert guidance through the complexities of real estate and land markets, from acquisition to portfolio optimization.',
    path: '/services',
    image: siteImages.investment,
  },
  {
    number: '02',
    title: 'Home Improvement & Renovation',
    description: 'High-quality renovation services transforming properties into aesthetically refined and highly functional living spaces.',
    path: '/services',
    image: siteImages.renovation,
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Custom-built luxury furniture and bespoke design solutions for commercial, hospitality, and residential projects.',
    path: '/design',
    image: siteImages.bespokeDesign,
  },
];

const recentProjects = [
  { type: 'Private Mansion', year: '2025', category: 'Mansion', image: siteImages.mansion },
  { type: 'Penthouse Suite', year: '2025', category: 'Penthouse', image: siteImages.penthouse },
  { type: 'Boutique Hotel', year: '2025', category: 'Hotel', image: siteImages.hotel },
  { type: 'Fine Dining', year: '2025', category: 'Restaurant', image: siteImages.restaurant },
];

export default function Home() {
  return (
    <div style={{ background: BLACK }}>

      {/* Hero */}
      <section style={{
        minHeight: 620,
        background: `linear-gradient(90deg, ${CHARCOAL} 0%, ${CHARCOAL} 42%, rgba(20,20,20,0.72) 100%), url(${siteImages.heroVilla}) center right / cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        borderBottom: `1px solid ${DARK_BORDER}`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative vertical lines */}
        <div style={{ position: 'absolute', right: 80, top: 0, bottom: 0, width: 1, background: DARK_BORDER }} />
        <div style={{ position: 'absolute', right: 200, top: 60, bottom: 60, width: 1, background: `${GOLD}18` }} />
        <div style={{ position: 'absolute', top: 40, left: 0, right: 0, height: 1, background: DARK_BORDER }} />
        <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, height: 1, background: DARK_BORDER }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px', width: '100%' }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 5, textTransform: 'uppercase', marginBottom: 24, fontWeight: 600 }}>
            Luxury Property Development
          </div>
          <h1 style={{ color: OFF_WHITE, fontSize: 64, fontWeight: 200, margin: 0, lineHeight: 1.05, letterSpacing: -1, maxWidth: 720 }}>
            Innovative
          </h1>
          <h1 style={{ color: GOLD, fontSize: 64, fontWeight: 700, margin: '0 0 32px', lineHeight: 1.05, letterSpacing: -1 }}>
            Property Solutions.
          </h1>
          <p style={{ color: GREY, fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 48 }}>
            We provide a full spectrum of advisory services to guide investors through the complexities
            of the real estate and land markets.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/projects" style={{
              background: GOLD, color: BLACK, padding: '16px 40px',
              fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', textDecoration: 'none',
            }}>
              View Projects
            </Link>
            <Link to="/services" style={{
              background: 'none', color: OFF_WHITE, border: `1px solid ${DARK_BORDER}`,
              padding: '16px 40px', fontSize: 11, fontWeight: 400, letterSpacing: 2.5, textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{
        background: CHARCOAL,
        borderBottom: `1px solid ${DARK_BORDER}`,
        borderTop: `1px solid ${GOLD}33`,
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '32px 24px', textAlign: 'center',
              borderLeft: `1px solid ${DARK_BORDER}`,
            }}>
              <div style={{ color: GOLD, fontSize: 44, fontWeight: 300, lineHeight: 1, letterSpacing: -1 }}>{s.value}</div>
              <div style={{ color: GREY, fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>What We Do</div>
          <h2 style={{ color: OFF_WHITE, fontSize: 38, fontWeight: 300, letterSpacing: 0.5, marginBottom: 12 }}>Bespoke Services</h2>
          <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 16 }} />
          <p style={{ color: GREY, fontSize: 15, lineHeight: 1.7, maxWidth: 580 }}>
            MEO Development LLC offers a comprehensive suite of luxury property and design services
            tailored to the most discerning clients.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: DARK_BORDER }}>
          {services.map(svc => (
            <Link key={svc.number} to={svc.path} style={{
              background: DARK_CARD, padding: 0,
              textDecoration: 'none', display: 'block',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#202020')}
              onMouseLeave={e => (e.currentTarget.style.background = DARK_CARD)}
            >
              <div style={{ height: 180, position: 'relative', overflow: 'hidden' }}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.62) saturate(0.9)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 20%, ${DARK_CARD} 100%)` }} />
                <div style={{ position: 'absolute', left: 24, bottom: 18, color: GOLD_MUTED, fontSize: 48, fontWeight: 700, lineHeight: 1, fontFamily: 'Georgia, serif' }}>
                  {svc.number}
                </div>
              </div>
              <div style={{ padding: '28px 32px 36px' }}>
                <div style={{ width: 32, height: 2, background: GOLD, marginBottom: 20 }} />
                <h3 style={{ color: OFF_WHITE, fontSize: 17, fontWeight: 600, marginBottom: 12, lineHeight: 1.3 }}>{svc.title}</h3>
                <p style={{ color: GREY, fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>{svc.description}</p>
                <div style={{ color: GOLD, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gold CTA banner */}
      <section style={{ background: GOLD, padding: '44px 32px' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ color: BLACK, fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
              Ready to Elevate Your Property?
            </div>
            <div style={{ color: `${BLACK}99`, fontSize: 14, marginTop: 6 }}>
              Catering to both local and international clients worldwide.
            </div>
          </div>
          <Link to="/contact" style={{
            background: BLACK, color: GOLD, padding: '16px 40px',
            fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none', flexShrink: 0,
          }}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Recent Projects */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>Portfolio</div>
            <h2 style={{ color: OFF_WHITE, fontSize: 38, fontWeight: 300, marginBottom: 12 }}>Recent Projects</h2>
            <div style={{ width: 60, height: 2, background: GOLD }} />
          </div>
          <Link to="/projects" style={{
            background: 'none', color: GOLD, border: `1px solid ${GOLD}`,
            padding: '12px 28px', fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none',
          }}>
            View All
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {recentProjects.map((p, i) => (
            <div key={i} style={{ background: DARK_CARD, border: `1px solid ${DARK_BORDER}`, overflow: 'hidden' }}>
              <div style={{
                height: 220, background: CHARCOAL,
                display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
              }}>
                <img
                  src={p.image}
                  alt={p.type}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.72) saturate(0.9)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(10,10,10,0.72) 100%)' }} />
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: GOLD, color: BLACK,
                  fontSize: 9, fontWeight: 700, padding: '4px 8px', letterSpacing: 1.5,
                }}>
                  {p.year}
                </div>
              </div>
              <div style={{ padding: '16px 20px' }}>
                <div style={{ color: GOLD, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 6 }}>
                  {p.category}
                </div>
                <div style={{ color: OFF_WHITE, fontSize: 15, fontWeight: 600 }}>{p.type}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
