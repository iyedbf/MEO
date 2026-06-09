import { GOLD, DARK_BORDER, OFF_WHITE, CHARCOAL } from '../theme';
import { useResponsive } from '../hooks/useResponsive';

interface PageHeaderProps {
  eyebrow: string;
  titleLight: string;
  titleBold: string;
  watermark: string;
  boldFirst?: boolean;
}

export default function PageHeader({ eyebrow, titleLight, titleBold, boldFirst = false }: PageHeaderProps) {
  const { isMobile } = useResponsive();
  return (
    <section style={{
      background: CHARCOAL,
      borderBottom: `1px solid ${DARK_BORDER}`,
      padding: isMobile ? '56px 16px 48px' : '90px 32px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Top decorative line full width */}
      <div style={{ position: 'absolute', top: 28, left: 32, right: 32, height: 1, background: `${DARK_BORDER}` }} />

      {/* Gold accent left bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: `linear-gradient(180deg, transparent, ${GOLD}, transparent)` }} />

      {/* Right vertical line */}
      <div style={{ position: 'absolute', top: 28, right: 32, width: 1, bottom: 28, background: `${DARK_BORDER}` }} />

      {/* Top-left corner bracket */}
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <div style={{ width: 20, height: 2, background: GOLD }} />
        <div style={{ width: 2, height: 20, background: GOLD, marginTop: -2 }} />
      </div>

      {/* Bottom-right corner bracket */}
      <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <div style={{ width: 20, height: 2, background: GOLD, marginLeft: 'auto' }} />
        <div style={{ width: 2, height: 20, background: GOLD, marginLeft: 'auto', marginTop: -2 }} />
      </div>

      {/* Small decorative dots row */}
      <div style={{
        position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 6, alignItems: 'center',
      }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{
            width: i === 2 ? 6 : 3,
            height: i === 2 ? 6 : 3,
            borderRadius: '50%',
            background: i === 2 ? GOLD : `${GOLD}55`,
          }} />
        ))}
      </div>

      {/* Bottom decorative line */}
      <div style={{ position: 'absolute', bottom: 28, left: 32, right: 32, height: 1, background: DARK_BORDER }} />

      {/* Content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>

        {/* Eyebrow */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20,
        }}>
          <div style={{ width: 32, height: 1, background: GOLD }} />
          <div style={{ color: GOLD, fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', fontWeight: 600 }}>
            {eyebrow}
          </div>
        </div>

        {/* Main title */}
        <h1 style={{ color: OFF_WHITE, fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 200, margin: 0, lineHeight: 1.1 }}>
          {boldFirst ? (
            <>
              <span style={{ color: GOLD, fontWeight: 700 }}>{titleBold}</span>
              {' '}{titleLight}
            </>
          ) : (
            <>
              {titleLight}{' '}
              <span style={{ color: GOLD, fontWeight: 700 }}>{titleBold}</span>
            </>
          )}
        </h1>

        {/* Underline accent */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
          <div style={{ width: 56, height: 2, background: GOLD }} />
          <div style={{ width: 8, height: 8, border: `1.5px solid ${GOLD}`, borderRadius: '50%' }} />
          <div style={{ width: 24, height: 1, background: `${GOLD}55` }} />
        </div>
      </div>
    </section>
  );
}
