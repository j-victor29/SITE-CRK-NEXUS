import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Cases', href: '#casos' },
  { label: 'Contato', href: '#contato' },
];

const Navbar: React.FC = () => {
  const scrolled = useScrolled(48);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

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

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let frameId: number | null = null;

    const handleScrollDirection = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const difference = currentScrollY - lastScrollY.current;

        if (currentScrollY <= 32) setHeaderVisible(true);
        else if (difference > 5) setHeaderVisible(false);
        else if (difference < -4) setHeaderVisible(true);

        lastScrollY.current = currentScrollY;
        frameId = null;
      });
    };

    window.addEventListener('scroll', handleScrollDirection, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollDirection);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: headerVisible ? 0 : -86, opacity: headerVisible ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className={`site-view-header fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-[#050505]/90 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl'
            : 'border-white/[0.06] bg-[#050505]/72 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-[1360px] items-center justify-between gap-4 px-5 lg:px-8">
          <a
            href="#inicio"
            onClick={() => setActiveHref('#inicio')}
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="CRK Nexus - início"
          >
            <img
              src="/logo-crk.png"
              alt=""
              className="h-9 w-9 object-contain drop-shadow-[0_0_12px_rgba(232,232,232,0.12)] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:flex items-center">
              <span className="block font-display text-[15px] font-semibold leading-none text-white">CRK NEXUS</span>
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="relative hidden min-w-[560px] items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0A0A0A]/95 px-2 py-2 shadow-[inset_0_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.42)] xl:min-w-[600px] lg:flex"
          >
            <span className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/55 to-transparent" />
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className="group relative flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-transparent px-3.5 font-display text-xs font-semibold text-[#9A9A9A] transition-colors duration-200 hover:border-white focus-visible:border-white focus-visible:outline-none xl:px-4"
                >
                  <span className="absolute inset-0 z-10 scale-x-[0.82] scale-y-[0.86] rounded-md bg-white opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100" />
                  <span className="relative z-20 transition-colors duration-200 group-hover:text-black group-focus-visible:text-black">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <a
            href="#contato"
            onClick={() => setActiveHref('#contato')}
            className="header-cta group relative hidden h-10 shrink-0 items-center gap-2 rounded-md border border-white/80 bg-gradient-to-r from-[#F5F5F5] via-[#E8E8E8] to-[#C0C0C0] px-4 font-display text-[13px] font-semibold text-[#0A0A0A] shadow-[0_0_20px_rgba(232,232,232,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.055] focus-visible:-translate-y-0.5 focus-visible:scale-[1.055] focus-visible:outline-none lg:inline-flex"
          >
            <span className="absolute inset-y-0 right-0 w-16 rounded-r-md bg-gradient-to-l from-white/45 to-transparent" />
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
