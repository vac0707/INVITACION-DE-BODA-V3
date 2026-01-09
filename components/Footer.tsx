
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 text-center bg-[#FDFBF7] relative">
      <div className="max-w-xs mx-auto space-y-8">
        <h4 className="font-script text-4xl text-[#B8860B]">
          Miguel Ángel <br /> & Gabriela Mayte
        </h4>
        
        <p className="font-serif italic text-lg text-[#7B8C6E]">
          “El amor une dos almas y un solo destino.”
        </p>
        
        <div className="flex justify-center space-x-4 opacity-40">
           <span className="h-px w-8 bg-[#D4AF37] self-center"></span>
           <span className="text-sm font-sans tracking-widest text-[#B8860B]">2026</span>
           <span className="h-px w-8 bg-[#D4AF37] self-center"></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
