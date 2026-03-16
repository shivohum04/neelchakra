import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industry Specific Fencing Solutions — Agriculture, Solar, Industrial | NeelChakra',
  description: 'NeelChakra provides specialised double-coated GI wire fencing solutions for agriculture, industrial perimeters, solar parks, and coastal areas.',
  keywords: ['agricultural fencing wire', 'industrial fencing wire', 'solar fencing wire', 'coastal area fencing wire'],
};

const industries = [
  {
    href: '/applications/agriculture',
    img: '/assests/agriculture-application.jpg',
    title: 'Agricultural Fencing',
    desc: 'Protect crops and manage livestock with agricultural fencing wire designed to withstand fertilizers, soil moisture, and animal impact.',
    kicker: 'Farm Protection',
  },
  {
    href: '/applications/solar',
    img: '/assests/solar-application.jpg',
    title: 'Solar Parks',
    desc: 'Secure high-value solar infrastructure with heavy-duty solar fencing wire that prevents trespassing and resists harsh UV/environmental exposure.',
    kicker: 'Renewable Energy',
  },
  {
    href: '/applications/industrial',
    img: '/assests/industrial-application.jpg',
    title: 'Industrial & Factory',
    desc: 'High-security industrial fencing wire built to deter intrusions and survive chemical exposure in manufacturing zones.',
    kicker: 'Maximum Security',
  },
  {
    href: '/applications/coastal',
    img: '/assests/coastal-application.jpg',
    title: 'Coastal & High-Humidity',
    desc: 'Specialized coastal area fencing wire featuring heavy 80 GSM zinc and double chemical coating to combat salt spray and marine corrosion.',
    kicker: 'Marine Grade',
  },
];

export default function ApplicationsIndexPage() {
  return (
    <main>
      <section className="products-listing-section">
        <div className="products-listing-inner">

          <div className="products-listing-header">
            <span className="section-label">Industries We Serve</span>
            <h1>
              Project-Specific Wire Solutions<br />
              <span style={{ color: 'var(--brand-blue)' }}>Engineered for Your Environment</span>
            </h1>
            <p>
              Different projects face different environmental challenges. Whether you need <strong>agricultural fencing wire</strong> to resist soil moisture or <strong>coastal area fencing wire</strong> to survive salt spray, NeelChakra&apos;s double-coated GI wire delivers 15+ years of targeted protection.
            </p>
          </div>

          <div className="products-detail-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {industries.map((p) => (
              <Link key={p.href} href={p.href} className="product-detail-card">
                <img src={p.img} alt={p.title} className="product-detail-card-img" />
                <div className="product-detail-card-body">
                  <span className="section-label" style={{ marginBottom: 12, display: 'inline-flex' }}>{p.kicker}</span>
                  <h2>{p.title}</h2>
                  <p>{p.desc}</p>
                  <span className="product-detail-cta">
                    View Solutions
                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Have a Unique Project Requirement?</h2>
            <p>Our technical engineers can recommend the exact gauge and GSM coating for your specific environmental challenges.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I'm%20interested%20in%20NeelChakra%20fencing%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Consult Our Experts →
          </a>
        </div>
      </div>
    </main>
  );
}
