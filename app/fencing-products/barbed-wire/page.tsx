import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../../components/ProductInquiryForm';

export const metadata: Metadata = {
  title: 'Neelchakra Barbed Wire | Double Coated GI | NeelChakra Raipur',
  description:
    'Neelchakra barbed wire — high-tensile 12 and 14 gauge GI wire double coated with Neel Chakra’s proprietary zinc-chemical process. NEELCHAKRA BARBED WIRE spec table, expected lifespan grades. ISO 9001:2015. Bulk from Raipur.',
  keywords: ['Neelchakra barbed wire', 'barbed wire double coated', '12 gauge GI wire double coated', 'barbed wire manufacturer India'],
};

const BARBED_ROWS = [
  { gauge: '12X12', spacing: '9 CM', points: '4-POINT', use: 'Heavy Industrial, Railway' },
  { gauge: '14X14', spacing: '9 CM', points: '4-POINT', use: 'Farm Boundary, Light Security' },
  { gauge: '12X14', spacing: '9 CM', points: '4-POINT', use: 'Agriculture, Highway, Security' },
  { gauge: '13X14', spacing: '9 CM', points: '4-POINT', use: 'Farm Boundary, Light Security' },
  { gauge: '13X13', spacing: '9 CM', points: '4-POINT', use: 'Heavy Industrial, Railway' },
  { gauge: '12X13', spacing: '9 CM', points: '4-POINT', use: 'Heavy Industrial, Railway' },
];

const LIFESPAN_ROWS = [
  { grade: 'COMMERCIAL', gsm: '30-40', env: 'NORMAL AGRICULTURAL FENCING', life: '4-5 YEARS' },
  { grade: 'STANDARD', gsm: '60-80', env: 'NORMAL AGRICULTURAL FENCING', life: '7-8 YEARS' },
  { grade: 'HEAVY', gsm: '100-120', env: 'NORMAL AGRICULTURAL FENCING', life: '10-12 YEARS' },
  { grade: 'NEELCHAKRA DOUBLE COATED', gsm: 'DUAL COATING ZINC+CHEMICAL', env: 'NORMAL AGRICULTURAL FENCING', life: '15+ YEARS' },
];

export default function BarbedWirePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Neelchakra Barbed Wire',
    description: 'High-tensile barbed wire double coated with GI wire core and zinc-chemical coating. 12 & 14 gauge variants.',
    brand: { '@type': 'Brand', name: 'NeelChakra' },
    manufacturer: { '@type': 'Organization', name: 'SK Engineering Solutions', address: { '@type': 'PostalAddress', addressLocality: 'Raipur', addressRegion: 'Chhattisgarh', addressCountry: 'IN' } },
    url: 'https://neelchakra.in/fencing-products/barbed-wire',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  };

  const features = [
    { title: 'High-Tensile Core', desc: 'IS:280 grade GI wire — resists sagging over long spans and holds tension against livestock pressure.', icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
    {
      title: 'Double Coated',
      desc: 'Our most popular variants — perfectly balancing strength with cost-efficiency for agriculture and highway use.',
      icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    },
    {
      title: 'Double protection coating',
      desc: 'Added protection — zinc-chemical dual coat guards critical barb twist points that ordinary wire leaves exposed.',
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>,
    },
    { title: 'Salt-Spray Tested', desc: '72–96 hour salt-spray testing on every batch verifies coating adhesion before dispatch.', icon: <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
    {
      title: 'Easy Installation',
      desc: '900 Feet coils with uniform barb spacing reduce site labour time and installation cost significantly.',
      icon: <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
    },
    { title: 'ISO 9001:2015 Certified', desc: 'Consistent wire diameter, coating uniformity, and mechanical properties batch after batch.', icon: <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="product-page-header">
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker">Security &amp; Deterrence</span>
          <h1><span>Neelchakra</span> Barbed Wire</h1>
          <p>
            High-tensile <strong>12 gauge and 14 gauge</strong> GI wire double coated with Neel Chakra&apos;s proprietary
            zinc-chemical process. Our <strong>barbed wire double coated</strong> range delivers maximum boundary security
            with <strong>double coated wire</strong> protection — engineered for <strong>15+ years</strong> of corrosion-free
            performance.
          </p>
          <div className="use-case-wrap" style={{ marginBottom: 48 }}>
            <span className="use-case-badge badge-green">🌾 Agriculture</span>
            <span className="use-case-badge badge-red">🔒 Security</span>
            <span className="use-case-badge badge-orange">🛤️ Railways</span>
            <span className="use-case-badge badge-blue">🛣️ Highways</span>
            <span className="use-case-badge badge-purple">🏭 Industrial</span>
          </div>
        </div>
      </div>

      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Product Gallery</span>
            <h2>Neelchakra Barbed Wire — Visual Overview</h2>
          </div>
          <div className="products-detail-grid">
            {['/assests/barbed-wire-2.jpg', '/assests/barbed-wire-3.jpg', '/assests/barbed-wire-1.jpg'].map((src) => (
              <div key={src} className="product-detail-card">
                <img src={src} alt="Neelchakra barbed wire double coated" className="product-detail-card-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Ready for Bulk Barbed Wire Orders?</h2>
            <p>12 swg, 13 swg, 14 swg in Double coated Neelchakra wire. Pan-India supply from Raipur.</p>
          </div>
          <ProductInquiryForm productName="barbed-wire-double-coated" />
        </div>
      </div>

      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Technical Specifications</span>
            <h2>NEELCHAKRA BARBED WIRE</h2>
            <p>Specification reference for gauge combinations, barb spacing, and recommended applications.</p>
          </div>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>GAUGE</th>
                  <th>BARB SPACING</th>
                  <th>BARB POINTS</th>
                  <th>BEST USE</th>
                </tr>
              </thead>
              <tbody>
                {BARBED_ROWS.map((r) => (
                  <tr key={r.gauge}>
                    <td><span className="spec-badge">{r.gauge}</span></td>
                    <td>{r.spacing}</td>
                    <td>{r.points}</td>
                    <td>{r.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 40 }}>
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 16, textAlign: 'center' }}>
              Expected Lifespan
            </h3>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>GRADE</th>
                    <th>GSM</th>
                    <th>ENVIRONMENT</th>
                    <th>EXPECTED LIFE</th>
                  </tr>
                </thead>
                <tbody>
                  {LIFESPAN_ROWS.map((r) => (
                    <tr key={r.grade}>
                      <td><strong>{r.grade}</strong></td>
                      <td>{r.gsm}</td>
                      <td>{r.env}</td>
                      <td style={{ fontWeight: 700, color: 'var(--brand-blue)' }}>{r.life}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">Why Neelchakra barbed wire?</span>
            <h2 className="section-title">The Double-Coat Advantage</h2>
            <p className="section-desc">Standard galvanised barbed wire rusts at the twist and barb joints within a few years. Our dual-process protects every millimetre.</p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Ready to Order Barbed Wire Double Coated?</h2>
            <p>12 swg, 13 swg, 14 swg in Double coated Neelchakra wire. Pan-India supply from Raipur.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I%20need%20bulk%20double%20coated%20Neelchakra%20barbed%20wire%20from%20NeelChakra."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Get a Bulk Quote →
          </a>
        </div>
      </div>
    </main>
  );
}
