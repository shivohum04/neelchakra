import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Heavy-Duty Industrial Fencing Wire | NeelChakra Raipur',
  description: 'NeelChakra\'s industrial fencing wire delivers maximum intrusion deterrence. High-tensile, double-coated wire engineered for factories, warehouses, and critical infrastructure.',
  keywords: ['industrial fencing wire', 'factory compound wire', 'high security fencing India', 'heavy zinc coated security wire'],
};

export default function IndustrialPage() {
  return (
    <main>
      <div className="product-page-header" style={{ background: 'linear-gradient(135deg, #172554, #0f172a)' }}>
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker" style={{ color: '#60a5fa' }}>Maximum Security</span>
          <h1><span>Industrial Fencing Wire</span></h1>
          <p>
            Securing large-scale factories, warehouses, and critical infrastructure requires materials that don't compromise. Our <strong>industrial fencing wire</strong> provides unmatched deterrence against intrusion, combined with an 80 GSM heavy zinc double-coating that withstands corrosive industrial atmospheres.
          </p>
        </div>
      </div>

      <section className="features-section">
        <div className="features-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">The Industrial Challenge</span>
            <h2 className="section-title">Security Meets Corrosive Environments</h2>
            <p className="section-desc">Factory perimeters face a twin threat: attempted breaches and airborne chemical pollutants from manufacturing processes that destroy standard galvanisation.</p>
          </div>
          <div className="problem-solution-grid">
            <div className="feature-card problem-card">
              <div className="feature-icon">🚨</div>
              <h3>The Problem: Perimeter Breaches</h3>
              <p>Standard gauge commercial fences are easily cut or stretched by intruders seeking access to valuable equipment or inventory.</p>
            </div>
            <div className="feature-card solution-card">
              <div className="feature-icon">🛡️</div>
              <h3>The Solution: High-Tensile 10 Gauge</h3>
              <p>We supply ultra-thick 10-gauge and 12-gauge GI wire core that resists cutters and holds extreme tension without sagging over long spans.</p>
            </div>
            <div className="feature-card problem-card">
              <div className="feature-icon">🏭</div>
              <h3>The Problem: Chemical Exposure</h3>
              <p>Airborne sulfur, acidic fumes, and particulate matter from industrial operations rapidly corrode ordinary zinc coatings, leading to rust.</p>
            </div>
            <div className="feature-card solution-card">
              <div className="feature-icon">🧪</div>
              <h3>The Solution: Chemical Barrier Coat</h3>
              <p>Our proprietary double-coating technology applies a specialized chemical layer over heavy zinc (80 GSM) to repel industrial pollutants.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="spec-section" style={{ background: 'var(--section-alt)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Recommended Solutions</span>
            <h2 className="text-center">Top Products for Factory Security</h2>
            <p className="text-center text-gray-600">Built to IS:280 standards for uncompromising safety.</p>
          </div>
          <div className="products-detail-grid">
            {[
              { title: 'Neelchakra Wire', url: '/fencing-products/neelchakra-wire', desc: 'Stay wires, structural tensioning, and heavy-duty binding inside factory limits.', img: '/assests/wire-1.jpg' },
              { title: 'Neelchakra Barbed Wire', url: '/fencing-products/barbed-wire', desc: 'The ultimate deterrent. Our 4-point barbs are twisted with heavy 10-gauge wire for maximum security topping.', img: '/assests/barbed-wire-1.jpg' },
              { title: 'Neelchakra Chainlink Mesh', url: '/fencing-products/chain-link-fencing', desc: 'High-visibility 75mm anti-climb mesh available in heights up to 3.6 meters for industrial compounds.', img: '/assests/chain-fencing-wire-1.jpg' },
              { title: 'Neelchakra Grassland Fencing', url: '/fencing-products/grassland-fencing', desc: 'Long-span grassland fencing for yards, loading bays, and perimeter reinforcement.', img: '/assests/grassland-fencing-1.jpg' },
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
            <h2>Securing a Factory Compound?</h2>
            <p>Our project managers can advise on the right high-security specifications (gauge &amp; mesh size) tailored to your site.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I%20need%20industrial%20fencing%20wire%20from%20NeelChakra."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Request Industrial Quote →
          </a>
        </div>
      </div>
    </main>
  );
}
