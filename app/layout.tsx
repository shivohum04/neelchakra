import type { Metadata } from "next";
import "./globals.css";
import ConditionalNav from "./components/ConditionalNav";
import ConditionalFooter from "./components/ConditionalFooter";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://neelchakra.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "NeelChakra — Double-Coated GI Wire Manufacturer in Raipur | Chain Link, Barbed Wire & Grassland Fencing",
  description:
    "NeelChakra by SK Engineering Solutions, Raipur — manufacturer of double-coated GI wire, chain link fencing, barbed wire, and grassland fencing. ISO 9001:2015 certified. Salt-spray tested. Get a bulk quote today.",
  keywords: [
    "GI wire manufacturer Raipur",
    "chain link fencing Chhattisgarh",
    "barbed wire supplier Raipur",
    "grassland fencing India",
    "double coated wire",
    "corrosion resistant wire",
    "wire manufacturer Raipur",
    "NeelChakra wire",
  ],
  authors: [{ name: "SK Engineering Solutions, Raipur" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "NeelChakra",
    title: "NeelChakra — Double-Coated GI Wire Manufacturer, Raipur",
    description:
      "15+ years of wire life through double chemical-coating technology. ISO 9001:2015 certified. Salt-spray tested every batch. Serving Raipur, Chhattisgarh & across India.",
    images: [{ url: "/assests/main-logo.png", alt: "NeelChakra — GI Wire Manufacturer Raipur" }],
  },
  alternates: { canonical: SITE_URL },
  icons: { icon: "/assests/main-logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConditionalNav />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}
