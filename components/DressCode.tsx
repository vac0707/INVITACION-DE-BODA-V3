
import React from 'react';

const DressCode: React.FC = () => {
  return (
    <section className="py-16 px-6 text-center">
      <div className="bg-[#E8D5C4]/30 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
        </svg>
      </div>
      <h3 className="font-serif text-2xl text-[#7B8C6E] mb-2 uppercase tracking-wide">Código de Vestimenta</h3>
      <p className="font-sans text-[#4A4A4A] text-lg">Elegante / Formal</p>
    </section>
  );
};

export default DressCode;
