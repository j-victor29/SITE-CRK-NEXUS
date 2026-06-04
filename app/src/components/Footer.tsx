import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Servicos', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Cases', href: '#numeros' },
  { label: 'Contato', href: '#contato' },
];

const serviceLinks = [
  'Estratégia',
  'Social Mídia',
  'Automação com IA',
  'Dev. de Sistemas',
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070707] pt-16 pb-8 border-t border-[#161616]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12"
        >
          {/* Col 1 - Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo-crk.png"
                alt="CRK NEXUS Logo"
                className="h-7 w-auto object-contain -translate-y-px"
              />
              <span className="font-display font-semibold text-base text-crk-text-primary">
                CRK NEXUS
              </span>
            </div>
            <p className="font-display text-[13px] text-[#555555] mt-3">
              Strategy. Intelligence. Growth.
            </p>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <h4 className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-[#666666] mb-4">
              EMPRESA
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-display text-sm text-[#888888] hover:text-crk-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-[#666666] mb-4">
              SERVICOS
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="font-display text-sm text-[#888888]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-[#666666] mb-4">
              CONTATO
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@crknexus.com"
                  className="flex items-center gap-2 font-display text-sm text-[#888888] hover:text-crk-text-primary transition-colors duration-200"
                >
                  <Mail size={16} className="hover:text-crk-accent transition-colors" />
                  contato@crknexus.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/crknexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-display text-sm text-[#888888] hover:text-crk-text-primary transition-colors duration-200"
                >
                  <Instagram size={16} className="hover:text-crk-accent transition-colors" />
                  @crknexus
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/crknexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-display text-sm text-[#888888] hover:text-crk-text-primary transition-colors duration-200"
                >
                  <Linkedin size={16} className="hover:text-crk-accent transition-colors" />
                  linkedin.com/company/crknexus
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#161616] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-display text-xs text-[#444444]">
            &copy; 2026 CRK NEXUS. Todos os direitos reservados.
          </p>
          <a
            href="#"
            className="font-display text-xs text-[#444444] hover:text-[#888888] transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
