'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { business } from '../config';

export function CloudOrnament({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={`cloud-ornament ${className}`} style={style} viewBox="0 0 240 80" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M7 57C28 57 22 35 47 35C62 35 62 13 88 13C115 13 108 37 133 37C151 37 155 24 174 29C194 34 186 51 209 51H233" />
        <path d="M8 65H48C69 65 56 44 77 44C94 44 84 24 101 25C115 26 108 49 132 49H153C173 49 167 38 180 40C192 42 184 61 208 61H230" />
        <path d="M15 73H69C87 73 75 54 92 54C105 54 98 39 109 40C120 41 112 61 138 61H158C179 61 169 70 191 70H222" />
      </g>
    </svg>
  );
}

export function Divider() {
  return (
    <div className="heritage-divider" aria-hidden="true">
      <CloudOrnament />
      <svg viewBox="0 0 50 72" fill="none">
        <path d="M25 3C22 19 5 29 7 47L3 60H47L43 47C45 29 28 19 25 3Z M25 15V65 M12 47L25 37L38 47 M15 34L25 27L35 34 M9 55H41" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="25" cy="47" r="3" stroke="currentColor" />
      </svg>
      <CloudOrnament />
    </div>
  );
}

export function Logo() {
  return (
    <Link href="/" className="logo-brand" aria-label="Warkop Pasundan Beranda">
      <Image
        src="/images/logo-pasundan.png"
        alt="Logo Warkop Pasundan"
        width={112}
        height={80}
        className="brand-logo-img"
        priority
      />
    </Link>
  );
}

export function HeaderNav() {
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <div className="nav wrap">
        <Logo />
        <nav className={mobile ? 'navlinks open' : 'navlinks'} aria-label="Navigasi utama">
          <Link href="/" onClick={() => setMobile(false)} className={pathname === '/' ? 'active' : ''}>Beranda</Link>
          <Link href="/menu" onClick={() => setMobile(false)} className={pathname === '/menu' ? 'active' : ''}>Daftar Menu</Link>
          <Link href="/#fasilitas" onClick={() => setMobile(false)}>Fasilitas Kami</Link>
          <Link href="/cabang" onClick={() => setMobile(false)} className={pathname.startsWith('/cabang') ? 'active' : ''}>Cabang Kami</Link>
          <Link href="/#kontak" onClick={() => setMobile(false)}>Kontak</Link>
        </nav>
        <button
          className="mobile-toggle"
          aria-label={mobile ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={mobile}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="wrap">
      <Logo />
      <div>
        <p>Kopi haneut. Beuteung wareg. Hate bungah.</p>
        <p className="footer-branches-note">Hadir di 5 Cabang: Setiabudi, Jelambar 02, Jl. Swadaya Raya, Jagakarsa, & Jl. Hadiah Jelambar.</p>
      </div>
      <span>&copy; {new Date().getFullYear()} Warkop Pasundan</span>
    </footer>
  );
}
