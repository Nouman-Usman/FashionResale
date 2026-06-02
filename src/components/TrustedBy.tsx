import { Sparkles, Trophy, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface Partner {
  name: string;
  tagline: string;
  reliabilityScore: string;
}

export default function TrustedBy() {
  const partners: Partner[] = [
    { name: "Patagonia Worn Wear", tagline: "Lifetime Garment Circulator", reliabilityScore: "99.9%" },
    { name: "Stella McCartney Eco", tagline: "Sustainable Luxury Pioneer", reliabilityScore: "99.8%" },
    { name: "Prada Re-Nylon", tagline: "Regenerated Ocean Nylon Initiative", reliabilityScore: "99.6%" },
    { name: "Vestiaire Collective", tagline: "Resale Curated Authority", reliabilityScore: "99.5%" },
    { name: "Eileen Fisher Renew", tagline: "Circular Apparel Recycler", reliabilityScore: "99.4%" },
    { name: "Ganni Future", tagline: "Responsibility Roadmap Partner", reliabilityScore: "99.7%" },
    { name: "Marine Serre Regenerated", tagline: "Upcycled Couture Pioneer", reliabilityScore: "99.8%" }
  ];

  return (
    <section id="trusted-by" className="py-10 bg-stone-950/40 border-b border-stone-900 overflow-hidden relative">
      {/* Outer ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[80px] bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] text-stone-400 font-mono tracking-widest uppercase font-semibold">
              Platform Credibility Node
            </span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-stone-300 font-semibold font-sans">
              Trusted by Pioneers of the Circular Movement
            </p>
            <p className="text-[10px] text-stone-500 font-mono uppercase mt-0.5">
              Strictly non-custodial verification &amp; certified ledger logs
            </p>
          </div>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none" />

          {/* Scrolling items with custom keyframes declared inline to be extremely robust */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-infinite {
              display: flex;
              width: max-content;
              animation: marquee 25s linear infinite;
            }
            .animate-marquee-infinite:hover {
              animation-play-state: paused;
            }
          `}} />

          <div className="animate-marquee-infinite gap-6">
            {/* First Set of items */}
            {partners.map((p, idx) => (
              <div 
                key={`p1-${idx}`} 
                id={`partner-p1-${idx}`}
                className="flex items-center gap-3 bg-stone-900/60 hover:bg-stone-900 border border-stone-850 px-4 py-2.5 rounded-2xl transition-all cursor-pointer group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-stone-200 tracking-tight font-sans">
                      {p.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-stone-600 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] text-stone-500 font-mono uppercase tracking-wider">{p.tagline}</span>
                    <span className="text-[9px] text-emerald-500/80 bg-emerald-500/5 px-1.5 rounded font-mono border border-emerald-500/10">
                      Score: {p.reliabilityScore}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Micro Duplicate for seamless infinite slide */}
            {partners.map((p, idx) => (
              <div 
                key={`p2-${idx}`} 
                id={`partner-p2-${idx}`}
                className="flex items-center gap-3 bg-stone-900/60 hover:bg-stone-900 border border-stone-850 px-4 py-2.5 rounded-2xl transition-all cursor-pointer group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-stone-200 tracking-tight font-sans">
                      {p.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-stone-600 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] text-stone-500 font-mono uppercase tracking-wider">{p.tagline}</span>
                    <span className="text-[9px] text-emerald-500/80 bg-emerald-500/5 px-1.5 rounded font-mono border border-emerald-500/10">
                      Score: {p.reliabilityScore}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Micro Credibility metric line */}
        <div className="mt-4 text-center">
          <p className="text-[10px] text-stone-500 font-mono uppercase tracking-widest">
            ★ All associated circular volume is reconciled on global greenhouse gas protocol ledgers ★
          </p>
        </div>

      </div>
    </section>
  );
}
