import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug } from '@/data/projects';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import { Building2, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Luxury High-Rise Apartments Kokapet | Myscape Songs of the Sun | Aarna Infra',
  description:
    'Experience high-rise sky living at Myscape Songs of the Sun in Kokapet Financial District. 6 Acres, 4 towers, 592 units. TSRERA: P02400008721.',
};

export default function ApartmentsPage() {
  const myscape = getProjectBySlug('myscape-songs-of-the-sun');

  const highRiseFeatures = [
    {
      title: 'Golden Mile Kokapet Address',
      desc: 'Positioned right in the high-net-worth epicentre of Kokapet SEZ, 3 minutes to Outer Ring Road (ORR) Exit 1.',
    },
    {
      title: 'TSRERA Certified: P02400008721',
      desc: 'Complete statutory sanction and legal transparency for high-ticket residential assets with bank approvals.',
    },
    {
      title: '50,000 Sq. Ft Sky Clubhouse',
      desc: 'Temperature-controlled lap pool, private screening theater, rooftop squash courts, and concierge services.',
    },
    {
      title: 'Bespoke 3 & 4 BHK Floorplates',
      desc: 'Expansive sky mansions ranging from 2,850 to 5,200 sq. ft with unobstructed panoramic views over Gandipet Lake.',
    },
  ];

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <Building2 className="w-3.5 h-3.5 text-[#0D5C2C]" />
          Financial District High-Rise Portfolio
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          Ultra-Luxury High-Rise Residencies in Kokapet
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          Trophy sky residences engineered for corporate titans, entrepreneurs, and global NRIs seeking international architectural majesty in Hyderabad prime financial corridor.
        </p>
      </div>

      {/* Myscape Mega Spotlight (Crisp White Card) */}
      {myscape && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white text-zinc-900 border border-amber-300/60 p-8 sm:p-12 shadow-2xl">
          <div className="lg:col-span-5 relative h-80 sm:h-[420px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200 shadow-md">
            <Image
              src={myscape.heroImage}
              alt={myscape.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#400006] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                Kokapet Golden Mile
              </span>
              <h3 className="text-2xl font-serif font-black text-white">{myscape.name}</h3>
              <p className="text-xs text-amber-100/90">Financial District / ISB Road, Hyderabad</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>TSRERA Certified: {myscape.approvals.tsreraNo}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#500208]">
              Songs of the Sun — Bespoke Sky Mansions
            </h2>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
              Spanning 6 manicured acres with 80% open landscape and only 4 architectural high-rise towers, Myscape Songs of the Sun provides 592 exclusive residencies. Designed for uncompromising elegance with high-speed biometrics, private foyers, and 50,000 square feet of world-class club privileges.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-[#FFF9F2] border border-amber-200">
                <span className="text-zinc-500 block font-mono font-semibold">Configurations</span>
                <span className="font-bold text-zinc-900">3 BHK (2,850 ft²) & 4 BHK (up to 5,200 ft²)</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-zinc-500 block font-mono font-semibold">Base Rate</span>
                <span className="font-black text-[#750A14]">From ₹9,800/ft² (₹3.45 Cr onwards)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/projects/${myscape.slug}`}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#500208] via-[#750A14] to-[#500208] text-white font-extrabold text-xs uppercase tracking-wider text-center transition-all shadow-md"
              >
                Inspect Towers & Floor Plans →
              </Link>
              <a
                href={`https://wa.me/919959354255?text=${encodeURIComponent(
                  'Hello Aarna Infra Developers, I am interested in scheduling a private model apartment viewing for Myscape Songs of the Sun in Kokapet.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase tracking-wider border border-zinc-200 text-center transition-all"
              >
                Request Confidential Deck
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highRiseFeatures.map((feat, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white text-zinc-900 border border-amber-300/40 space-y-2 shadow-xl">
            <span className="text-[#750A14] font-serif font-black text-xl">0{idx + 1}.</span>
            <h3 className="font-serif font-bold text-[#500208] text-base">{feat.title}</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* Private Consultation Booking Form */}
      <div className="max-w-4xl mx-auto">
        <LeadIntakeForm
          ventureSlug="myscape-songs-of-the-sun"
          ventureName="Myscape Songs of the Sun (Kokapet)"
          source="Apartments Portfolio"
          title="Schedule a Private High-Rise Viewing"
          subtitle="Experience the scale models, luxury clubhouse lounge, and panoramic sample sky mansion."
        />
      </div>
    </div>
  );
}
