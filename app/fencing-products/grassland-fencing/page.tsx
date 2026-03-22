import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../../components/ProductInquiryForm';

export const metadata: Metadata = {
  title: 'Neelchakra Grassland Fencing India | Premium Double Coated Agricultural Fence | NeelChakra Raipur',
  description:
    'Neelchakra Grassland Fencing — high-performance fencing for Indian agricultural and rural conditions. Premium galvanized wire, advanced blue coating, rust & weather protection. Bulk Raipur.',
  keywords: [
    'Neelchakra grassland fencing',
    'grassland fencing India',
    'agricultural fencing wire',
    'double coated grassland fence',
    'farm boundary fencing',
  ],
  alternates: {
    canonical: 'https://neelchakra.in/fencing-products/grassland-fencing',
  },
};

const applications = [
  'Agricultural land and farm fencing',
  'Crop protection and boundary marking',
  'Livestock control and safety',
  'Highway and roadside fencing',
  'Industrial and commercial land security',
];

const keyBenefits = [
  'Long-lasting corrosion resistance fencing',
  'Heavy-duty agricultural fencing solution',
  'Weather-resistant GI wire fencing',
  'Cost-effective alternative to premium branded fencing',
  'Consistent quality with reliable supply',
];

const customization = [
  'Different height variants',
  'Flexible roll lengths',
  'Standard and premium coating options',
  'Bulk supply for projects and dealers',
];

const smartChoice = [
  'Best fencing for agriculture in India',
  'Long life GI fencing with coating',
  'Rust-proof fencing for farms',
  'Affordable alternative to high-cost branded fencing',
];

