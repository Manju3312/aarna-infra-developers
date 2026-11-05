'use client';

import React, { useState, useRef } from 'react';
import { HMDA_MANDALS, LAND_USE_ZONES, HmdaMandal } from '@/data/hmda';
import { ZoomIn, ZoomOut, RotateCcw, MapPin, Layers, Search, Info, ShieldCheck, ExternalLink } from 'lucide-react';

export default function HmdaMapViewer() {
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [selectedMandal, setSelectedMandal] = useState<HmdaMandal>(HMDA_MANDALS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeZoneFilter, setActiveZoneFilter] = useState<string>('ALL');

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Zoom handlers
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.4, 3.2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.4, 0.8));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Filtered mandals
  const filteredMandals = HMDA_MANDALS.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.corridor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.district.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Search & Zonal Filter Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0D0D14] border border-white/10">
        <div className="relative w-full lg:w-96">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 30+ mandals (e.g. Shadnagar, Bibinagar, Kadthal)..."
            className="w-full bg-zinc-900/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 font-sans"
          />
        </div>

        {/* Land Use Legend Pills */}
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          <span className="text-zinc-400 font-mono flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            Zones:
          </span>
          {LAND_USE_ZONES.map((zone) => (
            <button
              key={zone.code}
              onClick={() => setActiveZoneFilter(zone.code === activeZoneFilter ? 'ALL' : zone.code)}
              className={`px-2.5 py-1 rounded-md font-mono flex items-center gap-1.5 transition-all ${
                activeZoneFilter === zone.code
                  ? 'bg-amber-400 text-black font-bold'
                  : 'bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: zone.color }} />
              <span>{zone.code}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Canvas Viewer & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Master Plan Canvas */}
        <div className="lg:col-span-2 relative rounded-3xl bg-[#08080C] border border-amber-500/20 overflow-hidden h-[540px] shadow-2xl flex flex-col justify-between">
          {/* Canvas Floating Controls */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
            <button
              onClick={handleZoomIn}
              className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors"
              title="Reset View"
              aria-label="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <span className="px-2 text-xs font-mono text-amber-400 font-bold border-l border-white/10">
              {(zoom * 100).toFixed(0)}%
            </span>
          </div>

          {/* Interactive Vector Ground & Mandal Nodes */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`w-full h-full cursor-grab active:cursor-grabbing relative overflow-hidden select-none transition-transform duration-75`}
            style={{
              backgroundColor: '#07070A',
            }}
          >
            {/* Inner Pannable & Zoomable Group */}
            <div
              className="w-full h-full relative"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: 'center center',
              }}
            >
              {/* Radial Highway Network Vector Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <defs>
                  <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Central Hyderabad Core */}
                <circle cx="50%" cy="50%" r="220" fill="none" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="50%" cy="50%" r="140" fill="none" stroke="rgba(212, 175, 55, 0.25)" strokeWidth="1" />
                <circle cx="50%" cy="50%" r="60" fill="rgba(128, 0, 0, 0.2)" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.5" />

                {/* Outer Ring Road (ORR) Label */}
                <text x="50%" y="34%" fill="#D4AF37" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.6">
                  Outer Ring Road (ORR) 158 KM
                </text>

                {/* Regional Ring Road (RRR) Circle */}
                <circle cx="50%" cy="50%" r="320" fill="none" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                <text x="50%" y="18%" fill="#10B981" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.8">
                  Proposed Regional Ring Road (RRR) 340 KM
                </text>

                {/* Arterial Highway Vectors */}
                {/* NH-44 South (Bangalore Hwy) */}
                <line x1="50%" y1="50%" x2="48%" y2="98%" stroke="#D4AF37" strokeWidth="2.5" opacity="0.7" />
                {/* Srisailam Hwy South-East */}
                <line x1="50%" y1="50%" x2="65%" y2="95%" stroke="#EF4444" strokeWidth="2" opacity="0.7" />
                {/* Mumbai Hwy NH-65 West */}
                <line x1="50%" y1="50%" x2="5%" y2="40%" stroke="#F97316" strokeWidth="2" opacity="0.7" />
                {/* Warangal Hwy NH-163 North-East */}
                <line x1="50%" y1="50%" x2="90%" y2="25%" stroke="#3B82F6" strokeWidth="2" opacity="0.7" />
                {/* Vijayawada Hwy NH-65 East */}
                <line x1="50%" y1="50%" x2="95%" y2="65%" stroke="#8B5CF6" strokeWidth="2" opacity="0.7" />
              </svg>

              {/* Placed Mandal Hotspots */}
              {filteredMandals.map((mandal, idx) => {
                const isSelected = selectedMandal.id === mandal.id;
                // Distributed coordinates across simulated metropolitan map
                const angle = (idx / filteredMandals.length) * 2 * Math.PI;
                const radius = 100 + ((idx % 3) + 1) * 65;
                const posX = 50 + (Math.cos(angle) * radius) / 8;
                const posY = 50 + (Math.sin(angle) * radius) / 8;

                return (
                  <div
                    key={mandal.id}
                    onClick={() => setSelectedMandal(mandal)}
                    style={{
                      left: `${Math.max(10, Math.min(90, posX))}%`,
                      top: `${Math.max(15, Math.min(85, posY))}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 z-10 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div
                      className={`px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md ${
                        isSelected
                          ? 'bg-amber-400 text-black border-amber-300 ring-4 ring-amber-400/20'
                          : 'bg-[#101017]/90 text-zinc-200 border-white/20 hover:border-amber-400/50'
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: mandal.colorCode }}
                      />
                      <span>{mandal.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom helper prompt */}
          <div className="p-3 bg-black/60 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <span>🖱️ Drag canvas to pan | Click any mandal to view statutory zoning breakdown</span>
            <span className="text-amber-400">HMDA 2031 Vector Master Plan</span>
          </div>
        </div>

        {/* Selected Mandal Inspector Drawer */}
        <div className="rounded-3xl bg-[#0D0D14] border border-amber-500/20 p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-400/10 text-amber-400 border border-amber-400/30">
                {selectedMandal.investmentRating}
              </span>
              <span className="text-xs font-mono text-zinc-400">{selectedMandal.district} Dist.</span>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                {selectedMandal.name}
              </h3>
              <p className="text-xs text-amber-300 font-mono mt-0.5">{selectedMandal.corridor}</p>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              {selectedMandal.overview}
            </p>

            <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
              <div>
                <span className="text-zinc-500 font-mono block text-[10px]">Statutory Zoning Focus</span>
                <span className="font-semibold text-white">{selectedMandal.zoningFocus}</span>
              </div>

              <div>
                <span className="text-zinc-500 font-mono block text-[10px]">Aarna & Landmark Ventures Nearby</span>
                <span className="font-semibold text-amber-300">{selectedMandal.keyProjectsNearby}</span>
              </div>

              <div>
                <span className="text-zinc-500 font-mono block text-[10px]">Arterial Highways & Arteries</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedMandal.majorHighways.map((hwy, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {hwy}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/10">
            <a
              href={`https://wa.me/919959354255?text=${encodeURIComponent(
                `Hello Aarna Infra, I am reviewing the HMDA Master Plan for ${selectedMandal.name} (${selectedMandal.corridor}). Please share verified plots or upcoming ventures in this mandal.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 text-black font-extrabold text-xs text-center transition-all flex items-center justify-center gap-2"
            >
              <span>Inquire on Plots in {selectedMandal.name}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://rera.telangana.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-[11px] text-center transition-all flex items-center justify-center gap-1.5 border border-white/5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verify TSRERA State Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

