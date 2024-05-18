import axios from 'axios';

import { BLUEFIN_BASE_URL } from './constants';

export default class BluefinApiService {
  static getMarketsData() {
    return axios.get(`${BLUEFIN_BASE_URL}/marketData`);
  }

  static authorize(userAddress: string, signature: string, isTermAccepted: boolean) {
    return axios.post(`${BLUEFIN_BASE_URL}/authorize`, {
      userAddress,
      signature,
      isTermAccepted,
    });
  }
}
