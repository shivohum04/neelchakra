import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../../components/ProductInquiryForm';

export const metadata: Metadata = {
  title: 'Neelchakra Chainlink Mesh — Double Coated GI | NeelChakra Manufacturer Raipur',
  description:
    'Neelchakra chainlink mesh — gauges 8, 10, 12; gap 50mm–100mm; height up to 8 ft. Double-coated GI for agriculture, highways, and industrial perimeters. Bulk supply pan-India.',
  keywords: ['Neelchakra chainlink mesh', 'chainlink mesh manufacturer India', 'double coated chain link fence', 'GI chain link fencing Raipur'],
};

const CHAIN_SPECS_LINE = 'Gauge: 8, 10, 12 · Gap: 50mm to 100mm · Height: up to 8 feet';

export default function ChainLinkFencingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Neelchakra Chainlink Mesh',
    description:
      'Double-coated GI chainlink mesh. Gauges 8, 10, 12; mesh gap 50–100mm; heights up to 8 ft. Agricultural, industrial, sports, and highway use.',
    brand: { '@type': 'Brand', name: 'NeelChakra' },
    manufacturer: { '@type': 'Organization', name: 'SK Engineering Solutions', address: { '@type': 'PostalAddress', addressLocality: 'Raipur', addressRegion: 'Chhattisgarh', addressCountry: 'IN' } },
    url: 'https://neelchakra.in/fencing-products/chain-link-fencing',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  };

  const features = [
    { title: 'Double-Coat at Every Weave', desc: 'Each wire strand is double-coated before weaving — the chemical barrier is unbroken at the most vulnerable twist points.', icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
    { title: 'IS:280 Grade GI Core', desc: 'High-tensile GI wire certified to IS:280 holds tension over long spans without sagging.', icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
    { title: 'Custom Heights & Rolls', desc: 'Heights up to 8 feet and roll lengths tailored to your project — reducing waste and handling cost.', icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> },
    {
      title: '15+ years life',
      desc: 'Salt-spray tested 72–96+ hours at batch level ensures 15+ year protected life in most Indian climates.',
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    },
    { title: 'Agriculture-Grade Quality', desc: 'Used for farm boundaries and grassland fencing across Chhattisgarh, MP, and Maharashtra — trusted by 500+ farmers.', icon: <svg viewBox="0 0 24 24"><path d="M12 22V12M12 12C12 7 17 3 17 3C17 3 17 8 12 12ZM12 12C12 7 7 3 7 3C7 3 7 8 12 12Z"/></svg> },
    { title: 'ISO 9001:2015 Certified', desc: 'Consistent wire diameter, weave geometry, and coating weight — batch after batch — under our ISO quality management.', icon: <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="product-page-header">
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker">Boundary Solutions</span>
          <h1><span>Neelchakra Chainlink Mesh</span> — Double Coated GI</h1>
          <p>
            The industry standard for secure, visible perimeters — now with NeelChakra&apos;s double-coating process.
            Our <strong>Neelchakra chainlink mesh</strong> delivers strong corrosion resistance and UV-stable protection
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

      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Product Gallery</span>
            <h2>Neelchakra Chainlink Mesh — Visual Overview</h2>
          </div>
          <div className="products-detail-grid">
            {['/assests/chain-fencing-wire-2.jpg', '/assests/chain-fencing-wire-3.jpg', '/assests/chain-fencing-wire-1.jpg'].map((src) => (
              <div key={src} className="product-detail-card">
                <img src={src} alt="Neelchakra chainlink mesh — double coated GI wire" className="product-detail-card-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Ready for Bulk Chain Link Orders?</h2>
            <p>{CHAIN_SPECS_LINE}</p>
          </div>
          <ProductInquiryForm productName="chain-link-fencing-wire" />
        </div>
      </div>

      <section className="features-section">
        <div className="features-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">Why Neelchakra Chainlink Mesh?</span>
            <h2 className="section-title">Built for the Long Run</h2>
            <p className="section-desc">Our Neelchakra chainlink mesh outlasts conventional galvanised fencing because of where we protect — at every wire join and weave point.</p>
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
            <p>{CHAIN_SPECS_LINE}</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I%20need%20bulk%20Neelchakra%20chain%20link%20fencing%20wire%20from%20NeelChakra."
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
