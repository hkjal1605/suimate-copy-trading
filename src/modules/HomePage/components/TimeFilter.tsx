"use client";

import React, { useState } from "react";
import DropdownComponent from "../../../components/Dropdown";

const TimeFilter = () => {
  const [timeFilter, setTimeFilter] = useState("30 days");

  return (
    <DropdownComponent
      title={<p className="text-xl text-blue-200">{timeFilter}</p>}
      menuItems={[
        {
          label: (
            <p
              className={`text-sm ${timeFilter === "30 days" ? "text-blue-200" : "text-black-800"}`}
              onClick={() => setTimeFilter("30 days")}
            >
              30 days
            </p>
          ),
          key: 0,
        },
        {
          label: (
            <p
              className={`text-sm ${timeFilter === "7 days" ? "text-blue-200" : "text-black-800"}`}
              onClick={() => setTimeFilter("7 days")}
            >
              7 days
            </p>
          ),
          key: 1,
        },
        {
          label: (
            <p
              className={`text-sm ${timeFilter === "1 day" ? "text-blue-200" : "text-black-800"}`}
              onClick={() => setTimeFilter("1 day")}
            >
              1 day
            </p>
          ),
          key: 2,
        },
      ]}
    />
  );
};

export default TimeFilter;