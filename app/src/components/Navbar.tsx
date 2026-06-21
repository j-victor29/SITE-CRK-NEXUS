import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Cases', href: '#casos' },
  { label: 'Contato', href: '#contato' },
];

const Navbar: React.FC = () => {
  const scrolled = useScrolled(80);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-crk-bg/85 backdrop-blur-[20px] saturate-[180%] border-b border-crk-border-light'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/logo-crk.png"
              alt="CRK NEXUS Logo"
              className="h-8 w-auto object-contain -translate-y-px transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display font-semibold text-lg text-crk-text-primary">
              CRK NEXUS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm text-[#999999] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center py-2.5 px-5 border border-white rounded-btn font-display font-medium text-sm text-white hover:bg-white hover:text-black transition-all duration-250"
          >
            Falar com estrategista
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-crk-text-muted hover:text-crk-text-primary transition-colors"
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;
