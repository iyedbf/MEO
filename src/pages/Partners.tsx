import { Link } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD } from '../theme';

const partnerTypes = [
  { title: 'Real Estate Developers', desc: 'Strategic partnerships with leading real estate development firms for joint ventures and co-development opportunities.' },
  { title: 'Architecture Firms', desc: 'Collaboration with world-class architectural practices to deliver integrated design and development solutions.' },
  { title: 'Interior Design Studios', desc: 'Partnerships with prestigious design studios to offer comprehensive interior solutions to our clients.' },
  { title: 'Investment Groups', desc: 'Working with private equity and real estate investment firms to identify and execute high-yield opportunities.' },
  { title: 'Luxury Brands', desc: 'Exclusive supply partnerships with leading luxury furniture and materials manufacturers globally.' },
  { title: 'Contractors & Builders', desc: 'A vetted network of specialist contractors ensuring the highest quality of workmanship on every project.' },
];

const benefits = [
  'Access to exclusive project pipeline',
  'Collaborative international opportunities',
  'Shared luxury brand positioning',
  'Joint marketing and visibility',
];

export default function Partners() {
  return (
    <div style={{ background: '#0A0A0A' }}>

      {/* Page header */}
      <section style={{ background: CHARCOAL, borderBottom: `1px solid ${DARK_BORDER}`, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 5, textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>Our Network</div>
          <h1 style={{ color: OFF_WHITE, fontSize: 52, fontWeight: 200, margin: 0 }}>
            Strategic <span style={{ color: GOLD, fontWeight: 700 }}>Partners</span>
          </h1>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px' }}>

        {/* Intro */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>Collaboration</div>
          <h2 style={{ color: OFF_WHITE, fontSize: 38, fontWeight: 300, marginBottom: 12 }}>Built on Trust</h2>
          <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 16 }} />
          <p style={{ color: GREY, fontSize: 15, lineHeight: 1.7, maxWidth: 620 }}>
            Our network of strategic partners enables us to deliver comprehensive, world-class solutions
            across every dimension of property development and design.
          </p>
        </div>

        {/* Partner types grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: DARK_BORDER, marginBottom: 60 }}>
          {partnerTypes.map((pt, i) => (
            <div key={i} style={{ background: DARK_CARD, padding: '36px 32px' }}>
              <div style={{
                width: 40, height: 40, border: `1px solid ${GOLD}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
              }}>
                <div style={{ width: 12, height: 12, background: GOLD }} />
              </div>
              <h3 style={{ color: OFF_WHITE, fontSize: 15, fontWeight: 600, marginBottom: 12, letterSpacing: 0.3 }}>{pt.title}</h3>
              <p style={{ color: GREY, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{pt.desc}</p>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: `1px solid ${DARK_BORDER}` }}>
          <div style={{ background: GOLD, padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: BLACK, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>
              Become a Partner
            </div>
            <h2 style={{ color: BLACK, fontSize: 32, fontWeight: 700, margin: '0 0 16px', lineHeight: 1.2 }}>
              Let's Build Something Extraordinary Together
            </h2>
            <p style={{ color: `${BLACK}99`, fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
              We are always open to new partnerships that align with our values of excellence, innovation, and integrity.
            </p>
            <Link to="/contact" style={{
              background: BLACK, color: GOLD, padding: '14px 32px',
              fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-block', alignSelf: 'flex-start',
            }}>
              Get in Touch
            </Link>
          </div>

          <div style={{ background: CHARCOAL, padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, color: OFF_WHITE, fontSize: 14 }}>
                <div style={{ width: 6, height: 6, background: GOLD, flexShrink: 0 }} />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
