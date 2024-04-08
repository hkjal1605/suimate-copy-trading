const MarketsData: Record<string, {
  symbol: string;
  perpetualAddress: {
    id: string;
    owner: string;
    dataType: string;
  };
  imgSrc: string;
}> = {
  '0x18a2f1a773b66b1d568cfa56cadbc9bfe91a1a16a09c7338897273a60a293a4b': {
    symbol: 'MATIC-PERP',
    perpetualAddress: {
      id: '0x18a2f1a773b66b1d568cfa56cadbc9bfe91a1a16a09c7338897273a60a293a4b',
      owner: 'Shared',
      dataType: 'Perpetual'
    },
    imgSrc: "/assets/images/markets/matic.svg"
  },
  '0x876905808eefa9104ae3b569cd21d364346da791f1638aab5d4f89af53b8baec': {
    symbol: 'SOL-PERP',
    perpetualAddress: {
      id: '0x876905808eefa9104ae3b569cd21d364346da791f1638aab5d4f89af53b8baec',
      owner: 'Shared',
      dataType: 'Perpetual'
    },
    imgSrc: "/assets/images/markets/sol.svg"
  },
  '0xcf84b2b99a65fd595e8bf03a9dc16c7002533ebdbc3ad035f9863594a9b356a1': {
    symbol: 'SEI-PERP',
    perpetualAddress: {
      id: '0xcf84b2b99a65fd595e8bf03a9dc16c7002533ebdbc3ad035f9863594a9b356a1',
      owner: 'Shared',
      dataType: 'Perpetual'
    },
    imgSrc: "/assets/images/markets/sei.svg"
  },
  '0x69021f4991ac18fdbfc6b07914835811236008a797a51a56a6948ff3474bc8f6': {
    symbol: 'TIA-PERP',
    perpetualAddress: {
      id: '0x69021f4991ac18fdbfc6b07914835811236008a797a51a56a6948ff3474bc8f6',
      owner: 'Shared',
      dataType: 'Perpetual'
    },
    imgSrc: "/assets/images/markets/tia.svg"
  },
  '0xdade62fa7a4b4f1eac97c76d61e70b68c91d3c60ce399c7f741dee43e8d93167': {
    symbol: 'SUI-PERP',
    perpetualAddress: {
      id: '0xdade62fa7a4b4f1eac97c76d61e70b68c91d3c60ce399c7f741dee43e8d93167',
      owner: 'Shared',
      dataType: 'Perpetual'
    },
    imgSrc: "/assets/images/markets/sui.svg"
  },
  '0x38d43822f621968460a642f47db2c5a20b3d59826c6dd34811c78ba3866cc2d1': {
    symbol: 'BTC-PERP',
    perpetualAddress: {
      id: '0x38d43822f621968460a642f47db2c5a20b3d59826c6dd34811c78ba3866cc2d1',
      owner: 'Shared',
      dataType: 'Perpetual'
    },
    imgSrc: "/assets/images/markets/btc.svg"
  },
  '0x1563fe1b1eda2b2427fa33d683c60464cc3a8912c0f9a9836fb6c3fd30810d0e': {
    symbol: 'AVAX-PERP',
    perpetualAddress: {
      id: '0x1563fe1b1eda2b2427fa33d683c60464cc3a8912c0f9a9836fb6c3fd30810d0e',
      owner: 'Shared',
      dataType: 'Perpetual'
    },
    imgSrc: "/assets/images/markets/avax.svg"
  },
  '0x30b7baece69ecd1b1bea5c965f22e52ffbb3dd28b15b79449971945b2687fc35': {
    symbol: 'ETH-PERP',
    perpetualAddress: {
      id: '0x30b7baece69ecd1b1bea5c965f22e52ffbb3dd28b15b79449971945b2687fc35',
      owner: 'Shared',
      dataType: 'Perpetual'
    },
    imgSrc: "/assets/images/markets/eth.svg"
  },
  '0x2da0b91d57ba9e0877ec0b93da18902e627be687e909df7c2e5111f3b34e27ab': {
    symbol: 'ARB-PERP',
    perpetualAddress: {
      id: '0x2da0b91d57ba9e0877ec0b93da18902e627be687e909df7c2e5111f3b34e27ab',
      owner: 'Shared',
      dataType: 'Perpetual'
    },
    imgSrc: "/assets/images/markets/arb.svg"
  },
  '0xd9a014692e3002d196107d5c58657c451ae7f8d00ebd61d45b71fd9a98cabff4': {
    symbol: 'APT-PERP',
    perpetualAddress: {
      id: '0xd9a014692e3002d196107d5c58657c451ae7f8d00ebd61d45b71fd9a98cabff4',
      owner: 'Shared',
      dataType: 'Perpetual'
    },
    imgSrc: "/assets/images/markets/apt.svg"
  }
};

export default MarketsData;