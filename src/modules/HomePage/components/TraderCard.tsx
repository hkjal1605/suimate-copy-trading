'use client';

import React, { useState } from 'react';

import Avatar from 'boring-avatars';
import Image from 'next/image';
import Link from 'next/link';

import ComingSoonModal from '@/components/ComingSoonModal';
import PrimaryButton from '@/components/PrimaryButton';
import type { TopTradersType } from '@/types/dataTypes/topTraders';
import getEllipsisTxt from '@/utils/getEllipsisText';
import { isBignumberPositive, toDecimalString } from '@/utils/parseBignum';
import useFavoriteTradersStore from '@/stores/useFavoriteTradersStore';
import { addToFavorite, removeFromFavorite } from '../utils/modifyFavorites';
import { useCurrentAccount } from '@mysten/dapp-kit';

interface IPropType {
  trader: TopTradersType;
}

const TraderCard = (props: IPropType) => {
  const { trader } = props;
  const { favoriteTraders } = useFavoriteTradersStore();
  const account = useCurrentAccount();

  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);

  return (
    <div className="w-full p-4 rounded-md bg-black-200 flex flex-col items-center justify-center gap-4 border-2 border-transparent border-black-300 hover:border-black-500 transition-all duration-300">
      <div className="w-full flex justify-start items-center gap-2">
        <Avatar
          size={40}
          name={trader.address}
          variant="beam"
          colors={['#96ceb4', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />
        <p className="text-black-800 text-sm">
          {getEllipsisTxt(trader.address, 6, 5)}
        </p>
        <div className="w-px h-5 bg-black-500" />
        <Image
          src="/assets/images/platforms/bluefin.png"
          alt="bluefin"
          width={14}
          height={14}
        />
        <Image
          src={
            favoriteTraders.includes(trader.address)
              ? '/assets/images/star-filled.svg'
              : '/assets/images/star.svg'
          }
          alt="Favourite"
          className="ml-auto cursor-pointer"
          width={20}
          height={20}
          onClick={() => {
            if (!account?.address) return;

            if (!favoriteTraders.includes(trader.address)) {
              addToFavorite(account?.address, trader.address);
            } else {
              removeFromFavorite(account?.address, trader.address);
            }
          }}
        />
        <Link href={`/traders/${trader.address}`}>
          <Image
            src="/assets/images/chevron.svg"
            alt="Favourite"
            className="cursor-pointer -rotate-90"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* <div className="w-full -mt-8 -mb-5">
          <TraderCardChart />
        </div> */}
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-sm text-black-800">Net PnL</p>
        <p
          className={`text-3xl font-semibold ${isBignumberPositive(trader.netPnl) ? 'text-green-300' : 'text-red-300'}`}
        >
          ${toDecimalString(trader.netPnl)}
        </p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex flex-col items-start justify-center">
          <p className="text-sm text-black-700">Average ROI(%)</p>
          <p
            className={`text-base ${trader.avgRoi >= 0 ? 'text-green-300' : 'text-red-300'}`}
          >
            {(trader.avgRoi || 0).toFixed(2)}%
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-sm text-black-700">Total Collateral Used</p>
          <p className="text-base text-black-900">
            ${toDecimalString(trader.totalMarginUsed)}
          </p>
        </div>
        <div className="w-full flex flex-col items-end justify-center">
          <p className="text-sm text-black-700">Win/Trades</p>
          <p className="text-base text-black-900">
            {trader.totalTradesWon}/{trader.totalTradesPlaced}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex flex-col items-start justify-center">
          <p className="text-sm text-black-700">Total Gains</p>
          <p className="text-base text-black-900">
            ${toDecimalString(trader.totalGain)}
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-sm text-black-700">Total Losses</p>
          <p className="text-base text-black-900">
            ${toDecimalString(trader.totalLoss)}
          </p>
        </div>
        <div className="w-full flex flex-col items-end justify-center">
          <p className="text-sm text-black-700">Current Balance</p>
          <p className="text-base text-black-900">
            ${toDecimalString(trader.accountBalance)}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-start items-center gap-3">
        <Link href={`/traders/${trader.address}`}>
          <PrimaryButton className="max-w-[180px]">
            <p className="text-sm text-black-900">View All Trades</p>
          </PrimaryButton>
        </Link>

        <p
          className="text-sm text-blue-400"
          onClick={(e) => {
            e.stopPropagation();
            setIsComingSoonModalOpen(true);
          }}
        >
          Backtest
        </p>
      </div>
      <ComingSoonModal
        isOpen={isComingSoonModalOpen}
        setIsOpen={setIsComingSoonModalOpen}
        featureName="Backtest"
      />
    </div>
  );
};

export default TraderCard;
