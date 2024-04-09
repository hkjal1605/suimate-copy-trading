'use client';

import IntroFilter from '@/modules/HomePage/components/IntroFilter';
import TraderCard from '@/modules/HomePage/components/TraderCard';
import { useEffect, useState } from 'react';
import { OrderTradersBy } from './types/orderTradersBy';
import fetchTopTraders from './utils/fetchTopTraders';
import useTopTradersStore from '@/stores/useTopTradersStore';
import Spinner from '@/components/Spinner';
import PrototypeInfoModal from './components/PrototypeInfoModal';

export default function HomePageModule() {
  const [topFilter, setTopFilter] = useState<OrderTradersBy>('netPnl');

  const { topTraders, loaded } = useTopTradersStore();

  useEffect(() => {
    fetchTopTraders(topFilter);
  }, [topFilter]);

  return (
    <div className="text-black-900 w-full">
      <div className="flex flex-col items-center justify-start px-5 w-full">
        <IntroFilter topFilter={topFilter} setTopFilter={setTopFilter} />
        {loaded ? (
          <div className="w-full grid grid-cols-3 gap-4">
            {topTraders.map((trader) => (
              <TraderCard trader={trader} />
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
