import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Visitor() {

  const navigate = useNavigate();

  const [visitor, setVisitor] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setVisitor({
      ...visitor,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(visitor);

    alert("Visitor Registered Successfully");

    navigate("/employees");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="auth-header">

          <h1>Employee Management Portal</h1>

          <p>
            Please register to access the portal
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              onChange={handleChange}
              required
            />

          </div>

          <button
            type="submit"
            className="btn auth-btn"
          >
            Continue
          </button>

        </form>

        <div className="auth-footer">

          <p>
            Admin?
            <span
              className="auth-link"
              onClick={() => navigate("/login")}
            >
              Login Here
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Visitor;