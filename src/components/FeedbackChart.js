import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

const FeedbackChart = ({ data }) => {
  const chartRef = useRef(null);

  const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(0, 122, 204, 0.1)');
    gradient.addColorStop(1, 'rgba(0, 122, 204, 0.4)');
    return gradient;
  };

  const chartData = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Feedback Score',
        data: data,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          return getGradient(ctx, chartArea);
        },
        borderColor: '#007acc',
        tension: 0.3,
        pointBackgroundColor: '#007acc',
      }
    ]
  };

  return <Line ref={chartRef} data={chartData} />;
};

export default FeedbackChart;
