import ApiService from '@/services/apiService';
import { tradersMarketsDataStore } from '@/stores/useTradersMarketDataStore';

export const fetchTradersMarketData = async (address: string) => {
  try {
    tradersMarketsDataStore.setState({
      loaded: false
    });

    const response = await ApiService.getTradersMarketsData(address);

    tradersMarketsDataStore.setState({
      tradersMarketData: response.data,
      loaded: true
    });
  } catch (error) {
    console.error(error);
  }
};
