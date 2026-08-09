import type { ReactNode } from 'react';
import './PageHero.css';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
  compact?: boolean;
};

export default function PageHero({ eyebrow, title, lead, children, compact }: PageHeroProps) {
  return (
    <section className={`page-hero ${compact ? 'page-hero-compact' : ''}`}>
      <div className="page-hero-grid" />
      <div className="container page-hero-content">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="page-hero-title">{title}</h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
