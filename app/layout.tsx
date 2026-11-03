import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Warkop Pasundan — Kopi Haneut, Obrolan Akrab', description: 'Singgah, seduh, sambung cerita. Jelajahi racikan kopi, makanan hangat, dan tongkrongan Warkop Pasundan di Setiabudi, Jakarta Selatan.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="id"><body>{children}</body></html>; }
