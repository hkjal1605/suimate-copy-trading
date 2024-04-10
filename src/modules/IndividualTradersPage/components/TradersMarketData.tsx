import React from 'react';

import useTradersMarketsDataStore from '@/stores/useTradersMarketDataStore';

import MarketsTradedCard from './MarketsTradedCard';

const TradersMarketData = () => {
  const { tradersMarketData } = useTradersMarketsDataStore();

  return (
    <div className="w-full flex flex-col items-start justify-start p-3 gap-3 max-h-full overflow-hidden">
      <p className="text-base text-black-800">Markets Traded</p>
      <div className="w-full flex justify-between items-center">
        <p className="text-sm w-full text-left text-black-700">Market</p>
        <p className="text-sm w-full text-right text-black-700">Wins / Total</p>
        <p className="text-sm w-full text-end text-black-700">Net PnL</p>
        <p className="text-sm w-full text-end text-black-700">Gain / Loss</p>
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
        {tradersMarketData.map((market) => (
          <MarketsTradedCard market={market} key={market.perpId} />
        ))}
      </div>
    </div>
  );
};

export default TradersMarketData;
