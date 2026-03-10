# BlackRoad Quantum Shop

> **© 2026 BlackRoad OS, Inc. — Proprietary Software. All Rights Reserved.**

---

## 🚀 Just want to buy something?

**[→ Open the store at blackroadquantum.shop](https://blackroadquantum.shop)**

Click. Buy. Done. No terminal required.

---

## What's in the shop?

| | Product | What you get | Price |
|--|---------|--------------|-------|
| ⚡ | **Quantum Dev Kit** | Hardware + software starter pack — everything to begin building quantum algorithms | $499 |
| 🚀 | **OS Pro License** | Full BlackRoad OS Pro with priority support and early access to every new build | $299/yr |
| 🎓 | **Course Bundle** | Complete video series — quantum gates, circuits, algorithms. No PhD needed. | $149 |

---

## 🌐 See it live

The store is live at **[blackroadquantum.shop](https://blackroadquantum.shop)** — no setup needed.

The BlackRoad OS portal is at **[blackroad.io](https://blackroad.io)**.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | [Next.js 16](https://nextjs.org/) (App Router, React 19) |
| Payments | [Stripe](https://stripe.com/) (Checkout Sessions) |
| Auth | [NextAuth.js](https://next-auth.js.org/) (GitHub OAuth) |
| Deploy | [Cloudflare Pages](https://pages.cloudflare.com/) |
| CI/CD | GitHub Actions |

---

## Running it locally (optional)

Only needed if you're a contributor making changes.

```bash
git clone https://github.com/BlackRoad-OS/blackroadquantum-shop.git
cd blackroadquantum-shop
npm install
cp .env.example .env.local
# Fill in .env.local with your keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

See [`.env.example`](.env.example) for the full list.

| Variable | What it's for |
|----------|---------------|
| `STRIPE_SECRET_KEY` | From your [Stripe Dashboard](https://dashboard.stripe.com/apikeys) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_PRICE_*` | Stripe Price IDs for each product |
| `NEXTAUTH_SECRET` | Random secret — run `openssl rand -hex 32` |
| `NEXTAUTH_URL` | Your deployment URL |
| `GITHUB_CLIENT_ID` | GitHub OAuth App client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App client secret |
| `BLACKROAD_API_KEY` | API key for contributor access to protected endpoints |
| `ALLOWED_CONTRIBUTOR_EMAILS` | Comma-separated list of allowed GitHub emails |

---

## Contributor access

To access protected API endpoints:

1. Sign in via GitHub OAuth at `/api/auth/signin`
2. Email **access@blackroad.io** to request a contributor API key
3. Once approved, use your key as `x-blackroad-api-key` in API requests

---

## API endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/health` | Health check — no auth needed |
| `POST /api/checkout` | Creates a Stripe Checkout Session |
| `GET\|POST /api/auth/[...nextauth]` | GitHub OAuth sign-in |

---

## Security

Report vulnerabilities to **security@blackroad.io** — not as public issues.  
See [`SECURITY.md`](SECURITY.md).

---

## License

**Proprietary — © 2026 BlackRoad OS, Inc. All Rights Reserved.**

No license is granted to use, copy, modify, or distribute this software without written permission from BlackRoad OS, Inc.
