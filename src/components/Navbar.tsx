import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  Sparkles,
  Home,
  Users,
  Briefcase,
  Layers,
  Mail,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/agencyData';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling chaos
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', icon: Home },
    { label: 'About Us', href: '#about', icon: Users },
    { label: 'Services', href: '#services', icon: Briefcase },
    { label: 'Portfolio', href: '#portfolio', icon: Layers },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled
    ? 'h-20 flex items-center bg-[#EAEFFE]/90 backdrop-blur-md shadow-[0_8px_24px_rgba(180,190,225,0.4)]'
    : 'h-24 flex items-center bg-transparent'
}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo container (Top Left) */}
          <a
            href="#hero"
            id="nav-logo-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center shrink-0 py-1 rounded-2xl transition-transform duration-200 hover:scale-[1.02] focus:outline-none"
            aria-label="Nextvane Solutions Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links (Neumorphic Pill Container) */}
          <nav
            id="desktop-nav-links"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EAEFFE] shadow-[inset_3px_3px_7px_#cbd3ed,inset_-3px_-3px_7px_#ffffff]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
className="px-5 py-2 text-sm font-semibold text-[#1E1B4B]/80 hover:text-[#6C5DD3] rounded-full transition-all duration-200 hover:bg-[#EAEFFE] hover:shadow-[4px_4px_8px_#cbd3ed,-4px_-4px_8px_#ffffff] whitespace-nowrap"              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Items & Mobile Menu Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Contact Link (Desktop only) */}
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              id="header-phone-btn"
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#1E1B4B] rounded-xl bg-[#EAEFFE] shadow-[4px_4px_10px_#cbd3ed,-4px_-4px_10px_#ffffff] hover:text-[#6C5DD3] hover:shadow-[inset_2px_2px_5px_#cbd3ed,inset_-2px_-2px_5px_#ffffff] transition-all"
              title={`Call ${COMPANY_DETAILS.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#6C5DD3]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>

            {/* Desktop CTA Button: Get a Free Quote */}
            <button
              onClick={onOpenQuote}
              id="navbar-get-quote-btn"
              className="hidden md:flex neu-btn-primary px-5 py-2.5 text-sm font-bold items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get a Free Quote</span>
            </button>

            {/* Compact Quote Button for Tablet / Small screen (sm to md) */}
            <button
              onClick={onOpenQuote}
              id="navbar-tablet-quote-btn"
              className="hidden sm:flex md:hidden neu-btn-primary px-3.5 py-2 text-xs font-bold items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quote</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              id="mobile-menu-toggle-btn"
              className="md:hidden neu-icon-btn w-10 h-10 flex items-center justify-center text-[#1E1B4B] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#6C5DD3]" />
              ) : (
                <Menu className="w-5 h-5 text-[#1E1B4B]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[60px] sm:top-[68px] bg-[#1E1B4B]/30 backdrop-blur-xs z-40 md:hidden"
              aria-hidden="true"
            />

            {/* Elevated Claymorphic Menu Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              id="mobile-menu-drawer"
              className="fixed left-0 right-0 top-[62px] sm:top-[70px] z-50 px-4 max-w-md mx-auto w-full md:hidden pointer-events-auto"
            >
              <div className="clay-card p-5 sm:p-6 shadow-[14px_18px_36px_#cbd3ed,-10px_-10px_28px_#ffffff] border border-white/90 rounded-3xl max-h-[calc(100vh-6rem)] overflow-y-auto">
                
                {/* Navigation Links Group */}
                <div className="flex flex-col gap-1.5 mb-5">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#4A4674]/70 px-3 pb-1">
                    Navigation
                  </div>
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-sm font-bold text-[#1E1B4B] hover:text-[#6C5DD3] hover:bg-[#e4ebfc] active:scale-[0.98] transition-all group"
                      >
                        <span className="flex items-center gap-3">
                          <span className="p-2 rounded-xl bg-[#EAEFFE] shadow-[inset_2px_2px_4px_#cbd3ed,inset_-2px_-2px_4px_#ffffff] text-[#6C5DD3] group-hover:text-[#9787F3] transition-colors">
                            <Icon className="w-4 h-4" />
                          </span>
                          <span>{link.label}</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#9787F3] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    );
                  })}
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-[#cbd3ed]/50 flex flex-col gap-3">
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl bg-[#EAEFFE] text-xs sm:text-sm font-bold text-[#1E1B4B] shadow-[inset_2px_2px_5px_#cbd3ed,inset_-2px_-2px_5px_#ffffff] hover:text-[#6C5DD3] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#6C5DD3]" />
                    <span>Direct Line: {COMPANY_DETAILS.phone}</span>
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenQuote();
                    }}
                    className="neu-btn-primary w-full py-3.5 px-5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Get a Free Quote</span>
                  </button>

                  {/* Trust Footer Tag */}
                  <div className="text-center pt-1">
                    <span className="text-[11px] font-semibold text-[#4A4674]">
                     NextvaneSolutions • 24hr Fast Response
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
