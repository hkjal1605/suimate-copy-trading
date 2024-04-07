import { logger } from '@/utils/Logger';
import ApiService from '@/services/apiService';
import { tradersStatsStore } from '@/stores/useTradersStats';

export const fetchTradersStats = async (address: string) => {
  try {
    tradersStatsStore.setState({
      loaded: false
    });

    const response = await ApiService.getTraderStats(address);

    tradersStatsStore.setState({
      stats: response.data,
      loaded: true
    });
  } catch (error) {
    logger.error(error);
  }
};
