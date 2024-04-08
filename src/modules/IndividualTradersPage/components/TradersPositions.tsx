import useTradersPositionsStore from '@/stores/useTradersPositions';
import React from 'react';
import PositionCard from './PositionCard';

const TradersPositions = () => {
  const { positions } = useTradersPositionsStore();

  console.log(positions);

  return (
    <div className="w-full flex flex-col items-start justify-start p-3 gap-3 max-h-full overflow-hidden border-b-[1px] border-black-400">
      <p className="text-base text-black-800">Open Positions</p>
      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-black-700 w-full flex-[1.2] text-left">Market / Avg. Entry</p>
        <p className="text-sm text-black-700 w-full flex-1 text-end">Size</p>
        <p className="text-sm text-black-700 w-full flex-1 text-end">Leverage</p>
        <p className="text-sm text-black-700 w-full flex-[0.8] text-end">PnL</p>
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
        {positions.map((position) => (
          <PositionCard position={position} key={position.perpId} />
        ))}
      </div>
    </div>
  );
};

export default TradersPositions;
