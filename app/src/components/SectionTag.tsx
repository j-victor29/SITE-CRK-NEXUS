import React from 'react';

interface SectionTagProps {
  text: string;
  className?: string;
}

const SectionTag: React.FC<SectionTagProps> = ({ text, className = '' }) => {
  return (
    <span
      className={`font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-crk-accent ${className}`}
    >
      {text}
    </span>
  );
};

export default SectionTag;
