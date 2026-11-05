import React from 'react';
import Link from 'next/link';
import { Home, Compass, Phone } from 'lucide-react';
import AarnaLogo from '@/components/AarnaLogo';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center space-y-6 rounded-3xl bg-white text-zinc-900 border border-[#BDE8C7] p-8 sm:p-12 shadow-2xl">
        <div className="mx-auto flex justify-center">
          <AarnaLogo variant="badge" size="lg" priority />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#750A14] bg-red-50 border border-red-200 px-3 py-1 rounded-full inline-block">
            404 Error • Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#500208]">
            Plot Location Not Found
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
            The parcel or page you requested does not exist or has been relocated within our sovereign master portfolio.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#750A14] hover:bg-[#500208] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <Home className="w-4 h-4 text-amber-300" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#ECC872] to-[#D7AD55] text-[#2A0407] font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <Compass className="w-4 h-4" />
            <span>View 7 Master Projects</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500">
          Need immediate assistance?{' '}
          <a
            href="https://wa.me/919959354255"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#750A14] font-bold hover:underline"
          >
            Connect on WhatsApp (+91 99593 54255)
          </a>
        </div>
      </div>
    </div>
  );
}

