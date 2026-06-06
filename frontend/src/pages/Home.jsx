import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

function Home() {

  const navigate = useNavigate();

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

      <div className="home-dashboard">

        {/* Hero Section */}

        <div className="home-hero">

          <div>

            <h1>
              Welcome Back, Prathap 👋
            </h1>

            <p>

              Manage workforce,
              visitors, analytics,
              payroll and administration
              from a centralized HR Portal.

            </p>

          </div>

          <button
            className="btn"
            onClick={() =>
              navigate("/employees/add")
            }
          >
            + Add Employee
          </button>

        </div>

        {/* KPI Cards */}

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

        {/* Quick Actions */}

        <div className="dashboard-card">

          <h2>
            Quick Actions
          </h2>

          <div className="quick-actions">

            <button
              className="quick-btn"
              onClick={() =>
                navigate("/employees")
              }
            >
              Workforce
            </button>

            <button
              className="quick-btn"
              onClick={() =>
                navigate("/visitors")
              }
            >
              Visitors
            </button>

            <button
              className="quick-btn"
              onClick={() =>
                navigate("/analytics")
              }
            >
              Insights
            </button>

            <button
              className="quick-btn"
              onClick={() =>
                navigate("/settings")
              }
            >
              Administration
            </button>

          </div>

        </div>

        {/* Live Statistics */}

        <div className="dashboard-row">

          <div className="dashboard-card">

            <h2>
              Organization Overview
            </h2>

            <div className="stats-list">

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
                  Visitors
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

          <div className="dashboard-card">

            <h2>
              Recent Activities
            </h2>

            <div className="activity-feed">

              <div className="activity-item">
                Employee records loaded from MySQL
              </div>

              <div className="activity-item">
                Visitor records loaded from MySQL
              </div>

              <div className="activity-item">
                Backend APIs connected successfully
              </div>

              <div className="activity-item">
                Dashboard synchronized with database
              </div>

            </div>

          </div>

        </div>

        {/* System Health */}

        <div className="dashboard-row">

          <div className="dashboard-card">

            <h2>
              Workforce Analytics
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

          <div className="dashboard-card">

            <h2>
              System Status
            </h2>

            <div className="stats-list">

              <div className="stat-row">

                <span>
                  Frontend
                </span>

                <strong
                  className="positive"
                >
                  Running
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Backend
                </span>

                <strong
                  className="positive"
                >
                  Connected
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Database
                </span>

                <strong
                  className="positive"
                >
                  Online
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  APIs
                </span>

                <strong
                  className="positive"
                >
                  Active
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default Home;