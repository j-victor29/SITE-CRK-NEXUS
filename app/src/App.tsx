import React, { useEffect } from 'react';
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
import BrandIntro from './components/BrandIntro';

const App: React.FC = () => {
  useEffect(() => {
    const handleInternalNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = anchor?.getAttribute('href');
      if (!hash || hash === '#') return;

      const destination = document.querySelector<HTMLElement>(hash);
      if (!destination) return;

      event.preventDefault();

      const navigate = () => {
        window.history.pushState(null, '', hash);
        destination.scrollIntoView({ behavior: 'instant', block: 'start' });
      };

      if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.dataset.viewDirection = destination.offsetTop >= window.scrollY ? 'forward' : 'backward';
        const transition = document.startViewTransition(navigate);
        transition.finished.finally(() => delete document.documentElement.dataset.viewDirection);
      } else {
        window.history.pushState(null, '', hash);
        destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.addEventListener('click', handleInternalNavigation);
    return () => document.removeEventListener('click', handleInternalNavigation);
  }, []);

  return (
    <div className="min-h-screen bg-crk-bg">
      <BrandIntro />
      <Navbar />
      <main className="site-view-content">
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
