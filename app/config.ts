export const business = {
  name: 'Warkop Pasundan',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  maps: 'https://maps.app.goo.gl/ynaz77mAgcErP7A96',
  address: 'Jl. Setia Budi Tengah No. 14, RT.1/RW.1, Kuningan, Setiabudi, Jakarta Selatan 12910',
  hours: 'Konfirmasi jam buka melalui Google Maps',
};
export const menu = [
  { id: 'tubruk', name: 'Kopi Tubruk Robusta', category: 'kopi', price: 8000, desc: 'Pekat, jujur, dan bikin obrolan makin panjang.', badge: 'Khas Pasundan', image: 'coffee' },
  { id: 'aren', name: 'Kopi Susu Aren', category: 'kopi', price: 12000, desc: 'Kopi bold, susu lembut, manis aren yang pas.', badge: 'Favorit pilihan', image: 'coffee' },
  { id: 'tarik', name: 'Teh Tarik', category: 'kopi', price: 10000, desc: 'Teh wangi dengan susu, ditarik sampai lembut.', badge: 'Hangat / dingin', image: 'coffee' },
  { id: 'jahe', name: 'Wedang Jahe / STMJ', category: 'kopi', price: 12000, desc: 'Rempah hangat untuk menemani malam panjang.', badge: 'Rekomendasi malam', image: 'coffee' },
  { id: 'indomie', name: 'Indomie Spesial Pasundan', category: 'makanan', price: 18000, desc: 'Mie, telur, sayuran. Sederhana tapi istimewa.', badge: 'Racikan spesial', image: 'noodles' },
  { id: 'nasi', name: 'Nasi Telur Kecap', category: 'makanan', price: 15000, desc: 'Nasi hangat, telur ceplok, dan kecap manis.', badge: 'Bikin kenyang', image: 'noodles' },
  { id: 'burjo', name: 'Bubur Kacang Ijo', category: 'makanan', price: 10000, desc: 'Kacang ijo, ketan hitam, dan santan gurih.', badge: 'Klasik warkop', image: 'noodles' },
  { id: 'bala', name: 'Bala-Bala Gurih', category: 'camilan', price: 8000, desc: 'Sayuran renyah, paling pas dicocol sambal.', badge: 'Khas Pasundan', image: 'toast' },
  { id: 'gehu', name: 'Gehu Pedas', category: 'camilan', price: 8000, desc: 'Tahu isi sayuran dengan kejutan pedas.', badge: 'Pedas nampol', image: 'toast' },
  { id: 'pisang', name: 'Pisang Goreng Pasundan', category: 'camilan', price: 10000, desc: 'Manis di dalam, keemasan dan renyah di luar.', badge: 'Teman ngopi', image: 'toast' },
  { id: 'roti', name: 'Roti Bakar Cokelat Keju', category: 'camilan', price: 14000, desc: 'Cokelat lumer, keju melimpah, roti hangat.', badge: 'Enak dibagi', image: 'toast' },
];