export default function GrasslandFencingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Neelchakra Grassland Fencing',
    description:
      'Premium double coated grassland fencing for agriculture, boundaries, and infrastructure — long-lasting corrosion resistance.',
    brand: { '@type': 'Brand', name: 'NeelChakra' },
    manufacturer: {
      '@type': 'Organization',
      name: 'SK Engineering Solutions',
      address: { '@type': 'PostalAddress', addressLocality: 'Raipur', addressRegion: 'Chhattisgarh', addressCountry: 'IN' },
    },
    url: 'https://neelchakra.in/fencing-products/grassland-fencing',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  };

  const whyFeatures = [
    {
      title: 'Advanced Double Coating Technology',
      desc: 'Protective double layer against corrosion, rust, rain, humidity, fertilizers, and chemicals — longer life than ordinary GI fencing wire.',
      icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    },
    {
      title: 'High Strength & Durability',
      desc: 'Strong structure for long boundaries, resistance to bending and impact, and reliable performance in extreme weather.',
      icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    },
    {
      title: 'Attractive Blue Finish',
      desc: 'Improved protection with enhanced visual appeal, a clean uniform look over time, and clear differentiation from ordinary products.',
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>,
    },
    {
      title: 'Low Maintenance & Long Life',
      desc: 'Less frequent replacement, minimal upkeep, and ideal performance for remote and large land areas.',
      icon: <svg viewBox="0 0 24 24"><path d="M12 22V12M12 12C12 7 17 3 17 3C17 3 17 8 12 12ZM12 12C12 7 7 3 7 3C7 3 7 8 12 12Z" /></svg>,
    },
  ];

  return (
    <main className="product-content-left">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="product-page-header">
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker">Grassland Fencing</span>
          <h1>Neelchakra Grassland Fencing</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--brand-cyan)', marginTop: 8, marginBottom: 20 }}>
            Premium Double Coated Fencing for Long-Lasting Protection
          </p>
          <p style={{ maxWidth: 720, margin: '0 0 16px 0', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.92)' }}>
            <strong>Neelchakra Grassland Fencing</strong> is a high-performance fencing solution designed for Indian agricultural
            and rural conditions. Built using premium quality galvanized wire and advanced blue coating technology, it provides
            superior protection against rust, corrosion, and harsh weather.
          </p>
          <p style={{ maxWidth: 720, margin: '0 0 32px 0', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.92)' }}>
            Ideal for farmers, landowners, and infrastructure projects, Neelchakra fencing offers the perfect balance of
            strength, durability, and cost-effectiveness.
          </p>
          <div className="use-case-wrap" style={{ marginBottom: 24 }}>
            <span className="use-case-badge badge-green">🌾 Agriculture</span>
            <span className="use-case-badge badge-blue">🏗️ Infrastructure</span>
            <span className="use-case-badge badge-orange">🛣️ Highways</span>
            <span className="use-case-badge badge-teal">🐄 Livestock</span>
          </div>
        </div>
      </div>

      <section className="spec-section" style={{ background: 'var(--white)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Product Gallery</span>
            <h2>Neelchakra Grassland Fencing — Visual Overview</h2>
          </div>
          <div className="products-detail-grid">
            {['/assests/grassland-fencing-2.jpg', '/assests/grassland-fencing-3.jpg', '/assests/grassland-fencing-1.jpg'].map((src) => (
              <div key={src} className="product-detail-card">
                <img src={src} alt="Neelchakra Grassland Fencing — double coated GI" className="product-detail-card-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section" style={{ background: 'var(--off-white)' }}>
        <div className="features-section-inner">
          <div className="features-section-intro">
            <span className="section-label">Why Neelchakra Grassland Fencing?</span>
            <h2 className="section-title">Engineered for Indian Farms &amp; Open Land</h2>
            <p className="section-desc">
              From double-layer coating to the signature blue finish — every detail is built for durability, visibility, and
              long-term value in real field conditions.
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

      <section className="spec-section grassland-content-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Where It Works</span>
            <h2>Applications of Grassland Fencing</h2>
            <p>Neelchakra Grassland Fencing is widely used across these sectors and site types.</p>
          </div>
          <ul className="grassland-bullet-grid">
            {applications.map((item) => (
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
            <span className="section-label">Value</span>
            <h2>Key Benefits</h2>
          </div>
          <ul className="grassland-bullet-grid">
            {keyBenefits.map((item) => (
              <li key={item} className="grassland-bullet-card">
                <span className="grassland-bullet-dot" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="spec-section grassland-content-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Made to Fit</span>
            <h2>Customization Options</h2>
            <p>Neelchakra fencing is available in multiple options to suit your needs.</p>
          </div>
          <ul className="grassland-bullet-grid">
            {customization.map((item) => (
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
            <span className="section-label">Decision</span>
            <h2>Why It&apos;s a Smart Choice</h2>
            <p>If you are looking for:</p>
          </div>
          <ul className="grassland-bullet-grid">
            {smartChoice.map((item) => (
              <li key={item} className="grassland-bullet-card">
                <span className="grassland-bullet-dot" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p style={{ textAlign: 'left', marginTop: 28, fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>
            <strong>Neelchakra Grassland Fencing</strong> is the right solution.
          </p>
        </div>
      </section>

      <div className="product-cta-band">
        <div className="product-cta-band-inner" style={{ alignItems: 'flex-start', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ flex: '1 1 320px', maxWidth: 560 }}>
            <h2>Request a Quote — Neelchakra Grassland Fencing</h2>
            <p style={{ marginTop: 12, marginBottom: 20 }}>
              Upgrade your fencing with Neelchakra&apos;s durable and cost-effective solution. <strong>Get best price for grassland
              fencing</strong> — share your requirement and our team will respond with options from Raipur.
            </p>
            <p style={{ fontWeight: 600, marginBottom: 12, color: 'var(--text-dark)' }}>Contact us today for:</p>
            <ul className="grassland-quote-list">
              <li>Latest price per roll / per meter</li>
              <li>Bulk order discounts</li>
              <li>Dealership and distribution opportunities</li>
            </ul>
          </div>
          <div style={{ flex: '1 1 280px', minWidth: 260 }}>
            <ProductInquiryForm productName="neelchakra-grassland-fencing" />
          </div>
        </div>
      </div>
    </main>
  );
}
