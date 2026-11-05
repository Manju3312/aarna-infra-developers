'use client';

import React from 'react';
import { Compass, Filter } from 'lucide-react';

export default function CorridorQuickSearch({
  selectedCorridor,
  onSelectCorridor,
  selectedCategory,
  onSelectCategory,
}: {
  selectedCorridor: string;
  onSelectCorridor: (corridor: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}) {
  const corridors = [
    { label: 'All Corridors', value: 'ALL' },
    { label: 'Bangalore Hwy (NH-44)', value: 'Bangalore Highway' },
    { label: 'Srisailam Hwy (Future City)', value: 'Srisailam' },
    { label: 'Mumbai Hwy (NH-65)', value: 'Mumbai Highway' },
    { label: 'Kokapet Financial Dist', value: 'Financial District' },
  ];

  const categories = [
    { label: 'All Property Types', value: 'ALL' },
    { label: 'Open Plots', value: 'openplots' },
    { label: 'Farmlands (50% Share)', value: 'farmlands' },
    { label: 'Theme Villas', value: 'villas' },
    { label: 'Apartments', value: 'apartments' },
  ];

  return (
    <div className="rounded-3xl bg-white border border-[#BDE8C7] p-5 sm:p-6 shadow-md text-zinc-900">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        {/* Corridors Selector */}
        <div className="w-full lg:w-auto flex-1 space-y-2">
          <label className="text-[11px] font-mono text-[#183323] uppercase tracking-wider flex items-center gap-1.5 font-bold">
            <Compass className="w-4 h-4 text-[#800000]" />
            Highway Growth Corridor:
          </label>
          <div className="flex flex-wrap gap-1.5">
            {corridors.map((c) => (
              <button
                type="button"
                suppressHydrationWarning
                key={c.value}
                onClick={() => onSelectCorridor(c.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCorridor === c.value
                    ? 'bg-[#800000] text-white shadow-md font-bold ring-2 ring-emerald-300'
                    : 'bg-[#EAF7EE] border border-[#BDE8C7] text-[#183323] hover:text-[#800000] hover:bg-[#D9FBE0]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden lg:block w-px h-14 bg-zinc-200" />

        {/* Category Selector */}
        <div className="w-full lg:w-auto flex-1 space-y-2">
          <label className="text-[11px] font-mono text-[#183323] uppercase tracking-wider flex items-center gap-1.5 font-bold">
            <Filter className="w-4 h-4 text-[#800000]" />
            Venture Asset Class:
          </label>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                type="button"
                suppressHydrationWarning
                key={cat.value}
                onClick={() => onSelectCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-[#800000] text-white shadow-md font-bold ring-2 ring-emerald-300'
                    : 'bg-[#EAF7EE] border border-[#BDE8C7] text-[#183323] hover:text-[#800000] hover:bg-[#D9FBE0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
