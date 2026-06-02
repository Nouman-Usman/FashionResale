import { useState } from 'react';
import { TargetGroup } from '../types';
import { Leaf, Flame, Sparkles, Coins, HelpCircle } from 'lucide-react';

export default function WhoWeServe() {
  const [activeGroup, setActiveGroup] = useState<string>('genz');

  const groups: TargetGroup[] = [
    {
      id: 'genz',
      title: 'Eco-Conscious Gen Z',
      iconName: 'leaf',
      description: 'Rejecting clinical clinical fast-fashion linear chains in favor of authentic self-expression. They demand carbon tracking transparency and prioritize planetary health.',
      tagline: '“The most sustainable garment is the one already in existence.”',
      metric: '60%',
      metricLabel: 'Plan to shop circular of young consumers'
    },
    {
      id: 'budget',
      title: 'Value/Budget Shoppers',
      iconName: 'coins',
      description: 'Seeking pristine high-end apparel brands without the markup. They leverage direct bargaining sliders to secure incredible quality fashion scores.',
      tagline: '“High-end designer pieces at flea-market thrift costs.”',
      metric: '72%',
      metricLabel: 'Average savings vs primary retail'
    },
    {
      id: 'vintage',
      title: 'Vintage Enthusiasts',
      iconName: 'flame',
      description: 'On a perpetual hunt for archival history, rare vintage items, and limited-edition sneakers. They actively track live bidding gables to protect their grails.',
      tagline: '“Preserving the thrill of the hunt in a clean, digital format.”',
      metric: '4.8x',
      metricLabel: 'Asset value growth on archival garments'
    },
    {
      id: 'reseller',
      title: 'Tech-Savvy Resellers',
      iconName: 'sparkles',
      description: 'Looking to effortlessly monetize their closets. They love in-app shipping coordination, zero inventory risk, and professional brand authentication offsets.',
      tagline: '“Frictionless luxury listing with guaranteed secure payouts.”',
      metric: '+$450',
      metricLabel: 'Average monthly active secondary profit'
    }
  ];

  const activeData = groups.find(g => g.id === activeGroup) || groups[0];

  return (
    <div id="target-audience-section" className="bg-stone-900/40 border border-stone-850 p-6 md:p-8 rounded-3xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-7">
        <div>
          <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-mono border border-amber-500/20 rounded-full tracking-wider uppercase inline-block">
            Target Demographics
          </span>
          <h3 className="text-2xl md:text-3xl font-sans font-semibold text-stone-100 tracking-tight mt-3">
            Who We Serve
          </h3>
          <p className="text-xs text-stone-400 mt-1">Four core user communities driving the future of circular fashion</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Buttons Selector Left */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {groups.map((g) => {
            const isActive = g.id === activeGroup;
            return (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                id={`btn-target-${g.id}`}
                className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 border-amber-500 text-stone-950 font-semibold shadow-md'
                    : 'bg-stone-950 border-stone-850 text-stone-400 hover:border-stone-850 hover:text-stone-200'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    isActive ? 'bg-stone-950/25 border-stone-950/10 text-stone-950' : 'bg-stone-900 border-stone-800 text-stone-300'
                  }`}>
                    {g.iconName === 'leaf' && <Leaf className="w-4 h-4" />}
                    {g.iconName === 'coins' && <Coins className="w-4 h-4" />}
                    {g.iconName === 'flame' && <Flame className="w-4 h-4" />}
                    {g.iconName === 'sparkles' && <Sparkles className="w-4 h-4" />}
                  </div>
                  <span className="text-sm tracking-tight">{g.title}</span>
                </div>
                <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-stone-900 animate-pulse' : 'bg-transparent'}`} />
              </button>
            );
          })}
        </div>

        {/* Selected Persona Detail Right */}
        <div className="lg:col-span-7 bg-stone-950 p-6 md:p-8 rounded-2xl border border-stone-850 min-h-[280px] flex flex-col justify-between relative overflow-hidden animate-fade-in">
          {/* Subtle Abstract Background Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-sans font-semibold text-stone-200">
              {activeData.title}
            </h4>
            
            <blockquote className="text-xs text-amber-500 italic font-medium leading-relaxed font-mono">
              {activeData.tagline}
            </blockquote>

            <p className="text-stone-400 text-xs md:text-sm leading-relaxed">
              {activeData.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-stone-900/80">
            <div>
              <span className="text-[10px] text-stone-500 font-mono block uppercase">Core Benefit Index</span>
              <span className="text-2xl font-mono font-bold text-teal-400 mt-1 block">
                {activeData.metric}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 font-mono block uppercase">Demographic Share</span>
              <span className="text-stone-300 text-xs font-medium block mt-2">
                {activeData.metricLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
