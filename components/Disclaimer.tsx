
import React from 'react';
import Section from './Section';

const Disclaimer: React.FC = () => {
  const disclaimerPoints = [
    { emoji: "🐸", text: "$RIBBIT is a meme. It has no intrinsic value, no serious use case, and no roadmap that will actually be followed." },
    { emoji: "💸", text: "Don't invest money you can't afford to see vanish into swamp mist." },
    { emoji: "🗺️", text: "If you're looking for utility, you've taken a wrong turn at frogville." },
  ];

  return (
    <Section id="disclaimer" title="Final Disclaimer" titleEmoji="🚨">
      <div className="bg-red-900/30 border border-red-700 p-6 md:p-8 rounded-xl shadow-lg text-slate-300 leading-relaxed">
        <ul className="space-y-4">
          {disclaimerPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-2xl mr-3">{point.emoji}</span>
              <span>{point.text}</span>
            </li>
          ))}
        </ul>
        <p className="text-center mt-8 text-2xl">...</p>
      </div>
    </Section>
  );
};

export default Disclaimer;
