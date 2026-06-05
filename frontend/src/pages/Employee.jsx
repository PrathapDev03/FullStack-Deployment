import MainLayout from "../layouts/MainLayout";
import EmployeeTable from "../components/EmployeeTable";

function Employee() {
  return (
    <MainLayout>

      <div>

        <h1 className="page-title">
          Employee Management
        </h1>

        <div className="card">

          <p className="page-description">
            Manage employee records, departments,
            salary information and workforce data.
          </p>

        </div>

        <br />

        <EmployeeTable />

      </div>

    </MainLayout>
  );
}

export default Employee;