import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../../components/ProductInquiryForm';

export const metadata: Metadata = {
  title: 'Neelchakra Wire — Premium Double Coated GI Binding Wire | NeelChakra Raipur',
  description:
    'NeelChakra Wire — our premium double-coated stay and binding wire. Engineered for high tension and maximum flexibility with 15+ years of rust protection. ISO 9001:2015 certified.',
  keywords: ['neelchakra wire', 'premium binding wire', 'double coated stay wire', 'GI binding wire Raipur'],
};

export default function NeelchakraWirePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'NeelChakra Wire',
    description: 'Premium double-coated GI binding and stay wire engineered for extreme flexibility, high-tension applications, and 15+ years of corrosion resistance.',
    brand: { '@type': 'Brand', name: 'NeelChakra' },
    manufacturer: { '@type': 'Organization', name: 'SK Engineering Solutions', address: { '@type': 'PostalAddress', addressLocality: 'Raipur', addressRegion: 'Chhattisgarh', addressCountry: 'IN' } },
    url: 'https://neelchakra.in/fencing-products/neelchakra-wire',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  };

  const features = [
    { title: 'Extreme Flexibility', desc: 'Neelchakra Wire is specially annealed to provide maximum bendability without compromising the integrity of its double coating, making it the perfect binding wire.', icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
    { title: 'Heavy Zinc Coating', desc: 'Protected with heavy zinc to withstand the elements, ensuring your structural ties and stay wires remain rust-free for 15+ years.', icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
    { title: 'IS:280 Certified Core', desc: 'Every coil starts with IS:280 grade GI wire — consistent tensile strength and dimensional tolerance across all gauges.', icon: <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
    { title: 'Signature Double-Coat', desc: 'GI foundation → chemical dip → hot-plate adhesion → salt-spray verification. Four stages of relentless protection.', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg> },
    { title: 'Multiple Gauges', desc: 'Available in fine gauges for delicate binding work and thicker gauges for heavy-duty stay wire applications.', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg> },
    { title: 'Pan-India Supply', desc: 'Manufactured in Raipur, Chhattisgarh — centrally located for cost-effective supply to projects all over India.', icon: <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg> },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── DARK HEADER ── */}
      <div className="product-page-header">
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker">Premium Binding Wire</span>
          <h1><span>Neelchakra</span> Wire</h1>
          <p>
            The ultimate benchmark in binding and stay wire. <strong>Neelchakra Wire</strong> combines extreme flexibility
            with our signature 15+ year double-coated rust protection, making it the superior choice for high-tension
            agricultural support, structural reinforcement, and industrial binding purposes.
          </p>
          <div className="use-case-wrap" style={{ marginBottom: 48 }}>
            <span className="use-case-badge badge-blue">🏗️ Construction Binding</span>
            <span className="use-case-badge badge-green">🌾 Vineyard Support</span>
            <span className="use-case-badge badge-purple">🏭 Industrial Stay Wire</span>
            <span className="use-case-badge badge-orange">🛣️ Highway Netting Ties</span>
          </div>
        </div>
      </div>

      {/* ── PRODUCT IMAGES ── */}
      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Product Gallery</span>
            <h2>Neelchakra Wire — Binding &amp; Stay Wire</h2>
          </div>
          <div className="products-detail-grid">
            {['/assests/wire-1.jpg', '/assests/wire-2.jpg', '/assests/wire-3.jpg'].map((src) => (
              <div key={src} className="product-detail-card">
                <img src={src} alt="NeelChakra Wire — premium double coated GI binding and stay wire" className="product-detail-card-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BULK ORDER CTA ── */}
      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Ready to Order Neelchakra Wire in Bulk?</h2>
            <p>Multiple gauges, custom coil sizes, and pan-India delivery from Raipur.</p>
          </div>
          <ProductInquiryForm productName="neelchakra-wire" />
        </div>
      </div>

      {/* ── SPEC TABLE ── */}
      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Technical Specifications</span>
            <h2>Neelchakra Wire — Grade & Application Matrix</h2>
            <p>Every specification variant passes batch-level salt-spray testing and bendability verification. IS:280 certified wire core.</p>
          </div>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead><tr><th>Type</th><th>Gauge Options</th><th>Flexibility</th><th>Zinc Coating</th><th>Primary Use</th></tr></thead>
              <tbody>
                {[
                  { g: 'Stay Wire', d: '8, 10, 12 Gauge', t: 'High Tension', gsm: '80 GSM Heavy', u: 'Pole support, structural tensioning' },
                  { g: 'Binding Wire', d: '14, 16, 18 Gauge', t: 'Highly Annealed', gsm: '40 GSM Standard', u: 'Rebar tying, fence construction' },
                  { g: 'Vineyard Wire', d: '12, 14 Gauge', t: 'Moderate', gsm: '80 GSM Heavy', u: 'Orchard trellising, grape supports' },
                ].map((r) => (
                  <tr key={r.g}>
                    <td><strong>{r.g}</strong></td><td>{r.d}</td><td>{r.t}</td>
                    <td><span className="spec-badge">{r.gsm}</span></td><td>{r.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section">
        <div className="features-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">Why Choose NeelChakra Wire?</span>
            <h2 className="section-title">The Perfect Balance of Strength and Flexibility</h2>
            <p className="section-desc">Binding wire needs to bend without breaking its protective coating. Neelchakra Wire achieves exactly that.</p>
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
            <h2>Order Neelchakra Wire in Bulk</h2>
            <p>All gauges available — highly annealed for binding or high-tensile for stay wires — custom packaging supplied.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I%20need%20bulk%20NeelChakra%20binding%20and%20stay%20wire."
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
