import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, icon, index }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 30, filter: reduceMotion ? 'blur(0px)' : 'blur(9px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : index * 0.08 }}
      className="crk-interactive-surface group relative rounded-card border border-[#222222] bg-crk-surface-2 p-10 lg:p-11"
    >
      {/* Decorative Number */}
      <span className="absolute bottom-[-20px] right-5 font-display font-bold text-[120px] leading-none text-white/[0.02] z-0 select-none pointer-events-none">
        {number}
      </span>

      {/* Icon */}
      <div className="crk-interactive-icon relative z-10 mb-7 text-crk-accent">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative z-10 font-display font-bold text-[22px] text-crk-text-primary mb-3.5">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 font-display text-[15px] leading-[1.75] text-crk-text-muted">
        {description}
      </p>

      {/* Link */}
      <div className="relative z-10 mt-6">
        <span className="inline-flex items-center gap-1 font-display font-medium text-[13px] text-crk-accent cursor-pointer group/link">
          Saiba mais
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover/link:translate-x-1"
          />
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
