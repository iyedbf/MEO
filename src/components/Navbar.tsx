import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL } from '../theme';
import { useLang } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

const navLinks = [
  { path: '/',          en: 'Home',        tr: 'Ana Sayfa' },
  { path: '/about',     en: 'About',       tr: 'Hakkımızda' },
  { path: '/services',  en: 'Services',    tr: 'Hizmetler' },
  { path: '/design',    en: 'Design & Dev',tr: 'Tasarım' },
  { path: '/projects',  en: 'Projects',    tr: 'Projeler' },
  { path: '/partners',  en: 'Partners',    tr: 'Ortaklar' },
  { path: '/contact',   en: 'Contact',     tr: 'İletişim' },
];

const FlagButtons = ({ lang, setLang }: { lang: string; setLang: (l: 'en' | 'tr') => void }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
    {([{ code: 'en', flag: '🇺🇸', label: 'EN' }, { code: 'tr', flag: '🇹🇷', label: 'TR' }] as const).map(({ code, flag, label }) => (
      <button
        key={code}
        onClick={() => setLang(code)}
        style={{
          display: 'flex', alignItems: 'center', gap: 4,
          background: lang === code ? `${GOLD}18` : 'transparent',
          border: `1px solid ${lang === code ? GOLD : DARK_BORDER}`,
          padding: '4px 8px', borderRadius: 2, cursor: 'pointer', outline: 'none',
        }}
      >
        <span style={{ fontSize: 15, lineHeight: 1 }}>{flag}</span>
        <span style={{ color: lang === code ? GOLD : GREY, fontSize: 9, fontWeight: 700, letterSpacing: 1.5 }}>{label}</span>
      </button>
    ))}
  </div>
);

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { isMobile } = useResponsive();

  return (
    <nav style={{ background: BLACK, borderBottom: `1px solid ${DARK_BORDER}`, position: 'sticky', top: 0, zIndex: 1000 }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64,
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, border: `2px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: 1 }}>MEO</span>
          </div>
          {!isMobile && (
            <div>
              <div style={{ color: OFF_WHITE, fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: 'uppercase' }}>Development</div>
              <div style={{ color: GOLD, fontSize: 9, letterSpacing: 3.5, textTransform: 'uppercase' }}>LLC</div>
            </div>
          )}
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 2 }}>
            {navLinks.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} style={{
                  color: active ? GOLD : GREY, fontSize: 11, letterSpacing: 1.5,
                  textTransform: 'uppercase', padding: '8px 12px',
                  borderBottom: active ? `2px solid ${GOLD}` : '2px solid transparent',
                  fontWeight: active ? 600 : 400, transition: 'color 0.2s', textDecoration: 'none',
                }}>
                  {lang === 'tr' ? link.tr : link.en}
                </Link>
              );
            })}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {!isMobile && (
            <>
              <FlagButtons lang={lang} setLang={setLang} />
              <Link to="/contact" style={{
                background: GOLD, color: BLACK, padding: '10px 20px',
                fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none',
              }}>
                {t('Get in Touch', 'İletişime Geç')}
              </Link>
            </>
          )}

          {/* Mobile: flags only + hamburger */}
          {isMobile && (
            <>
              <FlagButtons lang={lang} setLang={setLang} />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ background: 'none', border: `1px solid ${DARK_BORDER}`, padding: '8px 10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5 }}
              >
                <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? GOLD : OFF_WHITE, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
                <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? GOLD : OFF_WHITE, transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
                <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? GOLD : OFF_WHITE, transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && isMobile && (
        <div style={{ background: CHARCOAL, borderTop: `1px solid ${DARK_BORDER}`, padding: '16px' }}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)} style={{
              display: 'block', color: location.pathname === link.path ? GOLD : GREY,
              fontSize: 14, letterSpacing: 1.5, textTransform: 'uppercase',
              padding: '14px 0', borderBottom: `1px solid ${DARK_BORDER}`, textDecoration: 'none',
            }}>
              {lang === 'tr' ? link.tr : link.en}
            </Link>
          ))}

          {/* Language switcher inside mobile menu */}
          <div style={{ display: 'flex', gap: 10, marginTop: 20, marginBottom: 4 }}>
            {([{ code: 'en', flag: '🇺🇸', label: 'English' }, { code: 'tr', flag: '🇹🇷', label: 'Türkçe' }] as const).map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => { setLang(code); setMenuOpen(false); }}
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: lang === code ? `${GOLD}22` : 'transparent',
                  border: `1px solid ${lang === code ? GOLD : DARK_BORDER}`,
                  padding: '12px', cursor: 'pointer', outline: 'none',
                }}
              >
                <span style={{ fontSize: 20 }}>{flag}</span>
                <span style={{ color: lang === code ? GOLD : GREY, fontSize: 11, fontWeight: 700, letterSpacing: 1.5 }}>{label}</span>
              </button>
            ))}
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)} style={{
            display: 'block', textAlign: 'center', background: GOLD, color: BLACK,
            padding: '14px', fontSize: 11, fontWeight: 700, letterSpacing: 2,
            textTransform: 'uppercase', textDecoration: 'none', marginTop: 12,
          }}>
            {t('Get in Touch', 'İletişime Geç')}
          </Link>
        </div>
      )}
    </nav>
  );
}
