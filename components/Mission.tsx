
import React from 'react';
import Section from './Section';

const Mission: React.FC = () => {
  return (
    <Section id="mission" title="The Mission" titleEmoji="🎯" className="bg-slate-800/30" animationType="fade-in" delay={200}>
      <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg text-lg text-slate-300 leading-relaxed space-y-4">
        <p>
          $RIBBIT isn't just another token. <strong className="text-green-400">It's a movement.</strong>
        </p>
        <p>A rebellion against weak memes.</p>
        <p>A call to unify the underground.</p>
        <p>A legacy built on humor, loyalty, and a touch of well-dressed chaos.</p>
        <hr className="border-slate-700 my-6"/>
        <p className="font-semibold">Join the family.</p>
        <p className="text-xl">
          <strong className="text-green-400">Hold the token. Share the memes. Respect the Frog.</strong>
        </p>
        <p className="italic">
          Because once you're in the Ribbit Mafia... <strong className="text-red-500">there's no hopping out.</strong>
        </p>
      </div>
    </Section>
  );
};

export default Mission;
