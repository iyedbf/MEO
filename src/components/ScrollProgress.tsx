import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GOLD, GOLD_LIGHT } from '../theme';

/**
 * Thin gold bar fixed at the very top of the viewport that fills up
 * as the visitor scrolls down the current page — a subtle indicator
 * of reading/scroll progress across every page.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [location.pathname]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 3,
        zIndex: 2000,
        background: 'transparent',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
          boxShadow: `0 0 8px ${GOLD}99`,
          transition: 'width 0.12s ease-out',
        }}
      />
    </div>
  );
}
