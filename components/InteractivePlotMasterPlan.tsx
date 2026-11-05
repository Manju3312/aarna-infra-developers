'use client';

import React, { useState, useMemo } from 'react';
import { PlotUnit } from '@/types';

export default function InteractivePlotMasterPlan({
  ventureName,
  plots,
}: {
  ventureName: string;
  plots: PlotUnit[];
}) {
  const [selectedPlot, setSelectedPlot] = useState<PlotUnit | null>(plots[0] || null);
  const [facingFilter, setFacingFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const filteredPlots = useMemo(() => {
    return plots.filter((p) => {
      const matchFacing = facingFilter === 'ALL' || p.facing === facingFilter;
      const matchStatus = statusFilter === 'ALL' || p.status === statusFilter;
      return matchFacing && matchStatus;
    });
  }, [plots, facingFilter, statusFilter]);

  const stats = useMemo(() => {
    const total = plots.length;
    const available = plots.filter((p) => p.status === 'AVAILABLE').length;
    const reserved = plots.filter((p) => p.status === 'RESERVED').length;
    const sold = plots.filter((p) => p.status === 'SOLD').length;
    return { total, available, reserved, sold };
  }, [plots]);

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#3D0106] via-[#2A0004] to-[#1B0002] border border-amber-400/40 p-6 sm:p-10 text-white shadow-2xl">
      {/* Header and stats */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 uppercase">
              Live Layout Inventory Engine
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
            {ventureName} — Interactive Master Plan
          </h3>
          <p className="text-xs text-amber-100/80 mt-1">
            Click on any available plot unit to inspect exact square yardage, facing alignment, and real-time statutory outlay.
          </p>
        </div>

        {/* Status Legend & Quick Metrics */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold">
          <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1.5 rounded-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
            <span className="text-emerald-200">Available ({stats.available})</span>
          </div>
          <div className="flex items-center gap-2 bg-amber-950/60 border border-amber-500/40 px-3 py-1.5 rounded-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-4 ring-amber-400/20" />
            <span className="text-amber-200">Under Offer ({stats.reserved})</span>
          </div>
          <div className="flex items-center gap-2 bg-black/60 border border-white/10 px-3 py-1.5 rounded-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
            <span className="text-zinc-400">Sold Out ({stats.sold})</span>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-2 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-amber-200/80 font-mono">Facing:</span>
          {['ALL', 'EAST', 'WEST', 'NORTH', 'CORNER'].map((facing) => (
            <button
              key={facing}
              onClick={() => setFacingFilter(facing)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                facingFilter === facing
                  ? 'bg-gradient-to-r from-[#ECC872] to-[#D7AD55] text-[#2A0407] font-bold shadow-md'
                  : 'bg-black/40 text-amber-100/80 hover:text-white border border-white/10'
              }`}
            >
              {facing}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-amber-200/80 font-mono">Status:</span>
          {['ALL', 'AVAILABLE', 'RESERVED'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                statusFilter === status
                  ? 'bg-gradient-to-r from-[#ECC872] to-[#D7AD55] text-[#2A0407] font-bold shadow-md'
                  : 'bg-black/40 text-amber-100/80 hover:text-white border border-white/10'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2.5 my-8">
        {filteredPlots.map((plot) => {
          const isSelected = selectedPlot?.number === plot.number;
          const statusStyle =
            plot.status === 'AVAILABLE'
              ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200 hover:bg-emerald-600 hover:text-white'
              : plot.status === 'RESERVED'
              ? 'bg-amber-950/50 border-amber-500/50 text-amber-200 hover:bg-amber-600 hover:text-white'
              : 'bg-black/50 border-white/5 text-zinc-600 cursor-not-allowed';

          return (
            <button
              key={plot.number}
              disabled={plot.status === 'SOLD'}
              onClick={() => setSelectedPlot(plot)}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center cursor-pointer ${statusStyle} ${
                isSelected ? 'ring-2 ring-amber-300 scale-105 shadow-[0_0_15px_rgba(236,200,114,0.5)] z-10' : ''
              }`}
            >
              <span>#{plot.number}</span>
              <span className="text-[10px] font-normal opacity-85">{plot.sqYards} yd²</span>
              <span className="text-[8px] font-mono tracking-tighter opacity-70 uppercase">{plot.facing.slice(0, 1)}</span>
            </button>
          );
        })}
      </div>

      {filteredPlots.length === 0 && (
        <div className="text-center py-12 text-amber-200/60 font-mono text-sm">
          No plots match the selected filters. Please reset your filter criteria.
        </div>
      )}

      {/* Selected Plot Valuation Drawer (Crisp Luxury White Card with Maroon & Gold Accent) */}
      {selectedPlot && (
        <div className="bg-white text-zinc-900 border border-amber-300 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-[#500208] font-serif">Plot #{selectedPlot.number}</span>
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-900 border border-amber-300">
                {selectedPlot.facing} Facing
              </span>
              <span
                className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                  selectedPlot.status === 'AVAILABLE'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                    : 'bg-amber-50 text-amber-800 border border-amber-300'
                }`}
              >
                {selectedPlot.status}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans">
              Plot Extent: <strong className="text-zinc-950 font-bold">{selectedPlot.sqYards} Sq. Yards</strong> (
              {(selectedPlot.sqYards * 9).toFixed(0)} Sq. Ft)
              {selectedPlot.dimensions && (
                <span className="text-zinc-500 ml-2 font-mono">| Dim: {selectedPlot.dimensions}</span>
              )}
            </p>
            <p className="text-lg sm:text-xl font-black text-[#500208] font-serif">
              Estimated Outlay: ₹{((selectedPlot.sqYards * selectedPlot.ratePerYard) / 100000).toFixed(2)} Lakhs
              <span className="text-xs font-normal text-zinc-600 ml-2 font-mono">
                (@ ₹{selectedPlot.ratePerYard.toLocaleString('en-IN')}/yd²)
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/919959354255?text=${encodeURIComponent(
                `Hello Aarna Infra Developers, I am interested in locking Plot #${selectedPlot.number} (${selectedPlot.sqYards} Sq. Yds, ${selectedPlot.facing} Facing) at ${ventureName}. Please schedule my express site visit.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ECC872] via-[#F8DE97] to-[#D7AD55] text-[#2A0407] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/25 text-center transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Lock Plot & Book Express Site Visit</span>
              <span>→</span>
            </a>
            <a
              href="tel:+919959354255"
              className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-[#500208] hover:bg-[#750A14] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md"
            >
              Call Hotline
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
