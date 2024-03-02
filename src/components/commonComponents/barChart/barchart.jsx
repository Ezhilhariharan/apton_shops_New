import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Barchart({
  data,
  children,
  dataKey,
  yaxis,
  toolTipStyle,
  LegendStyle,
  height,
  onClick,
  isHaveTooltip = true,
  isHaveCustomLegend,
  isVertical,
  isHorizontal,
  layout,
  legendWrapper,
  xAxisTick,
  yAxisTick,
  xAxisLine,
  yAxisLine,
  responsiveHeight = '100%',
  ...rest
}) {
  return (
    <ResponsiveContainer
      width='100%'
      height={responsiveHeight}>
      <BarChart
        width={500}
        height={200}
        data={data}
        margin={{
          right: 10,
          left: -20,
          bottom: 10,
        }}
        onClick={onClick}
        yaxis={yaxis}
        layout={layout}
        {...rest}>
        <CartesianGrid
          strokeDasharray='3 3'
          horizontal={!isHorizontal}
          vertical={!isVertical}
        />
        <>
          <XAxis
            stroke='var(--channelToggleSwitch)'
            style={{
              fontSize: '10',
              fontWeight: '500',
            }}
            axisLine={xAxisLine}
            dataKey='name'
            tick={xAxisTick}
          />
          <YAxis
            stroke='var(--channelToggleSwitch)'
            style={{
              fontSize: '10',
              fontWeight: '500',
            }}
            axisLine={yAxisLine}
            tick={yAxisTick}
          />
        </>

        {children ||
          dataKey?.map((e, i) => {
            return (
              <Bar
                key={i}
                className='cursor-pointer'
                dataKey={e.name}
                stackId='a'
                fill={e.color}
                onClick={(xAxisInfo) => {
                  onClick(xAxisInfo);
                }}
              />
            );
          })}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Barchart;
