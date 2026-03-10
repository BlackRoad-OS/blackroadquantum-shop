// © 2026 BlackRoad OS, Inc. — Proprietary. All rights reserved.
'use client'

import { useState } from 'react'

const PRODUCTS = [
  {
    emoji: '⚡',
    name: 'Quantum Dev Kit',
    tagline: 'Build the future, today.',
    description: 'Everything you need to start building quantum algorithms — hardware, software, and full support included.',
    price: '$499',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_DEV_KIT ?? 'price_dev_kit',
    color: '#F5A623',
  },
  {
    emoji: '🚀',
    name: 'OS Pro License',
    tagline: 'Unlimited access. Priority support.',
    description: 'Full BlackRoad OS Pro license with early access to every new build and a direct line to our team.',
    price: '$299/yr',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_OS_PRO ?? 'price_os_pro',
    color: '#FF1D6C',
  },
  {
    emoji: '🎓',
    name: 'Course Bundle',
    tagline: 'Go from zero to quantum.',
    description: 'Our complete video series — quantum gates, circuits, and real algorithms. No PhD required.',
    price: '$149',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COURSE ?? 'price_course',
    color: '#9C27B0',
  },
]

async function handleBuy(priceId: string, setLoading: (id: string | null) => void) {
  setLoading(priceId)
  try {
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
  } finally {
    setLoading(null)
  }
}

