'use client';

import React from 'react';

import Image from 'next/image';

import DropdownComponent from '@/components/Dropdown';

const DexFilter = () => {
  return (
    <DropdownComponent
      title={
        <div className="flex items-center justify-start">
          <Image
            src="/assets/images/platforms/bluefin.png"
            alt="bluefin"
            width={14}
            height={14}
          />
          <p className="text-base text-blue-200 ml-1.5">Bluefin</p>
        </div>
      }
      menuItems={[
        {
          label: (
            <div className="flex items-center justify-start">
              <Image
                src="/assets/images/platforms/bluefin.png"
                alt="bluefin"
                width={12}
                height={12}
              />
              <p className="text-sm text-blue-200 ml-1.5">Bluefin</p>
            </div>
          ),
          key: 0
        },
        {
          label: (
            <p className="text-xs text-black-600">More DEXs coming soon</p>
          ),
          key: 1
        }
      ]}
    />
  );
};

export default DexFilter;
