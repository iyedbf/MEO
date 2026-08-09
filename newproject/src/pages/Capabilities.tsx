import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CapabilityCard from '../components/CapabilityCard';
import StatsBar from '../components/StatsBar';
import { capabilities, byTheNumbers, whyUs, company } from '../config/site';
import './Capabilities.css';

export default function Capabilities() {
  return (
    <div>
      <PageHero
        eyebrow="Capabilities"
        title={<>Full-Spectrum Support, <strong>From Case to Closure.</strong></>}
        lead={`${company.name} provides comprehensive program support, bridging acquisition strategy with the technical, financial, and logistical rigor required to deliver mission readiness at every scale.`}
      />

      <StatsBar stats={byTheNumbers} />

      <section className="section container">
        <div className="section-header">
          <div className="eyebrow">Core Capabilities</div>
          <h2 className="section-title">What We Deliver</h2>
          <div className="divider" />
          <p className="section-lead">
            Every engagement is backed by disciplined program management, deep regulatory
            expertise, and an integrated team of logistics, engineering, and training
            professionals.
          </p>
        </div>
        <div className="grid grid-3">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.number} capability={cap} />
          ))}
        </div>
      </section>

      <section className="capabilities-why">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Why {company.shortName}</div>
            <h2 className="section-title">A Partner You Can Rely On</h2>
            <div className="divider" />
          </div>
          <div className="grid grid-2">
            {whyUs.map((item) => (
              <div key={item.title} className="card capabilities-why-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container capabilities-cta">
        <h2 className="section-title">Have a Program in Mind?</h2>
        <p className="section-lead" style={{ margin: '0 auto 28px' }}>
          Tell us about your mission requirements and our team will help you scope the right
          support package.
        </p>
        <Link to="/contact" className="btn btn-gold">
          Start the Conversation
        </Link>
      </section>
    </div>
  );
}
