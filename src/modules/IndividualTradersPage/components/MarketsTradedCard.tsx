import React from 'react';

import Image from 'next/image';

import MarketsData from '@/constants/markets';
import type { TradersMarketDataType } from '@/types/dataTypes/tradersMarketData';
import { isBignumberPositive, toDecimalString } from '@/utils/parseBignum';

interface IPropType {
  market: TradersMarketDataType;
}

const MarketsTradedCard = (props: IPropType) => {
  const { market } = props;

  return (
    <div className="w-full flex items-center justify-between bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-1 px-2 rounded-md">
      <div className="flex w-full flex-[1.2] justify-start items-center gap-2">
        <Image
          src={MarketsData[market.perpId]?.imgSrc!}
          alt={MarketsData[market.perpId]?.symbol!}
          height={30}
          width={30}
        />
        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-sm text-black-900">
            {MarketsData[market.perpId]?.symbol}
          </p>
          <p className="text-xs text-black-800">
            {new Date(market.lastTradeTimestamp).toLocaleDateString('en-US')}
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-1">
          <p className="text-sm text-green-300">{market.totalTradesWon}</p>
          <p className="text-sm text-black-700">/</p>
          <p className="text-sm text-black-900">{market.totalTradesPlaced}</p>
        </div>
        <div
          className={`w-full text-sm text-end ${isBignumberPositive(market.netPnl) ? 'text-green-300' : 'text-red-300'}`}
        >
          ${toDecimalString(market.netPnl)}
        </div>
        <div className="w-full flex flex-col items-end justify-center">
          <p className="text-sm text-green-300">
            ${toDecimalString(market.totalGain)}
          </p>
          <p className="text-sm text-red-300">
            ${toDecimalString(market.totalLoss)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketsTradedCard;
