'use client';

import React, { useState, useMemo } from 'react';
import { Trees, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function RevenueShareCalculator() {
  const [guntas, setGuntas] = useState<number>(2);

  // Financial model constants
  const sqYards = guntas * 121; // 1 Gunta = 121 Sq. Yards
  const baseRate = 9999;
  const landOutlayLakhs = (sqYards * baseRate) / 100000;

  // Plant counts proportional to guntas
  const mahoganyTrees = guntas * 15; // 30 trees for 2 guntas
  const agarwoodTrees = guntas * 10; // 20 trees for 2 guntas
  const avocadoTrees = guntas * 6;   // 12 trees for 2 guntas

  // Revenue projections
  const stats = useMemo(() => {
    // Annual avocado harvest from year 4 onwards (50% share): ~₹6,500 per tree per year
    const annualAvocadoShare = avocadoTrees * 6500;
    // 10-Year cumulative avocado returns (years 4-10 = 7 harvest seasons)
    const cumulativeAvocado7Years = annualAvocadoShare * 7;

    // Year 10-12 Timber harvest (Mahogany 50% investor share: ~₹55,000 per mature tree)
    const mahoganyShare = mahoganyTrees * 55000;

    // Year 8-10 Agarwood inoculated heartwood extraction (50% investor share: ~₹65,000 per tree)
    const agarwoodShare = agarwoodTrees * 65000;

    const total10YearYield = cumulativeAvocado7Years + mahoganyShare + agarwoodShare;
    const projectedLandAppreciation = landOutlayLakhs * 2.8; // conservative 2.8x land value in 10 yrs
    const totalPotentialWealth = (total10YearYield / 100000) + projectedLandAppreciation;

    return {
      annualAvocadoShare,
      mahoganyShare,
      agarwoodShare,
      total10YearYield,
      projectedLandAppreciation,
      totalPotentialWealth,
    };
  }, [guntas, avocadoTrees, mahoganyTrees, agarwoodTrees, landOutlayLakhs]);

  return (
    <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/60 p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 mb-2">
            <Trees className="w-3.5 h-3.5 text-emerald-600" />
            50% Commercial Harvest Profit Sharing
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#500208]">
            Golden Farm Yield & Land Wealth Simulator
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1">
            Calculate your combined returns from agricultural tree harvests + freehold land capital compounding.
          </p>
        </div>

        <div className="bg-[#FFF9F2] border border-amber-300/60 px-4 py-2.5 rounded-2xl flex items-center gap-3 self-start md:self-auto">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <div className="text-left">
            <span className="block text-[10px] text-zinc-500 font-mono font-bold">Tax Status</span>
            <span className="text-xs font-black text-[#750A14]">100% Tax-Free Sec 10(1)</span>
          </div>
        </div>
      </div>

      {/* Gunta Selection Controls */}
      <div className="py-6 space-y-4">
        <label className="text-xs font-mono text-[#750A14] uppercase tracking-wider block font-bold">
          Select Farmland Parcel Size (Guntas):
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[2, 3, 5, 10].map((option) => (
            <button
              key={option}
              onClick={() => setGuntas(option)}
              className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                guntas === option
                  ? 'bg-[#500208] border-[#750A14] text-white shadow-lg ring-2 ring-amber-400'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-300'
              }`}
            >
              <span className="block text-2xl font-black font-serif">{option} Guntas</span>
              <span className={`text-xs font-mono font-semibold ${guntas === option ? 'text-amber-300' : 'text-zinc-500'}`}>
                {option * 121} Sq. Yards
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projection Display Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 pb-6">
        {/* Outlay Card */}
        <div className="p-5 rounded-2xl bg-[#FFF9F2] border border-amber-200/80 space-y-1">
          <span className="text-xs font-mono text-zinc-500 font-bold block">Land Acquisition Outlay</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-[#500208]">
            ₹{landOutlayLakhs.toFixed(2)} <span className="text-sm font-sans font-normal text-zinc-600">Lakhs</span>
          </div>
          <span className="text-[11px] text-zinc-600 block">
            {sqYards} Sq. Yards @ ₹{baseRate.toLocaleString('en-IN')}/yd² with Freehold Dharani Passbook
          </span>
        </div>

        {/* Harvest Share Card */}
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
          <span className="text-xs font-mono text-emerald-800 font-bold block">Projected 10-Yr 50% Harvest Share</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-emerald-800">
            ₹{(stats.total10YearYield / 100000).toFixed(2)} <span className="text-sm font-sans font-normal text-zinc-600">Lakhs</span>
          </div>
          <span className="text-[11px] text-zinc-600 block">
            From {mahoganyTrees} Mahogany + {agarwoodTrees} Agarwood + {avocadoTrees} Avocado Trees
          </span>
        </div>

        {/* Total Compounded Wealth */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 space-y-1">
          <span className="text-xs font-mono text-amber-900 font-bold block">Total 10-Yr Estimated Portfolio</span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-[#750A14]">
            ₹{stats.totalPotentialWealth.toFixed(2)} <span className="text-sm font-sans font-normal text-zinc-600">Lakhs</span>
          </div>
          <span className="text-[11px] text-zinc-600 block">
            Combined Harvest Yields + Freehold Land Value Appreciated
          </span>
        </div>
      </div>

      {/* Harvest Breakdown */}
      <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
        <h4 className="text-xs font-mono uppercase tracking-wider text-[#750A14] font-bold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Individual Plantation Yield Projections (50% Investor Share)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="border-l-3 border-emerald-600 pl-3 space-y-1">
            <span className="font-bold text-zinc-900 block">African Mahogany Timber</span>
            <p className="text-zinc-600">{mahoganyTrees} Commercial Hardwood Trees</p>
            <p className="text-emerald-700 font-bold font-mono">Est: ₹{(stats.mahoganyShare / 100000).toFixed(2)} Lakhs at maturity</p>
          </div>

          <div className="border-l-3 border-[#750A14] pl-3 space-y-1">
            <span className="font-bold text-zinc-900 block">Agarwood (Oud) Resin</span>
            <p className="text-zinc-600">{agarwoodTrees} High-Value Inoculated Trees</p>
            <p className="text-[#750A14] font-bold font-mono">Est: ₹{(stats.agarwoodShare / 100000).toFixed(2)} Lakhs at harvest</p>
          </div>

          <div className="border-l-3 border-amber-600 pl-3 space-y-1">
            <span className="font-bold text-zinc-900 block">Hass Avocado Fruits</span>
            <p className="text-zinc-600">{avocadoTrees} Fruiting Trees (Annual Yield)</p>
            <p className="text-amber-700 font-bold font-mono">Est: ₹{stats.annualAvocadoShare.toLocaleString('en-IN')}/year from Yr 4</p>
          </div>
        </div>
      </div>

      {/* CTA Bottom Bar */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-200">
        <span className="text-xs text-zinc-500">
          *All agricultural estimations based on standard CFT volumetric benchmarks and managed drip irrigation protocols.
        </span>

        <a
          href={`https://wa.me/919959354255?text=${encodeURIComponent(
            `Hello Aarna Infra Developers, I simulated an investment of ${guntas} Guntas (${sqYards} Sq. Yds) in Golden Farm Managed Farmlands. Please share the detailed financial prospectus and schedule a weekend farm visit.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ECC872] to-[#D7AD55] text-[#2A0407] font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <span>Claim Your {guntas} Guntas Farm Prospectus</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
