import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HMDA_MANDALS, LAND_USE_ZONES } from '@/data/hmda';
import HmdaMapViewer from '@/components/HmdaMapViewer';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import { Map, Layers, ShieldCheck, ArrowRight, ExternalLink, Compass, Download } from 'lucide-react';

export const metadata = {
  title: 'HMDA Master Plan 2031 & Regional Ring Road (RRR) | Aarna Infra Developers',
  description:
    'Explore the HMDA 2031 Master Plan directory and Regional Ring Road (RRR) growth alignment. Interactive deep-zoom vector mapping across 30+ mandals with verified land-use zoning.',
};

export default function HmdaMasterPlanPage() {
  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <Map className="w-3.5 h-3.5 text-[#0D5C2C]" />
          Statutory Urban Planning Directory
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          HMDA Master Plan 2031 & Regional Ring Road (RRR)
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          Audit statutory land-use zoning classifications, arterial radial corridors, and growth vectors across 30+ mandals of the Hyderabad Metropolitan Development Authority without loading heavy 53MB raster scans.
        </p>
      </div>

      {/* Deep-Zoom Interactive Vector Map Viewer (Prompt Criteria 3) */}
      <section className="space-y-4">
        <HmdaMapViewer />
      </section>

      {/* Official High-Resolution Shamshabad HMDA Map Asset Showcase */}
      <section className="rounded-3xl bg-white text-zinc-900 border border-amber-300/60 p-8 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-200">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#750A14] block">
              Official Statutory Raster Archive
            </span>
            <h3 className="text-2xl font-serif font-black text-[#500208]">
              Shamshabad Zone HMDA 2031 High-Definition Map
            </h3>
            <p className="text-xs text-zinc-600 mt-1">
              Official high-resolution master plan survey scan (11.9 MB) covering Shamshabad Airport, NH-44, and surrounding growth nodes.
            </p>
          </div>
          <a
            href="/scraped/83_SHAMSHABAD.jpg"
            target="_blank"
            rel="noopener noreferrer"
            download="HMDA_2031_SHAMSHABAD_MAP.jpg"
            className="px-5 py-3 rounded-full bg-[#750A14] hover:bg-[#500208] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shrink-0 transition-all"
          >
            <Download className="w-4 h-4 text-amber-300" />
            <span>Download Ultra-HD Map (11.9 MB)</span>
          </a>
        </div>

        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-200 shadow-inner group">
          <Image
            src="/scraped/83_SHAMSHABAD.jpg"
            alt="Official HMDA Master Plan Shamshabad Map"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
            <span className="text-white text-xs font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/20">
              Click &quot;Download Ultra-HD Map&quot; to inspect full cadastral boundaries and village survey numbers.
            </span>
          </div>
        </div>
      </section>

      {/* Regional Ring Road (RRR) Dedicated Section (Anchor: #rrr) */}
      <section id="rrr" className="scroll-mt-28 rounded-3xl bg-white text-zinc-900 border border-amber-300/60 p-8 sm:p-12 shadow-2xl space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#750A14] border border-red-200 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-[#750A14]" />
              Major Infrastructure Corridor
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#500208]">
              The 340-KM Hyderabad Regional Ring Road (RRR)
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-2xl leading-relaxed">
              The Regional Ring Road (RRR) is a 340-kilometer, 4-lane access-controlled expressway circumnavigating Hyderabad 30 to 40 km beyond the Outer Ring Road (ORR), connecting 20+ satellite towns.
            </p>
          </div>

          <Link
            href="/projects/green-meadows"
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#5E020A] to-[#750A14] text-white font-extrabold text-xs uppercase tracking-wider transition-all self-start lg:self-center shadow-lg"
          >
            Explore Green Meadows on RRR Node →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 rounded-2xl bg-[#FFF9F2] border border-amber-200/80 space-y-2">
            <span className="font-serif font-black text-base text-[#500208] block">Southern Quadrant (NH-44 & Srisailam)</span>
            <p className="text-zinc-600 leading-relaxed">
              Connects Balanagar, Shadnagar, Farooqnagar, Kadthal, and Choutuppal. Houses Aarna flagship ventures <strong>Golden Terra</strong>, <strong>Green Meadows</strong>, and <strong>Golden Farm</strong>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFF9F2] border border-amber-200/80 space-y-2">
            <span className="font-serif font-black text-base text-[#500208] block">Northern Quadrant (NH-65 & NH-163)</span>
            <p className="text-zinc-600 leading-relaxed">
              Connects Sangareddy, Narsapur, Toopran, Gajwel, Jagdevpur, and Bhongir. Direct access to industrial manufacturing and medical cities.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FFF9F2] border border-amber-200/80 space-y-2">
            <span className="font-serif font-black text-base text-[#500208] block">Capital Appreciation Velocity</span>
            <p className="text-zinc-600 leading-relaxed">
              Historical land absorption data indicates RRR junction nodes experience 25% to 35% compound capital growth due to heavy logistics and industrial freight routing.
            </p>
          </div>
        </div>
      </section>

      {/* Land Use Zones Statutory Guide (White Cards) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-300">
          <Layers className="w-3.5 h-3.5" />
          HMDA 2031 Land Use Zoning Classification Norms
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LAND_USE_ZONES.map((zone) => (
            <div
              key={zone.code}
              className="p-5 rounded-3xl bg-white text-zinc-900 border border-amber-300/40 space-y-3 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-bold text-black"
                  style={{ backgroundColor: zone.color }}
                >
                  {zone.code}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 font-semibold">Statutory Norm</span>
              </div>

              <h3 className="font-serif font-black text-base text-[#500208]">{zone.name}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{zone.description}</p>

              <div className="pt-2 border-t border-zinc-100">
                <span className="text-[10px] font-mono text-[#750A14] uppercase block mb-1 font-bold">
                  Permitted Subdivisions & Uses:
                </span>
                <div className="flex flex-wrap gap-1">
                  {zone.allowedUses.map((use, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-700 font-medium"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 30+ Mandals Master Table (Crisp White Card) */}
      <section className="rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-6 sm:p-10 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200">
          <div>
            <h3 className="text-2xl font-serif font-black text-[#500208]">
              Complete HMDA & Peri-Urban Mandal Directory
            </h3>
            <p className="text-xs text-zinc-600 mt-1 font-sans">
              Verified investment rankings, arterial road connections, and nearby Aarna Infra developments.
            </p>
          </div>

          <a
            href="https://www.hmda.org.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#750A14] hover:underline font-bold flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>Official HMDA Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-200 text-[#500208] font-mono font-bold bg-[#FFF9F2]">
                <th className="py-3 px-3">Mandal Name</th>
                <th className="py-3 px-3">District</th>
                <th className="py-3 px-3">Primary Growth Corridor</th>
                <th className="py-3 px-3">Zoning Focus</th>
                <th className="py-3 px-3">Nearby Ventures</th>
                <th className="py-3 px-3">Rating</th>
                <th className="py-3 px-3 text-right">Inquiry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 font-sans">
              {HMDA_MANDALS.map((m) => (
                <tr key={m.id} className="hover:bg-amber-50/50 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-[#500208] font-serif">{m.name}</td>
                  <td className="py-3.5 px-3 text-zinc-600 font-mono">{m.district}</td>
                  <td className="py-3.5 px-3 text-zinc-800 font-medium">{m.corridor}</td>
                  <td className="py-3.5 px-3 text-zinc-700">{m.zoningFocus}</td>
                  <td className="py-3.5 px-3 text-zinc-600">{m.keyProjectsNearby}</td>
                  <td className="py-3.5 px-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-50 text-[#750A14] border border-red-200">
                      {m.investmentRating}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <a
                      href={`https://wa.me/919959354255?text=${encodeURIComponent(
                        `Hello Aarna Infra Developers, please share available plots in ${m.name} (${m.district} Dist, ${m.corridor}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#750A14] hover:underline font-mono font-bold"
                    >
                      Inquire →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Advisory Intake Form */}
      <div className="max-w-4xl mx-auto">
        <LeadIntakeForm
          source="HMDA Master Plan Portal"
          title="Request a Survey Number Zoning Verification"
          subtitle="Submit your survey number and village name for instant HMDA 2031 land use verification."
        />
      </div>
    </div>
  );
}
