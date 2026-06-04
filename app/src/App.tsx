import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';
import NumbersSection from './sections/NumbersSection';
import CtaSection from './sections/CtaSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-crk-bg">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <NumbersSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