export default function Home() {
  const [loadingId, setLoadingId] = useState<string | null>(null)

  return (
    <>
      {/* Navigation */}
      <nav style={{
        background: 'rgba(10,10,10,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1e1e1e',
        padding: '0 34px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
          <a href="https://blackroad.io" style={{
            fontFamily: 'SF Mono, Fira Code, monospace',
            fontSize: '15px',
            fontWeight: 700,
            color: '#fff',
            textDecoration: 'none',
            letterSpacing: '-0.3px',
          }}>BlackRoad OS</a>
          <span style={{
            fontFamily: 'SF Mono, monospace',
            fontSize: '10px',
            color: '#F5A623',
            background: 'rgba(245,166,35,0.1)',
            border: '1px solid rgba(245,166,35,0.3)',
            padding: '2px 8px',
            borderRadius: '3px',
          }}>Quantum Shop</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="https://blackroad.io" style={{
            fontFamily: '-apple-system, sans-serif',
            fontSize: '13px',
            color: '#aaa',
            textDecoration: 'none',
          }}>Home</a>
          <a href="https://github.com/BlackRoad-OS/blackroadquantum-shop" style={{
            fontFamily: '-apple-system, sans-serif',
            fontSize: '13px',
            color: '#aaa',
            textDecoration: 'none',
          }}>GitHub</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
            <span style={{ fontFamily: 'SF Mono, monospace', fontSize: '11px', color: '#555' }}>Live</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '100px 34px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(245,166,35,0.08) 0%, rgba(255,29,108,0.05) 40%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'inline-block',
          fontFamily: 'SF Mono, monospace',
          fontSize: '11px',
          color: '#F5A623',
          background: 'rgba(245,166,35,0.08)',
          border: '1px solid rgba(245,166,35,0.2)',
          padding: '6px 16px',
          borderRadius: '100px',
          marginBottom: '28px',
          letterSpacing: '0.5px',
        }}>
          ✦ Quantum Computing, Made Simple
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800,
          letterSpacing: '-2px',
          lineHeight: 1.1,
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #F5A623 0%, #FF1D6C 38.2%, #9C27B0 61.8%, #2979FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Dream in Quantum.
          <br />
          Build the Impossible.
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#888',
          maxWidth: '520px',
          margin: '0 auto 44px',
          lineHeight: 1.7,
          fontFamily: '-apple-system, sans-serif',
        }}>
          No PhD needed. No terminal required. Just click, get set up, and start building
          the kind of software that changes everything.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#products" style={{
            fontFamily: '-apple-system, sans-serif',
            fontSize: '15px',
            fontWeight: 600,
            padding: '14px 32px',
            borderRadius: '100px',
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #F5A623, #FF1D6C)',
            color: '#fff',
            boxShadow: '0 0 30px rgba(245,166,35,0.3)',
          }}>
            Shop Now →
          </a>
          <a href="https://blackroad.io" style={{
            fontFamily: '-apple-system, sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            padding: '14px 32px',
            borderRadius: '100px',
            textDecoration: 'none',
            background: 'transparent',
            color: '#aaa',
            border: '1px solid #2a2a2a',
          }}>
            Explore BlackRoad OS
          </a>
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 24px 100px',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '12px',
            letterSpacing: '-0.5px',
          }}>Everything you need to get started</h2>
          <p style={{ color: '#666', fontSize: '15px', fontFamily: '-apple-system, sans-serif' }}>
            One click. Instant access. No guesswork.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {PRODUCTS.map((product) => (
            <div key={product.priceId} style={{
              background: '#0f0f0f',
              border: '1px solid #1e1e1e',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'border-color 0.2s',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Subtle top accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
              }} />

              <div style={{ fontSize: '32px' }}>{product.emoji}</div>

              <div>
                <div style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '4px',
                  fontFamily: '-apple-system, sans-serif',
                }}>{product.name}</div>
                <div style={{
                  fontSize: '13px',
                  color: product.color,
                  fontFamily: 'SF Mono, monospace',
                  fontWeight: 500,
                }}>{product.tagline}</div>
              </div>

              <div style={{
                fontSize: '13px',
                color: '#777',
                lineHeight: 1.7,
                flex: 1,
                fontFamily: '-apple-system, sans-serif',
              }}>{product.description}</div>

              <div style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#fff',
                fontFamily: '-apple-system, sans-serif',
                letterSpacing: '-1px',
              }}>{product.price}</div>

              <button
                onClick={() => handleBuy(product.priceId, setLoadingId)}
                disabled={loadingId === product.priceId}
                style={{
                  fontFamily: '-apple-system, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '12px 24px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: loadingId === product.priceId ? 'wait' : 'pointer',
                  background: loadingId === product.priceId ? '#2a2a2a' : '#fff',
                  color: '#000',
                  transition: 'opacity 0.2s, background 0.2s',
                  opacity: loadingId === product.priceId ? 0.7 : 1,
                }}
              >
                {loadingId === product.priceId ? 'Opening checkout…' : 'Get Started →'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Live Portal Embed */}
      <section style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 24px 100px',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '32px',
        }}>
          <div style={{
            display: 'inline-block',
            fontFamily: 'SF Mono, monospace',
            fontSize: '11px',
            color: '#2979FF',
            background: 'rgba(41,121,255,0.08)',
            border: '1px solid rgba(41,121,255,0.2)',
            padding: '6px 16px',
            borderRadius: '100px',
            marginBottom: '16px',
          }}>
            🌐 Live Portal
          </div>
          <h2 style={{
            fontSize: '26px',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '12px',
            letterSpacing: '-0.5px',
          }}>See BlackRoad OS in action</h2>
          <p style={{ color: '#666', fontSize: '14px', fontFamily: '-apple-system, sans-serif' }}>
            Click around. It&apos;s real. It works right now.
          </p>
        </div>

        <div style={{
          border: '1px solid #1e1e1e',
          borderRadius: '16px',
          overflow: 'hidden',
          background: '#0a0a0a',
          position: 'relative',
        }}>
          {/* Browser chrome */}
          <div style={{
            background: '#111',
            borderBottom: '1px solid #1e1e1e',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div style={{
              flex: 1,
              background: '#1a1a1a',
              border: '1px solid #2a2a2a',
              borderRadius: '6px',
              padding: '4px 12px',
              fontFamily: 'SF Mono, monospace',
              fontSize: '11px',
              color: '#555',
            }}>
              blackroad.io
            </div>
          </div>
          <iframe
            src="https://blackroad.io"
            style={{
              width: '100%',
              height: '480px',
              border: 'none',
              display: 'block',
            }}
            title="BlackRoad OS Live Portal"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <a href="https://blackroad.io" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: '-apple-system, sans-serif',
            fontSize: '13px',
            color: '#555',
            textDecoration: 'none',
          }}>
            Open in full screen ↗
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 24px 100px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
        }}>
          {[
            { label: 'Repositories', value: '200+', desc: 'Open & proprietary projects' },
            { label: 'Domains', value: '20', desc: 'Live sites and portals' },
            { label: 'AI Agents', value: '∞', desc: 'Infinite automation' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: '#0f0f0f',
              border: '1px solid #1e1e1e',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#fff', letterSpacing: '-1px', marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#aaa', marginBottom: '4px', fontFamily: '-apple-system, sans-serif' }}>{stat.label}</div>
              <div style={{ fontSize: '12px', color: '#555', fontFamily: '-apple-system, sans-serif' }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0a0a0a',
        borderTop: '1px solid #1e1e1e',
        padding: '28px 34px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <span style={{
          fontFamily: 'SF Mono, monospace',
          fontSize: '11px',
          color: '#444',
        }}>© 2026 BlackRoad OS, Inc.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="https://blackroad.io/privacy" style={{
            fontFamily: '-apple-system, sans-serif',
            fontSize: '12px',
            color: '#555',
            textDecoration: 'none',
          }}>Privacy</a>
          <a href="https://blackroad.io/terms" style={{
            fontFamily: '-apple-system, sans-serif',
            fontSize: '12px',
            color: '#555',
            textDecoration: 'none',
          }}>Terms</a>
          <a href="https://github.com/BlackRoad-OS/blackroadquantum-shop" style={{
            fontFamily: '-apple-system, sans-serif',
            fontSize: '12px',
            color: '#555',
            textDecoration: 'none',
          }}>GitHub</a>
          <a href="https://blackroad.io" style={{
            fontFamily: '-apple-system, sans-serif',
            fontSize: '12px',
            color: '#555',
            textDecoration: 'none',
          }}>blackroad.io</a>
        </div>
      </footer>
    </>
  )
}
