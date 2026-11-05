import React from 'react';
import Image from 'next/image';
import ChannelPartnerForm from '@/components/ChannelPartnerForm';
import { ShieldCheck, Award, TrendingUp, Lock, Phone, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Channel Partner Statutory KYC Portal | Aarna Infra Developers',
  description:
    'Register as an institutional channel partner with Aarna Infra Developers. Highest commission slabs, DPDP Act 2023 compliant masked registration, and priority inventory access.',
};

export default function ChannelPartnerPage() {
  const partnerBenefits = [
    {
      title: 'Spot Commission Settlements',
      desc: 'Transparent 2% to 4% commission slabs disbursed within 48 hours of sale deed registration.',
    },
    {
      title: 'Priority Inventory Allocation',
      desc: 'Exclusive 72-hour pre-launch lock window on corner plots and commercial highway facings.',
    },
    {
      title: 'Dedicated Client Support Cabs',
      desc: 'Free luxury AC chauffeur vehicles dispatched for all qualified site visits to Shadnagar, Kadthal, and Balanagar.',
    },
    {
      title: 'Executive Sales Collateral',
      desc: 'White-labeled 4K drone walkthroughs, certified TSRERA sanction sets, and digital plot inventory engines.',
    },
  ];

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <Award className="w-3.5 h-3.5 text-[#0D5C2C]" />
          Institutional Channel Alliances
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          Aarna Sovereign Partner Network
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          Partner with Hyderabad premier clear-title plotted developer. Enjoy institutional backing, spot commission settlements, and complete DPDP-compliant statutory registration.
        </p>
      </div>

      {/* Official Scraped Channel Partner Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
        <Image
          src="/scraped/91_aarna-infra-developers-channel-partner-program.png"
          alt="Aarna Infra Developers Channel Partner Program"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#360005]/80 via-transparent to-transparent" />
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {partnerBenefits.map((b, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-[#0D0D14] border border-white/10 space-y-2">
            <span className="text-amber-400 font-serif font-bold text-lg">0{idx + 1}.</span>
            <h3 className="font-serif font-bold text-white text-base">{b.title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Statutory KYC Form (Prompt 14 & Component 6.4) */}
      <section className="max-w-4xl mx-auto space-y-4">
        <ChannelPartnerForm />
      </section>

      {/* Channel Desk Contact Banner */}
      <div className="rounded-3xl bg-[#100305] border border-amber-500/25 p-8 text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-xl font-serif font-bold text-white">Existing Partner Support</h3>
        <p className="text-xs text-zinc-400">
          For urgent inventory blocking, client cab bookings, or commission reconciliation, contact our VP of Channel Alliances directly.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono">
          <a
            href="tel:+917337317289"
            className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-white/10 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            Channel Desk: +91 73373 17289
          </a>
          <a
            href="https://wa.me/917337317289?text=Hello%20Aarna%20Channel%20Desk,%20I%20am%20a%20registered%20Channel%20Partner%20inquiring%20about%20plot%20inventory."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 flex items-center gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            WhatsApp Channel Lead
          </a>
        </div>
      </div>
    </div>
  );
}

