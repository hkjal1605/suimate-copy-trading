import React from 'react';
import usePastTradesStore from '@/stores/usePastTradesStore';
import TradeCard from './TradeCard';

const PastTrades = () => {
  const { trades } = usePastTradesStore();

  console.log(trades);

  return (
    <div className="w-full flex flex-col items-start justify-start p-3 gap-3 max-h-[50%] min-h-[50%] overflow-hidden">
      <p className="text-base text-black-800">Past Trades</p>
      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-black-700 w-full flex-[1.2] text-left">
          Market / Time
        </p>
        <p className="text-sm text-black-700 w-full flex-1 text-end">Size</p>
        <p className="text-sm text-black-700 w-full flex-1 text-end">
          Leverage
        </p>
        <p className="text-sm text-black-700 w-full flex-[0.8] text-end">
          Fees Paid
        </p>
        <p className="text-sm text-black-700 w-full flex-[0.8] text-end">PnL</p>
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
        {trades.map((trade) => (
          <TradeCard trade={trade} key={trade.id} />
        ))}
      </div>
    </div>
  );
};

export default PastTrades;
