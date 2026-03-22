import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ProductInquiryForm from '../../components/ProductInquiryForm';

// Define the locations we want to statically generate
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

const STATE_AREAS: Record<string, string[]> = {
  'uttar-pradesh': ['Lucknow', 'Kanpur', 'Varanasi', 'Prayagraj', 'Ghaziabad', 'Noida', 'Meerut', 'Agra', 'Bareilly', 'Gorakhpur'],
  punjab: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur', 'Pathankot', 'Moga'],
  maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Aurangabad', 'Kolhapur', 'Satara', 'Solapur', 'Jalgaon'],
  rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Alwar', 'Bikaner', 'Bhilwara', 'Sikar', 'Jaisalmer'],
  'madhya-pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Satna', 'Rewa', 'Ratlam', 'Dewas'],
  gujarat: ['Gandhinagar', 'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Anand', 'Vapi'],
  goa: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Canacona', 'Quepem', 'Sanguem'],
  karnataka: ['Bengaluru', 'Mysuru', 'Hubballi', 'Dharwad', 'Mangaluru', 'Belagavi', 'Ballari', 'Tumakuru', 'Shivamogga', 'Kalaburagi'],
  kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Alappuzha', 'Kannur', 'Kottayam', 'Malappuram'],
  'tamil-nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Erode', 'Tiruppur', 'Vellore', 'Thoothukudi'],
  'andhra-pradesh': ['Amaravati', 'Vijayawada', 'Visakhapatnam', 'Guntur', 'Nellore', 'Kurnool', 'Tirupati', 'Rajahmundry', 'Kakinada', 'Anantapur'],
  odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Balasore', 'Baripada', 'Jharsuguda', 'Angul', 'Puri'],
  'west-bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Kharagpur', 'Haldia', 'Berhampore', 'Malda'],
  chhattisgarh: ['Raipur', 'Bilaspur', 'Durg', 'Bhilai', 'Korba', 'Rajnandgaon', 'Jagdalpur', 'Raigarh', 'Ambikapur', 'Dhamtari'],
};

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const loc = LOCATIONS.find((l) => l.slug === params.location) || { name: params.location.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') };
  
  return {
    title: `Premium Fencing Wire Supplier in ${loc.name} | NeelChakra`,
    description: `NeelChakra is the leading fencing wire manufacturer and bulk fencing wire supplier serving ${loc.name}. We supply Neelchakra wire, Neelchakra barbed wire, Neelchakra chainlink mesh, and Neelchakra grassland fencing.`,
    keywords: [
      `fencing wire manufacturer ${loc.name}`,
      `fencing wire supplier ${loc.name}`,
      `bulk fencing wire supplier`,
      `double coated GI wire ${loc.name}`,
      `Neelchakra chainlink mesh ${loc.name}`,
    ],
  };
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const loc = LOCATIONS.find((l) => l.slug === params.location) || { 
    slug: params.location,
    name: params.location.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
    isHome: false 
  };

  return (
    <main>
      {/* ── DARK HEADER ── */}
      <div className="product-page-header" style={{ background: 'linear-gradient(135deg, #1e3a8a, #0f172a)' }}>
        <div className="product-page-header-inner">
          <div style={{ height: 28 }} />
          <span className="product-page-kicker" style={{ color: '#93c5fd' }}>Regional Supply Hub</span>
          <h1>Premium Fencing Wire Supplier in <span>{loc.name}</span></h1>
          <p>
            NeelChakra is a premier <strong>fencing wire supplier in {loc.name}</strong>, providing agriculture, industrial, and infrastructure projects with our signature 15+ year double-coated GI wire. As a massive scale <strong>bulk fencing wire supplier</strong> operating out of our Raipur hub, we ensure rapid logistics and factory-direct pricing to your site.
          </p>
          <div className="use-case-wrap" style={{ marginBottom: 48 }}>
            <span className="use-case-badge badge-blue">🚚 Fast Logistics</span>
            <span className="use-case-badge badge-green">🏷️ Factory Pricing</span>
            <span className="use-case-badge badge-orange">🏗️ Bulk Volumes</span>
          </div>
        </div>
      </div>

      {/* ── SPLIT VIEW (Inquiry + Logistics Block) ── */}
      <div style={{ background: 'var(--white)', padding: '0 40px' }}>
        <div className="location-split">
          <div className="location-split-left">
            <span className="section-label">Logistics &amp; Supply Chain</span>
            <h2 style={{ fontSize: '2rem', marginBottom: 24, fontFamily: 'var(--font-primary)' }}>Direct Supply from Raipur Manufacturing Hub</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: 24 }}>
              By eliminating middlemen, our supply chain directly connects our state-of-the-art wire-drawing and double-coating plant in Raipur to your project site in {loc.name}. 
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                `Dedicated freight lines from our Raipur plant to ${loc.name}.`,
                'Order tracking from dispatch to site delivery.',
                'Custom bundle sizing (2kg to 50kg) based on your handling capacity.',
                'Salt-spray test certifications included with every transport manifest.'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                  <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, stroke: 'var(--brand-blue)', fill: 'none', strokeWidth: 2, flexShrink: 0 }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span style={{ fontSize: '1.05rem', color: 'var(--text-dark)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="location-split-right">
            <h2>Request Supply to {loc.name}</h2>
            <p className="panel-sub">
              Minimum Order Quantity: 1 Tonne<br />
              Provide your delivery pin code for exact freight estimation.
            </p>
            <ProductInquiryForm productName={`bulk-supply-${loc.slug}`} />
          </div>
        </div>
      </div>

      {/* ── SEO TEXT BLOCK (Localized Content) ── */}
      <section className="features-section" style={{ background: 'var(--white)' }}>
        <div className="features-section-inner" style={{ background: 'var(--off-white)', padding: 60, borderRadius: 24, border: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <span className="section-label">Why Choose NeelChakra?</span>
            <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '2.5rem', marginBottom: 24 }}>The Trusted Fencing Wire Manufacturer {loc.isHome ? `in ${loc.name}` : `for ${loc.name}`}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 20 }}>
              Finding a reliable <strong>fencing wire supplier in {loc.name}</strong> who can consistently deliver high-tensile strength and verified zinc coatings is a challenge for many procurement managers. NeelChakra bridges this gap — with factory-direct double-coated GI wire from our Raipur plant, built to the same standards we supply across India.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 20 }}>
              Whether you are securing thousands of acres of agricultural land, fencing a new solar park, or distributing to local hardware retail networks, our position as a primary <strong>fencing wire manufacturer {loc.isHome ? `in ${loc.name}` : 'in Central India'}</strong> ensures you receive product directly from the source. This means strict ISO 9001:2015 quality control, immediate scalability for mega-projects, and zero middleman markups.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
              Our signature double-coating process pairs heavy hot-dipped zinc with a secondary chemical barrier, fundamentally solving the rapid rust issues prevalent with standard galvanized wires. As your dedicated <strong>bulk fencing wire supplier</strong>, we guarantee 15+ years of protected wire life, dramatically lowering the lifetime cost of your perimeter infrastructure in {loc.name}.
            </p>
            {STATE_AREAS[loc.slug] && (
              <div style={{ marginTop: 32 }}>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.2rem', marginBottom: 12 }}>
                  Key Supply Hubs in {loc.name}
                </h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', marginBottom: 12 }}>
                  We maintain active logistics routes to the following major cities and industrial belts in {loc.name}.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {STATE_AREAS[loc.slug].map((city) => (
                    <span
                      key={city}
                      className="spec-badge"
                      style={{ background: 'var(--white)', borderColor: 'var(--border)' }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED PRODUCTS ── */}
      <section className="spec-section">
        <div className="spec-section-inner">
          <div className="spec-section-header">
            <span className="section-label">Products Supplied to {loc.name}</span>
            <h2 className="text-center">Double-Coated Fencing Solutions</h2>
            <p className="text-center text-gray-600">Available for immediate bulk dispatch.</p>
          </div>
          <div className="products-detail-grid">
            {[
              { title: 'Neelchakra Wire', url: '/fencing-products/neelchakra-wire', desc: 'Premium binding and stay wire in double-coated grades for projects across the region.', img: '/assests/wire-1.jpg' },
              { title: 'Neelchakra Barbed Wire', url: '/fencing-products/barbed-wire', desc: 'High-tensile, 4-point barbed wire designed for maximum agricultural and industrial security.', img: '/assests/barbed-wire-1.jpg' },
              { title: 'Neelchakra Chainlink Mesh', url: '/fencing-products/chain-link-fencing', desc: 'Custom heights and mesh sizes woven from double-coated GI wire.', img: '/assests/chain-fencing-wire-1.jpg' },
              { title: 'Neelchakra Grassland Fencing', url: '/fencing-products/grassland-fencing', desc: '10 to 14 gauge grassland fencing in 30, 40, and 80 GSM heavy zinc coatings.', img: '/assests/grassland-fencing-1.jpg' },
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
            <h2>Ready to Secure Your Borders?</h2>
            <p>Our logistics team is ready to coordinate your {loc.name} delivery schedule.</p>
          </div>
          <a
            href={`https://wa.me/917697848221?text=Hi%2C%20I%20need%20a%20transport%20quote%20for%20NeelChakra%20wire%20to%20${encodeURIComponent(loc.name)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Request Transport Quote →
          </a>
        </div>
      </div>
    </main>
  );
}
