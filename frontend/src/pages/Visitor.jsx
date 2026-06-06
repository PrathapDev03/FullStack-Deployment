import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useNotifications } from "../context/NotificationContext";
import API from "../services/api";

function Visitor() {

  const { addNotification } =
    useNotifications();

  const [visitor, setVisitor] =
    useState({

      name: "",
      email: "",
      phone: "",
      purpose: "",
      host: "",
      visitDate: ""

    });

  const handleChange = (e) => {

    setVisitor({

      ...visitor,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/visitors",
        visitor
      );

      addNotification(
        `Visitor ${visitor.name} Registered Successfully`
      );

      alert(
        "Visitor Registered Successfully"
      );

      setVisitor({

        name: "",
        email: "",
        phone: "",
        purpose: "",
        host: "",
        visitDate: ""

      });

    }

    catch (error) {

      console.log(error);

      alert(
        "Failed To Register Visitor"
      );

    }

  };

  return (

    <MainLayout>

      <div className="visitor-registration-page">

        <div className="hero-banner">

          <h1>
            Visitor Registration Portal
          </h1>

          <p>

            Register visitors,
            schedule office visits,
            assign hosts and
            manage approvals.

          </p>

        </div>

        <div className="visitor-registration-grid">

          <div className="form-card">

            <h2>
              Visitor Information
            </h2>

            <form
              onSubmit={handleSubmit}
            >

              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Visitor Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Visitor Name"
                    value={visitor.name}
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
                    placeholder="Enter Email"
                    value={visitor.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={visitor.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Host Employee
                  </label>

                  <input
                    type="text"
                    name="host"
                    placeholder="Employee Name"
                    value={visitor.host}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Purpose of Visit
                  </label>

                  <input
                    type="text"
                    name="purpose"
                    placeholder="Meeting / Interview / Client Visit"
                    value={visitor.purpose}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Visit Date
                  </label>

                  <input
                    type="date"
                    name="visitDate"
                    value={visitor.visitDate}
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

                  Register Visitor

                </button>

              </div>

            </form>

          </div>

          <div className="dashboard-card">

            <h2>
              Visitor Guidelines
            </h2>

            <div className="activity-feed">

              <div className="activity-item">
                Carry valid ID proof
              </div>

              <div className="activity-item">
                Follow office security policies
              </div>

              <div className="activity-item">
                Meet assigned host employee
              </div>

              <div className="activity-item">
                Complete entry & exit logs
              </div>

            </div>

            <h2
              style={{
                marginTop: "25px"
              }}
            >
              Today's Stats
            </h2>

            <div className="stats-list">

              <div className="stat-row">

                <span>
                  Visitors Today
                </span>

                <strong>
                  12
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Approved
                </span>

                <strong
                  className="positive"
                >
                  10
                </strong>

              </div>

              <div className="stat-row">

                <span>
                  Pending
                </span>

                <strong>
                  2
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default Visitor;