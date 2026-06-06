import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL } from '../theme';
import { useLang } from '../context/LanguageContext';

const navLinks = [
  { path: '/',          en: 'Home',        tr: 'Ana Sayfa' },
  { path: '/about',     en: 'About',       tr: 'Hakkımızda' },
  { path: '/services',  en: 'Services',    tr: 'Hizmetler' },
  { path: '/design',    en: 'Design & Dev',tr: 'Tasarım' },
  { path: '/projects',  en: 'Projects',    tr: 'Projeler' },
  { path: '/partners',  en: 'Partners',    tr: 'Ortaklar' },
  { path: '/contact',   en: 'Contact',     tr: 'İletişim' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <nav style={{
      background: BLACK,
      borderBottom: `1px solid ${DARK_BORDER}`,
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 68,
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 38,
            height: 38,
            border: `2px solid ${GOLD}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, letterSpacing: 1 }}>MEO</span>
          </div>
          <div>
            <div style={{ color: OFF_WHITE, fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: 'uppercase' }}>
              Development
            </div>
            <div style={{ color: GOLD, fontSize: 9, letterSpacing: 3.5, textTransform: 'uppercase' }}>
              LLC
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: 2 }} className="desktop-nav">
          {navLinks.map(link => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: active ? GOLD : GREY,
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  padding: '8px 14px',
                  borderBottom: active ? `2px solid ${GOLD}` : '2px solid transparent',
                  fontWeight: active ? 600 : 400,
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                }}
              >
                {lang === 'tr' ? link.tr : link.en}
              </Link>
            );
          })}
        </div>

        {/* Right: language flags + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

          {/* Flag switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginRight: 8 }}>
            {([
              { code: 'en', flag: '🇺🇸', label: 'EN' },
              { code: 'tr', flag: '🇹🇷', label: 'TR' },
            ] as const).map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                title={code === 'en' ? 'English' : 'Türkçe'}
                style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  background: lang === code ? `${GOLD}18` : 'transparent',
                  border: `1px solid ${lang === code ? GOLD : DARK_BORDER}`,
                  padding: '4px 8px',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                  outline: 'none',
                }}
              >
                <span style={{ fontSize: 16, lineHeight: 1 }}>{flag}</span>
                <span style={{
                  color: lang === code ? GOLD : GREY,
                  fontSize: 9, fontWeight: 700, letterSpacing: 1.5,
                }}>
                  {label}
                </span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            style={{
              background: GOLD,
              color: BLACK,
              padding: '10px 22px',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            {t('Get in Touch', 'İletişime Geç')}
          </Link>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          background: CHARCOAL,
          borderTop: `1px solid ${DARK_BORDER}`,
          padding: '20px 32px',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: location.pathname === link.path ? GOLD : GREY,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: `1px solid ${DARK_BORDER}`,
                textDecoration: 'none',
              }}
            >
              {lang === 'tr' ? link.tr : link.en}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
