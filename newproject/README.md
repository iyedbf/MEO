# Sentinel Defense Logistics — Website (Placeholder Build)

A standalone React + TypeScript + Vite site scaffolded as a starting point for a defense /
government-logistics contractor website. The structure and tone are inspired by:

- `us21.com` — integrated supply chain, logistics, and training services for DoD/federal clients
- `stracongroup.com/services/fms` — Foreign Military Sales service page layout (hero → stats →
  capabilities → program experience → "why us" → contact)
- `mtec-sc.org/members/ads-inc` — company profile structure (overview, certifications,
  industries, contact)

## ⚠️ This uses placeholder content

**All company name, branding, stats, certifications, and program details in this build are
placeholders** ("Sentinel Defense Logistics") meant to demonstrate the layout and structure.
Replace them with the real company's information before launch.

The single place to edit almost everything is:

```
src/config/site.ts
```

This file exports:

- `company` — name, tagline, address, phone, email, certifications, etc.
- `navLinks` — top nav / footer links
- `heroStats` / `byTheNumbers` — stat callouts
- `capabilities` — the 6 capability cards shown on Home and the Capabilities page
- `programAreas` — rows on the Programs page
- `whyUs` — "Why Us" cards
- `aboutContent` — About page copy

Colors and design tokens (dark navy + gold/blue accent) live in `src/index.css` as CSS
variables (`--navy`, `--gold`, `--accent`, etc.) — change them there to re-theme the site.

## Pages

- `/` — Home: hero, stats bar, capabilities grid, CTA, "why us"
- `/about` — Company profile: overview, mission, certifications, industries
- `/capabilities` — Full capabilities detail + program stats + "why us" (StraCon FMS-style)
- `/programs` — Program experience by mission area and country count
- `/contact` — Contact info + inquiry form (front-end only, no backend wired up yet)

## Getting Started

```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check + production build
npm run lint      # lint with oxlint
npm run preview  # preview the production build locally
```

## Next Steps

1. Swap placeholder company info/content in `src/config/site.ts` for the real company.
2. Add a real logo (replace the text initials mark in `Navbar.tsx`).
3. Wire up the contact form in `src/pages/Contact.tsx` to a real backend/email service.
4. Add real photography/imagery if desired (currently a clean typographic/graphic design with
   no photos).
