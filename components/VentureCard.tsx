'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectItem } from '@/types';
import { ShieldCheck, MapPin, ArrowRight, Compass, Download } from 'lucide-react';

export default function VentureCard({
  project,
}: {
  project: ProjectItem;
}) {
  return (
    <div className="group relative rounded-3xl bg-white border border-[#BDE8C7] hover:border-[#800000] transition-all duration-300 flex flex-col overflow-hidden shadow-md hover:shadow-2xl">
      {/* Venture Hero Image & Badges */}
      <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#D9FBE0]/95 backdrop-blur-md text-[#0D5C2C] border border-[#BDE8C7] shadow-sm">
            {project.category}
          </span>

          {project.approvals.tsreraNo && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-white/90 backdrop-blur-md text-[#0D5C2C] border border-[#BDE8C7] flex items-center gap-1 shadow-sm">
              <ShieldCheck className="w-3 h-3 text-[#0D5C2C]" />
              RERA: {project.approvals.tsreraNo}
            </span>
          )}
        </div>

        {/* Bottom image overlay stats */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-100 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
            <Compass className="w-3.5 h-3.5 text-[#D9FBE0]" />
            {project.corridor}
          </span>
          {project.listedRate && (
            <span className="text-xs font-bold text-white bg-[#800000] backdrop-blur-sm px-2.5 py-1 rounded-md border border-amber-300/40 shadow-sm">
              {project.listedRate}
            </span>
          )}
        </div>
      </div>

      {/* Card Content (Crisp Luxury White & Mint Theme) */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-white text-zinc-900">
        <div className="space-y-3">
          <div>
            <h3 className="font-serif font-black text-xl sm:text-2xl text-[#183323] group-hover:text-[#800000] transition-colors leading-tight">
              {project.name}
            </h3>
            <p className="text-xs text-[#800000] font-semibold mt-0.5">{project.tagline}</p>
          </div>

          <p className="text-xs text-zinc-600 flex items-start gap-1.5 line-clamp-2">
            <MapPin className="w-3.5 h-3.5 text-[#800000] shrink-0 mt-0.5" />
            <span>{project.location}</span>
          </p>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-100 text-[11px]">
            <div className="p-2.5 rounded-xl bg-[#EAF7EE] border border-[#BDE8C7]">
              <span className="text-zinc-500 block font-mono text-[10px]">Plot Extents</span>
              <span className="font-bold text-zinc-900">{project.plotSizes}</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#EAF7EE] border border-[#BDE8C7]">
              <span className="text-zinc-500 block font-mono text-[10px]">Statutory Sanction</span>
              <span className="font-bold text-[#800000] truncate block">
                {project.approvals.hmdaLp ? `HMDA: ${project.approvals.hmdaLp}` : project.approvals.dtcpLp ? `DTCP: ${project.approvals.dtcpLp}` : 'Clear Title'}
              </span>
            </div>
          </div>

          {/* Highlights pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.highlights.slice(0, 2).map((hl, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#D9FBE0]/60 text-[#0D5C2C] font-medium border border-[#BDE8C7]"
              >
                ✓ {hl}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Maroon Primary & WhatsApp Green */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 py-3 px-4 rounded-xl bg-[#800000] hover:bg-[#600000] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 group/btn shadow-md shadow-maroon-900/20"
          >
            <span>Explore Layout & Master Plan</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`https://wa.me/919959354255?text=${encodeURIComponent(
              `Hello Aarna Infra Developers, please share the official PDF brochure and price sheet for ${project.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#D9FBE0] hover:bg-[#25D366] border border-[#BDE8C7] hover:border-emerald-500 text-[#0D5C2C] hover:text-white transition-all shadow-sm"
            title="Download Brochure via WhatsApp"
            aria-label="Download Brochure"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
