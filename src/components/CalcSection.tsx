import { useState } from 'react';
import { Droplets, Leaf, CircleDollarSign, PiggyBank, Sparkles } from 'lucide-react';

export default function CalcSection() {
  const [buyQty, setBuyQty] = useState<number>(8);
  const [sellQty, setSellQty] = useState<number>(12);

  // Benchmarks
  const LITER_PER_GARMENT = 2700; // Average cotton clothing water footprint
  const CO2_PER_GARMENT = 12.5; // Average kg CO2 offset
  const PROFIT_PER_GARMENT = 32; // Reseller average profit
  const SAVINGS_PER_GARMENT = 85; // Buyer average savings compared to typical retail MSRP

  // Raw calculated stats
  const totalWaterSaved = (buyQty + sellQty) * LITER_PER_GARMENT;
  const totalCo2Offset = (buyQty + sellQty) * CO2_PER_GARMENT;
  const cashGenerated = sellQty * PROFIT_PER_GARMENT;
  const savingsUnlocks = buyQty * SAVINGS_PER_GARMENT;

  return (
    <div id="calculator-sustainability-section" className="bg-stone-900/40 border border-stone-850 p-6 md:p-8 rounded-3xl backdrop-blur-md">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-mono border border-amber-500/20 rounded-full tracking-wider uppercase inline-block">
          Interactive Impact Assessment
        </span>
        <h3 className="text-2xl md:text-3xl font-sans font-semibold text-stone-100 tracking-tight mt-3">
          Calculate Your Sustainable ROI
        </h3>
        <p className="text-sm text-stone-400 mt-2 leading-relaxed">
          See how moving from clinical clinical fast-fashion linear models to circular thrifting offsets environmental impact and unlocks massive financial value.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6 bg-stone-950 p-5 rounded-2xl border border-stone-850">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Lifecycle Inputs
          </h4>

          {/* Slider 1: Buying Circular */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <label htmlFor="buy-clothes-input" className="text-xs text-stone-300 font-medium">Buy Circular (Annual)</label>
              <span className="text-sm font-mono font-bold text-amber-500">{buyQty} items</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={buyQty}
              onChange={(e) => setBuyQty(Number(e.target.value))}
              id="buy-clothes-input"
              className="w-full accent-amber-500 h-1 bg-stone-800 rounded-lg cursor-pointer"
            />
            <p className="text-[10px] text-stone-500 leading-normal">
              How many garments you commit to buy vintage or thrifty instead of buying newly manufactured apparel.
            </p>
          </div>

          <div className="border-t border-stone-900 my-4" />

          {/* Slider 2: Selling Circular */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <label htmlFor="sell-clothes-input" className="text-xs text-stone-300 font-medium">Resell Circular (Annual)</label>
              <span className="text-sm font-mono font-bold text-teal-400">{sellQty} items</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={sellQty}
              onChange={(e) => setSellQty(Number(e.target.value))}
              id="sell-clothes-input"
              className="w-full accent-teal-500 h-1 bg-stone-800 rounded-lg cursor-pointer"
            />
            <p className="text-[10px] text-stone-500 leading-normal">
              How many neglected quality garments in your wardrobe you intend to authenticate and resell using Cloud Bazar.
            </p>
          </div>
        </div>

        {/* Dynamic Metric Output Board */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Card 1: Water saved */}
          <div className="p-4 bg-stone-950/80 rounded-2xl border border-stone-850 hover:border-blue-500/25 transition-colors relative overflow-hidden group">
            <div className="absolute top-3 right-3 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
              <Droplets className="w-14 h-14" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-3">
              <Droplets className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-stone-500 font-mono block uppercase">Water Footprint Saved</span>
            <span className="text-2xl font-mono font-bold text-stone-100 mt-1 block tracking-tight">
              {totalWaterSaved.toLocaleString()} Liters
            </span>
            <p className="text-[11px] text-stone-400 mt-2 leading-relaxed">
              Eq. of {Math.round(totalWaterSaved / 150).toLocaleString()} standard bubble baths saved by avoiding cotton micro-irrigation.
            </p>
          </div>

          {/* Card 2: CO2 Offset */}
          <div className="p-4 bg-stone-950/80 rounded-2xl border border-stone-850 hover:border-emerald-500/25 transition-colors relative overflow-hidden group">
            <div className="absolute top-3 right-3 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors">
              <Leaf className="w-14 h-14" />
            </div>
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-3">
              <Leaf className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-stone-500 font-mono block uppercase">Carbon Emission Offset</span>
            <span className="text-2xl font-mono font-bold text-stone-100 mt-1 block tracking-tight">
              {totalCo2Offset.toLocaleString()} kg CO₂e
            </span>
            <p className="text-[11px] text-stone-400 mt-2 leading-relaxed">
              Equivalent to planting {Math.round(totalCo2Offset / 21)} mature trees absorbing emissions for an entire year.
            </p>
          </div>

          {/* Card 3: Cash earnings */}
          <div className="p-4 bg-stone-950/80 rounded-2xl border border-stone-850 hover:border-amber-500/25 transition-colors relative overflow-hidden group">
            <div className="absolute top-3 right-3 text-amber-500/10 group-hover:text-amber-500/20 transition-colors">
              <CircleDollarSign className="w-14 h-14" />
            </div>
            <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-3">
              <CircleDollarSign className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-stone-500 font-mono block uppercase">Est. Reselling Income</span>
            <span className="text-2xl font-mono font-bold text-amber-400 mt-1 block tracking-tight">
              ${cashGenerated.toLocaleString()}
            </span>
            <p className="text-[11px] text-stone-400 mt-2 leading-relaxed">
              Estimated active profit generated by listing verified clothing on Cloud Bazar utilizing direct negotiation.
            </p>
          </div>

          {/* Card 4: Buyer savings */}
          <div className="p-4 bg-stone-950/80 rounded-2xl border border-stone-850 hover:border-indigo-500/25 transition-colors relative overflow-hidden group">
            <div className="absolute top-3 right-3 text-indigo-500/10 group-hover:text-indigo-505/20 transition-colors">
              <PiggyBank className="w-14 h-14" />
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mb-3">
              <PiggyBank className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-stone-500 font-mono block uppercase">Est. Buyer Off-Retail Savings</span>
            <span className="text-2xl font-mono font-bold text-stone-100 mt-1 block tracking-tight">
              ${savingsUnlocks.toLocaleString()}
            </span>
            <p className="text-[11px] text-stone-400 mt-2 leading-relaxed">
              Cash dollars kept in your wallet by purchasing verified high-quality archival pieces instead of markup retail.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
