import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight, MessageCircle } from 'lucide-react';
import AarnaLogo from './AarnaLogo';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#183323] via-[#0E2016] to-[#08140E] text-white border-t-4 border-[#D9FBE0] pt-16 pb-12 z-10 overflow-hidden">
      {/* Decorative ambient mint glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-b from-[#D9FBE0]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Founder Credibility */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group focus:outline-none">
              <AarnaLogo
                variant="horizontal"
                size="lg"
                textColor="#FFFFFF"
                subtextColor="#F5D061"
                showTagline
              />
            </Link>

            <div className="flex items-center gap-3 py-1">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md flex-shrink-0 bg-[#0E2016]">
                <Image
                  src="/images/arjun-kommalapati-clean-circle.webp"
                  alt="Arjun Kommalapati, Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-serif font-bold text-white leading-none">Arjun Kommalapati</p>
                <p className="text-[10px] text-emerald-200/80 font-mono mt-0.5">Founder & CEO • 16+ Years Experience</p>
              </div>
            </div>

            <p className="text-xs text-emerald-100/80 leading-relaxed max-w-md font-sans">
              Founded and led by <strong>Arjun Kommalapati</strong> with over 16+ years of verified real estate track record. 
              We curate institutional-grade, 100% clear-title, zero-litigation residential open plots, managed farmlands, and luxury gated communities across sovereign highway and arterial growth corridors.
            </p>

            <div className="p-4 rounded-2xl bg-[#244633] border border-[#BDE8C7]/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D9FBE0]">
                <ShieldCheck className="w-4 h-4 text-[#D9FBE0]" />
                <span>Statutory Clearances Guaranteed</span>
              </div>
              <p className="text-[11px] text-emerald-100/70">
                Every layout is vetted against HMDA Master Plan 2031, DTCP Technical LP Sanctions, and active registration on the Telangana State Real Estate Regulatory Authority (TSRERA).
              </p>
            </div>
          </div>

          {/* Column 2: Flagship Highway Corridors */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#D9FBE0] tracking-wider uppercase">
              Growth Corridors
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80 font-sans">
              <li>
                <Link href="/openplots" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>NH-44 Bangalore Hwy</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Srisailam Hwy (Future City)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Mumbai Highway (NH-65)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/farmlands" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Regional Ring Road (RRR)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/apartments" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Kokapet Financial District</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/hmda-master-plan" className="hover:text-[#D9FBE0] transition-colors flex items-center justify-between group text-[#D9FBE0]/90 font-medium">
                  <span>HMDA 2031 Mandals</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Ventures */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#D9FBE0] tracking-wider uppercase">
              Featured Ventures
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80 font-sans">
              <li>
                <Link href="/projects/golden-terra" className="hover:text-white transition-colors">
                  Golden Terra (Shadnagar Toll)
                </Link>
              </li>
              <li>
                <Link href="/projects/green-meadows" className="hover:text-white transition-colors">
                  Green Meadows (RRR Node)
                </Link>
              </li>
              <li>
                <Link href="/projects/srinivasam-open-plots-kadthal" className="hover:text-white transition-colors">
                  Srinivasam (Kadthal Future City)
                </Link>
              </li>
              <li>
                <Link href="/projects/golden-farm" className="hover:text-white transition-colors">
                  Golden Farm (50% Revenue Share)
                </Link>
              </li>
              <li>
                <Link href="/projects/magadha" className="hover:text-white transition-colors">
                  Magadha (Shivoham Theme Park)
                </Link>
              </li>
              <li>
                <Link href="/projects/golden-city" className="hover:text-white transition-colors">
                  Golden City (Sadashivpet NH-65)
                </Link>
              </li>
              <li>
                <Link href="/projects/myscape-songs-of-the-sun" className="hover:text-white transition-colors">
                  Myscape Songs of the Sun
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Corporate Headquarters & Hotlines */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#D9FBE0] tracking-wider uppercase">
              Corporate Office
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100/80 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9FBE0] shrink-0 mt-0.5" />
                <span>
                  #101, Road No: 10, Kakatiya Hills, Madhapur, Hyderabad – 500081, Telangana, India
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#D9FBE0] shrink-0" />
                <a href="tel:+919959354255" className="hover:text-[#D9FBE0] font-bold">
                  +91 99593 54255
                </a>
              </div>

              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#D9FBE0] shrink-0" />
                <a href="tel:+917337317289" className="hover:text-[#D9FBE0]">
                  +91 73373 17289
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D9FBE0] shrink-0" />
                <a href="mailto:info@aarnainfradevelopers.com" className="hover:text-[#D9FBE0]">
                  info@aarnainfradevelopers.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919959354255?text=Hello%20Aarna%20Infra,%20I%20am%20inquiring%20from%20your%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] text-black text-xs font-bold hover:bg-emerald-400 transition-all shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Official WhatsApp Desk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Quick Links Matrix */}
        <div className="py-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-amber-200/70 font-mono">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About Founder</Link>
            <Link href="/projects" className="hover:text-white">All Ventures</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/hmda-master-plan" className="hover:text-white">HMDA 2031 Portal</Link>
            <Link href="/#testimonials" className="hover:text-white">Testimonials</Link>
            <Link href="/channel-partner" className="hover:text-white">Channel Partner</Link>
            <Link href="/career" className="hover:text-white">Careers</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-amber-300">Privacy Policy (DPDP 2023)</Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:text-amber-300">Terms of Service</Link>
          </div>
        </div>

        {/* Bottom Statutory Notice */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-amber-100/60 gap-4">
          <p>
            © {new Date().getFullYear()} Aarna Infra Developers. All Rights Reserved. Building Dreams. Delivering Excellence.
          </p>
          <p className="text-center md:text-right text-amber-100/50 max-w-xl">
            Statutory Notice: All project layouts and specifications comply with HMDA/DTCP/TSRERA sanctioned blueprints. Please verify all details independently at rera.telangana.gov.in.
          </p>
        </div>
      </div>
    </footer>
  );
}
