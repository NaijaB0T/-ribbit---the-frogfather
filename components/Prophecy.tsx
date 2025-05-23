
import React from 'react';
import Section from './Section';

const Prophecy: React.FC = () => {
  return (
    <Section id="prophecy" title="The Prophecy of the Bull Run" titleEmoji="📜">
      <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg text-lg text-slate-300 leading-relaxed space-y-4">
        <p>
          Legend has it that $RIBBIT will sound the trumpet of the next bull market. <strong className="text-green-400">“When the Frogfather croaks,"</strong> the prophecy says, <strong className="text-green-400">“green candles will light the skies once again.”</strong>
        </p>
        <p>
          Until that day, the Mafia gathers strength, staking $RIBBIT, spreading memes, recruiting loyal frogs, and expanding their turf across Telegram and X.
        </p>
        <p>
          But beware... the <strong className="text-orange-400">Cat Cartel</strong>, the <strong className="text-yellow-400">Shiba Syndicate</strong>, and even the <strong className="text-lime-400">Pepe Pretenders</strong> have marked $RIBBIT for war. What they don't know is: <strong className="text-red-500">you don't challenge the Frogfather and live to tell the tale.</strong>
        </p>
      </div>
    </Section>
  );
};

export default Prophecy;
