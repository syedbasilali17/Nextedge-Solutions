import React from 'react';
import { Target, Compass, Globe2, Users, Zap, Sparkles, Check, Clock, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      step: '01',
      tag: 'ASYNC VELOCITY',
      icon: Clock,
      title: '24/7 Continuous Sprints',
      desc: 'Our distributed collective brings together top engineering and design talent worldwide. By operating asynchronously across time zones, we provide 24-hour sprint velocity without bureaucratic overhead.',
      benefits: [
        'Timezone-aligned continuous sprint delivery',
        'Daily video updates & interactive staging previews',
        'Up to 50% faster feature turnaround times',
      ],
      metricBadge: '⚡ 2.4x Faster Sprints',
      accentGradient: 'from-[#9787F3] to-[#6C5DD3]',
    },
    {
      step: '02',
      tag: 'DIRECT ACCESS',
      icon: Zap,
      title: 'Modern Digital Solutions',
      desc: 'We discard legacy frameworks, bloated templates, and junior developer handoffs. Every solution is purpose-built with React, TypeScript, cloud microservices, and tactile neumorphic design patterns.',
      benefits: [
        'Direct Slack/Discord access with lead engineers',
        'Clean TypeScript architecture & zero technical debt',
        'Full source code & IP ownership transferred to you',
      ],
      metricBadge: '🛡️ Zero Middlemen / 100% Direct',
      accentGradient: 'from-[#6C5DD3] to-[#4F46E5]',
    },
    {
      step: '03',
      tag: 'GLOBAL AMBITION',
      icon: Globe2,
      title: 'Global Scale Ambition',
      desc: 'Built with the long-term vision of becoming a world-class technology powerhouse, we adhere to international code quality, zero-trust security standards, and enterprise cloud scalability.',
      benefits: [
        'Zero-trust security & GDPR-ready data privacy',
        '95+ Google Lighthouse & Core Web Vitals guarantee',
        'Scalable architecture ready for 1M+ active users',
      ],
      metricBadge: '🌐 Tier-1 Enterprise Standards',
      accentGradient: 'from-[#8070F0] to-[#5542D0]',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="clay-pill inline-flex items-center gap-2 px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#6C5DD3]" />
            <span className="text-xs font-bold text-[#1E1B4B] tracking-wide uppercase">
              About NextEdge Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight mb-4">
            Crafting the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5DD3] to-[#9787F3]">
              Digital Products
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4674] leading-relaxed">
            NextEdge Solutions is an agile software house startup born with a clear mandate: to help bold companies
            outpace the competition through superior technology, refined tactile design, and rapid delivery.
          </p>
        </div>

        {/* Mission, Vision & Global Agency Goal (Neumorphic Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Mission Card */}
          <div
            id="about-card-mission"
            className="neu-card-interactive p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#EAEFFE] shadow-[inset_3px_3px_6px_#cbd3ed,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center text-[#6C5DD3] mb-6">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold tracking-wider text-[#9787F3] uppercase mb-2 block">
                Our Purpose
              </span>
              <h3 className="text-xl font-bold text-[#1E1B4B] mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base text-[#4A4674] leading-relaxed">
                To empower startups and modern enterprises by delivering bespoke, high-performance digital solutions
                that seamlessly blend ergonomic aesthetics, rock-solid engineering, and undeniable business impact.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#cbd3ed]/60 flex items-center gap-2 text-xs font-semibold text-[#1E1B4B]">
              <Check className="w-4 h-4 text-[#6C5DD3]" />
              <span>Measurable ROI in every project</span>
            </div>
          </div>

          {/* Vision Card */}
          <div
            id="about-card-vision"
            className="neu-card-interactive p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#EAEFFE] shadow-[inset_3px_3px_6px_#cbd3ed,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center text-[#9787F3] mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold tracking-wider text-[#6C5DD3] uppercase mb-2 block">
                Where We Are Headed
              </span>
              <h3 className="text-xl font-bold text-[#1E1B4B] mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-[#4A4674] leading-relaxed">
                To become the world's most trusted boutique software innovation agency, known for taking complex concepts
                and translating them into intuitive, market-leading software that transforms industries.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#cbd3ed]/60 flex items-center gap-2 text-xs font-semibold text-[#1E1B4B]">
              <Check className="w-4 h-4 text-[#9787F3]" />
              <span>Pioneering tactile design paradigms</span>
            </div>
          </div>

          {/* Long-Term Goal Card */}
          <div
            id="about-card-goal"
            className="neu-card-interactive p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#EAEFFE] shadow-[inset_3px_3px_6px_#cbd3ed,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center text-[#6C5DD3] mb-6">
                <Globe2 className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold tracking-wider text-[#9787F3] uppercase mb-2 block">
                Global Ambition
              </span>
              <h3 className="text-xl font-bold text-[#1E1B4B] mb-3">Becoming a Global Agency</h3>
              <p className="text-sm sm:text-base text-[#4A4674] leading-relaxed">
                We are actively scaling our footprint across North America, Europe, the Middle East, and Asia-Pacific.
                Our remote-first infrastructure enables us to partner with tier-1 international clients with zero geographic friction.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#cbd3ed]/60 flex items-center gap-2 text-xs font-semibold text-[#1E1B4B]">
              <Check className="w-4 h-4 text-[#6C5DD3]" />
              <span>Serving clients across 14+ countries</span>
            </div>
          </div>

        </div>

        {/* Brand New Modern Remote-First Architecture Section */}
        <div id="about-remote-highlight" className="pt-6">
          
          {/* Section Header with Tags */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="clay-pill inline-flex items-center gap-2 px-4 py-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6C5DD3]" />
              <span className="text-xs font-bold tracking-wider text-[#6C5DD3] uppercase">
                NextEdge Operating Model
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight mb-4 leading-tight">
              Why Our Remote-First Model{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5DD3] to-[#9787F3]">
                Wins for Clients
              </span>
            </h3>
            <p className="text-base sm:text-lg text-[#4A4674] leading-relaxed">
              Unlike traditional agencies weighed down by expensive physical leases and localized talent constraints,
              NextEdge recruits top-percentile software engineers worldwide — offering faster delivery, senior direct access, and zero corporate bureaucracy.
            </p>
            
            {/* Quick Benefits Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-6">
              <span className="clay-pill px-4 py-2 text-xs sm:text-sm font-bold text-[#1E1B4B] shadow-[3px_3px_7px_#cbd3ed,-3px_-3px_7px_#ffffff]">
                ⚡ 24/7 Continuous Velocity
              </span>
              <span className="clay-pill px-4 py-2 text-xs sm:text-sm font-bold text-[#1E1B4B] shadow-[3px_3px_7px_#cbd3ed,-3px_-3px_7px_#ffffff]">
                🛡️ Zero Middlemen / 100% Direct
              </span>
              <span className="clay-pill px-4 py-2 text-xs sm:text-sm font-bold text-[#1E1B4B] shadow-[3px_3px_7px_#cbd3ed,-3px_-3px_7px_#ffffff]">
                💬 Direct Senior Engineer Slack Channel
              </span>
            </div>
          </div>

          {/* 3 Balanced, Spaciously Articulated Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pillars.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  id={`remote-pillar-${item.step}`}
                  className="clay-card p-7 sm:p-8 flex flex-col justify-between hover:shadow-[12px_12px_28px_#cbd3ed,-12px_-12px_28px_#ffffff] transition-all duration-300 hover:-translate-y-1.5 border border-white/80"
                >
                  <div>
                    {/* Top Step & Category Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-[#EAEFFE] shadow-[inset_2px_2px_4px_#cbd3ed,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center text-xs font-black text-[#6C5DD3]">
                          {item.step}
                        </span>
                        <span className="text-[11px] font-bold tracking-widest text-[#6C5DD3] uppercase">
                          {item.tag}
                        </span>
                      </div>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.accentGradient} text-white flex items-center justify-center shadow-[3px_4px_12px_rgba(108,93,211,0.3)]`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h4 className="text-xl font-extrabold text-[#1E1B4B] mb-3 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#4A4674] leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    {/* Checkmark Advantages List */}
                    <ul className="space-y-2.5 mb-6 pt-4 border-t border-[#cbd3ed]/50">
                      {item.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E1B4B] font-medium">
                          <Check className="w-4 h-4 text-[#6C5DD3] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="pt-4 border-t border-[#cbd3ed]/50">
                    <span className="clay-pill px-3.5 py-1.5 text-xs font-bold text-[#6C5DD3] inline-block">
                      {item.metricBadge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Modern Executive Trust & Efficiency Strip */}
          <div className="clay-card p-6 sm:p-8 border border-white/90">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#cbd3ed]/60">
              <div className="pt-4 lg:pt-0">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6C5DD3] to-[#9787F3]">
                  2.4x
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#1E1B4B] mt-1">Faster Velocity</div>
                <div className="text-[11px] text-[#4A4674]">vs traditional agencies</div>
              </div>
              <div className="pt-4 lg:pt-0">
                <div className="text-2xl sm:text-3xl font-black text-[#1E1B4B]">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#1E1B4B] mt-1">Senior Engineers</div>
                <div className="text-[11px] text-[#4A4674]">Zero junior handoffs</div>
              </div>
              <div className="pt-4 lg:pt-0">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6C5DD3] to-[#9787F3]">
                  &lt; 2 Hrs
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#1E1B4B] mt-1">SLA Turnaround</div>
                <div className="text-[11px] text-[#4A4674]">Direct engineer chat</div>
              </div>
              <div className="pt-4 lg:pt-0">
                <div className="text-2xl sm:text-3xl font-black text-[#1E1B4B]">
                  14+
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#1E1B4B] mt-1">Countries Served</div>
                <div className="text-[11px] text-[#4A4674]">Seamless global delivery</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
