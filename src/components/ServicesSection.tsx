import React, { useState } from 'react';
import { Globe, Layers, Layout, Smartphone, ShoppingCart, TrendingUp, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  // Map icon strings to Lucide React Icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return Globe;
      case 'Layers':
        return Layers;
      case 'Layout':
        return Layout;
      case 'Smartphone':
        return Smartphone;
      case 'ShoppingCart':
        return ShoppingCart;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return Sparkles;
    }
  };

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.id === activeTab);

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="clay-pill inline-flex items-center gap-2 px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#6C5DD3]" />
            <span className="text-xs font-bold text-[#1E1B4B] tracking-wide uppercase">
              Specialized Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight mb-4">
            High-Impact Services for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5DD3] to-[#9787F3]">
              Ambitious Brands
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4674] leading-relaxed">
            From high-speed websites to complex SaaS cloud engines, every solution is built with 
            strict engineering precision and our proprietary tactile neumorphic design system.
          </p>
        </div>

        {/* Responsive Service Category Badges - Wrapped & Centered with No Side Overflow */}
        <div className="mb-14 px-2">
          <div
            id="service-filter-bar"
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto"
          >
            <button
              onClick={() => setActiveTab('all')}
              id="service-filter-all"
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'neu-btn-primary shadow-[4px_4px_12px_rgba(108,93,211,0.35)]'
                  : 'bg-[#EAEFFE] text-[#1E1B4B] shadow-[4px_4px_9px_#cbd3ed,-4px_-4px_9px_#ffffff] hover:text-[#6C5DD3] hover:shadow-[2px_2px_5px_#cbd3ed,-2px_-2px_5px_#ffffff]'
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>All Services</span>
            </button>

            {SERVICES_DATA.map((service) => {
              const IconComp = getIcon(service.iconName);
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  id={`service-filter-${service.id}`}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'neu-btn-primary shadow-[4px_4px_12px_rgba(108,93,211,0.35)]'
                      : 'bg-[#EAEFFE] text-[#1E1B4B] shadow-[4px_4px_9px_#cbd3ed,-4px_-4px_9px_#ffffff] hover:text-[#6C5DD3] hover:shadow-[2px_2px_5px_#cbd3ed,-2px_-2px_5px_#ffffff]'
                  }`}
                >
                  <div className={`p-1 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-white/80 text-[#6C5DD3]'}`}>
                    <IconComp className="w-3.5 h-3.5 shrink-0" />
                  </div>
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid (Neumorphic Cards with Soft Shadow & Hover Depth Effect) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const IconComp = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="neu-card-interactive p-7 sm:p-8 flex flex-col justify-between group border border-white/60"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#EAEFFE] shadow-[inset_3px_3px_6px_#cbd3ed,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center text-[#6C5DD3] transition-transform duration-300 group-hover:scale-105 group-hover:text-[#9787F3]">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-[#6C5DD3] bg-white/80 px-3 py-1 rounded-full shadow-[2px_2px_5px_#cbd3ed,-2px_-2px_5px_#ffffff]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] mb-2 group-hover:text-[#6C5DD3] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#9787F3] mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#4A4674] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist with clean soft depth */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#cbd3ed]/40">
                    <span className="text-[11px] font-bold text-[#1E1B4B] tracking-wider uppercase block mb-1">
                      Key Highlights:
                    </span>
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2.5 text-xs text-[#1E1B4B]">
                        <CheckCircle2 className="w-4 h-4 text-[#6C5DD3] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => onSelectService(service.title)}
                  id={`service-inquire-${service.id}`}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#1E1B4B] bg-[#EAEFFE] shadow-[5px_5px_12px_#cbd3ed,-5px_-5px_12px_#ffffff] hover:text-[#6C5DD3] hover:shadow-[inset_2px_2px_5px_#cbd3ed,inset_-2px_-2px_5px_#ffffff] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <span>Request Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#6C5DD3] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Global Architecture Quality Banner */}
        <div
          id="services-quality-banner"
          className="mt-14 clay-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9787F3] to-[#6C5DD3] text-white flex items-center justify-center shadow-[2px_3px_8px_rgba(108,93,211,0.3)] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#1E1B4B]">
                Need a Custom Architectural Solution?
              </h4>
              <p className="text-xs sm:text-sm text-[#4A4674]">
                We combine website, web application, and custom UI/UX design into full-cycle development scopes.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('Full-Stack Custom Project')}
            className="neu-btn-primary px-6 py-3 text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer"
          >
            Consult Our Engineering Leads
          </button>
        </div>

      </div>
    </section>
  );
};
