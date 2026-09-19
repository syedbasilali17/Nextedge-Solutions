import React, { useState } from 'react';
import { Star, ChevronDown, MessageSquareQuote, HelpCircle, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA, FAQS_DATA } from '../data/agencyData';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="clay-pill inline-flex items-center gap-2 px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#6C5DD3]" />
            <span className="text-xs font-bold text-[#1E1B4B] tracking-wide uppercase">
              Client Endorsements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight mb-4">
            Trusted by Leaders at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5DD3] to-[#9787F3]">
              Modern Companies
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4674] leading-relaxed">
            See why international founders and product leaders choose Nextvane Solutions as their primary
            software engineering and design partner.
          </p>
        </div>

        {/* Testimonials Cards (Neumorphic Elevated) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="neu-card-interactive p-7 sm:p-8 flex flex-col justify-between border border-white/60"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#FFD166] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD166]" />
                  ))}
                  <span className="text-xs font-bold text-[#1E1B4B] ml-1">5.0</span>
                </div>

                <p className="text-sm text-[#1E1B4B] italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#cbd3ed]/50">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover shadow-[inset_1px_1px_2px_#cbd3ed] border border-white"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-[#1E1B4B]">{item.name}</h4>
                  <p className="text-xs font-semibold text-[#6C5DD3]">{item.role}</p>
                  <p className="text-[11px] text-[#4A4674]">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="clay-pill inline-flex items-center gap-2 px-3.5 py-1.5 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#6C5DD3]" />
              <span className="text-xs font-bold text-[#1E1B4B] uppercase">
                Frequently Asked Questions
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B]">
              Everything You Need to Know
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all ${
                    isOpen
                      ? 'clay-card p-5 sm:p-6'
                      : 'neu-raised-sm p-4 sm:p-5 hover:bg-white/40'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#1E1B4B]">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-xl transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#6C5DD3] text-white shadow-[2px_2px_5px_rgba(108,93,211,0.3)]'
                          : 'neu-icon-btn text-[#1E1B4B]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-3 border-t border-[#cbd3ed]/40 animate-in fade-in duration-200">
                      <p className="text-sm text-[#4A4674] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
