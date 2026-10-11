# Clinique Belle website – Phase 1 (Home + About Us)

A Next.js (App Router, TypeScript) rebuild of the **Home** and **About Us** pages, based on the HTML files supplied by the SEO consultant. This is a **preview build**. It does not touch the live WordPress site.

## Run it on your computer

Needs Node.js 20 or newer (check with `node -v`).

```bash
npm install          # downloads dependencies (first time only)
npm run dev          # development server -> open http://localhost:3000
```

Success looks like: the terminal says `Ready`, and the browser shows the Home page. `/about-us/` shows the About Us page.

Before sharing a preview, always check the production build:

```bash
npm run build        # must finish with no errors
npm start            # serves the production build on http://localhost:3000
npm run typecheck    # TypeScript check
BASE=http://localhost:3000 npm run check:links   # (second terminal) checks every link
```

## What is where

| Folder | Purpose |
| --- | --- |
| `app/` | One folder per URL. `app/page.tsx` = Home, `app/about-us/page.tsx` = About Us. Each page sets its own title, description and canonical. `robots.ts` and `sitemap.ts` generate those files. |
| `components/` | Reusable pieces: Header (with mobile menu), Footer, Button, DoctorCard, Testimonial, StatStrip, ConsultationCTA, SectionHead. |
| `content/` | The page text as typed data (doctors, testimonials, navigation, procedures). **Edit wording here.** |
| `lib/routes.ts` | Every URL on the site, using the **live** WordPress URLs. `built: true` = exists in this app. |
| `lib/site.ts` | Phone numbers, address, production domain. |
| `public/` | Logo (`logo.png`, extracted from the supplied files). |
| `scripts/` | Link checker and a snapshot of the live page sitemap. |

## How links work in the preview

Pages not built yet (procedures, doctors, gallery…) link to the **live WordPress page** at its real URL, so nothing is broken. When you build a new page, set `built: true` for it in `lib/routes.ts` and its links become internal automatically.

## Indexing is OFF by default

Every response carries `X-Robots-Tag: noindex`, a `noindex` meta tag, and `robots.txt` blocks all crawlers. Canonical tags always point to `https://cliniquebelle.in/...`. Set `ALLOW_INDEXING=true` **only** on the final, approved production deployment (see `.env.example`).

## Photos (drop-in slots)

The Renewal-style design uses photo slots. Put a file named after the slot in `public/images/` (jpg, jpeg, webp or png) and it is picked up on the next build. Until a file exists the slot shows a plum gradient.

| File name | Where it appears | Suggested size |
| --- | --- | --- |
| `hero-welcome` | Home banner, slide 1 (general) | 2400×1400, subject on the right |
| `hero-mummy-makeover` | Home banner, slide 2 (mommy makeover) | 2400×1400 |
| `hero-hair` | Home banner, slide 3 (hair transplantation) | 2400×1400 |
| `hero-face` | Home banner, slide 4 (facial rejuvenation) | 2400×1400 |
| `testimonial` | Left half of the Home testimonials band | 1200×1400, portrait |
| `proc-hair`, `proc-body`, `proc-face`, `proc-breast`, `proc-reconstructive` | Home carousel + Procedures page | 1000×1250 (4:5) |
| `doctors-band` | Home "Our doctors" band | 2400×1200 |
| `page-procedures`, `page-doctors`, `page-testimonials`, `page-videos`, `page-contact` | Banner behind each inner page title | 2400×900 |
| `about-expect` | About Us, "What to expect" | 1000×1250 |

Use licensed or clinic-owned photos of Indian patients and staff.

## Known limitations

- **Photos are hotlinked** from `cliniquebelle.in/wp-content/uploads/` (no originals were supplied). Replace with files in `public/images/` and update `content/doctors.ts`.
- **No forms.** Calls to action are links to the live contact page plus phone numbers. A real enquiry form needs an endpoint, spam protection and a decision on where leads go.
- **Social icons omitted** (the supplied footer linked them to `#`).
- **Google Tag Manager is not loaded.** Set `NEXT_PUBLIC_GTM_ID` only after the consultant confirms (live site uses `GTM-MFN4TP37`).
- **Footer year** is set at build time.
- TypeScript is pinned to 5.9 because Next 15.5 cannot load `next.config.ts` with TypeScript 7.
- `npm audit` reports advisories in dependencies; review before production.

See `APPROVALS.md` for what needs sign-off before launch.
