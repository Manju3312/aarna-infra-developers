import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LuxuryRealEstateBackground from '@/components/LuxuryRealEstateBackground';
import FloatingActionDock from '@/components/FloatingActionDock';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aarna Infra Developers | Ultra-Luxury Real Estate & Open Plots Hyderabad',
  description:
    'Sovereign-grade, HMDA & DTCP approved, TSRERA-registered residential open plots, managed commercial farmlands, and luxury gated communities along NH-44 Bangalore Highway, Srisailam Highway, and RRR. Led by Arjun Kommalapati (16+ Years Experience).',
  keywords: [
    'Aarna Infra Developers',
    'Arjun Kommalapati',
    'Open Plots Hyderabad',
    'Plots in Shadnagar',
    'HMDA Approved Plots',
    'DTCP Plots Hyderabad',
    'TSRERA Registered Ventures',
    'Golden Terra',
    'Green Meadows RRR',
    'Srinivasam Kadthal',
    'Golden Farm Balanagar',
    'Magadha Kadthal',
    'Myscape Kokapet',
  ],
  authors: [{ name: 'Arjun Kommalapati', url: 'https://aarnainfradevelopers.com' }],
  openGraph: {
    title: 'Aarna Infra Developers | Sovereign Real Estate Ventures Hyderabad',
    description:
      '100% Clear-Title, Zero-Litigation, HMDA & DTCP Approved Plots on NH-44 Bangalore Highway and Telangana Future City corridor.',
    url: 'https://aarnainfradevelopers.com',
    siteName: 'Aarna Infra Developers',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/aarna-square-logo.webp" as="image" type="image/webp" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFCFA] text-zinc-900 antialiased relative" suppressHydrationWarning>
        {/* Luxury Architectural Background Canvas */}
        <LuxuryRealEstateBackground />

        {/* Global Navigation */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="flex-1 relative z-10">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Dual WhatsApp & Aarna AI Advisor Floating Dock */}
        <FloatingActionDock />
      </body>
    </html>
  );
}

