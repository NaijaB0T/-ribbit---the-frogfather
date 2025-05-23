import React, { useState, useEffect } from 'react';

interface CommunityStats {
  totalMembers: number;
  telegramMembers: number;
  twitterFollowers: number;
  holders: number;
  onlineNow: number;
}

const CommunityCounter: React.FC = () => {
  const [stats, setStats] = useState<CommunityStats>({
    totalMembers: 12847,
    telegramMembers: 5623,
    twitterFollowers: 7224,
    holders: 3891,
    onlineNow: 234
  });

  const [displayStats, setDisplayStats] = useState<CommunityStats>({
    totalMembers: 0,
    telegramMembers: 0,
    twitterFollowers: 0,
    holders: 0,
    onlineNow: 0
  });

  const [isCountingUp, setIsCountingUp] = useState(true);

  useEffect(() => {
    // Animate counters on mount
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setDisplayStats({
        totalMembers: Math.floor(stats.totalMembers * progress),
        telegramMembers: Math.floor(stats.telegramMembers * progress),
        twitterFollowers: Math.floor(stats.twitterFollowers * progress),
        holders: Math.floor(stats.holders * progress),
        onlineNow: Math.floor(stats.onlineNow * progress)
      });
      
      if (step >= steps) {
        clearInterval(interval);
        setIsCountingUp(false);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [stats]);

  useEffect(() => {
    // Simulate member growth
    const interval = setInterval(() => {
      setStats(prev => ({
        totalMembers: prev.totalMembers + Math.floor(Math.random() * 3),
        telegramMembers: prev.telegramMembers + Math.floor(Math.random() * 2),
        twitterFollowers: prev.twitterFollowers + Math.floor(Math.random() * 2),
        holders: prev.holders + Math.floor(Math.random() * 2),
        onlineNow: Math.max(50, prev.onlineNow + Math.floor(Math.random() * 10 - 5))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-green-400 mb-6 text-center">
        🐸 Ribbit Mafia Family
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center bg-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-400">
            {formatNumber(displayStats.totalMembers)}
          </div>
          <div className="text-sm text-slate-400">Total Members</div>
        </div>
        
        <div className="text-center bg-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-400">
            {formatNumber(displayStats.telegramMembers)}
          </div>
          <div className="text-sm text-slate-400">Telegram</div>
        </div>
        
        <div className="text-center bg-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-sky-400">
            {formatNumber(displayStats.twitterFollowers)}
          </div>
          <div className="text-sm text-slate-400">X Followers</div>
        </div>
        
        <div className="text-center bg-slate-700 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-400">
            {formatNumber(displayStats.holders)}
          </div>
          <div className="text-sm text-slate-400">Holders</div>
        </div>
        
        <div className="text-center bg-slate-700 rounded-lg p-4 md:col-span-2">
          <div className="text-2xl font-bold text-emerald-400 flex items-center justify-center">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
            {formatNumber(displayStats.onlineNow)}
          </div>
          <div className="text-sm text-slate-400">Online Now</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCounter;