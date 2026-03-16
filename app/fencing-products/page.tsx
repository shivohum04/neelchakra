import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wire Fencing Products — Chain Link, Barbed Wire & Double Coated GI Wire | NeelChakra',
  description:
    "Browse NeelChakra's full range: chain link fencing wire, barbed wire double coated, 12 gauge GI wire double coated, and heavy zinc coated wire. ISO 9001:2015 certified manufacturer in Raipur. Bulk supply pan-India.",
  keywords: ['chain link fencing wire', 'barbed wire double coated', '12 gauge GI wire double coated', 'heavy zinc coated wire'],
};

const products = [
  {
    href: '/fencing-products/chain-link-fencing',
    img: '/assests/chain-fencing-wire-1.jpg',
    title: 'Chain Link Fencing Wire',
    desc: 'The industry benchmark for secure, visible perimeters. Double-coated GI chain link fencing wire engineered for agriculture, sports, highways, and industrial sites — 15+ years of corrosion resistance.',
    tags: [{ label: 'Agriculture', cls: 'badge-green' }, { label: 'Industrial', cls: 'badge-blue' }, { label: 'Highways', cls: 'badge-orange' }],
    kicker: 'Boundary Solutions',
  },
  {
    href: '/fencing-products/barbed-wire',
    img: '/assests/barbed-wire-1.jpg',
    title: 'Barbed Wire — Double Coated',
    desc: "High-tensile barbed wire double coated with NeelChakra's proprietary zinc-chemical process. 12 gauge GI wire core, sharp multi-point barbs, and heavy zinc coating for maximum deterrence.",
    tags: [{ label: 'Security', cls: 'badge-red' }, { label: 'Agriculture', cls: 'badge-green' }, { label: 'Railways', cls: 'badge-purple' }],
    kicker: 'Security & Deterrence',
  },
  {
    href: '/fencing-products/double-coated-gi-wire',
    img: '/assests/grassland-fencing-1.jpg',
    title: 'Double Coated GI Wire',
    desc: '10, 12, and 14 gauge heavy zinc coated wire — the foundation of fencing, agriculture, construction, and telecom projects. Available in 30, 40, and 80 GSM coating weights.',
    tags: [{ label: 'Construction', cls: 'badge-blue' }, { label: 'Farming', cls: 'badge-green' }, { label: 'Telecom', cls: 'badge-teal' }],
    kicker: 'Base Wire Products',
  },
  {
    href: '/fencing-products/neelchakra-wire',
    img: '/assests/wire-1.jpg',
    title: 'Neelchakra Wire',
    desc: 'Premium binding and stay wire engineered for high-tension applications, featuring our signature double-coating for extraordinary durability and weather resistance.',
    tags: [{ label: 'Industrial', cls: 'badge-purple' }, { label: 'Construction', cls: 'badge-blue' }],
    kicker: 'Premium Binding Wire',
  },
];

export default function FencingProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'NeelChakra Fencing Products',
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `https://neelchakra.in${p.href}`,
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="products-listing-section">
        <div className="products-listing-inner">

          <div className="products-listing-header">
            <span className="section-label">Our Product Range</span>
            <h1>
              Double-Coated Wire Fencing Products<br />
              <span style={{ color: 'var(--brand-blue)' }}>Built for Every Application</span>
            </h1>
            <p>
              From <strong>chain link fencing wire</strong> to <strong>barbed wire double coated</strong> in
              heavy zinc coated grades — every NeelChakra product combines GI wire excellence with our
              exclusive double-coating process for 15+ years of protected performance.
            </p>
          </div>

          <div className="products-detail-grid">
            {products.map((p) => (
              <Link key={p.href} href={p.href} className="product-detail-card">
                <img
                  src={p.img}
                  alt={`${p.title} — NeelChakra double-coated GI wire manufacturer Raipur`}
                  className="product-detail-card-img"
                />
                <div className="product-detail-card-body">
                  <h2>{p.title}</h2>
                  <div className="use-case-wrap" style={{ marginBottom: 20 }}>
                    {p.tags.map((t) => (
                      <span key={t.label} className={`use-case-badge ${t.cls}`}>{t.label}</span>
                    ))}
                  </div>
                  <span className="product-detail-cta">
                    View Full Specifications
                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Trust bar */}
          <div style={{ marginTop: 64 }}>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: 20, padding: '40px 48px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, textAlign: 'center' }}>
              {[{ val: '15+', label: 'Years Wire Life Guarantee' }, { val: 'ISO', label: '9001:2015 Certified Manufacturer' }, { val: '500+', label: 'Clients Across India' }].map((s) => (
                <div key={s.val}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--brand-blue)', fontFamily: 'var(--font-primary)' }}>{s.val}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-body)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Need Custom Specifications?</h2>
            <p>Our technical team manufactures any gauge and GSM to match your project needs.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I%20want%20a%20bulk%20quote%20for%20NeelChakra%20fencing%20products."
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
