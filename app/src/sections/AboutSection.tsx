import React from 'react';
import { motion } from 'framer-motion';
import SectionTag from '../components/SectionTag';


const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative bg-crk-surface-1 py-[120px] overflow-hidden"
    >

      {/* Content */}
      <div className="relative z-10 max-w-[760px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag text="NOSSA FILOSOFIA" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.02em] text-crk-text-primary mt-5"
        >
          Nao somos uma agencia comum.
          <br />
          Somos o parceiro estrategico que sua empresa precisava.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-base lg:text-lg leading-[1.8] text-[#888888] max-w-[640px] mx-auto mt-7"
        >
          Em um mercado saturado de promessas, a crknexus entrega clareza.
          Unimos visao de negocio, tecnologia de ponta e execucao precisa
          para transformar empresas em lideres de mercado. Nossa inteligencia
          nao e artificial — e estrategica.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
