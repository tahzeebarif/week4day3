'use client';
import { useEffect } from 'react';
import { Game, useGameStore } from '../store/useGameStore';
import Link from 'next/link';

export default function HeroSlider({ games }: { games: Game[] }) {
  const { selectedHero, setSelectedHero } = useGameStore();

  const active = selectedHero || games[0];

  // 1. AUTO-SLIDE LOGIC
  useEffect(() => {
    if (!games || games.length === 0) return;

    const timer = setInterval(() => {
      const currentIndex = games.findIndex((g) => g.id === active.id);
      const nextIndex = (currentIndex + 1) % games.length;
      setSelectedHero(games[nextIndex]);
    }, 5000);

    return () => clearInterval(timer);
  }, [active.id, games, setSelectedHero]);

  if (!active) return null;

  return (
    // On mobile: stack vertically. On lg: side by side
    <div className="flex flex-col lg:flex-row gap-4 mb-12 font-poppins items-stretch">
      
      {/* LEFT SIDE: Main Banner */}
      <div className="relative w-full lg:flex-[4] rounded-3xl overflow-hidden group border border-white/5" style={{aspectRatio: '16/9'}}>
        <img 
          src={active.image} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          alt={active.title}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent p-4 md:p-8 flex flex-col justify-end">
          <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold mb-2 uppercase tracking-tighter">
            {active.title}
          </h2>
          
          <p className="font-normal text-xs sm:text-sm md:text-base text-gray-200 mb-4 md:mb-6 max-w-[600px] leading-relaxed line-clamp-2 md:line-clamp-none">
            {active.description}
          </p>
          
          <Link href={`/game/${active.id}`}>
            <button className="bg-white text-black font-bold py-2.5 md:py-3.5 px-6 md:px-10 rounded-lg w-fit text-[10px] md:text-[11px] uppercase hover:bg-gray-200 transition-all active:scale-95 shadow-lg">
              {active.isFree ? "Play for Free" : active.freeUntil === "coming soon" ? "Pre-Purchase Now" : `Buy Now - ₹${active.originalPrice?.toLocaleString()}`}
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE: Thumbnails - horizontal scroll on mobile, vertical on lg */}
      <div className="flex flex-row lg:flex-col gap-2 lg:flex-1 lg:max-w-[250px] overflow-x-auto lg:overflow-x-visible pb-1 lg:pb-0">
        {games.map((game) => (
          <div 
            key={game.id}
            onClick={() => setSelectedHero(game)} 
            className={`relative flex-shrink-0 lg:flex-1 flex items-center gap-3 p-2 lg:p-3 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden min-w-[160px] lg:min-w-0 ${
              active.id === game.id ? 'bg-[#2A2A2A]' : 'hover:bg-white/5'
            }`}
          >
            {active.id === game.id && (
              <div className="absolute bottom-0 left-0 h-[2px] bg-white animate-slider-progress w-full origin-left" />
            )}

            <img 
              src={game.image} 
              className={`w-9 h-12 lg:w-10 lg:h-14 object-cover rounded-md shadow-md transition-opacity duration-300 shrink-0 ${
                active.id === game.id ? 'opacity-100' : 'opacity-50'
              }`} 
              alt={game.title}
            />
            
            <span className={`text-[12px] lg:text-[13px] font-medium leading-tight transition-colors ${
              active.id === game.id ? 'text-white' : 'text-gray-400'
            }`}>
              {game.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}