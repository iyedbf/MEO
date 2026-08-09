import './StatsBar.css';

type Stat = { value: string; label: string };

export default function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="stats-bar">
      <div className="container stats-bar-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stats-bar-item">
            <div className="stats-bar-value">{stat.value}</div>
            <div className="stats-bar-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
