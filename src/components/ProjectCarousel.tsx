import { useState } from 'react';
import { GOLD } from '../theme';

export default function ProjectCarousel({ images, isMobile }: { images: string[]; isMobile: boolean }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  if (total === 0) return null;

  const prev = () => setIndex(i => (i - 1 + total) % total);
  const next = () => setIndex(i => (i + 1) % total);

  const arrowStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    [side]: 12,
    background: 'rgba(0,0,0,0.65)',
    border: `1px solid ${GOLD}55`,
    color: GOLD, fontSize: 18, fontWeight: 300,
    width: isMobile ? 34 : 42, height: isMobile ? 34 : 42,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', zIndex: 10,
    transition: 'background 0.2s, border-color 0.2s',
    userSelect: 'none',
  });

  return (
    <div style={{ position: 'relative', height: isMobile ? 260 : 460, overflow: 'hidden' }}>
      <img
        key={index}
        src={images[index]}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'opacity 0.35s ease' }}
      />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 56, height: 3, background: GOLD, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 3, height: 56, background: GOLD, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(transparent, rgba(0,0,0,0.55))', pointerEvents: 'none' }} />
      {total > 1 && (
        <>
          <button style={arrowStyle('left')} onClick={prev}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}22`; (e.currentTarget as HTMLButtonElement).style.borderColor = GOLD; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.65)'; (e.currentTarget as HTMLButtonElement).style.borderColor = `${GOLD}55`; }}>
            ‹
          </button>
          <button style={arrowStyle('right')} onClick={next}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}22`; (e.currentTarget as HTMLButtonElement).style.borderColor = GOLD; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.65)'; (e.currentTarget as HTMLButtonElement).style.borderColor = `${GOLD}55`; }}>
            ›
          </button>
        </>
      )}
      {total > 1 && (
        <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(0,0,0,0.7)', border: `1px solid ${GOLD}44`, color: GOLD, fontSize: 10, letterSpacing: 1.5, padding: '4px 10px' }}>
          {index + 1} / {total}
        </div>
      )}
      {total > 1 && (
        <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
          {images.map((_, j) => (
            <button key={j} onClick={() => setIndex(j)} style={{
              width: j === index ? 18 : 6, height: 6,
              background: j === index ? GOLD : `${GOLD}44`,
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.3s, background 0.3s',
            }} />
          ))}
        </div>
      )}
    </div>
  );
}
