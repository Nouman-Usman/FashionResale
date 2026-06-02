import { useState } from 'react';
import { TeamMember } from '../types';
import { Linkedin, Mail, Twitter, ShieldCheck } from 'lucide-react';

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team: TeamMember[] = [
    {
      name: "Omar Baig",
      role: "CEO & Co-founder",
      initials: "OB",
      bio: "Pioneering the vision of Cloud Bazar. Crafting secondary retail digital strategies and strategic partnerships with brand houses.",
      color: "from-amber-500/10 to-transparent border-amber-500/30 text-amber-500"
    },
    {
      name: "M. Nouman",
      role: "CTO & Co-founder",
      initials: "MN",
      bio: "Architecting the real-time direct negotiations algorithms, live bidding websockets, and AI-stitching verification services.",
      color: "from-teal-500/10 to-transparent border-teal-500/30 text-teal-400"
    },
    {
      name: "Bisma Shakeel",
      role: "COO & Logistics Head",
      initials: "BS",
      bio: "Orchestrating the zero-inventory delivery infrastructure, local sorting hubs, and physical inspection workflow lines.",
      color: "from-emerald-500/10 to-transparent border-emerald-500/30 text-emerald-400"
    },
    {
      name: "Danish Ali",
      role: "CFO & Circular Analytics",
      initials: "DA",
      bio: "Structuring our low-overhead remote-first model, financial TAM forecasts, and environmental offset credit allocations.",
      color: "from-indigo-500/10 to-transparent border-indigo-500/30 text-indigo-400"
    },
    {
      name: "Shahbaz Ali",
      role: "CMO & Growth Lead",
      initials: "SA",
      bio: "Catalyzing viral growth loop channels, TikTok & Instagram 'Thrift With Me' hauls, and micro-influencer referral codes.",
      color: "from-pink-500/10 to-transparent border-pink-500/30 text-pink-400"
    }
  ];

  return (
    <div id="founding-leadership-section" className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-mono border border-amber-500/20 rounded-full tracking-wider uppercase inline-block">
          Founding Leadership
        </span>
        <h3 className="text-2xl md:text-3xl font-sans font-semibold text-stone-100 tracking-tight mt-3">
          Behind the Circular Evolution
        </h3>
        <p className="text-sm text-stone-400 mt-2 leading-relaxed">
          The team that turned traditional unorganized Landa Bazar challenges into a structured, highly responsive digital Cloud Bazar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {team.map((m, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={idx}
              className={`relative bg-stone-950/80 p-5 rounded-2xl border transition-all duration-300 overflow-hidden group flex flex-col justify-between h-[250px] ${
                isHovered ? 'border-amber-500/40 -translate-y-1 bg-stone-900/45' : 'border-stone-850 hover:border-stone-800'
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top info and avatar */}
              <div>
                <div className="flex justify-between items-start">
                  {/* Styled Avatar initials */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${m.color} border flex items-center justify-center font-mono font-bold text-xs tracking-wider transition-all duration-300 group-hover:scale-105`}>
                    {m.initials}
                  </div>
                  <ShieldCheck className="w-4 h-4 text-stone-600 group-hover:text-teal-400 transition-colors" />
                </div>

                <h4 className="text-sm font-semibold tracking-tight text-stone-200 mt-4 font-sans uppercase">
                  {m.name}
                </h4>
                <p className="text-[10px] text-amber-500 font-mono tracking-wider mt-0.5">
                  {m.role}
                </p>
              </div>

              {/* Dynamic bio / details slide in */}
              <div className="mt-3">
                <p className="text-[11px] text-stone-400 leading-relaxed font-sans transition-all duration-300 group-hover:text-stone-300">
                  {m.bio}
                </p>
              </div>

              {/* Fake Social handles footer */}
              <div className="flex items-center gap-2 pt-3 border-t border-stone-900/80 mt-2">
                <span className="text-[9px] font-mono text-stone-600 group-hover:text-stone-400 transition-colors">
                  verified-leadership@{m.name.toLowerCase().replace('. ', '').replace(' ', '')}.io
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
