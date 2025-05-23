
import React from 'react';
import Section from './Section';

const TokenStory: React.FC = () => {
  return (
    <Section id="token-story" title="Token Story" titleEmoji="🎯" animationType="slide-right">
      <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
        <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg">
          <p className="mb-4">
            $RIBBIT is <strong className="text-green-400">The Frogfather</strong>, protector of the degens and orchestrator of bull markets. With his mafia of meme coins, he's here to lead the "Green Mafia" on Solana.
          </p>
        </div>
        
        <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-green-400 mb-4">Full Lore Edition:</h3>
          <p className="mb-4">
            In the swampy underbelly of the Solana blockchain, where rug pulls lurk and paper hands tremble, a legend was born.
          </p>
          <p className="mb-4">
            A frog like no other.
          </p>
          <p className="mb-4">
            He wasn't like the others chasing pumps or licking charts—no, he was patient, strategic, and ruthless when necessary. They called him... <strong className="text-green-400">The Frogfather</strong>.
          </p>
          <p>
            He rose from humble pond beginnings, trading frogspawn for early NFTs and stacking SOL before it was cool. He watched as frogkind was laughed at, memed, rugged—and still, he stayed. Waited. Plotted.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default TokenStory;
