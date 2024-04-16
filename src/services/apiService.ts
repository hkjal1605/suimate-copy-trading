import axios from 'axios';

import type { GetPastTradesQuery } from '@/types/apiPayload/getPastTrades';
import type { GetTopTradersApiPayload } from '@/types/apiPayload/getTopTraders';

import {
  ADD_TO_FAVORITES_ENDPOINT,
  CREATE_USER_ENDPOINT,
  GET_FAVORITES_ENDPOINT,
  GET_PAST_TRADES_ENDPOINT,
  GET_TOP_TRADERS_ENDPOINT,
  GET_TRADERS_MARKETS_ENDPOINT,
  GET_TRADER_POSITIONS_ENDPOINT,
  GET_TRADER_STATS_ENDPOINT,
  REMOVE_FROM_FAVORITES_ENDPOINT,
} from './constants';

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

  static getTradersMarketsData(address: string) {
    return axios.get(`${GET_TRADERS_MARKETS_ENDPOINT}?address=${address}`);
  }

  static createUser(userAddress: string) {
    return axios.post(`${CREATE_USER_ENDPOINT}`, { userAddress });
  }

  static addTraderToFavoriteList(userAddress: string, traderAddress: string) {
    return axios.post(`${ADD_TO_FAVORITES_ENDPOINT}`, {
      userAddress,
      traderAddress
    });
  }

  static removeTraderFromFavoriteList(userAddress: string, traderAddress: string) {
    return axios.post(`${REMOVE_FROM_FAVORITES_ENDPOINT}`, {
      userAddress,
      traderAddress
    });
  }

  static getFavoriteTraders(userAddress: string) {
    return axios.get(`${GET_FAVORITES_ENDPOINT}?userAddress=${userAddress}`);
  }
}
