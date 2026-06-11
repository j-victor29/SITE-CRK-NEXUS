import React from 'react';
import { motion } from 'framer-motion';
import SectionTag from '../components/SectionTag';
import ServiceCard from '../components/ServiceCard';

// Custom SVG Icons for services
const StrategyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
);

const SocialMediaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    <path d="M7 10.5v5" />
    <path d="M3 11v3" />
  </svg>
);

const AutomationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .963L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <circle cx="4" cy="20" r="2" />
    <path d="M8 20h8" />
    <path d="M12 18v4" />
  </svg>
);

const DevIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <polyline points="7 8 9 10 7 12" />
    <polyline points="13 12 15 10 13 8" />
    <line x1="10" y1="13" x2="11" y2="7" />
  </svg>
);

const services = [
  {
    number: '01',
    title: 'Estratégia de Crescimento',
    description: 'Diagnóstico completo do seu negócio, posicionamento de mercado e planejamento estratégico para escalar com inteligência.',
    icon: <StrategyIcon />,
  },
  {
    number: '02',
    title: 'Social Media & Performance',
    description: 'Gestão de conteúdo, campanhas pagas e otimização de performance para construir autoridade e gerar resultados mensuráveis.',
    icon: <SocialMediaIcon />,
  },
  {
    number: '03',
    title: 'Automação com IA',
    description: 'Implementação de agentes de IA, chatbots inteligentes e automação de processos para reduzir custos e aumentar produtividade.',
    icon: <AutomationIcon />,
  },
  {
    number: '04',
    title: 'Desenvolvimento de Sistemas',
    description: 'Criação de plataformas digitais, integrações e soluções tecnológicas sob medida para o seu modelo de negócio.',
    icon: <DevIcon />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="serviços" className="bg-crk-bg py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTag text="O QUE FAZEMOS" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-display font-bold text-[28px] sm:text-[32px] lg:text-4xl leading-[1.2] tracking-[-0.02em] text-crk-text-primary mt-4"
          >
            Quatro frentes. Um único objetivo: resultado.
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
