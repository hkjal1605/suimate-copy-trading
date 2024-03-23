"use client";

import React from "react";
import Image from "next/image";
import Avatar from "boring-avatars";
import PrimaryButton from "@/components/PrimaryButton";
import TraderCardChart from "./TraderCardChart";
import Link from "next/link";

const TraderCard = () => {
  return (
    <Link href={`/traders/0xabcdefghijklmnop`}>
      <div className="w-full p-4 rounded-md bg-black-200 flex flex-col items-center justify-center gap-4 cursor-pointer border-2 border-transparent hover:border-black-500 transition-all duration-300">
        <div className="w-full flex justify-start items-center gap-2">
          <Avatar
            size={40}
            name="Harsh"
            variant="beam"
            colors={["#96ceb4", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <p className="text-black-800 text-sm">0x1234...56789</p>
          <div className="w-px h-5 bg-black-500" />
          <Image
            src="/assets/images/platforms/bluefin.png"
            alt="bluefin"
            width={14}
            height={14}
          />
          <Image
            src="/assets/images/star.svg"
            alt="Favourite"
            className="ml-auto cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src="/assets/images/chevron.svg"
            alt="Favourite"
            className="cursor-pointer -rotate-90"
            width={24}
            height={24}
          />
        </div>
        <div className="w-full -mt-8 -mb-5">
          <TraderCardChart />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex flex-col items-start justify-center">
            <p className="text-sm text-black-800">30D PnL($)</p>
            <p className="text-base text-green-300">$30,511</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-sm text-black-800">30D ROI(%)</p>
            <p className="text-base text-green-300">+37.89%</p>
          </div>
          <div className="w-full flex flex-col items-end justify-center">
            <p className="text-sm text-black-800">Win/Trades</p>
            <p className="text-base text-black-900">9/12</p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <PrimaryButton className="max-w-[180px]">
            <p className="text-sm text-black-900">View All Trades</p>
          </PrimaryButton>
          <p className="text-sm text-blue-400">Backtest</p>
        </div>
      </div>
    </Link>
  );
};

export default TraderCard;
