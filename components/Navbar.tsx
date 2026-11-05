'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, Menu, X, ChevronDown, ShieldCheck, MapPin } from 'lucide-react';
import AarnaLogo from './AarnaLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
    setProjectsDropdown(false);
  }, [pathname]);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-dropdown-container')) {
        setServicesDropdown(false);
        setProjectsDropdown(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <>
      {/* Top Statutory Ribbon - Mint/Sage Tint */}
      <div className="bg-[#C7E9CF] text-[11px] text-[#183323] border-b border-[#B8E2C2] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#0D5C2C] font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0D5C2C]" />
              100% Clear-Title • Zero-Litigation • HMDA & DTCP Approved • TSRERA Registered
            </span>
            <span className="text-[#0D5C2C]/30">|</span>
            <span className="flex items-center gap-1 text-[#183323]/80">
              <MapPin className="w-3 h-3 text-[#0D5C2C]" />
              #101, Road No: 10, Kakatiya Hills, Madhapur
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+919959354255"
              className="hover:text-[#800000] transition-colors flex items-center gap-1 font-mono font-bold text-[#800000]"
            >
              <Phone className="w-3 h-3 text-[#800000]" />
              +91 99593 54255
            </a>
            <span className="text-[#0D5C2C]/30">|</span>
            <a
              href="https://wa.me/919959354255?text=Hello%20Aarna%20Infra%20Developers,%20I%20would%20like%20to%20inquire%20about%20your%20HMDA/DTCP%20ventures."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D5C2C] hover:text-[#093c1d] transition-colors flex items-center gap-1 font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Live
            </a>
          </div>
        </div>
      </div>

      {/* Main Mint Green Navigation Bar - Exact Match to User Upload #D9FBE0 */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 shadow-sm ${
          scrolled
            ? 'bg-[#D9FBE0]/95 backdrop-blur-md border-b border-[#BDE8C7] py-2 shadow-[0_4px_20px_rgba(24,51,35,0.08)]'
            : 'bg-[#D9FBE0] border-b border-[#BDE8C7] py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo Badge & Title (Exact from Uploaded Screenshot & Original Branding) */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <AarnaLogo
              variant="horizontal"
              size="md"
              textColor="#183323"
              subtextColor="#800000"
              priority
            />
          </Link>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-sans">
            {/* 1. Home */}
            <Link
              href="/"
              className={`font-semibold tracking-wide transition-colors ${
                pathname === '/' ? 'text-[#800000] font-bold' : 'text-[#183323] hover:text-[#800000]'
              }`}
            >
              Home
            </Link>

            {/* 2. Services Dropdown (Interactive on Click & Hover) */}
            <div
              className="relative group nav-dropdown-container"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setServicesDropdown((prev) => !prev)}
                className={`flex items-center gap-1.5 font-semibold tracking-wide transition-colors cursor-pointer py-1.5 focus:outline-none ${
                  pathname.startsWith('/services') || pathname.startsWith('/hmda-master-plan')
                    ? 'text-[#800000] font-bold'
                    : 'text-[#183323] hover:text-[#800000]'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#183323] transition-transform duration-200 group-hover:text-[#800000] ${
                    servicesDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Services Dropdown Drawer */}
              <div
                className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 z-50 ${
                  servicesDropdown
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="rounded-2xl bg-white border border-[#BDE8C7] p-2 shadow-2xl backdrop-blur-xl space-y-1">
                  <Link
                    href="/hmda-master-plan"
                    onClick={() => setServicesDropdown(false)}
                    className="block px-4 py-2.5 text-sm text-[#183323] hover:text-[#800000] hover:bg-[#D9FBE0]/60 rounded-xl transition-all font-sans font-medium"
                  >
                    HMDA Master Plan
                  </Link>

                  <Link
                    href="/hmda-master-plan#rrr"
                    onClick={() => setServicesDropdown(false)}
                    className="block px-4 py-2.5 text-sm text-[#183323] hover:text-[#800000] hover:bg-[#D9FBE0]/60 rounded-xl transition-all font-sans font-medium"
                  >
                    Regional Ring Road (RRR)
                  </Link>

                  <div className="h-px bg-zinc-100 my-1" />

                  <Link
                    href="/services"
                    onClick={() => setServicesDropdown(false)}
                    className="block px-4 py-2 text-xs font-bold text-[#800000] hover:bg-[#D9FBE0]/60 rounded-xl transition-all font-sans"
                  >
                    ✦ All 4 Real Estate Services
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Projects Dropdown (Interactive on Click & Hover) */}
            <div
              className="relative group nav-dropdown-container"
              onMouseEnter={() => setProjectsDropdown(true)}
              onMouseLeave={() => setProjectsDropdown(false)}
            >
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setProjectsDropdown((prev) => !prev)}
                className={`flex items-center gap-1.5 font-semibold tracking-wide transition-colors cursor-pointer py-1.5 focus:outline-none ${
                  pathname.startsWith('/projects') ||
                  pathname === '/openplots' ||
                  pathname === '/farmlands' ||
                  pathname === '/villas-houses' ||
                  pathname === '/apartments'
                    ? 'text-[#800000] font-bold'
                    : 'text-[#183323] hover:text-[#800000]'
                }`}
              >
                <span>Projects</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#183323] transition-transform duration-200 group-hover:text-[#800000] ${
                    projectsDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Projects Dropdown Menu */}
              <div
                className={`absolute top-full left-0 w-72 pt-2 transition-all duration-200 z-50 ${
                  projectsDropdown
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="rounded-2xl bg-white border border-[#BDE8C7] p-2.5 shadow-2xl backdrop-blur-xl space-y-1">
                  <Link
                    href="/projects"
                    onClick={() => setProjectsDropdown(false)}
                    className="block px-3.5 py-2 text-xs font-bold text-[#800000] hover:bg-[#D9FBE0]/60 rounded-lg transition-all font-sans"
                  >
                    ✦ View All 7 Master Projects
                  </Link>
                  <div className="h-px bg-zinc-100 my-1" />
                  <Link
                    href="/projects/golden-terra"
                    onClick={() => setProjectsDropdown(false)}
                    className="block px-3.5 py-1.5 text-xs text-zinc-700 hover:text-[#800000] hover:bg-[#D9FBE0]/40 rounded-md transition-all font-sans font-medium"
                  >
                    Golden Terra (Shadnagar Tollgate)
                  </Link>
                  <Link
                    href="/projects/green-meadows"
                    onClick={() => setProjectsDropdown(false)}
                    className="block px-3.5 py-1.5 text-xs text-zinc-700 hover:text-[#800000] hover:bg-[#D9FBE0]/40 rounded-md transition-all font-sans font-medium"
                  >
                    Green Meadows (RRR Junction Node)
                  </Link>
                  <Link
                    href="/projects/srinivasam-open-plots-kadthal"
                    onClick={() => setProjectsDropdown(false)}
                    className="block px-3.5 py-1.5 text-xs text-zinc-700 hover:text-[#800000] hover:bg-[#D9FBE0]/40 rounded-md transition-all font-sans font-medium"
                  >
                    Srinivasam (Future City Kadthal)
                  </Link>
                  <Link
                    href="/projects/golden-farm"
                    onClick={() => setProjectsDropdown(false)}
                    className="block px-3.5 py-1.5 text-xs text-zinc-700 hover:text-[#800000] hover:bg-[#D9FBE0]/40 rounded-md transition-all font-sans font-medium"
                  >
                    Golden Farm (50% Harvest Share)
                  </Link>
                  <Link
                    href="/projects/magadha"
                    onClick={() => setProjectsDropdown(false)}
                    className="block px-3.5 py-1.5 text-xs text-zinc-700 hover:text-[#800000] hover:bg-[#D9FBE0]/40 rounded-md transition-all font-sans font-medium"
                  >
                    Magadha (Shivoham Theme Park)
                  </Link>
                  <Link
                    href="/projects/golden-city"
                    onClick={() => setProjectsDropdown(false)}
                    className="block px-3.5 py-1.5 text-xs text-zinc-700 hover:text-[#800000] hover:bg-[#D9FBE0]/40 rounded-md transition-all font-sans font-medium"
                  >
                    Golden City (Sadashivpet NH-65)
                  </Link>
                  <Link
                    href="/projects/myscape-songs-of-the-sun"
                    onClick={() => setProjectsDropdown(false)}
                    className="block px-3.5 py-1.5 text-xs text-zinc-700 hover:text-[#800000] hover:bg-[#D9FBE0]/40 rounded-md transition-all font-sans font-medium"
                  >
                    Myscape Songs of the Sun (Kokapet)
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. About */}
            <Link
              href="/about"
              className={`font-semibold tracking-wide transition-colors ${
                pathname === '/about' ? 'text-[#800000] font-bold' : 'text-[#183323] hover:text-[#800000]'
              }`}
            >
              About
            </Link>

            {/* 5. Testimonials */}
            <Link
              href="/#testimonials"
              className="text-[#183323] hover:text-[#800000] font-semibold tracking-wide transition-colors"
            >
              Testimonials
            </Link>

            {/* 6. Channel Partner */}
            <Link
              href="/channel-partner"
              className={`font-semibold tracking-wide transition-colors ${
                pathname === '/channel-partner'
                  ? 'text-[#800000] font-bold'
                  : 'text-[#183323] hover:text-[#800000]'
              }`}
            >
              Channel Partner
            </Link>
          </nav>

          {/* Far Right: Contact Us Signature Maroon Pill Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-[#800000] hover:bg-[#600000] active:scale-95 text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-maroon-900/20 transition-all inline-flex items-center justify-center"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full bg-[#800000] text-white font-bold text-[11px] uppercase tracking-wide"
            >
              Contact
            </Link>

            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white border border-[#BDE8C7] text-[#183323] hover:text-[#800000]"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#EAF7EE] border-b border-[#BDE8C7] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-2 text-sm font-sans">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#183323] hover:text-[#800000] font-semibold border-b border-[#BDE8C7]/50"
              >
                Home
              </Link>

              <div className="py-2 border-b border-[#BDE8C7]/50 space-y-1">
                <span className="text-[#800000] font-bold block text-xs uppercase tracking-wider font-mono">
                  Services
                </span>
                <Link
                  href="/hmda-master-plan"
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 py-1 text-xs text-zinc-700 hover:text-[#800000]"
                >
                  ↳ HMDA Master Plan
                </Link>
                <Link
                  href="/hmda-master-plan#rrr"
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 py-1 text-xs text-zinc-700 hover:text-[#800000]"
                >
                  ↳ Regional Ring Road (RRR)
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 py-1 text-xs text-[#0D5C2C] hover:text-[#800000]"
                >
                  ↳ The 4 Service Pillars
                </Link>
              </div>

              <div className="py-2 border-b border-[#BDE8C7]/50 space-y-1">
                <span className="text-[#800000] font-bold block text-xs uppercase tracking-wider font-mono">
                  Projects
                </span>
                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 py-1 text-xs text-zinc-700 hover:text-[#800000]"
                >
                  ↳ All Master Projects
                </Link>
                <Link
                  href="/openplots"
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 py-1 text-xs text-zinc-700 hover:text-[#800000]"
                >
                  ↳ Residential Open Plots
                </Link>
                <Link
                  href="/farmlands"
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 py-1 text-xs text-zinc-700 hover:text-[#800000]"
                >
                  ↳ Managed Farmlands (50% Share)
                </Link>
                <Link
                  href="/villas-houses"
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 py-1 text-xs text-zinc-700 hover:text-[#800000]"
                >
                  ↳ Theme Villas & Houses
                </Link>
                <Link
                  href="/apartments"
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 py-1 text-xs text-zinc-700 hover:text-[#800000]"
                >
                  ↳ Luxury Apartments (Kokapet)
                </Link>
              </div>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#183323] hover:text-[#800000] font-semibold border-b border-[#BDE8C7]/50"
              >
                About
              </Link>

              <Link
                href="/#testimonials"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#183323] hover:text-[#800000] font-semibold border-b border-[#BDE8C7]/50"
              >
                Testimonials
              </Link>

              <Link
                href="/channel-partner"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#183323] hover:text-[#800000] font-semibold"
              >
                Channel Partner
              </Link>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full bg-[#800000] hover:bg-[#600000] text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
              >
                CONTACT US
              </Link>
              <a
                href="https://wa.me/919959354255"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
