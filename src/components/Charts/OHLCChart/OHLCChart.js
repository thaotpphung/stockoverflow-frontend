import React, { Component } from "react";

// ohlc chart
import { Chart } from "react-google-charts";
const data = [
  [
    {
      type: "string",
      id: "Date",
    },
    {
      type: "number",
      label: "Something",
    },
    {
      type: "number",
      label: "Something",
    },
    {
      type: "number",
      label: "Something",
    },
    {
      type: "number",
      label: "Something",
    },
  ],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
];

const OHLCChart = () => {
  return (
    <div>
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="400px"
        data={data}
      />
    </div>
  );
};

export default OHLCChart;
