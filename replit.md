# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### She Paradise (`artifacts/she-paradise`)
- **Type**: React + Vite, presentation-first (no backend)
- **Preview path**: `/`
- **Purpose**: Premium women's clothing boutique website for She Paradise, Coimbatore
- **Features**:
  - Luxury feminine design (ivory, dusty rose, muted gold palette)
  - Playfair Display serif + DM Sans sans-serif typography
  - 21 AI-generated fashion images
  - Framer Motion animations throughout
  - Floating WhatsApp button (wa.me/919600683219)
  - Sticky navbar with scroll-triggered appearance change
  - Sections: Hero, Brand Statement, Collections (6 categories), Featured Products, Why Choose Us, Boutique Experience, Visit Store, Footer
  - Fully responsive (mobile, tablet, desktop)
- **Business**: She Paradise, JESUS SAVES Complex, 89C/6, Vellakinar Road, Near Thudiyalur RTO, Thudiyalur, Coimbatore - 641034
- **Contact**: 9600683219
