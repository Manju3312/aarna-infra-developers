'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import { SERVICES } from '@/data/services';
import VentureCard from '@/components/VentureCard';
import CorridorQuickSearch from '@/components/CorridorQuickSearch';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import {
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Compass,
  ArrowRight,
  Phone,
  FileCheck,
  Building2,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Star,
  Quote,
  CheckCircle2,
  Landmark,
  MapPin,
  Download,
  ExternalLink,
} from 'lucide-react';

export default function HomePage() {
  const [selectedCorridor, setSelectedCorridor] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCorridor =
        selectedCorridor === 'ALL' ||
        p.corridor.toLowerCase().includes(selectedCorridor.toLowerCase());
      const matchCat =
        selectedCategory === 'ALL' || p.categoryType === selectedCategory;
      return matchCorridor && matchCat;
    });
  }, [selectedCorridor, selectedCategory]);

  const testimonials = [
    {
      name: 'Dr. Suresh Varma, M.D.',
      role: 'Consultant Cardiologist & NRI Investor (Dallas, USA)',
      venture: 'Golden Terra (Shadnagar Tollgate)',
      content:
        'Being based in the US, my primary concern with Indian open plot investments has always been title integrity. Arjun Kommalapati provided the unbroken 30-year link report and HMDA Final LP documents upfront. The spot registration and instant Dharani mutation gave my family absolute peace of mind.',
      rating: 5,
    },
    {
      name: 'Radhika & Venkat Chari',
      role: 'Principal Software Architect, Microsoft IDC',
      venture: 'Green Meadows (RRR Junction Node)',
      content:
        'We booked two 300 Sq. Yd plots at Green Meadows right on the Regional Ring Road node in Balanagar. The 80-foot CC roads, underground electricity, and rapid construction progress are remarkable. Our capital has already appreciated by 35% in 18 months.',
      rating: 5,
    },
    {
      name: 'K. Rajeshwar Rao',
      role: 'Managing Director, Sri Krishna Agro Exports',
      venture: 'Golden Farm (Managed Commercial Farmlands)',
      content:
        'Golden Farm is the smartest tax-free passive wealth model in Telangana. 5 Guntas with African Mahogany and Hass Avocado trees managed entirely by Aarna agronomists. We spend our weekends at the clubhouse pool while the plantation compounds.',
      rating: 5,
    },
    {
      name: 'Lt. Col. Anirudh Sharma (Retd.)',
      role: 'Defense Services Veteran',
      venture: 'Srinivasam (Future City Kadthal)',
      content:
        'Zero disputes, DTCP sanctioned, and perfectly positioned behind Kadthal Police Station. The proximity to Telangana Future City makes Srinivasam our family crown jewel asset. Aarna Infra transparency is unmatched.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: 'Why are open plots on NH-44 (Bangalore Highway) considered the safest long-term land investment?',
      a: 'The Bangalore National Highway (NH-44) is the primary north-south arterial freight corridor. Flanked by Amazon Fulfillment Centers, Symbiosis International University, Procter & Gamble, and the upcoming 340-km Regional Ring Road (RRR) junction at Balanagar/Shadnagar, NH-44 land values have demonstrated consistent 18-24% annual appreciation with zero holding costs.',
    },
    {
      q: 'How does Aarna Infra Developers guarantee zero litigation and clear titles?',
      a: 'Led by Founder & Managing Director Arjun Kommalapati with 16+ years of real estate diligence, our High Court legal panel conducts an unbroken 30-year title flow search, validates NALA conversion orders, checks SRO Encumbrance Certificates (Form 15), and verifies final technical LP sanctions from HMDA or DTCP before any land acquisition.',
    },
    {
      q: 'What is the 50% harvest revenue sharing model in Golden Farm?',
      a: 'Golden Farm parcels (2, 3, and 5 Guntas) are deeded with 100% freehold ownership and electronic Dharani Passbooks. Our in-house agricultural agronomists plant and maintain high-value African Mahogany, Agarwood (Oud), and Hass Avocado. Upon annual fruit harvests and decadal timber maturity, investors receive 50% of commercial revenue, completely tax-free under Section 10(1) of the Income Tax Act.',
    },
    {
      q: 'What approvals do Golden Terra and Green Meadows possess?',
      a: 'Golden Terra holds dual statutory approvals: HMDA Final LP No. 0466/HMDA/SWDL/2025 and DTCP LP No. 74/2023/HRO/H1, registered with TSRERA under P02400010212. Green Meadows holds DTCP LP No. LP/GP/204883/0017/2024 and TSRERA No. P01400008728.',
    },
    {
      q: 'How can I schedule a VIP site visit to inspect the layouts?',
      a: 'You can submit an inquiry through our site visit form, or connect directly on WhatsApp at +91 99593 54255. We provide chauffeured luxury AC cab pickups directly from your residence or corporate office, seven days a week.',
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20 overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION: ₹100 CR INSTITUTIONAL POWERHOUSE ARCHITECTURE
         ========================================================================= */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          
          {/* Institutional Statutory Verification Pill */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#BDE8C7] text-[#0D5C2C] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider sm:tracking-widest shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#0D5C2C] animate-pulse" />
            <ShieldCheck className="w-4 h-4 text-[#0D5C2C] shrink-0" />
            <span>TELANGANA’S PREMIER LAND BANK DEVELOPER • 16+ YEARS TRACK RECORD</span>
          </div>

          {/* Unified Majestic Corporate Headline (No awkward split colors) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-[#183323] max-w-5xl leading-[1.12]">
            Curating Generational Wealth Across{' '}
            <span className="text-[#800000] relative inline-block">
              Sovereign Highway Corridors
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#800000] to-[#D4AF37] rounded-full opacity-70" />
            </span>
          </h1>

          {/* Institutional Subtitle with Strategic Corridors */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-700 max-w-3xl leading-relaxed font-sans">
            Institutional-grade residential open plots, high-yield managed commercial farmlands, and luxury gated communities along{' '}
            <strong className="text-[#183323] font-bold">NH-44 Bangalore Highway</strong>,{' '}
            <strong className="text-[#183323] font-bold">Telangana Future City Corridor</strong>, and the{' '}
            <strong className="text-[#183323] font-bold">Regional Ring Road (RRR)</strong>.
          </p>

          {/* Prestige Corporate Motto */}
          <div className="flex items-center justify-center gap-3 text-xs font-serif font-bold tracking-widest text-[#800000] uppercase">
            <span className="w-6 sm:w-12 h-px bg-[#D4AF37]/60" />
            <span>❖ Building Dreams • Delivering Excellence ❖</span>
            <span className="w-6 sm:w-12 h-px bg-[#D4AF37]/60" />
          </div>

          {/* Executive Action Suite (High-Conversion CTAs) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#800000] hover:bg-[#600000] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-xl shadow-maroon-900/25 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore 7 Master Ventures</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/hmda-master-plan"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-[#183323] hover:bg-[#D9FBE0] font-extrabold text-xs tracking-wider uppercase border border-[#BDE8C7] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#800000]" />
              <span>HMDA 2031 & RRR Dossier</span>
            </Link>

            <a
              href="https://wa.me/919959354255?text=Hello%20Aarna%20Infra,%20I%20would%20like%20to%20schedule%20an%20exclusive%20VIP%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#D9FBE0] hover:bg-[#c7f4d0] text-[#0D5C2C] font-extrabold text-xs tracking-wider uppercase border border-[#BDE8C7] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#800000]" />
              <span>Book VIP Cab Visit (+91 99593 54255)</span>
            </a>
          </div>

          {/* =========================================================================
              FLAGSHIP VENTURE EXECUTIVE SPOTLIGHT (₹100 Cr Signature Feature)
             ========================================================================= */}
          <div className="w-full pt-4">
            <div className="rounded-3xl bg-white border border-[#BDE8C7] shadow-xl overflow-hidden text-left grid grid-cols-1 lg:grid-cols-12">
              {/* Left Photo Showcase */}
              <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] overflow-hidden group">
                <Image
                  src="/scraped/03_Residential-Open-Plots.webp"
                  alt="Aarna Infra Flagship Plotted Community NH-44"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Live Verification Badge */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#800000] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                    ★ Flagship Master Venture
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#D9FBE0] text-[#0D5C2C] border border-[#BDE8C7] text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                    HMDA & TSRERA Approved
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono text-[#D9FBE0] tracking-wider uppercase block">
                    Bangalore Highway (NH-44) Arterial Node
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-white">
                    Golden Terra (Shadnagar Tollgate)
                  </h3>
                  <p className="text-xs text-zinc-200 line-clamp-1 mt-0.5">
                    Opposite Toll Plaza • 100% Clear Title • Instant Dharani Mutation • Bank Loan Sanctioned
                  </p>
                </div>
              </div>

              {/* Right Executive Details */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4 bg-gradient-to-br from-white via-[#FAFCFA] to-[#F2FAF4]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#800000] uppercase tracking-wider">
                      Statutory Approvals
                    </span>
                    <span className="text-xs font-bold text-[#0D5C2C] bg-[#D9FBE0] px-2.5 py-0.5 rounded-full border border-[#BDE8C7]">
                      Spot Registration
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-700 font-sans">
                    <div className="flex items-center justify-between pb-1.5 border-b border-zinc-100">
                      <span className="text-zinc-500">HMDA Final LP:</span>
                      <span className="font-mono font-bold text-[#183323]">0466/HMDA/SWDL/2025</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-zinc-100">
                      <span className="text-zinc-500">TSRERA Number:</span>
                      <span className="font-mono font-bold text-[#183323]">P02400010212</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-zinc-100">
                      <span className="text-zinc-500">Plot Dimensions:</span>
                      <span className="font-bold text-[#183323]">165, 200, 300, 500 Sq. Yds</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-zinc-100">
                      <span className="text-zinc-500">Transit Access:</span>
                      <span className="font-bold text-[#183323]">20 Mins from RGIA Airport</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">Starting Price:</span>
                      <span className="font-serif font-black text-base text-[#800000]">₹18,500 / Sq. Yd</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <Link
                    href="/projects/golden-terra"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#800000] hover:bg-[#600000] text-white text-xs font-extrabold uppercase tracking-wider text-center transition-all shadow-md"
                  >
                    View Layout Plan
                  </Link>
                  <a
                    href="https://wa.me/919959354255?text=Hello%20Aarna%20Infra,%20please%20send%20me%20the%20pricing%20sheet%20for%20Golden%20Terra."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#D9FBE0] hover:bg-[#c7f4d0] text-[#0D5C2C] text-xs font-bold uppercase tracking-wider text-center border border-[#BDE8C7] transition-all"
                  >
                    Get Cost Sheet
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              GOVERNMENT STATUTORY & BANKING TRUST SEALS
             ========================================================================= */}
          <div className="w-full pt-2">
            <div className="py-3 px-6 rounded-2xl bg-white/80 backdrop-blur-md border border-[#BDE8C7] shadow-sm flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] sm:text-xs font-mono font-bold text-zinc-700">
              <span className="flex items-center gap-1.5 text-[#0D5C2C]">
                <CheckCircle2 className="w-4 h-4 text-[#0D5C2C]" />
                HMDA Approved LP
              </span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="flex items-center gap-1.5 text-[#0D5C2C]">
                <CheckCircle2 className="w-4 h-4 text-[#0D5C2C]" />
                DTCP Sanctioned
              </span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="flex items-center gap-1.5 text-[#0D5C2C]">
                <CheckCircle2 className="w-4 h-4 text-[#0D5C2C]" />
                TSRERA Certified
              </span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="flex items-center gap-1.5 text-[#800000]">
                <Landmark className="w-4 h-4 text-[#800000]" />
                SBI & HDFC Home Loans
              </span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="flex items-center gap-1.5 text-[#0D5C2C]">
                <CheckCircle2 className="w-4 h-4 text-[#0D5C2C]" />
                Instant Dharani Mutation
              </span>
            </div>
          </div>

          {/* =========================================================================
              INSTITUTIONAL METRICS BOARD (The ₹100 Cr Firm Benchmark)
             ========================================================================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-4 text-left">
            <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-[#BDE8C7] shadow-md space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-black text-[#800000]">16+ Years</span>
              <p className="text-xs text-zinc-600 font-sans font-medium">Sovereign Leadership by Arjun Kommalapati</p>
            </div>

            <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-[#BDE8C7] shadow-md space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-black text-[#0D5C2C]">100%</span>
              <p className="text-xs text-zinc-600 font-sans font-medium">30-Year High Court Certified Clear Titles</p>
            </div>

            <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-[#BDE8C7] shadow-md space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-black text-[#800000]">3,500+</span>
              <p className="text-xs text-zinc-600 font-sans font-medium">Registered HNI Landowners & NRI Families</p>
            </div>

            <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-[#BDE8C7] shadow-md space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-black text-[#0D5C2C]">7 Ventures</span>
              <p className="text-xs text-zinc-600 font-sans font-medium">Placed on NH-44, RRR & Future City</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CORRIDOR QUICK SEARCH & INTERACTIVE VENTURE CATALOG
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0D5C2C] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Sovereign Venture Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#183323]">
              7 Institutional Master Ventures
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-xl">
              All projects backed by statutory HMDA Final LP, DTCP Technical Permissions, or Dharani Passbooks with 100% clear titles.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-xs font-bold text-[#800000] hover:text-[#500208] flex items-center gap-1 group font-mono"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Quick Search Filtering Controls */}
        <CorridorQuickSearch
          selectedCorridor={selectedCorridor}
          onSelectCorridor={setSelectedCorridor}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Ventures Grid (Crisp White Luxury Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <VentureCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 rounded-3xl bg-white text-zinc-600 border border-amber-300/50">
            No ventures match your filter combination. Reset your filters to explore all 7 projects.
          </div>
        )}
      </section>

      {/* =========================================================================
          3. THE 4 SOVEREIGN SERVICE PILLARS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D5C2C]">
            Institutional Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#183323]">
            The 4 Core Real Estate Pillars
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Every land acquisition through Aarna Infra is protected by our four-tier legal and operational governance architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-3xl bg-white text-zinc-900 border border-[#BDE8C7] hover:border-[#800000] transition-all space-y-4 flex flex-col justify-between group shadow-md hover:shadow-xl"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0D5C2C] px-2.5 py-1 rounded-md bg-[#D9FBE0] border border-[#BDE8C7] inline-block">
                  {pillar.shortTag}
                </span>

                <h3 className="font-serif font-black text-lg text-[#183323] group-hover:text-[#800000] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {pillar.description.slice(0, 145)}...
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-zinc-100 text-[11px] text-zinc-700">
                  {pillar.deliverables.slice(0, 2).map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#800000] font-bold">✓</span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <Link
                  href="/services"
                  className="text-xs font-mono font-bold text-[#800000] hover:text-[#500208] flex items-center justify-between group/link"
                >
                  <span>{pillar.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. TRANSIT VELOCITY & CORRIDOR DYNAMICS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#183323] via-[#244633] to-[#12281B] border border-emerald-500/30 p-8 sm:p-12 shadow-2xl space-y-8 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#D9FBE0] uppercase">
                Hyper-Growth Nodes
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-1">
                Prime Arterial Expressway Transit Velocity
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 max-w-xl">
                Real estate value is measured in minutes, not kilometers. Experience frictionless high-speed access to every economic growth cluster.
              </p>
            </div>

            <Link
              href="/hmda-master-plan"
              className="px-6 py-3.5 rounded-full bg-[#D9FBE0] hover:bg-white text-[#183323] font-extrabold text-xs uppercase tracking-wider transition-all self-start lg:self-center flex items-center gap-2 shadow-lg"
            >
              <span>Explore HMDA 2031 Interactive Portal</span>
              <ArrowRight className="w-4 h-4 text-[#800000]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
              <span className="text-emerald-200 font-mono">RGIA Airport</span>
              <span className="block text-xl font-bold font-serif text-white">20 Minutes</span>
              <span className="text-[10px] text-[#D9FBE0]">Direct via 6-Lane NH-44</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
              <span className="text-emerald-200 font-mono">Financial District</span>
              <span className="block text-xl font-bold font-serif text-white">28 Minutes</span>
              <span className="text-[10px] text-[#D9FBE0]">Via ORR Exit 1 & 16</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
              <span className="text-emerald-200 font-mono">Regional Ring Road (RRR)</span>
              <span className="block text-xl font-bold font-serif text-white">3 Minutes</span>
              <span className="text-[10px] text-[#D9FBE0]">Immediate Entry Ramp</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-1">
              <span className="text-emerald-200 font-mono">Telangana Future City</span>
              <span className="block text-xl font-bold font-serif text-white">12 Minutes</span>
              <span className="text-[10px] text-[#D9FBE0]">Direct Radial Alignment</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FOUNDER & MANAGING DIRECTOR SOVEREIGN SPOTLIGHT
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white text-zinc-900 border border-[#BDE8C7] p-8 sm:p-12 shadow-xl">
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold">
              <Award className="w-3.5 h-3.5 text-[#0D5C2C]" />
              <span>Executive Leadership Statement</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#183323] leading-snug">
              &ldquo;In land investment, legal purity and title certainty are non-negotiable.&rdquo;
            </h2>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
              When I established Aarna Infra Developers, my vision was singular: to liberate land investors from the uncertainty and hidden risks that too often characterize the Indian real estate landscape. 
            </p>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
              Every acre we develop undergoes exhaustive 30-year link document scrutiny by Senior High Court Advocates. We only market projects that hold final HMDA, DTCP, and TSRERA clearances. When you acquire a plot with Aarna Infra, you are securing an institutional family asset meant to compound for generations.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-full bg-[#800000] hover:bg-[#600000] text-white font-bold text-xs uppercase tracking-wider transition-all text-center shadow-md cursor-pointer"
              >
                Read Full Leadership Story
              </Link>
              <a
                href="https://wa.me/919959354255?text=Hello%20Arjun%20Kommalapati,%20I%20would%20like%20to%20consult%20directly%20regarding%20land%20investment."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#D9FBE0] text-[#0D5C2C] border border-[#BDE8C7] hover:bg-emerald-100 font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-sm"
              >
                Consult Founder Desk on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. VERIFIED INVESTOR TESTIMONIALS
         ========================================================================= */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D5C2C]">
            Verified Investor Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#183323]">
            Client Testimonials & Experiences
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Read first-hand accounts from doctors, corporate executives, and overseas NRIs who entrusted their land capital to Aarna Infra Developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white text-zinc-900 border border-[#BDE8C7] p-6 sm:p-8 space-y-4 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-emerald-100" />
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#183323]">{t.name}</h4>
                  <p className="text-[11px] text-zinc-500">{t.role}</p>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#D9FBE0] text-[#0D5C2C] border border-[#BDE8C7]">
                  {t.venture}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. FREQUENTLY ASKED QUESTIONS
         ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D5C2C]">
            Clarity & Transparency
          </span>
          <h2 className="text-3xl font-serif font-black text-[#183323]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-zinc-600">
            Clear answers to help you make informed statutory land investment decisions.
          </p>
        </div>

        <div className="space-y-3 pt-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white text-zinc-900 border border-[#BDE8C7] overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-serif font-bold text-sm sm:text-base text-[#183323]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#800000] shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          8. LEAD INTAKE FUNNEL
         ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadIntakeForm
          source="Homepage Hero Funnel"
          title="Schedule Your Chauffeured VIP Site Visit"
          subtitle="Complimentary AC cab pickup & drop from your residence or corporate office."
        />
      </section>
    </div>
  );
}
