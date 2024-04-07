import axios from 'axios';
import { GetTopTradersApiPayload } from '@/types/apiPayload/getTopTraders';
import { GET_TOP_TRADERS_ENDPOINT } from './constants';

export default class ApiService {
  static getTopTraders(data: GetTopTradersApiPayload) {
    return axios.post(GET_TOP_TRADERS_ENDPOINT, data);
  }
}