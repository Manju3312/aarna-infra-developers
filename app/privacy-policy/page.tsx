import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy (DPDP Act 2023 Compliant) | Aarna Infra Developers',
  description:
    'Comprehensive Digital Personal Data Protection (DPDP Act 2023) compliant privacy policy of Aarna Infra Developers. Complete transparency on data fiduciary duties, masked credentials, and your rights.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-200 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#65080F] border border-amber-400/50 text-amber-200 text-xs font-mono font-bold uppercase tracking-widest shadow-md">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
          DPDP Act 2023 Sovereign Compliance
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-white">
          Digital Personal Data Protection Policy
        </h1>
        <p className="text-xs font-mono text-amber-200/80">
          Last Updated & Ratified: February 01, 2026 • Effective Date: Immediate
        </p>
      </div>

      <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/60 p-6 sm:p-10 space-y-8 text-xs sm:text-sm leading-relaxed font-sans shadow-2xl">
        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">1. Data Fiduciary Identity</h2>
          <p className="text-zinc-700">
            This privacy policy governs the processing of personal data collected by <strong>Aarna Infra Developers</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), acting as the Data Fiduciary under the provisions of the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
          </p>
          <div className="p-4 rounded-xl bg-[#FFF9F2] border border-amber-200 space-y-1 font-mono text-xs text-zinc-800">
            <p><strong>Corporate Registered Office:</strong> #101, Road No: 10, Kakatiya Hills, Madhapur, Hyderabad – 500081, Telangana, India</p>
            <p><strong>Official Inbound Email:</strong> info@aarnainfradevelopers.com</p>
            <p><strong>Grievance Hotline:</strong> +91 99593 54255</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">2. Scope & Categories of Personal Data Collected</h2>
          <p className="text-zinc-700">
            We collect and process digital personal data solely for legitimate real estate inquiry and statutory regulatory compliance purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-700">
            <li><strong>Prospective Buyer Inquiries:</strong> Full Name, Mobile Phone Number, Email Address, Preferred Highway Corridor, and VIP Site Visit date preferences.</li>
            <li><strong>Statutory Channel Partner KYC:</strong> Full Legal Name, Agency registration, TSRERA Agent Registration ID, bank IFSC code, and strictly masked credentials.</li>
            <li><strong>Automated Digital Analytics:</strong> Non-personally identifiable IP addresses, device identifiers, and session timestamps used solely for website security and anti-bot mitigation.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">3. Masked Credentials Protocol (Zero Plaintext Aadhaar/PAN)</h2>
          <p className="text-zinc-700">
            In accordance with Section 8(5) of the DPDP Act and UIDAI guidelines, Aarna Infra Developers maintains a zero-plaintext credential policy:
          </p>
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-[#750A14] text-xs space-y-1">
            <p className="font-bold">🔒 Masked Cryptographic Verification:</p>
            <p>
              We NEVER capture, store, or transmit full 12-digit Aadhaar numbers or full 10-character PAN identifiers over our web forms. All identity verification captures only the last 4 alphanumeric characters (e.g., •••• •••• 4567), ensuring that your sovereign identity documents cannot be intercepted or exposed.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">4. Grounds of Processing & Consent</h2>
          <p className="text-zinc-700">
            Personal data is processed only when the Data Principal has given voluntary consent by submitting a site visit request, requesting a WhatsApp layout brochure, or completing a Channel Partner application. We do NOT sell, rent, lease, or monetize your contact information to third-party telemarketing aggregators under any circumstances.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">5. Rights of the Data Principal</h2>
          <p className="text-zinc-700">Under the DPDP Act 2023, you retain the following statutory rights:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-700">
            <li><strong>Right to Access:</strong> You may request a summary of the personal data undergoing processing by our systems.</li>
            <li><strong>Right to Correction & Erasure:</strong> You may demand the correction of inaccurate details or the complete deletion of your contact records once your property transaction is finalized.</li>
            <li><strong>Right to Withdraw Consent:</strong> You may opt out of promotional WhatsApp or email updates at any time by messaging &ldquo;STOP&rdquo; to +91 99593 54255.</li>
            <li><strong>Right of Grievance Redressal:</strong> Direct escalation to our designated Data Protection Officer.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">6. Data Protection Officer (DPO) Contact</h2>
          <p className="text-zinc-700">
            For any statutory inquiries, consent withdrawals, or grievance escalations, please contact:
          </p>
          <div className="p-4 rounded-xl bg-zinc-100 border border-zinc-200 space-y-1 text-xs text-zinc-800">
            <p><strong>Attention:</strong> Legal Compliance & Data Protection Officer</p>
            <p><strong>Aarna Infra Developers</strong></p>
            <p>#101, Road No: 10, Kakatiya Hills, Madhapur, Hyderabad – 500081, Telangana, India</p>
            <p><strong>Email:</strong> legal@aarnainfradevelopers.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
