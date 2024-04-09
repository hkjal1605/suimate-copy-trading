'use client';
import CustomModal from '@/components/CustomModal';
import Image from 'next/image';
import React, { useState } from 'react';

const PrototypeInfoModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <CustomModal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
      <div className="flex w-full p-4 bg-black-200 border-[1px] border-black-400 rounded-lg flex-col items-start justify-center gap-3">
        <div className="flex justify-start items-center gap-1.5">
          <Image
            src="/assets/images/info-yellow.svg"
            alt="Info"
            width={18}
            height={18}
          />
          <p className="text-lg text-yellow-200 font-semibold">
            Important Information
          </p>
        </div>
        <p className="text-base text-black-800">
          This product is currently in very early stages of development. Some of
          the data shown here might not be accurate, and the platform will
          undergo a lot of changes in the coming days.
        </p>
        <p className="text-base text-black-800">
          I sincerely advise you to not use this platform to copy trade or get
          financial insights at the current time. I will soon be sharing about
          new developments on my X page.
        </p>
        <p className="text-base text-black-800">
          In the meantime, please do look around and let me know your thoughts,
          and what features are important to you as a trader. My DMs are always
          open for any feedback or if you want to join the team, I am still is
          very early stages of team formation.
        </p>
        <p className="text-base text-black-800">
          Ping me on the links below if you have any feedback, feature requests,
          or want to join the team as a contributor or investor.
        </p>
        <p className="text-base text-blue-200">
          Looking forward to building more awesome products in the Sui DeFi
          space
        </p>
        <div className="flex w-full justify-center items-center gap-5">
          <a
            href="https://t.me/me_hkj"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/assets/images/social/telegram.svg"
              alt="Telegram"
              height={50}
              width={50}
            />
          </a>
          <a
            href="https://twitter.com/hkj1605"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/assets/images/social/twitter.svg"
              alt="X"
              height={50}
              width={50}
              className="rounded-full"
            />
          </a>
          <a
            href="https://discordapp.com/channels/@me/682925280536428675"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/assets/images/social/discord.svg"
              alt="X"
              height={50}
              width={50}
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    </CustomModal>
  );
};

export default PrototypeInfoModal;
