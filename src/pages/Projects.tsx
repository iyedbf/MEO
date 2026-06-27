import { GOLD, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL } from '../theme';
import { siteVideos } from '../images';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

function VideoCard({ video, height }: { video: { src: string; label: string; sub: string }; height: number }) {
  return (
    <div style={{ position: 'relative', background: '#000', overflow: 'hidden', height }}>
      <video src={video.src} autoPlay loop muted playsInline preload="auto"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.78) 100%)', padding: '28px 20px 16px', pointerEvents: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 24, height: 1, background: GOLD }} />
          <div style={{ color: GOLD, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600 }}>{video.label}</div>
        </div>
        <div style={{ color: OFF_WHITE, fontSize: 12, letterSpacing: 0.5, marginTop: 4, opacity: 0.85 }}>{video.sub}</div>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 32, height: 2, background: GOLD, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: 2, height: 32, background: GOLD, pointerEvents: 'none' }} />
    </div>
  );
}

const ongoingProjects = [
  {
    id: '01',
    title: 'Greenwich Mansion',
    sub: 'Grand Residence — New Jersey, USA',
    category: 'Mansion',
    year: '2025',
    description: 'An extraordinary classical manor drawing inspiration from 18th-century French architecture. Royal blue velvet sofas, hand-carved boiserie panelling, twin ornate crystal chandeliers and intricate wainscoting create an atmosphere of timeless aristocratic grandeur across every room and corridor.',
    quote: '"Every detail tells its own story."',
    hero: '/images/gw2-living-blue-bright.png',
    gallery: [
      '/images/gw2-dining-chandelier.png',
      '/images/gw2-living-aerial2.png',
      '/images/gw2-kitchen-island.png',
      '/images/gw2-hallway-crystal.png',
      '/images/gw2-kitchen-classic.png',
      '/images/gw2-staircase.png',
    ],
  },
  {
    id: '02',
    title: 'Modern Open-Plan Estate',
    sub: 'Residential Complex — Connecticut, USA',
    category: 'Residential',
    year: '2025',
    description: 'A multi-level contemporary residence designed for both comfort and functionality. The lower level features a vast open-plan living space with marble waterfall island, while bespoke walk-in dressing rooms and a large-format sectional lounge define the upper floors with effortless elegance.',
    quote: '"Form and function in perfect balance."',
    hero: '/images/gw2-basement.png',
    gallery: [
      '/images/gw2-sofa-sectional.png',
      '/images/gw2-closet-gray.png',
      '/images/gw2-closet-sage.png',
      '/images/gw2-closet-dark.png',
      '/images/gw2-kitchen-black-chan.png',
    ],
  },
];

