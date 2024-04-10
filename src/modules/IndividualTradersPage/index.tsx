'use client';

import React, { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import ComingSoon from './components/ComingSoon';
import PastTrades from './components/PastTrades';
import TraderHeader from './components/TraderHeader';
import TradersPositions from './components/TradersPositions';
import TradersStats from './components/TraderStats';
import { fetchPastTrades } from './utils/fetchPastTrades';
import { fetchTradersPositions } from './utils/fetchTradersPositions';
import { fetchTradersStats } from './utils/fetchTradersStats';
import { fetchTradersMarketData } from './utils/fetchTradersMarketData';
import TradersMarketData from './components/TradersMarketData';
import { fetchMarketsData } from '../MarketsPage/utils/pollMarketsData';

export default function IndividualTradersModule() {
  const pathname = usePathname();
  const address = pathname.split('/').pop() || '';

  useEffect(() => {
    fetchTradersStats(address);
    fetchTradersPositions(address);
    fetchPastTrades(address);
    fetchTradersMarketData(address);

    fetchMarketsData();

    const interval = setInterval(() => {
      fetchMarketsData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [address]);

  return (
    <div className="w-full flex flex-col items-center justify-start h-[calc(100vh-116px)]">
      <TraderHeader address={address} />
      <div className="w-full flex items-stretch justify-center h-full">
        <ComingSoon />
        <div className="w-full h-full border-x-[1px] border-black-400 flex flex-col items-center justify-start">
          <TradersStats />
          <TradersMarketData />
        </div>
        <div className="w-full h-full max-h-[calc(100vh-183px)] overflow-hidden flex flex-col items-center justify-start">
          <TradersPositions />
          <PastTrades />
        </div>
      </div>
    </div>
  );
}
