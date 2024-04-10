'use client';

import React, { useEffect } from 'react';
import MarketsIntroFilter from './components/MarketsIntro';
import { fetchMarketsData } from './utils/fetchMarketsData';
import useMarketsDataStore from '@/stores/useMarketsDataStore';
import MarketCard from './components/MarketCard';

const MarketPageModule = () => {
  const { marketsData } = useMarketsDataStore();

  useEffect(() => {
    fetchMarketsData();

    const interval = setInterval(() => {
      fetchMarketsData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-start justify-start px-5 gap-3">
      <MarketsIntroFilter />
      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-black-700 flex-1 w-full text-left">Market</p>
        <p className="text-sm text-black-700 flex-1 w-full text-end">Market Price</p>
        <p className="text-sm text-black-700 flex-1 w-full text-end">Index Price</p>
        <p className="text-sm text-black-700 flex-1 w-full text-end">24hr High</p>
        <p className="text-sm text-black-700 flex-1 w-full text-end">24hr Low</p>
        <p className="text-sm text-black-700 flex-1 w-full text-end">
          24hr Change (%)
        </p>
        <p className="text-sm text-black-700 flex-1 w-full text-end">
          1hr Funding Rate
        </p>
        <p className="text-sm text-black-700 flex-[0.5] w-full text-end"></p>
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
        {marketsData
          .sort((a, b) => Number(BigInt(b.marketPrice) - BigInt(a.marketPrice)))
          .map((market) => (
            <MarketCard market={market} key={market.symbol} />
          ))}
      </div>
    </div>
  );
};

export default MarketPageModule;
