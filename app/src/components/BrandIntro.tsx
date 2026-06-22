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
      exitTimer = window.setTimeout(() => setPhase('exit'), reduceMotion ? 250 : 1250);
      removeTimer = window.setTimeout(() => {
        setPhase('done');
        document.body.style.overflow = previousOverflow;
      }, reduceMotion ? 350 : 2000);
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
          initial={{ clipPath: 'circle(150% at 50% 50%)' }}
          animate={{ clipPath: phase === 'exit' && !reduceMotion ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)' }}
          transition={{ duration: reduceMotion ? 0.1 : 0.85, ease: [0.76, 0, 0.24, 1] }}
          aria-label="Abrindo CRK Nexus"
          role="status"
        >
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.78, filter: reduceMotion ? 'blur(0px)' : 'blur(14px)' }}
            animate={phase === 'exit'
              ? { opacity: reduceMotion ? 0 : 1, scale: reduceMotion ? 1 : 1.18, filter: 'blur(0px)' }
              : { opacity: 1, scale: reduceMotion ? 1 : [0.78, 1.06, 1], filter: 'blur(0px)' }}
            transition={{ duration: reduceMotion ? 0.1 : 1.15, times: [0, 0.72, 1], ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[170px] w-[170px] sm:h-[200px] sm:w-[200px]">
              <img
                src="/logo-crk.png"
                alt=""
                className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_0_34px_rgba(232,232,232,0.22)]"
              />

              {!reduceMotion && (
                <motion.img
                  src="/logo-crk.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain brightness-150 contrast-125"
                  initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 }}
                  animate={{
                    clipPath: [
                      'polygon(0 0, 0 0, 0 100%, 0 100%)',
                      'polygon(0 0, 34% 0, 18% 100%, 0 100%)',
                      'polygon(82% 0, 100% 0, 100% 100%, 66% 100%)',
                      'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                    ],
                    opacity: [0, 0.8, 0.55, 0],
                  }}
                  transition={{ duration: 0.85, delay: 0.22, ease: 'easeInOut' }}
                />
              )}
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
