import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      email: "",
      password: ""

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

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await API.post(
            "/login",
            formData
          );

        if (
          response.data.success
        ) {

          localStorage.setItem(

            "token",

            response.data.token

          );

          localStorage.setItem(

            "user",

            JSON.stringify(
              response.data.user
            )

          );

          localStorage.setItem(
            "isLoggedIn",
            "true"
          );

          navigate("/");

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
          "Login Failed"
        );

      }

    };

    useEffect(() => {

  document.body.classList.remove(
    "dark-theme"
  );

}, []);

  return (

    <div className="login-page">

      <div className="login-container">

        <div className="login-left-panel">

          <div>

            <h1>
              EmployeePro
            </h1>

            <h2>
              Enterprise HR Portal
            </h2>

            <p>

              Manage workforce,
              visitors,
              payroll,
              analytics and
              administration from
              one centralized platform.

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
              Welcome Back
            </h2>

            <p>
              Login to EmployeePro
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

              <button
                type="submit"
                className="btn login-btn-v2"
              >

                Login

              </button>

            </form>

            <div className="auth-switch">

              <span>

                Don't have an account?

              </span>

              <Link
                to="/register"
              >

                Register Now

              </Link>

            </div>

            <div className="login-footer">

              EmployeePro HR Portal

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;