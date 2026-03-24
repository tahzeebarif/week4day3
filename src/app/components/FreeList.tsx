import { Game } from '../store/useGameStore';

export default function FreeGames({ games }: { games: Game[] }) {
  if (!games || games.length === 0) return null;

  return (
    <section className="bg-[#2A2A2A]/40 rounded-xl p-8 mb-16 border border-white/5">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          {/* --- INSERT YOUR ICON HERE --- */}
          <div className="w-6 h-6 flex items-center justify-center">
             <img src="/bag.png"></img>
          </div>
          
          <h2 className="text-xl font-normal text-white">Free Games</h2>
        </div>
        
        <button className="border border-white hover:bg-white/10 px-4 py-1.5 rounded-md text-[16px] font-normal  transition-colors text-white">
          view More
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {games.map((game) => (
          <div key={game.id} className="group cursor-pointer">
            <div className="relative w-full rounded-lg overflow-hidden mb-3 md:mb-4 shadow-xl bg-black" style={{aspectRatio: '3/4'}}>
              <img 
                src={game.image} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={game.title} 
              />
            </div>

            <h3 className="text-sm md:text-md font-normal mb-1 text-white group-hover:text-epic-blue transition-colors">
              {game.title}
            </h3>

            <p className="text-[13px] md:text-[15px] text-gray-400 font-normal uppercase tracking-tight mt-2 md:mt-6">
              {game.freeUntil || "Free Now - Jul 25"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}