import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coastal Area Fencing Wire — Salt Spray Resistant | NeelChakra',
  description: 'Survive the heavy salt spray and humidity of coastal regions. NeelChakra\'s double-coated GI wire is engineered specifically as a marine-grade coastal area fencing wire.',
  keywords: ['coastal area fencing wire', 'marine grade fence wire', 'salt spray resistant wire', 'rust proof wire for beaches'],
};

export default function CoastalPage() {
  return (
    <main>
      <div className="product-page-header" style={{ background: 'linear-gradient(135deg, #0c4a6e, #082f49)' }}>
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker" style={{ color: '#38bdf8' }}>Marine Grade</span>
          <h1><span>Coastal Area Fencing Wire</span></h1>
          <p>
            Salt, constant moisture, and highly corrosive sea breezes destroy normal galvanized wire in months. Our <strong>coastal area fencing wire</strong> combines the heaviest 80 GSM zinc coating with an impenetrable blue chemical seal, surviving 96+ hour salt-spray chamber tests with zero rust formation.
          </p>
        </div>
      </div>

      <section className="features-section">
        <div className="features-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">The Coastal Challenge</span>
            <h2 className="section-title">The Ultimate Test of Galvanisation</h2>
            <p className="section-desc">Marine environments act like a giant corrosion accelerator chamber. If a wire can survive here, it can survive anywhere.</p>
          </div>
          <div className="problem-solution-grid">
            <div className="feature-card problem-card">
              <div className="feature-icon">🌊</div>
              <h3>The Problem: Salt Spray Degradation</h3>
              <p>Sodium chloride vapor instantly strips the thin zinc layer off standard commercial GI wire, triggering red rust within weeks.</p>
            </div>
            <div className="feature-card solution-card">
              <div className="feature-icon">🧪</div>
              <h3>The Solution: 80 GSM Heavy Zinc</h3>
              <p>We deploy our thickest 80 GSM hot-dipped zinc foundation, providing an incredibly dense initial sacrifice layer of 11.2 µm thickness.</p>
            </div>
            <div className="feature-card problem-card">
              <div className="feature-icon">🌧️</div>
              <h3>The Problem: 90%+ Humidity</h3>
              <p>Continuous microscopic condensation ensures the zinc is under constant electrochemical attack and never fully dries.</p>
            </div>
            <div className="feature-card solution-card">
              <div className="feature-icon">🛡️</div>
              <h3>The Solution: The Chemical Seal</h3>
              <p>The secondary blue chemical layer creates a completely waterproof dielectric barrier, stopping the electrochemical rusting process before it starts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="spec-section" style={{ background: 'var(--section-alt)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Recommended Solutions</span>
            <h2 className="text-center">Top Products for Coastal Projects</h2>
            <p className="text-center text-gray-600">The only fencing specification trusted by seaside resorts, ports, and coastal highways.</p>
          </div>
          <div className="products-detail-grid">
            {[
              { title: 'Chain Link Fencing', url: '/fencing-products/chain-link-fencing', desc: 'Secure beachfront properties and coastal highways with 12-gauge 80 GSM mesh that retains its silver-blue finish.', img: '/assests/chain-fencing-wire-1.jpg' },
              { title: 'Barbed Wire', url: '/fencing-products/barbed-wire', desc: 'The complex twist points of barbed wire are notorious rust traps. Our double-coat seals the joints completely.', img: '/assests/barbed-wire-1.jpg' },
              { title: 'Double Coated GI Wire', url: '/fencing-products/double-coated-gi-wire', desc: 'A mandatory raw material for any fabrication, pole-tying, or construction work occurring near the sea.', img: '/assests/grassland-fencing-1.jpg' },
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
            <h2>Building in a High-Humidity Zone?</h2>
            <p>Do not risk using standard wire. Order from our 80 GSM Coastal inventory line.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I'm%20interested%20in%20coastal%20area%20fencing%20wire%20from%20NeelChakra."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Request Coastal Wire Quote →
          </a>
        </div>
      </div>
    </main>
  );
}
