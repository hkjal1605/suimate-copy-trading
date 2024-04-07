'use client';

import React from 'react';
import DropdownComponent from '@/components/Dropdown';
import { OrderTradersBy } from '../types/orderTradersBy';

interface IPropType {
  topFilter: OrderTradersBy;
  setTopFilter: (topFilter: OrderTradersBy) => void;
}

const Options: Record<OrderTradersBy, string> = {
  netPnl: 'Top PnL',
  avgRoi: 'Top Avg. ROI',
  totalTradesPlaced: 'Most Trades Placed',
  totalTradesWon: 'Most Trades Won',
  totalMarginUsed: 'Most Amount Traded',
  totalGain: 'Most Amount Gained',
  totalLoss: 'Least Amount Lost',
  accountBalance: 'Top Account Balance'
};

const TopFilter = (props: IPropType) => {
  const { topFilter, setTopFilter } = props;

  return (
    <DropdownComponent
      title={<p className="text-base text-blue-200">{Options[topFilter]}</p>}
      menuItems={Object.keys(Options).map((key) => {
        const value = Options[key as OrderTradersBy];

        return {
          label: (
            <p
              className={`text-sm ${topFilter === key ? 'text-blue-200' : 'text-black-800'}`}
              onClick={() => setTopFilter(key as OrderTradersBy)}
            >
              {value}
            </p>
          ),
          key: 0
        }
      })}
    />
  );
};

export default TopFilter;
