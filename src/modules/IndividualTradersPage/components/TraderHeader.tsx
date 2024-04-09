'use client';

import React, { useState } from 'react';

import Avatar from 'boring-avatars';
import Image from 'next/image';

import ComingSoonModal from '@/components/ComingSoonModal';
import getEllipsisTxt from '@/utils/getEllipsisText';

interface IPropType {
  address: string;
}

const TraderHeader = (props: IPropType) => {
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);
  const [feature, setFeature] = useState('');
  const { address } = props;

  return (
    <div className="w-full flex px-5 py-3 justify-start items-center gap-4 border-b-[1px] border-black-400">
      <Avatar
        size={40}
        name={address}
        variant="beam"
        colors={['#96ceb4', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
      />
      <div className="flex flex-col items-start justify-center">
        <div className="flex gap-1.5 justify-start items-center">
          <p className="text-black-1000 text-base font-medium">
            {getEllipsisTxt(address)}
          </p>
          <Image
            src="/assets/images/copy.svg"
            alt="Copy"
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <Image
            src="/assets/images/star.svg"
            alt="Star"
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <a href={`https://suivision.xyz/account/${address}`} target="_blank">
            <Image
              src="/assets/images/external.svg"
              alt="View on Explorer"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </a>
        </div>
        <div className="flex justify-start items-center gap-1">
          <p className="text-xs text-black-700">Trader on</p>
          <Image
            src="/assets/images/platforms/bluefin.png"
            alt="bluefin"
            width={12}
            height={12}
          />
          <p className="text-xs text-blue-200">Bluefin</p>
        </div>
      </div>
      <a
        href="https://trade.bluefin.io/ETH-PERP"
        target="_blank"
        className="ml-auto"
      >
        <div className="flex justify-center items-center gap-1.5 cursor-pointer">
          <p className="text-base text-black-800">Trade on</p>
          <Image
            src="/assets/images/platforms/bluefin.png"
            alt="bluefin"
            width={16}
            height={16}
          />
          <p className="text-base text-blue-200 font-semibold">Bluefin</p>
        </div>
      </a>
      <div className=" h-10 w-px bg-black-400" />
      <div
        className="flex justify-center items-center gap-1 cursor-pointer"
        onClick={() => {
          setFeature('Notification Alerts');
          setIsComingSoonModalOpen(true);
        }}
      >
        <Image
          src="/assets/images/bell.svg"
          alt="bell"
          width={16}
          height={16}
        />
        <p className="text-base text-black-800">Notify on New Trades</p>
      </div>
      <div className=" h-10 w-px bg-black-400" />
      <div
        className="flex justify-center items-center gap-1 cursor-pointer"
        onClick={() => {
          setFeature('Place Trade');
          setIsComingSoonModalOpen(true);
        }}
      >
        <Image
          src="/assets/images/trade.svg"
          alt="trade"
          width={16}
          height={16}
        />
        <p className="text-base text-black-800">Place a Trade</p>
      </div>
      <ComingSoonModal
        isOpen={isComingSoonModalOpen}
        setIsOpen={setIsComingSoonModalOpen}
        featureName={feature}
      />
    </div>
  );
};

export default TraderHeader;
