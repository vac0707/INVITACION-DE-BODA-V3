
import React, { useState, useEffect } from 'react';

interface CountdownCalendarProps {
  targetDate: string;
}

const CountdownCalendar: React.FC<CountdownCalendarProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Calendar logic for January 2026
  // Jan 1 2026 is a Thursday (4th day of week if Sunday is 0)
  // Weeks starts on Monday (L) per requirement
  // L M M J V S D
  //       1 2 3 4
  // 5 6 7 8 9 10 11 ...
  const daysInJan = 31;
  const startOffset = 3; // Monday(0), Tuesday(1), Wed(2), Thursday(3) -> Jan 1st is Thursday
  const calendarCells = Array.from({ length: daysInJan + startOffset }, (_, i) => i < startOffset ? null : i - startOffset + 1);

  return (
    <section className="bg-[#F5EBE0] py-16 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <svg width="200" height="200" viewBox="0 0 100 100">
           <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#D4AF37" />
        </svg>
      </div>

      <div className="text-center mb-12">
        <h3 className="font-serif text-2xl text-[#7B8C6E] mb-8 uppercase tracking-widest">Faltan Solo...</h3>
        <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
          {[
            { label: 'Días', value: timeLeft.days },
            { label: 'Hrs', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Seg', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-lg py-4 shadow-sm border border-[#D4AF37]/20 transition-all hover:shadow-md">
              <div className="text-2xl font-bold text-[#B8860B]">{item.value}</div>
              <div className="text-[10px] uppercase tracking-tighter text-[#7B8C6E] font-semibold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto border border-[#E8D5C4]">
        <h4 className="font-serif text-xl text-[#B8860B] mb-4 text-center">Enero 2026</h4>
        <div className="grid grid-cols-7 gap-1 text-center text-sm font-sans">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(day => (
            <div key={day} className="font-bold text-[#7B8C6E] pb-2">{day}</div>
          ))}
          {calendarCells.map((day, idx) => (
            <div 
              key={idx} 
              className={`py-2 rounded-full flex items-center justify-center transition-all ${
                day === 21 
                ? 'bg-[#B8860B] text-white font-bold scale-110 shadow-lg ring-4 ring-[#B8860B]/20' 
                : day ? 'text-[#4A4A4A]' : 'opacity-0'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[#7B8C6E] font-serif italic">
          Miércoles, 21 de Enero
        </p>
      </div>
    </section>
  );
};

export default CountdownCalendar;
