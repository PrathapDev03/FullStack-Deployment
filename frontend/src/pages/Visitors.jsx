import MainLayout from "../layouts/MainLayout";
import VisitorTable from "../components/VisitorTable";

function Visitors() {
  return (
    <MainLayout>

      <div>

        <h1 className="page-title">
          Visitor Management
        </h1>

        <div className="card">

          <p className="page-description">
            Monitor visitor registrations, track visit history,
            and maintain visitor records across the organization.
          </p>

        </div>

        <br />

        <VisitorTable />

      </div>

    </MainLayout>
  );
}

export default Visitors;