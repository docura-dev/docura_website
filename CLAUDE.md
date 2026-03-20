# Docura Website — CLAUDE.md

## Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + TypeScript 5 |
| Build | Vite 5 (SWC) |
| Routing | React Router DOM 6 (SPA, all routes in `App.tsx`) |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix UI primitives) |
| Animation | Framer Motion 12 |
| Forms | React Hook Form + Zod |
| Data fetching | TanStack React Query 5 |
| Icons | Lucide React |
| Testing | Vitest |
| Package manager | **npm** (preferred — used in CI/CD) |
| Node version | 20 |
| Dev server | `localhost:8080` |

## Pages & Routes

All routes are defined in `src/App.tsx`. Add new routes there.

| Route | File |
|---|---|
| `/` | `src/pages/Index.tsx` |
| `/soluzione` | `src/pages/Soluzione.tsx` |
| `/metodo` | `src/pages/Metodo.tsx` |
| `/contatti` | `src/pages/Contatti.tsx` |
| `/privacy` | `src/pages/PrivacyPolicy.tsx` |
| `/cookie` | `src/pages/CookiePolicy.tsx` |
| `*` | `src/pages/NotFound.tsx` |

Every page wraps its content in `<Layout>` (Header + Footer). `ScrollToTop` in `App.tsx` auto-scrolls on navigation — don't interfere with it.

## Directory Structure

```
src/
├── App.tsx               # Routes + QueryClient + ScrollToTop
├── pages/                # One file per route
├── components/
│   ├── layout/
│   │   ├── Layout.tsx    # Wraps Header + page content + Footer
│   │   ├── Header.tsx    # Fixed header (z-50) — pages need pt-20 to avoid overlap
│   │   └── Footer.tsx
│   ├── ui/               # shadcn/ui generated components + custom primitives
│   └── NavLink.tsx
├── hooks/
│   ├── use-mobile.tsx    # Responsive breakpoint hook
│   └── use-toast.ts
├── lib/
│   └── utils.ts          # cn() — always use this to merge Tailwind classes
└── assets/               # Images imported as ES modules (Vite optimises them)
    ├── docura-logo.png
    ├── hero-automation.jpg
    ├── slides/
    └── team/
public/
├── favicon.ico
├── robots.txt
└── .htaccess             # Apache SPA rewrite rules — do NOT remove or modify
```

## Component Conventions

- Functional components with hooks, TypeScript interfaces for props.
- **Always use `cn()` from `@/lib/utils.ts`** to merge Tailwind classes (uses `clsx` + `tailwind-merge`).
- Named exports for components.
- Tailwind only — no component-scoped CSS.
- Animations via Framer Motion (`motion.div` with `whileInView` for scroll-triggered effects).
- shadcn/ui components live in `src/components/ui/`; use `components.json` config when adding new ones via the CLI.
- Type checking is intentionally loose (`noImplicitAny: false`, `strictNullChecks: false`) — don't tighten it unless asked.

## Design System

- All colours are CSS variables in HSL format (`--primary: 197 78% 60%`). Follow this format.
- Brand primary: Docura Azure `#4AB3E8`.
- Dark mode supported via Tailwind `class` strategy (`.dark` on root).
- Custom container utilities: `.container-wide` (max-w-7xl), `.container-narrow` (max-w-4xl).
- Custom text utilities: `display-xl`, `heading-lg`, etc. (defined in `tailwind.config.ts`).

## Assets

Import images as ES modules — never reference them as raw strings:

```tsx
import heroImage from "@/assets/hero-automation.jpg";
<img src={heroImage} alt="..." />
```

Path alias `@/` resolves to `./src/`.

## Environment Variables

Used by the contact form (EmailJS). Set in `.env.local` for local dev and as GitHub Actions secrets for production builds.

| Variable | Purpose |
|---|---|
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key (Account > API Keys) |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS Email Service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS Email Template ID |

Template variables expected: `{{from_name}}`, `{{company}}`, `{{from_email}}`, `{{phone}}`, `{{reason}}`, `{{message}}`.

## npm Scripts

```bash
npm run dev          # Dev server on port 8080
npm run build        # Production build → /dist
npm run preview      # Preview the production build locally
npm run lint         # ESLint
npm test             # Run Vitest once
npm run test:watch   # Vitest in watch mode
```

## Deploy Process

**CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)

1. Trigger: push to `main` or manual dispatch.
2. Runs `npm install` then `npm run build`.
3. Uploads `/dist` via FTP to Aruba hosting into `./www.docura.it/`.

**Required GitHub Secrets:**

| Secret | Purpose |
|---|---|
| `FTP_SERVER` | Aruba FTP host |
| `FTP_USERNAME` | Aruba username |
| `FTP_PASSWORD` | Aruba password |

To deploy: merge to `main`. There is no staging environment.

## Gotchas & Things to Avoid

- **Do NOT remove `.htaccess`** — it contains Apache rewrite rules that make SPA routing work on Aruba hosting.
- **Header is `position: fixed`** — page content needs `pt-20` (or equivalent) to avoid being hidden behind it.
- **Package manager** — use `npm`, not Bun. Both lock files exist but CI/CD uses npm.
- **No file-based routing** — add all new routes manually in `App.tsx`.
- **Asset imports** — always import images as ES modules, not as `/public/...` URL strings, so Vite can optimise and fingerprint them.
- **`FloatingElements` component** — continuous SVG animations; test on low-end devices if modifying.
- **Content is Italian** — keep text and naming conventions consistent in Italian.
- **`index.html` meta tags** — OG tags, canonical URL, and `lang="it"` are set there. Update them when adding new pages.
- **Don't add new lock files** — bun.lockb exists but is not actively used. Stick with npm.
