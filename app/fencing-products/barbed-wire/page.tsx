import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../../components/ProductInquiryForm';

export const metadata: Metadata = {
  title: 'Barbed Wire Double Coated | 12 Gauge GI Wire | Heavy Zinc Coated | NeelChakra Raipur',
  description:
    'NeelChakra double coated barbed wire — high-tensile 12 gauge GI wire with heavy zinc coating. 10, 12, 14 gauge in 30, 40, 80 GSM. ISO 9001:2015 certified manufacturer, Raipur. Bulk supply pan-India.',
  keywords: ['barbed wire double coated', '12 gauge GI wire double coated', 'heavy zinc coated wire', 'barbed wire manufacturer India'],
};

export default function BarbedWirePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'NeelChakra Double Coated Barbed Wire',
    description: 'High-tensile barbed wire double coated with GI wire core and heavy zinc-chemical coating. 10ga, 12ga, 14ga — 30, 40, 80 GSM.',
    brand: { '@type': 'Brand', name: 'NeelChakra' },
    manufacturer: { '@type': 'Organization', name: 'SK Engineering Solutions', address: { '@type': 'PostalAddress', addressLocality: 'Raipur', addressRegion: 'Chhattisgarh', addressCountry: 'IN' } },
    url: 'https://neelchakra.in/fencing-products/barbed-wire',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  };

  const features = [
    { title: 'High-Tensile Core', desc: 'IS:280 grade GI wire — resists sagging over long spans and holds tension against livestock pressure.', icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
    { title: '12 Gauge Double Coated', desc: 'Our most popular variant — perfectly balancing strength with cost-efficiency for agriculture and highway use.', icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
    { title: 'Heavy Zinc Coating', desc: 'Up to 80 GSM zinc-chemical dual coat guards critical barb twist points that ordinary wire leaves exposed.', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg> },
    { title: 'Salt-Spray Tested', desc: '72–96 hour salt-spray testing on every batch verifies coating adhesion before dispatch.', icon: <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
    { title: 'Easy Installation', desc: '100m and 200m coils with uniform barb spacing reduce site labour time and installation cost significantly.', icon: <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg> },
    { title: 'ISO 9001:2015 Certified', desc: 'Consistent wire diameter, coating uniformity, and mechanical properties batch after batch.', icon: <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── DARK HEADER ── */}
      <div className="product-page-header">
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker">Security &amp; Deterrence</span>
          <h1>Barbed Wire <span>Double Coated</span></h1>
          <p>
            High-tensile <strong>12 gauge GI wire double coated</strong> with NeelChakra&apos;s proprietary
            zinc-chemical process. Our <strong>barbed wire double coated</strong> range delivers maximum
            boundary security with <strong>heavy zinc coated wire</strong> protection —
            engineered for 15+ years of corrosion-free performance.
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

      {/* ── PRODUCT IMAGES ── */}
      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Product Gallery</span>
            <h2>Barbed Wire — Double Coated</h2>
          </div>
          <div className="products-detail-grid">
            {['/assests/barbed-wire-1.jpg', '/assests/barbed-wire-2.jpg', '/assests/barbed-wire-3.jpg'].map((src) => (
              <div key={src} className="product-detail-card">
                <img src={src} alt="NeelChakra barbed wire double coated — heavy zinc GI barbed wire" className="product-detail-card-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BULK ORDER CTA ── */}
      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Ready for Bulk Barbed Wire Orders?</h2>
            <p>10 · 12 · 14 gauge in 30, 40 &amp; 80 GSM — pan-India supply from Raipur.</p>
          </div>
          <ProductInquiryForm productName="barbed-wire-double-coated" />
        </div>
      </div>

      {/* ── SPEC TABLE ── */}
      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Technical Specifications</span>
            <h2>Barbed Wire — Available Variations</h2>
            <p>All double coated barbed wire is manufactured from premium GI wire and passes 72–96 hour salt-spray testing before dispatch.</p>
          </div>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead>
                <tr><th>Gauge</th><th>Wire Dia (mm)</th><th>Zinc Coating (GSM)</th><th>Barb Spacing</th><th>Barb Points</th><th>Coil Length</th><th>Best Use</th></tr>
              </thead>
              <tbody>
                {[
                  { g: '10 Gauge', d: '3.43', gsm: ['30','40','80'], bs: '10–15 cm', bp: '4-Point', cl: '100/200 m', u: 'Heavy Industrial, Railway' },
                  { g: '12 Gauge', d: '2.77', gsm: ['30','40','80'], bs: '10–15 cm', bp: '4-Point', cl: '200/400 m', u: 'Agriculture, Highway, Security' },
                  { g: '14 Gauge', d: '2.11', gsm: ['30','40'], bs: '7.5–12 cm', bp: '2/4-Point', cl: '400 m', u: 'Farm Boundary, Light Security' },
                ].map((r) => (
                  <tr key={r.g}>
                    <td>{r.g}</td><td>{r.d}</td>
                    <td>{r.gsm.map((g) => <span key={g} className="spec-badge" style={{ marginRight: 4 }}>{g} GSM</span>)}</td>
                    <td>{r.bs}</td><td>{r.bp}</td><td>{r.cl}</td><td>{r.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 16, textAlign: 'center' }}>Zinc Coating Weight Reference</h3>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <thead><tr><th>Grade</th><th>GSM</th><th>Expected Lifespan</th><th>Ideal Environment</th></tr></thead>
                <tbody>
                  {[
                    { g: 'Standard', gsm: '30 GSM', l: '8–10 years', e: 'Dry / low humidity — inland farms' },
                    { g: 'Heavy', gsm: '40 GSM', l: '12–15 years', e: 'Moderate humidity — industrial zones' },
                    { g: 'Extra Heavy', gsm: '80 GSM', l: '15+ years', e: 'High humidity, coastal, chemical exposure' },
                  ].map((r) => (
                    <tr key={r.g}><td>{r.g}</td><td><span className="spec-badge">{r.gsm}</span></td><td>{r.l}</td><td>{r.e}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section">
        <div className="features-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">Why NeelChakra Barbed Wire?</span>
            <h2 className="section-title">The Double-Coat Advantage</h2>
            <p className="section-desc">Standard galvanised barbed wire rusts at the twist and barb joints within 3–5 years. Our dual-process protects every millimetre.</p>
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
            <p>10 ga · 12 ga · 14 ga — in 30, 40 &amp; 80 GSM. Pan-India supply from Raipur.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I%20need%20bulk%20double%20coated%20barbed%20wire%20from%20NeelChakra."
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
