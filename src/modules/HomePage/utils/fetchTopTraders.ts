import ApiService from '@/services/apiService';
import { topTradersStore } from '@/stores/useTopTradersStore';
import { logger } from '@/utils/Logger';

import type { OrderTradersBy } from '../types/orderTradersBy';

const fetchTopTraders = async (orderBy: OrderTradersBy) => {
  try {
    topTradersStore.setState({
      loaded: false
    });

    const queryTimestamp: number = 1680933000670;
    const limit = 15;

    const response = await ApiService.getTopTraders({
      endTimestamp: queryTimestamp,
      limit,
      orderBy
    });

    topTradersStore.setState({
      topTraders: response.data,
      loaded: true
    });
  } catch (error) {
    logger.error(error);
  }
};

export default fetchTopTraders;
