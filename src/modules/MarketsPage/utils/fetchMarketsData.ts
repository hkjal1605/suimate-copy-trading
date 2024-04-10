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
