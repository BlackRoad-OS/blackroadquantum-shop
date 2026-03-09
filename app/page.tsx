// © 2026 BlackRoad OS, Inc. — Proprietary. All rights reserved.
'use client'

const PRODUCTS = [
  {
    name: 'BlackRoad Quantum Dev Kit',
    description: 'Complete hardware and software starter pack for quantum algorithm development.',
    price: '$499',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_DEV_KIT ?? 'price_dev_kit',
  },
  {
    name: 'Quantum OS Pro License',
    description: 'Full BlackRoad OS Pro license with priority support and early access to new builds.',
    price: '$299/yr',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_OS_PRO ?? 'price_os_pro',
  },
  {
    name: 'Quantum Computing Course Bundle',
    description: 'Comprehensive video course series covering quantum gates, circuits, and algorithms.',
    price: '$149',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COURSE ?? 'price_course',
  },
]

async function handleBuy(priceId: string) {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId }),
  })
  const data = await res.json()
  if (data.url) {
    window.location.href = data.url
  } else {
    alert(data.error ?? 'Checkout failed. Please try again.')
  }
}

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav style={{
        background: '#0a0a0a',
        borderBottom: '1px solid #2a2a2a',
        padding: '0 34px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
          <a href="https://blackroad.io" style={{
            fontFamily: 'SF Mono, Fira Code, monospace',
            fontSize: '16px',
            fontWeight: 700,
            color: '#fff',
            textDecoration: 'none',
          }}>BlackRoad OS</a>
          <span style={{
            fontFamily: 'SF Mono, monospace',
            fontSize: '10px',
            color: '#555',
            background: '#1a1a1a',
            padding: '2px 8px',
            borderRadius: '3px',
          }}>v2.0</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#4ade80',
          }} />
          <span style={{
            fontFamily: 'SF Mono, monospace',
            fontSize: '11px',
            color: '#555',
          }}>Operational</span>
        </div>
      </nav>

      {/* Main */}
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 120px)',
        padding: '89px 34px',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'SF Mono, monospace',
          fontSize: '11px',
          color: '#555',
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          padding: '5px 13px',
          borderRadius: '4px',
          marginBottom: '34px',
        }}>
          blackroadquantum.shop
        </div>

        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          letterSpacing: '-1px',
          marginBottom: '21px',
          background: 'linear-gradient(135deg, #F5A623 0%, #FF1D6C 38.2%, #9C27B0 61.8%, #2979FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Quantum Shop
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#777',
          maxWidth: '560px',
          lineHeight: 1.618,
          marginBottom: '55px',
        }}>
          Hardware and software for quantum computing enthusiasts and professionals.
        </p>

        {/* Products */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1px',
          background: '#2a2a2a',
          width: '100%',
          maxWidth: '900px',
          marginBottom: '55px',
        }}>
          {PRODUCTS.map((product) => (
            <div key={product.priceId} style={{
              background: '#111',
              padding: '34px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '13px',
            }}>
              <div style={{
                fontFamily: 'SF Mono, monospace',
                fontSize: '13px',
                fontWeight: 600,
                color: '#fff',
              }}>{product.name}</div>
              <div style={{
                fontFamily: '-apple-system, sans-serif',
                fontSize: '13px',
                color: '#777',
                lineHeight: 1.618,
                flex: 1,
              }}>{product.description}</div>
              <div style={{
                fontFamily: 'SF Mono, monospace',
                fontSize: '18px',
                fontWeight: 700,
                color: '#F5A623',
              }}>{product.price}</div>
              <button
                onClick={() => handleBuy(product.priceId)}
                style={{
                  fontFamily: 'SF Mono, monospace',
                  fontSize: '12px',
                  padding: '10px 21px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  background: '#fff',
                  color: '#000',
                }}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '13px' }}>
          <a href="https://blackroad.io" style={{
            fontFamily: 'SF Mono, monospace',
            fontSize: '13px',
            padding: '13px 34px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 500,
            background: '#fff',
            color: '#000',
          }}>
            Explore BlackRoad OS
          </a>
          <a href="https://github.com/BlackRoad-OS/blackroadquantum-shop" style={{
            fontFamily: 'SF Mono, monospace',
            fontSize: '13px',
            padding: '13px 34px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 500,
            background: 'transparent',
            color: '#777',
            border: '1px solid #2a2a2a',
          }}>
            View Source
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: '#2a2a2a',
          marginTop: '89px',
          maxWidth: '600px',
          width: '100%',
        }}>
          {[
            { label: 'REPOS', value: '200+' },
            { label: 'DOMAINS', value: '20' },
            { label: 'AI AGENTS', value: '∞' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: '#111',
              padding: '34px',
              textAlign: 'left',
            }}>
              <div style={{
                fontFamily: 'SF Mono, monospace',
                fontSize: '11px',
                color: '#555',
                marginBottom: '8px',
              }}>{stat.label}</div>
              <div style={{ fontSize: '24px', fontWeight: 600 }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#0a0a0a',
        borderTop: '1px solid #2a2a2a',
        padding: '21px 34px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: 'SF Mono, monospace',
          fontSize: '11px',
          color: '#555',
        }}>© 2026 BlackRoad OS, Inc.</span>
        <div style={{ display: 'flex', gap: '21px' }}>
          {['Privacy', 'Terms', 'GitHub'].map((link) => (
            <a key={link} href="#" style={{
              fontFamily: 'SF Mono, monospace',
              fontSize: '11px',
              color: '#555',
              textDecoration: 'none',
            }}>{link}</a>
          ))}
        </div>
      </footer>
    </>
  )
}
