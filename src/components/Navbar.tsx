import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL } from '../theme';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/design', label: 'Design & Dev' },
  { path: '/projects', label: 'Projects' },
  { path: '/partners', label: 'Partners' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
                {link.label}
              </Link>
            );
          })}
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
          Get in Touch
        </Link>
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
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
