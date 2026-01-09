
import React, { useState } from 'react';
import { FloralBouquet } from './FloralDecor';

interface SplashScreenProps {
  onEnter: (name: string) => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');

  const handleNext = () => {
    if (name.trim()) {
      setStep(2);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#FDFBF7] flex items-center justify-center p-6 text-center overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 opacity-10 -translate-x-10 -translate-y-10 rotate-45">
        <FloralBouquet color="#7B8C6E" className="w-64 h-64" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 translate-x-10 translate-y-10 -rotate-135">
        <FloralBouquet color="#B8860B" className="w-64 h-64" />
      </div>

      <div className="relative z-10 max-w-sm w-full space-y-8 animate-[fadeInUp_0.8s_ease-out]">
        <div className="space-y-4">
          <h2 className="font-script text-5xl text-[#B8860B]">Nuestra Boda</h2>
          <div className="h-px w-16 bg-[#D4AF37] mx-auto opacity-40"></div>
        </div>

        {step === 1 ? (
          <div className="space-y-6 animate-fade-in">
            <p className="font-serif italic text-[#7B8C6E] text-lg">Para una experiencia personalizada, por favor dinos:</p>
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#B8860B] font-bold">¿Cuál es tu nombre?</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Escribe aquí..."
                className="w-full bg-transparent border-b-2 border-[#E8D5C4] py-3 text-center text-xl font-serif focus:border-[#7B8C6E] outline-none transition-colors placeholder:text-[#E8D5C4]/60"
                onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                autoFocus
              />
            </div>
            <button
              onClick={handleNext}
              disabled={!name.trim()}
              className="px-10 py-3 bg-[#B8860B] text-white rounded-full font-sans text-xs tracking-[0.2em] uppercase shadow-lg hover:shadow-xl transition-all disabled:opacity-30 active:scale-95"
            >
              Continuar
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-[fadeInUp_0.5s_ease-out]">
            <div className="space-y-2">
              <p className="font-serif text-2xl text-[#4A4A4A]">¡Estás invitado/a!</p>
              <h3 className="font-script text-6xl text-[#B8860B] break-words">{name}</h3>
            </div>
            
            <p className="font-serif italic text-[#7B8C6E] leading-relaxed">
              Estamos muy felices de compartir <br /> este día contigo.
            </p>

            <button
              onClick={() => onEnter(name)}
              className="group relative inline-flex items-center justify-center px-12 py-4 bg-[#7B8C6E] text-white rounded-full font-sans text-xs tracking-[0.3em] uppercase shadow-2xl hover:bg-[#5E6D54] transition-all active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Abrir Invitación</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
