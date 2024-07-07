import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartProps } from "../types";

ChartJS.register(
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { display: false },
    y: { display: false },
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  elements: {
    line: { tension: 0.4 },
  },
};

const ChartComponent: React.FC<ChartProps> = ({
  sparklineData,
  sparklineColor,
}) => {
  const data = {
    labels: sparklineData.map((_: any, index: number) => index.toString()),
    datasets: [
      {
        data: sparklineData,
        borderColor: sparklineColor,
        fill: false,
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="w-24 h-8">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
