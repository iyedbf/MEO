import { Link } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD } from '../theme';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

const featuredPartners = [
  {
    name: 'MassMob',
    tagline: 'Luxury Furniture & Bespoke Interior Design',
    location: 'Istanbul, Turkey · London, UK',
    description: 'MassMob is a premier luxury furniture manufacturer and interior design firm with over 70 years of craftsmanship heritage. Operating from showrooms in Istanbul and London, MassMob delivers bespoke furniture and full interior solutions for residential and hospitality projects worldwide. As a trusted MEO partner, MassMob provides exceptional custom-made furnishings for our most prestigious client projects.',
    url: 'https://massmob.com',
    category: 'Luxury Furniture & Interior Design',
    since: '2023',
    logo: 'MassMob',
    accentColor: GOLD,
    projects: ['Greenwich Residence', 'French Classical Manor', 'Gentleman\'s Study'],
  },
  {
    name: 'elve luxury',
    tagline: 'Premium Luxury Goods & Lifestyle Brand',
    location: 'Turkey',
    description: 'elve luxury is a distinguished premium brand specialising in high-end lifestyle products and luxury goods. Known for their refined aesthetic and uncompromising quality standards, elve luxury brings an elevated sensibility to every collaboration. Their partnership with MEO Development reinforces our commitment to surrounding clients with only the finest brands and curated luxury experiences.',
    url: '#',
    category: 'Luxury Lifestyle Brand',
    since: '2024',
    logo: 'elve luxury',
    accentColor: '#C8B89A',
    projects: ['Private Residences', 'Bespoke Interiors'],
  },
  {
    name: 'MOBiZU Project',
    tagline: 'Custom Furniture Manufacturing & Project Solutions',
    location: 'Turkey',
    description: 'MOBiZU Project is a specialist custom furniture manufacturer delivering tailored solutions for high-end residential and commercial projects. With a strong focus on precision craftsmanship and project management excellence, MOBiZU Project supports MEO Development in executing complex interior fit-outs with exacting attention to detail, from concept through to final installation.',
    url: '#',
    category: 'Custom Furniture & Project Management',
    since: '2024',
    logo: 'MOBiZU',
    accentColor: '#B8A060',
    projects: ['Luxury Residences', 'Hotel Fit-Outs', 'Commercial Spaces'],
  },
];

const partnerTypes = [
  {
    icon: '🏗',
    title: 'Real Estate Developers',
    desc: 'Strategic partnerships with leading real estate development firms for joint ventures and co-development opportunities.',
  },
  {
    icon: '📐',
    title: 'Architecture Firms',
    desc: 'Collaboration with world-class architectural practices to deliver integrated design and development solutions.',
  },
  {
    icon: '🛋',
    title: 'Interior Design Studios',
    desc: 'Partnerships with prestigious design studios to offer comprehensive interior solutions to our clients.',
  },
  {
    icon: '💼',
    title: 'Investment Groups',
    desc: 'Working with private equity and real estate investment firms to identify and execute high-yield opportunities.',
  },
  {
    icon: '✨',
    title: 'Luxury Brands',
    desc: 'Exclusive supply partnerships with leading luxury furniture and materials manufacturers globally.',
  },
  {
    icon: '🔨',
    title: 'Contractors & Builders',
    desc: 'A vetted network of specialist contractors ensuring the highest quality of workmanship on every project.',
  },
];

const benefits = [
  'Access to exclusive project pipeline',
  'Collaborative international opportunities',
  'Shared luxury brand positioning',
  'Joint marketing and global visibility',
];

