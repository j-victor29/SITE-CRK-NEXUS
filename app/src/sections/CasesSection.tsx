import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  Check,
  Database,
  Gauge,
  PanelsTopLeft,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import SectionTag from '../components/SectionTag';
import { whatsappUrl } from '../lib/whatsapp';

interface CaseStudy {
  id: string;
  tab: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  accent: string;
  gradient: string;
  icon: LucideIcon;
  signals: Array<{ label: string; value: string }>;
  flow: Array<{ label: string; icon: LucideIcon }>;
}

const cases: CaseStudy[] = [
  {
    id: 'growth', tab: 'Growth & Performance',
    title: 'Aquisição conectada a uma estratégia de crescimento.',
    description: 'Uma arquitetura que aproxima posicionamento, conteúdo e mídia para transformar atenção em oportunidades comerciais.',
    challenge: 'Aquisição sem previsibilidade e decisões isoladas por canal.',
    solution: 'Diagnóstico, narrativa, campanhas e leitura de dados operando no mesmo ciclo.',
    accent: '#C0C0C0',
    gradient: 'linear-gradient(135deg, rgba(246,246,246,0.22) 0%, rgba(192,192,192,0.10) 52%, rgba(26,26,26,0.48) 100%)',
    icon: TrendingUp,
    signals: [{ label: 'Estrutura', value: 'Funil completo' }, { label: 'Operação', value: 'Mídia + conteúdo' }, { label: 'Evolução', value: 'Otimização contínua' }],
    flow: [{ label: 'Diagnóstico', icon: Gauge }, { label: 'Aquisição', icon: TrendingUp }, { label: 'Inteligência', icon: Database }],
  },
  {
    id: 'automation', tab: 'Automação com IA',
    title: 'Atendimento inteligente que organiza e acelera a operação.',
    description: 'Agentes de IA assumem tarefas repetitivas, qualificam demandas e entregam contexto para o time agir melhor.',
    challenge: 'Atendimento manual, informações dispersas e resposta dependente do time.',
    solution: 'Agente conectado aos canais, regras do negócio e histórico de relacionamento.',
    accent: '#C0C0C0',
    gradient: 'linear-gradient(135deg, rgba(232,232,232,0.20) 0%, rgba(192,192,192,0.08) 44%, rgba(17,17,17,0.54) 100%)',
    icon: Bot,
    signals: [{ label: 'Disponibilidade', value: 'Operação 24/7' }, { label: 'Fluxo', value: 'Triagem automática' }, { label: 'Contexto', value: 'Integração com CRM' }],
    flow: [{ label: 'Entrada', icon: PanelsTopLeft }, { label: 'Agente de IA', icon: Bot }, { label: 'Dados', icon: Database }],
  },
  {
    id: 'systems', tab: 'Sistemas sob medida',
    title: 'Tecnologia construída ao redor do modelo de negócio.',
    description: 'Plataformas próprias conectam processos, dados e equipes sem obrigar a empresa a operar dentro de ferramentas genéricas.',
    challenge: 'Planilhas, retrabalho e baixa visibilidade sobre a operação.',
    solution: 'Sistema modular com fluxos integrados, dados centralizados e visão gerencial.',
    accent: '#C0C0C0',
    gradient: 'linear-gradient(135deg, rgba(192,192,192,0.20) 0%, rgba(96,96,96,0.12) 50%, rgba(26,26,26,0.52) 100%)',
    icon: PanelsTopLeft,
    signals: [{ label: 'Informação', value: 'Dados centralizados' }, { label: 'Processos', value: 'Fluxos integrados' }, { label: 'Gestão', value: 'Visão em tempo real' }],
    flow: [{ label: 'Operação', icon: Gauge }, { label: 'Plataforma', icon: PanelsTopLeft }, { label: 'Decisão', icon: TrendingUp }],
  },
];

const TopographicLayer = () => (
  <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <g fill="none" stroke="#C0C0C0" strokeWidth="0.75">
      <path d="M-80 164C150 44 284 275 506 174s356-50 514 52 330-4 516-118" />
      <path d="M-94 205C138 84 294 316 522 215s345-45 506 51 324 12 504-92" />
      <path d="M-110 249C122 129 306 358 536 258s336-42 494 49 318 26 492-65" />
      <path d="M-76 650C157 525 318 753 548 647s337-45 496 50 314 17 486-76" />
      <path d="M-92 695C145 569 332 798 560 690s327-40 486 48 306 34 474-49" />
      <ellipse cx="1110" cy="430" rx="224" ry="130" /><ellipse cx="1110" cy="430" rx="180" ry="99" /><ellipse cx="1110" cy="430" rx="132" ry="69" />
    </g>
  </svg>
);

