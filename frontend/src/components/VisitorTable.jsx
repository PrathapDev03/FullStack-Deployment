function VisitorTable() {

  const visitors = [
    {
      id: 1,
      name: "Ramesh Kumar",
      email: "ramesh@gmail.com",
      phone: "9876543210",
      visitDate: "2025-08-01"
    },
    {
      id: 2,
      name: "Sneha Sharma",
      email: "sneha@gmail.com",
      phone: "9876543211",
      visitDate: "2025-08-02"
    },
    {
      id: 3,
      name: "Kiran Patil",
      email: "kiran@gmail.com",
      phone: "9876543212",
      visitDate: "2025-08-03"
    },
    {
      id: 4,
      name: "Anjali Rao",
      email: "anjali@gmail.com",
      phone: "9876543213",
      visitDate: "2025-08-04"
    }
  ];

  return (
    <div className="card">

      <div className="table-header">
        <h2>Visitor Management</h2>
      </div>

      <div className="table-search">

        <input
          type="text"
          placeholder="Search Visitor..."
          className="search-box"
        />

      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Visit Date</th>
          </tr>

        </thead>

        <tbody>

          {visitors.map((visitor) => (

            <tr key={visitor.id}>

              <td>{visitor.id}</td>

              <td>{visitor.name}</td>

              <td>{visitor.email}</td>

              <td>{visitor.phone}</td>

              <td>{visitor.visitDate}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default VisitorTable;