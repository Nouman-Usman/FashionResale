import { useState } from 'react';
import { TimelineItem } from '../types';
import { MapPin, Users, Rocket, TestTube, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export default function Roadmap() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const timeline: TimelineItem[] = [
    {
      quarter: 'Q1 2026',
      title: 'MVP Architecture & Lab Auditing',
      description: 'Core smart bargain engines engineered. Live testing with beta validation nodes. Establishing deep AI stitch inspection profile parameters.',
      status: 'completed'
    },
    {
      quarter: 'Q2 2026',
      title: 'Whitelisted Beta Launch',
      description: 'Sealing strategic partnerships with vintage sellers. Enrolling 200 certified power resellers to trigger secondary circulation testing loops.',
      status: 'current'
    },
    {
      quarter: 'Q3 2026',
      title: 'Official Public Rollout',
      description: 'Deploying direct bargaining and verified escrow features worldwide. Broad scale mobile applications release on App Store & Play Store.',
      status: 'upcoming'
    },
    {
      quarter: 'Q4 2026',
      title: 'Major Metro Expansion',
      description: 'Deploying local delivery nodes and hyper-fast verified drop centers across major fashion capitals (New York, Paris, London, Tokyo).',
      status: 'upcoming'
    }
  ];

  return (
    <div id="company-roadmap-section" className="relative space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-[10px] font-mono border border-teal-500/20 rounded-full tracking-wider uppercase inline-block">
            Strategic Milestones
          </span>
          <h3 className="text-2xl md:text-3xl font-sans font-semibold text-stone-100 tracking-tight mt-3">
            The Path Forward
          </h3>
          <p className="text-sm text-stone-400 mt-2 leading-relaxed">
            Pacing standard circular economy deployment with verified milestones.
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-teal-400 font-mono bg-stone-950 px-3 py-1.5 rounded-lg border border-stone-850">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>Ahead of Projected Timeline</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {/* Horizontal connective element visible on desktop */}
        <div className="hidden md:block absolute top-[26px] left-[50px] right-[50px] h-[1.5px] bg-stone-800 z-0" />

        {timeline.map((item, idx) => {
          const isCompleted = item.status === 'completed';
          const isCurrent = item.status === 'current';

          return (
            <div
              key={idx}
              className={`relative bg-stone-950 hover:bg-stone-900/60 p-5 rounded-2xl border transition-all duration-300 z-10 ${
                isCurrent 
                  ? 'border-amber-500/40 shadow-[0_4px_20px_rgba(217,119,6,0.05)]' 
                  : isCompleted 
                    ? 'border-teal-500/20' 
                    : 'border-stone-850'
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-between items-center mb-4">
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                  isCurrent 
                    ? 'bg-amber-500/10 text-amber-500 border-amber-500/25 font-bold' 
                    : isCompleted 
                      ? 'bg-teal-500/10 text-teal-400 border-teal-500/20' 
                      : 'bg-stone-900 text-stone-500 border-stone-800'
                }`}>
                  {item.quarter}
                </span>

                {/* Status Indicator Icon */}
                <div className={`w-6.5 h-6.5 rounded-full flex items-center justify-center border ${
                  isCompleted 
                    ? 'bg-teal-500/10 border-teal-500/30 text-teal-400' 
                    : isCurrent 
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-500 animate-pulse' 
                      : 'bg-stone-900 border-stone-800 text-stone-600'
                }`}>
                  {idx === 0 && <TestTube className="w-3.5 h-3.5" />}
                  {idx === 1 && <Users className="w-3.5 h-3.5" />}
                  {idx === 2 && <Rocket className="w-3.5 h-3.5" />}
                  {idx === 3 && <MapPin className="w-3.5 h-3.5" />}
                </div>
              </div>

              <h4 className={`text-base font-semibold tracking-tight ${
                isCurrent ? 'text-amber-500 font-bold' : 'text-stone-200'
              }`}>
                {item.title}
              </h4>

              <p className="text-xs text-stone-400 mt-2.5 leading-relaxed">
                {item.description}
              </p>

              {/* Connected hover indicators */}
              <div className={`mt-4 pt-3 border-t border-stone-900 flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider transition-opacity duration-300 ${
                hoveredIndex === idx ? 'opacity-100' : 'opacity-40'
              }`}>
                <span>{item.status === 'completed' ? 'Verified Done' : item.status === 'current' ? 'Active Target' : 'Up Next'}</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
