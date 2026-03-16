import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SubpageFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <Image
          src="/assests/Final-Logo-01-copy.png"
          alt="NeelChakra"
          className="footer-logo"
          width={120}
          height={44}
        />
        <p className="footer-text">
          © 2024 NeelChakra. A brand by SK Engineering Solutions, Raipur. All Rights Reserved. Double Chemical Coating Technology for 15+ Years Rust-Free Life.
        </p>
        <ul className="footer-links" style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/fencing-products">Products</Link></li>
          <li><Link href="/applications">Applications</Link></li>
          <li><Link href="/locations">Service Areas</Link></li>
          <li><Link href="/tata-aayush-alternative">Smart Pricing</Link></li>
          <li>
            <a
              href="https://wa.me/917697848221?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20NeelChakra%20wires."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
