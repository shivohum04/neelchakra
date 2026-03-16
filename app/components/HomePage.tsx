"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const TRANSLATIONS: Record<string, { en: string; hi: string }> = {
  langModalTitle: { en: "Choose Your Language", hi: "भाषा चुनें" },
  langModalDesc: { en: "Select your preferred language to continue", hi: "जारी रखने के लिए अपनी भाषा चुनें" },
  isoCert: { en: "ISO 9001:2015 Certified", hi: "ISO 9001:2015 प्रमाणित" },
  heroTitle: {
    en: "The Future of Durable Wiring: <span>15+ Years</span> of Protected Life.",
    hi: "टिकाऊ वायरिंग का भविष्य: <span>15+ वर्षों</span> की सुरक्षित आयु।",
  },
  heroSub: {
    en: "NeelChakra — Saath De Sada.<br>Double-coated GI wires engineered for 15+ years of protected life.<br>Trusted by agriculture industry and infrastructure projects across India.",
    hi: "नीलचक्र — साथ दे सदा।<br>डबल-कोटेड GI वायर, 15+ वर्षों की सुरक्षित आयु के लिए तैयार।<br>कृषि उद्योग और बुनियादी ढांचे परियोजनाओं में विश्वसनीय।",
  },
  yearsWireLife: { en: "Years Wire Life", hi: "वर्ष वायर आयु" },
  chemicalCoating: { en: "Chemical Coating", hi: "केमिकल कोटिंग" },
  competitivePricing: { en: "Over 500 Clients", hi: "500+ ग्राहक" },
  technology: { en: "Technology", hi: "तकनीक" },
  process: { en: "Process", hi: "प्रक्रिया" },
  products: { en: "Products", hi: "उत्पाद" },
  applications: { en: "Applications", hi: "अनुप्रयोग" },
  locations: { en: "Service Areas", hi: "सेवा क्षेत्र" },
  certifications: { en: "Certifications", hi: "प्रमाणपत्र" },
  contact: { en: "Contact", hi: "संपर्क" },
  techLabel: { en: "The Technology", hi: "तकनीक" },
  techTitle: {
    en: "Double-Layer Protection: The NeelChakra Difference",
    hi: "डबल-लेयर सुरक्षा: नीलचक्र का अंतर",
  },
  techDesc: {
    en: "NeelChakra's exclusive double-coating process combines premium GI wire with a chemical barrier — delivering corrosion resistance that outlasts ordinary wire by years.",
    hi: "नीलचक्र की विशेष डबल-कोटिंग प्रक्रिया प्रीमियम GI वायर को एक मजबूत रासायनिक अवरोध के साथ जोड़ती है — जो सामान्य वायर की तुलना में वर्षों अधिक जंग प्रतिरोध प्रदान करती है।",
  },
  bp1Title: { en: "15+ Years of Wire Life", hi: "15+ वर्षों की वायर आयु" },
  bp1Desc: {
    en: "Our double-coat technology ensures each wire resists degradation for 15+ years — offering unmatched long-term value.",
    hi: "हमारी डबल-कोट तकनीक प्रत्येक वायर को 15+ वर्षों तक क्षरण से बचाती है — जो बेजोड़ दीर्घकालिक मूल्य प्रदान करती है।",
  },
  bp2Title: { en: "Superior Corrosion Defence", hi: "उत्कृष्ट जंग-रोधी सुरक्षा" },
  bp2Desc: {
    en: "The chemical barrier repels moisture and harsh elements — making NeelChakra ideal for all environments.",
    hi: "रासायनिक अवरोध नमी और कठोर तत्वों को रोकता है — नीलचक्र को सभी वातावरणों के लिए आदर्श बनाता है।",
  },
  bp3Title: { en: "Lower Lifetime Cost", hi: "कम आजीवन लागत" },
  bp3Desc: {
    en: "Replace wires less frequently. Our 15-year lifespan means 2–3x fewer replacements — bringing significant cost savings.",
    hi: "वायर कम बार बदलें। हमारी 15 वर्ष की आयु का अर्थ है 2-3 गुना कम बदलाव — जिससे भारी लागत बचत होती है।",
  },
  processLabel: { en: "Our Process", hi: "हमारी प्रक्रिया" },
  processTitle: {
    en: "From Wire to Weather-Proof: Our 4-Stage Process",
    hi: "वायर से मौसम-प्रूफ तक: हमारी 4-चरणीय प्रक्रिया",
  },
  processDesc: {
    en: "Every NeelChakra wire undergoes a rigorous 4-stage manufacturing process combining premium GI wire, specialized chemistry, and batch-level quality testing.",
    hi: "प्रत्येक नीलचक्र वायर एक कठोर 4-चरणीय निर्माण प्रक्रिया से गुजरती है जो प्रीमियम GI वायर, विशेष रसायन और बैच-स्तरीय गुणवत्ता परीक्षण को जोड़ती है।",
  },
  step1Title: { en: "GI Foundation", hi: "GI आधार" },
  step1Desc: {
    en: "Premium grade GI wire selection for first layer of corrosion defence — a solid, proven base for every NeelChakra product.",
    hi: "प्रथम जंग-रोधी परत के लिए प्रीमियम ग्रेड GI वायर का चयन।",
  },
  step2Title: { en: "Chemical Dip", hi: "केमिकल डिप" },
  step2Desc: {
    en: "GI wire passes through a chemical dip for a second layer of protection from corrosion — relentless against rust.",
    hi: "GI वायर जंग से दूसरी सुरक्षा परत के लिए केमिकल डिप से गुजरती है।",
  },
  step3Title: { en: "Hot-Plate Adhesion", hi: "हॉट-प्लेट आसंजन" },
  step3Desc: {
    en: "Chemical dip wire passes through a hot plate for proper adhesion of the chemical coating — ensuring deep, lasting bond at every point of the wire.",
    hi: "केमिकल-डिप वायर उचित आसंजन के लिए हॉट प्लेट से गुजरती है — वायर के प्रत्येक बिंदु पर गहरा, स्थायी बंधन।",
  },
  step4Title: { en: "Salt-Spray Quality Check", hi: "साल्ट-स्प्रे गुणवत्ता जांच" },
  step4Desc: {
    en: "Every NeelChakra wire batch undergoes salt-spray testing for quality check — zero compromise, every batch, every time.",
    hi: "प्रत्येक नीलचक्र वायर बैच गुणवत्ता जांच के लिए साल्ट-स्प्रे परीक्षण से गुजरता है।",
  },
  productsLabel: { en: "Our Products", hi: "हमारे उत्पाद" },
  productsTitle: { en: "Built for Every Application", hi: "हर अनुप्रयोग के लिए निर्मित" },
  productsDesc: {
    en: "From agricultural fencing to industrial security, our range of chemical-coated wire products delivers reliable performance in any environment.",
    hi: "कृषि बाड़ लगाने से लेकर औद्योगिक सुरक्षा तक, हमारे केमिकल-कोटेड वायर उत्पादों की श्रृंखला किसी भी वातावरण में विश्वसनीय प्रदर्शन प्रदान करती है।",
  },
  chainLinkTitle: { en: "Neelchakra Chain Link Fencing", hi: "नीलचक्र चेन लिंक फेंसिंग" },
  chainLinkSub: { en: "Double-coated, weather-resistant GI wire", hi: "डबल-कोटेड, मौसम प्रतिरोधी" },
  barbedTitle: { en: "Neelchakra Barbed Wire", hi: "नीलचक्र कांटेदार तार" },
  barbedSub: { en: "High-tensile, double-coated protection", hi: "उच्च-तन्यता, डबल-कोटेड" },
  grasslandTitle: { en: "Neelchakra Grassland Fencing", hi: "नीलचक्र ग्रसलैंड फेंसिंग" },
  grasslandSub: { en: "Farm-grade, long-lasting GI fencing", hi: "फार्म-ग्रेड, लंबे समय तक टिकाऊ" },
  neelchakraWireTitle: { en: "Neelchakra Wire", hi: "नीलचक्र वायर" },
  neelchakraWireSub: { en: "Premium binding and stay wire", hi: "प्रीमियम बाइंडिंग और स्टे वायर" },
  trustLabel: { en: "Trust Signals", hi: "विश्वास संकेत" },
  trustTitle: { en: "Quality You Can Count On", hi: "गुणवत्ता जिस पर आप भरोसा कर सकते हैं" },
  trustDesc: {
    en: "Every NeelChakra wire is certified, tested, and proven. Quality isn't a promise — it's a standard we uphold with every batch.",
    hi: "प्रत्येक नीलचक्र वायर प्रमाणित, परीक्षित और साबित है। गुणवत्ता एक वादा नहीं — यह वह मानक है जिसे हम प्रत्येक बैच में बनाए रखते हैं।",
  },
  saltSprayTitle: { en: "Salt Spray Tested", hi: "साल्ट स्प्रे परीक्षित" },
  saltSprayDesc: {
    en: "Every batch passes 72–96+ hours salt spray testing for corrosion resistance.",
    hi: "प्रत्येक बैच जंग प्रतिरोध के लिए 72-96+ घंटे का साल्ट स्प्रे परीक्षण पास करता है।",
  },
  isoDesc: {
    en: "Quality Management System certified — consistent, reliable manufacturing at every stage.",
    hi: "गुणवत्ता प्रबंधन प्रणाली प्रमाणित — हर चरण में सुसंगत, विश्वसनीय निर्माण।",
  },
  getInTouch: { en: "Get in Touch", hi: "संपर्क करें" },
  contactTitle: { en: "Ready for Bulk Orders? Let's Talk.", hi: "बल्क ऑर्डर के लिए तैयार? बात करते हैं।" },
  contactDesc: {
    en: "Whether you need 10 tonnes or 100 tonnes, our team will provide custom pricing, delivery timelines, and technical specifications tailored to your project.",
    hi: "चाहे आपको 10 टन चाहिए हो या 100 टन, हमारी टीम आपकी परियोजना के अनुसार कस्टम मूल्य, डिलीवरी समयसीमा और तकनीकी विनिर्देश प्रदान करेगी।",
  },
  mobile: { en: "Mobile: +91 76978 48221", hi: "मोबाइल: +91 76978 48221" },
  footerCopy: {
    en: "© 2026 NeelChakra. All rights reserved. Saath De Sada — Strength through Innovation.",
    hi: "© 2026 नीलचक्र। सर्वाधिकार सुरक्षित। साथ दे सदा — नवाचार से शक्ति।",
  },
  home: { en: "Home", hi: "होम" },
  address: {
    en: "SK Engineering Solutions, Plot No 23-C, Metal Park Rawabhata Phase-I, Raipur Chhattisgarh 492003",
    hi: "एसके इंजीनियरिंग सोलूशन्स, प्लॉट नं. 23-C, मेटल पार्क रावाभाता फेज-I, रायपुर छत्तीसगढ़ 492003",
  },
  clickHere: { en: "Click Here", hi: "यहां क्लिक करें" },
};

