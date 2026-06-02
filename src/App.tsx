/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import {
  Gavel,
  Sparkles,
  TrendingUp,
  Leaf,
  ShieldCheck,
  ArrowRight,
  Check,
  X,
  Plus,
  Compass,
  Briefcase,
  Layers,
  HelpCircle,
  Menu,
  MessageSquareDiff
} from 'lucide-react';

import ThreeCanvas from './components/ThreeCanvas';
import BargainSimulator from './components/BargainSimulator';
import BidAuctions from './components/BidAuctions';
import SaaSCharts from './components/SaaSCharts';
import CalcSection from './components/CalcSection';
import Roadmap from './components/Roadmap';
import WhoWeServe from './components/WhoWeServe';
import TeamSection from './components/TeamSection';
import TrustedBy from './components/TrustedBy';

export default function App() {
  const [emailValue, setEmailValue] = useState('');
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [assignedBadgeNo, setAssignedBadgeNo] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!emailValue.trim() || !emailValue.includes('@')) return;
    setHasSubscribed(true);
    setAssignedBadgeNo(Math.floor(Math.random() * 8000) + 1200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-amber-500 selection:text-stone-950 relative overflow-hidden">
      
      {/* Absolute Ambient Background Lights (Floating radial glows) */}
      <div className="absolute top-[10%] left-[-10%] w-[45vw] h-[45vw] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-10%] w-[50vw] h-[50vw] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-[20%] w-[35vw] h-[35vw] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. FLOATING NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-stone-950/75 border-b border-stone-900/80 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Logo Node */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-teal-500 p-[1.5px] shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <div className="w-full h-full bg-stone-950 rounded-full flex items-center justify-center font-bold text-sm tracking-tighter text-stone-100">
                FR
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-stone-100 tracking-tight block">Fashion Resale</span>
              <span className="text-[9px] text-stone-500 font-mono tracking-wider block uppercase">Cloud Bazar</span>
            </div>
          </div>

          {/* Desktop Navigation Link Nodes */}
          <div className="hidden md:flex items-center gap-7">
            <button onClick={() => scrollToSection('triple-play')} className="text-xs text-stone-400 hover:text-stone-200 transition-colors cursor-pointer">Interactive Tools</button>
            <button onClick={() => scrollToSection('market-stats')} className="text-xs text-stone-400 hover:text-stone-200 transition-colors cursor-pointer">Market Outlook</button>
            <button onClick={() => scrollToSection('target-audiences')} className="text-xs text-stone-400 hover:text-stone-200 transition-colors cursor-pointer">Demographics</button>
            <button onClick={() => scrollToSection('edge-comparison')} className="text-xs text-stone-400 hover:text-stone-200 transition-colors cursor-pointer">Competitive Edge</button>
            <button onClick={() => scrollToSection('leadership')} className="text-xs text-stone-400 hover:text-stone-200 transition-colors cursor-pointer">Founders</button>
          </div>

          {/* Right Action Metric Node */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex flex-col items-end text-right font-mono text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-stone-300 font-bold">24,582 ITEMS</span>
              </div>
              <span className="text-stone-600 uppercase font-medium">Verified Active Live</span>
            </div>
            <button 
              onClick={() => scrollToSection('register-node')} 
              className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-semibold rounded-lg font-sans shadow-sm transition-all cursor-pointer"
            >
              Early Access
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-stone-400 hover:text-stone-200 focus:outline-none">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-950 border-t border-stone-900 p-4 space-y-3 flex flex-col items-stretch animate-fade-in absolute w-full top-16 left-0">
            <button onClick={() => scrollToSection('triple-play')} className="text-stone-400 hover:text-stone-200 py-1.5 text-left text-xs cursor-pointer">Interactive Tools</button>
            <button onClick={() => scrollToSection('market-stats')} className="text-stone-400 hover:text-stone-200 py-1.5 text-left text-xs cursor-pointer">Market Outlook</button>
            <button onClick={() => scrollToSection('target-audiences')} className="text-stone-400 hover:text-stone-200 py-1.5 text-left text-xs cursor-pointer">Demographics</button>
            <button onClick={() => scrollToSection('edge-comparison')} className="text-stone-400 hover:text-stone-200 py-1.5 text-left text-xs cursor-pointer">Competitive Edge</button>
            <button onClick={() => scrollToSection('leadership')} className="text-stone-400 hover:text-stone-200 py-1.5 text-left text-xs cursor-pointer">Founders</button>
            <button onClick={() => scrollToSection('register-node')} className="py-2 bg-amber-500 text-stone-950 font-bold rounded-lg text-xs cursor-pointer text-center">Request Access Portal</button>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION WITH THREEJS LOOP */}
      <header className="relative max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Copy (Left) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-amber-500/10 to-teal-500/10 border border-amber-500/15 rounded-full z-10 relative">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="text-[10px] text-amber-500 font-mono tracking-widest uppercase font-semibold">
              sustainable circular retail technology
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-stone-100 tracking-tight leading-none">
            Because Great Style Deserves a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-teal-400">Second Chance</span>
          </h1>

          <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-xl">
            Introducing the digital evolution of unorganized resale. Fashion Resale blends the excitement of thrift hunting and competitive live bidding with expert item verification diagnostics.
          </p>

          {/* Input grab-box */}
          <div className="pt-2">
            {hasSubscribed ? (
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex items-center gap-3.5 animate-fade-in max-w-lg">
                <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <p className="text-xs text-stone-200 font-semibold uppercase font-mono">Registry Spot Locked In!</p>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Welcome to the circular loop. Your premium Member ID is <strong className="text-amber-500">#{assignedBadgeNo}</strong>. Secure SDK invites are outbound.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                <input
                  type="email"
                  required
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  id="hero-email-form-input"
                  placeholder="Enter email to enlist on Beta Node..."
                  className="flex-1 bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-600 rounded-xl px-4 py-3 text-xs font-mono focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button
                  type="submit"
                  id="hero-submit-btn"
                  className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  Request Early Access <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <p className="text-[11px] text-stone-500 font-mono mt-2 uppercase">
              Free listing, zero-inventory risk node • Powered by WebGL
            </p>
          </div>
        </div>

        {/* Three.js interactive 3D container (Right) */}
        <div className="lg:col-span-6 relative flex items-center justify-center bg-stone-950 rounded-3xl border border-stone-900 min-h-[450px]">
          {/* Outer floating metadata markers */}
          <div className="absolute top-4 left-4 z-10 flex flex-col font-mono text-[9px] text-stone-500 uppercase">
            <span>Model: Torus Knot Lifecycle</span>
            <span>Vertices: 2,800 points density</span>
          </div>
          <div className="absolute top-4 right-4 z-10 flex flex-col font-mono text-[9px] text-stone-500 text-right uppercase">
            <span>Render: WebGL standard alpha</span>
            <span>Framerate: Target 60fps responsive</span>
          </div>

          <ThreeCanvas />
        </div>
      </header>

      {/* 3. SUSTAINABILITY STATEMENT INTERACTIVE BANNER */}
      <section className="bg-stone-950 border-y border-stone-900/60 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative">
          <div className="space-y-2 max-w-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 text-[10px] font-mono tracking-widest uppercase font-semibold block">
              circular economy vision statement
            </span>
            <p className="text-xl md:text-2xl font-sans text-stone-300 italic font-medium leading-relaxed">
              "The most sustainable garment is the one already in existence."
            </p>
            <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">
              — FASHION RESALE VISION • SLIDE PRESENTATION PRINCIPLE
            </p>
          </div>

          {/* Static metric highlights */}
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="bg-stone-900/40 p-4 rounded-xl border border-stone-850 text-center w-[160px]">
              <span className="text-[10px] text-stone-500 font-mono uppercase block">Water saved eq.</span>
              <span className="text-2xl font-mono font-bold text-teal-400 mt-1 block">9.9B LTRS</span>
            </div>
            <div className="bg-stone-900/40 p-4 rounded-xl border border-stone-850 text-center w-[160px]">
              <span className="text-[10px] text-stone-500 font-mono uppercase block">Co2 Emissions off.</span>
              <span className="text-2xl font-mono font-bold text-emerald-400 mt-1 block">45M TONS</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY HIGH-PROFILE BRANDS MARQUEE */}
      <TrustedBy />

      {/* 4. THE TRIPLE-PLAY INTERACTIVE SIMULATOR LABS */}
      <section id="triple-play" className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 space-y-16">
        
        {/* Title details */}
        <div className="max-w-3xl">
          <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-mono border border-amber-500/20 rounded-full tracking-wider uppercase inline-block">
            SaaS Playground Sandbox
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-stone-100 tracking-tight mt-3">
            Interact with Our Triple-Threat Core Engine
          </h2>
          <p className="text-sm md:text-base text-stone-400 mt-2.5 leading-relaxed">
            Slide requirements detail our hybrid platform features. Below is the live simulation sandbox of how our bidding auctions, direct bargain systems, and expert verification diagnostics work directly inside Cloud Bazar:
          </p>
        </div>

        {/* 4a. Gavel Auction Simulator */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-xs text-amber-500 font-mono font-semibold uppercase">
            <Gavel className="w-4 h-4" />
            <span>Diagnostic Lab 01 • Bidding Auctions Platform</span>
          </div>
          <BidAuctions />
        </div>

        {/* 4b. Chat Bargaining Slider Simulator */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-xs text-teal-400 font-mono font-semibold uppercase">
            <MessageSquareDiff className="w-4 h-4" />
            <span>Diagnostic Lab 02 • Direct Bargaining Slider Interface</span>
          </div>
          <BargainSimulator />
        </div>
      </section>

      {/* 5. INTERACTIVE CHARTS & TAM OPPORTUNITIES */}
      <section id="market-stats" className="py-16 bg-stone-950 border-t border-stone-900/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          <SaaSCharts />
        </div>
      </section>

      {/* 6. WHO WE SERVE SECTION OVERVIEW */}
      <section id="target-audiences" className="py-16 max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        <WhoWeServe />
      </section>

      {/* 7. INTERACTIVE IMPACT ASSESSMENT CALCULATOR */}
      <section id="sustainability-calc" className="py-16 bg-stone-950 border-t border-stone-900/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          <CalcSection />
        </div>
      </section>

      {/* 8. COMPETITIVE EDGE FEATURE GRID */}
      <section id="edge-comparison" className="py-16 max-w-7xl mx-auto px-4 md:px-6 space-y-10">
        <div className="max-w-2xl">
          <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-mono border border-amber-500/20 rounded-full tracking-wider uppercase inline-block">
            Competitive Landscape
          </span>
          <h3 className="text-2xl md:text-3xl font-sans font-semibold text-stone-100 mt-3 tracking-tight">
            Our Competitive Edge
          </h3>
          <p className="text-xs md:text-sm text-stone-400 leading-relaxed mt-2.5">
            Unlike clinical linear marketplaces, we preserve the thrill of the hunt. Our bidding and bargaining systems replicate the social and competitive nature of real-world markets.
          </p>
        </div>

        {/* Direct Table representation mapped to Slide 13 */}
        <div className="overflow-x-auto rounded-2xl border border-stone-850 bg-stone-950">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-stone-900 border-b border-stone-850">
                <th className="p-4 text-stone-300 font-bold tracking-tight uppercase font-mono text-[10px]">Market Feature</th>
                <th className="p-4 text-stone-400 font-semibold tracking-tight uppercase font-mono text-[10px]">Poshmark</th>
                <th className="p-4 text-stone-400 font-semibold tracking-tight uppercase font-mono text-[10px]">ThredUp</th>
                <th className="p-4 text-amber-500 font-bold tracking-tight uppercase font-mono text-[10px] bg-amber-500/5">Fashion Resale (Ours)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900">
              
              <tr>
                <td className="p-4 text-stone-200 font-medium">Direct Bargaining Sliders</td>
                <td className="p-4 text-teal-500">
                  <Check className="w-4 h-4 inline-block" />
                </td>
                <td className="p-4 text-rose-500">
                  <X className="w-4 h-4 inline-block" />
                </td>
                <td className="p-4 text-emerald-400 font-semibold bg-amber-500/5">
                  <Check className="w-4 h-4 inline-block mr-1" /> Yes (Instant counter)
                </td>
              </tr>

              <tr>
                <td className="p-4 text-stone-200 font-medium">Bidding Auctions System</td>
                <td className="p-4 text-rose-500">
                  <X className="w-4 h-4 inline-block" />
                </td>
                <td className="p-4 text-rose-500">
                  <X className="w-4 h-4 inline-block" />
                </td>
                <td className="p-4 text-emerald-400 font-semibold bg-amber-500/5">
                  <Check className="w-4 h-4 inline-block mr-1" /> Yes (Gavel live count)
                </td>
              </tr>

              <tr>
                <td className="p-4 text-stone-200 font-medium">Item Authentication Verification</td>
                <td className="p-4 text-stone-400">Partial/Optional</td>
                <td className="p-4 text-stone-400">In-House Only</td>
                <td className="p-4 text-emerald-400 font-semibold bg-amber-500/5">
                  <Check className="w-4 h-4 inline-block mr-1" /> Expert Verified (99.8%)
                </td>
              </tr>

              <tr>
                <td className="p-4 text-stone-200 font-medium">Local Delivery Focus</td>
                <td className="p-4 text-stone-400">Medium</td>
                <td className="p-4 text-stone-400">Low</td>
                <td className="p-4 text-emerald-400 font-semibold bg-amber-500/5 text-bold">
                  <Check className="w-4 h-4 inline-block mr-1" /> High (Integrated)
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      {/* 9. COMPANY ROADMAP TIMELINE */}
      <section id="roadmap-path" className="py-16 bg-stone-950 border-t border-stone-900/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Roadmap />
        </div>
      </section>

      {/* 10. LEADERSHIP SECTION ROW */}
      <section id="leadership" className="py-16 max-w-7xl mx-auto px-4 md:px-6">
        <TeamSection />
      </section>

      {/* 11. HIGH-CONVERSION CTA SECTION */}
      <section id="register-node" className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-6 relative text-center">
        {/* Connective lines and glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto bg-stone-950 p-8 md:p-12 border border-stone-850 rounded-3xl relative z-10 overflow-hidden space-y-6">
          
          <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-mono border border-amber-500/20 rounded-full tracking-wider uppercase inline-block">
            Beta Node Enlistment
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-stone-100 tracking-tight leading-none">
            Join the Circular Fashion Revolution
          </h2>

          <p className="text-xs md:text-sm text-stone-400 max-w-xl mx-auto leading-relaxed">
            Ready to experience the digital evolution of unorganized sustainable thrifting? Reserve your early member badge and secure zero selling fees for the first 90 days.
          </p>

          <div className="pt-2 max-w-md mx-auto">
            {hasSubscribed ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-center gap-3.5 animate-bounce mx-auto">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-stone-200 font-semibold uppercase font-mono">Registry Complete!</p>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Your exclusive golden key is generated. Member slot <strong className="text-amber-500">#{assignedBadgeNo}</strong> assigned lockbound.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  id="final-email-form-input"
                  placeholder="Enter email to lock spot..."
                  className="flex-1 bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-600 rounded-xl px-4 py-3 text-xs font-mono focus:outline-none focus:border-amber-500 transition-colors text-center sm:text-left"
                />
                <button
                  type="submit"
                  id="final-submit-btn"
                  className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  Confirm Registry Node <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <p className="text-[10px] font-mono text-stone-500 mt-3 block uppercase">
              No credit card required. Certified encrypted circular pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="border-t border-stone-900 bg-stone-950/20 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center font-bold text-xs font-mono text-stone-400">
              ©
            </div>
            <p className="text-xs text-stone-500 font-mono tracking-tight">
              2026 Fashion Resale Inc. All circular rights reserved.
            </p>
          </div>

          {/* School Credentials grounding the presentation from slides context */}
          <div className="text-center sm:text-right text-[10px] text-stone-600 font-mono uppercase tracking-widest space-y-0.5">
            <p className="font-semibold text-stone-500">Presented at UET Lahore • April 20, 2025</p>
            <p>Authored by: Danish, Shahbaz, Omar, Nouman, Bisma</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
