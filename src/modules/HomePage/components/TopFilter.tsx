"use client";

import React, { useState } from "react";
import DropdownComponent from "../../../components/Dropdown";

const TopFilter = () => {
  const [topFilter, setTopFilter] = useState("PnL");

  return (
    <DropdownComponent
      title={<p className="text-xl text-blue-200">{topFilter}</p>}
      menuItems={[
        {
          label: (
            <p
              className={`text-sm ${topFilter === "PnL" ? "text-blue-200" : "text-black-800"}`}
              onClick={() => setTopFilter("PnL")}
            >
              PnL
            </p>
          ),
          key: 0,
        },
        {
          label: (
            <p
              className={`text-sm ${topFilter === "Win Rate" ? "text-blue-200" : "text-black-800"}`}
              onClick={() => setTopFilter("Win Rate")}
            >
              Win Rate
            </p>
          ),
          key: 1,
        },
        {
          label: (
            <p
              className={`text-sm ${topFilter === "Avg. ROI" ? "text-blue-200" : "text-black-800"}`}
              onClick={() => setTopFilter("Avg. ROI")}
            >
              Avg. ROI
            </p>
          ),
          key: 2,
        },
      ]}
    />
  );
};

export default TopFilter;