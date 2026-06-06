import { GOLD, DARK_BORDER, OFF_WHITE, CHARCOAL } from '../theme';

interface PageHeaderProps {
  eyebrow: string;       // small text above title e.g. "Portfolio"
  titleLight: string;    // normal-weight part of title
  titleBold: string;     // gold bold part of title
  watermark: string;     // large background ghost text
  boldFirst?: boolean;   // if true, bold part comes first
}

export default function PageHeader({ eyebrow, titleLight, titleBold, watermark, boldFirst = false }: PageHeaderProps) {
  return (
    <section style={{
      background: CHARCOAL,
      borderBottom: `1px solid ${DARK_BORDER}`,
      padding: '90px 32px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Watermark ghost text */}
      <div style={{
        position: 'absolute',
        top: '50%', right: -20,
        transform: 'translateY(-50%)',
        fontSize: 'clamp(80px, 12vw, 160px)',
        fontWeight: 800,
        color: '#ffffff',
        opacity: 0.025,
        letterSpacing: -4,
        whiteSpace: 'nowrap',
        userSelect: 'none',
        lineHeight: 1,
        pointerEvents: 'none',
      }}>
        {watermark}
      </div>

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
