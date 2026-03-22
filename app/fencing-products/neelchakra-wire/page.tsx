import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../../components/ProductInquiryForm';

export const metadata: Metadata = {
  title: 'Neelchakra Double Coated Wires | Advanced Protection | NeelChakra Raipur',
  description:
    'Neelchakra Double Coated Wires — advanced protection, superior lifespan, trusted performance. Dual-layer coating, SST tested, 15+ years expected life. Agriculture, infrastructure, industrial fencing.',
  keywords: ['Neelchakra double coated wires', 'double coated GI wire', 'premium GI wire India', 'Neelchakra wire Raipur'],
  alternates: {
    canonical: 'https://neelchakra.in/fencing-products/neelchakra-wire',
  },
};

const APPLICATIONS = [
  'Agricultural fencing',
  'Highway & road fencing',
  'Industrial boundary protection',
  'Residential and farm fencing',
  'Chain link mesh & barbed wire',
];

const COMPARE_ROWS = [
  { feature: 'Corrosion Resistance', ordinary: 'Moderate', neel: 'Very High' },
  { feature: 'Coating Type', ordinary: 'Zinc Only', neel: 'Dual Coating (Zinc+Chemical)' },
  { feature: 'Lifespan', ordinary: '5-7 Years', neel: '15+ Years' },
  { feature: 'Finish', ordinary: 'Dull', neel: 'Smooth & Premium' },
  { feature: 'Maintenance', ordinary: 'High', neel: 'Low' },
];

