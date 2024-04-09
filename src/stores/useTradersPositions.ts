import { createStore } from 'zustand/vanilla';

import type { TradersPositionsType } from '@/types/dataTypes/tradersPositions';
import createBoundedUseStore from '@/utils/createBoundedUseStore';

type State = {
  positions: TradersPositionsType[];
  loaded: boolean;
};

type Action = {
  setPositions: (positionsData: State['positions']) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const tradersPositionsStore = createStore<State & Action>()((set) => ({
  positions: [],
  loaded: false,
  setPositions: (positions) =>
    set(() => ({
      positions,
      loaded: true
    }))
}));

// Create a hook to be used inside react components
const useTradersPositionsStore = createBoundedUseStore(tradersPositionsStore);

export default useTradersPositionsStore;