const completedProjects = [
  {
    id: '01',
    title: 'Surfside Arte Penthouse',
    sub: 'Luxury Penthouse — Miami, Florida, USA',
    category: 'Penthouse',
    year: '2025',
    description: 'A landmark penthouse in the iconic Surfside Arte tower overlooking the Atlantic. Every space was conceived to frame the ocean view — from the sculptural floating staircase with LED underlighting to the onyx kitchen island that brings the sea inside.',
    quote: '"Architecture is frozen music."',
    hero: '/images/new-kitchen-ocean.png',
    gallery: [
      '/images/new-stairs-aerial.png',
      '/images/new-stairs-led.png',
      '/images/new-stairs-aerial2.png',
    ],
  },
  {
    id: '02',
    title: 'Greenwich Mansion',
    sub: 'Grand Residence — New York, USA',
    category: 'Mansion',
    year: '2025',
    description: 'An extraordinary classical manor drawing inspiration from 18th-century French architecture. Royal blue velvet sofas, hand-carved boiserie panelling, twin ornate crystal chandeliers and intricate wainscoting create an atmosphere of timeless aristocratic grandeur.',
    quote: '"Every detail tells its own story."',
    hero: '/images/gw2-living-blue-bright.png',
    gallery: [
      '/images/gw2-dining-chandelier.png',
      '/images/gw2-living-aerial2.png',
      '/images/gw2-kitchen-island.png',
      '/images/gw2-hallway-crystal.png',
    ],
  },
  {
    id: '03',
    title: 'Terra Brazil Restaurant',
    sub: 'Hospitality Interior — United Kingdom',
    category: 'Restaurant',
    year: '2025',
    description: 'A vibrant Brazilian dining concept in the heart of the UK. Warm rattan pendant lighting, tufted velvet banquettes and lush tropical greenery create an immersive atmosphere that transports guests to São Paulo while maintaining a distinctly British refinement.',
    quote: '"Ambiance is half the flavour."',
    hero: '/images/terra-bar.jpg',
    gallery: [
      '/images/terra-dining1.jpg',
      '/images/terra-dining2.jpg',
      '/images/terra-dining3.jpg',
      '/images/terra-interior.jpg',
    ],
  },
  {
    id: '04',
    title: 'Merit Hotel Kensington',
    sub: 'Boutique Hotel — London, United Kingdom',
    category: 'Hospitality',
    year: '2024',
    description: 'A refined boutique hotel interior in the prestigious Kensington district of London. Living green walls with gold accents, polished marble flooring and bespoke millwork combine to deliver a five-star guest experience grounded in British elegance.',
    quote: '"First impressions are everything."',
    hero: '/images/merit-lobby.jpg',
    gallery: [
      '/images/merit-room1.jpg',
      '/images/merit-room2.jpg',
      '/images/merit-room3.jpg',
      '/images/merit-corridor.jpg',
    ],
  },
  {
    id: '05',
    title: 'Estelit Hospital',
    sub: 'Healthcare Interior — Istanbul, Türkiye',
    category: 'Healthcare',
    year: '2024',
    description: 'A premium medical facility designed to redefine the patient experience. Clean lines, soft tones and carefully curated materials create a calming environment that reduces anxiety while maintaining the highest standards of clinical functionality and hygiene.',
    quote: '"Healing begins with the environment."',
    hero: '/images/estelit-room1.jpg',
    gallery: [
      '/images/estelit-room2.jpg',
      '/images/estelit-room3.jpg',
      '/images/estelit-room4.jpg',
    ],
  },
  {
    id: '06',
    title: 'Radisson Blu Istanbul',
    sub: 'Hotel Suite Fit-Out — Istanbul, Türkiye',
    category: 'Hospitality',
    year: '2024',
    description: 'A complete suite refurbishment for the Radisson Blu brand in Istanbul. Contemporary furnishings in warm neutrals, bespoke artwork and precision lighting design create a welcoming and sophisticated atmosphere that exceeds international five-star standards.',
    quote: '"Comfort is a design decision."',
    hero: '/images/radblue-living.jpg',
    gallery: [
      '/images/radblue-room1.jpg',
      '/images/radblue-room2.jpg',
      '/images/radblue-room3.jpg',
    ],
  },
  {
    id: '07',
    title: 'WOW Hotel Istanbul',
    sub: 'Hotel Interior — Istanbul, Türkiye',
    category: 'Hospitality',
    year: '2024',
    description: 'A full interior fit-out for the WOW Hotel brand in Istanbul. Luxurious guest rooms featuring custom headboards, premium textiles and thoughtfully designed bathroom suites deliver a contemporary luxury experience at the crossroads of Europe and Asia.',
    quote: '"Every guest deserves a memorable stay."',
    hero: '/images/wow-bed.jpg',
    gallery: [
      '/images/wow-room1.jpg',
      '/images/wow-room2.jpg',
      '/images/wow-room3.jpg',
      '/images/wow-bathroom.jpg',
    ],
  },
  {
    id: '08',
    title: 'Nixon Hotel',
    sub: 'Boutique Hotel — United Kingdom',
    category: 'Hospitality',
    year: '2023',
    description: 'An intimate boutique hotel project that blends classic British style with contemporary comfort. Bespoke lounge furniture, carefully sourced fabrics and a warm, layered lighting scheme create a destination that guests return to time and again.',
    quote: '"Style never goes out of fashion."',
    hero: '/images/nixon-suite.jpg',
    gallery: [
      '/images/nixon-room1.jpg',
      '/images/nixon-room2.jpg',
      '/images/nixon-room3.jpg',
    ],
  },
  {
    id: '09',
    title: 'Radisson Hotel Jeddah',
    sub: 'Hotel Suite Fit-Out — Jeddah, Saudi Arabia',
    category: 'Hospitality',
    year: '2023',
    description: 'A suite interior project for the Radisson brand in Jeddah, blending contemporary hospitality design with subtle regional influences. Clean modern furnishings, geometric art and a refined neutral palette create a sophisticated sanctuary for international travellers.',
    quote: '"Excellence transcends borders."',
    hero: '/images/jeddah-suite.jpg',
    gallery: [
      '/images/jeddah-room1.jpg',
      '/images/jeddah-room2.jpg',
      '/images/jeddah-lobby.jpg',
    ],
  },
];

