import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Areas & Supply Regions | NeelChakra Wire Manufacturer',
  description: 'NeelChakra supplies heavy-duty fencing wire across India representing the best in double-coated GI wire technology from our Raipur Hub.',
  keywords: ['fencing wire supplier India', 'fencing wire manufacturer', 'bulk fencing wire supplier'],
};

const LOCATIONS = [
  { slug: 'chhattisgarh', name: 'Chhattisgarh', type: 'State', isHome: true },
  { slug: 'uttar-pradesh', name: 'Uttar Pradesh', type: 'State', isHome: false },
  { slug: 'punjab', name: 'Punjab', type: 'State', isHome: false },
  { slug: 'maharashtra', name: 'Maharashtra', type: 'State', isHome: false },
  { slug: 'rajasthan', name: 'Rajasthan', type: 'State', isHome: false },
  { slug: 'madhya-pradesh', name: 'Madhya Pradesh', type: 'State', isHome: false },
  { slug: 'gujarat', name: 'Gujarat', type: 'State', isHome: false },
  { slug: 'goa', name: 'Goa', type: 'State', isHome: false },
  { slug: 'karnataka', name: 'Karnataka', type: 'State', isHome: false },
  { slug: 'kerala', name: 'Kerala', type: 'State', isHome: false },
  { slug: 'tamil-nadu', name: 'Tamil Nadu', type: 'State', isHome: false },
  { slug: 'andhra-pradesh', name: 'Andhra Pradesh', type: 'State', isHome: false },
  { slug: 'odisha', name: 'Odisha', type: 'State', isHome: false },
  { slug: 'west-bengal', name: 'West Bengal', type: 'State', isHome: false },
];

export default function LocationsIndexPage() {
  return (
    <main>
      <section className="products-listing-section">
        <div className="products-listing-inner">

          <div className="products-listing-header">
            <span className="section-label">Logistics Map</span>
            <h1>
              Bulk Fencing Wire Supplier<br />
              <span style={{ color: 'var(--brand-blue)' }}>Across Central & Peninsular India</span>
            </h1>
            <p>
              Operating from our massive manufacturing hub in Raipur, NeelChakra acts as the primary <strong>fencing wire manufacturer</strong> for projects scaling across state borders. As a leading <strong>double coated GI wire exporter India</strong>, we provide export-quality materials directly to domestic sites without middleman delays.
            </p>
          </div>

          <div className="products-detail-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {LOCATIONS.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="product-detail-card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <span className="section-label" style={{ marginBottom: 16, display: 'inline-flex' }}>{loc.type}</span>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: 8, color: 'var(--brand-blue)' }}>{loc.name}</h2>
                  <p style={{ color: 'var(--text-body)' }}>Direct bulk supply lines active. Heavy logistics capacity.</p>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                  <span className="product-detail-cta">
                    View Local Supply Info
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
            <h2>Not on the map?</h2>
            <p>We supply to all 28 states of India and export internationally. Provide your delivery region for a quote.</p>
          </div>
          <a
            href="https://wa.me/917697848221?text=Hi%2C%20I%20want%20to%20check%20freight%20costs%20for%20NeelChakra%20wire%20to%20my%20location."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Check Freight Costs →
          </a>
        </div>
      </div>
    </main>
  );
}
