import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  useEffect(() => {

    document.body.classList.remove(
      "dark-theme"
    );

  }, []);

  const [formData, setFormData] =
    useState({

      name: "",
      email: "",
      password: "",
      confirmPassword: ""

    });

  const [error, setError] =
    useState("");

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (

      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword

    ) {

      setError(
        "Please fill all fields"
      );

      return;

    }

    if (

      formData.password !==
      formData.confirmPassword

    ) {

      setError(
        "Passwords do not match"
      );

      return;

    }

    try {

      const response =
        await API.post(
          "/register",
          {
            name:
              formData.name,
            email:
              formData.email,
            password:
              formData.password
          }
        );

      if (
        response.data.success
      ) {

        alert(
          "Registration Successful"
        );

        navigate("/login");

      }

      else {

        setError(
          response.data.message
        );

      }

    }

    catch (error) {

      console.log(error);

      setError(
        "Registration Failed"
      );

    }

  };

  return (

    <div className="login-page">

      <div className="login-container">

        <div className="login-left-panel">

          <div>

            <h1>
              EmployeePro
            </h1>

            <h2>
              Create Your Account
            </h2>

            <p>

              Register to access
              EmployeePro HR Portal.

              Manage employees,
              visitors, analytics
              and administration
              from one place.

            </p>

          </div>

          <div className="login-stats">

            <div className="login-stat-card">

              <h3>
                500+
              </h3>

              <p>
                Employees
              </p>

            </div>

            <div className="login-stat-card">

              <h3>
                50+
              </h3>

              <p>
                Departments
              </p>

            </div>

            <div className="login-stat-card">

              <h3>
                98%
              </h3>

              <p>
                Efficiency
              </p>

            </div>

          </div>

        </div>

        <div className="login-right-panel">

          <div className="login-form-card">

            <h2>
              Create Account
            </h2>

            <p>
              Register to continue
            </p>

            {

              error && (

                <div className="error-box">

                  {error}

                </div>

              )

            }

            <form
              onSubmit={
                handleSubmit
              }
            >

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={
                    formData.name
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={
                    formData.password
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={
                    formData.confirmPassword
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>

              <button
                type="submit"
                className="
                btn
                login-btn-v2
                "
              >

                Create Account

              </button>

            </form>

            <div
              className="
              auth-switch
              "
            >

              <span>

                Already have
                an account?

              </span>

              <Link
                to="/login"
              >

                Login

              </Link>

            </div>

            <div
              className="
              login-footer
              "
            >

              EmployeePro HR Portal

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;