"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function IndividualTradersModule() {
  const pathname = usePathname();
  const address = pathname.split("/").pop();

  return <div className="text-black-900">Hello Trader Address: {address}</div>;
}
