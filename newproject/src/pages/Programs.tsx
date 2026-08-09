import PageHero from '../components/PageHero';
import { programAreas, company } from '../config/site';
import './Programs.css';

export default function Programs() {
  return (
    <div>
      <PageHero
        eyebrow="Program Experience"
        title={<>Global Reach, <strong>Proven Execution.</strong></>}
        lead={`${company.name} supports partner-nation and coalition programs across multiple mission areas, delivering the visibility, rigor, and accountability required of every engagement.`}
      />

      <section className="section container">
        <div className="programs-list">
          {programAreas.map((program, idx) => (
            <div key={program.name} className="programs-row card">
              <div className="programs-row-index">{String(idx + 1).padStart(2, '0')}</div>
              <div className="programs-row-body">
                <div className="programs-row-top">
                  <h3>{program.name}</h3>
                  <span className="badge programs-row-badge">{program.countries}</span>
                </div>
                <p>{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="programs-note section container">
        <div className="card programs-note-card">
          <h3>Comprehensive International Capabilities</h3>
          <p>
            We offer a nuanced understanding of the international defense landscape, clearly
            distinguishing between standard Foreign Military Sales and complex cooperative
            development partnerships to deliver tailored, compliant, and auditable results for
            every partner nation we support.
          </p>
        </div>
      </section>
    </div>
  );
}
