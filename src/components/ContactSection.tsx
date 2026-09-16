import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, Clock, MapPin, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data/agencyData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || SERVICES_DATA[0].title,
    message: '',
  });

  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected service if prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message so we can assist you.');
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable asynchronous dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="clay-pill inline-flex items-center gap-2 px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#6C5DD3]" />
            <span className="text-xs font-bold text-[#1E1B4B] tracking-wide uppercase">
              Start Your Project
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight mb-4">
            Get in Touch With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5DD3] to-[#9787F3]">
              NextEdge Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4674] leading-relaxed">
            Ready to bring your software vision to life? Request a free quote, explore our modern tech stack,
            or speak directly with our engineering team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (Phone, Email, Hours, SLAs) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Phone Card (Mandatory: 03152984976) */}
            <div
              id="contact-phone-card"
              className="neu-card-interactive p-6 sm:p-7 border border-white/60"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAEFFE] shadow-[inset_3px_3px_6px_#cbd3ed,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center text-[#6C5DD3]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#9787F3] uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      className="text-xl font-extrabold text-[#1E1B4B] hover:text-[#6C5DD3] transition-colors"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                {/* Quick Copy Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_DETAILS.phone, 'phone')}
                  className="neu-icon-btn p-2 text-[#4A4674] cursor-pointer shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-[#06D6A0]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-[#4A4674] mt-3 pl-0 sm:pl-16">
                Available Mon–Sat for direct client briefings & technical scoping.
              </p>
            </div>

            {/* Email Card (Mandatory: syedbasilali22@gmail.com) */}
            <div
              id="contact-email-card"
              className="neu-card-interactive p-6 sm:p-7 border border-white/60"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAEFFE] shadow-[inset_3px_3px_6px_#cbd3ed,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center text-[#9787F3]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-[#6C5DD3] uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-base sm:text-lg font-extrabold text-[#1E1B4B] hover:text-[#6C5DD3] transition-colors break-all"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Quick Copy Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_DETAILS.email, 'email')}
                  className="neu-icon-btn p-2 text-[#4A4674] cursor-pointer shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-[#06D6A0]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-[#4A4674] mt-3 pl-0 sm:pl-16">
                Guaranteed response within 2 hours with project feasibility notes.
              </p>
            </div>

            {/* Service Level Agreement & Work Model Card */}
            <div className="clay-card p-6 sm:p-7">
              <h4 className="text-base font-bold text-[#1E1B4B] mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#6C5DD3]" />
                <span>Client Communication Commitments</span>
              </h4>
              <ul className="space-y-3 text-xs text-[#4A4674]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#06D6A0] shrink-0" />
                  <span>Transparent milestone tracking and sprint boards</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#06D6A0] shrink-0" />
                  <span>Strict NDA and intellectual property protection</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#06D6A0] shrink-0" />
                  <span>Comprehensive code handover with 30-day warranty</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Neumorphic Contact Form */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-wrapper"
              className="neu-raised p-7 sm:p-10 border border-white/70"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#1E1B4B] mb-2">
                  Send Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4674]">
                  Tell us about your project requirements and we will assemble a tailored development proposal.
                </p>
              </div>

              {isSubmitted ? (
                <div
                  id="contact-success-notification"
                  className="clay-card p-8 text-center flex flex-col items-center justify-center animate-in fade-in"
                >
                  <div className="w-16 h-16 rounded-full bg-[#06D6A0]/15 text-[#06D6A0] flex items-center justify-center mb-4 shadow-[inset_2px_2px_4px_rgba(6,214,160,0.3)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#1E1B4B] mb-2">
                    Message Received!
                  </h4>
                  <p className="text-sm text-[#4A4674] max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-[#1E1B4B]">{formData.name}</span>. Our engineering team at NextEdge Solutions has received your request regarding <span className="font-semibold text-[#6C5DD3]">{formData.service}</span>. We will follow up at <span className="font-semibold text-[#1E1B4B]">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: SERVICES_DATA[0].title,
                        message: '',
                      });
                    }}
                    className="neu-btn-primary px-6 py-2.5 text-xs font-bold cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 text-xs font-bold text-[#FF6B6B]">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="contact-input-name"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-input-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3.5 neu-inset text-sm text-[#1E1B4B] placeholder-[#4A4674]/50 focus:outline-none focus:ring-2 focus:ring-[#9787F3]/50 transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="contact-input-email"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-input-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3.5 neu-inset text-sm text-[#1E1B4B] placeholder-[#4A4674]/50 focus:outline-none focus:ring-2 focus:ring-[#9787F3]/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number (Optional) */}
                    <div>
                      <label
                        htmlFor="contact-input-phone"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                      >
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        id="contact-input-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3.5 neu-inset text-sm text-[#1E1B4B] placeholder-[#4A4674]/50 focus:outline-none focus:ring-2 focus:ring-[#9787F3]/50 transition-all"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label
                        htmlFor="contact-select-service"
                        className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                      >
                        Interested Service
                      </label>
                      <select
                        id="contact-select-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 neu-inset text-sm text-[#1E1B4B] focus:outline-none focus:ring-2 focus:ring-[#9787F3]/50 transition-all cursor-pointer"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-[#EAEFFE]">
                            {srv.title}
                          </option>
                        ))}
                        <option value="Complete Custom Suite" className="bg-[#EAEFFE]">
                          Complete Custom Suite (Multiple Services)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-input-message"
                      className="block text-xs font-bold text-[#1E1B4B] uppercase tracking-wider mb-2"
                    >
                      Project Scope & Goals *
                    </label>
                    <textarea
                      id="contact-input-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you are building, target timeline, any specific technical requirements..."
                      className="w-full px-4 py-3.5 neu-inset text-sm text-[#1E1B4B] placeholder-[#4A4674]/50 focus:outline-none focus:ring-2 focus:ring-[#9787F3]/50 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button (Neumorphic Style) */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="neu-btn-primary w-full py-4 text-base font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Proposal</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#4A4674]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#06D6A0]" />
                    <span>Your inquiry routes directly to syedbasilali22@gmail.com</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
