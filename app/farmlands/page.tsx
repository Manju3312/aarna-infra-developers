import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug } from '@/data/projects';
import RevenueShareCalculator from '@/components/RevenueShareCalculator';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import { Trees, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Managed Commercial Farmlands | 50% Harvest Revenue Sharing | Aarna Infra',
  description:
    'Invest in managed commercial farmlands at Golden Farm near Shadnagar. 14.16 acres, 50% revenue sharing on Agarwood, African Mahogany, and Hass Avocado. 100% Tax-Free income.',
};

export default function FarmlandsPage() {
  const goldenFarm = getProjectBySlug('golden-farm');

  const farmFeatures = [
    {
      title: '50% Harvest Profit Sharing',
      desc: 'Receive 50% of commercial timber and fruit proceeds upon harvest with zero farming operational hassles.',
    },
    {
      title: 'High-Value Plantations',
      desc: 'Expert agronomists manage African Mahogany, inoculated Agarwood (Oud), and export-grade Hass Avocado.',
    },
    {
      title: 'Freehold Land Ownership',
      desc: 'Each 2, 3, or 5 Gunta parcel is registered in your name with direct electronic Dharani Pattadar passbook mutation.',
    },
    {
      title: 'Weekend Country Retreat',
      desc: 'Enjoy unlimited clubhouse access, swimming pool, organic dining, and rustic cottages just 45 mins from RGIA.',
    },
  ];

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <Trees className="w-3.5 h-3.5 text-[#0D5C2C]" />
          Passive Agro-Wealth Generation
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          Managed Commercial Farmlands in Hyderabad
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          Own appreciating freehold agricultural land with turnkey professional cultivation, automated drip irrigation, and a verified 50% harvest revenue sharing model.
        </p>
      </div>

      {/* Interactive Revenue Share Calculator */}
      <section className="space-y-4">
        <RevenueShareCalculator />
      </section>

      {/* Golden Farm Spotlight (Crisp White Card with Maroon Details) */}
      {goldenFarm && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white text-zinc-900 border border-amber-300/60 p-8 sm:p-12 shadow-2xl">
          <div className="lg:col-span-5 relative h-80 sm:h-[400px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200 shadow-md">
            <Image
              src={goldenFarm.heroImage}
              alt={goldenFarm.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                14.16 Acres Township
              </span>
              <h3 className="text-2xl font-serif font-black text-white">{goldenFarm.name}</h3>
              <p className="text-xs text-amber-100/90">{goldenFarm.location}</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Dharani Passbook Registered • 100% Tax-Free Income Under Sec 10(1)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#500208]">
              Sovereign Land Ownership Meets High-Yield Agroforestry
            </h2>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
              Situated in Kallepally near Shadnagar, Golden Farm brings together the finest traditions of agricultural stewardship and modern agro-engineering. Each parcel is partitioned into 2-Gunta, 3-Gunta, or 5-Gunta parcels with dedicated boundary fencing and drip irrigation lines.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-[#FFF9F2] border border-amber-200">
                <span className="text-zinc-500 block font-mono font-semibold">Available Parcels</span>
                <span className="font-bold text-zinc-900">2, 3, & 5 Guntas (242 - 605 yd²)</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-zinc-500 block font-mono font-semibold">Revenue Share</span>
                <span className="font-black text-emerald-800">50% Harvest Profit</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/projects/${goldenFarm.slug}`}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#500208] via-[#750A14] to-[#500208] text-white font-extrabold text-xs uppercase tracking-wider text-center transition-all shadow-md"
              >
                Inspect Golden Farm Master Layout →
              </Link>
              <a
                href={`https://wa.me/919959354255?text=${encodeURIComponent(
                  'Hello Aarna Infra Developers, please send the complete Golden Farm plantation schedule and revenue forecast document.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase tracking-wider border border-zinc-200 text-center transition-all"
              >
                Request Farm Prospectus on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {farmFeatures.map((feat, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white text-zinc-900 border border-amber-300/40 space-y-2 shadow-xl">
            <span className="text-emerald-700 font-serif font-black text-xl">0{idx + 1}.</span>
            <h3 className="font-serif font-bold text-[#500208] text-base">{feat.title}</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* Site Visit Booking */}
      <div className="max-w-4xl mx-auto">
        <LeadIntakeForm
          ventureSlug="golden-farm"
          ventureName="Golden Farm Managed Farmlands"
          source="Farmlands Showcase"
          title="Book Your Weekend Golden Farm Tour"
          subtitle="Experience the organic plantation, sample organic refreshments, and tour the clubhouse."
        />
      </div>
    </div>
  );
}
