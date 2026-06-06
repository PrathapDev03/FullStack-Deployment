import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function SalaryChart() {

  const data = [

    {
      department: "AI",
      salary: 700000
    },

    {
      department: "Cloud",
      salary: 850000
    },

    {
      department: "Development",
      salary: 650000
    },

    {
      department: "HR",
      salary: 900000
    }

  ];

  return (

    <div
      style={{
        width: "100%",
        height: "350px"
      }}
    >

      <ResponsiveContainer>

        <BarChart
          data={data}
        >

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="department"
          />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="salary"
            radius={[10,10,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default SalaryChart;