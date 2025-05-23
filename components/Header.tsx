
import React, { useState, useEffect } from 'react';
import type { NavItem } from '../types';

interface HeaderProps {
  navItems: NavItem[];
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick();
    }}
    className="text-slate-300 hover:text-green-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
  >
    {children}
  </a>
);

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-800/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center space-x-2" onClick={(e) => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <span className="text-3xl">🐸</span>
            <span className="text-2xl font-bold text-green-400 font-mobster">$RIBBIT</span>
          </a>
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-green-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Full Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md">
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
              <div className="flex items-center space-x-2">
                <span className="text-3xl">🐸</span>
                <span className="text-2xl font-bold text-green-400 font-mobster">$RIBBIT</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-green-400 focus:outline-none p-2"
                aria-label="Close menu"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Menu */}
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8 px-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="text-3xl font-bold text-slate-300 hover:text-green-400 transition-all duration-300 hover:scale-110 transform font-mobster"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.5s ease-out forwards'
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            {/* Footer */}
            <div className="p-6 text-center border-t border-slate-700/50">
              <p className="text-slate-400 text-sm italic">
                "You come to me... on the day of the bull run."
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                <a 
                  href="https://t.me/ribbitfrogfather" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-400 transition-colors duration-200"
                >
                  📱
                </a>
                <a 
                  href="https://x.com/ribbitfrogfather" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-400 transition-colors duration-200"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
