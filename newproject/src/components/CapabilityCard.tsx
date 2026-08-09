import type { Capability } from '../config/site';
import './CapabilityCard.css';

export default function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <div className="capability-card card">
      <div className="capability-card-number">{capability.number}</div>
      <h3 className="capability-card-title">{capability.title}</h3>
      <p className="capability-card-summary">{capability.summary}</p>
      <ul className="capability-card-list">
        {capability.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
