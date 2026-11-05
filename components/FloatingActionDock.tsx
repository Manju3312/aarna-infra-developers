'use client';

import React, { useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import AarnaAiAdvisor from './AarnaAiAdvisor';

export default function FloatingActionDock() {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <>
      {/* Floating Action Buttons Dock */}
      <aside
        aria-label="Interactive Quick Contact and AI Advisor"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-3.5 select-none"
      >
        {/* =========================================================================
            1. AARNA AI LAND ADVISOR FLOATING BUTTON
           ========================================================================= */}
        <div className="flex items-center group">
          {/* Tooltip Label */}
          <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-[#183323] border border-[#D4AF37]/50 text-[11px] font-mono font-bold text-[#F5D061] shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            ✦ Aarna AI Land Advisor (24/7)
          </div>

          <button
            type="button"
            onClick={() => setIsAiOpen((prev) => !prev)}
            className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#183323] via-[#244633] to-[#0D2416] border-2 border-[#D4AF37] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Open Aarna AI Land Advisor"
            suppressHydrationWarning
          >
            {/* Ambient Pulse Halo */}
            <span className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-20 pointer-events-none" />
            
            {/* Sparkles Icon */}
            <Sparkles className="w-6 h-6 text-[#F5D061] animate-pulse" />

            {/* Notification Dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#800000] border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
              AI
            </span>
          </button>
        </div>

        {/* =========================================================================
            2. OFFICIAL WHATSAPP FLOATING BUTTON
           ========================================================================= */}
        <div className="flex items-center group">
          {/* Tooltip Label */}
          <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-[#0F2618] border border-emerald-500/40 text-[11px] font-sans font-semibold text-emerald-300 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Chat on WhatsApp (+91 99593 54255)
          </div>

          <a
            href="https://wa.me/919959354255?text=Hello%20Aarna%20Infra%20Developers,%20I%20am%20browsing%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20current%20ventures."
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Chat on WhatsApp with Aarna Infra Developers"
          >
            {/* Ping Wave */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
            <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
          </a>
        </div>
      </aside>

      {/* Aarna AI Land Advisor Chat Modal */}
      <AarnaAiAdvisor isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </>
  );
}

