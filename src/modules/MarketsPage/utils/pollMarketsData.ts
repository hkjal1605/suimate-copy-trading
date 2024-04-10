import BluefinApiService from '@/services/bluefinApiService';
import { marketsDataStore } from '@/stores/useMarketsDataStore';

export const fetchMarketsData = async () => {
  try {
    const response = await BluefinApiService.getMarketsData();
    marketsDataStore.setState({
      marketsData: response.data
    });
  } catch (error) {
    console.error(error);
  }
};

export const pollMarketsData = async () => {
  try {
    const call = async () => {
      await fetchMarketsData();
    };

    const interval = async (): Promise<NodeJS.Timeout> => {
      await call();

      // run `interval` again after 2 seconds
      return setTimeout(interval, 2000);
    };

    // call interval
    return interval();
  } catch (error) {
    console.error(error);
  }
};
