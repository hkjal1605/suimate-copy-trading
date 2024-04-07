import React from "react";
import TopFilter from "./TopFilter";
import Image from "next/image";
import { OrderTradersBy } from "../types/orderTradersBy";

interface IPropType {
  topFilter: OrderTradersBy;
  setTopFilter: (topFilter: OrderTradersBy) => void;
}

const IntroFilter = (props: IPropType) => {
  const { topFilter, setTopFilter } = props;

  return (
    <div className="flex w-full justify-start items-center py-4 gap-2">
      <p className="text-xl text-black-1000">Copy on-chain traders with</p>
      <TopFilter topFilter={topFilter} setTopFilter={setTopFilter} />
      <p className="text-xl text-black-1000 mr-1.5">trading on</p>
      <div className="flex items-center justify-start">
        <Image
          src="/assets/images/platforms/bluefin.png"
          alt="bluefin"
          width={20}
          height={20}
        />
        <p className="text-xl text-blue-200 ml-1.5">Bluefin</p>
      </div>
    </div>
  );
};

export default IntroFilter;
