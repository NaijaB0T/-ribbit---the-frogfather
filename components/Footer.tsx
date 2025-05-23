
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/50 py-8 text-center text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-2xl mb-2">🐸</p>
        <p>&copy; {new Date().getFullYear()} $RIBBIT - The Frogfather. All rights reserved (mostly).</p>
        <p className="text-sm mt-1">Remember, always meme responsibly.</p>
        
        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a 
            href="https://t.me/ribbitfrogfather" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-green-400 transition-colors duration-200"
          >
            <span className="text-xl">📱</span>
            <span>Join the Mafia (Telegram)</span>
          </a>
          <a 
            href="https://x.com/ribbitfrogfather" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-green-400 transition-colors duration-200"
          >
            <span className="text-xl">🐦</span>
            <span>Follow on X</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
