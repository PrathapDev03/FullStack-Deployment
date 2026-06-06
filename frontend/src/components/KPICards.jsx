import { useEffect, useState } from "react";
import API from "../services/api";

function KPICards() {

  const [metrics, setMetrics] = useState({
    total_employees: 0,
    total_visitors: 0,
    total_departments: 0,
    average_salary: 0
  });

  useEffect(() => {

    fetchMetrics();

  }, []);

  const fetchMetrics = async () => {

    try {

      const response =
        await API.get("/dashboard");

      setMetrics({

        total_employees:
          response.data.employees || 0,

        total_visitors:
          response.data.visitors || 0,

        total_departments:
          response.data.departments || 0,

        average_salary:
          response.data.avg_salary || 0

      });

    }

    catch (error) {

      console.error(error);

    }

  };

  const cards = [

    {
      title: "Workforce",
      value: metrics.total_employees,
      color: "#2563eb"
    },

    {
      title: "Visitors",
      value: metrics.total_visitors,
      color: "#10b981"
    },

    {
      title: "Departments",
      value: metrics.total_departments,
      color: "#f59e0b"
    },

    {
      title: "Avg Payroll",
      value:
        "₹" +
        Number(
          metrics.average_salary
        ).toLocaleString(),
      color: "#ef4444"
    }

  ];

  return (

    <div className="kpi-grid">

      {

        cards.map((card, index) => (

          <div
            key={index}
            className="kpi-card"
            style={{
              borderTop:
                `5px solid ${card.color}`
            }}
          >

            <h4>
              {card.title}
            </h4>

            <h2>
              {card.value}
            </h2>

          </div>

        ))

      }

    </div>

  );

}

export default KPICards;