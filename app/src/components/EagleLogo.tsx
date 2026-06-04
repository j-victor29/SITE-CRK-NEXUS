import React from 'react';

interface EagleLogoProps {
  className?: string;
  size?: number;
}

const EagleLogo: React.FC<EagleLogoProps> = ({ className = '', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Eagle body and head */}
      <path
        d="M16 4C16 4 12 7 12 11C12 13 13 15 14 16L12 20L16 18L20 20L18 16C19 15 20 13 20 11C20 7 16 4 16 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Left wing */}
      <path
        d="M14 16C11 14 7 12 4 13C6 15 9 17 12 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right wing */}
      <path
        d="M18 16C21 14 25 12 28 13C26 15 23 17 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Left wing feathers detail */}
      <path
        d="M8 15C7 16 6 18 6 20M11 17C10 18 9 20 9 22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      {/* Right wing feathers detail */}
      <path
        d="M24 15C25 16 26 18 26 20M21 17C22 18 23 20 23 22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      {/* Eye */}
      <circle cx="15" cy="10" r="0.8" fill="currentColor" />
      <circle cx="17" cy="10" r="0.8" fill="currentColor" />
      {/* Beak */}
      <path
        d="M16 12L15.5 14H16.5L16 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EagleLogo;
