import React, { useState, useEffect, useRef } from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface MetricCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const MetricCounter: React.FC<MetricCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  label,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp({ end: value, duration: 2000, enabled: isVisible });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center py-8 px-6">
      <div className="font-display font-black text-[48px] sm:text-[56px] lg:text-[72px] text-white tracking-[-0.04em]">
        {prefix}{count}{suffix}
      </div>
      <div className="font-mono font-medium text-xs tracking-[0.12em] uppercase text-[#666666] mt-2">
        {label}
      </div>
    </div>
  );
};

export default MetricCounter;
