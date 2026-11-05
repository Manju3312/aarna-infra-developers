import React from 'react';
import Image from 'next/image';
import LeadIntakeForm from '@/components/LeadIntakeForm';
import AarnaLogo from '@/components/AarnaLogo';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';

export const metadata = {
  title: 'Contact Corporate Office | Madhapur, Hyderabad | Aarna Infra Developers',
  description:
    'Visit Aarna Infra Developers corporate headquarters at #101, Road No: 10, Kakatiya Hills, Madhapur, Hyderabad. Call +91 99593 54255 or WhatsApp us 7 days a week.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#0D5C2C]" />
          Direct Corporate Access
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#183323]">
          Contact Aarna Infra Developers
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
          Whether you seek verified highway plotted layouts, farmland yields, or legal due diligence for your family portfolio, our senior advisory team is at your service.
        </p>
      </div>

      {/* Official Scraped Contact Us Madhapur Office Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
        <Image
          src="/scraped/92_aarna-infra-developers-contact-us.png"
          alt="Aarna Infra Developers Corporate Office Madhapur"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#360005]/80 via-transparent to-transparent" />
      </div>

      {/* Contact Grid: Details + Map + Intake */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Office Details & Timings (Crisp Luxury White Card) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-8 space-y-6 shadow-2xl">
            <h2 className="text-2xl font-serif font-black text-[#500208]">Corporate Headquarters</h2>

            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#750A14]" />
                </div>
                <div>
                  <span className="font-mono text-zinc-500 font-bold block text-[11px]">Physical Address</span>
                  <p className="font-bold text-zinc-900 text-sm mt-0.5 leading-snug">
                    #101, Road No: 10, Kakatiya Hills, Madhapur, Hyderabad – 500081, Telangana, India
                  </p>
                  <span className="text-[11px] text-zinc-500 mt-1 block">
                    Landmark: Near Durgam Cheruvu & Cyber Towers corridor
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#750A14]" />
                </div>
                <div>
                  <span className="font-mono text-zinc-500 font-bold block text-[11px]">Hotline Phone Numbers</span>
                  <div className="space-y-1 mt-0.5 font-mono text-sm">
                    <a href="tel:+919959354255" className="block text-[#750A14] font-black hover:underline">
                      +91 99593 54255 (Primary Sales & Site Visits)
                    </a>
                    <a href="tel:+917337317289" className="block text-zinc-700 hover:text-black font-semibold">
                      +91 73373 17289 (Corporate & Channel Desk)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#750A14]" />
                </div>
                <div>
                  <span className="font-mono text-zinc-500 font-bold block text-[11px]">Official Email</span>
                  <a
                    href="mailto:info@aarnainfradevelopers.com"
                    className="font-mono text-sm text-zinc-800 font-semibold hover:text-[#750A14] block mt-0.5"
                  >
                    info@aarnainfradevelopers.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#750A14]" />
                </div>
                <div>
                  <span className="font-mono text-zinc-500 font-bold block text-[11px]">Operational Hours</span>
                  <p className="text-zinc-900 text-sm mt-0.5 font-mono font-bold">
                    Monday – Sunday: 9:00 AM – 8:00 PM IST
                  </p>
                  <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">
                    ● Open 7 Days a week for weekend site visits
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919959354255?text=Hello%20Aarna%20Infra,%20I%20would%20like%20to%20visit%20your%20Madhapur%20corporate%20office."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-full bg-[#25D366] hover:bg-emerald-500 text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="https://maps.google.com/?q=Road+No+10+Kakatiya+Hills+Madhapur+Hyderabad+500081"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-full bg-[#500208] hover:bg-[#750A14] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Embed */}
          <div className="rounded-3xl bg-white border border-zinc-200 overflow-hidden shadow-xl p-2">
            <iframe
              title="Aarna Infra Developers Corporate Headquarters Madhapur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.495048259275!2d78.3846!3d17.4361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e1b12b2345%3A0xa1b2c3d4e5f67890!2sKakatiya%20Hills%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="260"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right Column: Server-Side Lead Intake Form */}
        <div className="lg:col-span-7">
          <LeadIntakeForm
            source="Contact Us Page"
            title="Send an Inbound Inquiry to Founder Desk"
            subtitle="Our Senior Land Advisory Lead will respond within 15 minutes."
          />
        </div>
      </div>
    </div>
  );
}
