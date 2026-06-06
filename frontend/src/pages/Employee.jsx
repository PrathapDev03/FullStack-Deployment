import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import EmployeeTable from "../components/EmployeeTable";
import API from "../services/api";

function Employee() {

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

      <div className="workforce-page">

        <div className="hero-banner">

          <h1>
            Workforce Management
          </h1>

          <p>

            Manage employee records,
            departments, salaries and
            workforce operations.

          </p>

        </div>

        <div className="workforce-summary">

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
              Visitors
            </h3>

            <h2>
              {metrics.visitors}
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

        <div className="page-action-bar">

          <div>

            <h2>
              Employee Directory
            </h2>

            <p>
              Search and manage employees
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

        <div className="dashboard-row">

          <div className="dashboard-card">

            <h2>
              Workforce Statistics
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
                  Departments
                </span>

                <strong>
                  {metrics.departments}
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
              Employee Insights
            </h2>

            <div className="activity-feed">

              <div className="activity-item">
                Employee records loaded from MySQL
              </div>

              <div className="activity-item">
                CRUD APIs connected successfully
              </div>

              <div className="activity-item">
                Workforce data synchronized
              </div>

              <div className="activity-item">
                Backend services active
              </div>

            </div>

          </div>

        </div>

        <EmployeeTable />

      </div>

    </MainLayout>

  );

}

export default Employee;