export default function Partners() {
  const { t } = useLang();
  const { isMobile } = useResponsive();
  const sectionPad = isMobile ? '48px 16px' : '80px 32px';

  return (
    <div style={{ background: '#0A0A0A' }}>

      <PageHeader
        eyebrow={t('Our Network', 'Ağımız')}
        titleLight={t('Strategic', 'Stratejik')}
        titleBold={t('Partners', 'Ortaklar')}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: sectionPad }}>

        {/* Intro */}
        <div style={{ marginBottom: isMobile ? 40 : 64 }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>
            {t('Collaboration', 'İş Birliği')}
          </div>
          <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 28 : 38, fontWeight: 300, marginBottom: 12 }}>
            {t('Built on Trust', 'Güven Üzerine İnşa Edildi')}
          </h2>
          <div style={{ width: 60, height: 2, background: GOLD, marginBottom: 20 }} />
          <p style={{ color: GREY, fontSize: isMobile ? 14 : 15, lineHeight: 1.85, maxWidth: 680 }}>
            {t(
              'Our partners form the foundation of our growth and long-term success. Through collaborations built on trust, transparency, and shared value creation, we deliver more comprehensive and high-quality solutions to our clients. Each partner strengthens our services with their expertise and contribution.',
              'Ortaklarımız, büyümemizin ve uzun vadeli başarımızın temelini oluşturur. Güven, şeffaflık ve ortak değer yaratma üzerine kurulu iş birlikleri sayesinde müşterilerimize daha kapsamlı ve yüksek kaliteli çözümler sunuyoruz.'
            )}
          </p>
        </div>

        {/* ── FEATURED PARTNERS ── */}
        <div style={{ marginBottom: isMobile ? 48 : 80 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: isMobile ? 28 : 40 }}>
            <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}>
              {t('Our Partners', 'Ortaklarımız')}
            </div>
            <div style={{ flex: 1, height: 1, background: DARK_BORDER }} />
          </div>

          {featuredPartners.map((partner, i) => {
            const accent = partner.accentColor;
            return (
              <div key={i} style={{
                border: `1px solid ${DARK_BORDER}`,
                marginBottom: isMobile ? 20 : 24,
                background: DARK_CARD,
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
                }}>
                  {/* Logo panel */}
                  <div style={{
                    background: CHARCOAL,
                    padding: isMobile ? '32px 24px' : '48px 40px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    borderRight: isMobile ? 'none' : `1px solid ${DARK_BORDER}`,
                    borderBottom: isMobile ? `1px solid ${DARK_BORDER}` : 'none',
                    minHeight: isMobile ? 'auto' : 240,
                  }}>
                    <div>
                      {/* Partner number badge */}
                      <div style={{ color: `${accent}55`, fontSize: 11, letterSpacing: 3, fontWeight: 700, marginBottom: 16, textTransform: 'uppercase' }}>
                        Partner {String(i + 1).padStart(2, '0')}
                      </div>
                      {/* Logo name */}
                      <div style={{
                        color: OFF_WHITE,
                        fontSize: isMobile ? 26 : 32,
                        fontWeight: 800,
                        letterSpacing: -0.5,
                        lineHeight: 1.1,
                        marginBottom: 12,
                      }}>
                        {partner.logo}
                        {partner.name === 'MOBiZU Project' && (
                          <span style={{ color: accent, fontSize: isMobile ? 14 : 16, fontWeight: 400, letterSpacing: 1, marginLeft: 6 }}>Project</span>
                        )}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                        <div style={{ width: 24, height: 1.5, background: accent }} />
                        <span style={{ color: accent, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600 }}>
                          {partner.category}
                        </span>
                      </div>
                      <div style={{ color: GREY, fontSize: 11, letterSpacing: 0.5 }}>
                        📍 {partner.location}
                      </div>
                    </div>

                    <div style={{ marginTop: isMobile ? 24 : 0 }}>
                      <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
                        {t('Partner since', 'Ortak olduğumuz yıl')} {partner.since}
                      </div>
                      {partner.url !== '#' ? (
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            background: accent, color: BLACK,
                            padding: '8px 18px', fontSize: 10, fontWeight: 700,
                            letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none',
                          }}
                        >
                          {t('Visit Website', 'Web Sitesi')} →
                        </a>
                      ) : (
                        <div style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          border: `1px solid ${accent}55`, color: accent,
                          padding: '8px 18px', fontSize: 10, fontWeight: 700,
                          letterSpacing: 2, textTransform: 'uppercase',
                        }}>
                          {t('Official Partner', 'Resmi Ortak')}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description panel */}
                  <div style={{ padding: isMobile ? '28px 24px' : '48px 48px' }}>
                    <h3 style={{ color: OFF_WHITE, fontSize: isMobile ? 20 : 26, fontWeight: 600, margin: '0 0 6px', lineHeight: 1.2 }}>
                      {partner.name}
                    </h3>
                    <div style={{ color: accent, fontSize: 12, letterSpacing: 0.5, marginBottom: 20 }}>
                      {partner.tagline}
                    </div>
                    <div style={{ width: 40, height: 2, background: accent, marginBottom: 20 }} />
                    <p style={{ color: GREY, fontSize: isMobile ? 13 : 14, lineHeight: 1.9, marginBottom: 28 }}>
                      {partner.description}
                    </p>

                    <div>
                      <div style={{ color: GREY, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
                        {t('Projects in collaboration', 'Ortak Projeler')}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {partner.projects.map((proj, j) => (
                          <span key={j} style={{
                            border: `1px solid ${accent}44`,
                            color: accent,
                            fontSize: 10,
                            letterSpacing: 1,
                            padding: '5px 14px',
                          }}>
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── PARTNER TYPES ── */}
        <div style={{ marginBottom: isMobile ? 40 : 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: isMobile ? 24 : 36 }}>
            <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}>
              {t('Who We Work With', 'Kimlerle Çalışıyoruz')}
            </div>
            <div style={{ flex: 1, height: 1, background: DARK_BORDER }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 1, background: DARK_BORDER }}>
            {partnerTypes.map((pt, i) => (
              <div key={i} style={{ background: DARK_CARD, padding: isMobile ? '24px 20px' : '36px 32px' }}>
                <div style={{ fontSize: 22, marginBottom: 14 }}>{pt.icon}</div>
                <h3 style={{ color: OFF_WHITE, fontSize: 15, fontWeight: 600, marginBottom: 10, letterSpacing: 0.3 }}>
                  {pt.title}
                </h3>
                <p style={{ color: GREY, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BECOME A PARTNER CTA ── */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', border: `1px solid ${DARK_BORDER}` }}>
          <div style={{ background: GOLD, padding: isMobile ? '36px 24px' : '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: BLACK, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>
              {t('Become a Partner', 'Ortak Olun')}
            </div>
            <h2 style={{ color: BLACK, fontSize: isMobile ? 24 : 32, fontWeight: 700, margin: '0 0 14px', lineHeight: 1.2 }}>
              {t("Let's Build Something Extraordinary Together", 'Birlikte Olağanüstü Bir Şey İnşa Edelim')}
            </h2>
            <p style={{ color: `${BLACK}99`, fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              {t(
                'We are always open to new partnerships that align with our values of excellence, innovation, and integrity.',
                'Mükemmellik, yenilik ve dürüstlük değerlerimizle örtüşen yeni ortaklıklara her zaman açığız.'
              )}
            </p>
            <Link to="/contact" style={{
              background: BLACK, color: GOLD, padding: '14px 32px',
              fontSize: 11, fontWeight: 700, letterSpacing: 2,
              textTransform: 'uppercase', textDecoration: 'none',
              display: 'inline-block', alignSelf: 'flex-start',
            }}>
              {t('Get in Touch', 'İletişime Geç')}
            </Link>
          </div>

          <div style={{ background: CHARCOAL, padding: isMobile ? '32px 24px' : '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, color: OFF_WHITE, fontSize: 14 }}>
                <div style={{ width: 6, height: 6, background: GOLD, flexShrink: 0 }} />
                {t(b, b)}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
