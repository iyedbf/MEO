import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { company, navLinks } from '../config/site';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="navbar-mark">{company.shortName.slice(0, 2).toUpperCase()}</span>
          <span className="navbar-name">
            <span className="navbar-name-main">{company.shortName}</span>
            <span className="navbar-name-sub">Defense &amp; Logistics</span>
          </span>
        </Link>

        <nav className="navbar-links navbar-links-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-cta">
          <Link to="/contact" className="btn btn-gold">
            Contact Us
          </Link>
        </div>

        <button
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-gold navbar-mobile-cta" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
