import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug } from '@/data/projects';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Luxury Villas & Independent Houses | Theme Communities | Aarna Infra',
  description:
    'Discover luxury gated villa communities including Magadha featuring Shivoham Theme Park near Telangana Future City. 32 Acres, 435 units with full DTCP approval.',
};

export default function VillasHousesPage() {
  const magadha = getProjectBySlug('magadha');

  const villaPillars = [
    {
      title: 'Architectural Individuality',
      desc: 'Build your custom multi-level villa with bespoke architectural layouts, courtyard swimming pools, and terrace gazebos.',
    },
    {
      title: 'Theme Amenities & Parks',
      desc: 'Featuring iconic landmarks like the Shivoham Meditative Theme Park, sports courts, and grand community clubhouses.',
    },
    {
      title: 'Telangana Future City Corridor',
      desc: 'Positioned right along the high-appreciation Srisailam Highway, minutes from upcoming mega investments.',
    },
    {
      title: 'Comprehensive DTCP Approvals',
      desc: 'Wide 60ft and 40ft internal avenues with underground services, transformer substations, and clear freehold deeds.',
    },
  ];

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#0D5C2C]" />
          Theme Gated Townships
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          Luxury Villas & Gated Communities
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          Bespoke villa plots and turnkey independent residences designed for elevated living in serenity, backed by world-class themed amenities and rapid highway appreciation.
        </p>
      </div>

      {/* Magadha Mega Spotlight (Crisp White Luxury Card) */}
      {magadha && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white text-zinc-900 border border-amber-300/60 p-8 sm:p-12 shadow-2xl">
          <div className="lg:col-span-5 relative h-80 sm:h-[420px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200 shadow-md">
            <Image
              src={magadha.heroImage}
              alt={magadha.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#400006] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                32 Acres • 435 Units
              </span>
              <h3 className="text-2xl font-serif font-black text-white">{magadha.name}</h3>
              <p className="text-xs text-amber-100/90">{magadha.location}</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#750A14] font-bold bg-red-50 px-3 py-1 rounded-full border border-red-200 self-start">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>DTCP Approved • Shivoham Theme Park • Maisigandi Temple Corridor</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#500208]">
              Magadha — Spiritual Serenity Meets Future City Appreciation
            </h2>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
              Magadha spans 32 majestic acres in Kadthal near the celebrated Maisigandi Temple. Designed around the centerpiece &ldquo;Shivoham Theme Park&rdquo;, this gated township combines cultural heritage with high-lifestyle amenities including a grand clubhouse, swimming pool, badminton courts, and manicured reflexology walkways.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-[#FFF9F2] border border-amber-200">
                <span className="text-zinc-500 block font-mono font-semibold">Villa Plot Extents</span>
                <span className="font-bold text-zinc-900">165 to 500 Sq. Yards</span>
              </div>
              <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                <span className="text-zinc-500 block font-mono font-semibold">Listed Rate</span>
                <span className="font-black text-[#750A14]">₹21,000 / Sq. Yard</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/projects/${magadha.slug}`}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#500208] via-[#750A14] to-[#500208] text-white font-extrabold text-xs uppercase tracking-wider text-center transition-all shadow-md"
              >
                Inspect Magadha Master Plan & Plots →
              </Link>
              <a
                href={`https://wa.me/919959354255?text=${encodeURIComponent(
                  'Hello Aarna Infra Developers, please share the Magadha Theme Gated Community brochure, villa elevation concepts, and pricing.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase tracking-wider border border-zinc-200 text-center transition-all"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {villaPillars.map((p, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white text-zinc-900 border border-amber-300/40 space-y-2 shadow-xl">
            <span className="text-[#750A14] font-serif font-black text-xl">0{idx + 1}.</span>
            <h3 className="font-serif font-bold text-[#500208] text-base">{p.title}</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto">
        <LeadIntakeForm
          ventureSlug="magadha"
          ventureName="Magadha Luxury Villa Township"
          source="Villas & Houses Page"
          title="Schedule Your VIP Magadha Villa Tour"
          subtitle="Explore the Shivoham theme park, inspect available corner plots, and review custom villa designs."
        />
      </div>
    </div>
  );
}
