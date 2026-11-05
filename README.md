# Aarna Infra Developers | Sovereign Real Estate Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-maroon?style=for-the-badge)](#)

Enterprise-grade, sovereign web platform for **Aarna Infra Developers** (`aarnainfradevelopers.com`). Engineered to showcase ultra-luxury residential open plots, managed commercial farmlands, and gated townships across Telangana's high-growth highway corridors.

---

## 🏛️ Executive Overview

Founded and led by **Arjun Kommalapati** (16+ Years Industry Track Record), Aarna Infra Developers operates with an institutional real estate mandate:
- **100% Clear Marketable Titles**: Every acre is backed by an unbroken 30-year link document search certified by Senior High Court Advocates.
- **Zero-Litigation Assurance**: Absolute title purity with NALA non-agricultural conversion and official SRO Encumbrance Certificates (Form 15).
- **Statutory Sanctions**: Final Technical LP Sanctions from **HMDA** and **DTCP**, registered with **TSRERA**, and deeded with electronic **Telangana Dharani Passbooks**.
- **Bank Loan Approvals**: Fully approved for immediate home and plot loans by **SBI**, **HDFC**, and **ICICI**.

---

## 🗺️ Master Ventures Portfolio

| Venture | Location / Corridor | Statutory Sanctions | Plot Dimensions | Pricing |
| :--- | :--- | :--- | :--- | :--- |
| **Golden Terra** *(Flagship)* | Beside Shadnagar Tollgate, NH-44 | HMDA LP `0466/2025` • TSRERA `P02400010212` | 165 – 1,100 Sq. Yds | From ₹18,500/sq.yd |
| **Green Meadows** | Balanagar, RRR Junction Node | DTCP LP `204883/2024` • TSRERA `P01400008728` | 200 – 1,000 Sq. Yds | ₹18,999/sq.yd |
| **Srinivasam** | Kadthal, Telangana Future City | DTCP Approved • TSRERA Registered | 150 – 500 Sq. Yds | ₹14,500/sq.yd |
| **Golden Farm** | Balanagar Green Corridor | 100% Freehold Dharani Passbook | 2, 3, 5 Guntas | ₹6,500/sq.yd |
| **Magadha** | Kadthal, Srisailam Highway | DTCP Approved • Shivoham Theme Park | Luxury Cottages | Custom Tier |
| **Golden City** | Sadashivpet, NH-65 Mumbai Hwy | DTCP Technical Approved | Plotted Township | Value Segment |
| **Myscape Songs of the Sun** | Kokapet Financial District | High-Rise HMDA Sanctioned | 4 & 5 BHK Sky Villas | Ultra-Luxury |

> **Special Agricultural Model**: **Golden Farm** features a 50% commercial revenue-sharing model where high-value **African Mahogany** and **Hass Avocado** trees are planted and managed by in-house agronomists. All returns are **100% tax-free** under Section 10(1) of the Indian Income Tax Act.

---

## ✨ Key Technical Innovations

### 1. 🤖 Aarna AI Land Advisor
- Built-in intelligent real estate AI assistant accessible 24/7.
- Delivers instant statutory verification (HMDA / DTCP / RERA), pricing breakdowns, 3-5 year ROI projections, and site visit bookings.
- **Bilingual Intelligence**: Native natural language understanding in both **English** and **Telugu**.
- Direct contextual action pills ("View Layout Plan", "Request Cost Sheet", "Confirm VIP AC Cab").

### 2. ⚡ Blazing Fast Performance (Sub-300ms Load Time)
- **94%+ Image Bandwidth Reduction**: All high-resolution scraped assets and logos converted to ultra-lightweight next-gen **WebP** formats (e.g., Hero image reduced from `2,748 KB` to `170 KB`; Official logo reduced from `571 KB` to `17.9 KB`).
- **Resource Preloading**: High-priority assets preloaded via `<link rel="preload">` in `<head>`.
- **First Load JS**: Only **103 kB** shared across all 35 static routes.

### 3. 🌐 Architectural 3D Cadastral & Skyline Engine (Three.js)
- Interactive 3D wireframe canvas displaying modern high-rise skylines, cadastral plotted parcels, and animated pulse beams along NH-44 and RRR.
- **Zero Main-Thread Contention**: Initialized deferred via `requestIdleCallback` so DOM hydration and user clicks respond in `<30ms`.
- **Intelligent CPU/GPU Sleep**: Render loop automatically pauses when the browser tab is hidden (`document.hidden`), preserving 100% battery and system resources.

