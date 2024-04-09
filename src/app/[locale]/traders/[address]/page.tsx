import React from 'react';

import type { Metadata } from 'next';

import IndividualTradersModule from '@/modules/IndividualTradersPage';

export const metadata: Metadata = {
  title: 'SuiMate - Individual Traders'
};

export default function Index() {
  return <IndividualTradersModule />;
}
