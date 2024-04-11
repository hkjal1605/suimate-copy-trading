import React from 'react';

import Image from 'next/image';

import { SUI_DECIMALS } from '@/constants';
import MarketsData from '@/constants/markets';
import type { PastTradesType } from '@/types/dataTypes/pastTrades';
import { capitalizeFirstLetter } from '@/utils/capitaliseFirstLetter';
import { isBignumberPositive, toDecimalString } from '@/utils/parseBignum';

interface IPropType {
  trade: PastTradesType;
}

const TradeCard = (props: IPropType) => {
  const { trade } = props;

  return (
    <div className="w-full flex items-center justify-between bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-1 px-2 rounded-md">
      <div className="flex w-full flex-[1.2] justify-start items-center gap-2">
        <Image
          src={MarketsData[trade.perpId]?.imgSrc!}
          alt={MarketsData[trade.perpId]?.symbol!}
          height={30}
          width={30}
        />
        <div className="flex flex-col items-start justify-center ">
          <p className="text-sm text-black-900">
            {MarketsData[trade.perpId]?.symbol}
          </p>
          <p className="text-xs text-black-800">
            {new Date(trade.timestamp).toLocaleDateString('en-US')}
          </p>
        </div>
      </div>
      <p className="text-sm text-black-900 w-full flex-1 text-end">
        {toDecimalString(trade.size)}
      </p>
      <div className="flex justify-end items-center gap-2 w-full flex-1">
        <p className="text-sm text-blue-300">
          {toDecimalString(trade.leverage, SUI_DECIMALS, 0)}x
        </p>
        <p
          className={`text-sm ${trade.tradeType === 'long' ? 'text-green-300' : 'text-red-300'}`}
        >
          {capitalizeFirstLetter(trade.tradeType)}
        </p>
      </div>
      <p className="text-sm text-black-900 w-full flex-[0.8] text-end">
        ${toDecimalString(trade.feesPaid)}
      </p>
      <p
        className={`text-sm w-full text-right flex-[0.8] ${isBignumberPositive(trade.pnl) ? 'text-green-300' : 'text-red-300'}`}
      >
        ${toDecimalString(trade.pnl)}
      </p>
    </div>
  );
};

export default TradeCard;
