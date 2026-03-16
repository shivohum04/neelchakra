import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../../components/ProductInquiryForm';

export const metadata: Metadata = {
  title: '12 Gauge GI Wire Double Coated | Heavy Zinc Coated Wire | NeelChakra Raipur',
  description:
    'NeelChakra double coated GI wire — 10, 12, and 14 gauge with heavy zinc coated wire in 30, 40, and 80 GSM. Base material for fencing, agriculture, construction, and telecom. ISO 9001:2015 certified. Bulk supply pan-India.',
  keywords: ['12 gauge GI wire double coated', 'heavy zinc coated wire', 'double coated GI wire manufacturer India', 'galvanised iron wire Raipur'],
};

export default function DoubleCoatedGiWirePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'NeelChakra Double Coated GI Wire',
    description: 'Double coated galvanised iron wire — 10, 12, 14 gauge with 30, 40, 80 GSM heavy zinc coating. Used in fencing, agriculture, construction, and telecommunications.',
    brand: { '@type': 'Brand', name: 'NeelChakra' },
    manufacturer: { '@type': 'Organization', name: 'SK Engineering Solutions', address: { '@type': 'PostalAddress', addressLocality: 'Raipur', addressRegion: 'Chhattisgarh', addressCountry: 'IN' } },
    url: 'https://neelchakra.in/fencing-products/double-coated-gi-wire',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  };

  const features = [
    { title: '12 Gauge — Most Versatile', desc: 'Our best-selling 12 gauge GI wire double coated is used in chain link fencing, barbed wire production, agricultural support, and construction binding.', icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
    { title: 'Heavy Zinc Coating', desc: '80 GSM heavy zinc coated wire provides 11.2 µm of combined zinc-chemical protection — exceeding IS:4826 standard requirements.', icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
    { title: 'IS:280 Certified Core', desc: 'Every coil starts with IS:280 grade GI wire — consistent tensile strength ≥490 N/mm² and dimensional tolerance across all gauges.', icon: <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
    { title: '4-Stage Coating Process', desc: 'GI foundation → chemical dip → hot-plate adhesion → salt-spray verification. Four stages that make NeelChakra wire different from every ordinary alternative.', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg> },
    { title: 'Custom Coil Sizes', desc: 'Order 2 kg coils for distribution or 50 kg production coils for large-scale fencing fabricators and construction contractors.', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg> },
    { title: 'Pan-India Supply', desc: 'Manufactured in Raipur, Chhattisgarh — centrally located for cost-effective supply to MP, Maharashtra, Odisha, UP, and beyond.', icon: <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg> },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── DARK HEADER ── */}
      <div className="product-page-header">
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker">Base Wire Products</span>
          <h1><span>12 Gauge GI Wire</span> Double Coated — Heavy Zinc</h1>
          <p>
            NeelChakra&apos;s flagship <strong>12 gauge GI wire double coated</strong> product is the foundation
            of every fencing roll, agricultural tie wire, and infrastructure project we supply. Available in
            10 gauge, 12 gauge, and 14 gauge with <strong>heavy zinc coated wire</strong> options of
            30 GSM, 40 GSM, and 80 GSM — engineered for 15+ years of corrosion-free service.
          </p>
          <div className="use-case-wrap" style={{ marginBottom: 48 }}>
            <span className="use-case-badge badge-green">🌾 Agriculture</span>
            <span className="use-case-badge badge-blue">🏗️ Construction</span>
            <span className="use-case-badge badge-teal">📡 Telecom</span>
            <span className="use-case-badge badge-orange">🛣️ Infrastructure</span>
            <span className="use-case-badge badge-purple">🏭 Industrial</span>
            <span className="use-case-badge badge-red">🔒 Fencing Fabrication</span>
          </div>
        </div>
      </div>

      {/* ── PRODUCT IMAGES ── */}
      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Product Gallery</span>
            <h2>Double Coated GI Wire</h2>
          </div>
          <div className="products-detail-grid">
            {['/assests/grassland-fencing-1.jpg', '/assests/grassland-fencing-2.jpg', '/assests/grassland-fencing-3.jpg'].map((src) => (
              <div key={src} className="product-detail-card">
                <img src={src} alt="NeelChakra double coated GI wire — heavy zinc coated GI wire" className="product-detail-card-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BULK ORDER CTA ── */}
      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Ready for Bulk GI Wire Orders?</h2>
            <p>10 · 12 · 14 gauge — 30, 40 &amp; 80 GSM heavy zinc coating — custom coil sizes.</p>
          </div>
          <ProductInquiryForm productName="12-gauge-gi-wire-double-coated" />
        </div>
      </div>

      {/* ── SPEC TABLE ── */}
      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Technical Specifications</span>
            <h2>Double Coated GI Wire — Full Specification Matrix</h2>
            <p>Every specification variant passes batch-level salt-spray testing and dimensional verification. IS:280 certified wire core.</p>
          </div>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead><tr><th>Gauge (SWG)</th><th>Wire Dia (mm)</th><th>Tensile (N/mm²)</th><th>Weight/km (kg)</th><th>Zinc Coating</th><th>Coil Weight</th><th>Primary Use</th></tr></thead>
              <tbody>
                {[
                  { g: '10 Gauge', d: '3.43', t: '≥ 490', w: '72.5', gsm: ['30','40','80'], c: '25–50 kg', u: 'Heavy fencing, stay wire, binding' },
                  { g: '12 Gauge', d: '2.77', t: '≥ 540', w: '47.2', gsm: ['30','40','80'], c: '5–25 kg', u: 'Chain link, barbed wire, agriculture' },
                  { g: '14 Gauge', d: '2.11', t: '≥ 540', w: '27.4', gsm: ['30','40'], c: '2–10 kg', u: 'Tie wire, light fencing, craft mesh' },
                ].map((r) => (
                  <tr key={r.g}>
                    <td>{r.g}</td><td>{r.d}</td><td>{r.t}</td><td>{r.w}</td>
                    <td>{r.gsm.map((g) => <span key={g} className="spec-badge" style={{ marginRight: 4 }}>{g} GSM</span>)}</td>
                    <td>{r.c}</td><td>{r.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 16, textAlign: 'center' }}>Zinc Coating Grade Comparison</h3>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <thead><tr><th>Grade</th><th>GSM</th><th>Coating (µm)</th><th>Salt-Spray</th><th>Expected Life</th><th>Recommended For</th></tr></thead>
                <tbody>
                  {[
                    { g: 'Standard', gsm: '30 GSM', th: '4.2 µm', h: '72 hrs', l: '8–10 years', r: 'Dry inland regions, low humidity agriculture' },
                    { g: 'Heavy', gsm: '40 GSM', th: '5.6 µm', h: '72–96 hrs', l: '12–15 years', r: 'Industrial zones, moderate humidity' },
                    { g: 'Extra Heavy', gsm: '80 GSM', th: '11.2 µm', h: '96+ hrs', l: '15+ years', r: 'Coastal, chemical plants, high humidity' },
                  ].map((r) => (
                    <tr key={r.g}><td>{r.g}</td><td><span className="spec-badge">{r.gsm}</span></td><td>{r.th}</td><td>{r.h}</td><td style={{ fontWeight: 700, color: 'var(--brand-blue)' }}>{r.l}</td><td>{r.r}</td></tr>
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
            <span className="section-label">Why Choose NeelChakra GI Wire?</span>
            <h2 className="section-title">The Double-Coat Process Explained</h2>
            <p className="section-desc">Standard galvanised wire uses a single zinc layer. NeelChakra adds a chemical barrier over the zinc for a true dual-protection system.</p>
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

      {/* ── APPLICATIONS TABLE ── */}
      <section className="spec-section" style={{ background: 'var(--section-alt)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Applications</span>
            <h2>Where is Double Coated GI Wire Used?</h2>
            <p>From farm boundaries to telecom pole ties, our heavy zinc coated wire serves diverse industries across India.</p>
          </div>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead><tr><th>Industry</th><th>Application</th><th>Recommended Gauge</th><th>Recommended Coating</th></tr></thead>
              <tbody>
                {[
                  { i: '🌾 Agriculture', a: 'Farm boundaries, crop support, animal containment', g: '12 / 14 Gauge', c: '30 / 40 GSM' },
                  { i: '🏗️ Construction', a: 'Binding rebar, scaffolding ties, form-work wire', g: '14 Gauge', c: '30 GSM' },
                  { i: '📡 Telecom', a: 'Cable support wire, aerial bundled cable ties', g: '12 Gauge', c: '40 GSM' },
                  { i: '🛣️ Highways & Roads', a: 'Road-side fencing, median barricades, bridge netting', g: '10 / 12 Gauge', c: '40 / 80 GSM' },
                  { i: '🏭 Industrial', a: 'Machine guards, safety netting, equipment binding', g: '10 / 12 Gauge', c: '40 / 80 GSM' },
                  { i: '🔒 Fencing Fabrication', a: 'Raw material for chain link and barbed wire production', g: '10–14 Gauge', c: '30 / 40 / 80 GSM' },
                ].map((r) => (
                  <tr key={r.i}><td>{r.i}</td><td>{r.a}</td><td><span className="spec-badge">{r.g}</span></td><td><span className="spec-badge">{r.c}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Order Double Coated GI Wire in Bulk</h2>
            <p>10 ga · 12 ga · 14 ga — 30, 40 &amp; 80 GSM heavy zinc coating — custom coil sizes available.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I%20need%20bulk%20double%20coated%20GI%20wire%20from%20NeelChakra."
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
