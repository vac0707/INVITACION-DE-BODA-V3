
import React from 'react';

interface PhraseProps {
  text: string;
  className?: string;
}

const Phrase: React.FC<PhraseProps> = ({ text, className = "" }) => {
  return (
    <div className={`px-10 text-center ${className}`}>
      <div className="h-px w-16 bg-[#D4AF37] mx-auto mb-6 opacity-60"></div>
      <p className="font-serif italic text-lg leading-relaxed text-[#4A4A4A]">
        {text}
      </p>
      <div className="h-px w-16 bg-[#D4AF37] mx-auto mt-6 opacity-60"></div>
    </div>
  );
};

export default Phrase;
