import ApiService from '@/services/apiService';
import { logger } from '@/utils/Logger';

import { favoriteTradersStore } from '@/stores/useFavoriteTradersStore';

const fetchFavoriteTraders = async (userAddress: string) => {
  try {
    favoriteTradersStore.setState({
      loaded: false
    });

    const response = await ApiService.getFavoriteTraders(userAddress);

    favoriteTradersStore.setState({
      favoriteTraders: response.data,
      loaded: true
    });
  } catch (error) {
    logger.error(error);
  }
};

export default fetchFavoriteTraders;
