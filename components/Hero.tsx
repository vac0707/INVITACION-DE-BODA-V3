
import React from 'react';
import { FloralBouquet } from './FloralDecor';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 px-6 text-center overflow-hidden">
      <div className="relative z-10 animate-[fadeInUp_1.5s_ease-out]">
        <div className="flex justify-center mb-6 opacity-60">
           <svg width="60" height="30" viewBox="0 0 60 30" fill="none" stroke="#D4AF37" strokeWidth="1">
              <circle cx="20" cy="15" r="12" />
              <circle cx="40" cy="15" r="12" />
           </svg>
        </div>

        <p className="font-serif italic text-[#7B8C6E] text-sm uppercase tracking-[0.2em] mb-8">
          Con la bendición de Dios y el amor de nuestras familias
        </p>
        
        <h1 className="font-script text-7xl md:text-8xl text-[#B8860B] mb-10 leading-[0.9]">
          Miguel Ángel <br />
          <span className="text-4xl md:text-5xl my-4 block">&</span> 
          Gabriela Mayte
        </h1>

        <div className="relative inline-block mt-8 group">
          <div className="absolute inset-0 bg-[#E8D5C4] rounded-full scale-105 blur-md opacity-30"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full border-[12px] border-white shadow-2xl overflow-hidden float-animation">
            <img 
              src="https://res.cloudinary.com/dcnynnstm/image/upload/v1767900578/06_xyon3q.jpg" 
              alt="Miguel Ángel & Gabriela Mayte"
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
          </div>
          {/* Floral Decoration Overlay - Replaced with SVG */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-90 pointer-events-none drop-shadow-xl">
            <FloralBouquet color="#D4AF37" className="w-full h-full transform rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
