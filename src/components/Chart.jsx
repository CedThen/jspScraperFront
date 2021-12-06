import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { extractTimeLabels, splitRunes } from '../services/helperFx'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

function Chart({ data, chartedRune, }) {
  const d = splitRunes(data)
  const labels = extractTimeLabels(data).reverse()
  const chartData = {
    labels,
    datasets: [
      {
        label: chartedRune,
        data: d[chartedRune].reverse(),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }
  return (
    // <div height="100%" width="100%">
    <Line data={chartData} options={options} />
    // </div >);
  )
}

export default Chart