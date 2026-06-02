import { useState, useEffect } from 'react';
import { MessageSquare, ShieldCheck, DollarSign, UserCheck, ArrowRight, CornerDownRight } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'seller';
  text: string;
  time: string;
}

export default function BargainSimulator() {
  const listPrice = 320;
  const minPrice = 160;
  const targetCg = 240; // The seller's soft bottom-line

  const [offerPrice, setOfferPrice] = useState<number>(240);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'seller',
      text: "Hi there! This Vintage Prada Archive jacket is in perfect condition (Grade A). Fully expert verified. Let me know if you have an offer! ✨",
      time: "10:14 AM"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [successDeal, setSuccessDeal] = useState<number | null>(null);

  const getSystemResponse = (offer: number) => {
    if (offer < 200) {
      return {
        text: `Oof, $${offer} is a bit too low for Prada premium leather in this shape! The verification service alone is certified. Can you do $270? 🧥`,
        deal: false
      };
    } else if (offer >= 200 && offer < 250) {
      return {
        text: `I appreciate the offer! $${offer} is close. How about we meet in the middle at $255 so I can cover standard secure shipping? 🙌`,
        deal: false,
        counter: 255
      };
    } else if (offer >= 250 && offer < 300) {
      return {
        text: `Deal! $${offer} is reasonable for both of us. Let's send this to the Fashion Resale auth hub right away! 🎉`,
        deal: true
      };
    } else {
      return {
        text: `Wow, amazing! Offer of $${offer} accepted instantly. Packaging with certification label and custom verification seal. You'll love it! 🛡️`,
        deal: true
      };
    }
  };

  const handleSendOffer = () => {
    if (isTyping || successDeal) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: `Would you take $${offerPrice} for this? I can buy it right now!`,
      time: "Just now"
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getSystemResponse(offerPrice);
      const sellerMsg: ChatMessage = {
        sender: 'seller',
        text: response.text,
        time: "Just now"
      };
      setMessages(prev => [...prev, sellerMsg]);
      setIsTyping(false);
      
      if (response.deal) {
        setSuccessDeal(offerPrice);
      }
    }, 1100);
  };

  const resetSimulator = () => {
    setMessages([
      {
        sender: 'seller',
        text: "Hi there! This Vintage Prada Archive jacket is in perfect condition (Grade A). Fully expert verified. Let me know if you have an offer! ✨",
        time: "10:14 AM"
      }
    ]);
    setSuccessDeal(null);
    setOfferPrice(240);
  };

  return (
    <div id="bargain-simulator" className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-stone-900/40 border border-stone-800 p-5 md:p-6 rounded-3xl backdrop-blur-md">
      {/* Product Overview Item details */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-5">
        <div>
          <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-mono border border-amber-500/20 rounded-full tracking-wider uppercase">
            Active Listing • Direct Bargain Enabled
          </span>
          <h3 className="text-xl md:text-2xl font-sans font-semibold text-stone-100 tracking-tight mt-3">
            Prada Archive Nylon Leather Jacket
          </h3>
          <p className="text-xs text-stone-400 font-mono mt-1">ID: PR-1998-COLL</p>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-mono font-bold text-stone-200">${listPrice}</span>
            <span className="text-xs text-stone-500 line-through font-mono">Est. Retail $1,400</span>
            <span className="text-xs text-emerald-500 font-mono font-semibold">Ready to bargain</span>
          </div>

          <p className="text-stone-400 text-sm mt-4 leading-relaxed">
            From the Fall 1998 Collection. Medium-weight nylon with calfskin accents, silver hardware. Comes with official circular certificate tag.
          </p>
        </div>

        {/* Dynamic Image Representation (Sleek placeholder / generated image like CSS card) */}
        <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 flex items-center justify-center p-4">
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/95 to-transparent p-4 z-10">
            <div className="flex justify-between items-center text-xs">
              <span className="text-stone-300 font-medium">Wear: Like New</span>
              <span className="px-2 py-0.5 bg-teal-500/15 border border-teal-500/30 text-teal-400 rounded-full text-[10px]">
                Highly Coveted
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-xs text-stone-300 font-mono">Verified Authentic Quality</p>
            <p className="text-[10px] text-stone-500 font-mono mt-0.5">Fashion Resale Verification Hub Approved</p>
          </div>
        </div>
      </div>

      {/* Bargaining Interactive Simulator Chat Layout */}
      <div className="lg:col-span-7 flex flex-col justify-between h-[450px] bg-stone-950/80 rounded-2xl border border-stone-800 p-4">
        {/* Chat header */}
        <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-stone-800 border border-teal-500/30 flex items-center justify-center text-stone-200 text-xs font-mono font-bold">
              OA
            </div>
            <div>
              <p className="text-xs text-stone-200 font-semibold flex items-center gap-1.5">
                Omar Baig <span className="text-[10px] text-stone-400 font-normal font-mono">(Seller)</span>
              </p>
              <div className="flex items-center gap-1 text-[9px] text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Active in chat
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px] text-stone-400">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Encrypted Deal</span>
          </div>
        </div>

        {/* Chat Messages Log */}
        <div className="flex-1 overflow-y-auto space-y-3.5 my-4 px-1 pr-2 scrollbar-thin">
          {messages.map((m, index) => (
            <div
              key={index}
              className={`flex flex-col max-w-[85%] ${m.sender === 'user' ? 'ml-auto items-end animate-fade-in' : 'mr-auto items-start'}`}
            >
              <div
                className={`text-xs px-3.5 py-2.5 rounded-2xl leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-amber-500 text-stone-950 font-medium rounded-tr-none'
                    : 'bg-stone-900 text-stone-300 border border-stone-800/80 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
              <span className="text-[9px] text-stone-500 font-mono mt-1 px-1">{m.time}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex flex-col mr-auto max-w-[85%] items-start">
              <div className="text-xs px-3.5 py-2.5 bg-stone-900 border border-stone-800 rounded-2xl rounded-tl-none flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
        </div>

        {/* Input area or Bargain Negotiator Slider */}
        <div className="border-t border-stone-800/80 pt-3">
          {successDeal ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl text-center">
              <p className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                <UserCheck className="w-4 h-4" /> Bargain Successful! Offer Closed at ${successDeal}
              </p>
              <button
                onClick={resetSimulator}
                id="reset-bargain-sim"
                className="mt-2 text-[10px] text-stone-400 hover:text-stone-300 font-mono Underline cursor-pointer"
              >
                Reset Chat Simulator
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs text-stone-300 font-mono">Bargaining Gauge</span>
                </div>
                <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Offer: ${offerPrice}
                </span>
              </div>

              {/* Slider Input */}
              <div className="relative">
                <input
                  type="range"
                  min={minPrice}
                  max={listPrice}
                  step={5}
                  value={offerPrice}
                  onChange={(e) => setOfferPrice(Number(e.target.value))}
                  id="bargain-slider-input"
                  className="w-full accent-amber-500 h-1 bg-stone-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-stone-500 font-mono mt-1">
                  <span>lowball (${minPrice})</span>
                  <span>sweet spot ($240-$280)</span>
                  <span>list ($320)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleSendOffer}
                  disabled={isTyping}
                  id="send-bargain-offer-btn"
                  className="flex-1 py-2 bg-amber-500 hover:bg-amber-400 disabled:bg-stone-800 disabled:text-stone-500 text-stone-950 font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  Confirm Bargaining Offer <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
