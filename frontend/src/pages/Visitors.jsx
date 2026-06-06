import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import VisitorTable from "../components/VisitorTable";
import API from "../services/api";

function Visitors() {

  const [metrics, setMetrics] =
    useState({

      employees: 0,
      visitors: 0,
      departments: 0,
      avg_salary: 0

    });

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard =
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

      <div className="visitors-dashboard">

        <div className="hero-banner">

          <h1>
            Visitor Management Center
          </h1>

          <p>

            Monitor visitor registrations,
            office visits and visitor records
            directly from database.

          </p>

        </div>

        <div className="workforce-summary">

          <div className="summary-card">

            <h3>
              Total Visitors
            </h3>

            <h2>
              {metrics.visitors}
            </h2>

          </div>

          <div className="summary-card">

            <h3>
              Total Employees
            </h3>

            <h2>
              {metrics.employees}
            </h2>

          </div>

          <div className="summary-card">

            <h3>
              Departments
            </h3>

            <h2>
              {metrics.departments}
            </h2>

          </div>

          <div className="summary-card">

            <h3>
              System Status
            </h3>

            <h2>
              Active
            </h2>

          </div>

        </div>

        <div className="dashboard-row">

          <div className="dashboard-card">

            <h2>
              Visitor Statistics
            </h2>

            <div className="stats-list">

              <div className="stat-row">

                <span>
                  Registered Visitors
                </span>

                <strong>
                  {metrics.visitors}
                </strong>

              </div>

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

          <div className="dashboard-card">

            <h2>
              Visitor Activity
            </h2>

            <div className="activity-feed">

              <div className="activity-item">
                Visitor records synchronized
              </div>

              <div className="activity-item">
                MySQL connection active
              </div>

              <div className="activity-item">
                Backend API connected
              </div>

              <div className="activity-item">
                Visitor dashboard online
              </div>

            </div>

          </div>

        </div>

        <div
          style={{
            marginTop: "25px"
          }}
        >

          <VisitorTable />

        </div>

      </div>

    </MainLayout>

  );

}

export default Visitors;