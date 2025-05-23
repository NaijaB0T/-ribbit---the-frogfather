
import React from 'react';
import Section from './Section';

const RiseOfMafia: React.FC = () => {
  const codeOfFrogfather = [
    "Never dump on the family.",
    "Protect the LP like it's blood.",
    "Always meme with respect.",
    "You FUD, you swim with the tadpoles."
  ];

  return (
    <Section id="rise-of-mafia" title="The Rise of the Ribbit Mafia" titleEmoji="🐸💼" className="bg-slate-800/30">
      <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
        <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg">
          <p className="mb-4">
            As the markets fell into chaos, degens cried out for leadership. That's when <strong className="text-green-400">The Frogfather</strong> stepped forward.
          </p>
          <p className="mb-4">
            With a <strong className="text-amber-300">cigar in his mouth</strong> and <strong className="text-red-500">laser eyes</strong> under a <strong className="text-gray-400">fedora</strong>, he united the scattered meme tribes: the Apes, the Dogs, the Cope merchants. He didn't ask for loyalty—<strong className="text-green-400">he demanded it</strong>.
          </p>
          <p>
            He founded the <strong className="text-green-400">Ribbit Mafia</strong>, a decentralized underworld of holders, memers, and liquidity assassins. Their mission? To restore honor to the memecoin streets of Solana.
          </p>
        </div>

        <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-green-400 mb-6 text-center">Code of the Frogfather</h3>
          <ul className="space-y-3 list-inside">
            {codeOfFrogfather.map((rule, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default RiseOfMafia;
