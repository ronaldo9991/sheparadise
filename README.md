# She Paradise

Multi-page boutique website for She Paradise, built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Multi-page frontend:
  - `/` Home
  - `/collections`
  - `/featured`
  - `/boutique`
  - `/visit`
- Responsive top navbar + footer
- Light/Dark mode toggle (`next-themes`)
- Rich image galleries and animated sections
- Admin login and dashboard for collection/image management (localStorage-based)

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Wouter (routing)
- shadcn/ui component primitives
- pnpm workspace monorepo

## Project Path

Main web app package:

- `artifacts/she-paradise`

## Prerequisites

- Node.js (recommended v20+)
- pnpm

## Install

From repo root:

```bash
pnpm install --no-frozen-lockfile
```

## Run Locally

```bash
pnpm --filter @workspace/she-paradise run dev
```

Default local URL:

- `http://localhost:5173`

## Build

Build only the She Paradise app:

```bash
pnpm --filter @workspace/she-paradise run build
```

## Deploy (Vercel)

This repository is configured for Vercel via `vercel.json`.

- Install command: `pnpm install --no-frozen-lockfile`
- Build command: `pnpm run build:vercel`
- Output directory: `artifacts/she-paradise/dist`

SPA routes are handled with a rewrite to `index.html`, so paths like `/collections`, `/featured`, `/boutique`, and `/visit` work on direct refresh.

Build entire workspace:

```bash
pnpm run build
```

## Admin Access

Hidden admin link is available in the footer (`•` dot) and routes to `/admin`.

Credentials:

- Email: `sheparadise@gmail.com`
- Password: `ShePara@2024`

Admin capabilities:

- Create/update/delete collections
- Upload images to collections
- Remove images from collections
- Reset collections to defaults

## Image Sources

- Curated images are stored under:
  - `artifacts/she-paradise/src/assets/images`
- Logo used by site:
  - `artifacts/she-paradise/public/logo2.png`

## Notes

- Collection/admin data persists in browser `localStorage`.
- If you change default collection seeds in code, clear localStorage or bump the context version to refresh seeded content.
