import { Link } from 'react-router-dom';
import { company, navLinks } from '../config/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-name">
            {company.shortName} <span>{company.legalSuffix}</span>
          </div>
          <p className="footer-tagline">{company.tagline}</p>
          <p className="footer-address">{company.address}</p>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Navigate</div>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="footer-link">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <div className="footer-heading">Contact</div>
          <a className="footer-link" href={`tel:${company.phone.replace(/[^\d+]/g, '')}`}>
            {company.phone}
          </a>
          <a className="footer-link" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <span className="footer-link">CAGE Code: {company.cageCode}</span>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Certifications</div>
          {company.certifications.map((cert) => (
            <span key={cert} className="footer-link">
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}, {company.legalSuffix}. All rights reserved.</span>
      </div>
    </footer>
  );
}
