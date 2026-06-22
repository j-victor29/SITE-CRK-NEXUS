import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealDirection = 'up' | 'left' | 'right';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  left: { x: -34, y: 0 },
  right: { x: 34, y: 0 },
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      className={`crk-mobile-reveal ${className ?? ''}`}
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, filter: 'blur(11px)', x: offset.x, y: offset.y }
      }
      whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
