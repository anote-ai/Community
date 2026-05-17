# Community (Armor) — Codebase Setup

## What is Community (Armor)?

Community (also known internally as Armor) is the community and events hub for Anote, accessible at [community.anote.ai](https://community.anote.ai). It provides users with a central place to engage with the Anote community, browse events, and stay up to date with announcements.

This repository contains the `frontend/` directory, a React application.

---

## Prerequisites

- **Node.js** 18 or higher
- **npm** (bundled with Node)

---

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/anote-ai/Community.git
   cd Community
   ```

2. Install dependencies:
   ```bash
   cd frontend && npm install --legacy-peer-deps
   ```

3. Copy the environment file (if applicable):
   ```bash
   cp .env.example .env
   ```
   Then fill in the required values (see [Environment Variables](#environment-variables) below).

4. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

---

## Environment Variables

Create a `.env` file inside the `frontend/` directory (or at the repo root if using a shared config). The following variables are used:

| Variable | Description |
|---|---|
| `REACT_APP_BACK_END_HOST` | Base URL of the backend API |
| `REACT_APP_FRONT_END_HOST` | Public URL of the frontend (used for redirects, links, etc.) |

> **Note:** All React environment variables must be prefixed with `REACT_APP_` to be embedded in the build.

---

## Production Build

```bash
cd frontend
npm run build
```

The optimised static assets are output to `frontend/build/`. These are deployed to S3 and served via CloudFront.

---

## CI/CD

### Continuous Integration

CI runs automatically on **every pull request and push to `main`** via GitHub Actions (`.github/workflows/ci.yml`).

The CI job:
- Installs dependencies (`npm ci --legacy-peer-deps`)
- Runs the production build (`npm run build`)

**Lint and build must pass before a PR can be merged.**

### Deployment

Deployment is **manual** and triggered via the GitHub Actions UI:

1. Go to **Actions → Deploy** in this repository.
2. Click **Run workflow**.
3. Select the target environment (`production` or `staging`).
4. Click **Run workflow** to start the deploy.

The deploy workflow builds the React app, syncs static assets to S3 (with long-lived cache headers), and invalidates the CloudFront distribution.

---

## Contribution Guidelines

Please open a pull request from a feature branch targeting `main`. Ensure the CI checks pass before requesting a review. Follow the existing code style and component structure when adding new features.
