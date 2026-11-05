import React from 'react';
import Link from 'next/link';
import { getProjectsByCategory } from '@/data/projects';
import VentureCard from '@/components/VentureCard';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Residential Open Plots in Hyderabad | HMDA & DTCP Approved | Aarna Infra',
  description:
    'Explore sovereign residential open plots along NH-44 Bangalore Highway, Srisailam Highway, and Mumbai Highway. HMDA & DTCP sanctioned, TSRERA registered.',
};

export default function OpenPlotsPage() {
  const openPlotProjects = getProjectsByCategory('openplots');

  const advantages = [
    {
      title: 'Zero Structural Depreciation',
      desc: 'Unlike apartments that suffer age-related decay, 100% of your capital is parked in appreciating land.',
    },
    {
      title: 'Immediate Spot Registration',
      desc: 'Executed seamlessly with registered sale deed and prompt mutation in Dharani electronic passbook records.',
    },
    {
      title: 'HMDA & DTCP Sanctions',
      desc: '100% of internal blacktop or CC roads, water pipelines, and electrical transformers are sanctioned by statutory authorities.',
    },
    {
      title: 'Major Bank Loan Approvals',
      desc: 'Approved for competitive home and plot loans up to 75% from leading institutions including HDFC, SBI, and ICICI.',
    },
  ];

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0D5C2C]" />
          Sovereign Plotted Communities
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          Residential Open Plots & Villa Lands in Hyderabad
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          Curated highway corridor plots along NH-44 Bangalore Highway, Srisailam Highway, and Mumbai Highway (NH-65) with 100% clear titles and final government approvals.
        </p>
      </div>

      {/* Advantage Highlights (Crisp White Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {advantages.map((adv, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white text-zinc-900 border border-amber-300/40 space-y-2 shadow-xl">
            <span className="text-[#750A14] font-serif font-black text-xl">0{idx + 1}.</span>
            <h3 className="font-serif font-bold text-[#500208] text-base">{adv.title}</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans">{adv.desc}</p>
          </div>
        ))}
      </div>

      {/* Verified Open Plot Ventures */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-amber-300 uppercase tracking-wider block font-bold">
              Active Plotted Developments
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
              Featured Highway Plotted Layouts
            </h2>
          </div>
          <span className="text-xs font-mono text-amber-200/80">
            Showing {openPlotProjects.length} Verified Layouts
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {openPlotProjects.map((project) => (
            <VentureCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Site Visit Intake CTA */}
      <div className="max-w-4xl mx-auto">
        <LeadIntakeForm
          source="Open Plots Guide"
          title="Schedule an Express Site Visit to Our Highway Layouts"
          subtitle="Chauffeured luxury AC cab pickup and drop included."
        />
      </div>
    </div>
  );
}
