import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import { ShieldCheck, TrendingUp, FileText, Building, CheckCircle2, ArrowRight, Map, Compass } from 'lucide-react';

export const metadata = {
  title: 'Our Services & Statutory Planning | Aarna Infra Developers',
  description:
    'Comprehensive real estate advisory: HMDA Master Plan, Regional Ring Road (RRR), Property Appraisal, RERA Layout Approvals, 30-Year Legal Due Diligence, and Land Protection across Hyderabad.',
};

export default function ServicesPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#750A14]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#750A14]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#750A14]" />;
      default:
        return <Building className="w-6 h-6 text-[#750A14]" />;
    }
  };

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0D5C2C]" />
          End-to-End Governance Architecture
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          Services & Master Urban Planning
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          From the HMDA 2031 Master Plan and Regional Ring Road (RRR) corridor intelligence to algorithmic micro-market valuations, High Court title scrutinies, and drone-monitored boundary protection.
        </p>
      </div>

      {/* Official Scraped Real Estate Services Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
        <Image
          src="/scraped/82_aarna-infra-developers-real-estate-services.png"
          alt="Aarna Infra Developers Real Estate Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#360005]/80 via-transparent to-transparent" />
      </div>

      {/* Featured Service Navigation Cards: HMDA Master Plan & RRR (Matching Navbar) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* HMDA Master Plan Card */}
        <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/60 p-8 shadow-2xl flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center">
              <Map className="w-6 h-6 text-[#750A14]" />
            </div>
            <span className="text-xs font-mono font-bold text-[#750A14] uppercase tracking-wider block">
              Urban Planning Service
            </span>
            <h3 className="text-2xl font-serif font-black text-[#500208]">
              HMDA Master Plan 2031 Portal
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Explore the interactive deep-zoom vector directory across 30+ mandals (Bibinagar, Bommalaramaram, Bhongir, Chevella, Shadnagar, Kadthal). Verify statutory land-use zones (R1, R2, Commercial, Peri-Urban, and Green Belts) without heavy PDF downloads.
            </p>
          </div>

          <Link
            href="/hmda-master-plan"
            className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#500208] via-[#750A14] to-[#500208] hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-md shadow-maroon-900/20"
          >
            <span>Launch HMDA Master Plan Viewer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Regional Ring Road (RRR) Card */}
        <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/60 p-8 shadow-2xl flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center">
              <Compass className="w-6 h-6 text-[#750A14]" />
            </div>
            <span className="text-xs font-mono font-bold text-[#750A14] uppercase tracking-wider block">
              Corridor Intelligence
            </span>
            <h3 className="text-2xl font-serif font-black text-[#500208]">
              Regional Ring Road (RRR) Growth Vector
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Analyze the 340-kilometer, 4-lane expressway circumnavigating Hyderabad. Identify high-velocity plotted land corridors at Balanagar, Shadnagar, and Choutuppal entry nodes where institutional capital is multiplying at 25-35% annually.
            </p>
          </div>

          <Link
            href="/hmda-master-plan#rrr"
            className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#ECC872] to-[#D7AD55] hover:brightness-110 text-[#2A0407] font-extrabold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
          >
            <span>Inspect RRR Highway Alignment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* The 4 Core Service Pillars (Crisp Luxury White & Maroon) */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D5C2C]">
            Institutional Scrutiny
          </span>
          <h2 className="text-3xl font-serif font-black text-[#183323]">
            The 4 Sovereign Advisory Pillars
          </h2>
        </div>

        <div className="space-y-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-8 sm:p-10 shadow-2xl space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#750A14]">
                      {service.shortTag}
                    </span>
                    <h3 className="text-2xl font-serif font-black text-[#500208]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-600 bg-zinc-100 px-3.5 py-1.5 rounded-xl border border-zinc-200">
                  {service.statutoryBacking}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                {service.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono text-[#750A14] uppercase tracking-wider font-bold">
                  Key Deliverables & Documentation Provided:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {service.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF9F2] border border-amber-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-zinc-800 font-medium">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-100">
                <span className="text-xs text-zinc-500 font-sans">
                  Need specialized counsel for your existing land parcel or family trust?
                </span>

                <a
                  href={`https://wa.me/919959354255?text=${encodeURIComponent(
                    `Hello Aarna Infra Advisory Desk, I would like to consult on your service: ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#500208] via-[#750A14] to-[#500208] hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-md shadow-maroon-900/20"
                >
                  <span>{service.ctaText} via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Intake Form */}
      <div className="max-w-4xl mx-auto">
        <LeadIntakeForm
          source="Services Page"
          title="Request an Institutional Advisory Audit"
          subtitle="Our senior real estate legal counsel and valuation team will evaluate your requirements."
        />
      </div>
    </div>
  );
}
