export interface ServicePillar {
  id: string;
  title: string;
  shortTag: string;
  iconName: string;
  description: string;
  deliverables: string[];
  statutoryBacking: string;
  ctaText: string;
}

export const SERVICES: ServicePillar[] = [
  {
    id: 'property-appraisal',
    title: 'Sovereign Property Appraisal & Valuation',
    shortTag: 'Pillar 01',
    iconName: 'TrendingUp',
    description: 'Data-driven, algorithmic valuation and micro-market appraisal for land parcels and plotted layouts across Hyderabad highway corridors. We assess historical registration benchmarks, projected master plan zoning shifts, and infrastructure capital velocity to establish exact fair market valuations.',
    deliverables: [
      'Comparative Market Analysis (CMA) based on recent registered sale deeds',
      'Infrastructure impact modeling (RRR proximity, Metro Phase 3, Industrial Zones)',
      'Rental yield and capital appreciation CAGR projections (3, 5, and 10-year forecasts)',
      'Formal valuation cert suitable for banking, NRI portfolio audits, and family trusts',
    ],
    statutoryBacking: 'Certified by Government-registered valuers and aligned with RICS real estate valuation standards.',
    ctaText: 'Request Valuation Audit',
  },
  {
    id: 'rera-layouts',
    title: 'RERA & HMDA Layout Planning & Advisory',
    shortTag: 'Pillar 02',
    iconName: 'ShieldCheck',
    description: 'End-to-end statutory layout consulting for land owners, investors, and joint-development partners. From initial contour survey and TS-bPASS submission to securing final HMDA/DTCP LP numbers and TSRERA registration compliance.',
    deliverables: [
      'Master plan zoning verification (R1, R2, Commercial, Peri-Urban)',
      'Total Station digital boundary survey and contour mapping',
      'Layout architectural drafting adhering strictly to 10% statutory open space norms',
      'TSRERA documentation drafting and 70% bank escrow account structuring',
    ],
    statutoryBacking: 'Strict adherence to Telangana Municipalities Act 2019, HMDA Act 2008, and Real Estate (RERA) Act 2016.',
    ctaText: 'Consult Layout Architect',
  },
  {
    id: 'legal-due-diligence',
    title: 'Legal Due Diligence & 30-Year Title Search',
    shortTag: 'Pillar 03',
    iconName: 'FileText',
    description: 'Uncompromising legal scrutiny led by senior Telangana High Court real estate advocates. We audit 30+ years of registered link documents, examine revenue pahani records, verify Dharani portal entries, and ensure zero court litigations or government ceiling disputes.',
    deliverables: [
      '30-Year Title Flow Report tracing back to original Inam/Patta grants',
      'Encumbrance Certificate (EC Form 15) verification across SRO and IGRS portals',
      'NALA Non-Agricultural Land Conversion scrutiny and Tahsildar mutation verification',
      'Court litigation search (High Court, District Courts, and Revenue Tribunals)',
    ],
    statutoryBacking: '100% Zero-Litigation Certificate guaranteed under legal opinion from High Court Senior Advocates.',
    ctaText: 'Initiate Title Search',
  },
  {
    id: 'property-maintenance',
    title: 'Post-Purchase Property Maintenance & Protection',
    shortTag: 'Pillar 04',
    iconName: 'Building',
    description: 'Permanent security, boundary stone maintenance, and land stewardship for plot owners—especially our global NRI investors. We safeguard your physical asset against encroachment, handle annual revenue tax compliances, and provide live drone-survey monitoring.',
    deliverables: [
      'Firm boundary stone erection with embossed survey and plot numbering',
      'Annual weed clearance, compound maintenance, and tree plantation care',
      'Bi-annual high-resolution 4K drone videography & photographic audit sent via WhatsApp',
      'Revenue tax payment tracking, municipal mutation monitoring, and local liaisoning',
    ],
    statutoryBacking: 'Dedicated asset management protocol with 24/7 security patrol oversight across all Aarna townships.',
    ctaText: 'Enroll in Land Protection',
  },
];

