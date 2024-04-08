import { logger } from '@/utils/Logger';
import ApiService from '@/services/apiService';
import { tradersPositionsStore } from '@/stores/useTradersPositions';

export const fetchTradersPositions = async (address: string) => {
  try {
    tradersPositionsStore.setState({
      loaded: false
    });

    const response = await ApiService.getTraderPositions(address);

    tradersPositionsStore.setState({
      positions: response.data,
      loaded: true
    });
  } catch (error) {
    logger.error(error);
  }
};
