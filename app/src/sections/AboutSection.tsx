import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Code2, Cpu, Layers3 } from 'lucide-react';
import SectionTag from '../components/SectionTag';
import programmerPhoto from '../assets/jv.jpg';


const AboutSection: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const revealTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.6 };

  return (
    <section
      id="sobre"
      className="relative bg-crk-surface-1 py-[120px] overflow-hidden"
    >

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1120px] px-6 text-center">
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
          Não somos uma agência comum.
          <br />
          Somos o parceiro estratégico que sua empresa precisava.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-base lg:text-lg leading-[1.8] text-[#888888] max-w-[640px] mx-auto mt-7"
        >
          Em um mercado saturado de promessas, a CRK Nexus entrega clareza.
          Unimos visão de negócio, tecnologia de ponta e execução precisa
          para transformar empresas em líderes de mercado. Nossa inteligência
          não é artificial, é estratégica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.4 }}
          className="mx-auto mt-14 max-w-[460px] text-left"
        >
          <div className="group relative aspect-[4/5] min-h-[620px] overflow-hidden rounded-[1.75rem] border border-crk-border bg-[#0B0B0B] shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:min-h-[680px]">
            <button
              type="button"
              className="absolute inset-0 z-30 cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-crk-surface-1"
              aria-expanded={isProfileOpen}
              aria-controls="programmer-profile-details"
              aria-label={`${isProfileOpen ? 'Ocultar' : 'Revelar'} habilidades, competências e experiências como programador`}
              onClick={() => setIsProfileOpen((current) => !current)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setIsProfileOpen(false);
              }}
            >
              <span className="sr-only">
                {isProfileOpen ? 'Ocultar perfil profissional' : 'Conhecer perfil profissional'}
              </span>
            </button>

            <div className="absolute inset-0 overflow-hidden">
              <img
                src={programmerPhoto}
                alt="Programador da CRK Nexus"
                className={`h-full w-full scale-[1.02] object-cover object-center transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:-translate-x-[24%] group-focus-within:-translate-x-[24%] ${
                  isProfileOpen ? '-translate-x-[24%]' : ''
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />
            </div>

            <div
              className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:transition-none sm:p-8 ${
                isProfileOpen ? 'opacity-0' : ''
              }`}
            >
              <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
                Desenvolvimento & tecnologia
              </p>
              <div className="mt-3 flex items-end justify-between gap-5">
                <h3 className="max-w-[520px] font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Estratégia transformada em código.
                </h3>
                <span className="hidden items-center gap-2 text-sm font-medium text-white/80 sm:flex">
                  Explore o perfil
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-3 text-sm text-white/70 sm:hidden">Toque para explorar o perfil</p>
            </div>

            <div
              id="programmer-profile-details"
              className={`pointer-events-none absolute inset-y-0 right-0 z-20 w-full translate-x-full overflow-y-auto bg-[#0A0A0A]/95 p-7 opacity-0 backdrop-blur-md transition-[transform,opacity] duration-700 ease-out motion-reduce:transition-none group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 sm:w-[82%] sm:p-9 ${
                isProfileOpen ? 'translate-x-0 opacity-100' : ''
              }`}
              aria-live="polite"
            >
              <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-[#9A9A9A]">
                Perfil técnico
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-crk-text-primary sm:text-3xl">
                Soluções digitais do conceito à entrega.
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#A0A0A0] sm:text-base">
                Experiência na criação de aplicações web, integrações, APIs e automações, conectando engenharia de software a objetivos reais de negócio.
              </p>

              <div className="mt-7 grid gap-5">
                <div className="flex gap-4">
                  <Code2 className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                  <div>
                    <h4 className="font-display font-semibold text-white">Programação</h4>
                    <p className="mt-1 text-sm leading-6 text-[#8E8E8E]">TypeScript, JavaScript, React, Node.js e Python.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Layers3 className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                  <div>
                    <h4 className="font-display font-semibold text-white">Competências</h4>
                    <p className="mt-1 text-sm leading-6 text-[#8E8E8E]">Arquitetura de interfaces, APIs, bancos de dados, integrações e performance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Cpu className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                  <div>
                    <h4 className="font-display font-semibold text-white">Experiência aplicada</h4>
                    <p className="mt-1 text-sm leading-6 text-[#8E8E8E]">Sistemas sob medida, automação de processos e produtos digitais escaláveis.</p>
                  </div>
                </div>
              </div>

              <p className="mt-7 text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                Clique, pressione Enter ou Espaço para manter o painel aberto
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
