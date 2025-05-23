
import React from 'react';
import Section from './Section';

const MarketingHooks: React.FC = () => {
  const hooks = [
    "\"Make Memecoins Great Again.\"",
    "\"The only frog who controls the green candles.\"",
    "\"Not financial advice - just an offer you can't refuse.\""
  ];

  return (
    <Section id="marketing-hooks" title="Marketing Hooks" titleEmoji="💡">
      <div className="space-y-6">
        {hooks.map((hook, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition-shadow duration-300">
            <p className="text-xl italic text-center text-slate-300">
              {hook}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default MarketingHooks;
