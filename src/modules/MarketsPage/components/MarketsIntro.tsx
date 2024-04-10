import React from 'react';

import DexFilter from '@/modules/HomePage/components/DexFilter';

const MarketsIntroFilter = () => {
  return (
    <div className="flex w-full justify-start items-center py-4 gap-2">
      <p className="text-xl text-black-1000">View active markets on</p>
      <DexFilter />
    </div>
  );
};

export default MarketsIntroFilter;
