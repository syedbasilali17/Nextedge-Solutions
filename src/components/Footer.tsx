import React from 'react';
import { Logo } from './Logo';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data/agencyData';
import { Phone, Mail, ArrowUp, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="pt-16 pb-12 bg-[#EAEFFE] border-t border-[#cbd3ed]/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#cbd3ed]/50">
          
          {/* Brand Column (Logo + Mission) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#hero" className="mb-4 inline-block">
              <Logo size="md" />
            </a>
            <p className="text-xs sm:text-sm text-[#4A4674] leading-relaxed mb-6 max-w-sm">
              Nextvane Solutions is a boutique software house and digital agency delivering modern web development,
              resilient web applications, intuitive UI/UX design, and scalable digital solutions.
            </p>

            {/* Social Media Placeholders (Neumorphic circular buttons) */}
            <div className="flex items-center gap-2.5">
              <a
                href="#hero"
                id="footer-social-linkedin"
                aria-label="LinkedIn"
                className="neu-icon-btn p-2.5 text-[#1E1B4B]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                id="footer-social-twitter"
                aria-label="Twitter / X"
                className="neu-icon-btn p-2.5 text-[#1E1B4B]"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                id="footer-social-github"
                aria-label="GitHub"
                className="neu-icon-btn p-2.5 text-[#1E1B4B]"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                id="footer-social-dribbble"
                aria-label="Dribbble"
                className="neu-icon-btn p-2.5 text-[#1E1B4B]"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1B4B] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="text-[#4A4674] hover:text-[#6C5DD3] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#4A4674] hover:text-[#6C5DD3] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#4A4674] hover:text-[#6C5DD3] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-[#4A4674] hover:text-[#6C5DD3] transition-colors">
                  Portfolio Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#4A4674] hover:text-[#6C5DD3] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1B4B] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="text-[#4A4674] hover:text-[#6C5DD3] transition-colors"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1B4B] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-2.5 text-[#1E1B4B] hover:text-[#6C5DD3] transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#EAEFFE] shadow-[2px_2px_5px_#cbd3ed,-2px_-2px_5px_#ffffff] text-[#6C5DD3]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold">{COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2.5 text-[#1E1B4B] hover:text-[#6C5DD3] transition-colors break-all"
              >
                <div className="p-2 rounded-lg bg-[#EAEFFE] shadow-[2px_2px_5px_#cbd3ed,-2px_-2px_5px_#ffffff] text-[#9787F3]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold">{COMPANY_DETAILS.email}</span>
              </a>

              <div className="pt-2 text-[11px] text-[#4A4674]">
                Remote-first global software house engineered for Silicon Valley performance.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright (Mandatory: "© Nextvane Solutions. All rights reserved.") + Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            id="footer-copyright"
            className="text-xs sm:text-sm text-[#4A4674] font-medium"
          >
            {COMPANY_DETAILS.copyright}
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#6C5DD3] font-semibold">
              Neumorphic & Claymorphism Architecture
            </span>
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              aria-label="Back to top"
              className="neu-icon-btn p-2 text-[#1E1B4B] cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
