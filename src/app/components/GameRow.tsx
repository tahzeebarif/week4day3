'use client'; 
import { Game, useGameStore } from '../store/useGameStore'; 

export default function GameRow({ title, games }: { title: string, games: Game[] }) {
  const { setSelectedHero } = useGameStore();

  return (
    <section className="mb-12">
      <h2 className="text-xl font-normal mb-6 flex items-center gap-2 text-white">
        {title} <span className="text-xs opacity-50">›</span>
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
        {games.map((game) => {
          const salePrice = game.discount && game.originalPrice 
            ? Math.round(game.originalPrice * (1 - game.discount / 100)) 
            : game.originalPrice;

          return (
            <div 
              key={game.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedHero(game)}
            >
              <div className="relative w-full rounded-xl overflow-hidden mb-3 bg-[#202020]" style={{aspectRatio: '3/4'}}>
                <img 
                  src={game.image} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={game.title} 
                />
              </div>
              
              <h3 className="text-sm md:text-md font-normal truncate text-white">{game.title}</h3>
              
              <div className="flex items-center flex-wrap gap-1.5 mt-1 text-md">
                {game.discount && (
                  <>
                    <span className="bg-epic-blue text-white text-[12px] md:text-[15px] font-semibold px-1.5 py-0.5 rounded-sm">
                      -{game.discount}%
                    </span>
                    <span className="text-gray-500 line-through text-[11px] md:text-[13px]">
                      ₹{game.originalPrice?.toLocaleString()}
                    </span>
                  </>
                )}
                <span className="text-sm text-white font-medium">
                  {game.isFree ? "Free" : `₹${salePrice?.toLocaleString()}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}