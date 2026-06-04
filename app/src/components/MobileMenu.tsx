import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-crk-bg/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-[72px]">
              <span className="font-display font-semibold text-lg text-crk-text-primary">
                CRK NEXUS
              </span>
              <button
                onClick={onClose}
                className="p-2 text-crk-text-muted hover:text-crk-text-primary transition-colors"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="font-display text-2xl font-medium text-crk-text-muted hover:text-crk-text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-6 pb-12">
              <motion.a
                href="#contato"
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="block w-full text-center py-4 px-6 border border-white rounded-btn font-display font-medium text-white hover:bg-white hover:text-black transition-all duration-250"
              >
                Falar com estrategista
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
