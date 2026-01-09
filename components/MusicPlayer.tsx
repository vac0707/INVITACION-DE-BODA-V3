
import React, { useState, useRef, useEffect } from 'react';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioUrl = "https://res.cloudinary.com/dcnynnstm/video/upload/v1767977798/Cosculluela_-_La_Boda_Video_Oficial_jojjhr.mp3"; 
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.error("Autoplay failed even with interaction", e));
    }
  }, [autoPlay]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
            console.error("Interaction required for audio", e);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src={audioUrl} preload="auto" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[70] w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-2xl border-2 border-[#D4AF37] flex items-center justify-center text-[#B8860B] transition-all hover:scale-110 active:scale-95 group"
        aria-label="Reproducir música"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-30"></span>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
