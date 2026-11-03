export const business = {
  name: 'Warkop Pasundan',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  maps: 'https://maps.app.goo.gl/ynaz77mAgcErP7A96',
  address: 'Jl. Setia Budi Tengah No. 14, RT.1/RW.1, Kuningan, Setiabudi, Jakarta Selatan 12910',
  hours: 'Konfirmasi jam buka melalui Google Maps',
};
export const menu = [
  { id: 'tubruk', name: 'Kopi Tubruk Robusta Gula Aren', category: 'kopi', price: 8000, desc: 'Robusta pekat bertemu manis gula aren. Haneut sampai hati.', badge: 'Khas Pasundan', image: 'coffee' },
  { id: 'aren', name: 'Kopi Susu Aren', category: 'kopi', price: 12000, desc: 'Kopi bold, susu lembut, manis aren yang pas.', badge: 'Favorit pilihan', image: 'coffee' },
  { id: 'tarik', name: 'Teh Tarik Panas', category: 'kopi', price: 10000, desc: 'Teh wangi dengan susu, ditarik sampai lembut.', badge: 'Hangat / dingin', image: 'coffee' },
  { id: 'jahe', name: 'Wedang Jahe Rempah', category: 'kopi', price: 12000, desc: 'Rempah hangat untuk menemani malam panjang.', badge: 'Rekomendasi malam', image: 'coffee' },
  { id: 'indomie', name: 'Indomie Rebus Spesial Pasundan', category: 'makanan', price: 18000, desc: 'Kuah hangat, telur, dan sayuran. Teman ngariung malam.', badge: 'Racikan spesial', image: 'noodles' },
  { id: 'nasi', name: 'Nasi Telur Kecap', category: 'makanan', price: 15000, desc: 'Nasi hangat, telur ceplok, dan kecap manis.', badge: 'Bikin kenyang', image: 'noodles' },
  { id: 'burjo', name: 'Bubur Ketan Hitam', category: 'makanan', price: 10000, desc: 'Ketan hitam lembut bersiram santan gurih.', badge: 'Klasik warkop', image: 'noodles' },
  { id: 'bala', name: 'Bala-Bala Haneut', category: 'camilan', price: 8000, desc: 'Sayuran renyah, paling pas dicocol sambal.', badge: 'Khas Pasundan', image: 'heritage-hero.webp' },
  { id: 'gehu', name: 'Gehu Pedas', category: 'camilan', price: 8000, desc: 'Tahu isi sayuran dengan kejutan pedas.', badge: 'Pedas nampol', image: 'heritage-hero.webp' },
  { id: 'pisang', name: 'Pisang Goreng Madu', category: 'camilan', price: 10000, desc: 'Manis di dalam, keemasan dan renyah di luar.', badge: 'Teman ngopi', image: 'toast' },
  { id: 'roti', name: 'Roti Bakar Kayu Bakar', category: 'camilan', price: 14000, desc: 'Roti hangat beraroma panggang dengan cokelat dan keju.', badge: 'Enak dibagi', image: 'toast' },
];
