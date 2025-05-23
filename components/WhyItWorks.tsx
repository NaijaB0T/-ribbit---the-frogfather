
import React from 'react';
import Section from './Section';
import { useScrollAnimations } from '../hooks/useScrollAnimation';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  isVisible?: boolean;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, isVisible = false, delay = 0 }) => (
  <div 
    className={`bg-slate-800 p-6 rounded-xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 h-full scroll-animate ${
      isVisible ? 'animate-slide-in-up' : ''
    }`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-4xl mb-4 text-green-400">{icon}</div>
    <h3 className="text-xl font-semibold text-green-400 mb-2">{title}</h3>
    <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const WhyItWorks: React.FC = () => {
  const features = [
    { 
      icon: "🐸", 
      title: "Meme Culture Royalty", 
      description: "Frogs are meme royalty (Pepe, Wojak Frog, Dat Boi). $RIBBIT taps into this rich, established vein of internet humor." 
    },
    { 
      icon: "🎬", 
      title: "Pop Culture Fusion", 
      description: "Merges the iconic Godfather theme with meme humor, creating a unique and recognizable brand that stands out." 
    },
    { 
      icon: "👑", 
      title: "Personality-Driven", 
      description: "$RIBBIT isn't just a token—he's a character, a meme mob boss. This narrative depth fosters community and engagement." 
    },
  ];

  const { setRef, visibleElements } = useScrollAnimations(3, 200);

  return (
    <Section id="why-it-works" title="Why It Works" titleEmoji="🔥" className="bg-slate-800/30" animationType="slide-left">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={feature.title} ref={setRef(index)}>
            <FeatureCard 
              {...feature} 
              isVisible={visibleElements[index]}
              delay={index * 100}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyItWorks;
