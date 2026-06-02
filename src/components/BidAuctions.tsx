import { useState, useEffect, FormEvent } from 'react';
import { Gavel, Clock, Trophy, TrendingUp, AlertCircle, RefreshCw } from 'lucide-react';
import { BidItem } from '../types';

export default function BidAuctions() {
  const [bidsHistory, setBidsHistory] = useState([
    { bidder: "Danish A.", amount: 1250, time: "2 mins ago" },
    { bidder: "Bisma S.", amount: 1200, time: "5 mins ago" },
    { bidder: "Shahbaz A.", amount: 1150, time: "12 mins ago" },
  ]);

  const [currentBid, setCurrentBid] = useState(1250);
  const [customBid, setCustomBid] = useState<string>("1300");
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 44, seconds: 58 });
  const [rivalTyping, setRivalTyping] = useState(false);
  const [highestBidder, setHighestBidder] = useState("Danish A.");
  const [errorText, setErrorText] = useState("");
  const [trophyAwarded, setTrophyAwarded] = useState(false);

  // Time Countdown Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const placeBid = (amount: number) => {
    if (rivalTyping) return;
    if (amount <= currentBid) {
      setErrorText(`Bid must be greater than current bid of $${currentBid}`);
      return;
    }

    setErrorText("");
    const userBidAmount = amount;
    setCurrentBid(userBidAmount);
    setHighestBidder("You (Early Access Guest)");
    setTrophyAwarded(true);

    // Add yours to top of leaderboard
    setBidsHistory(prev => [
      { bidder: "You (Early Access)", amount: userBidAmount, time: "Just now" },
      ...prev
    ]);

    // Update state inputs
    setCustomBid(String(userBidAmount + 50));

    // Simulate competitor counter after 1.8 seconds!
    setRivalTyping(true);
    setTimeout(() => {
      const counterBid = userBidAmount + Math.floor(Math.random() * 2 + 1) * 50;
      const rivals = ["Shahbaz A. (CMO)", "M. Nouman (CTO)", "Bisma S. (COO)", "Danish A. (CFO)"];
      const selectedRival = rivals[Math.floor(Math.random() * rivals.length)];

      setCurrentBid(counterBid);
      setHighestBidder(selectedRival);
      setTrophyAwarded(false);
      setBidsHistory(prev => [
        { bidder: selectedRival, amount: counterBid, time: "Just now" },
        ...prev
      ]);
      setCustomBid(String(counterBid + 50));
      setRivalTyping(false);
    }, 1800);
  };

  const handleCustomSubmit = (e: FormEvent) => {
    e.preventDefault();
    const bidValue = Number(customBid);
    if (isNaN(bidValue)) {
      setErrorText("Please enter a valid round number");
      return;
    }
    placeBid(bidValue);
  };

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div id="bidding-auction-section" className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-stone-900/40 border border-stone-800 p-5 md:p-6 rounded-3xl backdrop-blur-md">
      {/* 1. Item Details Card */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-5">
        <div>
          <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-[10px] font-mono border border-teal-500/20 rounded-full tracking-wider uppercase flex items-center gap-1.5 w-fit">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Live Bidding Event • 100% Verified
          </span>

          <h3 className="text-xl md:text-2xl font-sans font-semibold text-stone-100 tracking-tight mt-3">
            1985 Nike Air Jordan 1 High OG Chicago
          </h3>
          <p className="text-xs text-stone-400 font-mono mt-0.5">Grade: Vintage pristine (8.5/10) with Box</p>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="bg-stone-950 px-3.5 py-2.5 rounded-xl border border-stone-800">
              <span className="text-[10px] text-stone-500 font-mono block uppercase">Current Highest Bid</span>
              <span className="text-xl font-mono font-bold text-teal-400 mt-1 block">
                ${currentBid.toLocaleString()}
              </span>
            </div>
            <div className="bg-stone-950 px-3.5 py-2.5 rounded-xl border border-stone-800">
              <span className="text-[10px] text-stone-500 font-mono block uppercase">Remaining Time</span>
              <span className="text-base font-mono font-medium text-stone-300 mt-1 block flex items-center gap-1">
                <Clock className="w-4 h-4 text-amber-500" />
                {timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? (
                  <span>
                    {formatTime(timeLeft.hours)}h {formatTime(timeLeft.minutes)}m {formatTime(timeLeft.seconds)}s
                  </span>
                ) : (
                  <span className="text-rose-500">Event Closed</span>
                )}
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3- pt-3 text-xs text-stone-400 border-t border-stone-800/80">
            <TrendingUp className="w-4 h-4 text-teal-400" />
            <span>High-Value Grail Item • Resale price estimate: $2,500</span>
          </div>
        </div>

        {/* Sneaker Visual Details layout with beautiful CSS wireframes */}
        <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 flex items-center justify-center">
          <div className="absolute top-3 left-3 flex gap-1.5">
            <span className="px-2 py-0.5 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded text-[9px] font-mono uppercase">
              Authenticated
            </span>
            <span className="px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-stone-400 rounded text-[9px] font-mono">
              SZ: US 10.5
            </span>
          </div>

          {/* Glowing Target circles simulating micro-examination checkpoints */}
          <div className="absolute top-[35%] left-[45%] w-3 h-3 bg-teal-400 border border-white rounded-full animate-ping pointer-events-none" />
          <div className="absolute top-[35%] left-[45%] w-1.5 h-1.5 bg-teal-400 rounded-full" />
          
          <div className="absolute bottom-[20%] right-[30%] w-3 h-3 bg-amber-400 border border-white rounded-full animate-ping pointer-events-none" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-[20%] right-[30%] w-1.5 h-1.5 bg-amber-400 rounded-full" />

          {/* Center Graphic */}
          <div className="text-center p-3">
            <div className="text-stone-500 text-[10px] uppercase font-mono tracking-wider mb-1">
              Micro-Verification Diagnostics
            </div>
            <div className="font-mono text-[11px] text-stone-300">
              Nike Swoosh stitching profile verified
            </div>
            <div className="text-[10px] text-teal-400 font-mono mt-0.5">
              Accuracy confidence index: 99.8%
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Leadboard & Action Panel */}
      <div className="lg:col-span-7 flex flex-col justify-between h-[450px] bg-stone-950/80 rounded-2xl border border-stone-800 p-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <Gavel className="w-4 h-4 text-teal-400" />
            <span className="text-xs text-stone-200 font-semibold uppercase font-mono">Bidding Leaderboard</span>
          </div>
          <span className="text-[10px] text-stone-500 font-mono">Total Bids: {bidsHistory.length}</span>
        </div>

        {/* Rivals typing animation or leaderboard history */}
        <div className="flex-1 overflow-y-auto space-y-2 my-4 px-1 pr-1 scrollbar-thin">
          {rivalTyping && (
            <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-xl flex items-center gap-3 text-xs text-amber-500 animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Competing buyer is preparing a counter-bid...</span>
            </div>
          )}

          {bidsHistory.map((b, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-2.5 rounded-xl border border-stone-900 transition-all ${
                idx === 0
                  ? trophyAwarded
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-500'
                    : 'bg-stone-900 border-stone-800 text-stone-200'
                  : 'bg-transparent text-stone-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                  idx === 0 ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-500'
                }`}>
                  {idx + 1}
                </span>
                <span className="text-xs font-semibold">{b.bidder}</span>
                {idx === 0 && (
                  <span className="text-[9px] bg-teal-500/15 text-teal-400 border border-teal-500/30 px-1.5 py-0.5 rounded font-mono">
                    Highest
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold">${b.amount.toLocaleString()}</span>
                <span className="text-[9px] text-stone-500 font-mono">{b.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Play Bid Controls */}
        <div className="border-t border-stone-800/80 pt-3">
          {errorText && (
            <div className="mb-3.5 flex items-center gap-2 p-2.5 bg-rose-500/5 text-rose-500 border border-rose-500/15 rounded-lg text-[10px] font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errorText}</span>
            </div>
          )}

          <div className="grid grid-cols-3 gap-2 mb-3.5">
            <button
              onClick={() => placeBid(currentBid + 50)}
              disabled={rivalTyping}
              id="bid-plus-50"
              className="py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded-lg text-xs font-semibold text-stone-200 cursor-pointer disabled:opacity-50"
            >
              + $50
            </button>
            <button
              onClick={() => placeBid(currentBid + 100)}
              disabled={rivalTyping}
              id="bid-plus-100"
              className="py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded-lg text-xs font-semibold text-stone-200 cursor-pointer disabled:opacity-50"
            >
              + $100
            </button>
            <button
              onClick={() => placeBid(currentBid + 250)}
              disabled={rivalTyping}
              id="bid-plus-250"
              className="py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded-lg text-xs font-semibold text-stone-200 cursor-pointer disabled:opacity-50"
            >
              + $250
            </button>
          </div>

          <form onSubmit={handleCustomSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-2.5 text-stone-500 text-xs font-mono font-bold">$</span>
              <input
                type="number"
                value={customBid}
                onChange={(e) => setCustomBid(e.target.value)}
                disabled={rivalTyping}
                id="custom-bid-amount-input"
                className="w-full bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-600 rounded-lg pl-7 pr-3 py-2.5 text-xs font-mono focus:outline-none focus:border-teal-500 active:outline-none"
                placeholder={String(currentBid + 50)}
              />
            </div>
            <button
              type="submit"
              disabled={rivalTyping}
              id="place-custom-bid-btn"
              className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-stone-950 font-bold rounded-lg text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Gavel className="w-3.5 h-3.5" /> Place Custom Bid
            </button>
          </form>

          {highestBidder === "You (Early Access Guest)" && (
            <div className="mt-2.5 text-center text-[10px] text-amber-500 font-mono animate-pulse flex items-center justify-center gap-1.5">
              <Trophy className="w-3.5 h-3.5" /> You are the highest bidder! Defend your spot.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
