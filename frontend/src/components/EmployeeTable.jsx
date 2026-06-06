import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function EmployeeTable() {

  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {

    try {

      const response =
        await API.get("/employees");

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const deleteEmployee = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this employee?"
      );

    if (!confirmDelete) return;

    try {

      await API.delete(
        `/employees/${id}`
      );

      fetchEmployees();

    } catch (error) {

      console.log(error);

      alert(
        "Unable to delete employee"
      );

    }

  };

  const filteredEmployees =
    employees.filter((employee) =>
      employee.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  return (

    <>

      <div className="employee-directory-header">

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

      <div className="employee-search-box">

        <input
          type="text"
          placeholder="Search employee by name..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="employee-grid-v2">

        {

          filteredEmployees.length > 0

            ? filteredEmployees.map(
                (employee) => (

                  <div
                    className="employee-card-v2"
                    key={employee.id}
                  >

                    <div className="employee-card-top">

                      <div className="employee-avatar">

                        {
                          employee.name
                            ?.charAt(0)
                            .toUpperCase()
                        }

                      </div>

                      <div>

                        <h3>
                          {employee.name}
                        </h3>

                        <p>
                          {employee.designation}
                        </p>

                      </div>

                    </div>

                    <div className="employee-details">

                      <div>

                        <span>
                          Email
                        </span>

                        <strong>
                          {employee.email}
                        </strong>

                      </div>

                      <div>

                        <span>
                          Department
                        </span>

                        <strong>
                          {employee.department}
                        </strong>

                      </div>

                      <div>

                        <span>
                          Salary
                        </span>

                        <strong>

                          ₹

                          {Number(
                            employee.salary
                          ).toLocaleString()}

                        </strong>

                      </div>

                    </div>

                    <div
                      className="
                      employee-actions-v2
                      "
                    >

                      <button
                        className="
                        edit-btn
                        "
                        onClick={() =>
                          navigate(
                            `/employees/edit/${employee.id}`
                          )
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="
                        delete-btn
                        "
                        onClick={() =>
                          deleteEmployee(
                            employee.id
                          )
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                )
              )

            : (

              <div
                className="
                dashboard-card
                "
              >

                <h3>
                  No Employees Found
                </h3>

                <p>
                  Add your first employee.
                </p>

              </div>

            )

        }

      </div>

    </>

  );

}

export default EmployeeTable;