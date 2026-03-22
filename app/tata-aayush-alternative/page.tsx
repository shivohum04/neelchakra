import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../components/ProductInquiryForm';

export const metadata: Metadata = {
  title: 'Smart Pricing | High Margin Alternative to Premium Blue Coated Wire | NeelChakra',
  description:
    'Factory-direct double-coated GI wire with the same performance as leading blue-coated brands — without the brand markup. Better wholesale ROI for B2B buyers across India.',
  keywords: [
    'blue coated wire alternative',
    'high margin fencing brand alternative',
    'premium blue coated wire',
    'NeelChakra vs premium fencing',
    'double coated GI wire manufacturer',
  ],
};

export default function CompetitorAlternativePage() {
  return (
    <main>
      <div className="product-page-header" style={{ background: 'linear-gradient(135deg, #1f2937, #111827)' }}>
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 12 }}>
            <span
              className="section-label"
              style={{
                margin: 0,
                letterSpacing: '0.2em',
                fontSize: '0.7rem',
                color: '#a7f3d0',
                borderColor: 'rgba(167, 243, 208, 0.35)',
              }}
            >
              SMART PRICING
            </span>
          </div>
          <span className="product-page-kicker" style={{ color: '#10b981' }}>
            HIGH MARGIN FENCING BRAND ALTERNATIVE
          </span>
          <h1 style={{ marginTop: 16 }}>
            The Smart Alternative to <span>Premium Blue Coated Wire</span>
          </h1>
          <p style={{ maxWidth: 720, margin: '0 auto' }}>
            When you&apos;re evaluating the <strong>best alternative to leading blue-coated fencing</strong>, most B2B buyers care
            about the same two things: performance that lines up with premium specs on paper, and pricing that protects wholesale
            margin. NeelChakra supplies <strong>factory-direct double-coated GI wire</strong> engineered to match what you expect
            from top domestic brands — without folding in the heavy brand premium.
          </p>
        </div>
      </div>

      <section className="features-section" style={{ background: 'var(--white)' }}>
        <div className="features-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">Head-to-Head</span>
            <h2 className="section-title">NeelChakra vs. Leading Blue-Coated Brand</h2>
            <p className="section-desc">
              A practical side-by-side for contractors, stockists, and project buyers who need clarity before they switch suppliers.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid var(--border)' }}>
            <table style={{ width: '100%', minWidth: 600, borderCollapse: 'collapse', textAlign: 'left', background: 'var(--off-white)' }}>
              <thead>
                <tr>
                  <th style={{ padding: '24px 32px', borderBottom: '2px solid var(--border)', background: 'var(--white)', width: '30%' }}>
                    Specification
                  </th>
                  <th
                    style={{
                      padding: '24px 32px',
                      borderBottom: '2px solid var(--border)',
                      background: 'rgba(0, 2, 254, 0.05)',
                      color: 'var(--brand-blue)',
                      width: '35%',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>NeelChakra</span>
                      <span className="use-case-badge badge-blue" style={{ margin: 0 }}>
                        Direct manufacturer
                      </span>
                    </div>
                  </th>
                  <th style={{ padding: '24px 32px', borderBottom: '2px solid var(--border)', background: 'var(--white)', width: '35%', fontSize: '1.1rem' }}>
                    Typical premium blue-coated brand
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: 'Blue chemical coating',
                    nc: 'Yes — standard on our range',
                    cp: 'Yes',
                    highlight: false,
                  },
                  {
                    label: 'Rust resistance (field life)',
                    nc: 'Very high — 15+ years in typical use',
                    cp: 'Very high',
                    highlight: false,
                  },
                  {
                    label: 'Core material',
                    nc: 'Heavy duty GI wire',
                    cp: 'Heavy duty GI wire',
                    highlight: false,
                  },
                  {
                    label: 'Supply chain',
                    nc: 'Factory-direct to your order',
                    cp: 'Often multi-tier dealer / stockist network',
                    highlight: false,
                  },
                  {
                    label: 'B2B price & margin headroom',
                    nc: 'Strong ROI — no brand-layer markup',
                    cp: 'Higher landed cost after channel margins',
                    highlight: true,
                  },
                ].map((row, i) => (
                  <tr
                    key={row.label}
                    style={{
                      borderBottom: '1px solid var(--border)',
                      background: i % 2 === 0 ? 'var(--white)' : 'var(--section-alt)',
                    }}
                  >
                    <td
                      style={{
                        padding: '20px 32px',
                        fontWeight: row.highlight ? 700 : 500,
                        color: 'var(--text-dark)',
                      }}
                    >
                      {row.label}
                    </td>
                    <td
                      style={{
                        padding: '20px 32px',
                        fontWeight: row.highlight ? 700 : 400,
                        color: row.highlight ? 'var(--brand-blue)' : 'var(--text-body)',
                        background: 'rgba(0, 2, 254, 0.02)',
                      }}
                    >
                      {row.nc}
                    </td>
                    <td
                      style={{
                        padding: '20px 32px',
                        fontWeight: row.highlight ? 700 : 400,
                        color: row.highlight ? '#ef4444' : 'var(--text-body)',
                      }}
                    >
                      {row.cp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="spec-section" style={{ background: 'var(--section-alt)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Straight answers</span>
            <h2 className="text-center">What buyers ask before they switch</h2>
          </div>

          <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'Is the double-coating technology truly identical?',
                a: (
                  <>
                    In practice, yes — the architecture is the same class of solution. Both NeelChakra and leading premium suppliers
                    start from a <strong>high-GSM hot-dipped zinc base</strong>, then add a <strong>secondary chemical layer</strong>{' '}
                    (the chemistry can differ by brand, but the job is the same): a tight, water-shedding barrier that slows rust at
                    the surface. That combination is what supports <strong>15+ years</strong> of dependable life in the field when
                    the product is specified and installed correctly.
                  </>
                ),
              },
              {
                q: 'Why is NeelChakra’s pricing so much more competitive?',
                a: (
                  <>
                    When you compare <strong>premium blue-coated wire</strong> with <strong>NeelChakra fencing</strong>, the gap
                    usually isn’t in the coil — it’s in what gets stacked on top of the factory price. Big brands carry national
                    advertising, regional super-stockist fees, and several layers of distributor margin. We manufacture under our
                    own roof and ship direct, which cuts out roughly <strong>three middleman tiers</strong> that otherwise show up
                    in every kilogram.
                  </>
                ),
              },
              {
                q: 'Why is this called a “high margin” alternative?',
                a: (
                  <>
                    Because your landed cost drops closer to <strong>true mill economics</strong>. Whether you&apos;re filling a
                    solar EPC order or stocking dealers across districts, lower procurement cost on the same performance class flows
                    straight into <strong>net margin</strong> — without asking your customer to accept a weaker product.
                  </>
                ),
              },
            ].map((faq, i) => (
              <details
                key={i}
                style={{
                  background: 'var(--white)',
                  borderRadius: 12,
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                }}
              >
                <summary
                  style={{
                    padding: '24px',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    outline: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {faq.q}
                  <span style={{ color: 'var(--brand-blue)', fontSize: '1.5rem', lineHeight: 1 }}>+</span>
                </summary>
                <div
                  style={{
                    padding: '0 24px 24px 24px',
                    color: 'var(--text-body)',
                    lineHeight: 1.65,
                    borderTop: '1px solid var(--border)',
                    paddingTop: 20,
                  }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--white)', padding: '80px 40px' }}>
        <div className="product-split">
          <div
            className="product-split-image"
            style={{
              background: 'var(--brand-blue)',
              color: 'white',
              padding: 40,
              borderRadius: 24,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span
              className="section-label"
              style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none' }}
            >
              Direct factory value
            </span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: 24, fontFamily: 'var(--font-primary)', color: 'white' }}>
              Calculate your savings
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: 24 }}>
              Stop paying extra for packaging and brand story when the wire class is what secures your site. Ask for a B2B bulk
              number you can benchmark against your current buy.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Share your current per-tonne or per-kg buying rate.',
                'We respond with a like-for-like quote (and samples if you need them).',
                'Validate tensile and coating on your side — then lock volume.',
                'Dispatch planned from Raipur across India.',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: 24, height: 24, stroke: 'white', fill: 'none', strokeWidth: 2, flexShrink: 0 }}
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span style={{ fontSize: '1.05rem', color: 'white' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="product-split-panel">
            <h2>Compare prices now</h2>
            <p className="panel-sub">
              Tell us gauge, coating weight, and monthly volume — we&apos;ll map savings against your current supplier.
            </p>
            <ProductInquiryForm productName="b2b-price-comparison" />
          </div>
        </div>
      </div>
    </main>
  );
}
