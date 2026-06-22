import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, House, Layers3, Mail, Menu, Users, Workflow, type LucideIcon } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';
import MobileMenu from './MobileMenu';

const navLinks: Array<{ label: string; href: string; icon: LucideIcon }> = [
  { label: 'Início', href: '#hero', icon: House },
  { label: 'Sobre Nós', href: '#sobre', icon: Users },
  { label: 'Serviços', href: '#servicos', icon: Layers3 },
  { label: 'Processo', href: '#processo', icon: Workflow },
  { label: 'Cases', href: '#casos', icon: BriefcaseBusiness },
  { label: 'Contato', href: '#contato', icon: Mail },
];

const Navbar: React.FC = () => {
  const scrolled = useScrolled(48);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#hero');

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveHref(`#${visibleSection.target.id}`);
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`site-view-header fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-[#050505]/90 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl'
            : 'border-white/[0.06] bg-[#050505]/72 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-[1360px] items-center justify-between gap-4 px-5 lg:px-8">
          <a
            href="#hero"
            onClick={() => setActiveHref('#hero')}
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="CRK Nexus - início"
          >
            <img
              src="/logo-crk.png"
              alt=""
              className="h-9 w-9 object-contain drop-shadow-[0_0_12px_rgba(232,232,232,0.12)] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:block">
              <span className="block font-display text-[15px] font-semibold leading-none text-white">CRK NEXUS</span>
              <span className="mt-1 block font-display text-[7px] font-semibold uppercase tracking-[0.2em] text-[#8D8D8D]">
                Estratégia · IA · Tecnologia
              </span>
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="relative hidden items-center gap-1 rounded-full border border-white/10 bg-[#0A0A0A]/95 p-1 shadow-[inset_0_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.42)] lg:flex"
          >
            <span className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/55 to-transparent" />
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative flex h-9 items-center justify-center whitespace-nowrap rounded-full font-display text-xs font-semibold transition-all duration-300 hover:z-10 hover:scale-[1.025] hover:shadow-cta-hover ${
                    isActive ? 'gap-2 px-4 text-black xl:px-5' : 'gap-0 px-3.5 text-[#9A9A9A] xl:px-4'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-item"
                      className="absolute inset-0 rounded-full border border-white/80 bg-gradient-to-r from-[#F5F5F5] via-[#E8E8E8] to-[#C0C0C0] shadow-[0_0_24px_rgba(232,232,232,0.14),inset_0_1px_rgba(255,255,255,0.7)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="absolute inset-0 z-10 rounded-full bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  {isActive && <Icon className="relative z-20" size={14} strokeWidth={2.2} />}
                  <span className="relative z-20 transition-colors duration-200 group-hover:text-black">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <a
            href="#contato"
            onClick={() => setActiveHref('#contato')}
            className="group relative hidden h-10 shrink-0 items-center gap-2 overflow-hidden rounded-md border border-white/80 bg-gradient-to-r from-[#F5F5F5] via-[#E8E8E8] to-[#C0C0C0] px-4 font-display text-[13px] font-semibold text-[#0A0A0A] shadow-[0_0_24px_rgba(232,232,232,0.10)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(232,232,232,0.18)] lg:inline-flex"
          >
            <span className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/45 to-transparent" />
            <span className="relative">Falar com estrategista</span>
            <ArrowUpRight className="relative transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={17} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/15 bg-[#0B0B0B] text-[#C0C0C0] transition-colors hover:border-[#C0C0C0]/60 hover:text-white lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;
