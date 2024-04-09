import { createStore } from 'zustand/vanilla';

import type { TradersStatsType } from '@/types/dataTypes/tradersStats';
import createBoundedUseStore from '@/utils/createBoundedUseStore';

type State = {
  stats: TradersStatsType;
  loaded: boolean;
};

type Action = {
  setStats: (statsData: State['stats']) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const tradersStatsStore = createStore<State & Action>()((set) => ({
  stats: {
    totalTradesWon: 0,
    totalGain: 0,
    totalLoss: 0,
    totalTradesPlaced: 0,
    netPnl: 0,
    lastTradeTimestamp: 0,
    accountBalance: 0,
    avgRoi: 0,
    totalMarginUsed: 0,
    address: ''
  },
  loaded: false,
  setStats: (stats) =>
    set(() => ({
      stats,
      loaded: true
    }))
}));

// Create a hook to be used inside react components
const useTradersStatsStore = createBoundedUseStore(tradersStatsStore);

export default useTradersStatsStore;
