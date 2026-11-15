import { notFound } from 'next/navigation';
import Link from 'next/link';
import { branches, menu, business } from '../../config';
import { HeaderNav, Footer, CloudOrnament, Divider } from '../../components/shared';
import BranchClientView from './BranchClientView';

export function generateStaticParams() {
  return branches.map((branch) => ({
    slug: branch.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = branches.find((b) => b.slug === slug);
  if (!branch) {
    return { title: 'Cabang Tidak Ditemukan — Warkop Pasundan' };
  }
  return {
    title: `${branch.name} — Alamat & Jam Buka | Warkop Pasundan`,
    description: `${branch.name}: ${branch.address}. Patokan: ${branch.patokan}. ${branch.hours}. Cek rute petunjuk arah Google Maps dan menu favorit.`,
  };
}

export default async function BranchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = branches.find((b) => b.slug === slug);

  if (!branch) {
    notFound();
  }

  const otherBranches = branches.filter((b) => b.slug !== slug);
  const sampleMenu = menu.slice(0, 4);

  return (
    <>
      <a href="#main" className="skip">Langsung ke konten</a>
      <HeaderNav />

      <main id="main">
        {/* Ribbon */}
        <div className="welcome-ribbon">
          CABANG RESMI <span>•</span> {branch.badge.toUpperCase()} <span>•</span> {branch.name.toUpperCase()}
        </div>

        {/* Client Interactive Branch View */}
        <BranchClientView branch={branch} otherBranches={otherBranches} sampleMenu={sampleMenu} whatsapp={business.whatsapp} />
      </main>

      <Footer />
    </>
  );
}
