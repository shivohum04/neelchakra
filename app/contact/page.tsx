import React from 'react';
import type { Metadata } from 'next';
import ProductInquiryForm from '../components/ProductInquiryForm';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://neelchakra.in';

export const metadata: Metadata = {
  title: 'Contact NeelChakra | SK Engineering Solutions Raipur | Bulk GI Wire Enquiries',
  description:
    'Contact NeelChakra by SK Engineering Solutions — Metal Park, Raipur. Phone, WhatsApp, email, and plant location. Bulk quotes for double-coated GI wire, fencing, and pan-India supply.',
  keywords: [
    'NeelChakra contact',
    'SK Engineering Raipur',
    'GI wire manufacturer contact',
    'fencing wire bulk quote India',
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact NeelChakra | SK Engineering Solutions',
    description: 'Factory-direct enquiries for NeelChakra double-coated GI wire — Raipur, Chhattisgarh.',
    url: `${SITE_URL}/contact`,
  },
};

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.491045953307!2d81.63147967702095!3d21.331117980394893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e7000e8b21c7%3A0xb79d8e107a1c537!2sSK%20ENGINEERING%20SOLUTIONS!5e0!3m2!1sen!2sus!4v1773661813765!5m2!1sen!2sus';

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact NeelChakra',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: 'SK Engineering Solutions',
      brand: { '@type': 'Brand', name: 'NeelChakra' },
      telephone: '+91-76978-48221',
      email: 'info@skenggs.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No 23-C, Metal Park Rawabhata Phase-I',
        addressLocality: 'Raipur',
        addressRegion: 'Chhattisgarh',
        postalCode: '492003',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <main className="product-content-left">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="product-page-header">
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker">SK Engineering Solutions</span>
          <h1>Contact NeelChakra</h1>
          <p style={{ maxWidth: 640, margin: 0 }}>
            For <strong>bulk orders</strong>, technical specifications, freight to your state, or dealership enquiries — reach our
            team directly. We manufacture NeelChakra double-coated GI wire at our Raipur plant and supply pan-India.
          </p>
        </div>
      </div>

      <section className="spec-section" style={{ background: 'var(--white)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Get in touch</span>
            <h2>Direct lines</h2>
            <p>Fastest response on WhatsApp. Email and phone for formal quotes and POs.</p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
              maxWidth: 1000,
              margin: 0,
            }}
          >
            {[
              {
                title: 'WhatsApp',
                body: '+91 76978 48221',
                hint: 'Preferred for quotes & specs',
                href: 'https://wa.me/917697848221?text=Hi%2C%20I%27d%20like%20to%20contact%20NeelChakra.',
                cta: 'Message on WhatsApp',
                primary: true,
              },
              {
                title: 'Phone',
                body: '+91 76978 48221',
                hint: 'Mon–Sat · business hours',
                href: 'tel:+917697848221',
                cta: 'Call now',
                primary: false,
              },
              {
                title: 'Email',
                body: 'info@skenggs.com',
                hint: 'Bulk & B2B correspondence',
                href: 'mailto:info@skenggs.com',
                cta: 'Send email',
                primary: false,
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'var(--off-white)',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: 28,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.1rem', marginBottom: 8, color: 'var(--text-dark)' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--brand-blue)', marginBottom: 6 }}>{card.body}</p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', marginBottom: 16 }}>{card.hint}</p>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={card.primary ? 'btn-cta' : 'product-detail-cta'}
                  style={
                    card.primary
                      ? {
                          display: 'inline-flex',
                          background: '#25D366',
                          color: 'white',
                          padding: '12px 22px',
                          borderRadius: 12,
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                        }
                      : { fontSize: '0.95rem' }
                  }
                >
                  {card.cta}
                </a>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 40,
              maxWidth: 720,
              marginLeft: 0,
              marginRight: 0,
              padding: 28,
              background: 'var(--off-white)',
              borderRadius: 20,
              border: '1px solid var(--border)',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.15rem', marginBottom: 12 }}>Plant address</h3>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
              <strong>SK Engineering Solutions</strong>
              <br />
              Plot No 23-C, Metal Park Rawabhata Phase-I
              <br />
              Raipur, Chhattisgarh 492003
              <br />
              India
            </p>
          </div>
        </div>
      </section>

      <section className="spec-section" style={{ background: 'var(--section-alt)' }}>
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <h2>Plant location</h2>
            <p>Plan a visit to see NeelChakra manufacturing — map and directions below.</p>
          </div>
          <div
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              maxWidth: 960,
              margin: 0,
            }}
          >
            <iframe
              title="SK Engineering Solutions Plant Location"
              src={MAP_EMBED_SRC}
              style={{ border: 0, width: '100%', height: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <div className="product-cta-band">
        <div className="product-cta-band-inner">
          <div>
            <h2>Send a bulk or project enquiry</h2>
            <p>We&apos;ll respond on WhatsApp with pricing bands, gauges, and dispatch options.</p>
          </div>
          <ProductInquiryForm productName="general-contact" />
        </div>
      </div>
    </main>
  );
}
