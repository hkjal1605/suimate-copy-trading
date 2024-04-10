'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { SUI_DECIMALS } from '@/constants';
import MarketsData from '@/constants/markets';
import useMarketsDataStore from '@/stores/useMarketsDataStore';
import type { TradersPositionsType } from '@/types/dataTypes/tradersPositions';
import { capitalizeFirstLetter } from '@/utils/capitaliseFirstLetter';
import { toDecimalString } from '@/utils/parseBignum';

interface IPropType {
  position: TradersPositionsType;
}

const PositionCard = (props: IPropType) => {
  const { position } = props;
  const { marketsData } = useMarketsDataStore();

  const [pnl, setPnl] = useState<string>('0');

  useEffect(() => {
    const marketSymbol = MarketsData[position.perpId]?.symbol!;
    const marketDataFromStore = marketsData.find(
      (market) => market.symbol === marketSymbol
    );

    const currentMarketPrice = toDecimalString(
      marketDataFromStore?.marketPrice || '0',
      18
    );
    const entryPrice = toDecimalString(position.avgEntryPrice);
    const size = toDecimalString(position.size);

    const positionPnl = (
      (Number(currentMarketPrice) - Number(entryPrice)) *
      Number(size)
    ).toFixed(2);

    setPnl(positionPnl);
  }, [position, marketsData]);

  return (
    <div className="w-full flex items-center justify-between bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-1 px-2 rounded-md">
      <div className="flex w-full flex-[1.2] justify-start items-center gap-2">
        <Image
          src={MarketsData[position.perpId]?.imgSrc!}
          alt={MarketsData[position.perpId]?.symbol!}
          height={30}
          width={30}
        />
        <div className="flex flex-col items-start justify-center ">
          <p className="text-sm text-black-900">
            {MarketsData[position.perpId]?.symbol}
          </p>
          <p className="text-xs text-black-800">
            ${toDecimalString(position.avgEntryPrice)}
          </p>
        </div>
      </div>

      <p className="text-sm text-black-900 w-full flex-1 text-end">
        {toDecimalString(position.size)}
      </p>
      <div className="flex justify-end items-center gap-2 w-full flex-1">
        <p className="text-sm text-blue-300">
          {toDecimalString(position.leverage, SUI_DECIMALS, 0)}x
        </p>
        <p
          className={`text-sm ${position.tradeType === 'long' ? 'text-green-300' : 'text-red-300'}`}
        >
          {capitalizeFirstLetter(position.tradeType)}
        </p>
      </div>
      <p
        className={`text-sm w-full text-right flex-[0.8] ${Number(pnl) >= 0 ? 'text-green-300' : 'text-red-300'}`}
      >
        ${!Number.isNaN(Number(pnl)) ? pnl : 0}
      </p>
    </div>
  );
};

export default PositionCard;
