import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    setIsQuoteOpen(true);
  };

  const handleScrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    // Smooth scroll directly to contact form to complete inquiry
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#EAEFFE] text-[#1E1B4B] flex flex-col font-sans selection:bg-[#9787F3]/30 selection:text-[#1E1B4B]">
      {/* Top Fixed Header with exact Logo */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onScrollToServices={handleScrollToServices}
        />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Portfolio / Projects Section */}
        <PortfolioSection />

        {/* Social Proof & FAQs */}
        <TestimonialsAndFaq />

        {/* 5. Contact Section */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* 6. Footer with exact Logo */}
      <Footer />

      {/* Interactive Neumorphic Quote Estimator Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
