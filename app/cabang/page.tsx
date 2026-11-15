'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Clock3, Navigation, ExternalLink, ArrowRight, Check, Copy, Coffee, Sparkles } from 'lucide-react';
import { branches, type Branch } from '../config';
import { HeaderNav, Footer, CloudOrnament, Divider } from '../components/shared';

export default function CabangPage() {
  const [filter, setFilter] = useState<'semua' | 'Jakarta Barat' | 'Jakarta Selatan'>('semua');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredBranches = filter === 'semua'
    ? branches
    : branches.filter((b) => b.city === filter);

  const handleCopy = async (branch: Branch) => {
    try {
      await navigator.clipboard.writeText(`${branch.name} - ${branch.address}`);
      setCopiedId(branch.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <>
      <a href="#main" className="skip">Langsung ke konten</a>
      <HeaderNav />

      <main id="main">
        <div className="welcome-ribbon">
          JARINGAN WARKOP PASUNDAN <span>•</span> 5 CABANG STRATEGIS DI JAKARTA
        </div>

        {/* Hero Cabang */}
        <section className="branches-hero wrap">
          <div className="branches-hero-copy">
            <CloudOrnament className="hero-cloud" />
            <div className="eyebrow">
              <span className="tiny-line" /> TEMUKAN CABANG TERDEKAT
            </div>
            <h1>
              5 Cabang <em>Warkop Pasundan</em>,<br />
              Ngariung Dekat Rumah.
            </h1>
            <p>
              Kopi tubruk pekat gula aren, gorengan haneut renyah, dan tempat ngobrol santai tanpa buru-buru.
              Pilih cabang paling dekat dengan rute harianmu di Jakarta Barat dan Jakarta Selatan.
            </p>

            {/* Stat Counters */}
            <div className="branches-stats">
              <div className="stat-item">
                <strong>5</strong>
                <span>Titik Cabang Aktif</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <strong>2</strong>
                <span>Wilayah (Jakbar & Jaksel)</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <strong>24 Jam</strong>
                <span>Mayoritas Buka Setiap Hari</span>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Filter Toolbar */}
        <section className="wrap section-compact">
          <div className="branches-toolbar">
            <div>
              <span className="eyebrow">PILIH WILAYAH</span>
              <h2 className="section-title-sm">Daftar Cabang Resmi</h2>
            </div>
            <div className="branch-filter-tabs">
              <button
                className={`tab-btn ${filter === 'semua' ? 'active' : ''}`}
                onClick={() => setFilter('semua')}
              >
                Semua Cabang (5)
              </button>
              <button
                className={`tab-btn ${filter === 'Jakarta Barat' ? 'active' : ''}`}
                onClick={() => setFilter('Jakarta Barat')}
              >
                Jakarta Barat (3)
              </button>
              <button
                className={`tab-btn ${filter === 'Jakarta Selatan' ? 'active' : ''}`}
                onClick={() => setFilter('Jakarta Selatan')}
              >
                Jakarta Selatan (2)
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="branch-cards-grid">
            {filteredBranches.map((branch, index) => (
              <article key={branch.id} className={`branch-card-detailed ${branch.isMain ? 'is-main' : ''}`}>
                <div className="branch-card-top">
                  <div className="branch-badge-row">
                    <span className="branch-badge">
                      <MapPin size={12} /> {branch.badge}
                    </span>
                    {branch.isMain && (
                      <span className="branch-badge-gold">
                        <Sparkles size={12} /> Cabang Utama
                      </span>
                    )}
                    <span className="branch-index">#0{index + 1}</span>
                  </div>

                  <h3>{branch.name}</h3>
                  <p className="branch-patokan">
                    <strong>Patokan:</strong> {branch.patokan}
                  </p>
                </div>

                {/* Map Preview */}
                <div className="branch-map-preview">
                  <iframe
                    title={`Peta ${branch.name}`}
                    src={branch.embedMapUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="branch-card-body">
                  <div className="branch-info-row">
                    <MapPin size={17} className="icon-gold" />
                    <div>
                      <span className="info-label">Alamat Lengkap</span>
                      <p className="branch-address-text">{branch.address}</p>
                    </div>
                  </div>

                  <div className="branch-info-row">
                    <Clock3 size={17} className="icon-gold" />
                    <div>
                      <span className="info-label">Jam Operasional</span>
                      <p className="branch-hours-text">{branch.hours}</p>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="branch-features">
                    {branch.features.map((f) => (
                      <span key={f} className="feature-pill">
                        ✓ {f}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="branch-actions">
                    <Link href={`/cabang/${branch.slug}`} className="button amber w-full">
                      Buka Halaman Khusus Cabang <ArrowRight size={16} />
                    </Link>

                    <div className="branch-sub-actions">
                      <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button outline-gold"
                      >
                        <Navigation size={15} /> Buka Google Maps <ExternalLink size={13} />
                      </a>
                      <button
                        type="button"
                        className="button outline-subtle"
                        onClick={() => handleCopy(branch)}
                        title="Salin Alamat"
                      >
                        {copiedId === branch.id ? <Check size={15} /> : <Copy size={15} />}
                        {copiedId === branch.id ? 'Tersalin' : 'Salin Alamat'}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Community Note */}
        <section className="branches-community-banner wrap">
          <div className="banner-content">
            <Coffee size={28} />
            <div>
              <h3>Punya Rencana Nobar atau Kumpul Komunitas?</h3>
              <p>Setiap cabang Warkop Pasundan siap menyambutmu dengan kopi haneut, bangku lesehan, dan obrolan akrab.</p>
            </div>
            <a href="https://wa.me/?text=Sampurasun%20Warkop%20Pasundan" target="_blank" rel="noreferrer" className="button amber">
              Hubungi Warung <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
