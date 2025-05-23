
import React from 'react';
import Section from './Section';

const VisualsBranding: React.FC = () => {
  const brandingPoints = [
    { title: "Art Style", description: "Retro mafia + meme humor (think Pepe in a tux)" },
    { title: "Fonts", description: "Old-school mobster fonts (like \"Corleone\" style)" },
    { title: "Mascot", description: "$RIBBIT wearing a tiny fedora and smoking a Solana-branded cigar" },
  ];

  return (
    <Section id="visuals-branding" title="Visuals & Branding" titleEmoji="🎨" className="bg-slate-800/30" animationType="slide-left" delay={100}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          {brandingPoints.map((point, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-2">{point.title}:</h3>
              <p className="text-slate-300 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center p-4">
          <div className="bg-slate-700 rounded-xl shadow-2xl border-4 border-green-500 p-8 w-full max-w-sm h-auto aspect-square hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center">
            <div className="text-8xl mb-4">🐸</div>
            <div className="text-4xl mb-2">🎩</div>
            <div className="text-2xl mb-4">🚬</div>
            <p className="text-center text-slate-300 text-sm">
              <strong className="text-green-400">The Frogfather</strong><br/>
              <em>Coming Soon: Official Artwork</em><br/>
              Fedora, Cigar & All
            </p>
          </div>
           {/* You can replace this placeholder with actual Frogfather artwork once available */}
        </div>
      </div>
    </Section>
  );
};

export default VisualsBranding;
