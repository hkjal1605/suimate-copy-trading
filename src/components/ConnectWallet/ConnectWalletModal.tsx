'use client';

import React from 'react';

import { useWallet } from '@suiet/wallet-kit';
import { message, notification } from 'antd';
import Image from 'next/image';

import CustomModal from '@/components/CustomModal';
import ApiService from '@/services/apiService';
import mixpanelAnalytics from '@/utils/Analytics/mixpanel';

interface IPropType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ConnectWalletModal = (props: IPropType) => {
  const { isOpen, setIsOpen } = props;
  const wallet = useWallet();

  console.log(wallet);

  const handleConnectWallet = async (walletName: string) => {
    try {
      await wallet.select(walletName);
      const address = wallet.address;
      handleConnectWalletSuccess(address);
    } catch (err: any) {
      console.log(err);
      notification.error({ message: 'Error connecting wallet' + err.message });
    }
  };

  const handleConnectWalletSuccess = (address: string) => {
    notification.success({ message: 'Wallet Connected' });
    setIsOpen(false);
    mixpanelAnalytics.identify(address);
    ApiService.createUser(address);
  };

  return (
    <CustomModal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
      <div className="flex w-full p-4 bg-black-200 border-[1px] border-black-400 rounded-lg flex-col items-start justify-center gap-4">
        <p className="text-base text-black-800">Connect Your Wallet</p>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          {wallet.configuredWallets.map((walletData) => (
            <div
              key={walletData.name}
              className="bg-black-300 w-full rounded-md cursor-pointer border-2 border-black-400 hover:border-black-500 flex justify-start items-center px-3 py-2 gap-2"
              onClick={() => handleConnectWallet(walletData.name)}
            >
              <Image
                src={walletData.iconUrl}
                alt={walletData.name}
                width={24}
                height={24}
              />
              <p className="text-black-800 text-base font-medium">
                {walletData.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CustomModal>
  );
};

export default ConnectWalletModal;
