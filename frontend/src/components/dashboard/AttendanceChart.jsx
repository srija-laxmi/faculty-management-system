import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Present", "Absent", "Leave"],
  datasets: [
    {
      data: [82, 10, 8],
      backgroundColor: [
        "#7c3aed",
        "#ef4444",
        "#f59e0b",
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export default function AttendanceChart() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-slate-900">
      <h2 className="mb-5 text-xl font-semibold">
        Attendance Overview
      </h2>

      <div className="h-80">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}