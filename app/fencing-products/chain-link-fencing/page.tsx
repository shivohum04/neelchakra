import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../../components/ProductInquiryForm';

export const metadata: Metadata = {
  title: 'Chain Link Fencing Wire — Double Coated GI | NeelChakra Manufacturer Raipur',
  description:
    'NeelChakra chain link fencing wire manufactured with double-coated GI wire for 15+ years of rust-free performance. Multiple gauges, mesh openings for agriculture, highways, sports, and industrial perimeters. Bulk supply pan-India.',
  keywords: ['chain link fencing wire', 'chain link fencing wire manufacturer India', 'double coated chain link fence', 'GI chain link fencing Raipur'],
};

export default function ChainLinkFencingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'NeelChakra Chain Link Fencing Wire',
    description: 'Double-coated GI chain link fencing wire. 10ga–14ga, mesh 25–75mm, heights 0.9m–3.6m. Agricultural, industrial, sports, and highway use.',
    brand: { '@type': 'Brand', name: 'NeelChakra' },
    manufacturer: { '@type': 'Organization', name: 'SK Engineering Solutions', address: { '@type': 'PostalAddress', addressLocality: 'Raipur', addressRegion: 'Chhattisgarh', addressCountry: 'IN' } },
    url: 'https://neelchakra.in/fencing-products/chain-link-fencing',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  };

  const features = [
    { title: 'Double-Coat at Every Weave', desc: 'Each wire strand is double-coated before weaving — the chemical barrier is unbroken at the most vulnerable twist points.', icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
    { title: 'IS:280 Grade GI Core', desc: 'High-tensile GI wire certified to IS:280 holds tension over long spans without sagging.', icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
    { title: 'Custom Heights & Rolls', desc: 'Heights from 0.9m to 3.6m and roll lengths tailored to your project — reducing waste and handling cost.', icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> },
    { title: '15+ Year Corrosion Life', desc: 'Salt-spray tested 72–96+ hours at batch level. Heavy 80 GSM zinc achieves 15+ year protected life in most Indian climates.', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
    { title: 'Agriculture-Grade Quality', desc: 'Used for farm boundaries and grassland fencing across Chhattisgarh, MP, and Maharashtra — trusted by 500+ farmers.', icon: <svg viewBox="0 0 24 24"><path d="M12 22V12M12 12C12 7 17 3 17 3C17 3 17 8 12 12ZM12 12C12 7 7 3 7 3C7 3 7 8 12 12Z"/></svg> },
    { title: 'ISO 9001:2015 Certified', desc: 'Consistent wire diameter, weave geometry, and coating weight — batch after batch — under our ISO quality management.', icon: <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── DARK HEADER ── */}
      <div className="product-page-header">
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker">Boundary Solutions</span>
          <h1><span>Chain Link Fencing Wire</span> — Double Coated GI</h1>
          <p>
            The industry standard for secure, visible perimeters — now with NeelChakra&apos;s double-coating process.
            Our <strong>chain link fencing wire</strong> delivers 15+ years of corrosion-free boundary performance
            for agriculture, highways, industrial sites, and sports complexes.
          </p>
          <div className="use-case-wrap" style={{ marginBottom: 48 }}>
            <span className="use-case-badge badge-green">🌾 Agriculture</span>
            <span className="use-case-badge badge-blue">🏭 Industrial Parks</span>
            <span className="use-case-badge badge-orange">🛣️ Highways</span>
            <span className="use-case-badge badge-purple">🏟️ Sports Complexes</span>
            <span className="use-case-badge badge-teal">🏘️ Residential</span>
          </div>
        </div>
      </div>

      {/* ── PRODUCT IMAGES ── */}
      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Product Gallery</span>
            <h2>Chain Link Fencing Wire — Visual Overview</h2>
          </div>
          <div className="products-detail-grid">
            {['/assests/chain-fencing-wire-1.jpg', '/assests/chain-fencing-wire-2.jpg', '/assests/chain-fencing-wire-3.jpg'].map((src) => (
              <div key={src} className="product-detail-card">
                <img src={src} alt="NeelChakra chain link fencing wire — double coated GI wire" className="product-detail-card-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BULK ORDER CTA ── */}
      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Ready for Bulk Chain Link Orders?</h2>
            <p>Gauges: 10 · 12 · 14 &nbsp;|&nbsp; Mesh: 25–75 mm &nbsp;|&nbsp; Heights up to 3.6 m.</p>
          </div>
          <ProductInquiryForm productName="chain-link-fencing-wire" />
        </div>
      </div>

      {/* ── SPEC TABLE ── */}
      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Technical Specifications</span>
            <h2>Chain Link Fencing — Available Variations</h2>
            <p>All chain link fencing wire is manufactured from IS:280 grade GI wire and tested to IS:2852 standards for strength and coating adhesion.</p>
          </div>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead><tr><th>Wire Gauge</th><th>Wire Dia (mm)</th><th>Mesh Opening</th><th>Fence Height</th><th>Roll Length</th><th>Zinc Coating</th><th>Application</th></tr></thead>
              <tbody>
                {[
                  { g: '10 Gauge', d: '3.43', m: '50/75 mm', h: '1.8–3.6 m', r: '10/25 m', gsm: ['40','80'], a: 'Heavy Industrial, Prisons' },
                  { g: '12 Gauge', d: '2.77', m: '50/63 mm', h: '1.5–2.4 m', r: '25/30 m', gsm: ['30','40','80'], a: 'Highway, Sports, Residential' },
                  { g: '14 Gauge', d: '2.11', m: '25/50 mm', h: '0.9–1.8 m', r: '30/50 m', gsm: ['30','40'], a: 'Agriculture, Light Security' },
                ].map((r) => (
                  <tr key={r.g}>
                    <td>{r.g}</td><td>{r.d}</td><td>{r.m}</td><td>{r.h}</td><td>{r.r}</td>
                    <td>{r.gsm.map((g) => <span key={g} className="spec-badge" style={{ marginRight: 4 }}>{g} GSM</span>)}</td>
                    <td>{r.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 16, textAlign: 'center' }}>Mesh Opening Selection Guide</h3>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <thead><tr><th>Mesh Size</th><th>Diamond Opening</th><th>Best For</th><th>Security Level</th></tr></thead>
                <tbody>
                  {[
                    { m: '25 mm', o: '25×25 mm', u: 'Poultry farms, small animal containment', s: 'High — small gap' },
                    { m: '50 mm', o: '50×50 mm', u: 'Residential plots, highway fencing', s: 'Medium — standard' },
                    { m: '63 mm', o: '63×63 mm', u: 'Sports facilities, school boundaries', s: 'Medium — visible deterrence' },
                    { m: '75 mm', o: '75×75 mm', u: 'Industrial perimeters, large farms', s: 'High with anti-climb design' },
                  ].map((r) => (
                    <tr key={r.m}><td><span className="spec-badge">{r.m}</span></td><td>{r.o}</td><td>{r.u}</td><td>{r.s}</td></tr>
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
            <span className="section-label">Why NeelChakra Chain Link?</span>
            <h2 className="section-title">Built for the Long Run</h2>
            <p className="section-desc">Our chain link fencing wire outlasts conventional galvanised fencing because of where we protect — at every wire join and weave point.</p>
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
            <h2>Need Chain Link Fencing Wire in Bulk?</h2>
            <p>10 gauge · 12 gauge · 14 gauge — 25mm to 75mm mesh — pan-India delivery from Raipur.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I%20need%20bulk%20chain%20link%20fencing%20wire%20from%20NeelChakra."
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
