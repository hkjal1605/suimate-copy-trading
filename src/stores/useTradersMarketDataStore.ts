import { createStore } from 'zustand/vanilla';

import type { TradersMarketDataType } from '@/types/dataTypes/tradersMarketData';
import createBoundedUseStore from '@/utils/createBoundedUseStore';

type State = {
  tradersMarketData: TradersMarketDataType[];
  loaded: boolean;
};

type Action = {
  setTradersMarketsData: (
    tradersMarketData: State['tradersMarketData']
  ) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const tradersMarketsDataStore = createStore<State & Action>()((set) => ({
  tradersMarketData: [],
  loaded: false,
  setTradersMarketsData: (tradersMarketData) =>
    set(() => ({
      tradersMarketData,
      loaded: true
    }))
}));

// Create a hook to be used inside react components
const useTradersMarketsDataStore = createBoundedUseStore(
  tradersMarketsDataStore
);

export default useTradersMarketsDataStore;