const statItems = [
  { count: '50+', label: 'Projects Delivered' },
  { count: '5', label: 'Countries' },
  { count: '8', label: 'Project Types' },
  { count: '15+', label: 'Years Experience' },
  { count: '98%', label: 'Client Satisfaction' },
];

function ProjectGallery({ images, isMobile }: { images: string[]; isMobile: boolean }) {
  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div style={{ overflow: 'hidden', height: isMobile ? 140 : 180, border: `1px solid ${DARK_BORDER}` }}>
        <img src={images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)', display: 'block', transition: 'transform 0.5s' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
      </div>
    );
  }
  if (images.length === 2) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
        {images.map((src, i) => (
          <div key={i} style={{ overflow: 'hidden', height: isMobile ? 110 : 150, border: `1px solid ${DARK_BORDER}` }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)', display: 'block', transition: 'transform 0.5s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
          </div>
        ))}
      </div>
    );
  }
  if (images.length === 3) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}>
        {images.map((src, i) => (
          <div key={i} style={{ overflow: 'hidden', height: isMobile ? 100 : 140, border: `1px solid ${DARK_BORDER}` }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)', display: 'block', transition: 'transform 0.5s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
          </div>
        ))}
      </div>
    );
  }
  // 4+ images: first one big, rest in a row
  const [first, ...rest] = images;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ overflow: 'hidden', height: isMobile ? 160 : 220, border: `1px solid ${DARK_BORDER}` }}>
        <img src={first} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)', display: 'block', transition: 'transform 0.5s' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(rest.length, 3)}, 1fr)`, gap: 4 }}>
        {rest.slice(0, 3).map((src, i) => (
          <div key={i} style={{ overflow: 'hidden', height: isMobile ? 90 : 120, border: `1px solid ${DARK_BORDER}` }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)', display: 'block', transition: 'transform 0.5s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
          </div>
        ))}
      </div>
      {rest.length > 3 && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(rest.length - 3, 3)}, 1fr)`, gap: 4 }}>
          {rest.slice(3, 6).map((src, i) => (
            <div key={i} style={{ overflow: 'hidden', height: isMobile ? 90 : 120, border: `1px solid ${DARK_BORDER}` }}>
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)', display: 'block', transition: 'transform 0.5s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { t } = useLang();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#0A0A0A' }}>

      <PageHeader
        eyebrow={t('Portfolio', 'Portföy')}
        titleLight={t('Our', 'Projelerimiz')}
        titleBold={t('Projects', '')}
      />

      {/* Intro */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 16px 32px' : '64px 32px 48px' }}>
        <p style={{ color: GREY, fontSize: isMobile ? 14 : 16, lineHeight: 1.9, maxWidth: 760 }}>
          {t(
            'Each project undertaken by MEO Development LLC is shaped by the specific needs of the space and the lifestyle of its occupants. From design and production to material selection and final installation, every stage is executed with uncompromising craftsmanship.',
            'MEO Development LLC\'nin üstlendiği her proje, mekanın ihtiyaçları ve sakinlerin yaşam biçimi doğrultusunda şekillendirilir. Tasarımdan üretime, malzeme seçiminden son uygulamaya kadar her aşama kusursuz bir ustalıkla hayata geçirilir.'
          )}
        </p>
      </div>

      {/* ── ONGOING PROJECTS ── */}
      <div id="ongoing" style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 32px' }}>

        {/* Section title — Ongoing */}
        <div style={{ paddingTop: isMobile ? 12 : 24, paddingBottom: isMobile ? 24 : 40, display: 'flex', alignItems: 'center', gap: 20 }}>
          <div>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>
              {t('Currently Active', 'Devam Eden')}
            </div>
            <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 26 : 36, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
              {t('Projects completed', 'Devam Eden Projeler')}
            </h2>
          </div>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${GOLD}66, transparent)` }} />
        </div>

        {ongoingProjects.map((project, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div key={i} style={{
              paddingTop: isMobile ? 32 : 56,
              paddingBottom: isMobile ? 32 : 56,
              borderBottom: `1px solid ${DARK_BORDER}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: isMobile ? 20 : 28 }}>
                <span style={{ color: `${GOLD}33`, fontSize: isMobile ? 36 : 52, fontWeight: 700, lineHeight: 1, fontFamily: 'Georgia, serif' }}>{project.id}</span>
                <div style={{ flex: 1, height: 1, background: DARK_BORDER }} />
                <span style={{ color: GOLD, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}>{project.category}</span>
                <span style={{ color: `${GOLD}55`, fontSize: 9, letterSpacing: 2 }}>· {project.year}</span>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : (imageLeft ? '3fr 2fr' : '2fr 3fr'),
                gap: isMobile ? 20 : 40, alignItems: 'start', marginBottom: isMobile ? 12 : 20,
              }}>
                <div style={{ order: isMobile ? 0 : (imageLeft ? 0 : 1) }}>
                  <div style={{ position: 'relative', overflow: 'hidden', height: isMobile ? 240 : 380, border: `1px solid ${DARK_BORDER}` }}>
                    <img src={project.hero} alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                    <div style={{ position: 'absolute', top: 14, left: 14, color: OFF_WHITE, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', background: 'rgba(0,0,0,0.6)', padding: '4px 10px' }}>{project.category}</div>
                    <div style={{ position: 'absolute', top: 14, right: 14, background: GOLD, color: '#0A0A0A', fontSize: 10, fontWeight: 700, padding: '4px 12px', letterSpacing: 1 }}>{project.year}</div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: 48, height: 2, background: GOLD }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: 2, height: 48, background: GOLD }} />
                  </div>
                </div>
                <div style={{ order: isMobile ? 1 : (imageLeft ? 1 : 0), paddingTop: isMobile ? 0 : 8 }}>
                  <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 22 : 30, fontWeight: 700, lineHeight: 1.15, margin: '0 0 6px' }}>{project.title}</h2>
                  <div style={{ color: GREY, fontSize: 11, letterSpacing: 0.5, marginBottom: 20, opacity: 0.7 }}>{project.sub}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 2, background: GOLD }} />
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: `${GOLD}55`, border: `1px solid ${GOLD}` }} />
                  </div>
                  <p style={{ color: GREY, fontSize: isMobile ? 13 : 14, lineHeight: 1.9, marginBottom: 24 }}>{project.description}</p>
                  <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: 16, marginBottom: 24 }}>
                    <p style={{ color: GOLD, fontSize: 13, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>{project.quote}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, padding: '4px 12px', textTransform: 'uppercase' }}>{project.category}</span>
                    <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, padding: '4px 12px', textTransform: 'uppercase' }}>{project.year}</span>
                    <span style={{ border: `1px solid ${GOLD}44`, color: GOLD, fontSize: 9, letterSpacing: 2, padding: '4px 12px', textTransform: 'uppercase' }}>MEO Development</span>
                  </div>
                </div>
              </div>
              {project.gallery.length > 0 && (
                <div style={{ marginTop: isMobile ? 4 : 8 }}>
                  <ProjectGallery images={project.gallery} isMobile={isMobile} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── COMPLETED PROJECTS ── */}
      <div id="completed" style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 32px' }}>

        {/* Section title — Completed */}
        <div style={{ paddingTop: isMobile ? 40 : 72, paddingBottom: isMobile ? 24 : 40, display: 'flex', alignItems: 'center', gap: 20 }}>
          <div>
            <div style={{ color: GREY, fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6, opacity: 0.7 }}>
              {t('Delivered', 'Tamamlandı')}
            </div>
            <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 26 : 36, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
              {t('Completed Projects', 'Tamamlanan Projeler')}
            </h2>
          </div>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${DARK_BORDER}, transparent)` }} />
        </div>

        {completedProjects.map((project, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div key={i} style={{
              paddingTop: isMobile ? 32 : 56,
              paddingBottom: isMobile ? 32 : 56,
              borderBottom: `1px solid ${DARK_BORDER}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: isMobile ? 20 : 28 }}>
                <span style={{ color: `${GOLD}33`, fontSize: isMobile ? 36 : 52, fontWeight: 700, lineHeight: 1, fontFamily: 'Georgia, serif' }}>{project.id}</span>
                <div style={{ flex: 1, height: 1, background: DARK_BORDER }} />
                <span style={{ color: GOLD, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}>{project.category}</span>
                <span style={{ color: `${GOLD}55`, fontSize: 9, letterSpacing: 2 }}>· {project.year}</span>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : (imageLeft ? '3fr 2fr' : '2fr 3fr'),
                gap: isMobile ? 20 : 40, alignItems: 'start', marginBottom: isMobile ? 12 : 20,
              }}>
                <div style={{ order: isMobile ? 0 : (imageLeft ? 0 : 1) }}>
                  <div style={{ position: 'relative', overflow: 'hidden', height: isMobile ? 240 : 380, border: `1px solid ${DARK_BORDER}` }}>
                    <img src={project.hero} alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                    <div style={{ position: 'absolute', top: 14, left: 14, color: OFF_WHITE, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', background: 'rgba(0,0,0,0.6)', padding: '4px 10px' }}>{project.category}</div>
                    <div style={{ position: 'absolute', top: 14, right: 14, background: GOLD, color: '#0A0A0A', fontSize: 10, fontWeight: 700, padding: '4px 12px', letterSpacing: 1 }}>{project.year}</div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: 48, height: 2, background: GOLD }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: 2, height: 48, background: GOLD }} />
                  </div>
                </div>
                <div style={{ order: isMobile ? 1 : (imageLeft ? 1 : 0), paddingTop: isMobile ? 0 : 8 }}>
                  <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 22 : 30, fontWeight: 700, lineHeight: 1.15, margin: '0 0 6px' }}>{project.title}</h2>
                  <div style={{ color: GREY, fontSize: 11, letterSpacing: 0.5, marginBottom: 20, opacity: 0.7 }}>{project.sub}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 2, background: GOLD }} />
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: `${GOLD}55`, border: `1px solid ${GOLD}` }} />
                  </div>
                  <p style={{ color: GREY, fontSize: isMobile ? 13 : 14, lineHeight: 1.9, marginBottom: 24 }}>{project.description}</p>
                  <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: 16, marginBottom: 24 }}>
                    <p style={{ color: GOLD, fontSize: 13, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>{project.quote}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, padding: '4px 12px', textTransform: 'uppercase' }}>{project.category}</span>
                    <span style={{ border: `1px solid ${DARK_BORDER}`, color: GREY, fontSize: 9, letterSpacing: 2, padding: '4px 12px', textTransform: 'uppercase' }}>{project.year}</span>
                    <span style={{ border: `1px solid ${GOLD}44`, color: GOLD, fontSize: 9, letterSpacing: 2, padding: '4px 12px', textTransform: 'uppercase' }}>MEO Development</span>
                  </div>
                </div>
              </div>
              {project.gallery.length > 0 && (
                <div style={{ marginTop: isMobile ? 4 : 8 }}>
                  <ProjectGallery images={project.gallery} isMobile={isMobile} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Video Showcase */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '48px 16px' : '80px 32px' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>Project Reels</div>
          <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 26 : 38, fontWeight: 300, marginBottom: 10 }}>Behind the Work</h2>
          <div style={{ width: 60, height: 2, background: GOLD }} />
        </div>

        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {siteVideos.map((v, i) => <VideoCard key={i} video={v} height={220} />)}
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 4, marginBottom: 4 }}>
              <VideoCard video={siteVideos[0]} height={480} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <VideoCard video={siteVideos[1]} height={238} />
                <VideoCard video={siteVideos[2]} height={238} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
              <VideoCard video={siteVideos[3]} height={300} />
              <VideoCard video={siteVideos[4]} height={300} />
            </div>
          </>
        )}

        {/* Stats */}
        <div style={{ marginTop: isMobile ? 40 : 80, background: CHARCOAL, border: `1px solid ${DARK_BORDER}`, display: 'grid', gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)' }}>
          {statItems.map((s, i) => (
            <div key={i} style={{ padding: isMobile ? '20px 12px' : '28px 20px', textAlign: 'center', borderRight: i < statItems.length - 1 ? `1px solid ${DARK_BORDER}` : 'none' }}>
              <div style={{ color: GOLD, fontSize: isMobile ? 28 : 38, fontWeight: 300, lineHeight: 1 }}>{s.count}</div>
              <div style={{ color: GREY, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
