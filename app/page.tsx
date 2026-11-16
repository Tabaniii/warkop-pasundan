'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Coffee, MapPin, MessageCircle, Wifi, PlugZap, Tv, Leaf, Menu, X, Clock3, Navigation, ChevronDown, Heart, Star, Utensils, Cookie, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { business, menu, branches } from './config';
import { HeaderNav, Logo } from './components/shared';
const rupiah = (n: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
const categories = [{id:'semua',label:'Pilihan Warkop',icon:Utensils},{id:'kopi',label:'Seduhan Kopi & Teh',icon:Coffee},{id:'makanan',label:'Santapan Gurih',icon:Utensils},{id:'camilan',label:'Gorengan & Camilan',icon:Cookie}];
function CloudOrnament({className = ''}:{className?:string}) { return <svg className={`cloud-ornament ${className}`} viewBox="0 0 240 80" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.5"><path d="M7 57C28 57 22 35 47 35C62 35 62 13 88 13C115 13 108 37 133 37C151 37 155 24 174 29C194 34 186 51 209 51H233"/><path d="M8 65H48C69 65 56 44 77 44C94 44 84 24 101 25C115 26 108 49 132 49H153C173 49 167 38 180 40C192 42 184 61 208 61H230"/><path d="M15 73H69C87 73 75 54 92 54C105 54 98 39 109 40C120 41 112 61 138 61H158C179 61 169 70 191 70H222"/></g></svg> }
function Divider(){return <div className="heritage-divider" aria-hidden="true"><CloudOrnament/><svg viewBox="0 0 50 72" fill="none"><path d="M25 3C22 19 5 29 7 47L3 60H47L43 47C45 29 28 19 25 3Z M25 15V65 M12 47L25 37L38 47 M15 34L25 27L35 34 M9 55H41" stroke="currentColor" strokeWidth="1.5"/><circle cx="25" cy="47" r="3" stroke="currentColor"/></svg><CloudOrnament/></div>}
export default function Home(){
 const [category,setCategory]=useState('semua'); const [order,setOrder]=useState(''); const [copied,setCopied]=useState(false); const [selectedBranch,setSelectedBranch]=useState(branches[1]); const dialog=useRef<HTMLDialogElement>(null); const reduce=useReducedMotion();
 const filtered = category==='semua' ? menu.filter(x => x.isTopPick).slice(0, 8) : menu.filter(x=>x.category===category);
 function orderItem(item='takeaway atau titip meja'){ const message=`Sampurasun, Warkop Pasundan! Saya ingin pesan ${item}. Bisa dibantu?`; if(business.whatsapp){window.open(`https://wa.me/${business.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');}else{setOrder(message);setCopied(false);dialog.current?.showModal();}}
 return <><a href="#main" className="skip">Langsung ke konten</a><HeaderNav/>
 <main id="main"><div className="welcome-ribbon">WARUNG KOPI &amp; KULINÉR PASUNDAN <span>•</span> SETIABUDI • JELAMBAR • JAGAKARSA • SWADAYA</div><section className="hero wrap"><div className="hero-copy"><CloudOrnament className="hero-cloud"/><div className="eyebrow"><span className="tiny-line"/> SAMPURASUN, WILUJENG SUMPING</div><h1>Hangatna<br/>Seduhan Kopi,<br/><em>Raosna Kulinér<br/>Pasundan.</em></h1><p>Ti mimiti seuseup, nepi ka jadi dulur. Kopi tubruk yang haneut, gorengan yang renyah, dan obrolan yang tak perlu buru-buru usai.</p><div className="hero-actions"><Link className="button amber" href="/menu">Buka Daptar Menu <ArrowUpRight size={18}/></Link><a className="text-link" href="#lokasi"><MapPin size={17}/> Lokasi &amp; 5 Cabang</a></div><div className="heritage-status"><Coffee size={17}/><span>TEMPAT NGARIUNG &amp; SILATURAHMI<small>Wilujeng sumping, mangga calik heula.</small></span></div></div><div className="hero-photo"><Image src="/images/heritage-hero.webp" alt="Ilustrasi cangkir seng hijau berisi kopi tubruk beruap dan tampah bambu berisi gehu serta bala-bala" fill priority sizes="(max-width: 760px) 100vw, 52vw"/><div className="photo-shade"/><div className="round-stamp">SEDUHAN<Coffee size={34}/><span>TRADISIONAL</span></div><div className="photo-caption"><span>DARI DAPUR, SAMPAI KE HATI.<br/><strong>Haneut kopina, raket duduluran.</strong></span><span className="steam" aria-hidden="true">∿ ∿ ∿</span></div><span className="photo-credit">Ilustrasi suasana & penyajian</span></div><a href="#menu" className="scroll-note">SEDIKIT KOPI, BANYAK CERITA <ChevronDown size={15}/></a></section>
 <div className="promise-strip"><div className="wrap"><span><Coffee/> Diseduh dengan hati</span><i>✳</i><span><Leaf/> Rasa akrab khas Pasundan</span><i>✳</i><span><Heart/> Harga ramah kantong</span><i>✳</i><span><MessageCircle/> Nongkrong tanpa sungkan</span></div></div>
 <Divider/><section id="menu" className="menu-section wrap section"><div className="section-heading"><div><span className="eyebrow">DAPTAR RACIKAN WARUNG</span><h2>Buku menu <em>khas urang.</em></h2></div><p>Dari seruput pertama sampai suapan terakhir.<br/>Ada yang pas buat setiap selera.</p></div><div className="catalog-toolbar"><div className="categories" aria-label="Kategori menu">{categories.map(c=><button key={c.id} onClick={()=>setCategory(c.id)} aria-pressed={category===c.id} className={category===c.id?'active':''}><c.icon size={17}/>{c.label}</button>)}</div><span className="menu-count">{filtered.length} racikan pilihan</span></div><motion.div layout={!reduce} className="menu-grid" aria-live="polite"><AnimatePresence mode="popLayout" initial={false}>{filtered.map(item=><motion.article key={item.id} layout={!reduce} initial={{opacity:0,y:reduce?0:12}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:reduce?0:.2}} className="menu-card"><div className="food-photo"><Image src={item.image.startsWith('/') ? item.image : `/images/${item.image.includes('.') ? item.image : `${item.image}.jpg`}`} alt={item.name} fill sizes="(max-width: 550px) 90vw, (max-width: 900px) 45vw, 25vw"/><span className="food-badge">{item.badge || 'Pilihan Warung'}</span></div><div className="food-copy"><CloudOrnament className="card-filigree"/><h3>{item.name}</h3><p>{item.desc}</p><div className="price-row"><strong>{rupiah(item.price)}</strong><span>/ porsi</span></div><button aria-label={`Pesan ${item.name} via WhatsApp`} onClick={()=>orderItem(`${item.name} (${rupiah(item.price)})`)} className="order-item"><MessageCircle size={16}/> Pesan Lewat WA <ArrowUpRight size={16}/></button></div></motion.article>)}</AnimatePresence></motion.div><div className="menu-foot"><span>Tersedia di seluruh cabang Warkop Pasundan • Dine-in, Takeaway &amp; Online Delivery (GoFood / GrabFood).</span><Link href="/menu" className="button amber" style={{minHeight:42,padding:'0 18px'}}>Buka Buku Menu Lengkap (70+ Pilihan) <ArrowRight size={15}/></Link></div></section>
 <Divider/><section id="suasana" className="atmosphere section"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">MANGGA CALIK, TEU KEDAH RUSUH</span><h2>Ngariung di warung,<br/><em>serasa di imah.</em></h2></div><p>Di bawah lampu kuning, di atas tikar sederhana.<br/>Duduk berdekatan. Cerita pun mengalir perlahan.</p></div><div id="fasilitas" className="bento"><div className="space-photo"><Image src="/images/heritage-space.webp" alt="Ilustrasi warung berdinding bambu, tikar lesehan, meja jati panjang, dan lampu kuning gantung" fill sizes="(max-width: 760px) 100vw, 60vw"/><div><span className="eyebrow">DUDUK DULU, ATUH.</span><h3>Betah itu sederhana.</h3><p>Tikar lesehan, meja jati, dan hangat lampu gantung.</p><small>Foto inspirasi suasana, bukan lokasi asli.</small></div></div><div className="amenities"><article><Wifi/><span><h3>Lesehan, lepas penat.</h3><p>Tikar anyaman dan meja kayu panjang. Ruang sederhana untuk duduk bersama.</p></span></article><article><PlugZap/><span><h3>Haneut suasanana.</h3><p>Lampu kuning yang teduh, dengan colokan untuk menemani obrolan panjang.</p></span></article><article><Tv/><span><h3>Ngariung, nyambung terus.</h3><p>Wi-Fi dan nobar santai. Seruput kopi, dukung tim, tambah cerita.</p></span></article><p className="facility-note">Konfirmasi fasilitas dan jadwal nobar sebelum berkunjung.</p></div></div></div></section>
 <Divider/><section className="community wrap section"><span className="eyebrow">BUKU TAMU WARUNG</span><div className="community-inner"><h2>Unggal datang,<br/>aya <em>caritana.</em></h2><div className="review-card"><span className="guestbook-label">CATATAN DARI MEJA WARUNG</span><div className="review-heading"><span className="google-g">G</span><strong>Ulasan para tamu</strong><ArrowUpRight size={20}/></div><p>“Pernah singgah di sini? Ceritakan racikan favorit dan momen ngariung kamu.”</p><a href={business.maps} target="_blank" rel="noreferrer" className="text-link">Baca ulasan di Google Maps <ArrowRight size={17}/></a><small>Undangan dari warung, bukan kutipan pelanggan. Rating & ulasan asli tersedia di Google Maps.</small></div></div></section>

 <section id="lokasi" className="location-section"><div className="wrap location-grid"><div><span className="eyebrow">ALAMAT &amp; PITUDUH JALAN</span><h2>Tuturkeun aromana.<br/><em>Mampir ka warung.</em></h2><div className="location-branch-tabs" role="tablist" aria-label="Pilihan cabang">{branches.map((b)=><button key={b.id} type="button" role="tab" aria-selected={selectedBranch.id===b.id} className={`branch-tab-chip ${selectedBranch.id===b.id?'active':''}`} onClick={()=>setSelectedBranch(b)}><MapPin size={13}/><span>{b.shortName}</span></button>)}</div><div className="location-detail"><MapPin/><div><h3>{selectedBranch.name} {selectedBranch.isMain ? '(Cabang Utama)' : ''}</h3><p>{selectedBranch.address}</p><p><strong>Patokan:</strong> {selectedBranch.patokan}</p></div></div><div className="location-detail"><Clock3/><div><h3>Jam Operasional</h3><p>{selectedBranch.hours}.</p><p>Tanyakan akses parkir motor &amp; ketersediaan meja saat berkunjung.</p></div></div><div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center'}}><a href={selectedBranch.mapsUrl} target="_blank" rel="noreferrer" className="button amber">Buka di Google Maps <ArrowUpRight size={18}/></a><Link href={`/cabang/${selectedBranch.slug}`} className="button dark">Halaman Khusus Cabang Ini <ArrowRight size={16}/></Link></div><div style={{marginTop:16}}><Link href="/cabang" className="text-link" style={{fontSize:12}}>Jelajahi direktori lengkap 5 cabang &rarr;</Link></div></div><div className="map-card"><iframe key={selectedBranch.id} title={`Peta ${selectedBranch.name}`} src={selectedBranch.embedMapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a className="map-label" href={selectedBranch.mapsUrl} target="_blank" rel="noreferrer"><span className="map-icon"><Coffee/></span><span><strong>{selectedBranch.name}</strong><small>{selectedBranch.patokan}</small></span><Navigation size={20}/></a></div></div></section>

 <Divider/>
 <section id="kontak" className="contact-section wrap">
   <div className="contact-header">
     <span className="eyebrow"><span className="tiny-line"/> HUBUNGI &amp; KUNJUNGI KAMI</span>
     <h2>Kontak &amp; Layanan <em>Warkop Pasundan.</em></h2>
     <p>Punya rencana nobar komunitas, pesanan porsi besar, atau ingin menghubungi cabang terdekat? Silakan pilih cabang kami di bawah ini untuk melihat rute peta atau panduan lengkap.</p>
   </div>
   <div className="contact-grid">
     <div className="contact-branches-list">
       {branches.map((b) => (
         <article key={b.id} className="contact-branch-card">
           <div className="contact-branch-info">
             <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:4}}>
               <span className="branch-badge" style={{fontSize:9,padding:'2px 7px'}}>{b.city}</span>
               {b.isMain && <span className="branch-badge-gold" style={{fontSize:9,padding:'2px 7px'}}>Cabang Utama</span>}
             </div>
             <h3>{b.name}</h3>
             <p>{b.address}</p>
             <small>Patokan: {b.patokan} • {b.hours}</small>
           </div>
           <div className="contact-branch-actions">
             <a href={b.mapsUrl} target="_blank" rel="noreferrer" className="button amber btn-compact">
               Buka Maps <ExternalLink size={12}/>
             </a>
             <Link href={`/cabang/${b.slug}`} className="button outline-gold btn-compact">
               Detail Cabang &rarr;
             </Link>
           </div>
         </article>
       ))}
     </div>
     <div className="contact-info-panel">
       <h3>Layanan &amp; Informasi</h3>
       <div className="contact-feature-item">
         <Utensils size={20} />
         <div>
           <strong>Pesan Antar Online</strong>
           <p>Tersedia di GoFood dan GrabFood untuk area Jelambar, Setiabudi, Jagakarsa, dan sekitarnya.</p>
         </div>
       </div>
       <div className="contact-feature-item">
         <Tv size={20} />
         <div>
           <strong>Nobar &amp; Kumpul Komunitas</strong>
           <p>Area lesehan dan meja panjang siap untuk nobar bola, diskusi santai, atau ngariung bareng teman.</p>
         </div>
       </div>
       <div className="contact-feature-item">
         <Clock3 size={20} />
         <div>
           <strong>Buka 24 Jam Setiap Hari</strong>
           <p>Seduhan kopi hangat dan gorengan renyah siap menemani siang hingga malam tanpa terburu-buru.</p>
         </div>
       </div>
       <div className="contact-cta-box">
         <Link href="/cabang" className="button amber" style={{width:'100%',justifyContent:'center'}}>
           Buka Direktori Lengkap 5 Cabang &rarr;
         </Link>
       </div>
     </div>
   </div>
 </section>
 </main><footer className="wrap"><Logo/><div><p>Kopi haneut. Beuteung wareg. Hate bungah.</p><div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:8,fontSize:11,color:'#83654a'}}>{branches.map(b=><Link key={b.id} href={`/cabang/${b.slug}`} style={{textDecoration:'underline',textUnderlineOffset:3}}>{b.shortName}</Link>)}</div></div><span suppressHydrationWarning>© {new Date().getFullYear()} Warkop Pasundan</span></footer><div className="mobile-dock"><a href="#lokasi" className="button amber"><MapPin size={17}/><span>Lokasi &amp; Cabang</span></a><button className="button dark" onClick={()=>orderItem()}><MessageCircle size={17}/><span>Pesan WA</span></button><a href={selectedBranch.mapsUrl} target="_blank" rel="noreferrer"><Navigation size={17}/> Peta</a></div>
 <dialog ref={dialog} className="order-dialog" aria-labelledby="order-title" onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close()}}><button className="dialog-close" onClick={()=>dialog.current?.close()} aria-label="Tutup"><X/></button><Coffee size={32}/><h2 id="order-title">Pesananmu siap <em>ditanyakan.</em></h2><p>Nomor WhatsApp resmi belum dikonfirmasi. Salin pesan ini, lalu gunakan kontak resmi yang tercantum di Google Maps.</p><blockquote>{order}</blockquote><button className="button amber" onClick={async()=>{try{await navigator.clipboard.writeText(order);setCopied(true)}catch{setCopied(false)}}}>{copied?<Check size={18}/>:<Copy size={18}/>} {copied?'Pesan tersalin':'Salin pesan pesanan'}</button><a href={selectedBranch.mapsUrl} target="_blank" rel="noreferrer" className="text-link">Lihat kontak di Google Maps <ArrowUpRight size={16}/></a></dialog></>;
}
