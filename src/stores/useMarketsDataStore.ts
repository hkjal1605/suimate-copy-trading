import { createStore } from 'zustand/vanilla';

import type { MarketsDataType } from '@/types/dataTypes/marketsData';
import createBoundedUseStore from '@/utils/createBoundedUseStore';

type State = {
  marketsData: MarketsDataType[];
  loaded: boolean;
};

type Action = {
  setMarketsData: (marketsData: State['marketsData']) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const marketsDataStore = createStore<State & Action>()((set) => ({
  marketsData: [],
  loaded: false,
  setMarketsData: (marketsData) =>
    set(() => ({
      marketsData,
      loaded: true
    }))
}));

// Create a hook to be used inside react components
const useMarketsDataStore = createBoundedUseStore(marketsDataStore);

export default useMarketsDataStore;
