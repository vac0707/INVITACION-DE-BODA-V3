
import React from 'react';

interface FloralProps {
  className?: string;
  color?: string;
}

export const FloralCorner: React.FC<FloralProps> = ({ className = "", color = "#D4AF37" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 160C40 160 20 120 60 100C100 80 140 100 140 100M140 100C140 100 180 80 160 40C140 0 100 20 100 20M140 100C140 100 100 140 60 180C20 220 0 180 0 180" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <circle cx="140" cy="100" r="8" fill={color} opacity="0.4" />
    <path d="M140 100L180 140" stroke={color} strokeWidth="1" strokeDasharray="4 4" />
    <path d="M140 100L100 60" stroke={color} strokeWidth="1" strokeDasharray="4 4" />
    <path d="M120 80C110 70 90 70 80 80C70 90 70 110 80 120C90 130 110 130 120 120" stroke={color} strokeWidth="1.5" />
    <path d="M160 120C170 130 190 130 200 120C210 110 210 90 200 80C190 70 170 70 160 80" stroke={color} strokeWidth="1.5" />
  </svg>
);

export const FloralBouquet: React.FC<FloralProps> = ({ className = "", color = "#D4AF37" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.8">
      <path d="M50 80C50 80 30 60 30 40C30 20 50 10 50 10C50 10 70 20 70 40C70 60 50 80Z" stroke={color} strokeWidth="1.5" />
      <path d="M50 80C50 80 70 70 85 50C100 30 90 15 90 15C90 15 75 10 55 30C35 50 50 80Z" stroke={color} strokeWidth="1" />
      <path d="M50 80C50 80 30 70 15 50C0 30 10 15 10 15C10 15 25 10 45 30C65 50 50 80Z" stroke={color} strokeWidth="1" />
      <circle cx="50" cy="40" r="5" fill={color} opacity="0.3" />
    </g>
  </svg>
);
