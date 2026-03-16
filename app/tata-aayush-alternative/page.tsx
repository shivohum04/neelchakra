import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../components/ProductInquiryForm';

export const metadata: Metadata = {
  title: 'The Best Alternative to Tata Aayush Fencing | NeelChakra',
  description: 'Looking for a high margin fencing brand alternative? Compare NeelChakra vs leading brands. Get the identical double-coated GI wire technology at direct manufacturer prices.',
  keywords: ['Tata Aayush alternative', 'best alternative to Tata Aayush fencing', 'Tata Aayush vs Neelchakra fencing', 'high margin fencing brand alternative'],
};

export default function CompetitorAlternativePage() {
  return (
    <main>
      {/* ── B2B HERO SECTION ── */}
      <div className="product-page-header" style={{ background: 'linear-gradient(135deg, #1f2937, #111827)' }}>
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker" style={{ color: '#10b981' }}>High Margin Fencing Brand Alternative</span>
          <h1><span>The Smart Alternative</span> to Premium Fencing Brands</h1>
          <p>
            When searching for the <strong>best alternative to Tata Aayush fencing</strong>, B2B buyers demand two things: identical technical specifications and superior wholesale ROI. NeelChakra delivers factory-direct double-coated GI wire that matches the physical performance of any leading domestic brand—without the exorbitant brand markup.
          </p>
        </div>
      </div>

      {/* ── FEATURE COMPARISON TABLE ── */}
      <section className="features-section" style={{ background: 'var(--white)' }}>
        <div className="features-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">Head-to-Head</span>
            <h2 className="section-title">NeelChakra vs. Industry Leading Brand</h2>
            <p className="section-desc">Comparing the core metrics that matter to large-scale contractors and regional wholesalers.</p>
          </div>
          
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid var(--border)' }}>
            <table style={{ width: '100%', minWidth: 600, borderCollapse: 'collapse', textAlign: 'left', background: 'var(--off-white)' }}>
              <thead>
                <tr>
                  <th style={{ padding: '24px 32px', borderBottom: '2px solid var(--border)', background: 'var(--white)', width: '30%' }}>Specification</th>
                  <th style={{ padding: '24px 32px', borderBottom: '2px solid var(--border)', background: 'rgba(0, 2, 254, 0.05)', color: 'var(--brand-blue)', width: '35%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>NeelChakra Wire</span>
                      <span className="use-case-badge badge-blue" style={{ margin: 0 }}>Direct Manufacturer</span>
                    </div>
                  </th>
                  <th style={{ padding: '24px 32px', borderBottom: '2px solid var(--border)', background: 'var(--white)', width: '35%', fontSize: '1.25rem' }}>"Leading Brand"</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Blue Chemical Coating', nc: 'Yes (Standard)', cp: 'Yes', highlight: false },
                  { label: 'Rust Resistance', nc: 'Very High (15+ Years)', cp: 'Very High', highlight: false },
                  { label: 'Core Material', nc: 'Heavy Duty IS:280 GI Core', cp: 'Heavy Duty GI Core', highlight: false },
                  { label: 'Supply Chain Model', nc: 'Factory Direct Supply', cp: 'Complex Dealer Networks', highlight: false },
                  { label: 'Price / B2B Margin', nc: 'High ROI (Zero Brand Markup)', cp: 'High Retail Markup', highlight: true },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'var(--white)' : 'var(--section-alt)' }}>
                    <td style={{ padding: '20px 32px', fontWeight: row.highlight ? 700 : 500, color: 'var(--text-dark)' }}>{row.label}</td>
                    <td style={{ padding: '20px 32px', fontWeight: row.highlight ? 700 : 400, color: row.highlight ? 'var(--brand-blue)' : 'var(--text-body)', background: 'rgba(0, 2, 254, 0.02)' }}>{row.nc}</td>
                    <td style={{ padding: '20px 32px', fontWeight: row.highlight ? 700 : 400, color: row.highlight ? '#ef4444' : 'var(--text-body)' }}>{row.cp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION (Technical Deep Dive) ── */}
      <section className="spec-section" style={{ background: 'var(--section-alt)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Technical Deep-Dive</span>
            <h2 className="text-center">Why Procurement Managers Make the Switch</h2>
          </div>
          
          <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { 
                q: "Is the double-coating technology truly identical?", 
                a: "Yes. Both NeelChakra and leading premium brands utilize a high-GSM hot-dipped zinc foundation followed by a secondary inorganic polymer (the 'blue chemical' coating). This creates the exact same dielectric waterproof barrier against rust, delivering the same 15+ year field lifespan."
              },
              { 
                q: "Why is the pricing structure so much more competitive?", 
                a: "When you analyze Tata Aayush vs Neelchakra fencing pricing structures, the difference lies entirely in the supply chain overhead. A premium name brand bakes massive corporate marketing budgets, regional super-stockist fees, and multi-tier distributor margins into the per-kg wire price. NeelChakra operates as a direct manufacturer, eliminating 3 layers of middleman markup."
              },
              { 
                q: "Why is NeelChakra considered a 'High Margin' alternative?", 
                a: "Because you are buying export-grade fencing at a factory gate price. Whether you are a large general contractor bidding on a solar park, or a regional wholesaler supplying farm hardware stores, the massive reduction in procurement cost immediately converts directly into your net profit margin."
              }
            ].map((faq, i) => (
              <details key={i} style={{ background: 'var(--white)', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
                <summary style={{ padding: '24px', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}
                  <span style={{ color: 'var(--brand-blue)', fontSize: '1.5rem', lineHeight: 1 }}>+</span>
                </summary>
                <div style={{ padding: '0 24px 24px 24px', color: 'var(--text-body)', lineHeight: 1.6, borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULATE YOUR SAVINGS (CTA Block) ── */}
      <div style={{ background: 'var(--white)', padding: '80px 40px' }}>
        <div className="product-split">
          <div className="product-split-image" style={{ background: 'var(--brand-blue)', color: 'white', padding: 40, borderRadius: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="section-label" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none' }}>Direct Factory Value</span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: 24, fontFamily: 'var(--font-primary)', color: 'white' }}>Calculate Your Savings</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: 24 }}>
              Don't pay a premium just for a logo printed on the packaging. Request a direct B2B bulk quote today.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Provide your current per-ton purchasing rate.',
                'We will provide a direct price match (or better) quote.',
                'Receive physical samples for lab/site checking.',
                'Fast-track delivery across India.'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                  <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, stroke: 'white', fill: 'none', strokeWidth: 2, flexShrink: 0 }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span style={{ fontSize: '1.05rem', color: 'white' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="product-split-panel">
            <h2>Compare Prices Now</h2>
            <p className="panel-sub">
              Upload your requirements or specify the metric tonnes required, and our sales team will map out your exact cost savings.
            </p>
            <ProductInquiryForm productName="b2b-price-comparison" />
          </div>
        </div>
      </div>
    </main>
  );
}
