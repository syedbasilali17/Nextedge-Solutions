import React from 'react';
import { ArrowRight, Sparkles, Code2, Cpu, ShieldCheck, CheckCircle2, TrendingUp, Terminal, Layers } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/agencyData';

interface HeroProps {
  onOpenQuote: () => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onScrollToServices }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle Background Glows (Soft lavender/white diffuse highlights, no harsh gradients) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#9787F3]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-white/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext, CTAs, Trust Metrics */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Silicon Valley SaaS Status Badge */}
            <div
              id="hero-status-badge"
              className="clay-pill inline-flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 mb-6"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6C5DD3] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6C5DD3]"></span>
                </span>
                <span className="text-xs font-bold text-[#1E1B4B] tracking-wide">
                  Next-Gen Software Development House
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#6C5DD3] bg-white/80 px-2.5 py-0.5 rounded-full shadow-[inset_1px_1px_2px_#cbd3ed] whitespace-nowrap">
                Q1 Client Openings Available
              </span>
            </div>

            {/* Main Headline (Mandatory: "Empowering Digital Growth") */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E1B4B] leading-[1.14] sm:leading-[1.12] mb-6"
            >
              Empowering{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#6C5DD3] to-[#9787F3]">
                Digital Growth
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#9787F3]/40"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 5.5C40 2 120 2 199 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              With Modern Software
            </h1>

            {/* Subtext */}
            <p
              id="hero-subtext"
              className="text-lg sm:text-xl text-[#4A4674] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              We design, engineer, and deploy high-converting websites, resilient cloud web applications,
              and category-defining digital products. Built with Silicon Valley craftsmanship for forward-thinking enterprises.
            </p>

            {/* CTAs */}
            <div
              id="hero-cta-group"
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={onOpenQuote}
                id="hero-quote-btn"
                className="neu-btn-primary px-8 py-4 text-base font-bold flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToServices}
                id="hero-services-btn"
                className="neu-btn-secondary px-7 py-4 text-base font-bold flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
              >
                <Layers className="w-5 h-5 text-[#6C5DD3]" />
                <span>View Services</span>
              </button>
            </div>

            {/* Trust Metrics Pill Strip */}
            <div
              id="hero-trust-strip"
              className="w-full pt-6 border-t border-[#cbd3ed]/60 grid grid-cols-3 gap-4"
            >
              {COMPANY_DETAILS.stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B]">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#4A4674]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Neumorphic Hero Card Design & Floating Elements */}
          <div className="lg:col-span-5 relative">
            
            {/* Primary Claymorphic Hero Card */}
            <div
              id="hero-interactive-card"
              className="clay-card p-6 sm:p-7 relative z-10 transition-transform duration-300"
            >
              {/* Card Header with macOS Style Neumorphic Pills */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#cbd3ed]/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF6B6B]/80 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#FFD166]/80 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#06D6A0]/80 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]"></span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEFFE] shadow-[inset_2px_2px_4px_#cbd3ed,inset_-2px_-2px_4px_#ffffff] text-xs font-bold text-[#6C5DD3]">
                  <Terminal className="w-3 h-3" />
                  <span>Nextvane-engine.v2</span>
                </div>
              </div>

              {/* Code / Architecture Snippet Box in Neumorphic Inset */}
              <div className="neu-inset p-4 font-mono text-xs text-[#1E1B4B] mb-5 space-y-2">
  <div className="flex items-center justify-between text-[#6C5DD3] font-semibold border-b border-[#cbd3ed]/50 pb-1.5">
    <span className="flex items-center gap-1.5">
      <Code2 className="w-3.5 h-3.5" />
      <span>Nextvane_core.engine.ts</span>
    </span>
    <span className="text-[10px] text-[#9787F3] bg-[#9787F3]/10 px-1.5 py-0.5 rounded font-sans font-bold">
      ● Deploying Premium Systems
    </span>
  </div>

  <p className="text-[#4A4674]">
    <span className="text-[#6C5DD3] font-bold">const</span> Nextvane ={" "}
    <span className="text-[#9787F3] font-bold">await</span> NextvaneSolutions.launch(&#123;
  </p>

  <p className="pl-4 text-[#1E1B4B]">
    identity: <span className="text-[#9787F3] font-bold">'Elite Digital Engineering House'</span>,
  </p>

  <p className="pl-4 text-[#1E1B4B]">
    expertise: <span className="text-[#6C5DD3] font-bold">'Web • Apps • UI/UX • Scalable Systems'</span>,
  </p>

  <p className="pl-4 text-[#1E1B4B]">
    performance: <span className="text-[#9787F3] font-bold">'High-Speed • Optimized • Secure'</span>,
  </p>

  <p className="pl-4 text-[#1E1B4B]">
    vision: <span className="text-[#6C5DD3] font-bold">'Building Future-Ready Digital Products'</span>
  </p>

  <p className="text-[#4A4674]">&#125;);</p>
</div>

              {/* Active Project Delivery Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-2xl bg-[#EAEFFE] shadow-[5px_5px_12px_#cbd3ed,-5px_-5px_12px_#ffffff] flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#9787F3] to-[#6C5DD3] text-white shadow-[2px_3px_6px_rgba(108,93,211,0.3)]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-[#1E1B4B]">+320%</div>
                    <div className="text-[11px] font-semibold text-[#4A4674]">Conversion Bump</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#EAEFFE] shadow-[5px_5px_12px_#cbd3ed,-5px_-5px_12px_#ffffff] flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#6C5DD3] text-white shadow-[2px_3px_6px_rgba(108,93,211,0.3)]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-[#1E1B4B]">100%</div>
                    <div className="text-[11px] font-semibold text-[#4A4674]">Clean Architecture</div>
                  </div>
                </div>
              </div>

              {/* Verified Client Guarantee Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-[#cbd3ed]/40 text-xs font-semibold text-[#4A4674]">
                <div className="flex items-center gap-1.5 text-[#1E1B4B]">
                  <CheckCircle2 className="w-4 h-4 text-[#6C5DD3]" />
                  <span>On-Time Milestone Guarantee</span>
                </div>
                <span className="text-[#6C5DD3] font-bold">Direct Founder Access</span>
              </div>
            </div>

            {/* Floating Neumorphic Pill 1 (Top Right) */}
            <div
              id="hero-floating-pill-1"
              className="hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#EAEFFE] shadow-[8px_8px_18px_#cbd3ed,-8px_-8px_18px_#ffffff] border border-white/80 animate-bounce duration-1000"
              style={{ animationDuration: '4s' }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#06D6A0]" />
              <span className="text-xs font-bold text-[#1E1B4B]">Remote-First Squad</span>
            </div>

            {/* Floating Neumorphic Pill 2 (Bottom Left) */}
            <div
              id="hero-floating-pill-2"
              className="hidden sm:flex absolute -bottom-6 -left-6 z-20 items-center gap-3 px-4 py-3 rounded-2xl bg-[#EAEFFE] shadow-[10px_10px_22px_#cad2eb,-10px_-10px_22px_#ffffff] border border-white/80"
            >
              <div className="p-2 rounded-xl bg-gradient-to-tr from-[#9787F3] to-[#6C5DD3] text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-[#1E1B4B]">Silicon Valley Caliber</div>
                <div className="text-[11px] text-[#4A4674]">Zero-Bloat Modern Tech</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
