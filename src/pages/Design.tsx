import { GOLD, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD } from '../theme';
import { siteImages } from '../images';

const segments = [
  {
    title: 'Commercial Projects',
    desc: 'Bespoke design solutions for offices, retail spaces, and commercial environments that reflect brand identity and inspire productivity.',
    image: siteImages.commercial,
  },
  {
    title: 'Hotels & Hospitality',
    desc: 'Crafting immersive hospitality experiences — from boutique hotels to international chains — with luxury furniture and curated interiors.',
    image: siteImages.hotel,
  },
  {
    title: 'Restaurants & F&B',
    desc: 'Transforming dining environments with custom furnishings and refined design concepts that elevate the guest experience.',
    image: siteImages.restaurant,
  },
  {
    title: 'Luxury Residences',
    desc: 'Delivering exceptional interiors for mansions, penthouses, and high-standard residences with fully bespoke furniture and finishes.',
    image: siteImages.penthouse,
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'Understanding your vision, requirements, and aspirations.' },
  { step: '02', title: 'Concept', desc: 'Developing design concepts tailored to your unique brief.' },
  { step: '03', title: 'Design', desc: 'Detailed design development with material selection.' },
  { step: '04', title: 'Production', desc: 'Bespoke manufacturing with master craftsmen.' },
  { step: '05', title: 'Delivery', desc: 'White-glove installation and final handover.' },
];

export default function Design() {
  return (
    <div style={{ background: '#0A0A0A' }}>

      {/* Page header */}
      <section style={{ background: CHARCOAL, borderBottom: `1px solid ${DARK_BORDER}`, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 5, textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>
            Craftsmanship & Vision
          </div>
          <h1 style={{ color: OFF_WHITE, fontSize: 52, fontWeight: 200, margin: 0 }}>
            Design & <span style={{ color: GOLD, fontWeight: 700 }}>Development</span>
          </h1>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px' }}>

        {/* Intro */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 80 }}>
          <div>
            <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 24 }} />
            <p style={{ color: OFF_WHITE, fontSize: 20, lineHeight: 1.6, fontWeight: 300, marginBottom: 20 }}>
              Every home and property requires a unique approach to design and development.
            </p>
            <p style={{ color: GREY, fontSize: 14, lineHeight: 1.9, marginBottom: 16 }}>
              MEO Development LLC provides a wide range of high-end luxury furniture and bespoke design
              solutions, spanning from commercial projects to hotels and restaurants, as well as luxury
              mansions, penthouses, and high-standard residences.
            </p>
            <p style={{ color: GREY, fontSize: 14, lineHeight: 1.9 }}>
              Our in-house design team works closely with clients to create spaces that are as functional
              as they are beautiful, always using the finest materials and most skilled craftsmen.
            </p>
          </div>

          <div style={{
            background: DARK_CARD, border: `1px solid ${DARK_BORDER}`,
            display: 'grid', gridTemplateRows: '1fr auto',
            overflow: 'hidden',
          }}>
            <img
              src={siteImages.bespokeDesign}
              alt="Bespoke luxury design"
              style={{ width: '100%', height: 300, objectFit: 'cover', filter: 'brightness(0.72) saturate(0.9)' }}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: `1px solid ${DARK_BORDER}` }}>
              <div style={{ padding: 28, textAlign: 'center', borderRight: `1px solid ${DARK_BORDER}` }}>
                <div style={{ color: GOLD, fontSize: 42, fontWeight: 200, lineHeight: 1 }}>100%</div>
                <div style={{ color: GREY, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginTop: 8 }}>Bespoke Design</div>
              </div>
              <div style={{ padding: 28, textAlign: 'center' }}>
                <div style={{ color: GOLD, fontSize: 42, fontWeight: 200, lineHeight: 1 }}>4</div>
                <div style={{ color: GREY, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginTop: 8 }}>Market Segments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Segments */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>Market Segments</div>
            <h2 style={{ color: OFF_WHITE, fontSize: 38, fontWeight: 300, marginBottom: 12 }}>Where We Excel</h2>
            <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 16 }} />
            <p style={{ color: GREY, fontSize: 15, lineHeight: 1.7 }}>
              Our design expertise spans multiple sectors, each with its own set of luxury standards and client expectations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: DARK_BORDER }}>
            {segments.map((seg, i) => (
              <div key={i} style={{ background: DARK_CARD }}>
                <div style={{ height: 190, position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={seg.image}
                    alt={seg.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.9)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(26,26,26,0.9) 100%)' }} />
                </div>
                <div style={{ padding: '28px 32px 36px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                    <div style={{ width: 8, height: 8, background: GOLD, flexShrink: 0 }} />
                    <h3 style={{ color: OFF_WHITE, fontSize: 17, fontWeight: 600, margin: 0 }}>{seg.title}</h3>
                  </div>
                  <p style={{ color: GREY, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{seg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <div style={{ marginBottom: 48 }}>
            <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>Our Process</div>
            <h2 style={{ color: OFF_WHITE, fontSize: 38, fontWeight: 300, marginBottom: 12 }}>How We Work</h2>
            <div style={{ width: 60, height: 2, background: GOLD }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', border: `1px solid ${DARK_BORDER}` }}>
            {process.map((p, i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? DARK_CARD : CHARCOAL,
                padding: '32px 20px', textAlign: 'center',
                borderRight: i < 4 ? `1px solid ${DARK_BORDER}` : 'none',
              }}>
                <div style={{ color: GOLD, fontSize: 28, fontWeight: 300, marginBottom: 14 }}>{p.step}</div>
                <div style={{ color: OFF_WHITE, fontSize: 13, fontWeight: 600, marginBottom: 10, letterSpacing: 0.5 }}>{p.title}</div>
                <div style={{ color: GREY, fontSize: 12, lineHeight: 1.7 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
