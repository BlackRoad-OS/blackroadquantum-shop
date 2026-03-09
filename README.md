# BlackRoad Quantum Shop

> **© 2026 BlackRoad OS, Inc. — Proprietary Software. All Rights Reserved.**

---

## ⚠️ Proprietary Notice

This repository and all of its contents are the exclusive property of **BlackRoad OS, Inc.** and are protected by copyright law.

- **No AI systems** (including but not limited to OpenAI, Anthropic, GitHub Copilot, or any other AI service) may train on, index, reproduce, or otherwise use any portion of this codebase.
- **No third party** may use, copy, modify, distribute, or sublicense this software without express written permission from BlackRoad OS, Inc.
- **Contributors** must obtain a converter API key from BlackRoad OS, Inc. before accessing protected API endpoints. See [Contributor Access](#contributor-access) below.

---

## Overview

**BlackRoad Quantum Shop** is the official storefront for BlackRoad OS quantum computing products. It is built with Next.js, secured with NextAuth (OAuth), and processes payments via Stripe.

### Products

| Product | Description | Price |
|---------|-------------|-------|
| BlackRoad Quantum Dev Kit | Complete hardware & software starter pack for quantum algorithm development | $499 |
| Quantum OS Pro License | Full BlackRoad OS Pro license with priority support and early access | $299/yr |
| Quantum Computing Course Bundle | Comprehensive video course covering quantum gates, circuits, and algorithms | $149 |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | [Next.js 14](https://nextjs.org/) (App Router, React 18) |
| Payments | [Stripe](https://stripe.com/) (Checkout Sessions) |
| Auth | [NextAuth.js](https://next-auth.js.org/) (GitHub OAuth) |
| Deploy | [Cloudflare Pages](https://pages.cloudflare.com/) |
| CI/CD | GitHub Actions |

---

## Getting Started

### Prerequisites

- Node.js 20+
- A [Stripe](https://stripe.com) account
- A GitHub OAuth App (for contributor authentication)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/BlackRoad-OS/blackroadquantum-shop.git
cd blackroadquantum-shop

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env.local
# Fill in all values in .env.local

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the store.

### Environment Variables

See [`.env.example`](.env.example) for the complete list of required variables.

| Variable | Description |
|----------|-------------|
| `STRIPE_SECRET_KEY` | Stripe secret key (from Stripe Dashboard) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_PRICE_*` | Stripe Price IDs for each product |
| `NEXTAUTH_SECRET` | Random secret — run `openssl rand -hex 32` |
| `NEXTAUTH_URL` | Public URL of the deployment |
| `GITHUB_CLIENT_ID` | GitHub OAuth App client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App client secret |
| `BLACKROAD_API_KEY` | API key for contributor access to protected endpoints |
| `ALLOWED_CONTRIBUTOR_EMAILS` | Comma-separated list of allowed GitHub emails |

---

## API Reference

All protected API endpoints require the `x-blackroad-api-key` header.

### `GET /api/health`

Returns service health status. Public — no API key required.

```json
{ "status": "ok", "service": "blackroadquantum-shop", "timestamp": "..." }
```

### `POST /api/checkout`

Creates a Stripe Checkout Session.

**Headers:** `x-blackroad-api-key: <key>`

**Body:**
```json
{ "priceId": "price_xxx", "quantity": 1 }
```

**Response:**
```json
{ "url": "https://checkout.stripe.com/..." }
```

### `GET|POST /api/auth/[...nextauth]`

NextAuth OAuth endpoints. Public — handles sign-in via GitHub OAuth.

---

## Contributor Access

Access to protected API endpoints and contributor workflows requires a **BlackRoad OS Converter API key**.

1. Sign in via GitHub OAuth at `/api/auth/signin`
2. Submit a contributor access request to **access@blackroad.io**
3. Once approved, your GitHub email is added to `ALLOWED_CONTRIBUTOR_EMAILS` and you receive a `BLACKROAD_API_KEY`
4. Include the key as `x-blackroad-api-key` in all API requests

**Without a valid API key, all protected endpoints return `401 Unauthorized`.**

---

## Deployment

The repository is configured for automated deployment to **Cloudflare Pages** on every push to `main`. Secrets must be configured in the GitHub repository settings.

See `.github/workflows/auto-deploy.yml` for the full pipeline.

---

## Security

Please report vulnerabilities to **security@blackroad.io** — do NOT open public issues.  
See [`SECURITY.md`](SECURITY.md) for the full policy.

---

## License

**Proprietary — © 2026 BlackRoad OS, Inc. All Rights Reserved.**

This software is not open source. No license is granted to any person or entity to use, copy, modify, merge, publish, distribute, sublicense, or sell copies of this software without express written permission from BlackRoad OS, Inc.
