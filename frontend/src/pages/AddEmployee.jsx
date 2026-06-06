import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useNotifications } from "../context/NotificationContext";
import API from "../services/api";

function AddEmployee() {

  const navigate = useNavigate();

  const { addNotification } =
    useNotifications();

  const [employee, setEmployee] =
    useState({

      name: "",
      email: "",
      department: "",
      role: "",
      salary: ""

    });

  const handleChange = (e) => {

    setEmployee({

      ...employee,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await API.post(

          "/employees",

          {

            name:
              employee.name,

            email:
              employee.email,

            department:
              employee.department,

            designation:
              employee.role,

            salary:
              Number(
                employee.salary
              )

          }

        );

        addNotification(

          `Employee ${employee.name} Added Successfully`

        );

        alert(
          "Employee Added Successfully"
        );

        navigate(
          "/employees"
        );

      }

      catch (error) {

        console.error(error);

        alert(
          "Failed to Add Employee"
        );

      }

    };

  return (

    <MainLayout>

      <div className="employee-form-page">

        <div className="hero-banner">

          <h1>
            Add Employee
          </h1>

          <p>
            Create a new employee
            and save to database.
          </p>

        </div>

        <div className="form-card">

          <h2>
            Employee Information
          </h2>

          <form
            onSubmit={
              handleSubmit
            }
          >

            <div className="form-grid">

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={employee.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={employee.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Department
                </label>

                <select
                  name="department"
                  value={employee.department}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Department
                  </option>

                  <option>
                    AI Team
                  </option>

                  <option>
                    Cloud Team
                  </option>

                  <option>
                    HR Team
                  </option>

                  <option>
                    DevOps Team
                  </option>

                </select>

              </div>

              <div className="form-group">

                <label>
                  Designation
                </label>

                <input
                  type="text"
                  name="role"
                  value={employee.role}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Salary
                </label>

                <input
                  type="number"
                  name="salary"
                  value={employee.salary}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            <div className="form-submit">

              <button
                type="submit"
                className="btn"
              >

                Save Employee

              </button>

            </div>

          </form>

        </div>

      </div>

    </MainLayout>

  );

}

export default AddEmployee;