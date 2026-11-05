'use client';

import React, { useState } from 'react';

interface AarnaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  variant?: 'horizontal' | 'badge' | 'mark' | 'svg';
  textColor?: string;
  subtextColor?: string;
  showTagline?: boolean;
  priority?: boolean;
}

export default function AarnaLogo({
  className = '',
  size = 'md',
  variant = 'horizontal',
  textColor = '#183323',
  subtextColor = '#800000',
  showTagline = false,
}: AarnaLogoProps) {
  const [imageError, setImageError] = useState(false);

  // Size mapping
  const sizeMap = {
    sm: { box: 'w-10 h-10', svgSize: 28, fontSize: 'text-base', subSize: 'text-[8px]' },
    md: { box: 'w-12 h-12 sm:w-14 sm:h-14', svgSize: 38, fontSize: 'text-lg sm:text-xl', subSize: 'text-[9px] sm:text-[10px]' },
    lg: { box: 'w-16 h-16 sm:w-20 sm:h-20', svgSize: 52, fontSize: 'text-2xl', subSize: 'text-xs' },
    xl: { box: 'w-24 h-24 sm:w-28 sm:h-28', svgSize: 76, fontSize: 'text-3xl sm:text-4xl', subSize: 'text-sm' },
    custom: { box: 'w-12 h-12', svgSize: 38, fontSize: 'text-lg', subSize: 'text-[9px]' },
  };

  const s = sizeMap[size];

  // 100% Inline Vector SVG of the Official Golden Pyramid & High-Rise Skyscraper Spire
  // Never unmounts, never disappears, zero latency, razor-sharp on all screens
  const SvgPyramidEmblem = ({ width = s.svgSize, height = s.svgSize }: { width?: number; height?: number }) => (
    <svg
      viewBox="0 0 200 210"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] flex-shrink-0"
    >
      <defs>
        <linearGradient id="aarnaGoldLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="25%" stopColor="#F7D368" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA7A1E" />
        </linearGradient>

        <linearGradient id="aarnaGoldDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="50%" stopColor="#C99824" />
          <stop offset="100%" stopColor="#7B540A" />
        </linearGradient>

        <linearGradient id="aarnaGoldShine" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#ECC440" />
          <stop offset="40%" stopColor="#FFFBE6" />
          <stop offset="60%" stopColor="#E2B72C" />
          <stop offset="100%" stopColor="#9C6B0D" />
        </linearGradient>
      </defs>

      {/* Outer Triangle Apex Wings */}
      <polygon points="100,10 18,172 38,172 100,44" fill="url(#aarnaGoldLight)" />
      <polygon points="100,10 100,44 162,172 182,172" fill="url(#aarnaGoldDark)" />

      {/* Left Slanted Bar Bevel Cuts */}
      <polygon points="48,110 38,130 52,134 62,114" fill="url(#aarnaGoldShine)" />
      <polygon points="70,66 60,86 74,90 84,70" fill="url(#aarnaGoldShine)" />

      {/* Right Slanted Bar Bevel Cuts */}
      <polygon points="152,110 162,130 148,134 138,114" fill="url(#aarnaGoldLight)" />
      <polygon points="130,66 140,86 126,90 116,70" fill="url(#aarnaGoldLight)" />

      {/* Bottom Horizontal Golden Base Bar */}
      <polygon points="26,172 174,172 164,186 36,186" fill="url(#aarnaGoldShine)" />
      <polygon points="36,186 164,186 156,192 44,192" fill="url(#aarnaGoldDark)" />

      {/* Center High-Rise Architectural Tower Core */}
      <polygon points="86,64 114,64 114,168 86,168" fill="#4A0208" />
      <polygon points="86,64 100,48 114,64" fill="url(#aarnaGoldLight)" />

      {/* Skyscraper Facets */}
      <rect x="88" y="66" width="11" height="100" fill="url(#aarnaGoldShine)" />
      <rect x="101" y="66" width="11" height="100" fill="url(#aarnaGoldDark)" />

      {/* Architectural Glass Floor Louvers */}
      {[76, 86, 96, 106, 116, 126, 136, 146, 156].map((y) => (
        <line key={y} x1="88" y1={y} x2="112" y2={y} stroke="#350000" strokeWidth="2" />
      ))}

      {/* Stepped Architectural Flanking Wings */}
      <polygon points="76,96 84,88 84,168 76,168" fill="url(#aarnaGoldLight)" />
      <polygon points="116,88 124,96 124,168 116,168" fill="url(#aarnaGoldDark)" />

      {/* Outer Pillar Details */}
      <polygon points="68,124 74,118 74,168 68,168" fill="url(#aarnaGoldShine)" />
      <polygon points="126,118 132,124 132,168 126,168" fill="url(#aarnaGoldDark)" />
    </svg>
  );

  // Standalone Mark
  if (variant === 'mark' || variant === 'svg') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <SvgPyramidEmblem />
      </div>
    );
  }

  // Full Corporate Badge (Single unified card with pyramid, typography, lotus and tagline)
  if (variant === 'badge') {
    return (
      <div className={`inline-flex flex-col items-center group ${className}`}>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#70060B] via-[#520207] to-[#360004] p-3 sm:p-4 shadow-xl border-2 border-[#D4AF37] group-hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
          {/* Official Emblem */}
          <div className="mb-2">
            <SvgPyramidEmblem width={60} height={60} />
          </div>

          {/* Lettering */}
          <span className="font-serif font-black text-xl sm:text-2xl text-white tracking-wider leading-none">
            AARNA
          </span>
          <span className="font-mono font-bold text-[9px] sm:text-[10px] text-white tracking-[0.25em] uppercase leading-none mt-1">
            INFRA DEVELOPERS
          </span>

          {/* Golden Lotus Line */}
          <div className="flex items-center gap-2 my-1.5 w-full justify-center">
            <div className="h-0.5 w-8 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
            <span className="text-[#F5D061] text-xs">🪷</span>
            <div className="h-0.5 w-8 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
          </div>

          <span className="text-[8px] sm:text-[9px] font-sans text-amber-100/90 tracking-wider">
            Building Dreams. Delivering Excellence.
          </span>
        </div>
      </div>
    );
  }

  // Horizontal Variant (Default for Navbar & Headers)
  // Has official Emblem Badge on Left + Bold Brand Name on Right
  return (
    <div className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Official Emblem Container: Maroon rounded card with gold border and shining Pyramid */}
      <div
        className={`relative ${s.box} rounded-2xl overflow-hidden bg-gradient-to-br from-[#70060B] via-[#500206] to-[#320003] border-2 border-[#D4AF37] shadow-md shadow-maroon-950/20 flex items-center justify-center group-hover:scale-105 group-hover:border-[#FFF2A3] transition-all duration-300 flex-shrink-0 p-1`}
      >
        {!imageError ? (
          // Eager, unoptimized, directly loaded official image asset with zero delay (17KB Ultra-Fast WebP)
          <img
            src="/images/aarna-square-logo.webp"
            alt="Aarna Infra Developers Official Emblem"
            className="w-full h-full object-cover rounded-xl"
            loading="eager"
            decoding="sync"
            onError={() => setImageError(true)}
          />
        ) : (
          // Fail-safe Inline Vector SVG that NEVER fails
          <SvgPyramidEmblem />
        )}
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col select-none">
        <span
          className={`font-serif font-black tracking-wider leading-none ${s.fontSize}`}
          style={{ color: textColor }}
        >
          AARNA
        </span>
        <span
          className={`font-mono font-bold tracking-[0.24em] uppercase leading-none mt-1 sm:mt-1.5 ${s.subSize}`}
          style={{ color: subtextColor }}
        >
          INFRA DEVELOPERS
        </span>
        {showTagline && (
          <span className="text-[8px] sm:text-[9px] font-sans text-zinc-600 tracking-wider mt-1 hidden sm:block">
            Building Dreams. Delivering Excellence.
          </span>
        )}
      </div>
    </div>
  );
}
