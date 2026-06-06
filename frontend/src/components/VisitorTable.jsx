import React, { useState, useEffect } from "react";
import API from "../services/api";

const VisitorTable = () => {
  const [search, setSearch] = useState("");
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    try {
      const response = await API.get("/visitors");
      setVisitors(response.data);
    } catch (error) {
      console.log("Error fetching visitors:", error);
    }
  };

  const filteredVisitors = visitors.filter(
    (visitor) =>
      visitor.name?.toLowerCase().includes(search.toLowerCase()) ||
      visitor.email?.toLowerCase().includes(search.toLowerCase()) ||
      visitor.phone?.includes(search)
  );

  return (
    <div className="visitor-table-card">

      <div className="table-header">

        <div>
          <h2>Visitor Management</h2>
          <p>Manage office visitors and approvals</p>
        </div>

        <button className="btn">
          + Add Visitor
        </button>

      </div>

      <div className="visitor-search-wrapper">

        <input
          type="text"
          className="visitor-search-input"
          placeholder="Search by name, email or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Visitor</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Visit Date</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {filteredVisitors.length > 0 ? (
              filteredVisitors.map((visitor) => (

                <tr key={visitor.id}>

                  <td>{visitor.id}</td>

                  <td>

                    <div className="visitor-user">

                      <div className="visitor-avatar">
                        {visitor.name?.charAt(0)}
                      </div>

                      <span>{visitor.name}</span>

                    </div>

                  </td>

                  <td>{visitor.email}</td>

                  <td>{visitor.phone}</td>

                  <td>
                    {visitor.date || visitor.visitDate || "-"}
                  </td>

                  <td>

                    <span
                      className={
                        visitor.status === "Approved"
                          ? "status-badge status-active"
                          : "status-badge status-pending"
                      }
                    >
                      {visitor.status}
                    </span>

                  </td>

                </tr>

              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No Visitors Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default VisitorTable;