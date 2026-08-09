// -----------------------------------------------------------------------------
// SITE CONFIG — edit everything here to rebrand the site without touching
// components or pages. Replace the placeholder company info, stats, and copy
// below with the real company's details when ready.
// -----------------------------------------------------------------------------

export const company = {
  name: 'Sentinel Defense Logistics',
  shortName: 'Sentinel',
  legalSuffix: 'LLC',
  tagline: 'Empowering Missions. Delivering Readiness.',
  founded: '2004',
  headquarters: 'Fairfax, Virginia',
  address: '2721 Prosperity Ave, Suite 300, Fairfax, VA 22031',
  phone: '(703) 555-0142',
  email: 'info@sentineldefenselogistics.com',
  employeeRange: '50-200 employees',
  cageCode: '1A2B3',
  naics: ['541614', '336413', '811210'],
  certifications: ['ISO 9001:2015', 'AS9100D', 'ISO 14001:2015', 'CMMC Level 2 (In Progress)'],
};

export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/capabilities', label: 'Capabilities' },
  { path: '/programs', label: 'Programs' },
  { path: '/contact', label: 'Contact' },
];

export const heroStats = [
  { value: '20+', label: 'Years of Service' },
  { value: '30+', label: 'Partner Nations' },
  { value: '150+', label: 'Active Programs' },
  { value: '98%', label: 'On-Time Delivery' },
];

export type Capability = {
  number: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
};

export const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Supply Chain & Logistics',
    summary: 'End-to-end procurement, warehousing, and distribution for mission-critical materiel.',
    description:
      'We design and operate resilient supply chains that move equipment, parts, and consumables from source to point of need — anywhere in the world, under any operating condition.',
    bullets: ['Global procurement & sourcing', 'Warehousing & inventory management', 'Last-mile distribution to austere environments', 'Freight forwarding & customs coordination'],
  },
  {
    number: '02',
    title: 'Foreign Military Sales & International Programs',
    summary: 'Case development, execution, and closure support across the full FMS lifecycle.',
    description:
      'Our team bridges U.S. acquisition strategy with the technical and financial rigor required to support partner-nation programs of every size and complexity, from pre-case development through case closure.',
    bullets: ['LOA case development & execution', 'Security Assistance Management Manual (SAMM) compliance', 'Configuration control & technical data management', 'Financial case management & reconciliation'],
  },
  {
    number: '03',
    title: 'Program & Case Management',
    summary: 'Disciplined program governance applied across acquisition, engineering, and logistics.',
    description:
      'We apply the same rigor required of major acquisition programs to cases of every size, keeping cost, schedule, and performance auditable at every stage.',
    bullets: ['Integrated master schedules', 'Risk & performance management', 'Configuration & data management', 'Stakeholder & sponsor reporting'],
  },
  {
    number: '04',
    title: 'Training & Readiness',
    summary: 'Curriculum development and hands-on instruction that keeps operators and technicians mission-ready.',
    description:
      'From new-equipment training to sustainment courses, we build and deliver training programs tailored to partner-nation force structures and equipment sets.',
    bullets: ['New equipment training (NET)', 'Sustainment & maintainer training', 'Train-the-trainer programs', 'Simulation & virtual training support'],
  },
  {
    number: '05',
    title: 'Technology & Communications',
    summary: 'Integrated tactical communications, IT, and data solutions for connected operations.',
    description:
      'We field and sustain the tactical communications and information systems that keep dispersed forces connected and interoperable with coalition partners.',
    bullets: ['Tactical communications systems', 'Satellite communications integration', 'Information assurance & cybersecurity support', 'C4ISR sustainment'],
  },
  {
    number: '06',
    title: 'Tactical & Safety Equipment',
    summary: 'Sourcing and fielding of tactical, protective, and medical equipment at scale.',
    description:
      'We identify, qualify, and deliver the tactical, protective, and medical equipment that units need to operate safely and effectively in the field.',
    bullets: ['Personal protective equipment (PPE)', 'Tactical gear & field equipment', 'Medical & safety supplies', 'Equipment fielding & fit-testing'],
  },
];

export type ProgramArea = {
  name: string;
  countries: string;
  description: string;
};

export const programAreas: ProgramArea[] = [
  { name: 'Rotary & Fixed-Wing Aviation Sustainment', countries: '18 countries', description: 'Sustainment logistics, spares provisioning, and technical support for partner-nation aviation fleets.' },
  { name: 'Ground Systems & Vehicle Support', countries: '12 countries', description: 'Fielding, sustainment, and lifecycle support for tactical and armored ground vehicle programs.' },
  { name: 'C4ISR & Communications Systems', countries: '9 countries', description: 'Integration and sustainment of command, control, and communications systems for coalition interoperability.' },
  { name: 'Munitions & Weapons Systems Logistics', countries: '14 countries', description: 'Configuration-controlled logistics support for guided and unguided munitions programs.' },
  { name: 'Training Systems Support', countries: '11 countries', description: 'Curriculum development and delivery for maintainer, operator, and leadership training programs.' },
  { name: 'Base & Infrastructure Operations', countries: '7 countries', description: 'Facilities, base operating support, and infrastructure sustainment for partner-nation installations.' },
];

export const byTheNumbers = [
  { value: '30+', label: 'Partner nations & NATO organizations supported' },
  { value: '150+', label: 'Active FMS and international program cases' },
  { value: '6', label: 'Core capability areas' },
  { value: '20+', label: 'Years supporting DoD, DoS, and allied partners' },
];

export const whyUs = [
  {
    title: 'Deep Regulatory Expertise',
    description:
      'Our team maintains an intimate understanding of Security Assistance Management Manual (SAMM) 5105.38-M, the Arms Export Control Act, and International Traffic in Arms Regulations.',
  },
  {
    title: 'End-to-End Program Rigor',
    description:
      'We apply the discipline of major acquisition programs to cases of every size, keeping cost, schedule, and performance auditable from pre-case development through closure.',
  },
  {
    title: 'Integrated Capabilities',
    description:
      'Logistics, engineering, training, and cybersecurity are delivered as one integrated team, reducing handoff risk and accelerating fielding.',
  },
  {
    title: 'Trusted by Partner Nations',
    description:
      'We have built lasting relationships with allied nations and coalition partners by consistently delivering on commitments under demanding conditions.',
  },
];

export const aboutContent = {
  overview:
    `${company.name} is a value-added logistics, supply chain, and program management provider serving the U.S. Department of Defense, federal civilian agencies, and partner nations worldwide. Founded in ${company.founded} and headquartered in ${company.headquarters}, we have grown into a trusted prime and subcontractor partner recognized for disciplined program execution, rapid response, and unwavering commitment to mission readiness.`,
  mission:
    'Our mission is to bridge the gap between acquisition strategy and mission execution — delivering the equipment, training, and program support that keep our customers and their partners ready, wherever they operate.',
  community:
    `${company.shortName} is deeply invested in the communities we serve. We support military families, veterans, and first responders through scholarships, hiring initiatives, and ongoing community engagement.`,
  industries: ['Defense & Aerospace', 'Federal Government', 'International Security Cooperation', 'Homeland Security'],
};
