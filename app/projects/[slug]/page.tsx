import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS, getProjectBySlug } from '@/data/projects';
import InteractivePlotMasterPlan from '@/components/InteractivePlotMasterPlan';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import {
  ShieldCheck,
  MapPin,
  Compass,
  CheckCircle2,
  Download,
  Phone,
  ArrowLeft,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found | Aarna Infra Developers' };
  }

  return {
    title: `${project.name} | Verified Plots in ${project.location} | Aarna Infra Developers`,
    description: `${project.name} - ${project.tagline}. Approved: ${project.approvals.status}. TSRERA: ${project.approvals.tsreraNo || 'Clear Title'}. ${project.plotSizes}.`,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-16 py-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0D5C2C] hover:text-[#800000] font-bold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Master Projects</span>
        </Link>
      </div>

      {/* Hero Banner Section */}
      <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-amber-400/40 shadow-2xl">
        <div className="relative h-96 sm:h-[480px] w-full">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#200003] via-black/30 to-black/70" />

          {/* Top Statutory Badges */}
          <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#500208]/90 backdrop-blur-md text-amber-300 border border-amber-400/50 shadow-md">
              {project.category}
            </span>

            {project.approvals.tsreraNo ? (
              <a
                href="https://rera.telangana.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-950/90 backdrop-blur-md text-emerald-300 border border-emerald-500/50 hover:bg-emerald-900 flex items-center gap-1.5 transition-colors shadow-md"
                title="Verify on Telangana RERA Portal"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>TSRERA Certified: {project.approvals.tsreraNo}</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-75" />
              </a>
            ) : (
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white/90 backdrop-blur-md text-[#500208] border border-amber-300 shadow-md">
                100% Freehold Title
              </span>
            )}
          </div>

          {/* Bottom Title & Location */}
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold">
              <Compass className="w-4 h-4" />
              <span>{project.corridor}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black text-white">
              {project.name}
            </h1>
            <p className="text-xs sm:text-sm text-amber-100/90 max-w-2xl flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
              <span>{project.location}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Quick Summary Grid (Crisp White Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
        <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-amber-300/50 shadow-xl space-y-1">
          <span className="text-zinc-500 font-mono block font-bold">Statutory Approvals</span>
          <span className="font-serif font-black text-[#750A14] block text-sm">
            {project.approvals.hmdaLp ? `HMDA: ${project.approvals.hmdaLp}` : project.approvals.dtcpLp ? `DTCP: ${project.approvals.dtcpLp}` : 'Freehold Land'}
          </span>
          <span className="text-[10px] text-zinc-500 block">{project.approvals.status}</span>
        </div>

        <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-amber-300/50 shadow-xl space-y-1">
          <span className="text-zinc-500 font-mono block font-bold">Plot Sizes & Extents</span>
          <span className="font-black text-zinc-900 block text-sm">{project.plotSizes}</span>
          <span className="text-[10px] text-zinc-500 block">Immediate Spot Registration</span>
        </div>

        <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-amber-300/50 shadow-xl space-y-1">
          <span className="text-zinc-500 font-mono block font-bold">Listed Pricing</span>
          <span className="font-serif font-black text-[#500208] block text-sm">
            {project.listedRate || 'Price on Request'}
          </span>
          <span className="text-[10px] text-zinc-500 block">Bank Loan Eligible</span>
        </div>

        <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-amber-300/50 shadow-xl space-y-1">
          <span className="text-zinc-500 font-mono block font-bold">Road Network</span>
          <span className="font-black text-zinc-900 block text-sm">
            {project.roadWidths || '100ft & 40ft Master Roads'}
          </span>
          <span className="text-[10px] text-zinc-500 block">Underground Conduits</span>
        </div>
      </div>

      {/* Interactive Vector Master Plan (Prompt 6.2 Component) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-300 uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Master Plan Engine
        </div>
        <InteractivePlotMasterPlan ventureName={project.name} plots={project.plots} />
      </section>

      {/* Narrative & Key Highlights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Description & Infrastructure (Crisp Luxury White) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Detailed Narrative */}
          <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-6 sm:p-9 space-y-4 shadow-xl">
            <h3 className="text-2xl font-serif font-black text-[#500208]">Venture Overview & Investment Thesis</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
              {project.description}
            </p>

            {project.plantations && (
              <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider block">
                  Commercial Agro-Plantation Model
                </span>
                <p className="text-xs text-zinc-700">{project.plantations}</p>
              </div>
            )}
          </div>

          {/* Infrastructure Specifications */}
          <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-6 sm:p-9 space-y-4 shadow-xl">
            <h3 className="text-2xl font-serif font-black text-[#500208]">Development Infrastructure</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {project.keyInfrastructure.map((infra, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF9F2] border border-amber-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#750A14] shrink-0 mt-0.5" />
                  <span className="text-zinc-800 font-medium">{infra}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lifestyle Amenities */}
          <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-6 sm:p-9 space-y-4 shadow-xl">
            <h3 className="text-2xl font-serif font-black text-[#500208]">Exclusive Township Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {project.amenities.map((amenity, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 text-center font-semibold">
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Instant WhatsApp Gate & Site Visit Intake */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick WhatsApp Brochure Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#4D0007] via-[#65080F] to-[#380004] border border-amber-400/40 p-6 space-y-4 shadow-xl text-white">
            <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block">
              Official Documentation
            </span>
            <h4 className="text-xl font-serif font-black text-white">
              Download Verified Brochure & Price Sheet
            </h4>
            <p className="text-xs text-amber-100/80 leading-relaxed font-sans">
              Receive the complete high-resolution layout map, government sanction letters, and payment schedule instantly on WhatsApp.
            </p>

            <a
              href={`https://wa.me/919959354255?text=${encodeURIComponent(
                `Hello Aarna Infra Developers, please send the official PDF brochure and price breakdown for ${project.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Get Brochure on WhatsApp</span>
            </a>

            <div className="pt-2 text-center">
              <a
                href="tel:+919959354255"
                className="text-[11px] font-mono text-amber-200 hover:text-white inline-flex items-center gap-1 font-semibold"
              >
                <Phone className="w-3 h-3 text-amber-300" />
                Or call sales hotline: +91 99593 54255
              </a>
            </div>
          </div>

          {/* On-Page Site Visit Booking Form */}
          <LeadIntakeForm
            ventureSlug={project.slug}
            ventureName={project.name}
            source={`Venture Detail: ${project.name}`}
            title={`Schedule Site Visit for ${project.name}`}
            subtitle="Chauffeured pickup and drop from your residence anywhere in Hyderabad."
          />
        </div>
      </div>
    </div>
  );
}
