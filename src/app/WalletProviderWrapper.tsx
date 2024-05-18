'use client';

import React from 'react';

import { WalletProvider } from '@suiet/wallet-kit';

const WalletProviderWrapper = (props: { children: React.ReactNode }) => {
  return <WalletProvider autoConnect>{props.children}</WalletProvider>;
};

export default WalletProviderWrapper;
