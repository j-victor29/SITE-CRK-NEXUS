import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-crk-surface-2 border border-[#222222] rounded-card p-10 lg:p-11 overflow-hidden hover:border-crk-accent/25 hover:shadow-glow hover:scale-[1.015] transition-all duration-300"
    >
      {/* Decorative Number */}
      <span className="absolute bottom-[-20px] right-5 font-display font-bold text-[120px] leading-none text-white/[0.02] z-0 select-none pointer-events-none">
        {number}
      </span>

      {/* Icon */}
      <div className="relative z-10 text-crk-accent mb-7">
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
