import { Link } from "react-router-dom";

function EmployeeTable() {
  const employees = [
    {
      id: 101,
      firstName: "Prathap",
      lastName: "B D",
      designation: "Data Scientist",
      salary: 700000,
      department: "AI"
    },
    {
      id: 102,
      firstName: "Rahul",
      lastName: "Kumar",
      designation: "Python Developer",
      salary: 650000,
      department: "Development"
    },
    {
      id: 103,
      firstName: "Sneha",
      lastName: "Sharma",
      designation: "HR Manager",
      salary: 900000,
      department: "HR"
    },
    {
      id: 104,
      firstName: "Kiran",
      lastName: "Patil",
      designation: "DevOps Engineer",
      salary: 850000,
      department: "Cloud"
    }
  ];

  return (
    <div className="card">

      <div className="table-header">

        <h2>Employee Management</h2>

        <Link
          to="/employees/add"
          className="btn"
        >
          Add Employee
        </Link>

      </div>

      <div className="table-search">

        <input
          type="text"
          placeholder="Search Employee..."
          className="search-box"
        />

      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>

              <td>
                {emp.firstName} {emp.lastName}
              </td>

              <td>{emp.department}</td>

              <td>{emp.designation}</td>

              <td>
                ₹ {emp.salary.toLocaleString()}
              </td>

              <td>

                <Link
                  to={`/employees/edit/${emp.id}`}
                  className="edit-btn"
                >
                  Edit
                </Link>

                <button className="delete-btn">
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;