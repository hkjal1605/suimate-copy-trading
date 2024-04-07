'use client';

import useTradersStats from '@/stores/useTradersStats';
import { isBignumberPositive, toDecimalString } from '@/utils/parseBignum';
import React from 'react';

const TradersStats = () => {
  const { stats } = useTradersStats();

  return (
    <div className="w-full flex flex-col items-center justify-start gap-3 py-3">
      <div className="w-full flex items-center justify-between border-b-[1px] border-black-400 px-3 pb-1">
        <div className="flex flex-col items-start justify-center">
          <p className="text-base text-black-800">Account Balance</p>
          <p className="text-3xl font-semibold text-black-1000">
            ${toDecimalString(stats.accountBalance)}
          </p>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="text-base text-black-800">Net Profit / Loss</p>
          <p
            className={`text-3xl font-semibold ${isBignumberPositive(stats.netPnl) ? 'text-green-300' : 'text-red-300'}`}
          >
            ${toDecimalString(stats.netPnl)}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-3 px-3 border-b-[1px] border-black-400 pb-3">
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Total Trades Placed</p>
          <p className="text-sm text-black-900">{stats.totalTradesPlaced}</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Total Trades Won</p>
          <p className="text-sm text-black-900">{stats.totalTradesWon}</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Total Gains</p>
          <p className="text-sm text-black-900">
            ${toDecimalString(stats.totalGain)}
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Total Losses</p>
          <p className="text-sm text-black-900">
            ${toDecimalString(stats.totalLoss)}
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Current Balance</p>
          <p className="text-sm text-black-900">
            ${toDecimalString(stats.accountBalance)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradersStats;
