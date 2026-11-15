'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Clock3,
  Navigation,
  ExternalLink,
  Check,
  Copy,
  MessageCircle,
  ArrowLeft,
  ArrowUpRight,
  Coffee,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { type Branch, type MenuItem } from '../../config';
import { CloudOrnament, Divider } from '../../components/shared';

interface Props {
  branch: Branch;
  otherBranches: Branch[];
  sampleMenu: MenuItem[];
  whatsapp?: string;
}

const rupiah = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

export default function BranchClientView({ branch, otherBranches, sampleMenu, whatsapp = '' }: Props) {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${branch.name}\n${branch.address}\nPatokan: ${branch.patokan}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleWhatsapp = () => {
    const text = `Sampurasun Warkop Pasundan! Saya ingin bertanya mengenai cabang ${branch.name}. Apakah buka saat ini?`;
    if (whatsapp) {
      window.open(`https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    } else {
      window.open(branch.mapsUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="branch-detail-wrapper">
      {/* Breadcrumb */}
      <div className="wrap">
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link href="/">Beranda</Link>
          <ChevronRight size={14} />
          <Link href="/cabang">Daftar Cabang</Link>
          <ChevronRight size={14} />
          <span>{branch.shortName}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="branch-page-hero wrap">
        <div className="branch-page-hero-copy">
          <Link href="/cabang" className="back-link">
            <ArrowLeft size={15} /> Kembali ke Semua Cabang
          </Link>

          <div className="branch-tags-row">
            <span className="branch-badge">
              <MapPin size={13} /> {branch.city}
            </span>
            {branch.isMain && (
              <span className="branch-badge-gold">
                <Sparkles size={13} /> Cabang Utama
              </span>
            )}
            <span className="branch-badge-status">
              <span className="pulse-dot" /> Buka Hari Ini
            </span>
          </div>

          <h1>
            <em>{branch.name}</em>
          </h1>
          <p className="branch-hero-desc">{branch.description}</p>

          <div className="branch-hero-actions">
            <a
              href={branch.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="button amber"
            >
              <Navigation size={17} /> Buka Peta di Google Maps <ArrowUpRight size={17} />
            </a>
            <button type="button" onClick={handleWhatsapp} className="button dark">
              <MessageCircle size={17} /> Hubungi via WhatsApp
            </button>
            <button
              type="button"
              onClick={copyAddress}
              className="button outline-gold"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Alamat Tersalin!' : 'Salin Alamat & Patokan'}
            </button>
          </div>
        </div>
      </section>

      <Divider />

      {/* Main Info & Map Grid */}
      <section className="wrap section-compact">
        <div className="branch-detail-grid">
          {/* Left Column: Details */}
          <div className="branch-info-column">
            <div className="info-card">
              <div className="info-card-header">
                <MapPin className="info-icon" />
                <div>
                  <span className="eyebrow">LOKASI & PATOKAN</span>
                  <h2>Detail Alamat</h2>
                </div>
              </div>

              <div className="address-box">
                <p className="full-address">{branch.address}</p>
                <div className="patokan-box">
                  <strong>Patokan Arah:</strong>
                  <p>{branch.patokan}</p>
                </div>
              </div>

              <div className="hours-box">
                <div className="hours-header">
                  <Clock3 size={18} />
                  <div>
                    <strong>Jam Operasional</strong>
                    <p>{branch.hours}</p>
                  </div>
                </div>
                <small className="hours-note">
                  * Untuk kepastian ketersediaan meja atau nobar pertandingan, Anda dapat menghubungi cabang melalui WhatsApp atau mengecek update terkini di Google Maps.
                </small>
              </div>

              <div className="features-box">
                <span className="features-title">
                  <ShieldCheck size={16} /> Fasilitas & Suasana di Cabang Ini
                </span>
                <ul className="features-list">
                  {branch.features.map((feature) => (
                    <li key={feature}>
                      <span className="check-bullet">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu Teaser */}
            <div className="menu-teaser-card">
              <div className="teaser-head">
                <div>
                  <span className="eyebrow">SAJIAN POPULER</span>
                  <h3>Pilihan Menu Khas Pasundan</h3>
                </div>
                <Link href="/menu" className="text-link">
                  Lihat Buku Menu Lengkap <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="teaser-grid">
                {sampleMenu.map((item) => (
                  <div key={item.id} className="teaser-item">
                    <div className="teaser-photo">
                      <Image
                        src={item.image.startsWith('/') ? item.image : `/images/${item.image.includes('.') ? item.image : `${item.image}.jpg`}`}
                        alt={item.name}
                        fill
                        sizes="100px"
                      />
                    </div>
                    <div className="teaser-info">
                      <h4>{item.name}</h4>
                      <p>{item.badge}</p>
                      <strong>{rupiah(item.price)}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Map */}
          <div className="branch-map-column">
            <div className="map-embed-wrapper">
              <div className="map-header-bar">
                <span>
                  <MapPin size={16} /> Peta Google Maps Interaktif
                </span>
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="open-maps-link"
                >
                  Buka App Maps <ExternalLink size={13} />
                </a>
              </div>

              <div className="map-frame-container">
                <iframe
                  title={`Google Maps ${branch.name}`}
                  src={branch.embedMapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="interactive-iframe"
                />
              </div>

              <div className="map-floating-card">
                <div>
                  <strong>{branch.name}</strong>
                  <p>{branch.patokan}</p>
                </div>
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button amber btn-compact"
                >
                  <Navigation size={14} /> Rute Jalan
                </a>
              </div>
            </div>

            {/* Quick Share Link Box */}
            <div className="share-link-box">
              <span className="share-label">Link Google Maps Cabang Ini:</span>
              <div className="share-input-group">
                <input
                  type="text"
                  readOnly
                  value={branch.mapsUrl}
                  className="share-input"
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                />
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button outline-gold btn-compact"
                >
                  Buka
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Other Branches Switcher */}
      <section className="wrap other-branches-section">
        <div className="other-branches-header">
          <div>
            <span className="eyebrow">CABANG PASUNDAN LAINNYA</span>
            <h2>Kunjungi 4 Titik Cabang Lainnya</h2>
          </div>
          <Link href="/cabang" className="text-link">
            Lihat Semua Cabang (5) <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="other-branches-grid">
          {otherBranches.map((other) => (
            <Link
              key={other.id}
              href={`/cabang/${other.slug}`}
              className="other-branch-card"
            >
              <div className="other-card-top">
                <span className="other-city-badge">{other.badge}</span>
                <ArrowUpRight size={16} className="card-arrow" />
              </div>
              <h3>{other.name}</h3>
              <p className="other-patokan">{other.patokan}</p>
              <div className="other-card-foot">
                <span className="other-hours">{other.hours}</span>
                <span className="other-link-label">Buka Halaman →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
