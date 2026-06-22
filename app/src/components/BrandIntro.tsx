import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const BrandIntro: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<'enter' | 'exit' | 'done'>('enter');

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    let exitTimer: number | undefined;
    let removeTimer: number | undefined;

    const beginIntro = () => {
      exitTimer = window.setTimeout(() => setPhase('exit'), reduceMotion ? 400 : 2900);
      removeTimer = window.setTimeout(() => {
        setPhase('done');
        document.body.style.overflow = previousOverflow;
      }, reduceMotion ? 550 : 3500);
    };

    if (document.readyState === 'complete') beginIntro();
    else window.addEventListener('load', beginIntro, { once: true });

    return () => {
      if (exitTimer) window.clearTimeout(exitTimer);
      if (removeTimer) window.clearTimeout(removeTimer);
      window.removeEventListener('load', beginIntro);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion]);

  if (phase === 'done') return null;

  return (
        <motion.div
          key="crk-brand-intro"
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#050505]"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'exit' ? 0 : 1 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.6, ease: 'easeOut' }}
          aria-label="Abrindo CRK Nexus"
          role="status"
        >
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
            animate={phase === 'exit'
              ? { opacity: 0, scale: 1 }
              : { opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[170px] w-[170px] sm:h-[200px] sm:w-[200px]">
              <img
                src="/logo-crk.png"
                alt=""
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <motion.p
              className="mt-1 font-display text-base font-semibold tracking-[0.22em] text-white sm:text-lg"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: phase === 'exit' ? 0 : 1, y: phase === 'exit' ? -4 : 0 }}
              transition={{ duration: reduceMotion ? 0.1 : 0.42, delay: phase === 'exit' ? 0 : 0.42 }}
            >
              CRK NEXUS
            </motion.p>
          </motion.div>
        </motion.div>
  );
};

export default BrandIntro;
