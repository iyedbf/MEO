const items = [
  'Luxury Renovation',
  'Bespoke Design',
  'Property Development',
  'Commercial Projects',
  'Fine Interiors',
  'Investment Consultancy',
  'Hotel & Hospitality',
  'Mansion & Penthouse',
];

const SEPARATOR = '◆';

export default function MarqueeBand() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      style={{
        background: '#C9A84C',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '10px 0',
        borderTop: '1px solid #b8943a',
        borderBottom: '1px solid #b8943a',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: 0,
          animation: 'marquee 28s linear infinite',
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 24,
              color: '#0A0A0A',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              paddingRight: 24,
            }}
          >
            {item}
            <span style={{ color: '#00000066', fontSize: 8 }}>{SEPARATOR}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
