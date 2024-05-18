'use client';
import React, { useState } from 'react';

import CustomModal from '@/components/CustomModal';
import PrimaryButton from '@/components/PrimaryButton';
import { useWallet } from '@suiet/wallet-kit';
import { notification } from 'antd';

interface IPropType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const CreateTradeAccountModal = (props: IPropType) => {
  const { isOpen, setIsOpen } = props;

  const { account, signPersonalMessage } = useWallet();

  const handleCreateTradingAccount = async () => {
    if (!account?.address) {
      notification.error({
        message: 'Please connect your wallet to create a trading account'
      });
      return;
    }

    const onboardingSignature = JSON.stringify({
      onboardingUrl: 'https://trade.bluefin.io'
    });

    const signature = await signPersonalMessage({
      message: new TextEncoder().encode(onboardingSignature)
    });

    console.log(signature);
  };

  return (
    <CustomModal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
      <div className="flex w-full p-4 bg-black-200 border-[1px] border-black-400 rounded-lg flex-col items-start justify-center gap-4">
        <p className="text-base text-black-800">Create Trading Account</p>
        <p className="text-sm text-black-700 w-full text-left">
          Trading on SuiMate is powered by Bluefin. Trading system on SuiMate
          uses Bluefin smart contracts behind the scenes. You will be eligible
          for any rewards that Bluefin provides. By creating a trading account,
          you agree to the following:
        </p>
        <ul className="flex flex-col items-start justify-start gap-2 pl-2">
          <li>
            <p className="text-sm text-black-700">
              • You don’t reside in, are a citizen of, are located in, or have
              registered office in the US or any restricted territory
            </p>
          </li>
          <li>
            <p className="text-sm text-black-700">
              • You are not using a VPN to circumvent these restrictions
            </p>
          </li>
          <li>
            <p className="text-sm text-black-700">
              • You are in compliance with your local jurisdictional laws when
              trading on Bluefin
            </p>
          </li>
          <li>
            <p className="text-sm text-black-700">
              • You understand that Bluefin is in a beta launch state, and that
              trading on Bluefin may involve in partial or total loss of your
              investment
            </p>
          </li>
        </ul>
        <PrimaryButton onClick={handleCreateTradingAccount}>
          Accept TnC
        </PrimaryButton>
      </div>
    </CustomModal>
  );
};

export default CreateTradeAccountModal;
