import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleField from '../components/ParticleField';
import heroBackground from '../assets/fotosite.jpg';
import heroVideo from '../assets/videosite.mp4';

const HeroSection: React.FC = () => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-[14vh]"
    >
      {/* Media Background */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <video
          src={heroVideo}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          onCanPlayThrough={() => setVideoReady(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-black/68" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(10,10,10,0.62)_48%,rgba(10,10,10,0.9)_100%)]" />
      </div>

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

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
        {/* Tag Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-crk-accent"
        >
          ESTRATÉGIA · IA · TECNOLOGIA
        </motion.span>

        {/* Headline */}
        <h1 className="font-display text-[40px] font-extrabold leading-[1.06] tracking-[-0.03em] text-crk-text-primary sm:text-[56px] lg:text-[76px]">
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
          className="mt-7 mb-11 max-w-[620px] font-display text-base leading-[1.7] text-[#B0B0B0] lg:text-lg"
        >
          A CRK Nexus conecta estratégia, inteligência artificial e desenvolvimento de software para criar
          operações mais eficientes, automatizadas e preparadas para crescer sem limites.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
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
            className="inline-flex items-center font-display font-medium text-[15px] text-[#C0C0C0] hover:text-white transition-colors duration-200 group"
          >
            <span className="relative">
              Conheça nossos serviços
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </span>
            <span className="ml-1 group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
          </a>
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
