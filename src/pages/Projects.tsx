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

const showcaseProjects = [
  {
    title: 'Greenwich Connecticut',
    sub: 'House – Connecticut, USA',
    category: 'Residential',
    year: '2025',
    description: 'A refined single-family residence where classic architecture meets contemporary interior craft. Custom millwork, bespoke joinery, and curated material selections define every room with precision and warmth.',
    quote: '"Perfection lies in every detail."',
    images: ['/images/proj-bedroom-1.png', '/images/proj-formal-living.png'],
  },
  {
    title: 'Merit Kensington',
    sub: 'Mansion – London, UK',
    category: 'Mansion',
    year: '2025',
    description: 'A prestigious London mansion project featuring fully custom-built furniture and bespoke interior development. The design language draws from British heritage while embracing global luxury standards.',
    quote: '"Elegance shaped with precision."',
    images: ['/images/proj-living-city.png', '/images/proj-bedroom-1.png'],
  },
  {
    title: 'Sinpaş Palas',
    sub: 'Penthouse – Istanbul, Turkey',
    category: 'Penthouse',
    year: '2024',
    description: 'A panoramic penthouse project in the heart of Istanbul. Floor-to-ceiling glazing, marble surfaces, and a restrained gold palette deliver a living environment of exceptional refinement.',
    quote: '"Where the city becomes part of the design."',
    images: ['/images/proj-formal-living.png', '/images/proj-hotel-bedroom.png'],
  },
  {
    title: 'Sinpaş Gökorman',
    sub: 'Villa – Istanbul, Turkey',
    category: 'Villa',
    year: '2023',
    description: 'An expansive villa project delivering bespoke furniture and interior solutions across multiple levels. Natural stone, warm woods, and gold accents create an atmosphere of understated luxury.',
    quote: '"Every space tells its own story."',
    images: ['/images/proj-marble-living.png', '/images/proj-villa-garden.png'],
  },
  {
    title: 'Private Residence',
    sub: 'Villa – Bodrum, Turkey',
    category: 'Villa',
    year: '2024',
    description: 'A coastal villa where the Mediterranean landscape becomes part of the interior. Curved seating, natural textures and open glazing create a seamless connection between the living spaces and the garden.',
    quote: '"Elegance and nature in perfect balance."',
    images: ['/images/proj-villa-garden.png', '/images/proj-marble-living.png'],
  },
  {
    title: 'Grand Residence',
    sub: 'Mansion – Riyadh, Saudi Arabia',
    category: 'Mansion',
    year: '2025',
    description: 'A grand palatial residence with an emphasis on gold accents, mirrored surfaces, and classical proportions. Every detail in this project reflects the highest standards of bespoke craftsmanship.',
    quote: '"Luxury is an art form."',
    images: ['/images/proj-gold-salon.png', '/images/proj-formal-living.png'],
  },
  {
    title: 'Radisson Blu Hotel',
    sub: 'Hotel – Jeddah & Istanbul',
    category: 'Hospitality',
    year: '2024',
    description: 'A landmark hotel fit-out across two international locations. Guest rooms, suites, and public spaces were furnished and fitted with bespoke solutions meeting Radisson\'s global hospitality standards.',
    quote: '"Excellence felt at every touchpoint."',
    images: ['/images/proj-radisson-ext.png', '/images/proj-hotel-bedroom.png'],
  },
];

const statItems = [
  { count: '7+', label: 'Showcase Projects' },
  { count: '3', label: 'Countries' },
  { count: '5', label: 'Project Types' },
  { count: '15+', label: 'Years Experience' },
  { count: '98%', label: 'Client Satisfaction' },
];

export default function Projects() {
  const { t } = useLang();
  const { isMobile } = useResponsive();

  return (
    <div style={{ background: '#0A0A0A' }}>

      <PageHeader
        eyebrow={t('Portfolio', 'Portföy')}
        titleLight={t('Our', 'Projelerimiz')}
        titleBold={t('Projects', '')}
        watermark="PROJECTS"
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

      {/* Editorial project sections */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 32px' }}>
        {showcaseProjects.map((project, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : (imageLeft ? '1fr 1fr' : '1fr 1fr'),
              gap: isMobile ? 0 : 48,
              alignItems: 'center',
              padding: isMobile ? '32px 0' : '52px 0',
              borderBottom: `1px solid ${DARK_BORDER}`,
            }}>

              {/* Image side */}
              {(!isMobile && !imageLeft) && <div />}

              {/* Image box — contained, not full bleed */}
              <div style={{ order: isMobile ? 0 : (imageLeft ? 0 : 1) }}>
                <div style={{
                  position: 'relative', overflow: 'hidden',
                  height: isMobile ? 220 : 300,
                  border: `1px solid ${DARK_BORDER}`,
                }}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.88) saturate(0.9)', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Year badge */}
                  <div style={{ position: 'absolute', top: 14, right: 14, background: GOLD, color: '#0A0A0A', fontSize: 10, fontWeight: 700, padding: '3px 10px', letterSpacing: 1 }}>
                    {project.year}
                  </div>
                  {/* Category top-left */}
                  <div style={{ position: 'absolute', top: 14, left: 14, color: OFF_WHITE, fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', background: 'rgba(0,0,0,0.55)', padding: '3px 8px' }}>
                    {project.category}
                  </div>
                </div>

                {/* Second image thumbnail below on desktop */}
                {!isMobile && project.images[1] && (
                  <div style={{ height: 80, overflow: 'hidden', marginTop: 4, border: `1px solid ${DARK_BORDER}`, opacity: 0.7 }}>
                    <img src={project.images[1]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                  </div>
                )}
              </div>

              {/* Text side */}
              <div style={{ order: isMobile ? 1 : (imageLeft ? 1 : 0), paddingTop: isMobile ? 20 : 0 }}>
                <div style={{ color: GOLD, fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 10, fontWeight: 600 }}>
                  {project.category} <span style={{ color: `${GOLD}66` }}>· {project.year}</span>
                </div>
                <h2 style={{ color: OFF_WHITE, fontSize: isMobile ? 22 : 28, fontWeight: 700, lineHeight: 1.2, margin: '0 0 6px' }}>
                  {project.title}
                </h2>
                <div style={{ color: GREY, fontSize: 12, letterSpacing: 0.5, marginBottom: 20 }}>{project.sub}</div>
                <div style={{ width: 32, height: 2, background: GOLD, marginBottom: 18 }} />
                <p style={{ color: GREY, fontSize: 13, lineHeight: 1.9, marginBottom: 20 }}>{project.description}</p>
                <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: 16 }}>
                  <p style={{ color: GOLD, fontSize: 13, fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>{project.quote}</p>
                </div>
              </div>

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