export default function NeelchakraWirePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Neelchakra Double Coated Wires',
    description: 'Advanced double-coated GI wires for fencing and industrial use — dual-layer coating, salt-spray tested, 15+ year design life.',
    brand: { '@type': 'Brand', name: 'NeelChakra' },
    manufacturer: { '@type': 'Organization', name: 'SK Engineering Solutions', address: { '@type': 'PostalAddress', addressLocality: 'Raipur', addressRegion: 'Chhattisgarh', addressCountry: 'IN' } },
    url: 'https://neelchakra.in/fencing-products/neelchakra-wire',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  };

  const whyFeatures = [
    {
      title: 'Double Protection Technology',
      desc: 'Dual-layer coating ensures significantly higher resistance compared to standard GI wires.',
      icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    },
    {
      title: 'Superior Corrosion Resistance',
      desc: 'Performs exceptionally well in humid, coastal, and high-rainfall regions.',
      icon: <svg viewBox="0 0 24 24"><path d="M12 22V12M12 12C12 7 17 3 17 3C17 3 17 8 12 12ZM12 12C12 7 7 3 7 3C7 3 7 8 12 12Z" /></svg>,
    },
    {
      title: '15+ Years Expected Lifespan',
      desc: 'Under normal outdoor conditions, Neelchakra wires are designed to last over 15 years — reducing replacement costs.',
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    },
    {
      title: 'SST Tested Performance',
      desc: 'Salt Spray Testing (SST) simulates extreme corrosion environments — ensuring long-term reliability.',
      icon: <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    },
    {
      title: 'Smooth & Aesthetic Finish',
      desc: 'Uniform coating provides a premium look — ideal for visible fencing applications.',
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>,
    },
    {
      title: 'Cost-Effective in the Long Run',
      desc: 'Lower maintenance and replacement frequency make Neelchakra wires a smart investment.',
      icon: <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
    },
  ];

  return (
    <main className="product-content-left">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="product-page-header">
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker">Double Coated Wires</span>
          <h1>Neelchakra Double Coated Wires</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--brand-cyan)', marginTop: 8, marginBottom: 20 }}>
            Advanced Protection. Superior Lifespan. Trusted Performance.
          </p>
          <p style={{ maxWidth: 720, margin: '0 0 16px 0', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.92)' }}>
            <strong>Neelchakra Double Coated Wires</strong> are engineered to deliver exceptional corrosion resistance, longer life,
            and premium finish, making them ideal for fencing applications across agriculture, infrastructure, and industrial use.
          </p>
          <p style={{ maxWidth: 720, margin: '0 0 32px 0', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.92)' }}>
            Designed as a next-generation alternative to ordinary GI wires, Neelchakra wires combine high-quality galvanized steel
            with advanced dual-layer coating technology to withstand the harshest environments.
          </p>
          <div className="use-case-wrap" style={{ marginBottom: 24 }}>
            <span className="use-case-badge badge-green">🌾 Agriculture</span>
            <span className="use-case-badge badge-blue">🏗️ Infrastructure</span>
            <span className="use-case-badge badge-purple">🏭 Industrial</span>
            <span className="use-case-badge badge-orange">🔗 Fencing</span>
          </div>
        </div>
      </div>

      <section className="spec-section" style={{ background: 'var(--white)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Product Gallery</span>
            <h2>Neelchakra Double Coated Wires — Visual Overview</h2>
          </div>
          <div className="products-detail-grid">
            {['/assests/wire-2.jpg', '/assests/wire-3.jpg', '/assests/wire-1.jpg'].map((src) => (
              <div key={src} className="product-detail-card">
                <img src={src} alt="Neelchakra double coated wires" className="product-detail-card-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Same visual flow as homepage process section */}
      <section className="process-section" id="coating-process">
        <div className="section-inner">
          <div className="section-label">
            <div className="section-label-text">Our Advanced Coating Process</div>
          </div>
          <h2 className="section-title">From Wire to Weather-Proof: Neelchakra&apos;s 4-Stage Process</h2>
          <p className="section-desc">
            At Neelchakra, quality begins with precision — premium GI base, chemical barrier, formulated finish, and batch-level
            verification.
          </p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">1</div>
              <h4>High-Grade GI Wire Base</h4>
              <p>
                We start with premium galvanized iron wire ensuring strong mechanical properties and base corrosion resistance —
                the foundation for every Neelchakra coil.
              </p>
            </div>
            <div className="process-step">
              <div className="step-num">2</div>
              <h4>Chemical Layer</h4>
              <p>
                An environment-friendly chemical coating process creates a uniform anti-corrosion barrier, enhancing durability and
                surface bonding for the layers that follow.
              </p>
            </div>
            <div className="process-step">
              <div className="step-num">3</div>
              <h4>Formulated Finish</h4>
              <p>
                A specially formulated coating delivers a smooth finish, bright blue colour, UV resistance, and extra protection
                against moisture and chemicals — the signature Neelchakra look and performance.
              </p>
            </div>
            <div className="process-step">
              <div className="step-num">4</div>
              <h4>Salt-Spray Quality Check</h4>
              <p>
                Every batch undergoes salt spray testing (SST) to verify coating integrity — zero compromise on quality before
                dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" style={{ background: 'var(--off-white)' }}>
        <div className="features-section-inner">
          <div className="features-section-intro">
            <span className="section-label">Why Neelchakra Double Coated Wires?</span>
            <h2 className="section-title">Built for Performance &amp; Peace of Mind</h2>
            <p className="section-desc">
              Dual protection, proven SST performance, and a premium finish — engineered for visible fencing and harsh Indian
              climates.
            </p>
          </div>
          <div className="features-grid">
            {whyFeatures.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Where It&apos;s Used</span>
            <h2>Applications</h2>
            <p>Neelchakra Double Coated Wires are widely used across these applications.</p>
          </div>
          <ul className="grassland-bullet-grid">
            {APPLICATIONS.map((item) => (
              <li key={item} className="grassland-bullet-card">
                <span className="grassland-bullet-dot" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="spec-section" style={{ background: 'var(--section-alt)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Compare</span>
            <h2>Neelchakra vs Ordinary GI Wire</h2>
            <p>See how dual coating stacks up against zinc-only wire.</p>
          </div>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Ordinary GI Wire</th>
                  <th>Neelchakra Double Coated Wire</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r) => (
                  <tr key={r.feature}>
                    <td><strong>{r.feature}</strong></td>
                    <td>{r.ordinary}</td>
                    <td style={{ fontWeight: 600, color: 'var(--brand-blue)' }}>{r.neel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="spec-section">
        <div className="spec-section-inner" style={{ maxWidth: 720, margin: '0', textAlign: 'left' }}>
          <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.5rem', marginBottom: 16 }}>Built for Indian Conditions</h2>
          <p style={{ color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 20 }}>
            From extreme heat to heavy monsoons, Neelchakra wires are developed to perform reliably in diverse Indian climates,
            ensuring long-lasting protection for your investment.
          </p>
          <p style={{ color: 'var(--text-body)', lineHeight: 1.75 }}>
            Don&apos;t settle for short-term solutions. Choose <strong>Neelchakra Double Coated Wires</strong> for long-term strength,
            durability, and peace of mind.
          </p>
        </div>
      </section>

      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Ready to Order Neelchakra Double Coated Wires?</h2>
            <p>Bulk quotes, gauges, and pan-India dispatch from Raipur.</p>
          </div>
          <ProductInquiryForm productName="neelchakra-double-coated-wires" />
        </div>
      </div>
    </main>
  );
}
