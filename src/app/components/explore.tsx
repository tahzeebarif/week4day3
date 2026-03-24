'use client';

export default function ExploreCatalog() {
  const images = [
    "/car.jpg", 
    "/cyberpink.png",   
    "/god_of_war.png",  
    "/daysgone.jpg"
  ];

  const getCardStyle = (index: number) => {
    const rotations = [-12, -4, 4, 12];
    const yOffsets = [15, 0, 0, 15];
    const xOverlap = index === 0 ? '0px' : '-55px';

    return {
      marginLeft: xOverlap,
      transform: `rotate(${rotations[index]}deg) translateY(${yOffsets[index]}px)`,
      zIndex: 10 + index,
    };
  };

  return (
    <section className="mb-20 px-2 sm:px-4 max-w-7xl mx-auto font-poppins">
      <div className="bg-linear-to-r from-[#161B22] to-[#0D117] border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 overflow-hidden">
        
        {/* Fan Stack - smaller cards on mobile */}
        <div className="flex items-center justify-center min-h-[180px] sm:min-h-[250px] pl-6 sm:pl-10 shrink-0">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="w-24 h-32 sm:w-28 sm:h-40 md:w-36 md:h-48 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-500 hover:scale-110 hover:-translate-y-6 hover:z-100 hover:rotate-0 cursor-pointer"
              style={getCardStyle(index)}
            >
              <img 
                src={img} 
                className="w-full h-full object-cover" 
                alt="game cover" 
              />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="max-w-md text-center md:text-left z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 md:mb-5 uppercase tracking-tight leading-tight">
            Explore our Catalog
          </h2>
          <p className="text-gray-400 text-[14px] sm:text-[16px] font-normal leading-relaxed mb-6 md:mb-8">
            Browse by genre, features, price, and more to find your next favorite game.
          </p>
          <button className="bg-white text-black font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}