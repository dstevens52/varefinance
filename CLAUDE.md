# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

There is no test suite configured yet.

## Architecture

This is a **Next.js 16 App Router** project for Varefinance.com — a VA loan refinancing education and lead generation site.

**Stack:**
- React 19, TypeScript (strict), Tailwind CSS v4, Geist font
- `next-mdx-remote` for blog MDX rendering
- `gray-matter` for MDX frontmatter parsing
- `resend` for transactional email (lead form submissions)

**Key conventions:**
- Path alias `@/*` maps to the project root
- Tailwind v4 custom colors defined in `app/globals.css` under `@theme inline` — use `bg-navy-900`, `text-gold-500`, etc.
- Dark mode via CSS `prefers-color-scheme` using `--background`/`--foreground` CSS variables

### Pages
- `/` — Home (hero, loan type cards, lead form)
- `/va-irrrl` — VA Streamline Refinance education + FAQ
- `/va-cash-out` — VA Cash-Out Refinance education + FAQ
- `/va-purchase` — VA Home Purchase overview
- `/blog` — Blog index (reads from `content/blog/*.mdx`)
- `/blog/[slug]` — Blog post (MDX rendered via `next-mdx-remote/rsc`)
- `/contact` — Full lead generation form
- `/about` — Mission/about page

### Blog system
- Articles are MDX files in `content/blog/[slug].mdx`
- Frontmatter fields: `title`, `description`, `date`, `author`, `category`, `readTime`
- Add a new article by creating a new `.mdx` file in `content/blog/` — no code changes needed
- Blog utilities: `lib/blog.ts` (`getAllPosts()`, `getPostBySlug()`)

### Lead form & email
- Form at `/contact` (and inline on every content page) POSTs to `/api/contact`
- Email sent via Resend. Set env vars before deploying:
  - `RESEND_API_KEY` — from resend.com
  - `LEAD_EMAIL` — recipient address (server-side only, never in client code)
- Create `.env.local` from `.env.local.example`

### Components
- `components/Header.tsx` — sticky nav, mobile hamburger (client component)
- `components/Footer.tsx` — dark navy, 4-column layout
- `components/LeadForm.tsx` — full 6-field form with success state
- `components/LeadFormCompact.tsx` — name + email quick form
- `components/FAQAccordion.tsx` — accordion toggle (client component)

### Styling
- Navy palette: `navy-950` → `navy-50`; Gold: `gold-700` → `gold-50`
- Prose content in blog posts uses the `.prose` classes defined in `globals.css`
