import React from 'react';

import Image from 'next/image';

import MarketsData from '@/constants/markets';
import type { MarketsDataType } from '@/types/dataTypes/marketsData';
import { toDecimalString } from '@/utils/parseBignum';

interface IPropType {
  market: MarketsDataType;
}

const MarketCard = (props: IPropType) => {
  const { market } = props;

  return (
    <div
      className="w-full flex items-center justify-between bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-2 px-3 rounded-md cursor-pointer"
      onClick={() => {
        window.open(`https://trade.bluefin.io/${market.symbol}`, '_blank');
      }}
    >
      <div className="flex w-full flex-1 justify-start items-center gap-2">
        <Image
          src={
            Object.values(MarketsData).find((m) => m.symbol === market.symbol)
              ?.imgSrc!
          }
          alt={market.symbol}
          height={30}
          width={30}
        />
        <p className="text-sm text-black-900">{market.symbol}</p>
      </div>
      <p
        className={`text-base text-end w-full flex-1 ${market.marketPriceDirection === 1 ? 'text-green-300' : 'text-red-300'}`}
      >
        ${toDecimalString(market.marketPrice, 18)}
      </p>
      <p className="text-base text-end w-full flex-1 text-black-900">
        ${toDecimalString(market.indexPrice, 18)}
      </p>
      <p className="text-base text-end w-full flex-1 text-black-900">
        ${toDecimalString(market._24hrHighPrice, 18)}
      </p>
      <p className="text-base text-end w-full flex-1 text-black-900">
        ${toDecimalString(market._24hrLowPrice, 18)}
      </p>
      <p
        className={`text-base text-end w-full flex-1 ${market._24hrPriceChangePercent.startsWith('-') ? 'text-red-300' : 'text-green-300'}`}
      >
        {toDecimalString(market._24hrPriceChangePercent, 18)}%
      </p>
      <p className="text-base w-full flex-1 text-yellow-200 text-end">
        {toDecimalString(Number(market.lastFundingRate) * 100, 18, 5)}%
      </p>
      <div className="flex w-full flex-[0.5] justify-end items-center">
        <Image
          src="/assets/images/external.svg"
          alt="external"
          height={20}
          width={20}
        />
      </div>
    </div>
  );
};

export default MarketCard;