const CasesSection: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const defaultCase = cases[0]!;
  const [activeId, setActiveId] = useState(defaultCase.id);
  const activeCase = cases.find((item) => item.id === activeId) ?? defaultCase;
  const ActiveIcon = activeCase.icon;

  const selectAdjacentTab = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? cases.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + cases.length) % cases.length;
    setActiveId(cases[next]!.id);
    document.getElementById(`case-tab-${cases[next]!.id}`)?.focus();
  };

  return (
    <section id="casos" className="relative scroll-mt-20 overflow-hidden bg-[#070707] py-[120px]">
      <div className="pointer-events-none absolute inset-0 opacity-35" style={{ backgroundImage: 'linear-gradient(to right, rgba(192,192,192,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(192,192,192,.05) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }} />
      <TopographicLayer />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#C0C0C0]/[0.025] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: reduceMotion ? 0 : 0.65 }} className="grid gap-8 border-b border-[#C0C0C0]/25 pb-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <SectionTag text="ARQUITETURAS DE SOLUÇÃO" className="text-[#C0C0C0]" />
            <h2 className="mt-5 max-w-[720px] font-display text-[34px] font-bold leading-[1.08] text-crk-text-primary sm:text-[44px] lg:text-[52px]">
              Estratégia aplicada.<span className="block bg-gradient-to-r from-[#E8E8E8] via-[#AFAFAF] to-[#5E5E5E] bg-clip-text text-transparent">Soluções que ganham escala.</span>
            </h2>
          </div>
          <p className="max-w-[480px] font-display text-base leading-[1.75] text-[#929292] lg:justify-self-end">Três cenários que mostram como marketing, inteligência artificial e software se conectam a objetivos reais de negócio.</p>
        </motion.div>

        <div className="border-b border-[#C0C0C0]/20 py-5">
          <div className="flex gap-3 overflow-x-auto pb-2" role="tablist" aria-label="Selecionar arquitetura de solução">
            {cases.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.id === activeCase.id;
              return (
                <button key={item.id} id={`case-tab-${item.id}`} type="button" role="tab" aria-selected={isActive} aria-controls={`case-panel-${item.id}`} tabIndex={isActive ? 0 : -1} onClick={() => setActiveId(item.id)} onKeyDown={(event) => selectAdjacentTab(event, index)} style={isActive ? { backgroundImage: item.gradient } : undefined} className={`crk-interactive-surface group flex min-w-max items-center gap-2 rounded-sm border px-4 py-3 font-display text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-[#E8E8E8]/70 ${isActive ? 'border-[#E8E8E8]/65 text-white shadow-[0_12px_35px_rgba(0,0,0,.42),inset_0_1px_rgba(255,255,255,.12)]' : 'border-[#C0C0C0]/20 bg-[#0A0A0A]/85 text-[#888] hover:border-[#C0C0C0]/50 hover:text-white'}`}>
                  <Icon className="crk-interactive-icon" size={16} style={{ color: isActive ? item.accent : 'currentColor' }} />{item.tab}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeCase.id} id={`case-panel-${activeCase.id}`} role="tabpanel" aria-labelledby={`case-tab-${activeCase.id}`} initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }} transition={{ duration: reduceMotion ? 0 : 0.42, ease: 'easeOut' }} className="grid border-b border-[#C0C0C0]/25 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="py-12 lg:border-r lg:border-[#C0C0C0]/20 lg:pr-14">
              <div className="flex items-center"><div className="flex h-11 w-11 items-center justify-center border border-[#C0C0C0]/45 bg-[#C0C0C0]/[0.06] shadow-[inset_0_0_18px_rgba(232,232,232,.06)]" style={{ color: activeCase.accent }}><ActiveIcon size={21} /></div></div>
              <h3 className="mt-8 max-w-[620px] font-display text-[28px] font-bold leading-[1.15] text-white sm:text-[34px]">{activeCase.title}</h3>
              <p className="mt-5 max-w-[610px] font-display text-base leading-[1.75] text-[#929292]">{activeCase.description}</p>
              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                <div className="border-l border-[#C0C0C0]/30 pl-4"><span className="font-mono text-[10px] uppercase text-[#777]">Desafio</span><p className="mt-2 font-display text-sm leading-relaxed text-[#B8B8B8]">{activeCase.challenge}</p></div>
                <div className="border-l pl-4" style={{ borderColor: activeCase.accent }}><span className="font-mono text-[10px] uppercase" style={{ color: activeCase.accent }}>Arquitetura</span><p className="mt-2 font-display text-sm leading-relaxed text-[#B8B8B8]">{activeCase.solution}</p></div>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 border border-[#C0C0C0]/35 bg-[#C0C0C0]/[0.03] px-5 py-3 font-display text-sm font-semibold text-white transition-all duration-300 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-[#E8E8E8]/70 hover:bg-[#C0C0C0]/[0.08] focus-visible:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8E8E8]/70">Conversar sobre este cenário<ArrowUpRight size={16} /></a>
            </div>

            <div className="relative min-h-[540px] overflow-hidden py-12 lg:pl-14">
              <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 58% 44%, rgba(246,246,246,0.42) 0%, rgba(192,192,192,0.14) 18%, transparent 38%), ${activeCase.gradient}` }} />
              <motion.svg className="pointer-events-none absolute right-[-20%] top-[-4%] h-[78%] w-[110%] opacity-30" viewBox="0 0 600 600" fill="none" aria-hidden="true" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}>
                <circle cx="300" cy="300" r="210" stroke="#C0C0C0" strokeWidth="1" strokeDasharray="4 12"/><circle cx="300" cy="300" r="142" stroke="#E8E8E8" strokeWidth=".8"/><ellipse cx="300" cy="300" rx="242" ry="88" stroke="#C0C0C0" strokeWidth=".8"/><path d="M90 300h420M300 90v420M149 149l302 302M451 149L149 451" stroke="#C0C0C0" strokeWidth=".5" opacity=".65"/><circle cx="442" cy="300" r="5" fill={activeCase.accent}/><circle cx="194" cy="194" r="3" fill="#E8E8E8"/>
              </motion.svg>
              <div className="relative flex h-full flex-col justify-between">
                <div><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#888]">Fluxo conectado</span>
                  <div className="mt-7 grid grid-cols-[1fr_26px_1fr_26px_1fr] items-center sm:grid-cols-[1fr_34px_1fr_34px_1fr]">
                    {activeCase.flow.map((node, index) => { const NodeIcon = node.icon; return <React.Fragment key={node.label}><motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: reduceMotion ? 1 : .96, filter: reduceMotion ? 'blur(0px)' : 'blur(8px)' }} animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }} transition={{ duration: reduceMotion ? 0 : .58, delay: reduceMotion ? 0 : index * .08 }} className="crk-interactive-surface crk-mobile-reveal flex min-h-[116px] flex-col items-center justify-center border border-[#C0C0C0]/25 bg-gradient-to-b from-[#161616]/95 to-[#090909]/95 px-2 text-center shadow-[0_16px_36px_rgba(0,0,0,.38),inset_0_1px_rgba(255,255,255,.06)]"><NodeIcon className="crk-interactive-icon" size={20} style={{ color: index === 1 ? activeCase.accent : '#C0C0C0' }} /><span className="mt-3 font-mono text-[9px] text-[#999] sm:text-[10px]">{node.label}</span></motion.div>{index < activeCase.flow.length - 1 && <div className="crk-interactive-line relative h-px overflow-hidden bg-[#C0C0C0]/25"><motion.span className="absolute inset-y-0 left-0 w-1/2" style={{ backgroundImage: activeCase.gradient }} animate={reduceMotion ? { x: '50%' } : { x: ['-100%', '250%'] }} transition={reduceMotion ? { duration: 0 } : { duration: 1.8, repeat: Infinity, ease: 'linear', delay: index * .35 }} /></div>}</React.Fragment>; })}
                  </div>
                </div>
                <div className="mt-12 grid gap-3 sm:grid-cols-3">{activeCase.signals.map((signal, index) => <motion.div key={signal.label} initial={{ opacity: 0, y: reduceMotion ? 0 : 14, filter: reduceMotion ? 'blur(0px)' : 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: .2 }} transition={{ duration: reduceMotion ? 0 : .58, delay: reduceMotion ? 0 : index * .08 }} className="crk-interactive-surface crk-mobile-reveal min-h-[112px] border border-[#C0C0C0]/20 bg-[#0A0A0A]/90 p-4 shadow-[0_14px_32px_rgba(0,0,0,.3)]"><div className="flex items-center gap-2"><Check className="crk-interactive-icon" size={14} style={{ color: activeCase.accent }} /><span className="font-mono text-[9px] uppercase text-[#777]">{signal.label}</span></div><p className="mt-5 font-display text-sm font-semibold text-[#E8E8E8]">{signal.value}</p></motion.div>)}</div>
                <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#666]">Cenário demonstrativo. Escopo e indicadores são definidos após diagnóstico.</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
};

export default CasesSection;
