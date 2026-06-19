import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleField from '../components/ParticleField';

const heroImageModules = import.meta.glob<string>('../assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const heroImages = Object.entries(heroImageModules)
  .sort(([firstImage], [secondImage]) => firstImage.localeCompare(secondImage))
  .map(([imagePath, image]) => ({
    src: image,
    shouldContain: imagePath.endsWith('/jm.jpg'),
  }));
const slideInterval = 2900;

const HeroSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, slideInterval);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0A0A0A 0%, #141414 100%)',
      }}
    >
      {/* Particle Field */}
      <ParticleField />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] min-h-screen max-w-[1280px] mx-auto">
        {/* Left Column - Text */}
        <div className="flex flex-col justify-center px-6 lg:pl-6 pt-[100px] lg:pt-0">
          {/* Tag Label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-crk-accent mb-6"
          >
            ESTRATÉGIA · IA · TECNOLOGIA
          </motion.span>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.06] tracking-[-0.03em] text-crk-text-primary">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Estratégia que escala.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Tecnologia que multiplica resultados.
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-display text-base lg:text-lg leading-[1.7] text-[#888888] max-w-[480px] mt-7 mb-11"
          >
            A CRK Nexus conecta estratégia, inteligência artificial e desenvolvimento de software para criar
            operações mais eficientes, automatizadas e preparadas para crescer sem limites.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <a
              href="#contato"
              className="inline-flex items-center py-4 px-8 bg-white text-black rounded-btn font-display font-semibold text-[15px] hover:scale-[1.03] hover:shadow-cta-hover transition-all duration-250"
            >
              Quero escalar meu negócio
            </a>

            {/* Secondary CTA */}
            <a
              href="#servicos"
              className="inline-flex items-center font-display font-medium text-[15px] text-[#888888] hover:text-crk-accent transition-colors duration-200 group"
            >
              <span className="relative">
                Conheça nossos serviços
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-crk-accent group-hover:w-full transition-all duration-300" />
              </span>
              <span className="ml-1 group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:flex items-center justify-center h-screen"
        >
          <div className="relative w-full h-[85vh] overflow-hidden">
            {/* Gradient mask for blending */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background: 'linear-gradient(to right, #0A0A0A 0%, transparent 30%, transparent 100%)',
              }}
            />
            {heroImages.map((image, index) => (
              <div
                key={image.src}
                aria-hidden={index !== activeImage}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  index === activeImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={index === activeImage ? 'Imagem de destaque CRK Nexus' : ''}
                  className={`absolute inset-0 h-full w-full object-top ${
                    image.shouldContain ? 'object-contain' : 'object-cover'
                  }`}
                  style={{
                    filter: 'saturate(0.85) contrast(1.1)',
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <ChevronDown size={20} className="text-[#666666] -mb-2" />
          <ChevronDown size={20} className="text-[#666666]" />
        </motion.div>
        <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#666666]">
          Role para explorar
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