### 4. 📱 Unified Floating Action Dock
- **Top Button**: Golden 24K Halo AI Advisor (`Aarna AI`) with live chat window.
- **Bottom Button**: WhatsApp Direct Live Support (`+91 99593 54255`) with instant pre-filled inquiry intents.
- Designed with safe-area responsive padding, ensuring it never overlaps or clips on mobile/desktop screens.

---

## 🛠️ Tech Stack

- **Core Framework**: [Next.js 15.1 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Programming Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **3D Graphics Engine**: [Three.js](https://threejs.org/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Fonts**: Playfair Display (Serif), Montserrat (Sans), JetBrains Mono (Code/Stats)

---

## 📁 Project Directory Structure

```text
aarna/
├── app/                                # Next.js App Router (All 35 Static Routes)
│   ├── layout.tsx                      # Root Layout with Font Definitions & Floating Dock
│   ├── page.tsx                        # Homepage with Hero, Flagship Spotlight & Metrics
│   ├── about/                          # Founder & Corporate Leadership Story
│   ├── contact/                        # Corporate Inquiries & Google Maps Integration
│   ├── projects/                       # Full Master Ventures Catalog & [slug] details
│   ├── hmda-master-plan/               # HMDA 2031 Interactive Portal & RRR Alignment
│   ├── farmlands/                      # Golden Farm 50% Harvest Share Portal
│   ├── openplots/                      # Residential Plotted Communities
│   ├── villas-houses/                  # Theme Villas & Cottages
│   ├── apartments/                     # Kokapet High-Rise Apartments
│   ├── channel-partner/                # RERA Broker & Channel Partner Registration
│   ├── career/                         # Corporate Hiring Portal
│   ├── blogs/                          # SEO Real Estate Educational Articles
│   └── api/v1/                         # Lead Intake & Plots REST Endpoints
├── components/                         # Modular Component Architecture
│   ├── AarnaLogo.tsx                   # Official Dual-Layer Brand Logo (17KB WebP + SVG)
│   ├── Navbar.tsx                      # Mint Green (#D9FBE0) Header with Dropdowns
│   ├── Footer.tsx                      # Enterprise Footer with Statutory Seals
│   ├── FloatingActionDock.tsx          # Dual Floating WhatsApp + AI Assistant Dock
│   ├── AarnaAiAdvisor.tsx              # Interactive 24/7 AI Concierge Modal
│   ├── LuxuryRealEstateBackground.tsx  # Three.js Architectural Cadastral Background
│   ├── VentureCard.tsx                 # Real Estate Venture Showcase Card
│   ├── CorridorQuickSearch.tsx         # Multi-Corridor & Category Filtering Bar
│   └── LeadIntakeForm.tsx              # VIP Chauffeured Cab Inspection Form
├── data/
│   ├── projects.ts                     # 7 Master Ventures Complete Data Ledger
│   └── services.ts                     # 4 Core Statutory Real Estate Pillars
├── public/
│   ├── images/                         # Official Logos & Arjun Kommalapati Portraits
│   └── scraped/                        # 50+ Real Layout Photographs (WebP Optimized)
├── types/                              # Strict TypeScript Definitions
└── next.config.mjs                     # Production Engine & Image Routing Configuration
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18.18.0 or higher
- [npm](https://www.npmjs.com/) (or `pnpm` / `yarn`)

### 1. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/aarnainfradevelopers/aarna.git
cd aarna
npm install
```

### 2. Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with live hot-reloading.

### 3. Production Build
Create an optimized production build:
```bash
npm run build
```
Next.js will generate all 35 static routes with complete SSG optimization.

### 4. Run Production Server
```bash
npm run start
```

---

## 🏢 Corporate Headquarters

**Aarna Infra Developers**  
#101, Road No: 10, Kakatiya Hills, Madhapur, Telangana – 500081, India  
- **Phone / WhatsApp**: [+91 99593 54255](https://wa.me/919959354255)  
- **Website**: [https://aarnainfradevelopers.com](https://aarnainfradevelopers.com)  
- **Office Hours**: Monday – Sunday, 9:00 AM – 7:30 PM IST  

---

*© 2026 Aarna Infra Developers. All Rights Reserved. Building Dreams. Delivering Excellence.*

