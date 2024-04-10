import axios from 'axios';

import { BLUEFIN_BASE_URL } from './constants';

export default class BluefinApiService {
  static getMarketsData() {
    return axios.get(`${BLUEFIN_BASE_URL}/marketData`);
  }
}
