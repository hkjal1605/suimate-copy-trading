'use client';

import React, { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import ComingSoon from './components/ComingSoon';
import PastTrades from './components/PastTrades';
import TraderHeader from './components/TraderHeader';
import TradersMarketData from './components/TradersMarketData';
import TradersPositions from './components/TradersPositions';
import TradersStats from './components/TraderStats';
import { fetchPastTrades } from './utils/fetchPastTrades';
import { fetchTradersMarketData } from './utils/fetchTradersMarketData';
import { fetchTradersPositions } from './utils/fetchTradersPositions';
import { fetchTradersStats } from './utils/fetchTradersStats';
import { fetchMarketsData } from '../MarketsPage/utils/fetchMarketsData';
import { useCurrentAccount } from '@mysten/dapp-kit';
import fetchUserData from '../HomePage/utils/fetchUserData';

export default function IndividualTradersModule() {
  const pathname = usePathname();
  const address = pathname.split('/').pop() || '';
  const account = useCurrentAccount()

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

  useEffect(() => {
    if (account?.address) {
      fetchUserData(account.address);
    }
  }, [account?.address]);

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
