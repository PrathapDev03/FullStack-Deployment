import MainLayout from "../layouts/MainLayout";
import KPICards from "../components/KPICards";
import SalaryChart from "../components/SalaryChart";

function Dashboard() {
  return (
    <MainLayout>

      <div>

        <h1 className="page-title">
          Dashboard Overview
        </h1>

        <KPICards />

        <div className="dashboard-grid">

          <div className="dashboard-chart">
            <SalaryChart />
          </div>

          <div className="card">

            <h3>Recent Activities</h3>

            <div className="activity-list">

              <div className="activity-item">
                <span className="activity-dot green"></span>
                Employee Added - Rahul Kumar
              </div>

              <div className="activity-item">
                <span className="activity-dot blue"></span>
                Salary Updated - Data Team
              </div>

              <div className="activity-item">
                <span className="activity-dot orange"></span>
                New Visitor Registered
              </div>

              <div className="activity-item">
                <span className="activity-dot red"></span>
                Department Created - AI Team
              </div>

            </div>

          </div>

        </div>

        <div className="card dashboard-summary">

          <h3>Company Summary</h3>

          <p>
            Employee Management Portal helps HR teams manage
            employee records, visitor registrations, salary
            insights and department analytics through a
            centralized dashboard.
          </p>

        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;