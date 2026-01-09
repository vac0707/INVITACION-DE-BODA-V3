
import React, { useState, useEffect } from 'react';

const images = [
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1767900578/02_nvhlgx.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1767900579/08_pfh9ht.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1767900579/09_olq7ud.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1767900578/05_tozjlu.jpg",
  "https://res.cloudinary.com/dcnynnstm/image/upload/v1767900578/07_khkp5n.jpg"
];

const PhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto h-[450px] overflow-hidden rounded-2xl shadow-2xl group border-4 border-white">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img 
            src={img} 
            alt={`Moment ${idx + 1}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex 
              ? 'bg-[#B8860B] w-6' 
              : 'bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 border-[16px] border-[#FDFBF7]/20 pointer-events-none rounded-2xl"></div>
    </div>
  );
};

export default PhotoCarousel;
