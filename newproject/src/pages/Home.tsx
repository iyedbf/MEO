import { Link } from 'react-router-dom';
import { company, heroStats, capabilities, whyUs } from '../config/site';
import StatsBar from '../components/StatsBar';
import CapabilityCard from '../components/CapabilityCard';
import './Home.css';

export default function Home() {
  return (
    <div>
      <section className="home-hero">
        <div className="home-hero-grid" />
        <div className="container home-hero-content">
          <div className="badge">Serving DoD · Federal Agencies · Partner Nations</div>
          <h1 className="home-hero-title">
            {company.tagline.split('.').filter(Boolean).map((part, i) => (
              <span key={i} className={i % 2 === 1 ? 'gold' : ''}>
                {part.trim()}.{' '}
              </span>
            ))}
          </h1>
          <p className="home-hero-lead">
            {company.name} delivers integrated supply chain, logistics, and program management
            solutions that keep mission-critical operations moving — from procurement and
            fielding to sustainment and training, wherever our partners operate.
          </p>
          <div className="home-hero-actions">
            <Link to="/capabilities" className="btn btn-gold">
              Explore Capabilities
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <StatsBar stats={heroStats} />

      <section className="section container">
        <div className="section-header">
          <div className="eyebrow">What We Do</div>
          <h2 className="section-title">Integrated Capabilities</h2>
          <div className="divider" />
          <p className="section-lead">
            We offer a comprehensive suite of logistics, program management, and technical
            capabilities tailored to the requirements of defense, federal, and international
            customers.
          </p>
        </div>
        <div className="grid grid-3 home-capabilities-grid">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.number} capability={cap} />
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div className="container home-cta-inner">
          <div>
            <div className="home-cta-title">Ready to Strengthen Your Mission Readiness?</div>
            <div className="home-cta-sub">
              Partner with a team that understands the rigor and accountability your programs demand.
            </div>
          </div>
          <Link to="/contact" className="btn btn-gold">
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <div className="eyebrow">Why {company.shortName}</div>
          <h2 className="section-title">Trusted. Disciplined. Mission-Ready.</h2>
          <div className="divider" />
        </div>
        <div className="grid grid-2 home-why-grid">
          {whyUs.map((item) => (
            <div key={item.title} className="card home-why-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
