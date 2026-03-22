import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agricultural Fencing Wire — Superior Rust Protection | NeelChakra',
  description: 'NeelChakra\'s double-coated agricultural fencing wire is engineered to resist soil moisture, fertilizers, and monsoon rains for 15+ years. Protect your crops and livestock permanently.',
  keywords: ['agricultural fencing wire', 'farm fence wire', 'rust proof agricultural wire', 'grassland fencing India'],
};

export default function AgriculturePage() {
  return (
    <main>
      <div className="product-page-header" style={{ background: 'linear-gradient(135deg, #1b3a2a, #0a1f14)' }}>
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker" style={{ color: '#4ade80' }}>Farm Protection</span>
          <h1><span>Agricultural Fencing Wire</span></h1>
          <p>
            Protecting your land shouldn't be a recurring expense. Our <strong>agricultural fencing wire</strong> is specifically designed to combat the high-moisture, fertilizer-rich environments of Indian farms. With our signature blue chemical double-coating, your farm boundaries remain secure and rust-free for over 15 years.
          </p>
        </div>
      </div>

      <section className="features-section">
        <div className="features-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">The Agricultural Challenge</span>
            <h2 className="section-title">Why Ordinary GI Wire Fails on Farms</h2>
            <p className="section-desc">Traditional fencing rusts quickly in agricultural settings due to constant exposure to soil moisture, monsoon rains, and corrosive agricultural chemicals (fertilizers & pesticides).</p>
          </div>
          <div className="problem-solution-grid">
            <div className="feature-card problem-card">
              <div className="feature-icon">🦠</div>
              <h3>The Problem: Fertilizer Corrosion</h3>
              <p>Standard zinc coatings are rapidly degraded by the nitrogen and sulfur compounds found in modern farm soils and fertilizers.</p>
            </div>
            <div className="feature-card solution-card">
              <div className="feature-icon">💧</div>
              <h3>The Solution: Blue Chemical Coat</h3>
              <p>NeelChakra&apos;s exclusive secondary chemical dip creates a waterproof barrier over the zinc, making the wire impervious to soil chemistry.</p>
            </div>
            <div className="feature-card problem-card">
              <div className="feature-icon">🐄</div>
              <h3>The Problem: Livestock Pressure</h3>
              <p>Animals leaning on or pushing against boundaries cause cheap, low-tensile wire to sag and eventually snap under stress.</p>
            </div>
            <div className="feature-card solution-card">
              <div className="feature-icon">⚙️</div>
              <h3>The Solution: IS:280 Core</h3>
              <p>We use high-tensile 12 gauge GI wire that maintains its tension, resisting the heavy mechanical wear of cattle and wild boars.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="spec-section" style={{ background: 'var(--section-alt)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Recommended Solutions</span>
            <h2>Top Products for Agricultural Fencing</h2>
            <p>We supply thousands of acres of Indian farmland with these specialized boundaries.</p>
          </div>
          <div className="products-detail-grid">
            {[
              { title: 'Neelchakra Wire', url: '/fencing-products/neelchakra-wire', desc: 'Premium binding and stay wire for trellising, supports, and custom farm fabrication.', img: '/assests/wire-1.jpg' },
              { title: 'Neelchakra Barbed Wire', url: '/fencing-products/barbed-wire', desc: 'The cost-effective standard for large perimeter marking and cattle management. 12 gauge double-coated.', img: '/assests/barbed-wire-1.jpg' },
              { title: 'Neelchakra Chainlink Mesh', url: '/fencing-products/chain-link-fencing', desc: 'Ideal for protecting high-value horticulture and preventing small animal intrusion. 50mm mesh recommended.', img: '/assests/chain-fencing-wire-1.jpg' },
              { title: 'Neelchakra Grassland Fencing', url: '/fencing-products/grassland-fencing', desc: 'Grassland and field fencing for crop boundaries, vineyard rows, and long-span perimeters.', img: '/assests/grassland-fencing-1.jpg' },
            ].map((p) => (
              <Link key={p.url} href={p.url} className="product-detail-card">
                <img src={p.img} alt={p.title} className="product-detail-card-img" />
                <div className="product-detail-card-body">
                  <h2>{p.title}</h2>
                  <p>{p.desc}</p>
                  <span className="product-detail-cta">View Specs <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Need Fencing for Your Farm?</h2>
            <p>Tell us your acreage and we will help you calculate exactly how much material you need.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I'm%20interested%20in%20agricultural%20fencing%20wire%20from%20NeelChakra."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Get a Farm Consultation →
          </a>
        </div>
      </div>
    </main>
  );
}