function t(key: keyof typeof TRANSLATIONS, lang: "en" | "hi"): string {
  const rec = TRANSLATIONS[key];
  if (!rec) return key;
  return (rec as Record<string, string>)[lang] ?? (rec as Record<string, string>).en;
}

export default function HomePage() {
  const [lang, setLangState] = useState<"en" | "hi">("en");
  const [langModalHidden, setLangModalHidden] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const hideHeaderTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setLang = useCallback((l: "en" | "hi") => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("nc_lang", l);
    setLangModalHidden(true);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "en" ? "hi" : "en"));
  }, []);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("nc_lang") : null;
    if (saved === "hi" || saved === "en") {
      setLangState(saved);
      setLangModalHidden(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  useEffect(() => {
    const HIDE_DELAY_MS = 2000;
    const onScroll = () => {
      const y = window.scrollY;
      setNavScrolled(y > 60);
      setHeaderVisible(true);
      if (y < 60) return;
      if (hideHeaderTimeoutRef.current) {
        clearTimeout(hideHeaderTimeoutRef.current);
        hideHeaderTimeoutRef.current = null;
      }
      hideHeaderTimeoutRef.current = setTimeout(() => {
        hideHeaderTimeoutRef.current = null;
        setHeaderVisible(false);
      }, HIDE_DELAY_MS);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideHeaderTimeoutRef.current) clearTimeout(hideHeaderTimeoutRef.current);
    };
  }, []);

  const handleNavMouseEnter = useCallback(() => {
    setHeaderVisible(true);
    if (hideHeaderTimeoutRef.current) {
      clearTimeout(hideHeaderTimeoutRef.current);
      hideHeaderTimeoutRef.current = null;
    }
  }, []);

  const handleNavMouseLeave = useCallback(() => {
    hideHeaderTimeoutRef.current = setTimeout(() => setHeaderVisible(false), 1500);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isHi = lang === "hi";

  return (
    <>
      {/* Nav: reactive — shows on scroll or hover, hides when idle */}
      <nav
        id="mainNav"
        className={`${navScrolled ? "scrolled" : ""} ${headerVisible || menuOpen ? "nav-visible" : "nav-hidden"}`}
        onMouseEnter={handleNavMouseEnter}
        onMouseLeave={handleNavMouseLeave}
      >
        <Link href="/" className="nav-logo-wrap">
          <Image
            src="/assests/Final-Logo-01-copy.png"
            alt="NeelChakra — Premier Wire Manufacturer"
            className="nav-logo"
            width={220}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>{t("home", lang)}</Link></li>
          <li><Link href="/fencing-products" onClick={() => setMenuOpen(false)}>{t("products", lang)}</Link></li>
          <li><Link href="/applications" onClick={() => setMenuOpen(false)}>{t("applications", lang)}</Link></li>
          <li><Link href="/locations" onClick={() => setMenuOpen(false)}>{t("locations", lang)}</Link></li>
          <li>
            <Link href="/tata-aayush-alternative" onClick={() => setMenuOpen(false)}>
              Smart Pricing
            </Link>
          </li>
        </ul>
        <button type="button" className="nav-lang-toggle" onClick={toggleLang} aria-label="Toggle language">
          {lang === "en" ? (
            <>
              <span>EN</span> <span className="slash">/</span> <span className="hi-text">हि</span>
            </>
          ) : (
            <>
              <span className="hi-text">हि</span> <span className="slash">/</span> <span>EN</span>
            </>
          )}
        </button>
        <button
          type="button"
          className={`hamburger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Hero */}
      <header className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-bg-inner">
            <Image
              src="/assests/shutterstock_2651660697.jpg"
              alt="Chemical-coated chain link wire fencing — GI wire manufacturer Raipur"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
        <div className="hero-content">
            <div className="hero-badge">
            <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-[var(--brand-cyan)]">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <div className="hero-badge-text">{t("isoCert", lang)}</div>
          </div>
          <div className="hero-logo-between">
            <Image
              src="/assests/Neelchalkralogo.png"
              alt="NeelChakra"
              width={280}
              height={280}
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: t("heroTitle", lang) }} />
          <div className="hero-stats">
            <div className="stat-item">
              <h3>2x</h3>
              <p>{t("chemicalCoating", lang)}</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>{t("competitivePricing", lang)}</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>{t("yearsWireLife", lang)}</p>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden>
          <svg className="hero-scroll-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </header>

      {/* Technology */}
      <section className="tech-section" id="technology">
        <div className="section-inner">
          <div className="section-label fade-up"><div className="section-label-text">{t("techLabel", lang)}</div></div>
          <h2 className="section-title fade-up">{t("techTitle", lang)}</h2>
          <p className="section-desc fade-up">{t("techDesc", lang)}</p>
          <div className="blueprint-grid">
            <div className="blueprint-card fade-up">
              <div className="bp-icon">
                <svg viewBox="0 0 24 24" strokeWidth={1.8} className="stroke-[var(--brand-blue)]">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>{t("bp1Title", lang)}</h3>
              <p>{t("bp1Desc", lang)}</p>
            </div>
            <div className="blueprint-card fade-up">
              <div className="bp-icon">
                <svg viewBox="0 0 24 24" strokeWidth={1.8} className="stroke-[var(--brand-blue)]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>{t("bp2Title", lang)}</h3>
              <p>{t("bp2Desc", lang)}</p>
            </div>
            <div className="blueprint-card fade-up">
              <div className="bp-icon">
                <svg viewBox="0 0 24 24" strokeWidth={1.8} className="stroke-[var(--brand-blue)]">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>{t("bp3Title", lang)}</h3>
              <p>{t("bp3Desc", lang)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section" id="process">
        <div className="section-inner">
          <div className="section-label fade-up"><div className="section-label-text">{t("processLabel", lang)}</div></div>
          <h2 className="section-title fade-up">{t("processTitle", lang)}</h2>
          <p className="section-desc fade-up">{t("processDesc", lang)}</p>
          <div className="process-steps">
            <div className="process-step fade-up">
              <div className="step-num">1</div>
              <h4>{t("step1Title", lang)}</h4>
              <p>{t("step1Desc", lang)}</p>
            </div>
            <div className="process-step fade-up">
              <div className="step-num">2</div>
              <h4>{t("step2Title", lang)}</h4>
              <p>{t("step2Desc", lang)}</p>
            </div>
            <div className="process-step fade-up">
              <div className="step-num">3</div>
              <h4>{t("step3Title", lang)}</h4>
              <p>{t("step3Desc", lang)}</p>
            </div>
            <div className="process-step fade-up">
              <div className="step-num">4</div>
              <h4>{t("step4Title", lang)}</h4>
              <p>{t("step4Desc", lang)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products-section" id="products">
        <div className="section-inner">
          <div className="section-label flex items-center fade-up pointer-events-auto">
            <div className="section-label-text">{t("productsLabel", lang)}</div>
          </div>
          <h2 className="section-title fade-up">{t("productsTitle", lang)}</h2>
          <p className="section-desc fade-up">{t("productsDesc", lang)}</p>
          <div className="products-grid">
            <Link href="/fencing-products/chain-link-fencing" className="product-card fade-up block cursor-pointer">
              <div className="absolute inset-0">
                <Image
                  src="/assests/chain-fencing-wire-1.jpg"
                  alt="Neelchakra Chain Link Fencing — double-coated GI wire manufacturer Raipur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="product-overlay">
                <h3>{t("chainLinkTitle", lang)}</h3>
                <span className="simple-click-pill">
                  {t("clickHere", lang)}
                </span>
              </div>
            </Link>
            <Link href="/fencing-products/barbed-wire" className="product-card fade-up block cursor-pointer">
              <div className="absolute inset-0">
                <Image
                  src="/assests/barbed-wire-1.jpg"
                  alt="Neelchakra Barbed Wire — high-tensile double-coated GI barbed wire Raipur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="product-overlay">
                <h3>{t("barbedTitle", lang)}</h3>
                <span className="simple-click-pill">
                  {t("clickHere", lang)}
                </span>
              </div>
            </Link>
            <Link href="/fencing-products/double-coated-gi-wire" className="product-card fade-up block cursor-pointer">
              <div className="absolute inset-0">
                <Image
                  src="/assests/grassland-fencing-1.jpg"
                  alt="Neelchakra Grassland Fencing — farm-grade double-coated GI wire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="product-overlay">
                <h3>{t("grasslandTitle", lang)}</h3>
                <span className="simple-click-pill">
                  {t("clickHere", lang)}
                </span>
              </div>
            </Link>
            <Link href="/fencing-products/neelchakra-wire" className="product-card fade-up block cursor-pointer">
              <div className="absolute inset-0">
                <Image
                  src="/assests/wire-1.jpg"
                  alt="Neelchakra Wire — premium double-coated GI wire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="product-overlay">
                <h3>{t("neelchakraWireTitle", lang)}</h3>
                <span className="simple-click-pill">
                  {t("clickHere", lang)}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="cert-section" id="certifications">
        <div className="section-inner">
          <div className="section-label fade-up"><div className="section-label-text">{t("trustLabel", lang)}</div></div>
          <h2 className="section-title fade-up">{t("trustTitle", lang)}</h2>
          <p className="section-desc fade-up">{t("trustDesc", lang)}</p>
          <div className="cert-grid">
            <div className="cert-card fade-up">
              <div className="cert-icon">
                <svg viewBox="0 0 24 24" strokeWidth={1.6} className="stroke-[var(--brand-blue)] w-8 h-8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>ISO 9001:2015</h4>
              <p>{t("isoDesc", lang)}</p>
            </div>
            <div className="cert-card fade-up">
              <div className="cert-icon">
                <svg viewBox="0 0 24 24" strokeWidth={1.6} className="stroke-[var(--brand-blue)] w-8 h-8">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h4>{t("saltSprayTitle", lang)}</h4>
              <p>{t("saltSprayDesc", lang)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-info fade-up">
              <div className="section-label"><div className="section-label-text">{t("getInTouch", lang)}</div></div>
              <h3>{t("contactTitle", lang)}</h3>
              <p>{t("contactDesc", lang)}</p>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span>{t("mobile", lang)}</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span>info@skenggs.com</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span>{t("address", lang)}</span>
              </div>
            </div>
            <div className="contact-form fade-up">
              <h3>
                {isHi ? "बल्क ऑर्डर के लिए तैयार?" : "Ready for bulk order?"} <br />
                {isHi ? "बात करते हैं।" : "Let's talk."} <span style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>{isHi ? "सीधे।" : "Directly."}</span>
              </h3>
              <div style={{ marginTop: '20px' }}>
                <a 
                  href="https://wa.me/917697848221?text=Hi%2C%20I'm%20interested%20in%20a%20bulk%20order." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-direct-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    background: '#25D366',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.4)';
                  }}
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span>{isHi ? "डायरेक्ट मैसेज करें" : "Direct Message"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Location Map */}
      <section className="spec-section" style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="spec-section-header">
            <span className="section-label">
              <span className="section-label-text">Visit Our Plant</span>
            </span>
            <h2>SK Engineering Solutions — Metal Park, Raipur</h2>
            <p>Plan a visit to see NeelChakra&apos;s double-coated GI wire manufacturing facility in person.</p>
          </div>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', maxWidth: 960, margin: '0 auto' }}>
            <iframe
              title="SK Engineering Solutions Plant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.491045953307!2d81.63147967702095!3d21.331117980394893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e7000e8b21c7%3A0xb79d8e107a1c537!2sSK%20ENGINEERING%20SOLUTIONS!5e0!3m2!1sen!2sus!4v1773661813765!5m2!1sen!2sus"
              style={{ border: 0, width: '100%', height: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <Image
            src="/assests/Final-Logo-01-copy.png"
            alt="NeelChakra"
            className="footer-logo"
            width={120}
            height={44}
          />
          <p className="footer-text">{t("footerCopy", lang)}</p>
          <ul className="footer-links">
            <li><Link href="/#hero">{t("home", lang)}</Link></li>
            <li><Link href="/#technology">{t("technology", lang)}</Link></li>
            <li>
              <a
                href="https://wa.me/917697848221?text=Hi%2C%20I'm%20interested%20in%20NeelChakra%20wire%20products."
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("contact", lang)}
              </a>
            </li>
          </ul>
        </div>
      </footer>

    </>
  );
}
