import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const options = {};
  const labels = [1, 2, 3, 4];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [15, 79, 40, 71],
        fill: true,
        borderColor: "#0190FF",
        tension: 0.5,
        spanGaps: true,
        borderWidth: 5,
      },
      {
        label: "My First Dataset",
        data: [65, 19, 80, 81],
        fill: true,
        borderColor: "#03EBF6",
        tension: 0.5,
        spanGaps: true,
        borderWidth: 5,
        pointHoverBorderWidth: 8,
      },
      {
        label: "My First Dataset",
        data: [55, 79, 30, 51],
        fill: true,
        borderColor: "#FFE500",
        tension: 0.5,
        spanGaps: true,
        borderWidth: 5,
      },
      {
        label: "My First Dataset",
        data: [45, 39, 10, 51],
        fill: true,
        borderColor: "#01FB8C",
        tension: 0.5,
        spanGaps: true,
        borderWidth: 5,
      },
    ],
  };
  return (
    <div className="chart-container">
      <Line options={options} data={data} />;
    </div>
  );
};

export default LineChart;
