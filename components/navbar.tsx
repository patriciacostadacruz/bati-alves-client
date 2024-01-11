'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-8 p-4 text-[18px] text-white bg-mainRed shadow-xl">
      <span>[LOGO]</span>
      <Link
        href="/"
        className={pathname === '/' ? 'w-[80px] font-bold' : 'w-[80px]'}
      >
        Accueil
      </Link>
      <Link
        href="/travaux"
        className={pathname === '/travaux' ? 'w-[80px] font-bold' : 'w-[80px]'}
      >
        Travaux
      </Link>
      <Link
        href="/contact"
        className={pathname === '/contact' ? 'w-[80px] font-bold' : 'w-[80px]'}
      >
        Contact
      </Link>
    </div>
  );
}

