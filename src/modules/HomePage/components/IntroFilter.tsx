import React from 'react';

import DexFilter from './DexFilter';
import TopFilter from './TopFilter';
import type { OrderTradersBy } from '../types/orderTradersBy';

interface IPropType {
  topFilter: OrderTradersBy;
  setTopFilter: (topFilter: OrderTradersBy) => void;
}

const IntroFilter = (props: IPropType) => {
  const { topFilter, setTopFilter } = props;

  return (
    <div className="flex w-full justify-start items-center py-4 gap-2">
      <p className="text-xl text-black-1000">Copy on-chain traders with</p>
      <TopFilter topFilter={topFilter} setTopFilter={setTopFilter} />
      <p className="text-xl text-black-1000">trading on</p>
      <DexFilter />
    </div>
  );
};

export default IntroFilter;
