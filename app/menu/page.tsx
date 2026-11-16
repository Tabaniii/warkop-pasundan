'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  X,
  Flame,
  Utensils,
  Coffee,
  Sparkles,
  CupSoda,
  CakeSlice,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';
import { menu, MenuItem } from '../config';
import { HeaderNav, Footer, CloudOrnament } from '../components/shared';

const categoryTabs = [
  { id: 'semua', label: 'Semua', icon: Sparkles },
  { id: 'top-picks', label: 'Menu Andalan', icon: Flame },
  { id: 'makanan', label: 'Makanan & Mie', icon: Utensils },
  { id: 'camilan', label: 'Dimsum & Roti', icon: CakeSlice },
  { id: 'minuman', label: 'Minuman Segar', icon: CupSoda },
  { id: 'kopi', label: 'Kopi Pasundan', icon: Coffee },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { semua: menu.length };
    for (const item of menu) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, []);

  const filteredItems = useMemo(() => {
    let result = menu;

    if (activeCategory !== 'semua') {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <a href="#main" className="skip">Langsung ke konten</a>
      <HeaderNav />

      <main id="main">
        {/* COMPACT HERO HEADER */}
        <section className="wrap menu-hero-compact">
          <div className="eyebrow">
            <span className="tiny-line" />
            DAFTAR RACIKAN WARUNG PASUNDAN
            <span className="tiny-line" />
          </div>
          <h1>
            Buku Menu <em>Khas Pasundan</em>
          </h1>
          <p>
            70+ sajian otentik disajikan haneut setiap hari di 5 cabang Warkop Pasundan.
            Tersedia untuk dine-in santai 24 jam, bungkus pulang, atau pesan online via GoFood &amp; GrabFood.
          </p>
        </section>

        {/* SEARCH & CATEGORY CONTROLS */}
        <section className="wrap menu-filter-controls">
          <div className="menu-search-wrapper">
            <Search className="menu-search-icon" size={17} />
            <input
              type="text"
              className="menu-search-input"
              placeholder="Cari menu (contoh: Mentai, Magelangan, Kopi Susu, Keju)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Cari menu"
            />
            {searchQuery && (
              <button
                type="button"
                className="menu-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Hapus pencarian"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="menu-pills-row" role="tablist" aria-label="Filter kategori menu">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              const count = tab.id === 'semua' ? menu.length : categoryCounts[tab.id] || 0;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`menu-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(tab.id)}
                >
                  <Icon size={13} />
                  <span>{tab.label}</span>
                  <span className="menu-pill-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="menu-results-counter">
            Menampilkan <strong>{filteredItems.length}</strong> racikan menu
            {activeCategory !== 'semua' && ` (${categoryTabs.find((t) => t.id === activeCategory)?.label})`}
            {searchQuery && ` untuk pencarian "${searchQuery}"`}
          </div>
        </section>

        {/* MENU GRID */}
        <section className="wrap menu-grid-section">
          {filteredItems.length === 0 ? (
            <div className="menu-empty-state">
              <CloudOrnament style={{ width: 120, margin: '0 auto 12px' }} />
              <h3>Menu henteu kapendak</h3>
              <p>Tidak ada racikan menu yang cocok dengan kata kunci &quot;{searchQuery}&quot;.</p>
              <button
                type="button"
                className="button amber"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('semua');
                }}
              >
                Reset Semua Filter &amp; Pencarian
              </button>
            </div>
          ) : (
            <div className="menu-full-grid" aria-live="polite">
              {filteredItems.map((item: MenuItem) => (
                <article key={item.id} className="menu-item-card">
                  <div className="menu-card-img-wrap">
                    <Image
                      src={item.image}
                      alt={`Foto sajian ${item.name}`}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    {item.badge && (
                      <span className={`menu-card-badge ${item.isTopPick ? '' : 'gold'}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="menu-card-content">
                    <h2 className="menu-card-title">{item.name}</h2>
                    <p className="menu-card-desc">{item.desc}</p>

                    <div className="menu-card-footer">
                      <span className="menu-card-price">{item.formattedPrice}</span>
                      <Link href="/cabang" className="menu-card-order-link" title="Kunjungi cabang terdekat">
                        <MapPin size={11} /> Cek Cabang
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* DINE-IN & DELIVERY INFO BANNER */}
          <div className="menu-delivery-banner">
            <div>
              <div className="eyebrow" style={{ color: '#dca771', marginBottom: 8 }}>
                <span className="tiny-line" style={{ background: '#dca771' }} />
                NGARIUNG ATAU PESAN ONLINE
              </div>
              <h3>Mau pesan antar ke tempat atau mampir langsung?</h3>
              <p>
                Semua menu di atas disajikan segar setiap hari di kelima cabang Warkop Pasundan.
                Anda juga bisa memesan melalui aplikasi GoFood dan GrabFood dengan mencari &quot;Warkop Pasundan&quot; di sekitar lokasi Anda.
              </p>
            </div>
            <div className="menu-delivery-actions">
              <Link href="/cabang" className="button amber">
                Lihat 5 Lokasi Cabang <ArrowRight size={16} />
              </Link>
              <Link href="/#kontak" className="button dark">
                Hubungi Kami <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
