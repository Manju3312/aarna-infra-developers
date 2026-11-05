import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, MapPin, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import AarnaLogo from '@/components/AarnaLogo';

export const metadata = {
  title: 'About Aarna Infra Developers | Founder Arjun Kommalapati',
  description:
    'Learn about Aarna Infra Developers, our 16+ years of real estate leadership under Arjun Kommalapati, our sovereign land curation standards, and our Madhapur, Hyderabad headquarters.',
};

export default function AboutPage() {
  const milestones = [
    {
      year: '2010',
      title: 'Inception of Real Estate Advisory',
      desc: 'Arjun Kommalapati initiates independent land advisory, focusing on title investigations and survey certifications along emerging highway vectors.',
    },
    {
      year: '2015',
      title: 'Expansion into Bangalore Highway (NH-44)',
      desc: 'Pioneered early gated plotted developments in Kothur and Shadnagar ahead of major industrial warehousing announcements.',
    },
    {
      year: '2020',
      title: 'Formalization of Aarna Infra Developers',
      desc: 'Established corporate headquarters at Kakatiya Hills, Madhapur, instituting our strict 30-year High Court title trace audit protocol.',
    },
    {
      year: '2024',
      title: 'Flagship Highway & Theme Townships',
      desc: 'Launched Golden Terra (HMDA & DTCP Approved beside Shadnagar Toll) and Magadha Theme Gated Community in Kadthal.',
    },
    {
      year: '2026',
      title: 'Sovereign Master Portfolio',
      desc: 'Over 5,000+ satisfied land investors, 7 master projects active across NH-44, Srisailam Future City corridor, and Kokapet Financial District.',
    },
  ];

  const values = [
    {
      title: '100% Clear-Title Guarantee',
      desc: 'We never market speculative or litigated parcels. Every survey number undergoes exhaustive 30-year link document tracing and court record checks.',
    },
    {
      title: 'Statutory Transparency',
      desc: 'From HMDA Final LP and DTCP sanctions to active TSRERA registration numbers, we publish all government approvals upfront.',
    },
    {
      title: 'Freehold Wealth Creation',
      desc: 'We prioritize tangible, inelastic land parcels with immediate Dharani electronic passbook mutation and spot registration.',
    },
    {
      title: 'Post-Sale Asset Stewardship',
      desc: 'Our relationship does not end at registration. We provide boundary maintenance, annual surveillance, and drone audits for our investors.',
    },
  ];

  return (
    <div className="space-y-20 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0D5C2C]" />
          Corporate Identity & Leadership
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          Architects of Generational Land Wealth
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          Aarna Infra Developers is built on the bedrock of uncompromising legal due diligence, sovereign title certainty, and deep market foresight across Hyderabad prime highway corridors.
        </p>
      </div>

      {/* Official Scraped "Who We Are" Heritage Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
        <Image
          src="/scraped/15_aarna-infra-developers-who-we-are.webp"
          alt="Aarna Infra Developers - Who We Are Heritage Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#360005]/80 via-transparent to-transparent" />
      </div>

      {/* Founder Spotlight Grid (Crisp White Card with Maroon & Gold Accent) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-8 sm:p-12 shadow-2xl">
        <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#183323] via-[#0E2016] to-[#08140E] border-2 border-[#D4AF37]/60 shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
          {/* Ambient Lighting */}
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#0D5C2C]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Centered Circular Portrait with Generous Top/Bottom Breathing Room */}
          <div className="relative pt-2 pb-4">
            {/* Outer 24K Gold Ring */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full p-1.5 bg-gradient-to-tr from-[#D4AF37] via-[#FFF2B2] to-[#AA8818] shadow-[0_12px_40px_rgba(212,175,55,0.3)] flex items-center justify-center">
              {/* Inner Frame */}
              <div className="w-full h-full rounded-full p-1 bg-[#183323] overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/arjun-kommalapati-clean-circle.webp"
                  alt="Arjun Kommalapati, Founder & Managing Director"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Founder Designation & Details */}
          <div className="space-y-1.5 relative z-10 w-full pt-2">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#D9FBE0] uppercase px-3.5 py-1 rounded-full bg-white/10 border border-white/15 inline-block">
              Founder & Managing Director
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-wide">
              Arjun Kommalapati
            </h3>
            <p className="text-xs text-emerald-100/90 font-mono">
              16+ Years Real Estate Industry Veteran
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#750A14] text-xs font-mono font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>16+ Years Real Estate Track Record</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#500208]">
            &ldquo;We don&apos;t just sell plots; we safeguard our clients&apos; life savings.&rdquo;
          </h2>

          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
            Over the course of 16+ years in Telangana real estate, Founder Arjun Kommalapati observed a fundamental void in the plotted land market: buyers were forced to gamble on ambiguous revenue titles, unapproved panchayat layouts, and delayed infrastructure delivery.
          </p>

          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
            Aarna Infra Developers was founded to correct this. By implementing an institutional vetting model where no parcel is acquired without 30 years of certified link documents, complete NALA conversion clearance, and official HMDA/DTCP technical permissions, Aarna has earned the trust of over 5,000 domestic families and international NRI investors across North America, the Middle East, and Europe.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-zinc-200 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#FFF9F2] border border-amber-200">
              <span className="text-zinc-500 block">Personal Track Record</span>
              <span className="text-[#750A14] font-black text-sm">16+ Years (Since 2010)</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-zinc-500 block">Acquisition Standard</span>
              <span className="text-emerald-800 font-black text-sm">100% Zero-Litigation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values (Crisp White Cards) */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D5C2C]">
            Guiding Philosophy
          </span>
          <h2 className="text-3xl font-serif font-black text-[#183323]">Our Core Commitments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white text-zinc-900 border border-amber-300/40 space-y-3 shadow-xl">
              <span className="text-[#750A14] font-serif font-black text-2xl block">0{i + 1}</span>
              <h3 className="font-serif font-bold text-lg text-[#500208]">{v.title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Timeline (Maroon & White) */}
      <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-8 sm:p-12 space-y-8 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#750A14]">
            Journey of Trust
          </span>
          <h2 className="text-3xl font-serif font-black text-[#500208]">
            16-Year Strategic Milestone Journey
          </h2>
        </div>

        <div className="space-y-6 pt-4">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pb-6 border-b border-zinc-100 last:border-b-0"
            >
              <div className="w-24 shrink-0 font-serif font-black text-2xl text-[#750A14] font-mono">
                {m.year}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-base text-[#500208]">{m.title}</h3>
                <p className="text-xs text-zinc-600">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate HQ Card */}
      <div className="rounded-3xl bg-gradient-to-r from-[#4D0007] via-[#65080F] to-[#380004] border border-amber-400/40 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-white shadow-2xl">
        <div className="space-y-4 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-widest font-bold">
            <MapPin className="w-4 h-4" />
            Corporate Headquarters
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
            Visit Us in Kakatiya Hills, Madhapur
          </h2>
          <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
            <strong>Aarna Infra Developers</strong><br />
            #101, Road No: 10, Kakatiya Hills, Madhapur, Hyderabad – 500081, Telangana, India.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-amber-200">
            <span>Direct: +91 99593 54255</span>
            <span>Hotline: +91 73373 17289</span>
            <span>Email: info@aarnainfradevelopers.com</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ECC872] to-[#D7AD55] text-[#2A0407] font-extrabold text-xs uppercase tracking-wider text-center transition-all shadow-md"
          >
            Schedule Office Consultation
          </Link>
          <a
            href="https://maps.google.com/?q=Kakatiya+Hills+Madhapur+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-white text-[#500208] hover:bg-zinc-100 font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md"
          >
            Google Maps Directions
          </a>
        </div>
      </div>
    </div>
  );
}
