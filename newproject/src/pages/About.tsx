import PageHero from '../components/PageHero';
import { company, aboutContent } from '../config/site';
import './About.css';

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title={<>Built on Discipline. <strong>Driven by Mission.</strong></>}
        lead={aboutContent.overview}
      />

      <section className="section container about-grid">
        <div className="about-main">
          <h2 className="about-heading">Our Mission</h2>
          <p className="about-text">{aboutContent.mission}</p>

          <h2 className="about-heading">Community Commitment</h2>
          <p className="about-text">{aboutContent.community}</p>

          <h2 className="about-heading">Industries We Serve</h2>
          <div className="about-tags">
            {aboutContent.industries.map((industry) => (
              <span key={industry} className="badge about-tag">
                {industry}
              </span>
            ))}
          </div>
        </div>

        <aside className="about-sidebar card">
          <h3 className="about-sidebar-heading">Company Profile</h3>
          <dl className="about-facts">
            <div>
              <dt>Founded</dt>
              <dd>{company.founded}</dd>
            </div>
            <div>
              <dt>Headquarters</dt>
              <dd>{company.headquarters}</dd>
            </div>
            <div>
              <dt>Company Size</dt>
              <dd>{company.employeeRange}</dd>
            </div>
            <div>
              <dt>CAGE Code</dt>
              <dd>{company.cageCode}</dd>
            </div>
            <div>
              <dt>NAICS Codes</dt>
              <dd>{company.naics.join(', ')}</dd>
            </div>
          </dl>

          <h3 className="about-sidebar-heading">Certifications</h3>
          <ul className="about-cert-list">
            {company.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}
