'use client';
import { useState } from 'react';
import { useGameStore } from '../store/useGameStore';
import Link from 'next/link';

export default function Navbar() {
  const { searchGames } = useGameStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full font-poppins sticky top-0 z-[100] bg-epic-black">
      {/* TOP GLOBAL BAR */}
      <div className="bg-[#2A2A2A] h-12 flex items-center justify-between">
        
        {/* LEFT: Logo & Main Nav */}
        <div className="flex items-center gap-4 h-full px-3 md:px-4">
          <Link href="/" className="flex items-center shrink-0">
            <img src="/logoo.png" alt="Logo" className="w-7 h-7 md:w-8 md:h-8 object-contain brightness-200" />
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-5 text-[11px] font-normal uppercase text-gray-400 h-full">
            <span className="text-white border-b-4 border-epic-blue flex items-center h-full px-1 cursor-pointer">
              Store
            </span>
            <span className="hover:text-white transition-colors flex items-center h-full cursor-pointer">FAQ</span>
            <span className="hover:text-white transition-colors flex items-center h-full cursor-pointer">Help</span>
            <span className="hover:text-white transition-colors flex items-center h-full cursor-pointer">Unreal Engine</span>
          </div>
        </div>

        {/* RIGHT: Globe, Sign In, Download */}
        <div className="flex items-center h-full">
          {/* Globe - hidden on very small screens */}
          <div className="hidden sm:flex px-3 md:px-4 border-l border-white/10 h-full items-center hover:text-white text-gray-400 cursor-pointer transition-colors">
            <img src="/globe.svg" alt="Lang" className="w-5 h-5 opacity-70" />
          </div>

          {/* Sign In - icon only on mobile, icon+text on desktop */}
          <div className="px-3 md:px-6 border-l border-white/10 h-full flex items-center gap-2 hover:text-white text-gray-400 cursor-pointer transition-colors">
            <img src="/Vector.png" alt="User" className="w-5 h-5 opacity-70" />
            <span className="hidden sm:inline text-[10px] uppercase font-normal tracking-widest">Sign In</span>
          </div>

          {/* Download Button - responsive padding & text */}
          <button className="bg-epic-blue hover:bg-blue-600 text-white px-3 sm:px-5 md:px-8 h-full text-[10px] sm:text-[11px] md:text-[12px] font-normal uppercase transition-all whitespace-nowrap">
            Download
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden px-3 h-full border-l border-white/10 flex items-center text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#2A2A2A] border-t border-white/10 px-4 py-3 flex flex-col gap-3 text-[12px] uppercase font-normal text-gray-400">
          <span className="text-white cursor-pointer py-1">Store</span>
          <span className="hover:text-white cursor-pointer py-1">FAQ</span>
          <span className="hover:text-white cursor-pointer py-1">Help</span>
          <span className="hover:text-white cursor-pointer py-1">Unreal Engine</span>
        </div>
      )}

      {/* SUB-NAV BAR (Search & Discover) */}
      <div className="bg-epic-black py-3 md:py-5 px-3 md:px-8 flex items-center gap-4 md:gap-8 border-b border-white/5">
        <div className="relative flex-1 max-w-full md:max-w-[240px] w-full group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input 
            type="text" 
            placeholder="Search Store" 
            onChange={(e) => searchGames(e.target.value)}
            className="bg-[#202020] w-full rounded-full py-2 md:py-2.5 pl-10 pr-4 text-[13px] text-white focus:outline-none border border-transparent focus:border-white/20 transition-all"
          />
        </div>

        <div className="flex gap-4 md:gap-8 text-[13px] md:text-[14px] font-normal text-gray-400 shrink-0">
          <span className="text-white cursor-pointer">Discover</span>
          <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Browse</span>
          <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">News</span>
        </div>
      </div>
    </nav>
  );
}