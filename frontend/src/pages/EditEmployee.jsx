import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

import {
  useNotifications
} from "../context/NotificationContext";

function EditEmployee() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { addNotification } =
    useNotifications();

  const [employee, setEmployee] =
    useState({

      name: "",
      email: "",
      department: "",
      designation: "",
      salary: ""

    });

  useEffect(() => {

    const fetchEmployee = async () => {

      try {

        const response =
          await API.get(
            `/employees/${id}`
          );

        setEmployee(
          response.data
        );

      } catch (error) {

        console.log(error);

      }

    };

    fetchEmployee();

  }, [id]);

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

        await API.put(

          `/employees/${id}`,

          {

            name:
              employee.name,

            email:
              employee.email,

            department:
              employee.department,

            designation:
              employee.designation,

            salary:
              Number(
                employee.salary
              )

          }

        );

        addNotification(

          `Employee ${employee.name} Updated Successfully`

        );

        alert(
          "Employee Updated Successfully"
        );

        navigate(
          "/employees"
        );

      }

      catch (error) {

        console.log(error);

        alert(
          "Unable To Update Employee"
        );

      }

    };

  return (

    <MainLayout>

      <div className="employee-form-page">

        <div className="hero-banner">

          <h1>
            Edit Employee
          </h1>

          <p>

            Update employee
            information and
            save changes to
            the database.

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
                  value={
                    employee.name
                  }
                  onChange={
                    handleChange
                  }
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
                  value={
                    employee.email
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Department
                </label>

                <input
                  type="text"
                  name="department"
                  value={
                    employee.department
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Designation
                </label>

                <input
                  type="text"
                  name="designation"
                  value={
                    employee.designation
                  }
                  onChange={
                    handleChange
                  }
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
                  value={
                    employee.salary
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>

            </div>

            <div className="form-submit">

              <button
                type="submit"
                className="btn"
              >

                Update Employee

              </button>

            </div>

          </form>

        </div>

      </div>

    </MainLayout>

  );

}

export default EditEmployee;