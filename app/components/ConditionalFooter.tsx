'use client';

import { usePathname } from 'next/navigation';
import SubpageFooter from './SubpageFooter';

export default function ConditionalFooter() {
  const pathname = usePathname();
  // HomePage.tsx owns its own localized footer for "/" — only render SubpageFooter on sub-pages
  if (pathname === '/') return null;
  return <SubpageFooter />;
}
