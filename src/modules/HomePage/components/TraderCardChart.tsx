import React from 'react';

import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

function CustomClip({ ...props }) {
  return (
    <defs key="clips">
      <clipPath id="clip-path-1">
        <rect x="0" y={0} width="100%" height={props.scale.y(3)} />
      </clipPath>
      <clipPath id="clip-path-2">
        <rect x="0" y={props.scale.y(3)} width="100%" height="100%" />
      </clipPath>
    </defs>
  );
}

const TraderCardChart = () => {
  return (
    <VictoryChart height={180} padding={{ top: 35, bottom: 35 }}>
      <VictoryLine
        style={{
          data: {
            stroke: 'green',
            strokeWidth: 2,
            clipPath: 'url(#clip-path-1)'
          }
        }}
        interpolation="step"
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 2, y: 5 },
          { x: 3, y: 4 },
          { x: 4, y: 4 },
          { x: 5, y: 7 }
        ]}
      />
      <VictoryLine
        style={{
          data: {
            stroke: 'red',
            strokeWidth: 2,
            clipPath: 'url(#clip-path-2)'
          }
        }}
        interpolation="step"
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 2, y: 5 },
          { x: 3, y: 4 },
          { x: 4, y: 4 },
          { x: 5, y: 7 }
        ]}
      />
      <CustomClip />
      <VictoryAxis
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          tickLabels: { fill: 'transparent' }
        }}
      />
    </VictoryChart>
  );
};

export default TraderCardChart;
