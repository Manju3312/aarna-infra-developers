'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Download, MessageCircle, AlertCircle } from 'lucide-react';

export default function LeadIntakeForm({
  ventureSlug,
  ventureName,
  source = 'General',
  title = 'Schedule an Express VIP Site Visit',
  subtitle = 'Get instant layout maps, TSRERA verification certificates, and price sheets.',
}: {
  ventureSlug?: string;
  ventureName?: string;
  source?: string;
  title?: string;
  subtitle?: string;
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: 'This Saturday',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [leadRef, setLeadRef] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.honeypot) {
      setSuccess(true);
      return;
    }

    if (!formData.fullName || formData.phone.length < 10) {
      setError('Please provide your full name and a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          ventureSlug: ventureSlug || 'general-inquiry',
          message: `Site Visit Preferred Date: ${formData.preferredDate || 'Earliest weekend'} | Source: ${source}`,
          honeypot: formData.honeypot,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setLeadRef(data.leadRef || 'ARN-VIP');
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to submit. Please contact our hotline.');
      }
    } catch (err) {
      setError('Network connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white border border-[#BDE8C7] p-6 sm:p-9 shadow-xl text-zinc-900">
      {success ? (
        <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-[#D9FBE0] border border-[#BDE8C7] text-[#0D5C2C] flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D5C2C] bg-[#D9FBE0] px-3 py-1 rounded-full border border-[#BDE8C7] inline-block">
              Inquiry Confirmed • Ref #{leadRef}
            </span>
            <h3 className="text-2xl font-serif font-black text-[#183323] mt-2">
              VIP Site Visit Request Logged
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto mt-2 leading-relaxed">
              Our Senior Land Advisory Lead will contact you within 15 minutes to coordinate your luxury AC cab site visit to{' '}
              <strong className="text-[#800000]">{ventureName || 'Aarna ventures'}</strong>.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919959354255?text=${encodeURIComponent(
                `Hello Aarna Infra, I just submitted an inquiry on your website (Ref: ${leadRef}) for ${ventureName || 'Highway Open Plots'}. Please share the brochure and location coordinates.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp Live</span>
            </a>

            <button
              onClick={() => {
                setSuccess(false);
                setFormData({ fullName: '', phone: '', email: '', preferredDate: 'This Saturday', honeypot: '' });
              }}
              className="px-5 py-3 rounded-xl bg-[#EAF7EE] text-[#183323] text-xs font-semibold hover:bg-[#D9FBE0] transition-colors border border-[#BDE8C7]"
            >
              Book Another Visit
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#0D5C2C] uppercase bg-[#D9FBE0] px-2.5 py-0.5 rounded-md border border-[#BDE8C7] mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Direct Developer Desk
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#183323] mt-1">{title}</h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">{subtitle}</p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Honeypot */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            suppressHydrationWarning
          />

          <div className="space-y-3.5 text-xs">
            <div>
              <label className="text-zinc-700 font-semibold block mb-1 font-sans">Your Full Name *</label>
              <input
                type="text"
                required
                suppressHydrationWarning
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Satyanarayana Raju"
                className="w-full bg-[#FAFAFA] border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000] text-xs font-sans"
              />
            </div>

            <div>
              <label className="text-zinc-700 font-semibold block mb-1 font-sans">Mobile Number (+91) *</label>
              <input
                type="tel"
                required
                suppressHydrationWarning
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 99593 54255"
                className="w-full bg-[#FAFAFA] border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000] text-xs font-sans"
              />
            </div>

            <div>
              <label className="text-zinc-700 font-semibold block mb-1 font-sans">Email Address (Optional)</label>
              <input
                type="email"
                suppressHydrationWarning
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. investor@gmail.com"
                className="w-full bg-[#FAFAFA] border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000] text-xs font-sans"
              />
            </div>

            <div>
              <label className="text-zinc-700 font-semibold block mb-1 font-sans">Preferred Site Visit Day</label>
              <select
                suppressHydrationWarning
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full bg-[#FAFAFA] border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000] text-xs font-sans"
              >
                <option value="This Saturday">This Saturday (Morning Slot)</option>
                <option value="This Sunday">This Sunday (Morning Slot)</option>
                <option value="Weekday Special Visit">Weekday Special Viewing</option>
                <option value="Virtual Video Walkthrough">Virtual Video Consultation (NRI / Outstation)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            suppressHydrationWarning
            disabled={loading}
            className="w-full py-4 rounded-xl bg-[#800000] hover:bg-[#600000] text-white font-extrabold text-xs transition-all shadow-lg shadow-maroon-900/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>{loading ? 'Processing...' : 'Confirm VIP Site Visit & Request Brochure'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[10px] text-zinc-500 text-center font-mono pt-1">
            🔒 Zero Spam Guarantee • 100% DPDP Act 2023 Compliant
          </p>
        </form>
      )}
    </div>
  );
}
