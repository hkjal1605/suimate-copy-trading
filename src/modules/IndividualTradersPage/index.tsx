'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import TraderHeader from './components/TraderHeader';

export default function IndividualTradersModule() {
  const pathname = usePathname();
  const address = pathname.split('/').pop() || '';

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <TraderHeader address={address} />
    </div>
  );
}
