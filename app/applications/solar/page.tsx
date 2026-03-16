import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Heavy-Duty Solar Fencing Wire | NeelChakra Solar Solutions',
  description: 'Secure high-value solar parks with NeelChakra\'s heavy-duty solar fencing wire. UV-resistant, double-coated GI wire that eliminates rust shadows on panels.',
  keywords: ['solar fencing wire', 'solar park boundary', 'UV resistant GI wire', 'heavy duty solar fence'],
};

export default function SolarPage() {
  return (
    <main>
      <div className="product-page-header" style={{ background: 'linear-gradient(135deg, #78350f, #451a03)' }}>
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker" style={{ color: '#fbbf24' }}>Renewable Energy</span>
          <h1><span>Heavy-Duty Solar Fencing Wire</span></h1>
          <p>
            Large-scale solar installations require perimeter security that lasts exactly as long as the 25-year panel lifecycle. Our <strong>solar fencing wire</strong> is heavily zinc coated and chemically sealed to prevent rust dust from blowing onto your high-value solar arrays, maximizing energy yield.
          </p>
        </div>
      </div>

      <section className="features-section">
        <div className="features-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">The Solar Challenge</span>
            <h2 className="section-title">Protecting Yield and Infrastructure</h2>
            <p className="section-desc">Solar boundaries are massive, remote, and fully exposed to harsh sunlight and weather 365 days a year without natural windbreaks.</p>
          </div>
          <div className="problem-solution-grid">
            <div className="feature-card problem-card">
              <div className="feature-icon">☀️</div>
              <h3>The Problem: UV Degradation</h3>
              <p>Plastic or PVC-coated fencing rapidly degrades, cracks, and flakes off under intense, unshaded solar radiation.</p>
            </div>
            <div className="feature-card solution-card">
              <div className="feature-icon">🧬</div>
              <h3>The Solution: Inorganic Blue Coating</h3>
              <p>Our proprietary chemical coating is 100% UV stable. It will not crack or peel under direct sunlight, ensuring permanent zinc protection.</p>
            </div>
            <div className="feature-card problem-card">
              <div className="feature-icon">💨</div>
              <h3>The Problem: Rust Dust on Panels</h3>
              <p>When cheap border wires rust, wind blows micro-particles of iron oxide onto the solar panels, creating shadows and reducing megawatt yields.</p>
            </div>
            <div className="feature-card solution-card">
              <div className="feature-icon">✨</div>
              <h3>The Solution: Zero-Rust Guarantee</h3>
              <p>NeelChakra&apos;s 15+ year rust-free lifespan guarantees your wire maintains its integrity, keeping your glass arrays perfectly clean.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="spec-section" style={{ background: 'var(--section-alt)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Recommended Solutions</span>
            <h2 className="text-center">Top Products for Solar Parks</h2>
            <p className="text-center text-gray-600">Cost-effective solutions for kilometer-scale boundaries.</p>
          </div>
          <div className="products-detail-grid">
            {[
              { title: 'Chain Link Fencing', url: '/fencing-products/chain-link-fencing', desc: 'Recommended 50mm mesh to prevent small animal intrusion that could chew critical inverter cabling.', img: '/assests/chain-fencing-wire-1.jpg' },
              { title: 'Barbed Wire', url: '/fencing-products/barbed-wire', desc: 'Essential top-layer deterrence against theft of valuable copper wiring and solar hardware.', img: '/assests/barbed-wire-1.jpg' },
              { title: 'Double Coated GI Wire', url: '/fencing-products/double-coated-gi-wire', desc: 'Used for grounding frameworks, tensioning lines, and general heavy tie-down within the park.', img: '/assests/grassland-fencing-1.jpg' },
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
            <h2>Tendering for a Mega-Watt Project?</h2>
            <p>Our team handles large-volume supply schedules aligned with your phased civil works program.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I'm%20planning%20a%20solar%20project%20and%20need%20NeelChakra%20fencing%20wire."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Discuss Your Solar Project →
          </a>
        </div>
      </div>
    </main>
  );
}
