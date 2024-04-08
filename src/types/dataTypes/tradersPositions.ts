export type TradersPositionsType = {
  leverage: number;
  margin: number;
  oiOpen: number;
  size: number;
  perpId: string;
  avgEntryPrice: number;
  tradeType: 'long' | 'short';
  timestamp: number;
  id: string;
};
