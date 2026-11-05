'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center group">
      <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-black/90 border border-emerald-500/40 text-[11px] font-semibold text-emerald-400 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with Senior Land Advisor
      </div>
      <a
        href="https://wa.me/919959354255?text=Hello%20Aarna%20Infra%20Developers,%20I%20am%20browsing%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20current%20ventures."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp with Aarna Infra Developers"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
}

