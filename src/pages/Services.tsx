import { Link } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD } from '../theme';
import { siteImages } from '../images';

const services = [
  {
    number: '01',
    title: 'Property Investment Consultancy',
    description:
      'Our investment consultancy service provides end-to-end guidance for investors seeking opportunities in real estate. From market analysis and due diligence to acquisition strategy and portfolio management, we deliver actionable intelligence backed by deep market expertise.',
    features: [
      'Market Analysis & Research',
      'Due Diligence Management',
      'Portfolio Optimization',
      'Risk Assessment',
      'International Real Estate',
      'Land Acquisition Advisory',
    ],
    image: siteImages.investment,
  },
  {
    number: '02',
    title: 'Home Improvement & Renovation',
    description:
      'MEO Development LLC specializes in delivering high-quality home improvement and renovation services, transforming properties into aesthetically refined and highly functional living spaces. Our team of expert craftsmen and designers bring unmatched precision to every project.',
    features: [
      'Full Interior Renovation',
      'Structural Improvements',
      'Kitchen & Bathroom Refits',
      'Custom Millwork & Joinery',
      'Flooring & Wall Finishes',
      'Smart Home Integration',
    ],
    image: siteImages.renovation,
  },
  {
    number: '03',
    title: 'Design & Development Services',
    description:
      'At MEO Development LLC, we understand that every home and property requires a unique approach to design and development. We provide a wide range of high-end luxury furniture and bespoke design solutions for commercial projects, hotels, restaurants, and residences.',
    features: [
      'Bespoke Furniture Design',
      'Luxury Interior Design',
      'Commercial Project Design',
      'Hotel & Hospitality Fit-Out',
      'Restaurant Concept Design',
      'Mansion & Penthouse Interiors',
    ],
    image: siteImages.bespokeDesign,
  },
];

export default function Services() {
  return (
    <div style={{ background: '#0A0A0A' }}>

      {/* Page header */}
      <section style={{ background: CHARCOAL, borderBottom: `1px solid ${DARK_BORDER}`, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 5, textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>What We Offer</div>
          <h1 style={{ color: OFF_WHITE, fontSize: 52, fontWeight: 200, margin: 0 }}>
            Our <span style={{ color: GOLD, fontWeight: 700 }}>Services</span>
          </h1>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px' }}>

        {services.map((svc, i) => (
          <div key={i} style={{ marginBottom: i < services.length - 1 ? 80 : 0 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '280px 1fr' : '1fr 280px',
              gap: 0,
              border: `1px solid ${DARK_BORDER}`,
            }}>
              {/* Number panel */}
              {i % 2 === 0 ? (
                <>
                  <div style={{
                    background: `linear-gradient(180deg, rgba(20,20,20,0.35), ${CHARCOAL} 78%), url(${svc.image}) center / cover no-repeat`, padding: 40,
                    borderRight: `1px solid ${DARK_BORDER}`,
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    minHeight: 360,
                  }}>
                    <div style={{ color: `${GOLD}33`, fontSize: 88, fontWeight: 700, lineHeight: 1, fontFamily: 'Georgia, serif' }}>
                      {svc.number}
                    </div>
                    <div>
                      <div style={{ width: 32, height: 2, background: GOLD, marginBottom: 12 }} />
                      <div style={{ color: GOLD, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase' }}>Service {svc.number}</div>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div style={{ background: DARK_CARD, padding: 48 }}>
                    <h2 style={{ color: OFF_WHITE, fontSize: 26, fontWeight: 600, marginBottom: 20 }}>{svc.title}</h2>
                    <p style={{ color: GREY, fontSize: 14, lineHeight: 1.9, marginBottom: 32 }}>{svc.description}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                      {svc.features.map((f, fi) => (
                        <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, color: OFF_WHITE, fontSize: 12 }}>
                          <div style={{ width: 6, height: 6, background: GOLD, flexShrink: 0 }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Content panel (left) */}
                  <div style={{ background: DARK_CARD, padding: 48 }}>
                    <h2 style={{ color: OFF_WHITE, fontSize: 26, fontWeight: 600, marginBottom: 20 }}>{svc.title}</h2>
                    <p style={{ color: GREY, fontSize: 14, lineHeight: 1.9, marginBottom: 32 }}>{svc.description}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                      {svc.features.map((f, fi) => (
                        <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, color: OFF_WHITE, fontSize: 12 }}>
                          <div style={{ width: 6, height: 6, background: GOLD, flexShrink: 0 }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Number panel (right) */}
                  <div style={{
                    background: `linear-gradient(180deg, rgba(20,20,20,0.35), ${CHARCOAL} 78%), url(${svc.image}) center / cover no-repeat`, padding: 40,
                    borderLeft: `1px solid ${DARK_BORDER}`,
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    minHeight: 360,
                  }}>
                    <div style={{ color: `${GOLD}33`, fontSize: 88, fontWeight: 700, lineHeight: 1, fontFamily: 'Georgia, serif', textAlign: 'right' }}>
                      {svc.number}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ width: 32, height: 2, background: GOLD, marginBottom: 12, marginLeft: 'auto' }} />
                      <div style={{ color: GOLD, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase' }}>Service {svc.number}</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{
          marginTop: 80, background: CHARCOAL, border: `1px solid ${GOLD}44`,
          padding: '52px 48px', textAlign: 'center',
        }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>
            Start Your Project
          </div>
          <h2 style={{ color: OFF_WHITE, fontSize: 34, fontWeight: 300, margin: '0 0 12px' }}>
            Ready to Transform Your Property?
          </h2>
          <p style={{ color: GREY, fontSize: 14, marginBottom: 36, lineHeight: 1.7 }}>
            Contact us today to discuss your vision and discover how MEO Development can bring it to life.
          </p>
          <Link to="/contact" style={{
            background: GOLD, color: BLACK, padding: '16px 48px',
            fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', textDecoration: 'none',
          }}>
            Request a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
