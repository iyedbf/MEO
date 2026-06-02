import { useState } from 'react';
import { GOLD, BLACK, DARK_BORDER, OFF_WHITE, GREY, CHARCOAL, DARK_CARD, GOLD_MUTED } from '../theme';
import { siteImages } from '../images';

type Category = 'All' | 'House' | 'Villa' | 'Residence' | 'Mansion' | 'Penthouse' | 'Hotel' | 'Restaurant';

const allProjects: { type: string; year: string; category: Exclude<Category, 'All'>; size: string; image: string }[] = [
  { type: 'Modern House', year: '2023', category: 'House', size: 'Large', image: siteImages.modernHouse },
  { type: 'Coastal Villa', year: '2023', category: 'Villa', size: 'Extra Large', image: siteImages.villa },
  { type: 'Urban Residence', year: '2024', category: 'Residence', size: 'Medium', image: siteImages.residence },
  { type: 'Country Residence', year: '2024', category: 'Residence', size: 'Large', image: siteImages.luxuryInterior },
  { type: 'Estate Mansion', year: '2025', category: 'Mansion', size: 'Estate', image: siteImages.mansion },
  { type: 'Private Mansion', year: '2025', category: 'Mansion', size: 'Estate', image: siteImages.heroVilla },
  { type: 'Contemporary Mansion', year: '2025', category: 'Mansion', size: 'Estate', image: siteImages.bespokeDesign },
  { type: 'Sky Penthouse', year: '2025', category: 'Penthouse', size: 'Large', image: siteImages.penthouse },
  { type: 'Boutique Hotel', year: '2025', category: 'Hotel', size: 'Commercial', image: siteImages.hotel },
  { type: 'Fine Dining', year: '2025', category: 'Restaurant', size: 'Commercial', image: siteImages.restaurant },
];

const filters: Category[] = ['All', 'House', 'Villa', 'Residence', 'Mansion', 'Penthouse', 'Hotel', 'Restaurant'];

const statItems = [
  { count: '2', label: 'Houses / Villas' },
  { count: '2', label: 'Residences' },
  { count: '3', label: 'Mansions' },
  { count: '1', label: 'Penthouse' },
  { count: '2', label: 'Commercial' },
];

export default function Projects() {
  const [active, setActive] = useState<Category>('All');
  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active);

  return (
    <div style={{ background: '#0A0A0A' }}>

      {/* Page header */}
      <section style={{ background: CHARCOAL, borderBottom: `1px solid ${DARK_BORDER}`, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ color: GOLD, fontSize: 11, letterSpacing: 5, textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>Portfolio</div>
          <h1 style={{ color: OFF_WHITE, fontSize: 52, fontWeight: 200, margin: 0 }}>
            Our <span style={{ color: GOLD, fontWeight: 700 }}>Projects</span>
          </h1>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 32px' }}>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 48, flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                background: active === f ? GOLD : 'none',
                color: active === f ? BLACK : GREY,
                border: `1px solid ${active === f ? GOLD : DARK_BORDER}`,
                padding: '10px 22px', cursor: 'pointer',
                fontSize: 11, fontWeight: active === f ? 700 : 400,
                letterSpacing: 2, textTransform: 'uppercase',
                transition: 'all 0.2s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {filtered.map((p, i) => (
            <div key={i} style={{ background: DARK_CARD, border: `1px solid ${DARK_BORDER}`, overflow: 'hidden' }}>
              <div style={{
                height: 240, background: CHARCOAL,
                display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
              }}>
                <img
                  src={p.image}
                  alt={`${p.type} project`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.72) saturate(0.9)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,10,0.08) 0%, rgba(10,10,10,0.74) 100%)' }} />
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: GOLD, color: BLACK,
                  fontSize: 9, fontWeight: 700, padding: '4px 8px', letterSpacing: 1.5,
                }}>
                  {p.year}
                </div>
                <div style={{
                  position: 'absolute', bottom: 12, left: 12,
                  color: GREY, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase',
                }}>
                  {p.size}
                </div>
                <div style={{
                  position: 'absolute', bottom: 12, right: 12,
                  color: GOLD_MUTED, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase',
                }}>
                  {p.category.slice(0, 4)}
                </div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ color: GOLD, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 6 }}>
                  {p.category}
                </div>
                <div style={{ color: OFF_WHITE, fontSize: 15, fontWeight: 600 }}>{p.type}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          marginTop: 80, background: CHARCOAL,
          border: `1px solid ${DARK_BORDER}`,
          display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
        }}>
          {statItems.map((s, i) => (
            <div key={i} style={{
              padding: '28px 20px', textAlign: 'center',
              borderRight: i < 4 ? `1px solid ${DARK_BORDER}` : 'none',
            }}>
              <div style={{ color: GOLD, fontSize: 38, fontWeight: 300, lineHeight: 1 }}>{s.count}</div>
              <div style={{ color: GREY, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
