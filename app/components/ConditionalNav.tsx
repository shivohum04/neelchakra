'use client';

import { usePathname } from 'next/navigation';
import ProductNav from './ProductNav';

export default function ConditionalNav() {
  const pathname = usePathname();
  // HomePage.tsx owns the nav for "/" — only render ProductNav on sub-pages
  if (pathname === '/') return null;
  return <ProductNav />;
}
