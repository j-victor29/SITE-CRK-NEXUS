import React, { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionTag from '../components/SectionTag';

interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStepData[] = [
  {
    number: '1',
    title: 'Diagnóstico',
    description: 'Mapeamento completo do cenário atual, dores e oportunidades.',
  },
  {
    number: '2',
    title: 'Estratégia',
    description: 'Definição de objetivos, KPIs e plano de ação personalizado.',
  },
  {
    number: '3',
    title: 'Execução',
    description: 'Implementação ágil com foco em resultados de curto prazo.',
  },
  {
    number: '4',
    title: 'Otimização',
    description: 'Análise contínua de dados e ajustes para maximizar performance.',
  },
  {
    number: '5',
    title: 'Escala',
    description: 'Amplificação do que funciona para crescimento sustentável.',
  },
];

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isInView, setIsInView] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Animate the SVG line
  useEffect(() => {
    if (!isInView || !pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    path.style.strokeDasharray = `${length}`;
    if (reduceMotion) {
      path.style.strokeDashoffset = '0';
      path.style.transition = 'none';
      return;
    }
    path.style.strokeDashoffset = `${length}`;

    // Trigger animation
    requestAnimationFrame(() => {
      path.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
      path.style.strokeDashoffset = '0';
    });
  }, [isInView, reduceMotion]);

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="py-[120px]"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTag text="COMO TRABALHAMOS?" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-display font-bold text-[28px] sm:text-[32px] lg:text-4xl text-crk-text-primary mt-4"
          >
            Do diagnóstico à performance.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-base text-[#888888] mt-3"
          >
            Cada etapa é intencional. Nenhum recurso é desperdiçado.
          </motion.p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block relative">
          {/* SVG Connecting Line */}
          <svg
            className="crk-interactive-line absolute left-0 top-[60px] z-0 h-[2px] w-full"
            preserveAspectRatio="none"
            viewBox="0 0 1100 2"
          >
            <path
              ref={pathRef}
              d="M 0 1 L 1100 1"
              stroke="#C0C0C0"
              strokeWidth="1"
              strokeOpacity="0.3"
              fill="none"
            />
          </svg>

          {/* Steps */}
          <div className="relative z-10 flex justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24, filter: reduceMotion ? 'blur(0px)' : 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduceMotion ? 0 : 0.62, delay: reduceMotion ? 0 : index * 0.08 }}
                className="crk-interactive-surface crk-mobile-reveal flex flex-col items-center rounded-card border border-transparent px-3 py-5 text-center"
                style={{ width: '160px' }}
              >
                <span className="crk-interactive-icon mb-3 font-display text-5xl font-bold text-crk-accent/40 lg:text-[48px]">
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-lg text-crk-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="font-display text-sm text-[#666666] max-w-[160px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="crk-interactive-line absolute bottom-0 left-[23px] top-0 w-[1px] bg-crk-accent/20" />

          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: reduceMotion ? 0 : -20, filter: reduceMotion ? 'blur(0px)' : 'blur(8px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduceMotion ? 0 : 0.62, delay: reduceMotion ? 0 : index * 0.08 }}
                className="crk-interactive-surface crk-mobile-reveal relative rounded-card border border-transparent py-4 pl-12 pr-4"
              >
                {/* Dot on line */}
                <div className="absolute left-[18px] top-[18px] w-[9px] h-[9px] rounded-full bg-crk-accent/40" />

                <span className="crk-interactive-icon font-display text-4xl font-bold text-crk-accent/40">
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-lg text-crk-text-primary mt-1 mb-1">
                  {step.title}
                </h3>
                <p className="font-display text-sm text-[#666666]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
