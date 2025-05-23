
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      {/* Subtle animated background shapes */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-green-500/10 rounded-full animate-pulse
              ${i % 3 === 0 ? 'w-64 h-64 -top-20 -left-20' : ''}
              ${i % 3 === 1 ? 'w-48 h-48 -bottom-10 -right-10' : ''}
              ${i % 3 === 2 ? 'w-32 h-32 top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2' : ''}`}
            style={{ animationDelay: `${i * 0.5}s`, animationDuration: `${5 + i * 0.5}s`}}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="mb-8">
          <span className="text-8xl md:text-9xl animate-bounce inline-block">🐸</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-mobster">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500">
            $RIBBIT – The Frogfather
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 italic max-w-3xl mx-auto font-mafia">
          "You come to me... on the day of the bull run."
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#token-story" 
            onClick={(e) => { e.preventDefault(); document.querySelector('#token-story')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Enter the Swamp
          </a>
          <a 
            href="https://raydium.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Buy $RIBBIT
          </a>
        </div>
        
        {/* Contract Address Section */}
        <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-slate-400 text-sm mb-2">Contract Address (Solana):</p>
          <div className="flex items-center justify-center space-x-2 text-slate-300 font-mono text-sm bg-slate-900 rounded p-2">
            <span className="truncate">Coming Soon - Presale Phase</span>
            <button 
              className="text-green-400 hover:text-green-300 ml-2"
              onClick={() => navigator.clipboard?.writeText('CONTRACT_ADDRESS_HERE')}
              title="Copy to clipboard"
            >
              📋
            </button>
          </div>
        </div>
      </div>
       {/* Scroll down indicator */}
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
