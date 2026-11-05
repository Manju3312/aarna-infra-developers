'use client';

import React, { useState } from 'react';
import { JobOpening } from '@/types';
import { X, CheckCircle2, ArrowRight, Briefcase, AlertCircle } from 'lucide-react';

export default function CareerApplicationModal({
  job,
  onClose,
}: {
  job: JobOpening;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    candidateName: '',
    phone: '',
    email: '',
    currentCompany: '',
    experienceYears: '3 Years',
    portfolioUrl: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.honeypot) {
      setSuccess(true);
      return;
    }

    if (!formData.candidateName || formData.phone.length < 10) {
      setError('Please provide your name and a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `[CAREER_APP] ${formData.candidateName} - ${job.title}`,
          phone: formData.phone,
          email: formData.email,
          ventureSlug: `career-${job.id}`,
          message: `Current: ${formData.currentCompany || 'N/A'} | Experience: ${formData.experienceYears} | Links: ${formData.portfolioUrl || 'None'}`,
          honeypot: formData.honeypot,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to submit application.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0E0E14] border border-amber-500/30 p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {success ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Application Received</h3>
            <p className="text-xs text-zinc-400">
              Thank you, <strong className="text-amber-300">{formData.candidateName}</strong>. Our HR talent acquisition desk will review your profile for the <strong>{job.title}</strong> role and contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
                <Briefcase className="w-3.5 h-3.5" />
                Job Application
              </div>
              <h3 className="text-xl font-serif font-bold text-white mt-1">{job.title}</h3>
              <p className="text-xs text-zinc-400">{job.department} • {job.location}</p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
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
            />

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-zinc-400 font-mono block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.candidateName}
                  onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
                  placeholder="e.g. Ananya Reddy"
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 font-mono block mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98490 12345"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>
                <div>
                  <label className="text-zinc-400 font-mono block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ananya@gmail.com"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 font-mono block mb-1">Current Employer / Freelance</label>
                  <input
                    type="text"
                    value={formData.currentCompany}
                    onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                    placeholder="e.g. Sobha / Self"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>
                <div>
                  <label className="text-zinc-400 font-mono block mb-1">Experience Level</label>
                  <input
                    type="text"
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    placeholder="e.g. 4 Years"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-zinc-400 font-mono block mb-1">LinkedIn Profile or Resume Link</label>
                <input
                  type="url"
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  placeholder="https://linkedin.com/in/..."
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400 text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 text-black font-extrabold text-xs transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <span>{loading ? 'Submitting Application...' : 'Submit Application to HR'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

