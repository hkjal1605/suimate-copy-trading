import axios from 'axios';
import { GetTopTradersApiPayload } from '@/types/apiPayload/getTopTraders';
import {
  GET_PAST_TRADES_ENDPOINT,
  GET_TOP_TRADERS_ENDPOINT,
  GET_TRADER_POSITIONS_ENDPOINT,
  GET_TRADER_STATS_ENDPOINT
} from './constants';
import { GetPastTradesQuery } from '@/types/apiPayload/getPastTrades';

export default class ApiService {
  static getTopTraders(data: GetTopTradersApiPayload) {
    return axios.post(GET_TOP_TRADERS_ENDPOINT, data);
  }

  static getTraderStats(address: string) {
    return axios.get(`${GET_TRADER_STATS_ENDPOINT}?address=${address}`);
  }

  static getTraderPositions(address: string) {
    return axios.get(`${GET_TRADER_POSITIONS_ENDPOINT}?address=${address}`);
  }

  static getPastTrades(data: GetPastTradesQuery) {
    const { address, endTimestamp } = data;
    return axios.get(
      `${GET_PAST_TRADES_ENDPOINT}?address=${address}&endTimestamp=${endTimestamp}`
    );
  }
}
