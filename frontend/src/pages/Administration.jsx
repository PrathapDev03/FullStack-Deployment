import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Administration() {

  const [emailNotification, setEmailNotification] =
    useState(true);

  const [visitorNotification, setVisitorNotification] =
    useState(true);

  const [payrollNotification, setPayrollNotification] =
    useState(false);

  const [darkMode,setDarkMode] =
useState(

  localStorage.getItem(
    "darkMode"
  ) === "true"

);

const toggleTheme = () => {

  const newValue = !darkMode;

  setDarkMode(newValue);

  localStorage.setItem(
    "darkMode",
    newValue
  );

  if(newValue){

    document.body.classList.add(
      "dark-theme"
    );

  }
  else{

    document.body.classList.remove(
      "dark-theme"
    );

  }

};

  return (

    <MainLayout>

      <div className="admin-page">

        <div className="hero-banner">

          <h1>
            Administration Center
          </h1>

          <p>

            Manage platform settings,
            user preferences,
            notifications and
            application controls.

          </p>

        </div>

        <div className="admin-grid">

          {/* Profile */}

          <div className="admin-card">

            <h3>
              User Profile
            </h3>

            <div className="stats-list">

              <div className="stat-row">

                <span>
                  Full Name
                </span>

                <strong>
                  Prathap B D
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Role
                </span>

                <strong>
                  Administrator
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Department
                </span>

                <strong>
                  HR Operations
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Access Level
                </span>

                <strong>
                  Full Access
                </strong>

              </div>

            </div>

          </div>

          {/* Theme */}

          <div className="admin-card">

            <h3>
              Theme Settings
            </h3>

            <div className="setting-row">

              <span>
                Dark Mode
              </span>

              <div
                className={
                  darkMode
                    ? "switch active"
                    : "switch"
                }
                onClick={() =>
                  toggleTheme()
                }
              />
            </div>

            <div className="setting-row">

              <span>
                Compact Layout
              </span>

              <div className="switch active" />

            </div>

            <div className="setting-row">

              <span>
                Modern UI
              </span>

              <div className="switch active" />

            </div>

          </div>

          {/* Notifications */}

          <div className="admin-card">

            <h3>
              Notifications
            </h3>

            <div className="setting-row">

              <span>
                Email Alerts
              </span>

              <div
                className={
                  emailNotification
                    ? "switch active"
                    : "switch"
                }
                onClick={() =>
                  setEmailNotification(
                    !emailNotification
                  )
                }
              />

            </div>

            <div className="setting-row">

              <span>
                Visitor Alerts
              </span>

              <div
                className={
                  visitorNotification
                    ? "switch active"
                    : "switch"
                }
                onClick={() =>
                  setVisitorNotification(
                    !visitorNotification
                  )
                }
              />

            </div>

            <div className="setting-row">

              <span>
                Payroll Alerts
              </span>

              <div
                className={
                  payrollNotification
                    ? "switch active"
                    : "switch"
                }
                onClick={() =>
                  setPayrollNotification(
                    !payrollNotification
                  )
                }
              />

            </div>

          </div>

          {/* System */}

          <div className="admin-card">

            <h3>
              System Information
            </h3>

            <div className="stats-list">

              <div className="stat-row">

                <span>
                  Frontend
                </span>

                <strong>
                  React
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Backend
                </span>

                <strong>
                  Flask
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Database
                </span>

                <strong>
                  MySQL
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Version
                </span>

                <strong>
                  EmployeePro 2.0
                </strong>

              </div>

            </div>

          </div>

        </div>

        <div className="dashboard-card">

          <h2>
            Platform Overview
          </h2>

          <p
            style={{
              marginTop:"15px",
              lineHeight:"1.8"
            }}
          >

            EmployeePro is an
            enterprise HR management
            platform used to manage
            workforce records,
            visitors, payroll insights,
            organizational analytics
            and administration.

          </p>

        </div>

      </div>

    </MainLayout>

  );

}

export default Administration;