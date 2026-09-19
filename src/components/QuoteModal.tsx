import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, Calculator, Layers } from 'lucide-react';
import { SERVICES_DATA, COMPANY_DETAILS } from '../data/agencyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState<string>(SERVICES_DATA[0].title);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('2-4 Weeks');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Responsive Mobile UI',
    'SEO & Performance Tuning',
  ]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const featureOptions = [
    'Responsive Mobile UI',
    'Custom Database & API',
    'Multi-Currency Payments',
    'SEO & Performance Tuning',
    'Claymorphic Design System',
    'Real-time Analytics Portal',
  ];

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div
      id="quote-calculator-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1B4B]/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="clay-card max-w-2xl w-full p-6 sm:p-8 relative bg-[#EAEFFE] border border-white max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-quote-modal-btn"
          className="absolute top-5 right-5 neu-icon-btn p-2 text-[#1E1B4B] cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#06D6A0]/20 text-[#06D6A0] flex items-center justify-center mb-4 shadow-[inset_2px_2px_5px_rgba(6,214,160,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#1E1B4B] mb-2">
              Quote Request Submitted!
            </h3>
            <p className="text-sm text-[#4A4674] max-w-md mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-[#1E1B4B]">{clientName}</span>. Our engineering director will review your scope for <span className="font-semibold text-[#6C5DD3]">{selectedService}</span> and send an itemized quote and roadmap to <span className="font-semibold text-[#1E1B4B]">{clientEmail}</span> within 2 hours.
            </p>
            <div className="p-4 rounded-xl neu-inset text-xs text-[#1E1B4B] mb-6 w-full max-w-sm">
              <span className="font-bold block mb-1">Direct Assistance:</span>
              <span>Call us anytime: </span>
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="font-extrabold text-[#6C5DD3] hover:underline">
                {COMPANY_DETAILS.phone}
              </a>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="neu-btn-primary px-8 py-3 text-sm font-bold cursor-pointer"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="clay-pill inline-flex items-center gap-2 px-3 py-1 mb-2">
                <Calculator className="w-3.5 h-3.5 text-[#6C5DD3]" />
                <span className="text-xs font-bold text-[#6C5DD3] uppercase">
                  Project Scoping & Quote
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B]">
                Get a Free Technical Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4674]">
                Select your parameters below to receive a custom project estimate and milestone plan from NextvaneSolutions.
              </p>
            </div>

            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2.5">
                  1. Select Core Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES_DATA.map((srv) => (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setSelectedService(srv.title)}
                      className={`p-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                        selectedService === srv.title
                          ? 'neu-btn-primary'
                          : 'bg-[#EAEFFE] text-[#1E1B4B] shadow-[3px_3px_8px_#cbd3ed,-3px_-3px_8px_#ffffff]'
                      }`}
                    >
                      <span>{srv.title}</span>
                      {selectedService === srv.title && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Expectation */}
              <div>
                <label className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2.5">
                  2. Target Launch Window
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['2-4 Weeks', '1-2 Months', '3+ Months'].map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTimeline(time)}
                      className={`py-2.5 px-3 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                        selectedTimeline === time
                          ? 'neu-btn-primary'
                          : 'bg-[#EAEFFE] text-[#1E1B4B] shadow-[3px_3px_8px_#cbd3ed,-3px_-3px_8px_#ffffff]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feature Checklist */}
              <div>
                <label className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2.5">
                  3. Key Modules Required
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {featureOptions.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat);
                    return (
                      <button
                        type="button"
                        key={feat}
                        onClick={() => toggleFeature(feat)}
                        className={`p-2.5 rounded-xl text-left text-[11px] sm:text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-[#6C5DD3]/10 border border-[#6C5DD3] text-[#6C5DD3]'
                            : 'neu-inset text-[#4A4674]'
                        }`}
                      >
                        <span>{feat}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center text-white ${
                            isChecked ? 'bg-[#6C5DD3]' : 'bg-[#cbd3ed]'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Client Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 neu-inset text-xs sm:text-sm text-[#1E1B4B] placeholder-[#4A4674]/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 neu-inset text-xs sm:text-sm text-[#1E1B4B] placeholder-[#4A4674]/50 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-1.5">
                  Brief Project Summary / Requirements
                </label>
                <textarea
                  rows={2}
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  placeholder="Any particular benchmarks, design references, or technical integrations..."
                  className="w-full px-3.5 py-2.5 neu-inset text-xs sm:text-sm text-[#1E1B4B] placeholder-[#4A4674]/50 focus:outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="neu-btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Generating Estimate...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Generate Free Proposal & Quote</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
