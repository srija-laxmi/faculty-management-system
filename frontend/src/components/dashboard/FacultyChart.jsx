import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Faculty Growth",
      data: [78, 85, 92, 105, 118, 142],
      borderColor: "#7c3aed",
      backgroundColor: "rgba(124,58,237,.15)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "#7c3aed",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    y: {
      grid: {
        color: "#e5e7eb",
      },
    },

    x: {
      grid: {
        display: false,
      },
    },
  },
};

export default function FacultyChart() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-slate-900">
      <h2 className="mb-5 text-xl font-semibold">
        Faculty Growth
      </h2>

      <div className="h-80">
        <Line
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}