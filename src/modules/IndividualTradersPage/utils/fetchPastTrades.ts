import { logger } from '@/utils/Logger';
import ApiService from '@/services/apiService';
import { pastTradesStore } from '@/stores/usePastTradesStore';

export const fetchPastTrades = async (address: string) => {
  try {
    pastTradesStore.setState({
      loaded: false
    });

    const response = await ApiService.getPastTrades({
      address,
      endTimestamp: 1680933000670,
    });

    pastTradesStore.setState({
      trades: response.data,
      loaded: true
    });
  } catch (error) {
    logger.error(error);
  }
};
