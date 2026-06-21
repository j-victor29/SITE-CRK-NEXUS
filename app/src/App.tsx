import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';
import CasesSection from './sections/CasesSection';
import CtaSection from './sections/CtaSection';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-crk-bg">
      <Navbar />
      <main>
        <HeroSection />
        <ScrollReveal direction="up">
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.03}>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.04}>
          <ProcessSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.03}>
          <CasesSection />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.04}>
          <CtaSection />
        </ScrollReveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
