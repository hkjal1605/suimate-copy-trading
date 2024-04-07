import Image from "next/image";
import React from "react";

const ComingSoon = () => {
  return <div className="w-full flex flex-col items-center justify-center gap-5">
    <Image src="/assets/images/pie-chart.png" alt="Pie Chart" width={100} height={100} />
    <p className="text-black-900 text-lg font-medium">More Charts and Analysis</p>
    <p className="text-black-700 text-sm">Coming Soon</p>
  </div>
}

export default ComingSoon;