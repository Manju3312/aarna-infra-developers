import React from 'react';
import Link from 'next/link';
import { FileText, AlertCircle, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service & Statutory Disclaimers | Aarna Infra Developers',
  description:
    'Terms of service, statutory real estate advisory disclosures, TSRERA regulatory disclaimers, and land investment appreciation policies of Aarna Infra Developers.',
};

export default function TermsOfServicePage() {
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
          <FileText className="w-3.5 h-3.5 text-amber-300" />
          Legal & Regulatory Terms
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-white">
          Terms of Service & Statutory Advisory Disclaimers
        </h1>
        <p className="text-xs font-mono text-amber-200/80">
          Last Updated: February 01, 2026 • Governing Law: Telangana State Jurisdiction, India
        </p>
      </div>

      <div className="rounded-3xl bg-white text-zinc-900 border border-amber-300/60 p-6 sm:p-10 space-y-8 text-xs sm:text-sm leading-relaxed font-sans shadow-2xl">
        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">1. Nature of Real Estate Advisory</h2>
          <p className="text-zinc-700">
            The content, interactive layout diagrams, plot availability grids, financial simulators, and pricing estimates presented on <strong>aarnainfradevelopers.com</strong> (&ldquo;Website&rdquo;) are provided exclusively for informational, educational, and preliminary transaction evaluation purposes.
          </p>
          <p className="text-zinc-700">
            Nothing on this website constitutes a formal bilateral Agreement of Sale or registered conveyance. A legally binding purchase occurs solely upon the execution of a stamped Agreement of Sale and registered Sale Deed in accordance with the Registration Act, 1908.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">2. TSRERA, HMDA, & DTCP Statutory Disclosures</h2>
          <p className="text-zinc-700">
            Aarna Infra Developers markets projects sanctioned by statutory planning bodies (HMDA / DTCP) and registered under the <strong>Telangana State Real Estate Regulatory Authority (TSRERA)</strong> where applicable by law:
          </p>
          <div className="p-4 rounded-xl bg-[#FFF9F2] border border-amber-200 space-y-2 text-xs text-zinc-800">
            <p><strong>Golden Terra:</strong> HMDA Final LP No. 0466/HMDA/SWDL/2025 • DTCP LP: 74/2023/HRO/H1 • TSRERA: P02400010212</p>
            <p><strong>Green Meadows:</strong> DTCP LP No. LP/GP/204883/0017/2024 • TSRERA: P01400008728</p>
            <p><strong>Srinivasam:</strong> DTCP LP No. 382/2021/H • TSRERA: P02400004793</p>
            <p><strong>Myscape Songs of the Sun:</strong> TSRERA: P02400008721</p>
          </div>
          <p className="text-zinc-700">
            Prospective buyers are encouraged to verify project registrations directly on the official state portal: <a href="https://rera.telangana.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#750A14] font-bold hover:underline">rera.telangana.gov.in</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">3. Capital Appreciation & Forward-Looking Disclaimers</h2>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#750A14]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Statutory Risk Notice on Land Valuations</span>
            </div>
            <p className="text-zinc-700">
              Projections relating to historical 18-24% CAGR appreciation, Regional Ring Road (RRR) economic impacts, or agroforestry harvests are estimates derived from historical regional trends and standard CFT biomass models. Real estate and agricultural returns are subject to market forces, government fiscal policy, and macroeconomic cycles. Aarna Infra Developers makes no absolute warranty or guarantee of future capital returns.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">4. Plot Availability & Pricing Volatility</h2>
          <p className="text-zinc-700">
            All plot inventories, dimensions, facing allocations, and rates per square yard displayed on the Interactive Plot Master Plan are indicative of live stock at the time of publication and are subject to prior sale, price revisions, and statutory mortgage release timing by local municipal bodies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">5. Intellectual Property Rights</h2>
          <p className="text-zinc-700">
            The brand name &ldquo;Aarna Infra Developers&rdquo;, corporate logo, 3D architectural canvas shaders, layout blueprints, and original research essays are the proprietary intellectual property of Aarna Infra Developers and its Founder Arjun Kommalapati. Unauthorized scraping or commercial duplication is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-black text-[#500208]">6. Dispute Resolution & Legal Jurisdiction</h2>
          <p className="text-zinc-700">
            Any disputes, controversies, or claims arising out of or relating to this website or subsequent property transactions shall be governed exclusively by the laws of India and subject to the exclusive jurisdiction of the competent civil courts at Hyderabad, Telangana.
          </p>
        </section>
      </div>
    </div>
  );
}
