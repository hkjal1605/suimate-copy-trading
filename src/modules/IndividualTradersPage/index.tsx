'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import TraderHeader from './components/TraderHeader';
import ComingSoon from './components/ComingSoon';
import { fetchTradersStats } from './utils/fetchTradersStats';
import TradersStats from './components/TraderStats';

export default function IndividualTradersModule() {
  const pathname = usePathname();
  const address = pathname.split('/').pop() || '';

  useEffect(() => {
    fetchTradersStats(address);
  }, [address]);

  return (
    <div className="w-full flex flex-col items-center justify-start h-[calc(100vh-116px)]">
      <TraderHeader address={address} />
      <div className="w-full flex items-stretch justify-center h-full">
        <ComingSoon />
        <div className="w-full h-full border-x-[1px] border-black-400 flex flex-col items-center justify-start">
          <TradersStats />
        </div>
        <div className="w-full h-full"></div>
      </div>
    </div>
  );
}
