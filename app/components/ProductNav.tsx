'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductNav() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const HIDE_DELAY = 3000;
    const onScroll = () => {
      const y = window.scrollY;
      setNavScrolled(y > 60);
      setHeaderVisible(true);
      if (y < 60) return;
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => setHeaderVisible(false), HIDE_DELAY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const onEnter = useCallback(() => {
    setHeaderVisible(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  }, []);

  const onLeave = useCallback(() => {
    hideTimeoutRef.current = setTimeout(() => setHeaderVisible(false), 1500);
  }, []);

  return (
    <nav
      className={`${navScrolled ? 'scrolled' : ''} ${headerVisible || menuOpen ? 'nav-visible' : 'nav-hidden'}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <Link href="/" className="nav-logo-wrap">
        <Image
          src="/assests/main-logo.png"
          alt="NeelChakra — Premier Wire Manufacturer"
          className="nav-logo"
          width={220}
          height={80}
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link href="/fencing-products" onClick={() => setMenuOpen(false)}>Products</Link></li>
        <li><Link href="/applications" onClick={() => setMenuOpen(false)}>Applications</Link></li>
        <li><Link href="/locations" onClick={() => setMenuOpen(false)}>Service Areas</Link></li>
        <li><Link href="/tata-aayush-alternative" onClick={() => setMenuOpen(false)}>Smart Pricing</Link></li>
      </ul>
      <button
        type="button"
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
