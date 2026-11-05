'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { JOB_OPENINGS } from '@/data/careers';
import { JobOpening } from '@/types';
import CareerApplicationModal from '@/components/CareerApplicationModal';
import { Briefcase, MapPin, Clock, ArrowRight, Mail, Phone } from 'lucide-react';

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <Briefcase className="w-3.5 h-3.5 text-[#0D5C2C]" />
          Join Our Sovereign Team
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          Careers at Aarna Infra Developers
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          Shape the future of Hyderabad prime highway corridors. We offer industry-leading incentive packages, transparent career progression, and an executive culture grounded in integrity.
        </p>
      </div>

      {/* Official Scraped Careers Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
        <Image
          src="/scraped/90_aarna-infra-developers-careers.png"
          alt="Careers at Aarna Infra Developers"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#360005]/80 via-transparent to-transparent" />
      </div>

      {/* Perks Banner (Crisp White Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
        <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-amber-300/40 space-y-1 shadow-xl">
          <span className="font-serif font-black text-[#750A14] text-base block">Top 1% Incentives</span>
          <p className="text-zinc-600">Industry-leading spot commissions & quarterly sales bonuses.</p>
        </div>
        <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-amber-300/40 space-y-1 shadow-xl">
          <span className="font-serif font-black text-emerald-800 text-base block">Clear-Title Pride</span>
          <p className="text-zinc-600">Sell only 100% verified HMDA, DTCP, and TSRERA projects.</p>
        </div>
        <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-amber-300/40 space-y-1 shadow-xl">
          <span className="font-serif font-black text-[#500208] text-base block">Madhapur Prime HQ</span>
          <p className="text-zinc-600">Work out of our flagship corporate office in Kakatiya Hills.</p>
        </div>
        <div className="p-5 rounded-3xl bg-white text-zinc-900 border border-amber-300/40 space-y-1 shadow-xl">
          <span className="font-serif font-black text-amber-800 text-base block">Luxury Travel Rewards</span>
          <p className="text-zinc-600">Annual international leadership retreats for top performers.</p>
        </div>
      </div>

      {/* Active Openings List (Crisp White Luxury Cards) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-serif font-black text-white">Active Career Opportunities</h2>
          <span className="text-xs font-mono text-amber-200">{JOB_OPENINGS.length} Roles Open</span>
        </div>

        <div className="space-y-6">
          {JOB_OPENINGS.map((job) => (
            <div
              key={job.id}
              className="rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-6 sm:p-8 transition-all space-y-6 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
                <div>
                  <span className="text-xs font-mono text-[#750A14] font-bold uppercase tracking-wider block">
                    {job.department}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-[#500208] mt-0.5">
                    {job.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-7 py-3 rounded-full bg-gradient-to-r from-[#500208] via-[#750A14] to-[#500208] hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider transition-all self-start sm:self-auto flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 text-zinc-800 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#750A14]" />
                  {job.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-zinc-800 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#750A14]" />
                  Exp: {job.experience}
                </span>
                <span>•</span>
                <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {job.type}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                {job.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs">
                <div className="space-y-2">
                  <span className="text-[#750A14] font-mono uppercase block font-bold">Key Responsibilities:</span>
                  <ul className="space-y-1.5 text-zinc-700">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#750A14] font-bold">✓</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <span className="text-[#750A14] font-mono uppercase block font-bold">Required Competencies:</span>
                  <ul className="space-y-1.5 text-zinc-700">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#750A14] font-bold">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HR Direct Reachout Card */}
      <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-8 sm:p-12 text-center space-y-4 max-w-2xl mx-auto shadow-2xl">
        <h3 className="text-2xl font-serif font-black text-[#500208]">Don&apos;t See an Exact Match?</h3>
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
          We are always looking for exceptional land sourcing leads, civil project engineers, and NRI relationship managers. Send your resume directly to our talent acquisition desk.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono">
          <a
            href="mailto:careers@aarnainfradevelopers.com"
            className="px-5 py-2.5 rounded-full bg-red-50 text-[#750A14] border border-red-200 font-bold flex items-center gap-2 hover:bg-red-100 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            careers@aarnainfradevelopers.com
          </a>
          <a
            href="tel:+917337317289"
            className="px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-300 font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#750A14]" />
            HR Desk: +91 73373 17289
          </a>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <CareerApplicationModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}
