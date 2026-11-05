'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Bot,
  X,
  Send,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  ArrowRight,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  actions?: { label: string; href?: string; onClick?: () => void; isWhatsApp?: boolean }[];
}

interface AarnaAiAdvisorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AarnaAiAdvisor({ isOpen, onClose }: AarnaAiAdvisorProps) {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Namaste! I am your **Aarna AI Land Advisor**.\n\nI provide instant statutory verification, pricing, and strategic growth analysis across all our master ventures along **NH-44 Bangalore Highway**, **Telangana Future City**, and the **Regional Ring Road (RRR)**.\n\nHow can I assist your land portfolio today?`,
      timestamp: 'Just now',
      actions: [
        { label: 'Explore Golden Terra (NH-44)', href: '/projects/golden-terra' },
        { label: 'Green Meadows (RRR Node)', href: '/projects/green-meadows' },
        { label: 'Golden Farm (50% Harvest Share)', href: '/projects/golden-farm' },
        { label: 'Book VIP Cab Visit', isWhatsApp: true },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Knowledge-based AI response generation
  const generateAiResponse = (query: string): { text: string; actions?: Message['actions'] } => {
    const q = query.toLowerCase();

    // 1. Golden Terra inquiries
    if (q.includes('golden terra') || q.includes('shadnagar') || (q.includes('nh-44') && !q.includes('farm'))) {
      return {
        text: `**Golden Terra** is our flagship highway venture positioned directly opposite the **Shadnagar Tollgate on NH-44 (Bangalore Highway)**.\n\n• **Approvals**: HMDA Final LP No. **0466/HMDA/SWDL/2025** & DTCP LP No. **74/2023/HRO/H1**\n• **TSRERA Reg**: **P02400010212**\n• **Pricing**: Starting from **₹18,500 - ₹19,500 / Sq. Yd**\n• **Plot Sizes**: 165, 200, 267, 300, and up to 1,100 Sq. Yds\n• **Infrastructure**: 100ft & 40ft blacktop roads, underground electricity, overhead tank with dedicated hydrants, 24/7 security with boom barrier\n• **Registry**: Spot registration with instant electronic Dharani passbook mutation. Eligible for bank loans from SBI, HDFC & ICICI.`,
        actions: [
          { label: 'View Golden Terra Layout Plan', href: '/projects/golden-terra' },
          { label: 'Request Official Cost Sheet', isWhatsApp: true },
        ],
      };
    }

    // 2. Green Meadows inquiries
    if (q.includes('green meadow') || q.includes('rrr') || q.includes('balanagar')) {
      return {
        text: `**Green Meadows** is our high-growth plotted community located directly on the **Regional Ring Road (RRR) junction node** in Balanagar (near Shadnagar).\n\n• **Approvals**: DTCP LP No. **LP/GP/204883/0017/2024**\n• **TSRERA Reg**: **P01400008728**\n• **Pricing**: **₹18,999 / Sq. Yd**\n• **Features**: 80ft main avenue, 33ft internal CC roads, underground drainage, landscaped grand entrance.\n• **ROI Potential**: Strategically located at the intersection of NH-44 and the 340-km 4-lane Regional Ring Road orbital expressway, with 30-35% capital appreciation observed.`,
        actions: [
          { label: 'Inspect Green Meadows', href: '/projects/green-meadows' },
          { label: 'Schedule Site Inspection', isWhatsApp: true },
        ],
      };
    }

    // 3. Golden Farm (Farmland with 50% harvest share)
    if (q.includes('farm') || q.includes('harvest') || q.includes('mahogany') || q.includes('avocado') || q.includes('tax')) {
      return {
        text: `**Golden Farm** is Telangana's premier managed commercial farmland model located along the Balanagar green corridor.\n\n• **Land Unit**: Freehold ownership in **2, 3, and 5 Gunta** parcels with individual Dharani Passbooks\n• **Pricing**: **₹6,500 / Sq. Yd** (Fractional farm deed)\n• **50% Commercial Harvest Revenue**: High-value plantation of **African Mahogany (Timber)**, **Agarwood (Oud)**, and **Hass Avocado** managed 100% by in-house Aarna agronomists.\n• **Tax Benefit**: All agricultural harvest returns are **100% tax-free** under Section 10(1) of the Indian Income Tax Act.\n• **Resort Amenities**: Weekend clubhouse, swimming pool, organic farm store, and guest suites.`,
        actions: [
          { label: 'Explore Golden Farm Details', href: '/projects/golden-farm' },
          { label: 'Get 10-Year Yield Calculator', isWhatsApp: true },
        ],
      };
    }

    // 4. Srinivasam (Future City Kadthal)
    if (q.includes('srinivasam') || q.includes('future city') || q.includes('kadthal') || q.includes('srisailam')) {
      return {
        text: `**Srinivasam** is our sovereign plotted venture situated in **Kadthal on Srisailam Highway**, strategically positioned behind the Kadthal Police Station and within direct reach of the **Telangana Future City** corridor.\n\n• **Approvals**: DTCP Sanctioned & TSRERA Registered\n• **Pricing**: **₹14,500 / Sq. Yd**\n• **Plot Sizes**: 150 to 500 Sq. Yds\n• **Connectivity**: Frictionless 25-minute drive to RGIA Shamshabad Airport and direct radial connectivity to the 30,000-acre Telangana Future City AI/Life Sciences hub.`,
        actions: [
          { label: 'View Srinivasam Layout', href: '/projects/srinivasam-open-plots-kadthal' },
          { label: 'Book VIP Site Visit', isWhatsApp: true },
        ],
      };
    }

    // 5. Legal / Due diligence / Clear title guarantee
    if (q.includes('legal') || q.includes('title') || q.includes('rera') || q.includes('hmda') || q.includes('dtcp') || q.includes('guarantee')) {
      return {
        text: `Every land parcel under **Aarna Infra Developers** undergoes an uncompromising **four-tier statutory due diligence protocol** led by Senior High Court Advocates:\n\n1. **30-Year Unbroken Title Search**: Complete trace verification of all link documents since 1994.\n2. **NALA Conversion**: Absolute non-agricultural conversion certified by District Revenue Authorities.\n3. **Sanction Validation**: Only final technical LP sanctions from HMDA or DTCP.\n4. **TSRERA Compliance**: 100% registered under Telangana RERA with dedicated escrow bank accounts.\n5. **Revenue Mutation**: Guaranteed spot registration with instant Dharani e-passbook generation.`,
        actions: [
          { label: 'View Legal Vetting Framework', href: '/services' },
          { label: 'Speak with Senior Legal Lead', isWhatsApp: true },
        ],
      };
    }

    // 6. Site visit / Cab booking
    if (q.includes('visit') || q.includes('cab') || q.includes('pickup') || q.includes('inspect') || q.includes('see')) {
      return {
        text: `We provide **chauffeured luxury AC cab pickups directly from your residence or corporate office** anywhere across the region, 7 days a week, at zero cost or obligation.\n\nOur Senior Land Advisory Lead will accompany you with official layout master blueprints, revenue survey maps, and legal title dossiers.`,
        actions: [
          { label: 'Confirm Cab Pickup on WhatsApp', isWhatsApp: true },
          { label: 'Call Founder Desk (+91 99593 54255)', href: 'tel:+919959354255' },
        ],
      };
    }

    // 7. Founder & Leadership
    if (q.includes('arjun') || q.includes('founder') || q.includes('ceo') || q.includes('md') || q.includes('about')) {
      return {
        text: `**Aarna Infra Developers** is founded and led by **Arjun Kommalapati**, a veteran real estate developer with over **16+ years of unblemished track record** in Telangana.\n\nArjun Kommalapati's sovereign pledge: *"In land investment, legal purity and title certainty are non-negotiable. Every plot we develop must be an asset we would proudly hold for our own family."*`,
        actions: [
          { label: 'Read Full Leadership Profile', href: '/about' },
          { label: 'Direct WhatsApp to Founder Desk', isWhatsApp: true },
        ],
      };
    }

    // 8. Telugu queries
    if (q.includes('namaste') || q.includes('ela') || q.includes('dhara') || q.includes('rate') || q.includes('plot') || q.includes('ventures')) {
      return {
        text: `ఆర్న ఇన్‌ఫ్రా డెవలపర్స్ వద్ద **NH-44 బెంగళూరు హైవే**, **రీజినల్ రింగ్ రోడ్ (RRR)** మరియు **తెలంగాణ ఫ్యూచర్ సిటీ** కారిడార్లలో 100% క్లియర్ టైటిల్, HMDA, DTCP మరియు TSRERA ఆమోదం పొందిన 7 ప్రీమియం వెంచర్లు అందుబాటులో ఉన్నాయి:\n\n• **Golden Terra (Shadnagar Tollgate)**: HMDA Final LP No. 0466/2025, ధర ₹18,500/Sq. Yd\n• **Green Meadows (RRR Balanagar)**: DTCP & TSRERA ఆమోదం, ధర ₹18,999/Sq. Yd\n• **Srinivasam (Future City Kadthal)**: DTCP ఆమోదం, ధర ₹14,500/Sq. Yd\n• **Golden Farm (Managed Farmlands)**: 50% వ్యవసాయ లాభాల వాటా, ధర ₹6,500/Sq. Yd\n\nమీ ఇంటి వద్దకే లగ్జరీ ఏసీ క్యాబ్ పంపించి ఉచిత సైట్ విజిట్ సదుపాయం కల్పిస్తాము.`,
        actions: [
          { label: 'అన్ని 7 వెంచర్లు చూడండి', href: '/projects' },
          { label: 'సైట్ విజిట్ బుక్ చేయండి (WhatsApp)', isWhatsApp: true },
        ],
      };
    }

    // General fallback with helpful guidance
    return {
      text: `Aarna Infra Developers curates sovereign real estate across three premier growth corridors:\n\n1. **NH-44 Bangalore Highway**: Flagship plotted townships like *Golden Terra* (Shadnagar Tollgate) and *Green Meadows* (RRR Node).\n2. **Srisailam Highway (Telangana Future City)**: Plotted communities like *Srinivasam* (Kadthal).\n3. **Managed Commercial Farmlands**: *Golden Farm* with 50% tax-free African Mahogany & Hass Avocado harvest yields.\n\nAll ventures feature 100% clear titles, 30-year high court legal clearance, and instant spot registration.`,
      actions: [
        { label: 'Explore All 7 Ventures', href: '/projects' },
        { label: 'Download HMDA 2031 Dossier', href: '/hmda-master-plan' },
        { label: 'Chat with Senior Advisor', isWhatsApp: true },
      ],
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate instant AI typing effect
    setTimeout(() => {
      const response = generateAiResponse(query);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: response.text,
        timestamp: 'Just now',
        actions: response.actions,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleQuickPrompt = (promptText: string) => {
    handleSend(promptText);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[420px] sm:h-[620px] z-50 flex flex-col bg-white rounded-none sm:rounded-3xl border border-[#BDE8C7] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* =========================================================================
          MODAL HEADER: LUXURY GOLD & PINE CORPORATE BRANDING
         ========================================================================= */}
      <div className="bg-gradient-to-r from-[#183323] via-[#244633] to-[#12281B] text-white p-4 border-b border-[#D4AF37]/40 flex items-center justify-between shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#800000] via-[#A00000] to-[#500208] border border-[#D4AF37] flex items-center justify-center shadow-md">
            <Sparkles className="w-5 h-5 text-[#F5D061] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-serif font-black text-sm text-white tracking-wide">
                Aarna AI Land Advisor
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-[#D9FBE0] text-[#0D5C2C] text-[9px] font-mono font-bold uppercase">
                Active 24/7
              </span>
            </div>
            <p className="text-[10px] text-emerald-200/90 font-mono mt-0.5">
              HMDA • DTCP • TSRERA Statutory Intelligence
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close AI Assistant"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* =========================================================================
          CHAT MESSAGES BODY
         ========================================================================= */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFCFA]">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5`}
          >
            <div
              className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed font-sans shadow-sm ${
                m.sender === 'user'
                  ? 'bg-[#800000] text-white rounded-br-sm'
                  : 'bg-white text-zinc-800 border border-[#BDE8C7] rounded-bl-sm'
              }`}
            >
              {/* Message Content with Markdown Bold/Bullet rendering */}
              <div className="whitespace-pre-wrap space-y-1">
                {m.text.split('\n').map((line, lIdx) => {
                  if (line.startsWith('• ')) {
                    return (
                      <div key={lIdx} className="flex items-start gap-1.5 pl-1 my-0.5">
                        <span className="text-[#800000] font-bold">✓</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: line
                              .slice(2)
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#183323]">$1</strong>'),
                          }}
                        />
                      </div>
                    );
                  }
                  return (
                    <p
                      key={lIdx}
                      dangerouslySetInnerHTML={{
                        __html: line.replace(
                          /\*\*(.*?)\*\*/g,
                          m.sender === 'user'
                            ? '<strong class="font-bold text-white">$1</strong>'
                            : '<strong class="font-bold text-[#183323]">$1</strong>'
                        ),
                      }}
                    />
                  );
                })}
              </div>

              {/* Action Buttons inside message */}
              {m.actions && m.actions.length > 0 && (
                <div className="pt-3 mt-2 border-t border-zinc-100 flex flex-wrap gap-1.5">
                  {m.actions.map((act, aIdx) => {
                    if (act.isWhatsApp) {
                      return (
                        <a
                          key={aIdx}
                          href="https://wa.me/919959354255?text=Hello%20Aarna%20Infra,%20I%20would%20like%20to%20inquire%20about%20your%20ventures."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 px-2.5 rounded-lg bg-[#25D366] text-white font-bold text-[10px] flex items-center gap-1 shadow-sm hover:brightness-105 transition-all"
                        >
                          <MessageCircle className="w-3 h-3" />
                          {act.label}
                        </a>
                      );
                    }
                    if (act.href) {
                      return (
                        <Link
                          key={aIdx}
                          href={act.href}
                          onClick={onClose}
                          className="py-1 px-2.5 rounded-lg bg-[#D9FBE0] text-[#0D5C2C] border border-[#BDE8C7] font-bold text-[10px] flex items-center gap-1 hover:bg-[#c7f4d0] transition-all"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </Link>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>

            <span className="text-[9px] font-mono text-zinc-400 px-1">
              {m.sender === 'ai' ? 'Aarna AI' : 'You'} • {m.timestamp}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-[#BDE8C7] max-w-[120px] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#800000] animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 rounded-full bg-[#0D5C2C] animate-bounce [animation-delay:0.4s]" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* =========================================================================
          QUICK PROMPT SUGGESTION PILLS
         ========================================================================= */}
      <div className="p-2.5 bg-white border-t border-[#BDE8C7] overflow-x-auto flex items-center gap-1.5 scrollbar-none shrink-0">
        <button
          type="button"
          onClick={() => handleQuickPrompt('Tell me about Golden Terra HMDA approvals and pricing')}
          className="shrink-0 px-3 py-1 rounded-full bg-[#D9FBE0] hover:bg-[#c7f4d0] text-[#0D5C2C] text-[10px] font-mono font-bold border border-[#BDE8C7] transition-all cursor-pointer"
        >
          🏷️ Golden Terra Details
        </button>
        <button
          type="button"
          onClick={() => handleQuickPrompt('What is Green Meadows location on the Regional Ring Road?')}
          className="shrink-0 px-3 py-1 rounded-full bg-[#D9FBE0] hover:bg-[#c7f4d0] text-[#0D5C2C] text-[10px] font-mono font-bold border border-[#BDE8C7] transition-all cursor-pointer"
        >
          🛣️ Green Meadows RRR
        </button>
        <button
          type="button"
          onClick={() => handleQuickPrompt('How does the 50% farmland harvest revenue model work?')}
          className="shrink-0 px-3 py-1 rounded-full bg-[#D9FBE0] hover:bg-[#c7f4d0] text-[#0D5C2C] text-[10px] font-mono font-bold border border-[#BDE8C7] transition-all cursor-pointer"
        >
          🌳 50% Harvest Share
        </button>
        <button
          type="button"
          onClick={() => handleQuickPrompt('How can I schedule a VIP chauffeured site visit?')}
          className="shrink-0 px-3 py-1 rounded-full bg-[#D9FBE0] hover:bg-[#c7f4d0] text-[#0D5C2C] text-[10px] font-mono font-bold border border-[#BDE8C7] transition-all cursor-pointer"
        >
          🚗 Book VIP Cab Visit
        </button>
      </div>

      {/* =========================================================================
          INPUT BAR
         ========================================================================= */}
      <div className="p-3 bg-white border-t border-zinc-200 flex items-center gap-2 shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask about ventures, HMDA, RERA, ROI..."
          className="flex-1 px-4 py-2.5 rounded-full bg-[#F5F8F6] border border-[#BDE8C7] focus:border-[#800000] focus:outline-none text-xs text-zinc-900 placeholder:text-zinc-400 font-sans"
        />

        <button
          type="button"
          onClick={() => handleSend()}
          disabled={!input.trim()}
          className="w-9 h-9 rounded-full bg-[#800000] disabled:bg-zinc-200 hover:bg-[#600000] text-white flex items-center justify-center transition-all shadow-md shrink-0 cursor-pointer"
          aria-label="Send query"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

