import React, { useState, useEffect } from 'react';

interface PriceData {
  price: number;
  change24h: number;
  volume: number;
  marketCap: number;
  lastUpdate: Date;
}

const PriceTracker: React.FC = () => {
  const [priceData, setPriceData] = useState<PriceData>({
    price: 0.000456,
    change24h: 12.34,
    volume: 1250000,
    marketCap: 456000000,
    lastUpdate: new Date()
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
      
      setTimeout(() => {
        setPriceData(prev => {
          // Simulate realistic price movement
          const volatility = 0.1; // 10% max change
          const randomChange = (Math.random() - 0.5) * volatility;
          const newPrice = Math.max(0.000001, prev.price * (1 + randomChange));
          
          // Calculate new 24h change
          const change24h = ((newPrice - 0.000456) / 0.000456) * 100;
          
          return {
            price: newPrice,
            change24h: change24h,
            volume: Math.round(prev.volume * (1 + (Math.random() - 0.5) * 0.2)),
            marketCap: Math.round(newPrice * 1000000000),
            lastUpdate: new Date()
          };
        });
        setIsLoading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    return price.toFixed(6);
  };

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(0)}K`;
    return `$${num.toFixed(2)}`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-green-400 flex items-center">
          <span className="mr-2">🐸</span>
          $RIBBIT Live Price
        </h3>
        <div className={`w-3 h-3 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <p className="text-slate-400 text-sm">Price</p>
          <p className={`text-2xl font-bold ${priceData.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            ${formatPrice(priceData.price)}
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-slate-400 text-sm">24h Change</p>
          <p className={`text-lg font-semibold ${priceData.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {priceData.change24h >= 0 ? '+' : ''}{priceData.change24h.toFixed(2)}%
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-slate-400 text-sm">Volume</p>
          <p className="text-lg font-semibold text-slate-300">
            {formatNumber(priceData.volume)}
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-slate-400 text-sm">Market Cap</p>
          <p className="text-lg font-semibold text-slate-300">
            {formatNumber(priceData.marketCap)}
          </p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-700 text-center">
        <p className="text-slate-500 text-xs">
          Last updated: {formatTime(priceData.lastUpdate)}
        </p>
      </div>
    </div>
  );
};

export default PriceTracker;