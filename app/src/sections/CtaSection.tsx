import React from 'react';
import { motion } from 'framer-motion';
import SectionTag from '../components/SectionTag';
import { whatsappUrl } from '../lib/whatsapp';


const CtaSection: React.FC = () => {
  return (
    <section
      id="contato"
      className="relative py-[120px] lg:py-[160px] overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, #1C1C1C 0%, #0A0A0A 70%)',
      }}
    >
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <img
          src="/logo-crk.png"
          alt=""
          className="w-[450px] h-auto object-contain opacity-[0.07] scale-[2.5]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTag text="PROXIMO PASSO" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display font-extrabold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.1] tracking-[-0.03em] text-crk-text-primary mt-5"
        >
          Chega de competir pelo o que sobrou. Quem lidera não espera, Constrói.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-display text-base lg:text-lg text-[#888888] mt-5"
        >
          Clique no botão abaixo e fale com a CRK Nexus e descubra qual estratégia real pode ser feita para o seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-4.5 px-12 bg-white text-black rounded-btn font-display font-semibold text-base hover:scale-[1.04] hover:shadow-[0_0_32px_rgba(255,255,255,0.2)] transition-all duration-250"
          >
            Quero uma consultoria estratégica 
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
