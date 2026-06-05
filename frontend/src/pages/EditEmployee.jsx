import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function EditEmployee() {

  const [employee, setEmployee] = useState({
    employeeId: "101",
    firstName: "Prathap",
    lastName: "B D",
    email: "prathap@gmail.com",
    phone: "9876543210",
    department: "AI",
    designation: "Data Scientist",
    salary: "700000"
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(employee);

    alert("Employee Updated Successfully");
  };

  return (
    <MainLayout>

      <h1 className="page-title">
        Edit Employee
      </h1>

      <div className="card employee-form-card">

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>Employee ID</label>
              <input
                type="number"
                name="employeeId"
                value={employee.employeeId}
                disabled
              />
            </div>

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={employee.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={employee.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={employee.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                name="department"
                value={employee.department}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Designation</label>
              <input
                type="text"
                name="designation"
                value={employee.designation}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Salary</label>
              <input
                type="number"
                name="salary"
                value={employee.salary}
                onChange={handleChange}
              />
            </div>

          </div>

          <button
            type="submit"
            className="btn"
          >
            Update Employee
          </button>

        </form>

      </div>

    </MainLayout>
  );
}

export default EditEmployee;