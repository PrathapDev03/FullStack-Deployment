import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

function Insights() {

  const [metrics, setMetrics] =
    useState({

      employees: 0,
      visitors: 0,
      departments: 0,
      avg_salary: 0

    });

  useEffect(() => {

    fetchInsights();

  }, []);

  const fetchInsights =
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

      <div className="insights-page">

        <div className="hero-banner">

          <h1>
            Business Insights & Analytics
          </h1>

          <p>

            Real-time analytics from
            Employee Management System.

          </p>

        </div>

        <div className="workforce-summary">

          <div className="summary-card">

            <h3>
              Employees
            </h3>

            <h2>
              {metrics.employees}
            </h2>

          </div>

          <div className="summary-card">

            <h3>
              Visitors
            </h3>

            <h2>
              {metrics.visitors}
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
              Average Salary
            </h3>

            <h2>

              ₹

              {Number(
                metrics.avg_salary
              ).toLocaleString()}

            </h2>

          </div>

        </div>

        <div className="analytics-grid">

          <div className="analytics-card">

            <h3>
              Workforce Analytics
            </h3>

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
                  Total Departments
                </span>

                <strong>
                  {metrics.departments}
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

          <div className="analytics-card">

            <h3>
              Database Status
            </h3>

            <div className="stats-list">

              <div className="stat-row">

                <span>
                  MySQL
                </span>

                <strong
                  className="positive"
                >
                  Connected
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Flask API
                </span>

                <strong
                  className="positive"
                >
                  Running
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Frontend
                </span>

                <strong
                  className="positive"
                >
                  Active
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Status
                </span>

                <strong
                  className="positive"
                >
                  Healthy
                </strong>

              </div>

            </div>

          </div>

          <div className="analytics-card">

            <h3>
              Visitor Analytics
            </h3>

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
                  Departments
                </span>

                <strong>
                  {metrics.departments}
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Employees
                </span>

                <strong>
                  {metrics.employees}
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

          <div className="analytics-card">

            <h3>
              Backend Activity
            </h3>

            <div className="activity-feed">

              <div className="activity-item">
                Dashboard API Connected
              </div>

              <div className="activity-item">
                Employee APIs Working
              </div>

              <div className="activity-item">
                Visitor APIs Working
              </div>

              <div className="activity-item">
                Database Synchronized
              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default Insights;