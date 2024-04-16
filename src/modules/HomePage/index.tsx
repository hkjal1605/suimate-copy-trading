'use client';

import { useEffect, useState } from 'react';

import Spinner from '@/components/Spinner';
import IntroFilter from '@/modules/HomePage/components/IntroFilter';
import TraderCard from '@/modules/HomePage/components/TraderCard';
import useTopTradersStore from '@/stores/useTopTradersStore';

import PrototypeInfoModal from './components/PrototypeInfoModal';
import type { OrderTradersBy } from './types/orderTradersBy';
import fetchTopTraders from './utils/fetchTopTraders';
import { useCurrentAccount } from '@mysten/dapp-kit';
import fetchFavoriteTraders from './utils/fetchFavoriteTraders';

export default function HomePageModule() {
  const [topFilter, setTopFilter] = useState<OrderTradersBy>('netPnl');
  const account = useCurrentAccount();

  const { topTraders, loaded } = useTopTradersStore();

  useEffect(() => {
    fetchTopTraders(topFilter);
  }, [topFilter]);

  useEffect(() => {
    if (account?.address) {
      fetchFavoriteTraders(account.address);
    }
  }, [account?.address]);

  return (
    <div className="text-black-900 w-full">
      <div className="flex flex-col items-center justify-start px-5 w-full">
        <IntroFilter topFilter={topFilter} setTopFilter={setTopFilter} />
        {loaded ? (
          <div className="w-full grid grid-cols-3 gap-4">
            {topTraders.map((trader) => (
              <TraderCard trader={trader} key={trader.address} />
            ))}
          </div>
        ) : (
          <div className="w-full h-28 flex justify-center items-center">
            <Spinner />
          </div>
        )}
      </div>
      <PrototypeInfoModal />
    </div>
  );
}
