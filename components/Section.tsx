
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  id?: string;
  title: string;
  titleEmoji?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  animationType?: 'slide-up' | 'slide-left' | 'slide-right' | 'fade-in';
  delay?: number;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  titleEmoji,
  children,
  className = '',
  titleClassName = '',
  contentClassName = '',
  animationType = 'slide-up',
  delay = 0
}) => {
  const animationMap = {
    'slide-up': 'animate-slide-in-up',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
    'fade-in': 'animate-fade-in'
  };

  const { ref, isVisible } = useScrollAnimation({
    animationClass: animationMap[animationType],
    delay: delay
  });

  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div 
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl scroll-animate ${
          isVisible ? animationMap[animationType] : ''
        }`}
      >
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14 
                      bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 
                      hover:scale-105 transition-transform duration-300 font-mobster ${titleClassName}`}
        >
          {titleEmoji && <span className="mr-2 text-3xl md:text-4xl">{titleEmoji}</span>}
          {title}
        </h2>
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
