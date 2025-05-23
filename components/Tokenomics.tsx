
import React from 'react';
import Section from './Section';
import type { TokenomicItem } from '../types';

const tokenomicsData: TokenomicItem[] = [
  { element: "Total Supply", amount: "1,000,000,000", notes: "Big round number, meme standard" },
  { element: "Liquidity Pool", amount: "70%", notes: "Locked on Raydium" },
  { element: "Airdrops", amount: "5%", notes: "For early community and contests" },
  { element: "Dev Wallet", amount: "10%", notes: "Transparent and time-locked" },
  { element: "Marketing", amount: "10%", notes: "Partnerships, influencers, burn campaigns" },
  { element: "Reserves", amount: "5%", notes: "Meme mafia operations" },
];

const Tokenomics: React.FC = () => {
  return (
    <Section id="tokenomics" title="Tokenomics" titleEmoji="📈" animationType="slide-right" delay={150}>
      <div className="overflow-x-auto bg-slate-800 p-4 sm:p-6 rounded-xl shadow-2xl">
        <table className="w-full min-w-max text-left text-slate-300">
          <thead className="border-b border-slate-700">
            <tr>
              <th className="py-3 px-2 sm:px-4 text-sm font-semibold text-green-400 uppercase">Element</th>
              <th className="py-3 px-2 sm:px-4 text-sm font-semibold text-green-400 uppercase">Amount</th>
              <th className="py-3 px-2 sm:px-4 text-sm font-semibold text-green-400 uppercase">Notes</th>
            </tr>
          </thead>
          <tbody>
            {tokenomicsData.map((item, index) => (
              <tr key={index} className="border-b border-slate-700 last:border-b-0 hover:bg-slate-700/50 transition-colors duration-150">
                <td className="py-4 px-2 sm:px-4 font-medium">{item.element}</td>
                <td className="py-4 px-2 sm:px-4">{item.amount}</td>
                <td className="py-4 px-2 sm:px-4 text-sm text-slate-400">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default Tokenomics;
