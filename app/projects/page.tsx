'use client';

import React, { useState, useMemo } from 'react';
import { PROJECTS } from '@/data/projects';
import VentureCard from '@/components/VentureCard';
import CorridorQuickSearch from '@/components/CorridorQuickSearch';
import { Sparkles, Search, Layers } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCorridor, setSelectedCorridor] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCorridor =
        selectedCorridor === 'ALL' ||
        p.corridor.toLowerCase().includes(selectedCorridor.toLowerCase());
      const matchCat =
        selectedCategory === 'ALL' || p.categoryType === selectedCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.corridor.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCorridor && matchCat && matchSearch;
    });
  }, [selectedCorridor, selectedCategory, searchTerm]);

  return (
    <div className="space-y-12 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title & Intro */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#0D5C2C]" />
          Master Venture Directory
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          Hyderabad Prime Highway Developments
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          Explore our complete portfolio of 100% verified, clear-title residential open plots, managed farmlands with 50% revenue share, and luxury residential communities across Telangana growth nodes.
        </p>
      </div>

      {/* Search Input Bar (Crisp White with Maroon Focus) */}
      <div className="relative max-w-xl mx-auto">
        <Search className="w-4 h-4 text-[#750A14] absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by venture name, corridor, or town (e.g. Shadnagar, Kadthal)..."
          className="w-full bg-white border border-amber-300 rounded-full pl-11 pr-5 py-3.5 text-xs text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#750A14] shadow-xl font-sans"
        />
      </div>

      {/* Corridor & Category Filter Bar */}
      <CorridorQuickSearch
        selectedCorridor={selectedCorridor}
        onSelectCorridor={setSelectedCorridor}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Active Results Counter */}
      <div className="flex items-center justify-between text-xs font-mono text-amber-200/80 px-2">
        <span className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-amber-300" />
          Displaying <strong className="text-white font-bold">{filteredProjects.length}</strong> of {PROJECTS.length} Master Ventures
        </span>
        {(selectedCorridor !== 'ALL' || selectedCategory !== 'ALL' || searchTerm !== '') && (
          <button
            onClick={() => {
              setSelectedCorridor('ALL');
              setSelectedCategory('ALL');
              setSearchTerm('');
            }}
            className="text-amber-300 hover:text-white underline cursor-pointer"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Ventures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((project) => (
          <VentureCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 rounded-3xl bg-white text-zinc-700 border border-amber-300/50 space-y-3 shadow-xl">
          <p className="text-sm font-semibold">No ventures match your search criteria.</p>
          <button
            onClick={() => {
              setSelectedCorridor('ALL');
              setSelectedCategory('ALL');
              setSearchTerm('');
            }}
            className="px-6 py-2.5 rounded-full bg-[#750A14] text-white font-bold text-xs uppercase tracking-wider"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
