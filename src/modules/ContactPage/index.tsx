import Image from "next/image";
import React from "react";

const ContactPageModule = () => {
  return (
    <div className="w-full min-h-[calc(100vh-115px)] flex items-center justify-center flex-col gap-4">
      <p className="text-3xl font-semibold text-black-900">
        Hello, I am Harsh Kumar Jha
      </p>
      <p className="text-3xl font-semibold text-black-900 text-center">
        I have been building on Sui and Aptos since early 2022. I was the founding engineer at Martian Wallet
      </p>
      <p className="text-3xl font-semibold text-black-900">
        I am building this platform for the ThinkSui hackathon
      </p>
      <p className="text-3xl font-semibold text-black-900">
        And I am looking for a founding team to take this forward into a big
        project in the Sui defi space
      </p>
      <p className="text-3xl font-semibold text-black-900">
        Ping me up on Telegram or X if you are interested
      </p>
      <div className="flex w-full justify-center items-center gap-8">
        <a
          href="https://t.me/me_hkj"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/assets/images/social/telegram.svg"
            alt="Telegram"
            height={60}
            width={60}
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
            height={60}
            width={60}
            className="rounded-full"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactPageModule;
