import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);

    alert("Login Successful");

    navigate("/dashboard");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="auth-header">

          <h1>Admin Login</h1>

          <p>
            Access Employee Management Dashboard
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />

          </div>

          <button
            type="submit"
            className="btn auth-btn"
          >
            Login
          </button>

        </form>

        <div className="auth-footer">

          <p>
            Visitor?
            <span
              className="auth-link"
              onClick={() => navigate("/")}
            >
              Register Here
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;