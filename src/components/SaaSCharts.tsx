import { useState } from 'react';
import { ChartSpline, ShieldAlert, BarChart3, TrendingUp, Sparkles, PieChart } from 'lucide-react';

export default function SaaSCharts() {
  const [activeTab, setActiveTab] = useState<'growth' | 'trust' | 'drivers'>('growth');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [hoveredPie, setHoveredPie] = useState<number | null>(null);

  // DATA: Growth projections (Slide 9 & 18)
  const growthData = [
    { year: "Year 1", revenue: 0.5, label: "$0.5M", waterQty: "12M Liters Saved", x: 60, y: 190 },
    { year: "Year 2", revenue: 1.5, label: "$1.5M", waterQty: "45M Liters Saved", x: 220, y: 130 },
    { year: "Year 3", revenue: 4.0, label: "$4.0M", waterQty: "180M Liters Saved", x: 380, y: 50 },
  ];

  // DATA: Trust Ratings out of 10 scale (Slide 4)
  const trustRatings = [
    { score: 1, count: 3, percentage: "9.1%", color: "bg-rose-500/80" },
    { score: 2, count: 1, percentage: "3.0%", color: "bg-rose-400/80" },
    { score: 3, count: 4, percentage: "12.1%", color: "bg-amber-500/80" },
    { score: 4, count: 3, percentage: "9.1%", color: "bg-amber-400/80" },
    { score: 5, count: 4, percentage: "12.1%", color: "bg-amber-300/80" },
    { score: 6, count: 13, percentage: "39.4%", color: "bg-teal-500" },
    { score: 7, count: 3, percentage: "9.1%", color: "bg-teal-400" },
    { score: 8, count: 2, percentage: "6.1%", color: "bg-emerald-400" },
    { score: 9, count: 0, percentage: "0.0%", color: "bg-emerald-500" },
    { score: 10, count: 0, percentage: "0.0%", color: "bg-indigo-500" },
  ];

  // DATA: Preferred Features of users (Slide 7)
  const featuresData = [
    { title: "Professional Verification", share: 27.3, color: "stroke-teal-500 fill-teal-500/10", details: "Experts authenticating luxury/streets brands (Nike, Adidas, Prada)." },
    { title: "Bargaining / Negotiation", share: 21.2, color: "stroke-amber-500 fill-amber-500/10", details: "Real-time slider negotiations mimicking traditional flea markets." },
    { title: "Seller Ratings & Reviews", share: 18.2, color: "stroke-indigo-400 fill-indigo-400/10", details: "Trust guarantees and feedback mechanisms to eliminate bad sellers." },
    { title: "Integrated Home Delivery", share: 12.1, color: "stroke-purple-400 fill-purple-400/10", details: "Automated standard shipping and secure delivery nodes." },
    { title: "Direct Buy Now Option", share: 12.1, color: "stroke-pink-400 fill-pink-400/10", details: "Bypass negotiations and snap up vintage gems immediately." },
    { title: "Auctions & Live Bidding", share: 9.1, color: "stroke-emerald-400 fill-emerald-400/10", details: "Engage in competitive bidding for rare or unique archival listings." },
  ];

  return (
    <div id="saas-interactive-charts" className="bg-stone-900/40 border border-stone-850 p-6 rounded-3xl backdrop-blur-md">
      {/* 1. Interactive Tabs Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone-800 pb-5 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-sans font-semibold tracking-tight text-stone-100 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-500" />
            Interactive Performance Dash
          </h3>
          <p className="text-xs text-stone-400 mt-1">Verified survey metrics and estimated growth trajectories</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-1.5 bg-stone-950 p-1.5 rounded-xl border border-stone-800/80 w-full md:w-auto">
          <button
            onClick={() => setActiveTab('growth')}
            id="tab-growth-metrics"
            className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'growth'
                ? 'bg-amber-500 text-stone-950 font-semibold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <ChartSpline className="w-3.5 h-3.5" /> Growth Forecast
          </button>
          <button
            onClick={() => setActiveTab('trust')}
            id="tab-trust-metrics"
            className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'trust'
                ? 'bg-amber-500 text-stone-950 font-semibold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" /> Trust Deficit Score
          </button>
          <button
            onClick={() => setActiveTab('drivers')}
            id="tab-drivers-metrics"
            className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'drivers'
                ? 'bg-amber-500 text-stone-950 font-semibold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> High-conversion Drivers
          </button>
        </div>
      </div>

      {/* 2. Content Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[300px]">
        
        {/* TAB 1: Revenue & Carbon Offset Growth projections */}
        {activeTab === 'growth' && (
          <>
            {/* Left projection summaries */}
            <div className="md:col-span-4 flex flex-col justify-between gap-4">
              <div className="space-y-4">
                <div className="p-4 bg-stone-950 rounded-2xl border border-stone-850">
                  <span className="text-[10px] text-amber-500 font-mono tracking-wider block uppercase">Global Market TAM</span>
                  <span className="text-3xl font-mono font-bold text-stone-100 mt-1 block">$350 BILLION</span>
                  <span className="text-xs text-stone-400 mt-1 block">Projected market size by 2028</span>
                </div>
                <div className="p-4 bg-stone-950 rounded-2xl border border-stone-850">
                  <span className="text-[10px] text-teal-400 font-mono tracking-wider block uppercase">Projected CAGR</span>
                  <span className="text-xl font-mono font-bold text-teal-300 mt-1 block">12.2% Annualized</span>
                  <span className="text-xs text-stone-400 mt-1 block">Highest growing fashion subcategory</span>
                </div>
              </div>
              <div className="text-[11px] text-stone-500 font-mono leading-relaxed bg-stone-950/40 p-3 rounded-xl border border-stone-900">
                ⭐ Hover points on the forecast node to overlay estimated planetary CO2/water offsets derived from recirculating quality garments.
              </div>
            </div>

            {/* Simulated Interactive SVG Line Graph */}
            <div className="md:col-span-8 flex flex-col justify-between bg-stone-950 p-4 rounded-2xl border border-stone-850 h-full relative">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-semibold text-stone-300">Revenue Growth Projections (3-Year Outlook)</span>
                <span className="text-[10px] bg-amber-500/10 border border-amber-500/30 text-amber-500 px-2 py-0.5 rounded font-mono">
                  CAGR optimized
                </span>
              </div>

              <div className="relative w-full h-[220px]">
                <svg className="w-full h-full" viewBox="0 0 440 220">
                  {/* Grid Lines */}
                  <line x1="50" y1="190" x2="400" y2="190" stroke="#292524" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="50" y1="130" x2="400" y2="130" stroke="#292524" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="50" y1="50" x2="400" y2="50" stroke="#292524" strokeWidth="1" strokeDasharray="3,3" />

                  {/* Shaded Area underneath chart */}
                  <polygon
                    points="60,190 220,130 380,50 380,190 60,190"
                    fill="url(#goldGradient)"
                    className="opacity-15 transition-all duration-300"
                  />

                  {/* Glowing line */}
                  <path
                    d="M 60 190 L 220 130 L 380 50"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_12px_rgba(217,119,6,0.5)]"
                  />

                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Axes labels */}
                  <text x="60" y="210" fill="#78716c" fontSize="10" fontFamily="monospace" textAnchor="middle">Year 1</text>
                  <text x="220" y="210" fill="#78716c" fontSize="10" fontFamily="monospace" textAnchor="middle">Year 2</text>
                  <text x="380" y="210" fill="#78716c" fontSize="10" fontFamily="monospace" textAnchor="middle">Year 3</text>

                  {/* Left scale metrics */}
                  <text x="40" y="193" fill="#78716c" fontSize="9" fontFamily="monospace" textAnchor="end">$0.5M</text>
                  <text x="40" y="133" fill="#78716c" fontSize="9" fontFamily="monospace" textAnchor="end">$1.5M</text>
                  <text x="40" y="53" fill="#78716c" fontSize="9" fontFamily="monospace" textAnchor="end">$4.0M</text>

                  {/* Hover Points nodes */}
                  {growthData.map((pt, i) => (
                    <g key={i}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={hoveredPoint === i ? 9 : 6}
                        fill={hoveredPoint === i ? "#fbbf24" : "#d97706"}
                        stroke="#0c0a09"
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-200"
                        onMouseEnter={() => setHoveredPoint(i)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                      {/* Interactive floating values inside SVG */}
                      <text
                        x={pt.x}
                        y={pt.y - 14}
                        fill="#f59e0b"
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="bold"
                        textAnchor="middle"
                        className={`pointer-events-none transition-opacity duration-200 ${
                          hoveredPoint === i ? 'opacity-100' : 'opacity-80'
                        }`}
                      >
                        {pt.label}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Simulated Tooltip */}
                {hoveredPoint !== null && (
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 bg-stone-900 border border-stone-850 p-3 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping" />
                    <div>
                      <p className="text-[10px] text-stone-500 font-mono uppercase font-semibold">Planetary Carbon Metric Offset</p>
                      <p className="text-xs font-mono font-bold text-stone-100 mt-0.5">{growthData[hoveredPoint].waterQty}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* TAB 2: Consumer Trust ratings Bar Distribution */}
        {activeTab === 'trust' && (
          <>
            {/* Left contextual summary to motivate Fashion Resale validation edge */}
            <div className="md:col-span-5 flex flex-col justify-between gap-4">
              <div>
                <h4 className="text-base text-stone-200 font-semibold mb-2">The Deep Trust Deficit</h4>
                <p className="text-xs text-stone-400 leading-relaxed mb-3">
                  Slide survey findings indicate a stark challenge in standard second-hand fashion platforms of today. When customers were asked:
                </p>
                <blockquote className="bg-stone-950 p-3.5 rounded-xl border border-stone-900 border-l-2 border-l-rose-500 italic text-stone-300 text-xs">
                  "On a scale of 1 to 10, how would you rate your level of current trust in existing second-hand fashion marketplaces?"
                </blockquote>
                <p className="text-xs text-stone-400 leading-relaxed mt-3">
                  The consensus is dangerously low: <strong className="text-stone-200">the vast majority rate trust between 3 and 6</strong>. High-value fraud, fake vintage items, and unhelpful refund processes plague Poshmark and ThredUp.
                </p>
              </div>
              <div className="p-4 bg-teal-500/10 rounded-2xl border border-teal-500/20 text-teal-400">
                <p className="text-xs font-semibold flex items-center gap-1.5"><Sparkles className="w-4 h-4" /> The Fashion Resale Solution</p>
                <p className="text-[11px] mt-1 leading-relaxed text-stone-300">
                  By introducing mandatory professional brand authentication (expert verification), trust scores soar to solid 9s.
                </p>
              </div>
            </div>

            {/* Simulated interactive bar chart */}
            <div className="md:col-span-7 flex flex-col justify-between bg-stone-950 p-4 rounded-2xl border border-stone-850 relative">
              <span className="text-xs font-mono font-semibold text-stone-300 mb-4 block">Trust Scale Distribution (1 - 10 Scale)</span>
              
              <div className="flex-1 flex items-end justify-between h-[180px] gap-2 pt-6 pb-2 border-b border-stone-800">
                {trustRatings.map((tr, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
                    onMouseEnter={() => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    {/* Hover detail count */}
                    <span className={`text-[9px] font-mono leading-none transition-all ${
                      hoveredBar === index ? 'text-amber-400 font-bold scale-110' : 'text-stone-500'
                    }`}>
                      {tr.count}
                    </span>
                    {/* Bar graphic */}
                    <div
                      className={`w-full rounded-t transition-all duration-300 ${tr.color} ${
                        hoveredBar === index ? 'scale-x-110 opacity-100 shadow-[0_0_8px_currentColor]' : 'opacity-75'
                      }`}
                      style={{ height: `${Math.max(tr.count * 11, 4)}px` }}
                    />
                    {/* Scale axis label */}
                    <span className={`text-xs font-mono mt-1 ${hoveredBar === index ? 'text-stone-200' : 'text-stone-500'}`}>
                      {tr.score}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tooltip detail metadata */}
              <div className="mt-3.5 flex justify-between items-center text-[10px] text-stone-400 font-mono">
                <span>← Low Trust (1)</span>
                <span>
                  {hoveredBar !== null ? (
                    <span className="text-amber-400 bg-amber-500/5 px-2.5 py-0.5 rounded border border-amber-500/15">
                      Score {trustRatings[hoveredBar].score}: {trustRatings[hoveredBar].percentage} of respondents
                    </span>
                  ) : (
                    <span>Hover bars to view percentage distributions</span>
                  )}
                </span>
                <span>High Trust (10) →</span>
              </div>
            </div>
          </>
        )}

        {/* TAB 3: Interactive Donut slices of Preferred Features */}
        {activeTab === 'drivers' && (
          <>
            {/* Pie details grid */}
            <div className="md:col-span-6 space-y-3.5">
              <span className="text-xs font-mono font-semibold text-stone-300 uppercase block tracking-wider">Driver Influence Share</span>
              
              <div className="space-y-2">
                {featuresData.map((fd, i) => (
                  <div
                    key={i}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      hoveredPie === i
                        ? 'bg-stone-900 border-amber-500/30'
                        : 'bg-stone-950/60 border-stone-900 hover:border-stone-850'
                    }`}
                    onMouseEnter={() => setHoveredPie(i)}
                    onMouseLeave={() => setHoveredPie(null)}
                  >
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2">
                        {/* Bullet color marker */}
                        <div className={`w-2.5 h-2.5 rounded-full ${
                          i === 0 ? 'bg-teal-500' :
                          i === 1 ? 'bg-amber-500' :
                          i === 2 ? 'bg-indigo-400' :
                          i === 3 ? 'bg-purple-400' :
                          i === 4 ? 'bg-pink-400' :
                          'bg-emerald-400'
                        }`} />
                        <span className="text-stone-200 font-semibold">{fd.title}</span>
                      </div>
                      <span className="font-mono text-amber-500 font-bold">{fd.share}%</span>
                    </div>
                    {hoveredPie === i && (
                      <p className="text-[11px] text-stone-400 mt-1 leading-relaxed animate-fade-in pl-4">
                        {fd.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Responsive visual representation */}
            <div className="md:col-span-6 bg-stone-950 p-4 rounded-2xl border border-stone-850 flex flex-col justify-between relative h-full">
              <span className="text-xs font-mono font-semibold text-stone-300 block mb-2">Survey Results: "Feature that would make you MOST likely to use"</span>
              
              <div className="relative w-full h-[180px] flex items-center justify-center">
                <svg className="w-[180px] h-[180px]" viewBox="0 0 200 200">
                  {/* Outer glowing donut ring */}
                  <circle cx="100" cy="100" r="85" fill="none" stroke="#1c1917" strokeWidth="18" />

                  {/* Highlighting selected path segments */}
                  {/* Verification segment (27.3%): dasharray="146 534" stroke-dashoffset="0" */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth={hoveredPie === 0 ? "24" : "18"}
                    strokeDasharray="146 534"
                    strokeDashoffset="0"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredPie(0)}
                    onMouseLeave={() => setHoveredPie(null)}
                  />

                  {/* Bargaining segment (21.2%): dasharray="113 534" stroke-dashoffset="-146" */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth={hoveredPie === 1 ? "24" : "18"}
                    strokeDasharray="113 534"
                    strokeDashoffset="-146"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredPie(1)}
                    onMouseLeave={() => setHoveredPie(null)}
                  />

                  {/* Ratings segment (18.2%): dasharray="97 534" stroke-dashoffset="-259" */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#818cf8"
                    strokeWidth={hoveredPie === 2 ? "24" : "18"}
                    strokeDasharray="97 534"
                    strokeDashoffset="-259"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredPie(2)}
                    onMouseLeave={() => setHoveredPie(null)}
                  />

                  {/* Delivery segment (12.1%): dasharray="65 534" stroke-dashoffset="-356" */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#c084fc"
                    strokeWidth={hoveredPie === 3 ? "24" : "18"}
                    strokeDasharray="65 534"
                    strokeDashoffset="-356"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredPie(3)}
                    onMouseLeave={() => setHoveredPie(null)}
                  />

                  {/* Buy Now segment (12.1%): dasharray="65 534" stroke-dashoffset="-421" */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#f472b6"
                    strokeWidth={hoveredPie === 4 ? "24" : "18"}
                    strokeDasharray="65 534"
                    strokeDashoffset="-421"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredPie(4)}
                    onMouseLeave={() => setHoveredPie(null)}
                  />

                  {/* Auctions segment (9.1%): dasharray="48 534" stroke-dashoffset="-486" */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth={hoveredPie === 5 ? "24" : "18"}
                    strokeDasharray="48 534"
                    strokeDashoffset="-486"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredPie(5)}
                    onMouseLeave={() => setHoveredPie(null)}
                  />

                  {/* Central Text node */}
                  <circle cx="100" cy="100" r="62" fill="#0c0a09" />
                  <text x="100" y="96" fill="#78716c" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    N = 33 VOTES
                  </text>
                  <text x="100" y="114" fill="#d97706" fontSize="14" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                    {hoveredPie !== null ? `${featuresData[hoveredPie].share}%` : "100%"}
                  </text>
                </svg>
              </div>

              <div className="text-[10px] text-center text-stone-500 font-mono">
                {hoveredPie !== null ? `Focusing on: ${featuresData[hoveredPie].title}` : "Secure circular verified value map"}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
