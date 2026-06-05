import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SalaryChart() {

  const data = {
    labels: [
      "Developer",
      "Tester",
      "Manager",
      "Data Scientist",
      "DevOps"
    ],

    datasets: [
      {
        label: "Average Salary",
        data: [
          700000,
          500000,
          1200000,
          900000,
          800000
        ],

        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6"
        ]
      }
    ]
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top"
      }
    }
  };

  return (
    <div className="card">

      <h3>Salary Distribution</h3>

      <Bar
        data={data}
        options={options}
      />

    </div>
  );
}

export default SalaryChart;