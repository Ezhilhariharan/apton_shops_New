import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomLineChart = ({
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
  graphLabel,
  responsiveHeight = "100%",
  ...rest
}) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className=" w-auto h-auto px-3 py-2 rounded-xl flex-column justify-center items-center bg-white">
          <p className="w-full flex-row flex-center">
            <div className="my-auto h-2 w-2 bg-[var(--TextPrimary)] rounded-full mr-2"></div>
            <div className="mb-[1px] text-[10px]">{payload[0].value}</div>
          </p>
          <div className="text-[10px] text-[var(--channelToggleSwitch)]">
            {graphLabel}
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          left: -20,
          right: 10,
          bottom: 10,
        }}
        onClick={onClick}
        yaxis={yaxis}
        layout={layout}
        {...rest}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          stroke="var(--channelToggleSwitch)"
          style={{
            fontSize: "10",
            fontWeight: "500",
          }}
          axisLine={xAxisLine}
          dataKey="name"
          tick={xAxisTick}
        />
        <YAxis
          stroke="var(--channelToggleSwitch)"
          style={{
            fontSize: "10",
            fontWeight: "500",
          }}
          axisLine={yAxisLine}
          tick={yAxisTick}
        />
        {isHaveTooltip && <Tooltip content={<CustomTooltip />} />}

        {children}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
