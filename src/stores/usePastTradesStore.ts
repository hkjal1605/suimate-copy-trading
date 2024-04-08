import { createStore } from 'zustand/vanilla';

import createBoundedUseStore from '@/utils/createBoundedUseStore';
import { PastTradesType } from '@/types/dataTypes/pastTrades';

type State = {
  trades: PastTradesType[];
  loaded: boolean;
};

type Action = {
  setTrades: (tradesData: State['trades']) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const pastTradesStore = createStore<State & Action>()((set) => ({
  trades: [],
  loaded: false,
  setTrades: (trades) =>
    set(() => ({
      trades,
      loaded: true
    }))
}));

// Create a hook to be used inside react components
const usePastTradesStore = createBoundedUseStore(pastTradesStore);

export default usePastTradesStore;
