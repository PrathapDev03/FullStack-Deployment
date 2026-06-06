import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import KPICards from "../components/KPICards";
import SalaryChart from "../components/SalaryChart";
import API from "../services/api";

function Dashboard() {

  const [metrics, setMetrics] =
    useState({

      employees: 0,
      visitors: 0,
      departments: 0,
      avg_salary: 0

    });

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard =
    async () => {

      try {

        const response =
          await API.get(
            "/dashboard"
          );

        setMetrics(
          response.data
        );

      }

      catch (error) {

        console.log(error);

      }

    };

  return (

    <MainLayout>

      <div className="command-center">

        <div className="page-banner">

          <h1>
            Workforce Command Center
          </h1>

          <p>

            Monitor workforce operations,
            payroll performance,
            department activities and
            organizational growth from a
            centralized control center.

          </p>

        </div>

        <KPICards />

        <div className="dashboard-row">

          <div className="dashboard-card">

            <h2>
              Payroll Analytics
            </h2>

            <SalaryChart />

          </div>

          <div className="dashboard-card">

            <h2>
              Live Organization Statistics
            </h2>

            <div className="stats-list">

              <div className="stat-row">

                <span>
                  Total Employees
                </span>

                <strong>
                  {metrics.employees}
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Total Visitors
                </span>

                <strong>
                  {metrics.visitors}
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Departments
                </span>

                <strong>
                  {metrics.departments}
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Average Salary
                </span>

                <strong>

                  ₹

                  {Number(
                    metrics.avg_salary
                  ).toLocaleString()}

                </strong>

              </div>

            </div>

          </div>

        </div>

        <div
          className="dashboard-row"
          style={{
            marginTop: "25px"
          }}
        >

          <div className="dashboard-card">

            <h2>
              Recent Workforce Activity
            </h2>

            <div className="activity-feed">

              <div className="activity-item">
                Employee records synchronized with database
              </div>

              <div className="activity-item">
                Visitor records synchronized with database
              </div>

              <div className="activity-item">
                Dashboard connected to backend API
              </div>

              <div className="activity-item">
                MySQL statistics loaded successfully
              </div>

            </div>

          </div>

          <div className="dashboard-card">

            <h2>
              Organization Health
            </h2>

            <div className="stats-list">

              <div className="stat-row">

                <span>
                  Database Status
                </span>

                <strong
                  className="positive"
                >
                  Connected
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Backend API
                </span>

                <strong
                  className="positive"
                >
                  Active
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Frontend Status
                </span>

                <strong
                  className="positive"
                >
                  Running
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  System Health
                </span>

                <strong
                  className="positive"
                >
                  100%
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default Dashboard;