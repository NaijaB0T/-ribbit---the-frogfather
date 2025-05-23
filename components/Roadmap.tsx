import React from 'react';
import Section from './Section';
import { useScrollAnimations } from '../hooks/useScrollAnimation';
import type { RoadmapPhase } from '../types';

const roadmapData: RoadmapPhase[] = [
  {
    title: "Phase 1 – The Swamp Awakens",
    emoji: "🐸",
    points: [
      "Launch $RIBBIT on Solana",
      "Inject liquidity like it's swamp water",
      "Meme blitz begins – Twitter raids, Telegram chaos, and frog propaganda",
      "Whitepaper drops (spoiler: it's mostly jokes)",
      "Airdrop campaign: 'Kiss the Frogfather'",
    ],
    goal: "Make noise, mint memes, and let $RIBBIT croak its way into degens' hearts.",
  },
  {
    title: "Phase 2 – Frogfather's Inner Circle",
    emoji: "🕴️",
    points: [
      "First meme alliances formed — collabs with other frogcoins, weirdcoin, and probably a guy named Dave",
      "Community votes on ridiculous utility (frog casino? swamp metaverse? croak-to-earn?)",
      "Green Mafia Telegram becomes pure chaos – just the way Frogfather likes it",
      "First listings on obscure DEXs you've never heard of",
      "Launch $RIBBIT staking",
    ],
    goal: "Build community, confuse new buyers, and start rumors we're backed by a shadowy frog syndicate.",
  },  {
    title: "Phase 3 – Bull Market Hit Job",
    emoji: "🌿",
    points: [
      "Coordinated meme drops to coincide with any green candles",
      "Execute \"Operation Pump & Croak\" (totally legal, totally organic, definitely not manipulation)",
      "Secret unlock: Frogfather lore NFTs that no one asked for",
      "Listing on CoinGecko, CMC, and potential CEX",
    ],
    goal: "Cement $RIBBIT's status as the meme coin of the Solana underworld.",
  },
  {
    title: "Phase 4 – The Rug That Wasn't (Or Was It?)",
    emoji: "⚔️",
    points: [
      "Frogfather goes silent. Community wonders: was this always a rug?",
      "Hidden message appears on the website:",
      "'The real rug is the friends we made along the way.'",
      "Dev wallet moves... to a multi-sig. Maybe. Maybe not.",
      "Plot twist: Community takes over. Or we hand it to a frog puppet DAO.",
      "Maybe we disappear. Maybe we IPO. Who knows. We certainly don't.",
    ],
    goal: "Leave everyone questioning everything, but smiling while doing it. Welcome to meta-degen culture.",
  },
];

interface RoadmapPhaseCardProps {
  phase: RoadmapPhase;
  index: number;
  isVisible?: boolean;
}

const RoadmapPhaseCard: React.FC<RoadmapPhaseCardProps> = ({ phase, index, isVisible = false }) => (
  <div 
    className={`bg-slate-800 p-6 rounded-xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1 scroll-animate ${
      isVisible ? 'animate-slide-in-up' : ''
    }`}
    style={{ animationDelay: `${index * 200}ms` }}
  >
    <h3 className="text-2xl font-semibold text-green-400 mb-4">
      <span className="mr-3 text-3xl">{phase.emoji}</span>
      {phase.title}
    </h3>
    <ul className="space-y-2 mb-4 text-slate-300 list-disc list-inside pl-2">
      {phase.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
    <div className="mt-auto pt-4 border-t border-slate-700">
      <p className="text-sm italic text-slate-400"><strong className="text-green-500">Goal:</strong> {phase.goal}</p>
    </div>
  </div>
);


const Roadmap: React.FC = () => {
  const { setRef, visibleElements } = useScrollAnimations(4, 300);

  return (
    <Section id="roadmap" title="Roadmap" titleEmoji="📅" className="bg-slate-800/30" animationType="fade-in">
      <div className="grid md:grid-cols-2 gap-8">
        {roadmapData.map((phase, index) => (
          <div key={index} ref={setRef(index)}>
            <RoadmapPhaseCard 
              phase={phase} 
              index={index} 
              isVisible={visibleElements[index]}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Roadmap;