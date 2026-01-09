
import React, { useMemo } from 'react';

const Petals: React.FC = () => {
  const petalCount = 15;
  const items = useMemo(() => {
    return Array.from({ length: petalCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 15}s`,
      delay: `${Math.random() * 10}s`,
      size: `${15 + Math.random() * 20}px`,
      type: Math.random() > 0.3 ? 'petal' : 'ring'
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="petal"
          style={{
            left: item.left,
            animationDuration: item.duration,
            animationDelay: item.delay,
          }}
        >
          {item.type === 'petal' ? (
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="#F8C8DC" opacity="0.6">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.4">
              <circle cx="10" cy="12" r="6" />
              <circle cx="14" cy="12" r="6" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default Petals;
