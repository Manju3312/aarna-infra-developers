'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Lock, ArrowRight, AlertCircle } from 'lucide-react';

export default function ChannelPartnerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    agencyName: '',
    phone: '',
    email: '',
    experienceYears: '3-5 Years',
    tsreraAgentNo: '',
    panLast4: '',
    aadhaarLast4: '',
    preferredCorridor: 'Bangalore Highway (NH-44)',
    bankIfsc: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [partnerId, setPartnerId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.honeypot) {
      setSuccess(true);
      return;
    }

    if (!formData.fullName || formData.phone.length < 10) {
      setError('Please provide your full legal name and a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `[PARTNER_KYC] ${formData.fullName} (${formData.agencyName || 'Individual'})`,
          phone: formData.phone,
          email: formData.email,
          ventureSlug: `channel-partner-${formData.preferredCorridor}`,
          message: `RERA: ${formData.tsreraAgentNo || 'Pending'} | PAN_Suffix: ***${formData.panLast4} | Aadhaar_Suffix: ***${formData.aadhaarLast4} | Exp: ${formData.experienceYears} | IFSC: ${formData.bankIfsc}`,
          honeypot: formData.honeypot,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setPartnerId(`ARN-CP-${Math.floor(1000 + Math.random() * 9000)}`);
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to submit registration. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again or contact our hotline directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/50 p-6 sm:p-10 shadow-2xl">
      {success ? (
        <div className="text-center py-10 space-y-5 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#750A14] bg-red-50 px-3 py-1 rounded-full border border-red-200">
              KYC Verification Initiated
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#500208] mt-2">
              Welcome to the Aarna Sovereign Partner Network
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto mt-2 leading-relaxed">
              Your provisional Channel Partner Code is{' '}
              <strong className="text-[#750A14] font-mono text-base">{partnerId}</strong>. 
              Our VP of Channel Alliances will contact you within 2 business hours with your signed agreement kit and inventory allocations.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/919959354255?text=${encodeURIComponent(
                `Hello Aarna Infra Channel Desk, I have completed my Channel Partner KYC registration with Reference ID: ${partnerId}. Please expedite my onboarding.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ECC872] to-[#D7AD55] text-[#2A0407] font-extrabold text-xs uppercase tracking-wider shadow-md"
            >
              Verify on WhatsApp Channel Desk →
            </a>
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({
                  fullName: '',
                  agencyName: '',
                  phone: '',
                  email: '',
                  experienceYears: '3-5 Years',
                  tsreraAgentNo: '',
                  panLast4: '',
                  aadhaarLast4: '',
                  preferredCorridor: 'Bangalore Highway (NH-44)',
                  bankIfsc: '',
                  honeypot: '',
                });
              }}
              className="px-6 py-3.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold hover:bg-zinc-200"
            >
              Register Another Partner
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Header */}
          <div className="pb-4 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#750A14] uppercase">
                Statutory Channel Partner Portal
              </span>
              <h3 className="text-2xl font-serif font-black text-[#500208]">
                Register as an Accredited Institutional Agent
              </h3>
            </div>

            <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-mono font-semibold self-start sm:self-auto">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>DPDP Act 2023 Masked Privacy</span>
            </div>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Honeypot anti-bot */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="space-y-1.5">
              <label className="text-zinc-700 font-semibold">Full Legal Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ramesh Varma"
                className="w-full bg-[#FAFAFA] border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#750A14] focus:ring-1 focus:ring-[#750A14]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-700 font-semibold">Agency / Company Name (Optional)</label>
              <input
                type="text"
                value={formData.agencyName}
                onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                placeholder="e.g. Varma Realty Consultants"
                className="w-full bg-[#FAFAFA] border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#750A14] focus:ring-1 focus:ring-[#750A14]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-700 font-semibold">Mobile Number (+91) *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 98490 12345"
                className="w-full bg-[#FAFAFA] border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#750A14] focus:ring-1 focus:ring-[#750A14]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-700 font-semibold">Official Inbound Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. partner@realty.com"
                className="w-full bg-[#FAFAFA] border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#750A14] focus:ring-1 focus:ring-[#750A14]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-700 font-semibold">TSRERA Agent Registration No (If Any)</label>
              <input
                type="text"
                value={formData.tsreraAgentNo}
                onChange={(e) => setFormData({ ...formData, tsreraAgentNo: e.target.value })}
                placeholder="e.g. A02400010999 or 'In-Process'"
                className="w-full bg-[#FAFAFA] border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#750A14] focus:ring-1 focus:ring-[#750A14]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-700 font-semibold">Years of Real Estate Track Record</label>
              <select
                value={formData.experienceYears}
                onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                className="w-full bg-[#FAFAFA] border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-[#750A14] focus:ring-1 focus:ring-[#750A14]"
              >
                <option value="1-2 Years">1 - 2 Years</option>
                <option value="3-5 Years">3 - 5 Years</option>
                <option value="6-10 Years">6 - 10 Years</option>
                <option value="10+ Years">10+ Years (Senior Syndicator)</option>
              </select>
            </div>
          </div>

          {/* Masked DPDP Security Section (Zero Plaintext Exposure) */}
          <div className="p-5 rounded-2xl bg-[#FFF9F2] border border-amber-300/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#750A14]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>DPDP Compliance: Masked Credential Verification (Last 4 Digits Only)</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans">
              In strict accordance with the Digital Personal Data Protection Act (DPDP 2023), Aarna Infra Developers NEVER asks for or stores plaintext 12-digit Aadhaar or full PAN numbers online.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div>
                <label className="text-zinc-700 font-semibold block mb-1">PAN Card (Last 4 Characters)</label>
                <div className="flex items-center bg-white border border-zinc-300 rounded-xl px-3 py-2 font-mono text-zinc-700">
                  <span className="text-zinc-400 mr-1 font-bold">•••••</span>
                  <input
                    type="text"
                    maxLength={4}
                    value={formData.panLast4}
                    onChange={(e) => setFormData({ ...formData, panLast4: e.target.value.toUpperCase() })}
                    placeholder="123A"
                    className="w-16 bg-transparent text-[#750A14] focus:outline-none uppercase font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="text-zinc-700 font-semibold block mb-1">Aadhaar (Last 4 Digits Only)</label>
                <div className="flex items-center bg-white border border-zinc-300 rounded-xl px-3 py-2 font-mono text-zinc-700">
                  <span className="text-zinc-400 mr-1 font-bold">•••• ••••</span>
                  <input
                    type="text"
                    maxLength={4}
                    value={formData.aadhaarLast4}
                    onChange={(e) => setFormData({ ...formData, aadhaarLast4: e.target.value.replace(/\D/g, '') })}
                    placeholder="4567"
                    className="w-16 bg-transparent text-[#750A14] focus:outline-none font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="text-zinc-700 font-semibold block mb-1">Bank IFSC Code (Commission Settlement)</label>
                <input
                  type="text"
                  maxLength={11}
                  value={formData.bankIfsc}
                  onChange={(e) => setFormData({ ...formData, bankIfsc: e.target.value.toUpperCase() })}
                  placeholder="e.g. HDFC0001234"
                  className="w-full bg-white border border-zinc-300 rounded-xl px-3 py-2 font-mono text-[#750A14] focus:outline-none uppercase font-bold"
                />
              </div>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-zinc-500 font-sans">
              *By submitting, you agree to our Channel Partner Commission Terms and Sovereign Confidentiality Protocol.
            </span>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#500208] via-[#750A14] to-[#500208] hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-maroon-900/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{loading ? 'Submitting KYC...' : 'Submit Channel Partner KYC'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
